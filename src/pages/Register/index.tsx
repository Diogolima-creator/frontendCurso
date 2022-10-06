import * as C from './styles';
import { useState } from 'react';
import CountUp from 'react-countup';
import { Link, useNavigate } from 'react-router-dom';
//import Cookies from 'universal-cookie';
//import { useNotification } from '../../hooks/useNotification';
//import { Poupup } from '../../components/Poupup';

const Register = () => {
    
    const[plan,setPlan] = useState(4);
    const[username,setUser] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPass] = useState('');
    const[cpass,setCpass] = useState('');
    //const cookies = new Cookies;
    let navigate = useNavigate();
    //const notify = useNotification();

    const changeForm = () => {

        setUser((document.getElementById('user') as HTMLInputElement).value);
        setEmail((document.getElementById('email')as HTMLInputElement).value);
        setPass((document.getElementById('pass') as HTMLInputElement).value);
        setCpass((document.getElementById('cpass') as HTMLInputElement).value);
    
        if((document.getElementById('user') as HTMLInputElement).value !== '' && (document.getElementById('email') as HTMLInputElement).value !== '' && (document.getElementById('pass') as HTMLInputElement).value !== '' && (document.getElementById('cpass') as HTMLInputElement).value !== ''){  
            if((document.getElementById('pass') as HTMLInputElement).value === (document.getElementById('cpass') as HTMLInputElement).value){
                if((document.getElementById('pass') as HTMLInputElement).value.length > 8){
                    document.getElementById('form-login')!.style.display = 'none';
                    document.getElementById('form-level')!.style.display = 'flex';
                }else{
                    document.getElementById('passdont2')!.style.display = 'none';
                    document.getElementById('passdont')!.style.display = 'none';
                    document.getElementById('passdont1')!.style.display = 'flex';
                }
            }else{
                document.getElementById('passdont2')!.style.display = 'none';
                document.getElementById('passdont')!.style.display = 'flex';
            }
            
        }else{
            document.getElementById('passdont2')!.style.display = 'flex';
        }
    }

    const changeBack = () => {
        document.getElementById('form-login')!.style.display = 'flex';
        document.getElementById('form-level')!.style.display = 'none';
    }

    const changeSelect = (id:number,color:string) => {
        if(plan !== 4){
            document.getElementById(`${plan}`)!.style.border = '2px solid #471671'
        }
        
        document.getElementById(`${id}`)!.style.border = `2px solid ${color}`;
        setPlan(id)
    }

    return(
        <C.Container>
            <div className='form-h1'>
                <h1>Nothing.CSM</h1>
                <p> <CountUp start={0} end={19999} duration={5}/> - people online right now </p>
            </div>
            <div id='form-login' className='form-login'>
                <form>
                    <p id='passdont' className='passDONT'>Passwords don't match</p>
                    <p id='passdont1' className='passDONT'>Passwords must be longer than 8 characters</p>
                    <p id='passdont2' className='passDONT'>Complete the fields</p>
                    <label>Username</label>
                    <input id='user' type='text' placeholder='Username'/>
                    <label>Email</label>
                    <input id='email' type='email' placeholder='Email'/>
                    <label>Password</label>
                    <input id="pass" type="password" placeholder='Password'/>
                    <label>Confirm Password</label>
                    <input id="cpass" type="password" placeholder='Confirm Password'/>
                    <div className='form-login-buttons'>
                        <a onClick={changeForm} className='btn-register'>Sign in</a>
                        <button ><Link to="/login" className='btn-login'>I already have an account</Link></button>             
                    </div>
                    
                </form>
            </div>
            <div id='form-level' className='form-level'>
                <p className='title'>Plans</p>
                <p id='passdont4' className='passDONT'>Select a PLAN!</p>
                <div  className='form-plans'>
                    <div onClick={() => changeSelect(0,'gold')} id='0' className='form-plan'>
                        <p className='gold'>Plan Gold</p>
                        <p>$ 49,99</p>
                        <p>10 Classes</p>
                        <p className='gold'>Java Script</p>
                    </div>
                    <div onClick={() => changeSelect(1,'#e5e4e2')} id='1' className='form-plan'>
                        <p className='plat'>Plan Plat</p>
                        <p>$ 149,99</p>
                        <p>75 Classes</p>
                        <p className='plat'>Java Script, ReactJS</p>
                    </div>
                    <div onClick={() => changeSelect(2,'#b9f2ff')} id='2' className='form-plan'>
                        <p className='diamond'>Plan Diamond</p>
                        <p>$ 349,99</p>
                        <p>All Classes</p>
                        <p className='diamond'>Java Script,ReactJS,NodeJS</p>
                    </div>
                </div>
                <div>
                    <button onClick={changeBack}>Back</button>
                    <button className='btn-complete'>Complete</button>
                </div>
            </div>
            { /*<Poupup top={'50'} left={'850'} text={notify.text} anima={notify.animaPop */}
        </C.Container>
    )
}

export default Register;