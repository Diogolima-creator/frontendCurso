import * as C from './styles';
import { CaretDown, CaretUp, Bell } from 'phosphor-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import { User } from '../../../../entities/user';

interface ProfileType {
    user?:User['profile']
}

export const Profile = ({user}:ProfileType) => {

    const[menuOpened,setmenuOppened] = useState(false);
    const cookies = new Cookies;
    
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
        cookies.remove('jwt')
        cookies.remove('id')
        navigate('/login')
        window.location.reload()
    }
    
    return(
        <C.Container>
            <Bell className="iconBell"/>
            <img src={user?.profilePic} alt=''/>
            <p>{user?.username}</p>
            { menuOpened === false ? <CaretDown className="iconDown" onClick={OpenMenu}/> : <CaretUp className="iconDown" onClick={OpenMenu}/> }
            <div id='menu'className='menu'>
                <ul>
                    <li onClick={updateAccount}>Account</li>
                    <li onClick={updateAccount}>Change Plan</li>
                    <li onClick={deleteCookies}>Logout</li>
                </ul>
            </div>
        </C.Container>
    )
}