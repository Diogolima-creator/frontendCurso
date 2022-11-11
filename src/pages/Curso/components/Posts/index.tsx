import * as C from './styles';
import {FontAwesomeIcon }from '@fortawesome/react-fontawesome';
import { faThumbsUp,faComment,faTurnDown,faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';
import { Comments } from '../Comments';
import { useAppSelector } from '../../../../hooks/redux/index';
import { removeLike, addLike } from '../../../../http/posts';
import { PostsType } from '../../../../entities/posts';


export const Posts = ({item, num}:PostsType) => {

    let colors = {
        GOLD: 'Gold',
        PLATINUM: '#e5e4e2',
        DIAMOND : '#b9f2ff'}
    
    const profilePic = useAppSelector((state) => state.user.profilePic)
    const colorsK = Object.keys(colors)
    const colorsV = Object.values(colors)
    let color = colorsV[colorsK.indexOf(item.level.toUpperCase())] 
    const cookies = new Cookies;
    const id = cookies.get('id');
    const jwt = cookies.get('jwt');
    const[comments,setComments] = useState(item.Comments)
    const[likes,setLikes] = useState(item.Likes.length)
    const[liked,setLiked] = useState(false);

    const commentsLength = (key:number) => {
        document.getElementById('post-area-comments'+key)!.style.display = 'flex'
    }

    const ifLiked = (item:string[]) => {
        const result = item.filter(usersLiked => usersLiked === id)
        if(result.length === 1){
            setLiked(true)
        }else{
            setLiked(false)
        }
     }

    async function removeLikes (idPost: string, idUser: string, jwt:string) {
        let result = await removeLike(idPost,idUser,jwt)
        if(result !== null){  
            setLikes(result.Likes.length)
            ifLiked(result.Likes);
        }else{
            alert('AAA')
        }
    }

    async function addLikes (idPost: string, idUser: string, jwt:string) {
        let result = await addLike(idPost,idUser,jwt)
        if(result !== null){  
            setLikes(result.Likes.length)
            ifLiked(result.Likes);
        }else{
            alert('AAA')
        }
    }

    useEffect(() => {
        ifLiked(item.Likes);
    },[])

    return(

        <C.Container color={color}>
            <div className='posts-header'>
                <img src={item.profilePic} alt= ''></img>
                <p>{item.username}</p>
                <p className='userlevel'>{item.level}</p>
            </div>
            <div className='posts-caption'>
                <p>{item.captionPost}</p>
            </div>
            <div className='posts-img'>
                <img src={item.imgUrlPost} alt=''></img>
            </div>
            <div className='posts-footer-date'>
                <div className='posts-footer-date-p'>
                    <p>{likes} Likes </p>
                    <p className='commentslength' onClick={()=> commentsLength(num)}>{comments.length} Comentarios</p>
                </div>
                <hr></hr>
            </div>
            
            <div className='posts-footer'>
                <FontAwesomeIcon icon={faThumbsUp} className="icon"/>
                <p onClick={liked === true ? ()=> removeLikes(item.id, id, jwt) : ()=> addLikes(item.id, id, jwt)}>Like{liked === true ? 'd': ''} </p>
                <FontAwesomeIcon icon={faComment} className="icon"/>
                <p onClick={() => document.getElementById('post-input')!.style.display = 'flex'}>Comment</p>
                <FontAwesomeIcon icon={faTurnDown} id="turn" className="icon"/>
                <p>Share</p>
                <FontAwesomeIcon icon={faPaperPlane} className="icon"/>
                <p>Send</p>
            </div>

            <div className='posts-input-comments'>
                <img src={profilePic} alt=''/>
                <textarea id={'post-input-comment'+num} placeholder='Adicione um comentario'></textarea>
                <button >Comment</button>
            </div>
            <div id={'post-area-comments'+num} className='posts-area-comments'>
                {comments.map((com:any) => 
                            <Comments com={com}/>
                        )}             
            </div>
            
        </C.Container>
    )
}