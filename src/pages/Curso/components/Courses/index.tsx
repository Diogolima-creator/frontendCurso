import { ClassCourse } from '../ClassCourse';
import { MenuRight } from '../MenuRight';
import * as C from './styles';
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { getClasses } from '../../../../http/classes';
import { useAppSelector } from '../../../../hooks/redux';
import { User } from '../../../../entities/user';
import { Classes } from '../../../../entities/classes';

export interface CoursesType{
    user?:User['profile']
}

export const Courses = (props:CoursesType) => {  
    const[classes,setClasses] = useState<Classes>();
    const cookies = new Cookies();
    const jwt = cookies.get('jwt');
    const classType = useAppSelector((state)=> state.course.classType)

    async function getClass(){
        let res:Classes = await getClasses(classType,jwt)
        setClasses(res)
        return res
    }

    useEffect(()=>{
        getClass()
        
    },[classType])
    
    return(
        <C.Container>
            <ClassCourse user={props.user} classes={classes} />
            <MenuRight user={props.user} classes={classes} />
        </C.Container>
    )
}