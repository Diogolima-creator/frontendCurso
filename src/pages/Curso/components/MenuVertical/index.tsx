import * as C from './styles';
import {FontAwesomeIcon }from '@fortawesome/react-fontawesome';
import { faHouse, faShuttleSpace, faCirclePlay, faJetFighter } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { setMenuSelected } from "../../../../store/course";

export const MenuVertical = () => {

    const menuSelected = useAppSelector((state)=> state.course.menuSelected)
    const dispatch = useAppDispatch()

    const changeSelect = (value: number) => {
        document.getElementById(`${menuSelected}`)!.style.backgroundColor = 'transparent';
        document.getElementById(`${menuSelected}`)!.style.color = '#8b72a3';
        dispatch(setMenuSelected(value))
      
    }

    useEffect(()=> {
        document.getElementById(`${menuSelected}`)!.style.backgroundColor = '#241434';
        document.getElementById(`${menuSelected}`)!.style.color = 'white';
    },[menuSelected])

    return(
        <C.Container>
            <div className="menu">
                <div onClick={() => changeSelect(0)} id='0' className="menu-items">
                    <FontAwesomeIcon icon={faHouse} className="icon"/>
                    <p>Home</p>
                </div>
                <div onClick={() => changeSelect(1)} id='1' className="menu-items"> 
                    <FontAwesomeIcon icon={faShuttleSpace} className="icon"/>
                    <p>Classes</p>
                </div>
                <div onClick={() => changeSelect(2)} id='2' className="menu-items"> 
                    <FontAwesomeIcon icon={faCirclePlay} className="icon"/>
                    <p>Live</p>
                </div>
                <div onClick={() => changeSelect(3)} id='3' className="menu-items"> 
                    <FontAwesomeIcon icon={faJetFighter} className="icon"/>
                    <p>Training</p>
                </div>
            </div>
        </C.Container>
    )
}