import * as C from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { MenuRightMap } from './MenuRightMap';
import { MenuRightOptions } from './MenuRightOptions';
import { useState } from 'react';

export const MenuRight = () => {
    
    const[classes, setClasses] = useState(undefined)

    const openMenuOptions = () => {
        if(document.getElementById('MenuRightOptions')!.style.display !== 'flex'){
            document.getElementById('MenuRightOptions')!.style.display = 'flex';
        }else{
            document.getElementById('MenuRightOptions')!.style.display = 'none';
        }
    }
    
    return(
        <C.Container>
            <div className='Menu-header'>
                {classes !== undefined /*&& classes.Type === 'JavaScript' */&& <div className='img'>JS</div>}
                {classes !== undefined /*&& classes.Type === 'React' */&& <img src='https://thebhwgroup.com/sites/default/images/react_logo.png' alt = '' ></img>}
                <div className='Menu-header-text'>
                    <p className='title'>Curso {classes !== undefined  /*classes.Type : ''*/}</p>
                    <p className='author'>{classes !== undefined /*classes.Author : ''*/}</p>
                    
                </div>
                <FontAwesomeIcon onClick = {openMenuOptions} icon={faAngleDown} className="icon"/>
                <div id='MenuRightOptions'>
                    <MenuRightOptions />
                </div>
                
            </div>
            <div className='Menu-Modules-list'>
                {classes !== undefined && <MenuRightMap /> }
            </div>
        </C.Container>
    )
}