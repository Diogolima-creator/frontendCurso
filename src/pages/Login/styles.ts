import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    height:100vh;
    background: #471671;
    display:flex;
    align-items:center;
    flex-direction:column;
    

    .form-h1{
        display:flex;
        align-items:center;
        flex-direction:column;
        margin-top:100px;
        color:white;
        font-size:32px;
        font-weight:bold;
        animation: modal 2s;
        p{
            font-size:18px;
            margin-bottom:50px;
        }
    }


    .form-login{
        padding:25px;
        background-color:#551b88;
        width:400px;
        height:250px;
        display:Flex;
        align-items:center;
        justify-content:Center;
        font-size:32px;
        font-weight:100;
        color:white;
        box-shadow:0px 0px 3px 3px #551b88;
        border-radius:0px;
        animation: modal 2s;

        form{
            display:flex;
            flex-direction:column;
        }

        label{
            font-size:28px;
            letter-spacing: 1px;
            margin-bottom:8px;
            
        }

        .icon{
          position:relative;
          right:30px;
          width:28px;
          height:28px;
          cursor:pointer;   
        }

        input{
            outline:none;
            height:25px;
            background-color:transparent;
            border:none;
            border-bottom:2px solid white;
            color:white;
            width:300px;
            margin-bottom:25px;
            font-weight:300;
            letter-spacing: 1.25px;
            font-size:18px;
            padding: 3px 7px;
            ::placeholder{
                opacity:.4;
                color:white;
            }
            
        }

        button{
            width:150px;
            background-color:#551b88;
            border:none;
            color:white;
            cursor:pointer;
            height:45px;
            font-size:20px;
            border:1px solid white;
            margin-right:15px;
            transition:.8s;
            
        }
        
        button:hover{
            transform:scale(1.03);
            border:1px solid #39125a;
            background-color:#39125a;
        }
    }

    .btn-register{
        color:white;
        text-decoration:none;
        width:100%;
        margin:0px;
        padding:10px 34px;
        
    }

    .form-login-buttons{

        p{
            margin:0px;
            padding:0px;
            margin-bottom:3px;
            font-size:12px;
            cursor:pointer;
            width:120px;
        }

        p:hover{
            text-decoration:underline;
        }
    }

    

    @keyframes modal {
        from{
            transform:translate3d(0,-320px,0);
        }to{
            transform:translate3d(0,0,0);
        }
    }

   
`;