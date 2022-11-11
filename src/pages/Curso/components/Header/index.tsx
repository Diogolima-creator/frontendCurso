import * as C from './styles'
import {FontAwesomeIcon }from '@fortawesome/react-fontawesome';
import { faRocket} from '@fortawesome/free-solid-svg-icons';
import { Profile } from '../Profile';

export const Header = ({user}:any) => {

    return(
        <C.Container>
            <div className='left'>
                <FontAwesomeIcon icon={faRocket} className='icon'/>
                <h1>Curso NCSM</h1>
            </div>  
            <Profile user={user} />    
                
        </C.Container>
    )
}