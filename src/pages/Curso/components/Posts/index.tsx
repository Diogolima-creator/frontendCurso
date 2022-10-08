import * as C from './styles';
import {FontAwesomeIcon }from '@fortawesome/react-fontawesome';
import { faThumbsUp,faComment,faTurnDown,faPaperPlane } from '@fortawesome/free-solid-svg-icons';
//import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';
import { Comments } from '../Comments';

export const Posts = ({item, num}:any) => {


    let colors = {
        Gold: 'Gold',
        Platinum: '#e5e4e2',
        Diamond : '#b9f2ff'}
    

    const colorsK = Object.keys(colors)
    const colorsV = Object.values(colors)
    let color = colorsV[colorsK.indexOf(item.level)] 
    //const cookies = new Cookies;
    //const id = cookies.get('id');
    //const jwt = cookies.get('jwt');
    const[user,setUser] = useState([]);
    const[comments,setComments] = useState(item.Comments)
    const[likes,setLikes] = useState(item.Likes.length)
    const[liked,setLiked] = useState();

    
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
                    <p className='commentslength'>{comments.length} Comentarios</p>
                </div>
                <hr></hr>
            </div>
            
            <div className='posts-footer'>
                <FontAwesomeIcon icon={faThumbsUp} className="icon"/>
                <p >Like{liked === true ? 'd': ''} </p>
                <FontAwesomeIcon icon={faComment} className="icon"/>
                <p onClick={() => document.getElementById('post-input')!.style.display = 'flex'}>Comment</p>
                <FontAwesomeIcon icon={faTurnDown} id="turn" className="icon"/>
                <p>Share</p>
                <FontAwesomeIcon icon={faPaperPlane} className="icon"/>
                <p>Send</p>
            </div>

            <div className='posts-input-comments'>
                <img src='' alt=''/>
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