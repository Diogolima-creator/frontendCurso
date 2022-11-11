import { ClassCourse } from '../ClassCourse';
import { MenuRight } from '../MenuRight';
import * as C from './styles';
import { useState, useEffect } from 'react';
//import { CourseAction, useCourse } from '../../context/CourseContext'
import Cookies from 'universal-cookie';
import { getClasses } from '../../../../http/classes';
import { useAppSelector } from '../../../../hooks/redux';

export const Courses = ({user}:any) => {  
    const[classes,setClasses] = useState();
    //const{state,dispatch} = useCourse();
    const cookies = new Cookies();
    const jwt = cookies.get('jwt');
    const classType = useAppSelector((state)=> state.course.classType)

    async function getClass(){
        let res = await getClasses(classType,jwt)
        setClasses(res)
        return res
    }

    useEffect(()=>{
        getClass()
        
    },[classType])
    
    return(
        <C.Container>
            <ClassCourse user={user} classes={classes} />
            <MenuRight user={user} classes={classes} />
        </C.Container>
    )
}