import * as C from './styles'
import {FontAwesomeIcon }from '@fortawesome/react-fontawesome';
import { faUser,faImage,faPlay,faCalendarDays } from '@fortawesome/free-solid-svg-icons';
//import Cookies from 'universal-cookie';
import { useState, useEffect } from 'react';
import { Posts } from '../Posts';
//import * as Curso from '../../../services/Curso';
//import { Loading } from '../Loading/index';
//import { Poupup } from '../Poupup';
//import { useNotification } from '../../hooks/useNotification';

const API_KEY = "834bc2e5cfe44c40b141cf46157eb0d0"; // api news

export const Home = ({user}:any) => {

    //const cookies = new Cookies();
    //const jwt = cookies.get('jwt');
    //const id = cookies.get('id');
    const[posts,setPosts] = useState([]);
    const[news,setNews] = useState([]);
    const[color,setColor] = useState('')
    const[loadingProfile,setLoadingProfile] = useState(false);
    const[loadingInput,setLoadingInput] = useState(true);
    const[loadingPosts,setLoadingPosts] = useState(false);
    const[loadingNews,setLoadingNews] = useState(false);
    //const notify = useNotification();

    /*async function updateImage(){

        const file = document.querySelector('input[name=image]').files[0]
     
        if(file && file.size > 0){
            let result = await Curso.insertPosts(file);
      
            if(result instanceof Error){
              alert(`${result.name}-${result.message}`);
            } else{
              let newCursoList = [];
              newCursoList.push(result);
                return newCursoList[0].url
            }
        }else{
            alert('deu ruim')
        }
    }*/
  
    const updateColors = () => {

        let level = user.level;
        if(level === 'Gold'){
            setColor('gold');
        }
        if(level === 'Platinum'){
            setColor('#e5e4e2');
        }
        if(level === 'Diamond'){
            setColor('#b9f2ff');
        }
    }

    useEffect(() => {
        //postRequest() 
        //newsRequest()
        updateColors()
        setLoadingProfile(true)
    },[user])

    /*function ImgUploaded() {
    
        document.getElementById('img').style.display = 'block';
        var img = document.querySelector('input[name=image]').files[0]
        var preview = document.getElementById('img')
    
        var reader = new FileReader();
        
        reader.onloadend = function(){
            preview.src = reader.result
        }
        reader.readAsDataURL(img)
    }*/
    

    return(
        <C.Container color={color}>
            <div className='profile'>
                  {loadingProfile === true && <div><div className='profile-description'>
                        <img src={user.profilePic} alt=''></img>
                        <p className='user'>{user.username}</p>
                        <p className='user-description'>{user.description}</p>
                </div>
                <div className='profile-plan-active'>
                        <p className='userlevel'>{user.level}</p>
                        {user.level === 'Gold' && <div><p>10 Aulas de Java Script</p>
                        <p className='plan-description'>Tudo que você precisa aprender em 19 aulas, Methods, Document, Elements, HTML, forms, CSS,
                             Anmations, Events, Event LIstener, navigation,nodes, Collections, Node lists </p></div>}
                        {user.level === 'Platinum' && <div><p>75 Aulas de Java Script e ReactJS</p>
                            <p className='plan-description'>Tudo que você precisa aprender em 75 aulas, Methods, Document, Elements, HTML, forms, CSS,
                             components,hooks,redux,context,api </p></div>}
                        {user.level === 'Diamond' && <div><p>Todas as Aulas de Java Script,ReactJs,NodeJS</p>
                            <p className='plan-description'>Tudo que você precisa aprender, Methods, Document, Elements, HTML, forms, CSS,
                             Components,Hooks,Redux,Context,API,API-REST,Express,Axios,CORS...</p></div>}
                </div>
                </div>}
                {/*loadingProfile === false && <Loading tam={'60'} mt={'150'} ml={'90'}/>

              */}
            </div>
            <div className='posts'>
                <div className='posts-input'>
                    <div className='posts-input-header'>
                            <p>Home Page</p>
                    </div>

                    <div className='posts-input-text'>
                            <img src={user.profilePic} alt='' />
                            <textarea id='caption' placeholder='Começar Publicação'/>
                            
                    </div>
                    {/* loadingInput === false && <Loading ml={245} tam={60} />

            */}
                    {/*loadingInput === true && <div className='posts-input-footer'>
                        <img alt='' id='img'></img>
                        <div className='posts-input-footer-icons'>
                            <label htmlFor="inputImage"><FontAwesomeIcon icon={faImage} className="icon"/><p>Picture</p></label>
                            <input type="file" name="image" id='inputImage' onChange={ImgUploaded}></input>
                            <FontAwesomeIcon icon={faPlay} className="icon"/>
                            <p>Video</p>
                            <FontAwesomeIcon icon={faCalendarDays} className="icon"/>
                            <p>Event</p>
                            <button onClick={() => (document.getElementById('caption').value === '' ? notify.notification('Digite algo para publicar!', 'block'): createPost())}>Submit</button>
                        </div>
          </div>*/}
                    
                </div>
                {loadingPosts === true && <div className='posts-view'>
                    {posts.map((post,key) => <Posts id={key} num={key} item={post}/>)}
                    
                    
                </div>}
                {/*loadingPosts === false && <Loading tam={'160'} mt={'220'} ml={'190'} />*/}
            </div>
            <div className='news'>
                  <div className='news-header'>
                    <p>NCSM news </p>
                  </div>
                  {loadingNews === true && <div className='news-articles'>
                    {/* {news.length > 0 && news.map((articles,key) => <div className='articles'><a href={articles.url} target='_blank'><p>{articles.title}</p></a></div>)} */}
                  </div>}
                  {/* {loadingNews === false && <Loading tam={'60'} mt={'150'} ml={'110'} /> */}
            </div>
            {/* <Poupup top={'100'} left={'1600'} text={notify.text} anima={notify.animaPop}/> */}
        </C.Container>
    )
}