import * as C from './styles';
import {FontAwesomeIcon }from '@fortawesome/react-fontawesome';
import { faUser,faAngleDown,faAngleUp, faBell} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
//import Cookies from 'universal-cookie';

export const Profile = ({user}:any) => {

    const[menuOpened,setmenuOppened] = useState(false);
    //const cookies = new Cookies;
    
    const OpenMenu = () => {
        if(document.getElementById('menu')!.style.display === 'none'){
            document.getElementById('menu')!.style.display = 'flex';
            setmenuOppened(true)
         }else{
            document.getElementById('menu')!.style.display = 'none'
            setmenuOppened(false)
         }
    }

    const navigate = useNavigate();

    const updateAccount = () => {
        navigate('/profile')
    }

    const deleteCookies = () =>{
        /*cookies.remove('jwt')
        cookies.remove('id')*/
        navigate('/login')
        window.location.reload()
    }


    return(
        <C.Container>
            <FontAwesomeIcon icon={faBell} className="iconBell"/>
            <img src={user.profilePic} alt=''/>
            <p>{user.username}</p>
            { menuOpened === false ? <FontAwesomeIcon icon={faAngleDown}className="iconDown" onClick={OpenMenu}/> : <FontAwesomeIcon icon={faAngleUp}className="iconDown" onClick={OpenMenu}/> }
            <div id='menu'className='menu'>
                <ul>
                    <li onClick={updateAccount}>Account</li>
                    <li>Change Plan</li>
                    <li onClick={deleteCookies}>Logout</li>
                </ul>
            </div>
        </C.Container>
    )
}