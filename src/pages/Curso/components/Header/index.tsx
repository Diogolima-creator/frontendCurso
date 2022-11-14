import * as C from './styles'
import { RocketLaunch} from 'phosphor-react';
import { Profile } from '../Profile';
import { User } from '../../../../entities/user';

interface HeaderType {
    user?: User['profile']
}

export const Header = ({user}:HeaderType) => {

    return(
        <C.Container>
            <div className='left'>
                <RocketLaunch className='icon'/>
                <h1>Curso NCSM</h1>
            </div>  
            <Profile user={user} />    
                
        </C.Container>
    )
}