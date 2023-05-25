import * as C from './styles'
import YouTube from 'react-youtube'
import Cookies from 'universal-cookie';
import { CheckCircle } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { setClassNow, setFirstOpen, setLastClass, setLastModule, setModuleNow, setVideoClassNow } from '../../../../store/course';
import { updateClass, updateLastClass } from '../../../../http/user'; 
import { User } from '../../../../entities/user';
import { Classes} from '../../../../entities/classes';

interface ClassCourseType {
    user?: User['profile']
    classes?: Classes 
}

export const ClassCourse = (props:ClassCourseType) => {
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
    
    console.log(props.user,props.classes)

    if(firstOpen !== true){
        dispatch(setModuleNow(props.user!.classes[1]))
        dispatch(setClassNow(props.user!.classes[0]))
        dispatch(setVideoClassNow(props.user!.classes[2]))
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
                TamTotal = TamTotal + Object.values<Classes['Modules']>(props.classes!.Modules[0])[i].length;
            }

            for(let i= 0;i<mod;i++){
                TamSemiTotal = TamSemiTotal + Object.values<Classes['Modules']>(props.classes!.Modules[0])[i].length;
            }

            return (TamTotal-(TamTotal-(TamSemiTotal+classPos+1)))
        }
    }

    function EndTheVideo(event:any) {
        let words = moduleNow.split('.');
        let ModulePos = Object.keys(props.classes!.Modules[0]).findIndex((item) => item === words[1]);
        let classPos = Object.values<Classes['Modules']>(props.classes!.Modules[0])[ModulePos].findIndex((item:any) => item[0] === classNow);
        
        if(Object.values<Classes['Modules']>(props.classes!.Modules[0])[ModulePos].length-1 === classPos && Object.keys(props.classes!.Modules[0]).length-1 === ModulePos){
            alert('Ultima Aula e Ultimo Modulo')        
        }else if(Object.values<Classes['Modules']>(props.classes!.Modules[0])[ModulePos].length-1 === classPos){
            let nextClassArray:{[s: string]: [string,string]} = (Object.values<Classes['Modules']>(props.classes!.Modules[0])[ModulePos+1])[0]
            let nextModuleName = (Object.keys(props.classes!.Modules[0]))[ModulePos+1]

            dispatch(setModuleNow((ModulePos+2)+'.'+nextModuleName))
            dispatch(setClassNow(nextClassArray[0]))
            dispatch(setVideoClassNow(nextClassArray[1]))

            let Class = nextClassArray[0];
            let Module = (ModulePos+2)+'.'+nextModuleName;
            let urlVideo = nextClassArray[1];
            let content = {id,Class,Module,urlVideo};
            updateClass(content, jwt)
            console.log('oi')

            if(classPos === props.user!.LastClasses[1]+1 && ModulePos >= props.user!.LastClasses[0]){
                updateLastClass({id,} ,jwt);
                dispatch(setLastClass(getAllClasses(ModulePos,classPos)));
                dispatch(setLastModule(ModulePos+1));
            }
        }else{
            let nextModuleName = (Object.keys(props.classes!.Modules[0]))[ModulePos]
            let nextClassArray:{[s: string]: string} = (Object.values<Classes['Modules']>(props.classes!.Modules[0])[ModulePos])[classPos+1]
            
            
            setTimeout(() => {
                            
                            dispatch(setClassNow(nextClassArray[0]))
                            dispatch(setVideoClassNow(nextClassArray[1]))

                            let Class = nextClassArray[0];
                            let Module = (ModulePos+1)+'.'+nextModuleName;
                            let urlVideo = nextClassArray[1];

                            updateClass({id,classes:[Class,Module,urlVideo]}, jwt);
                           
                            console.log(classPos)
                            console.log(props.user!.LastClasses[1]+1)
                            if(classPos === (props.user!.LastClasses[1]+1) && ModulePos >= props.user!.LastClasses[0]){
                                
                                updateLastClass({id, LastClasses:[posModule, posClass]}, jwt);
                                
                                dispatch(setLastClass(getAllClasses(ModulePos,classPos)))
                                dispatch(setLastModule(ModulePos))
                            }
                            
            }, 3300);

            
        }
        
    }

    
    if(props.classes !== undefined && posModule === ''){
        console.log(moduleNow)
        let words = moduleNow.split('.');
        let ModulePos = Object.keys(props.classes.Modules[0]).findIndex((item) => item === words[1]);
        console.log(ModulePos)
        console.log(Object.keys(props.classes.Modules[0]))
        let classPos = Object.values<Classes['Modules']>(props.classes.Modules[0])[ModulePos].findIndex((item:any) => item[0] === classNow);
        setposModule(ModulePos.toString());
        setposClass(classPos.toString());
        
        dispatch(setLastClass(getAllClasses(props.user!.LastClasses[0],props.user!.LastClasses[1])))
        dispatch(setLastModule(props.user!.LastClasses[0]))
    }

    useEffect(() => {
        if(props.classes !== undefined){
            let words = moduleNow.split('.');
            let ModulePos = Object.keys(props.classes.Modules[0]).findIndex((item:any) => item === words[1]);
            let classPos = Object.values<Classes['Modules']>(props.classes.Modules[0])[ModulePos].findIndex((item:any) => item[0] === classNow);
            setposModule(ModulePos.toString());
            setposClass(classPos.toString());
        }
    },[classNow])
    
    return(
        <C.Container>
            <div className='class-header'>
                {props.classes !== undefined && posModule.toString() !== '' && <div className={lastModule >= posModule && lastClass >= getAllClasses(parseInt(posModule),parseInt(posClass)).toString() ? 'ballCheckIcon' : 'ballCheck' }><CheckCircle className={lastModule >= posModule && lastClass >= getAllClasses(parseInt(posModule),parseInt(posClass)).toString() ? 'Icon' : 'NoIcon' }/></div>}
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