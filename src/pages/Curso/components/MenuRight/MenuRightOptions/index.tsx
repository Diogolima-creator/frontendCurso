import * as C from './styles';
import { Lock, LockOpen } from 'phosphor-react';
import { useAppDispatch } from '../../../../../hooks/redux';
import { setClassType } from '../../../../../store/course';

interface MenuRightOptions {
    level?: string
}
export const MenuRightOptions = ({level}:MenuRightOptions) => {
    const dispatch = useAppDispatch()

    const changeClassType = (typeClass:string) => {

        dispatch(setClassType(typeClass))
    }

   const nothing = () => {}

    return(
        <C.Container>
            <ul>
                <li onClick={() => changeClassType('JavaScript')}>Curso JavaScript <LockOpen className="icon" /> </li>
                <li onClick={(level === ('Platinum') || level === ('Diamond')) ? () => changeClassType('React') : ()=> nothing()}>Curso ReactJS {(level === ('Platinum') || level === ('Diamond') ) ? <LockOpen  className="icon" /> : <Lock className="icon" />}</li>
                <li onClick={(level === ('Diamond')) ? () => changeClassType('NodeJS') : ()=> nothing()}>Curso NodeJS {level === ('Diamond') ? <LockOpen className="icon" /> : <Lock className="icon" />}</li>
            </ul>

        </C.Container>
    )
}