import './home.scss';
import { Link } from 'react-router-dom';

function Register ()
{
    return(

        <div className='registerbox'>
            <div className='borderline'>
            <h1> Register your services with us!</h1>
            <p> Id ullamco aliqua mollit aliqua reprehenderit officia labore irure ut incididunt. Duis tempor dolor cupidatat aute amet proident <br/> sint exercitation enim do consectetur. Cupidatat nisi amet laboris adipisicing dolore excepteur ipsum excepteur.
            </p>
            <Link to='/regform'>
            <button className="btn-register">
                Register Now!
            </button>
            </Link>
            </div>
        </div>

    );
}
export default Register;