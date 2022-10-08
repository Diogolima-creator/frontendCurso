import * as C from './styles'
//import { useCourse, CourseAction } from '../../context/CourseContext';
import YouTube from 'react-youtube'
import { CheckCircle } from 'phosphor-react';
//import Cookies from 'universal-cookie';
//import { useNotification } from '../../hooks/useNotification';
//import { Poupup } from '../Poupup/index';
import { useEffect, useState } from 'react';


export const ClassCourse = () => {
    //const { state,dispatch } = useCourse();
    //const cookies = new Cookies;
    //const id = cookies.get('id');
    //const jwt = cookies.get('jwt');
    //const notify = useNotification();
    const[posModule,setposModule] = useState('');
    const[posClass,setposClass] = useState('');
  
    return(
        <C.Container>
            <div className='class-header'>
                {/* classes !== undefined && posModule !== '' && <div className="ballCheck"><CheckCircle className={/*state.lastModule >= posModule && state.lastClass >= getAllClasses(posModule,posClass) ? 'Icon' : 'NoIcon' ></div>*/}
                <div>
                    <h1>{'state.classNow'}</h1>
                    <p>Module {'state.moduleNow'}</p> 
                </div>
                
            </div>
            
            <div className='class-video'>
            <YouTube videoId={'state.videoClassNow'} />
            
                
            </div>
            {/*<Poupup top={'100'} left={'800'} text={notify.text} anima={notify.animaPop} />*/}
        </C.Container>
    )
    
}