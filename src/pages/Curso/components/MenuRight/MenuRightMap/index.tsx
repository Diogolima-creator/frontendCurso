import { useState, useEffect } from 'react';
import * as C from './styles'
import{ CaretDown, CaretUp, CheckCircle } from 'phosphor-react'
import Cookies from 'universal-cookie';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import { setClassNow, setModuleNow, setVideoClassNow } from '../../../../../store/course';
import { updateClass } from '../../../../../http/user';
import { User } from '../../../../../entities/user';
import { Classes } from '../../../../../entities/classes';

interface MenuRightMapType {
    classeMenu?: Classes['Modules'][0],
    user?: User['profile']
}

export const MenuRightMap = (props:MenuRightMapType) => {
    const cookies = new Cookies;
    const lastClass = useAppSelector((state) => state.course.lastClass)
    const lastModule = useAppSelector((state) => state.course.lastModule)
    const dispatch = useAppDispatch();
    const id = cookies.get('id');
    const jwt = cookies.get('jwt');
    
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
        dispatch(setModuleNow((key+1)+'.'+Object.keys(props.classeMenu!)[key]))
        dispatch(setVideoClassNow(item[1]))
        let Class = item[0];
        let Module = (key+1)+'.'+Object.keys(props.classeMenu!)[key];
        let urlVideo = item[1];

        updateClass({id,classes:[Class,Module,urlVideo]},jwt);
    }

    useEffect(() => {
        
    },[lastClass])

    const getAllClasses = (key:number) =>{
        let semiTotal = 0;
        for(let i =0;i<key;i++){
            semiTotal = semiTotal + Object.values<Classes['Modules']>(props.classeMenu!)[i].length
        }
        return semiTotal
    }

    return(
        <C.Container>
            {Object.keys(props.classeMenu!).map((item,key) => 
            <div>
                <div id={key+'Header'} className='Map' onClick={() => handleWidth(key)}>
                    <div  className='Map-Header'>
                        <h1>{key+1+'. '+item}</h1>
                        {<CaretDown id={key+'Icon'} className="icon" />} 
                        {<CaretUp id={key+'IconUp'} className="iconUp" />} 
                    </div>
                    
                    <p>{(Object.values<Classes['Modules']>(props.classeMenu!)[key]).length} Aulas</p>
                </div>
                <div id={key+'Map'} className='Map-Values'>
                    {Object.values<Classes['Modules']>(props.classeMenu!)[key].map((item:any,label:number) => <p onClick={() => updateClassFunction(item,key)}><div className={parseInt(lastModule) >= key && parseInt(lastClass) >= 
                        (key > 0 ? getAllClasses(key) : 0)+label+1  ? 'ballCheckBoard' : 'ballCheck' }><CheckCircle 
                        className={parseInt(lastModule) >= key && parseInt(lastClass) >= (key > 0 ? getAllClasses(key) : 0)+label+1 ? 'Icon' : 'NoIcon' } /></div>{item[0]}</p>)}
                </div>
            
            </div>
            )}
        </C.Container>
    )
}