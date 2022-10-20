import { useState, useEffect } from 'react';
//import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router';
import { Header } from './components/Header';
import * as C from './styles';
import { MenuVertical } from './components/MenuVertical';
//import { useCourse } from "../../context/CourseContext";
import { Home } from './components/Home';
import { Courses } from './components/Courses';
import { Lives } from './components/Lives';
import { useAppSelector } from '../../hooks/redux';
import { useCookies } from "react-cookie";

const Curso = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['id','jwt']);
    const jwt = cookies.jwt;
    const[user,setUser] = useState([]);
    const id = cookies.id
    const menuSelected = useAppSelector((state)=> state.course.menuSelected)
    
    useEffect(()=>{
        
    },[])

    return(
        <C.Container>
            <Header user={user} />
            <div className='curse'>
                <MenuVertical />
                { menuSelected === 0 && <Home user={user} /> }
                { menuSelected === 1 && <Courses /> }
                { menuSelected === 2 && <Lives /> }
            </div>
        </C.Container>
    )
}

export default Curso;