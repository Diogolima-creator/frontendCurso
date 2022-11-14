import * as C from './styles';


interface CommentsType {
    com: [string,string,string,string]
}

export const Comments = ({com}:CommentsType) => {
    return(
        <C.Container>
                <img src={com[0]} alt=''></img>
                <div className='comment-background'>
                    <div className='comment-flex'>
                        
                        <div className='comment-flex-user'>
                            <p className='username'>{com[2]}</p>
                            <p>{com[3]}</p>
                        </div>  
                    </div>
                    <div className='comment'>
                        <p>{com[1]}</p>

                    </div>
                </div>     
        </C.Container>
    )
}