import { ClassCourse } from '../ClassCourse';
import { MenuRight } from '../MenuRight';
import * as C from './styles';
import { useState, useEffect } from 'react';
//import { CourseAction, useCourse } from '../../context/CourseContext'
//import Cookies from 'universal-cookie';

export const Courses = (user:string) => {  

    const[classes, setClasses] = useState();
    //const{state,dispatch} = useCourse();
    //const cookies = new Cookies();
    //const jwt = cookies.get('jwt');
    //let classType = state.classType;


    return(
        <C.Container>
            <ClassCourse user={user} classes={classes} />
            <MenuRight user={user} classes={classes} />
        </C.Container>
    )
}