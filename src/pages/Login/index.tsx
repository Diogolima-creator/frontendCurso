import * as C  from './styles';
import { FontAwesomeIcon }from '@fortawesome/react-fontawesome';
import { faEye,faEyeLowVision } from '@fortawesome/free-solid-svg-icons'
import { Eye, EyeSlash } from 'phosphor-react'
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import Cookies from 'universal-cookie';
//import { useNotification } from '../../hooks/useNotification';
//import { Poupup } from '../../components/Poupup'

const Login = () => {

    //const cookies = new Cookies();
    const[passReveal,setpassReveal] = useState(false);
    const[loginMail,setloginMail] = useState(['Email','Username']);
    const jwt = cookies.get('jwt');
    const navigate = useNavigate();
    //const notify = useNotification();


    return(
        <C.Container>
            <div className='form-h1'>
                <h1>Nothing.CSM</h1>
                <p> <CountUp start={0} end={19999} duration={5}/> - people online right now </p>
            </div>
            <div className='form-login'>
                <form>
                    <label id='user'>{loginMail[1]}</label>
                    <input id='users' placeholder={loginMail[1]}></input>
                    <label>Password</label>
                    <div>
                        <input id="pass" type="password" placeholder='Password'></input>
                        { passReveal === false ? <EyeSlash /*onClick={changePass}*/  className='icon'/> : <Eye /*onClick={changePass}*/ className='icon' /> }
                    </div>
                    <div className='form-login-buttons'>
                        <p /*onClick={loginReverse}*/>Login using {loginMail[0]}</p>
                        <button type="submit" /*onClick={loginUser}*/>Login</button>
                        <button><Link to="/register" className='btn-register'>Sign up</Link></button>
                    </div>
                    
                </form>
            </div>     
            {/* {<Poupup top={'50'} left={'850'} text={notify.text} anima={notify.animaPop}/>} */}
        </C.Container>
    )
}

export default Login;