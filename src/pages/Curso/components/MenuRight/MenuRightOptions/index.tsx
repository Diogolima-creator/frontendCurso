import * as C from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock,faLockOpen } from '@fortawesome/free-solid-svg-icons';
//import { useCourse,CourseAction } from '../../context/CourseContext';
//import { useNotification } from '../../hooks/useNotification';
//import { Poupup } from '../Poupup/index';

export const MenuRightOptions = ({level}:any) => {
    //const { state,dispatch } = useCourse();
    //const notify = useNotification();

    const changeClassType = (typeClass:any) => {
        
       /* dispatch({
            type: CourseAction.setclassType,
            payload: typeClass
        })*/
        
    }

   
    return(
        <C.Container>
            <ul>
                <li >Curso JavaScript <FontAwesomeIcon  icon={faLockOpen} className="icon" /> </li>
                <li >Curso ReactJS {(level === ('Platinum') || level === ('Diamond') ) ? <FontAwesomeIcon  icon={faLockOpen} className="icon" /> : <FontAwesomeIcon icon={faLock} className="icon" />}</li>
                <li >Curso NodeJS</li>
            </ul>
            {/* <Poupup top={'50'} left={'850'} text={notify.text} anima={notify.animaPop}/> */}
        </C.Container>
    )
}