import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

const app = express();
console.log(process.env);
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(cors());
console.log(process.env.MONGO_URI);
const CONNECTION_URL = process.env.MONGO_URI;

const PORT = process.env.PORT;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Connection successfull at port number: ${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));

//Schema
const userSchema = new mongoose.Schema({
  building: {
    type: String,
    trim: true,
  },
  floorNumber: {
    type: Number,
    default: "NA",
  },
  block: {
    type: String,
    default: "NA",
  },
  officeNumber: {
    type: Number,
    default: "NA",
  },
  status: {
    type: String,
    default: "Unoccupied",
  },
  comName: {
    type: String,
  },
  email: {
    type: String,
    default: "NA",
    trim: true,
    // validate(value){
    //     if(!validator.isEmail(value)){
    //         throw new Error(`${value} is inValid`)
    //     }
    // }
  },
  phone: {
    type: String,
    default: "NA",
    trim: true,
    // validate: {
    // validator: function(v) {
    // return /^[0-9]{10}$/.test(v);
    // },
    // message: '{VALUE} is not a valid phone number!'
    // }
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  pincode: {
    type: Number,
  },
  service: {
    type: Array,
    default: ["NA"],
  },
});

//Model
const tableData = new mongoose.model("Table", userSchema);

// REACT --- MONGODB
app.post("/register", jsonParser, function (req, res) {
  const createDocument = async () => {
    let services = [];

    eval(req.body).category.forEach((element) => {
      services.push(element.service);
    });

    try {
      console.log(eval(req.body));
      const data = new tableData({
        building: eval(req.body).building,
        floorNumber: eval(req.body).floorNumber,
        block: eval(req.body).block,
        officeNumber: eval(req.body).officeNumber,
        status: eval(req.body).status,
        comName: eval(req.body).comName,
        email: eval(req.body).email,
        phone: eval(req.body).phone,
        city: eval(req.body).city,
        state: eval(req.body).state,
        pincode: eval(req.body).pincode,
        service: services,
      });

      const result = await tableData.insertMany(data);
      console.log("CREATE DOCUMENT");
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };
  createDocument();
});

//MONGODB ---> REACT
app.get("/getUsers", jsonParser, function (req, res) {
  const getDocument = async () => {
    try {
      const result1 = await tableData.find().sort({ officeNumber: 1 });
      console.log("PRINT DOCUMENT");
      console.log(result1);
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(result1));
    } catch (err) {
      console.log(err);
    }
  };
  const updateDocument = async () => {
    try {
      await tableData.updateMany({ block: "" }, { block: "NA" });
      await tableData.updateMany({ email: "" }, { email: "NA" });
      await tableData.updateMany({ phone: "" }, { phone: "NA" });
    } catch (err) {
      console.log(err);
    }
  };
  getDocument();
  updateDocument();
});

app.get("/getBuildings", jsonParser, function (req, res) {
  const getBuildings = async () => {
    try {
      const buildingName = await tableData.distinct("building");
      // console.log(buildingName);
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(buildingName));
    } catch (err) {
      console.log(err);
    }
  };
  getBuildings();
});

app.get("/getBuildingsName/:building", jsonParser, function (req, res) {
  const getBuildingName = async () => {
    try {
      // const buidlingName = await tableData.distinct('building');
      const name = req.params.building;
      const buildingDetails = [];
      const other = [];
      console.log("Building name: " + name);

      tableData
        .find({})
        .where("building")
        .equals(name)
        .exec(function (err, data) {
          if (err) {
            console.log(err);
            console.log("error returned");
            res.send(500, { error: "Failed insert" });
          }

          if (!data) {
            res.send(403, { error: "Authentication Failed" });
          }
          res.send(200, data);
          console.log(data);
        });

      // var query = tableData.find({},{ building: name })
      // // console.log("Filter:", query)

      // var filter = query.limit(45)
      // console.log("Filter:", filter)

      // const details = await tableData.aggregate([{
      //     $filter:{
      //         building:{$eq:name}
      //     }
      // }])
      // console.log("Building Data"+details);
      // res.end(JSON.stringify(details))

      // const data = buidlingName.forEach((e)=>{

      //     if(name === e){

      //         console.log("Yes it is matching")
      //         buildingDetails.push(e);

      //     }
      //     else{
      //         console.log('Building is not provided.');
      //         other.push(e);

      //     }
      // })

      // const data = await tableData.aggregate({
      //     $filter:{building:{$eq:name}}
      // })
      // console.log(data);

      // console.log(buildingDetails);

      // res.end(JSON.stringify(buildingDetails))
    } catch (err) {
      console.log(err);
    }
  };
  getBuildingName();
});
if (process.env.NODE_ENV == "production") {
  app.use(express.static("./client/build"));
}
