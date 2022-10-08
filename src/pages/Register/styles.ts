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
        margin-top:0px;
        color:white;
        font-size:32px;
        font-weight:bold;
        animation: modal 1.5s;
        p{
            font-size:18px;
            margin-bottom:50px;
        }
    }


    .form-login{
        padding:25px;
        background-color:#551b88;
        width:550px;
        height:500px;
        display:flex;
        align-items:center;
        justify-content:Center;
        font-size:32px;
        font-weight:100;
        color:white;0
        box-shadow:0px 0px 3px 3px #551b88;
        border-radius:0px;
        animation: modal 1.5s;
        
        .passDONT{
            margin:0px;
            padding:0px;
            font-size:14px;
            color:red;
            font-weight:bold;
            display:none;
        }

        .icon{
            position:relative;
            right:30px;
            width:28px;
            height:28px;
            cursor:pointer;
            animation: modal 2s;
        }

        form{
            display:flex;
            flex-direction:column;
        }

        label{
            font-size:28px;
            letter-spacing: 1px;
            margin-bottom:8px;
            animation: modal 2s;
        }

        input{
            outline:none;
            height:25px;
            background-color:transparent;
            border:none;
            border-bottom:2px solid white;
            color:white;
            width:350px;
            margin-bottom:25px;
            font-weight:300;
            letter-spacing: 1.25px;
            font-size:18px;
            padding: 3px 7px;
            ::placeholder{
                opacity:.4;
                color:white;
            }
            animation: modal 2s;
        }

        button{
            width:250px;
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
        
        .btn-register{
            font-weight:bold;
            padding:10px;
            background-color:#551b88;
            border:none;
            color:white;
            cursor:pointer;
            height:45px;
            font-size:18px;
            border:1px solid white;
            margin-right:15px;
            transition:.8s;
            width:100px;
        }

        .form-login-buttons{
            animation: modal 2s;
        }

        .btn-register:hover{
            transform:scale(1.03);
            border:1px solid #39125a;
            background-color:#39125a;   
        }

        .btn-login{
            color:white;
            text-decoration:none;
        }
    }

    @keyframes modal {
        from{
            transform:translate3d(0,-320px,0);
        }to{
            transform:translate3d(0,0,0);
        }
    }

   .form-level{
        padding:25px;
        background-color:#551b88;
        width:950px;
        height:400px;
        display:none;
        align-items:center;
        justify-content:Center;
        font-size:28px;
        font-weight:100;
        color:white;
        box-shadow:0px 0px 3px 3px #551b88;
        border-radius:0px;
        animation: modal 2s;
        flex-direction:column;

        .title{
            margin:0px;
            padding:0px;
        }
        
        .gold{
            color:gold;
            font-weight:bold;
        }

        .plat{
            color:#e5e4e2;
            font-weight:bold;
        }

        .diamond{
            color:#b9f2ff;
            font-weight:bold;
        }

        .form-plans{
            display:flex;
            margin-left:20px;
            
        }

        .passDONT{
            margin:0px;
            padding:0px;
            font-size:24px;
            margin-bottom:15px;
            color:red;
            font-weight:bold;
            display:none;
        }

        .form-plan{
            width:300px;
            border:4px solid #471671;
            display:Flex;
            flex-direction:column;
            margin-right:20px;
            justify-content:center;
            align-items:center;
            cursor:pointer;
            transition:.6s;
            font-size:18px;
        }

        .form-plan:hover{
            transform:scale(1.05);
        }

        button{
            margin-top:40px;
            width:250px;
            background-color:#551b88;
            border:none;
            color:white;
            cursor:pointer;
            height:45px;
            font-size:20px;
            border:1px solid white;
            margin-right:15px;
            transition:.8s;
            animation: modal 2s;
        }
        
        button:hover{
            transform:scale(1.03);
            border:1px solid #39125a;
            background-color:#39125a;
        }

    
        @keyframes modal {
            from{
                transform:translate3d(0,-320px,0);
            }to{
                transform:translate3d(0,0,0);
            }
        }
    }

    @media only screen and (min-width: 1325px){  
      .form-level{
        height: 320px;
      }

      .form-h1{
        p{
          margin-bottom:30px;
        }
      }
      .form-login{
        width: 380px;
        height: 300px;
        padding:  35px;
      input{  
        outline:none;
        height:25px;
        background-color:transparent;
        border:none;
        border-bottom:2px solid white;
        color:white;
        width:330px;
        margin-bottom:10px;
        font-weight:300;
        letter-spacing: 1.25px;
        font-size:18px;
        padding: 3px 7px;
        ::placeholder{
            opacity:.4;
            color:white;
        }
        animation: modal 2s;
    }

    label{
      font-size:22px;
      letter-spacing: 1px;
      margin-bottom:0px;
      animation: modal 2s;
    }
  }
  }
`;