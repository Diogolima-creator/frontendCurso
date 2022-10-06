import { useState, useEffect } from 'react';
//import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router';
import { Header } from '../../components/Header';
import * as C from './styles';
import { MenuY } from '../../components/MenuY';
//import { useCourse } from "../../context/CourseContext";
import { Home } from '../../components/Home';
import { Courses } from '../../components/Courses';
import { Lives } from '../../components/Lives';

const Curso = () => {
  //  const {state} = useCourse();
  //  const cookies = new Cookies();
    const navigate = useNavigate();
  //  const jwt = cookies.get('jwt');
    const[user,setUser] = useState([]);
    //const id = cookies.get('id')

  
    
    return(
        <C.Container>
            <Header user={user} />
            <div className='curse'>
                <MenuY />
                { state.menuSelected === 0 && <Home user={user} /> }
                { state.menuSelected === 1 && <Courses user={user} /> }
                { state.menuSelected === 2 && <Lives /> }
            </div>
        </C.Container>
    )
}

export default Curso;