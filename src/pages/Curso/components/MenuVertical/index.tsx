import styled from "styled-components";
import * as C from './styles';
import {FontAwesomeIcon }from '@fortawesome/react-fontawesome';
import { faHouse, faShuttleSpace, faCirclePlay, faJetFighter } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
//import { CourseAction, useCourse } from "../../context/CourseContext";

export const MenuVertical = () => {

    //const {state, dispatch} = useCourse();

    const changeSelect = (value: number) => {
      /*  document.getElementById(`${state.menuSelected}`)!.style.backgroundColor = 'transparent';
      document.getElementById(`${state.menuSelected}`)!.style.color = '#8b72a3';
       dispatch({
            type: CourseAction.setmenuSelected,
            payload: value
        })
      */
    }

    useEffect(()=> {
        /*document.getElementById(`${state.menuSelected}`)!.style.backgroundColor = '#241434';
        document.getElementById(`${state.menuSelected}`)!.style.color = 'white';*/
    },[/*state.menuSelected*/])

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