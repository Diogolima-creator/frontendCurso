import { useState, useEffect } from 'react';
import * as C from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown,faAngleUp} from '@fortawesome/free-solid-svg-icons';
//import { useCourse,CourseAction } from '../../context/CourseContext';
import Cookies from 'universal-cookie';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

export const MenuRightMap = ({classeMenu,user}:any) => {
    //const cookies = new Cookies;
    //const { state ,dispatch } = useCourse();
    //const id = cookies.get('id');
    //const jwt = cookies.get('jwt');
    
    
    const handleWidth = (key:number) => {
        if( document.getElementById(`${key+'Map'}`)!.style.display !== 'none' ){
            document.getElementById(`${key+'Map'}`)!.style.display = 'none';
            document.getElementById(`${key+'Icon'}`)!.style.display = 'flex';
            document.getElementById(`${key+'IconUp'}`)!.style.display = 'none';
            document.getElementById(`${key+'Header'}`)!.style.backgroundColor = 'transparent';
        }else{
            document.getElementById(`${key+'Map'}`)!.style.display = 'block';
            document.getElementById(`${key+'Icon'}`)!.style.display = 'none';
            document.getElementById(`${key+'IconUp'}`)!.style.display = 'flex';
            document.getElementById(`${key+'Header'}`)!.style.backgroundColor = '#550d86';
        }   
    }


    const updateClass = (item:string,key:number) => {
        /*dispatch({
            type: CourseAction.setclassNow,
            payload: item[0]
        })
        dispatch({
            type: CourseAction.setmoduleNow,
            payload: (key+1)+'.'+Object.keys(classeMenu)[key]
          })
        dispatch({
            type: CourseAction.setvideoClassNow,
            payload: item[1]
        })*/
        
        let Class = item[0];
        let Module = (key+1)+'.'+Object.keys(classeMenu)[key];
        let urlVideo = item[1];

        //fetchClassUser(Class,Module,urlVideo);
    }

    useEffect(() => {
        
    },[/*state.lastClass*/])

    const getAllClasses = (key:number) =>{
        let semiTotal = 0;
        for(let i =0;i<key;i++){
            semiTotal = semiTotal //+ Object.values(classeMenu)[i].length
        }
        return semiTotal
    }

    return(
        <C.Container>
            {Object.keys(classeMenu).map((item,key) => 
            <div>
                <div id={key+'Header'} className='Map' onClick={() => handleWidth(key)}>
                    <div  className='Map-Header'>
                        <h1>{key+1+'. '+item}</h1>
                        {<FontAwesomeIcon icon={faAngleDown} id={key+'Icon'} className="icon" />} 
                        {<FontAwesomeIcon icon={faAngleUp} id={key+'IconUp'} className="iconUp" />} 
                    </div>
                    
                    <p>{/*(Object.values(classeMenu)[key]).length*/} Aulas</p>
                </div>
                <div id={key+'Map'} className='Map-Values'>
                    {/*Object.values(classeMenu)[key].map((item,label) => <p onClick={() => updateClass(item,key)}><div className={state.lastModule >= key && state.lastClass >= 
                        (key > 0 ? getAllClasses(key) : 0)+label+1  ? 'ballCheckBord' : 'ballCheck' }><FontAwesomeIcon 
                    icon={faCheckCircle} className={state.lastModule >= key && state.lastClass >= (key > 0 ? getAllClasses(key) : 0)+label+1 ? 'Icon' : 'NoIcon' } /></div>{item[0]}</p>)*/}
                </div>
            
            </div>
            )}
        </C.Container>
    )
}