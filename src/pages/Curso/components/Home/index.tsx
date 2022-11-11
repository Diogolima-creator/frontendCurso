import * as C from './styles'
import {FontAwesomeIcon }from '@fortawesome/react-fontawesome';
import { faUser,faImage,faPlay,faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'universal-cookie';
import { useState, useEffect } from 'react';
import { Posts } from '../Posts';
import { newsArticle } from '../../../../entities/news';
//import * as Curso from '../../../services/Curso';
import { Loading } from '../../../../components/Loading';
//import { Poupup } from '../Poupup';
//import { useNotification } from '../../hooks/useNotification';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { newsRequest } from '../../../../http/news';
import { getPost } from '../../../../http/posts';
import { createPost, updateImage } from '../../../../http/posts';

export const Home = ({user}:any) => {

    const cookies = new Cookies();
    const[posts,setPosts]= useState([])
    const[news,setNews] = useState([]);
    const[color,setColor] = useState('')
    const[loadingProfile,setLoadingProfile] = useState(false);
    const[loadingInput,setLoadingInput] = useState(true);
    const[loadingPosts,setLoadingPosts] = useState(false);
    const[loadingNews,setLoadingNews] = useState(false);
    const jwt = cookies.get('jwt')
    //const notify = useNotification();
  
    const updateColors = () => {
        let level = user.level;
        if(level.toUpperCase() === 'GOLD'){
            setColor('gold');
        }
        if(level.toUpperCase() === 'PLATINUM'){
            setColor('#e5e4e2');
        }
        if(level.toUpperCase() === 'DIAMOND'){
            setColor('#b9f2ff');
        }
    }

    async function newsRequests() {
        let result = await newsRequest()
        if(result.status === 'ok'){
            setNews(result.articles)
            setLoadingNews(true)
        }
    }

   async function postRequest() {
        let result = await getPost(cookies.get('jwt'))
        setPosts((result).reverse())
        setLoadingPosts(true)
    }

    useEffect(() => {
        postRequest() 
        newsRequests()
        if(user !== undefined){
            console.log(user.level)
            updateColors()
            setLoadingProfile(true)
        }
    },[user])

    interface imgType {
        src: string | ArrayBuffer | null
    }

    function ImgUploaded() {
    
        var img = (document.querySelector('input[name=image]') as HTMLInputElement)!.files!
        if(['image/jpeg','image/jpg','image/png'].includes(img[0].type)){
        document.getElementById('img')!.style.display = 'block';
            console.log
            var preview:imgType = (document.getElementById('img') as HTMLImageElement) 
            
            var reader = new FileReader();
            
            reader.onloadend = function(){
                preview.src = reader.result
            }
            reader.readAsDataURL(img[0])
        }
    }

    async function createPostFunction(){
        var file = (document.querySelector('input[name=image]') as HTMLInputElement)!.files!
        const captionPost = (document.getElementById('caption') as HTMLInputElement).value;
        const username = user.username;
        const level =  user.level;
        const profilePic = user.profilePic;
        if(file[0] !== undefined){
            const imgUrlPost = await updateImage(file[0])
            createPost(username,level,profilePic,imgUrlPost,captionPost,jwt)
            let res = await createPost(username,level,profilePic,imgUrlPost,captionPost,jwt)
            if(res === true){
                postRequest();
                (document.getElementById('caption') as HTMLInputElement).value = '';
            }
        }else{
            const imgUrlPost = undefined
            let res = await createPost(username,level,profilePic,imgUrlPost,captionPost,jwt)
            if(res === true){
                postRequest();
                (document.getElementById('caption') as HTMLInputElement).value = '';
            }
        }
    }

    return(
        <C.Container color={color}>
            <div className='profile'>
                  {loadingProfile === true && <div><div className='profile-description'>
                        <img src={user.profilePic} alt=''></img>
                        <p className='user'>{user.username}</p>
                        <p className='user-description'>{user.description}</p>
                </div>
                <div className='profile-plan-active'>
                        <p className='userlevel'>{user.level.toUpperCase()}</p>
                        {user.level.toUpperCase() === 'GOLD' && <div><p>10 Aulas de Java Script</p>
                        <p className='plan-description'>Tudo que você precisa aprender em 19 aulas, Methods, Document, Elements, HTML, forms, CSS,
                             Anmations, Events, Event LIstener, navigation,nodes, Collections, Node lists </p></div>}
                        {user.level.toUpperCase() === 'PLATINUM' && <div><p>75 Aulas de Java Script e ReactJS</p>
                            <p className='plan-description'>Tudo que você precisa aprender em 75 aulas, Methods, Document, Elements, HTML, forms, CSS,
                             components,hooks,redux,context,api </p></div>}
                        {user.level.toUpperCase() === 'DIAMOND' && <div><p>Todas as Aulas de Java Script,ReactJs,NodeJS</p>
                            <p className='plan-description'>Tudo que você precisa aprender, Methods, Document, Elements, HTML, forms, CSS,
                             Components,Hooks,Redux,Context,API,API-REST,Express,Axios,CORS...</p></div>}
                </div>
                </div>}
                {loadingProfile === false && <Loading tam={'60'} mt={'150'} ml={'90'}/>

                }
            </div>
            <div className='posts'>
                <div className='posts-input'>
                    <div className='posts-input-header'>
                            <p>Home Page</p>
                    </div>

                    <div className='posts-input-text'>
                            <img src={user?.profilePic} alt='' />
                            <textarea id='caption' placeholder='Começar Publicação'/>
                            
            </div>
                    { loadingInput === false && <Loading ml={'245'} tam={'60'} />

            }
                    {loadingInput === true && <div className='posts-input-footer'>
                        <img alt='' id='img'></img>
                        <div className='posts-input-footer-icons'>
                            <label htmlFor="inputImage"><FontAwesomeIcon icon={faImage} className="icon"/><p>Picture</p></label>
                            <input type="file" name="image" id='inputImage' onChange={ImgUploaded}></input>
                            <FontAwesomeIcon icon={faPlay} className="icon"/>
                            <p>Video</p>
                            <FontAwesomeIcon icon={faCalendarDays} className="icon"/>
                            <p>Event</p>
                            <button onClick={() => ((document.getElementById('caption') as HTMLInputElement).value === '' ? alert('Digite algo para publicar!'): createPostFunction())}>Submit</button>
                        </div>
        </div>}
                    
                </div>
                {loadingPosts === true && <div className='posts-view'>
                    {posts.map((post,key) => <Posts item={post} num={key}/>)}
                </div>}
                {loadingPosts === false && <Loading tam={'160'} mt={'220'} ml={'190'} />}
            </div>
            <div className='news'>
                  <div className='news-header'>
                    <p>NCSM news </p>
                  </div>
                  {loadingNews === true && <div className='news-articles'>
                    {news.length > 0 && news.map((articles:newsArticle,key:number) => <div className='articles'><a href={articles.url} target='_blank'><p>{articles.title}</p></a></div>)}
                  </div>}
                  {loadingNews === false && <Loading tam={'60'} mt={'150'} ml={'110'} />}
            </div>
            {/* <Poupup top={'100'} left={'1600'} text={notify.text} anima={notify.animaPop}/> */}
        </C.Container>
    )
}