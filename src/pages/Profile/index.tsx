import * as C from './styles'
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router';
//import * as Curso from '../../../services/Curso';
//import { Poupup } from '../../components/Poupup';
//import { useNotification } from '../../hooks/useNotification';
import { getProfile } from '../../http/user';
import { User } from '../../entities/user';
import { updateProfile } from '../../http/user';

const Profile = () => {

    const [select,setSelect] = useState(0);
    const cookies = new Cookies;
    const id = cookies.get('id');
    const jwt = cookies.get('jwt');
    const [colors ,setColor] = useState('');
    const [user,setUser] = useState<User['profile']>();
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    //const notify = useNotification();
    
    async function profileRequest(){
        let res:User = await getProfile(id,jwt)
        setUser(res.profile)
    }

    useEffect(()=>{
        if(jwt === undefined){
            navigate('/login');
        }
        profileRequest()
    },[])  
    
    const changeSelect = (item:number) => {
        if(item === 0){
            document.getElementById('diamond')!.style.border = '2px solid #b9f2ff';
            document.getElementById('plat')!.style.border = '2px solid red';
        }else{
            document.getElementById('diamond')!.style.border = '2px solid red';
            document.getElementById('plat')!.style.border = '2px solid #e5e4e2'
        }
        
        document.getElementById('button')!.style.backgroundColor = '#2f213e';
        document.getElementById('button')!.style.cursor = 'pointer';
    }
    
    const deleteCookies = () =>{
        cookies.remove('jwt')
        cookies.remove('id')
        navigate('/login')
        window.location.reload()
    }

    
    return(
        <C.Container color={colors}>
            <div className='menu-left'>
                <p onClick={() => navigate('/class')}>Back</p>
                <p onClick={() => setSelect(0)}>Settings</p>
                <p onClick={() => setSelect(1)}>Change Plan</p>
                <p onClick={()=> deleteCookies()}>Logout</p>
            </div>
            <div className='menu-right'>
                {
                    select === 0 && 
                    <div className='menu-right-profile'>
                            <img src={user?.profilePic}></img>
                            <h1></h1>
                            <form action="POST">
                                <label>Change Profile Pic</label>
                                <input type="file" id="profilePic" name='image' accept="image/png, image/jpeg, image/jpg"></input>
                                <label>Change Username</label>
                                <input value={user?.username} type="text" id="Username" ></input>
                                <label>Email</label>
                                <input value={user?.email} type="text" id="Email" ></input>
                                <label>Change description</label>
                                <textarea defaultValue={user?.description} id="Caption"></textarea>                            
                            </form>
                            <button onClick={() => updateProfile((document.querySelector('input[name=image]') as HTMLInputElement).files,id,jwt,(document.getElementById('Caption') as HTMLInputElement).value, user!.profilePic)}>Submit Changes</button>
                    </div>
                }
                {
                    select === 1 && 
                    <div className="menu-right-changePlan">
                        {user!.level === 'Gold' && 
                        <div className="changePlan"><p>Gostaria de fazer um UPGRADE no seu Plano?</p>
                        <p>Você se encontra no PLANO:<h1>{user!.level}</h1></p>
                        <p>Selecione qual Plano você deseja fazer o upgrade, você será redirecionado para a área de pagamento, após o pagamento seu PLANO mudará em até 1 dia util.</p>
                        <div className="plans">
                            <div onClick={() => changeSelect(0)} id='plat' className="plan">
                                <p className='plat'>Plano Platina</p>
                                <p>75 Aulas JavaScript,ReactJS</p>
                            </div> 
                            <div onClick={() => changeSelect(1) } id='diamond' className="plan">
                                <p className='diamond'>Plano Diamante</p>
                                <p>Todas as Aulas JavaScript,ReactJS,NodeJS</p>
                            </div> 
                        </div>
                          <button id='button'>Selecione um plano</button>
                </div>}

                        {user!.level === 'Platinum' && <div  className="changePlan"><p>Gostaria de fazer um UPGRADE no seu Plano?</p>
                        <p>Você se encontra no PLANO:<h1>{user!.level}</h1></p>
                        <p>Gostaria de ir para o Plano DIAMOND? Você será redirecionado após sua confirmação para a pagina do pagamento.</p>
                        <button id='button2'>Vamos ao Plano Diamante</button>
              </div>}

                        {user!.level === 'Diamond' && <div className="changePlan"><p>Gostaria de fazer um UPGRADE no seu Plano?</p>
                        <p>Você se encontra no PLANO:<h1>{user!.level}</h1></p>
            <p>Esse é o nosso melhor plano.</p></div>}
                    </div>
                }
                
            </div>
            {/* <Poupup top={'100'} left={'1600'} text={notify.text} anima={notify.animaPop}/> */}
        </C.Container>
    )
}

export default Profile;