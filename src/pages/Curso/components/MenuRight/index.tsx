import * as C from './styles'
import { CaretDown } from 'phosphor-react';
import { MenuRightMap } from './MenuRightMap';
import { MenuRightOptions } from './MenuRightOptions';

import { Classes } from '../../../../entities/classes';
import { User } from '../../../../entities/user';


interface MenuRightType {
    classes?: Classes,
    user?: User['profile']
}
export const MenuRight = (props:MenuRightType) => {
    
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
                {props.classes !== undefined && props.classes.Type === 'JavaScript' && <div className='img'>JS</div>}
                {props.classes !== undefined && props.classes.Type === 'React' && <img src='https://thebhwgroup.com/sites/default/images/react_logo.png' alt = '' ></img>}
                <div className='Menu-header-text'>
                    <p className='title'>Curso {props.classes !== undefined  ? props.classes.Type : ''}</p>
                    <p className='author'>{props.classes !== undefined ? props.classes.Author : ''}</p>
                    
                </div>
                <CaretDown onClick = {openMenuOptions} className="icon"/>
                <div id='MenuRightOptions'>
                    <MenuRightOptions />
                </div>
                
            </div>
            <div className='Menu-Modules-list'>
                {props.classes !== undefined && <MenuRightMap user={props.user} classeMenu={props.classes.Modules[0]}/> }
            </div>
        </C.Container>
    )
}