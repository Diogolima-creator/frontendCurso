import * as C from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock,faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { useCourse,CourseAction } from '../../context/CourseContext';
import { useNotification } from '../../hooks/useNotification';
import { useAppDispatch } from '../../../../../hooks/redux';
import { setClassType } from '../../../../../store/course';

export const MenuRightOptions = ({level}:any) => {
    const dispatch = useAppDispatch()

    const changeClassType = (typeClass:string) => {

        dispatch(setClassType(typeClass))
    }

   
    return(
        <C.Container>
            <ul>
                <li onClick={() => changeClassType('JavaScript')}>Curso JavaScript <FontAwesomeIcon  icon={faLockOpen} className="icon" /> </li>
                <li onClick={(level === ('Platinum') || level === ('Diamond')) ? () => changeClassType('React') : ''}>Curso ReactJS {(level === ('Platinum') || level === ('Diamond') ) ? <FontAwesomeIcon  icon={faLockOpen} className="icon" /> : <FontAwesomeIcon icon={faLock} className="icon" />}</li>
                <li onClick={(level === ('Diamond')) ? () => changeClassType('NodeJS') : ''}>Curso NodeJS {level === ('Diamond') ? <FontAwesomeIcon  icon={faLockOpen} className="icon" /> : <FontAwesomeIcon icon={faLock} className="icon" />}</li>
            </ul>

        </C.Container>
    )
}