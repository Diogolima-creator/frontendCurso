import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router';
import { Header } from './components/Header';
import * as C from './styles';
import { MenuVertical } from './components/MenuVertical';
import { Home } from './components/Home';
import { Courses } from './components/Courses';
import { Lives } from './components/Lives';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { getProfile } from '../../http/user';
import { User } from '../../entities/user';
import { setProfilePic, setUsername } from '../../store/user';


const Curso = () => {
    const cookies = new Cookies();
    const navigate = useNavigate()
    const jwt = cookies.get('jwt');
    const[user,setUser] = useState<User['profile']>();
    const id = cookies.get('id');
    const menuSelected = useAppSelector((state)=> state.course.menuSelected)
    const dispatch = useAppDispatch()

    async function profileRequest(){
        let res:User = await getProfile(id,jwt)
        setUser(res.profile)
        dispatch(setUsername(res.profile.username))
        dispatch(setProfilePic(res.profile.profilePic))
    }
    
    useEffect(()=>{
        if(jwt === undefined || id === undefined){ navigate('/login')}
    },[jwt])

    useEffect(() =>{
        profileRequest()
    },[])
    
    return(
        <C.Container>
            <Header user={user} />
            <div className='curse'>
                <MenuVertical />
                { menuSelected === 0 && <Home user={user} /> }
                { menuSelected === 1 && <Courses user={user}/> }
                { menuSelected === 2 && <Lives /> }
            </div>
        </C.Container>
    )
}

export default Curso;