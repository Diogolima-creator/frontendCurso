import { useState, useEffect } from 'react';
import * as C from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown,faAngleUp} from '@fortawesome/free-solid-svg-icons';
import Cookies from 'universal-cookie';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import { setClassNow, setModuleNow, setVideoClassNow } from '../../../../../store/course';
import { updateClass } from '../../../../../http/user';

export const MenuRightMap = ({classeMenu}:any, {user}:any) => {
    const cookies = new Cookies;
    const lastClass = useAppSelector((state) => state.course.lastClass)
    const lastModule = useAppSelector((state) => state.course.lastModule)
    const dispatch = useAppDispatch();
    const id = cookies.get('id');
    const jwt = cookies.get('jwt');
    console.log(lastClass, lastModule)
    
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

    const updateClassFunction = (item:any,key:number) => {
        dispatch(setClassNow(item[0]))
        dispatch(setModuleNow((key+1)+'.'+Object.keys(classeMenu)[key]))
        dispatch(setVideoClassNow(item[1]))
        let Class = item[0];
        let Module = (key+1)+'.'+Object.keys(classeMenu)[key];
        let urlVideo = item[1];

        updateClass({id,classes:[Class,Module,urlVideo]},jwt);
    }

    useEffect(() => {
        
    },[lastClass])

    const getAllClasses = (key:number) =>{
        let semiTotal = 0;
        for(let i =0;i<key;i++){
            semiTotal = semiTotal + Object.values(classeMenu)[i].length
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
                    
                    <p>{(Object.values(classeMenu)[key]).length} Aulas</p>
                </div>
                <div id={key+'Map'} className='Map-Values'>
                    {Object.values(classeMenu)[key].map((item:any,label:number) => <p onClick={() => updateClassFunction(item,key)}><div className={parseInt(lastModule) >= key && parseInt(lastClass) >= 
                        (key > 0 ? getAllClasses(key) : 0)+label+1  ? 'ballCheckBord' : 'ballCheck' }><FontAwesomeIcon 
                        icon={faCheckCircle} className={parseInt(lastModule) >= key && parseInt(lastClass) >= (key > 0 ? getAllClasses(key) : 0)+label+1 ? 'Icon' : 'NoIcon' } /></div>{item[0]}</p>)}
                </div>
            
            </div>
            )}
        </C.Container>
    )
}