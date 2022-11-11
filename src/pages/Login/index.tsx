import * as C from './styles';
import { Eye, EyeSlash } from 'phosphor-react'
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { loginEmail, loginUsername } from '../../http/login';
import Cookies from 'universal-cookie'
//import { useNotification } from '../../hooks/useNotification';
//import { Poupup } from '../../components/Poupup'

const Login = () => {

    const[passReveal,setPassReveal] = useState(false);
    const[loginMail,setLoginMail] = useState(['Email','Username'])
    const navigate = useNavigate()
    const changePassReveal = () => {if(passReveal === false){setPassReveal(true), (document.getElementById('pass') as HTMLInputElement).type = 'text'}else{setPassReveal(false), (document.getElementById('pass') as HTMLInputElement).type = 'password'}}
    const toggleLoginMail = () => {if(loginMail[0] === 'Email'){setLoginMail(['Username','Email'])}else{setLoginMail(['Email','Username'])}}
    const cookies = new Cookies();

    async function loginUser(){
        let input = (document.getElementById('users') as HTMLInputElement).value
        let password = (document.getElementById('pass') as HTMLInputElement).value

        if(loginMail[1] === 'Email'){ var res = await loginEmail(input, password) }
        if(loginMail[1] === 'Username'){ var res = await loginUsername(input, password) }

        cookies.set('id',res!._id,{
            secure:true,
            sameSite:true,
            expires: new Date(new Date().getTime() + 86400 * 1000)
        })
        cookies.set('jwt',res!.accessToken,{
            secure:true,
            sameSite:true,
            expires: new Date(new Date().getTime() + 86400 * 1000)
        })

        if(res!.status === 'ok'){
            navigate('/curso')
        }else{
            console.log(res!.error)
        }
    }   

    useEffect(()=>{
        if(cookies.get('jwt') || cookies.get('id')){ navigate('/curso')}
    },[])

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
                        <input id="pass" type="password" placeholder='Password' ></input>
                        {passReveal === false ? <EyeSlash onClick={changePassReveal} className='icon'/> : <Eye onClick={changePassReveal} className='icon'/>}
                    </div>
                    <div className='form-login-buttons'>
                        <p onClick={toggleLoginMail}>Login using {loginMail[0]}</p>
                        <button type="button" onClick={() => loginUser()}>Login</button>
                        <button><Link to="/register" className='btn-register'>Sign up</Link></button>
                    </div>
                </form>
            </div>     
            {/* {<Poupup top={'50'} left={'850'} text={notify.text} anima={notify.animaPop}/>} */}
        </C.Container>
    )
}

export default Login;