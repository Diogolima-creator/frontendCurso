import * as C from './styles'
import YouTube from 'react-youtube'
import Cookies from 'universal-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { setClassNow, setFirstOpen, setLastClass, setLastModule, setModuleNow, setVideoClassNow } from '../../../../store/course';
import { updateClass, updateLastClass } from '../../../../http/user'; 

export const ClassCourse = ({classes,user}:any) => {
    const firstOpen = useAppSelector((state)=> state.course.firstOpen)
    const moduleNow = useAppSelector((state)=> state.course.moduleNow)
    const classNow = useAppSelector((state)=> state.course.classNow)
    const lastClass = useAppSelector((state)=> state.course.lastClass)
    const lastModule = useAppSelector((state)=> state.course.lastModule)
    const videoClassNow = useAppSelector((state)=> state.course.videoClassNow)
    const dispatch = useAppDispatch()
    const cookies = new Cookies;
    const id = cookies.get('id');
    const jwt = cookies.get('jwt');
    const[posModule,setposModule] = useState('');
    const[posClass,setposClass] = useState('');
    
    if(firstOpen !== true){
        dispatch(setClassNow(user.classes[0]))
        dispatch(setModuleNow(user.classes[1]))
        dispatch(setVideoClassNow(user.classes[2]))
        dispatch(setFirstOpen(true))
        
    }

    const opts = {
        height: '650',
        width: '1150',
        playerVars: {
          autoplay: 1,
          origin: 'https://localhost:3000'
        }
    }

    
    const getAllClasses = (mod:number,classPos:number) => {
        if(mod === 0){
            return classPos+1
        }else{
            let TamTotal = 0;
            let TamSemiTotal = 0;

            for(let i = 0;i<=mod;i++){
                TamTotal = TamTotal + Object.values(classes.Modules[0])[i].length;
            }

            for(let i= 0;i<mod;i++){
                TamSemiTotal = TamSemiTotal + Object.values(classes.Modules[0])[i].length;
            }

            return (TamTotal-(TamTotal-(TamSemiTotal+classPos+1)))
        }
    }

    function EndTheVideo(event:any) {
        let words = moduleNow.split('.');
        let ModulePos = Object.keys(classes.Modules[0]).findIndex((item) => item === words[1]);
        let classPos = Object.values(classes.Modules[0])[ModulePos].findIndex((item:any) => item[0] === classNow);
        
        if(Object.values(classes.Modules[0])[ModulePos].length-1 === classPos && Object.keys(classes.Modules[0]).length-1 === ModulePos){
            alert('Ultima Aula e Ultimo Modulo')        
        }else if(Object.values(classes.Modules[0])[ModulePos].length-1 === classPos){
            let nextClassArray = (Object.values(classes.Modules[0])[ModulePos+1])[0]
            let nextModuleName = (Object.keys(classes.Modules[0]))[ModulePos+1]

            dispatch(setModuleNow((ModulePos+2)+'.'+nextModuleName))
            dispatch(setClassNow(nextClassArray[0]))
            dispatch(setVideoClassNow(nextClassArray[1]))

            let Class = nextClassArray[0];
            let Module = (ModulePos+2)+'.'+nextModuleName;
            let urlVideo = nextClassArray[1];
            let content = {id,Class,Module,urlVideo};
            updateClass(content, jwt)
            console.log('oi')

            if(classPos === parseInt(user.LastClasses[1])+1 && ModulePos >= user.LastClasses[0]){
                updateLastClass({id,} ,jwt);
                dispatch(setLastClass(getAllClasses(ModulePos,classPos)));
                dispatch(setLastModule(ModulePos+1));
            }
        }else{
            let nextModuleName = (Object.keys(classes.Modules[0]))[ModulePos]
            let nextClassArray = (Object.values(classes.Modules[0])[ModulePos])[classPos+1]
            
            
            setTimeout(() => {
                            
                            dispatch(setClassNow(nextClassArray[0]))
                            dispatch(setVideoClassNow(nextClassArray[1]))

                            let Class = nextClassArray[0];
                            let Module = (ModulePos+1)+'.'+nextModuleName;
                            let urlVideo = nextClassArray[1];

                            updateClass({id,classes:[Class,Module,urlVideo]}, jwt);
                           
                            console.log(classPos)
                            console.log(user.LastClasses[1]+1)
                            if(classPos === (user.LastClasses[1]+1) && ModulePos >= user.LastClasses[0]){
                                
                                updateLastClass({id, LastClasses:[posModule, posClass]}, jwt);
                                
                                dispatch(setLastClass(getAllClasses(ModulePos,classPos)))
                                dispatch(setLastModule(ModulePos))
                            }
                            
            }, 3300);

            
        }
        
    }

    
    if(classes !== undefined && posModule === ''){
        let words = moduleNow.split('.');
        let ModulePos = Object.keys(classes.Modules[0]).findIndex((item) => item === words[1]);
        let classPos = Object.values(classes.Modules[0])[ModulePos].findIndex((item:any) => item[0] === classNow);
        setposModule(ModulePos.toString());
        setposClass(classPos.toString());
        
        dispatch(setLastClass(getAllClasses(user.LastClasses[0],user.LastClasses[1])))
        dispatch(setLastModule(user.LastClasses[0]))
    }

    useEffect(() => {
        if(classes !== undefined){
            let words = moduleNow.split('.');
            let ModulePos = Object.keys(classes.Modules[0]).findIndex((item:number) => item === words[1]);
            let classPos = Object.values(classes.Modules[0])[ModulePos].findIndex((item:number) => item[0] === classNow);
            setposModule(ModulePos);
            setposClass(classPos);
        }
    },[classNow])
    
    return(
        <C.Container>
            <div className='class-header'>
                {classes !== undefined && posModule.toString() !== '' && <div className="ballCheck"><FontAwesomeIcon icon={faCheckCircle} className={lastModule >= posModule && lastClass >= getAllClasses(posModule,posClass) ? 'Icon' : 'NoIcon' }/></div>}
                <div>
                    <h1>{classNow}</h1>
                    <p>Module {moduleNow}</p> 
                </div>
                
            </div>
            
            <div className='class-video'>
            <YouTube videoId={videoClassNow} opts={opts} onEnd={EndTheVideo} />
            
                
            </div>
        </C.Container>
    )
    
}