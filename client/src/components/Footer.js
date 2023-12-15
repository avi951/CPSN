import Mylogo from '../images/CPSN.png'
import './home.scss';


function footer ()
{
    return(

<div className="footerhome">
        <div className="logo">
        <img className="logoimage" src={Mylogo} alt="logoimage"/>
        </div>
       
             <div>
                  <h2> CPSN is website providing all services for commercial buildings</h2>  
            </div>
        <div className="footerdata">
                <i className="fa fa-facebook"></i>  
                <i className="fa fa-instagram"> </i>
                <i className="fa fa-twitter"> </i>
        </div>



</div>
    );
}
export default footer;