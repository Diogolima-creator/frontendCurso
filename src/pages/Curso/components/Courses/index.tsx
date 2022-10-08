import { ClassCourse } from '../ClassCourse';
import { MenuRight } from '../MenuRight';
import * as C from './styles';
import { useState, useEffect } from 'react';
//import { CourseAction, useCourse } from '../../context/CourseContext'
//import Cookies from 'universal-cookie';

export const Courses = () => {  

    const[classes, setClasses] = useState();
    //const{state,dispatch} = useCourse();
    //const cookies = new Cookies();
    //const jwt = cookies.get('jwt');
    //let classType = state.classType;


    return(
        <C.Container>
            <ClassCourse  />
            <MenuRight  />
        </C.Container>
    )
}