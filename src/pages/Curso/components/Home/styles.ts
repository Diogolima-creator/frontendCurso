import styled from "styled-components";

interface userLevel{
    color:string
}

export const Container = styled.div(({color}:userLevel)=>`
    width:100%;
    height:100%;
    background-color: #241434;
    display:flex;
    justify-content:space-between;
    overflow-y:scroll;
    animation:openDif 1.5s;

    

    @keyframes openDif{
        from{
            height:5%;
        }to{
            height:100%;
        }
    }

    @keyframes drop{
        from{
            transform: translate3d(0px,-300px,0px)
        }to{
            transform: translate3d(0,0,0)
        }
    }

    .profile{
        animation:drop 1s;
        margin-top:100px;
        margin-left:150px;
        width:250px;
        height:400px;
        border:1px solid #8b72a3;
        border-radius:5px;
        box-shadow: 0px 0px 12px 12px #180829;


        .profile-description{
            width:250px;
            height:50%;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:Center;
            border-bottom:1px solid #8b72a3;
        
            img{
                margin-top:20px;
                width:65px;
                height:65px;
                border-radius:45px;
            }
    
            p{
                margin-top:0px;
                color: #8b72a3;
                font-size:18px;
                text-align:center;
            }

            .user{
                color:White;
                margin-top:15px;
                font-weight:bold;
            }

            .user-description{
                font-size:12px;
            }

        }

        .profile-plan-active{

            p{
                color: #8b72a3;
                font-size:18px;
                text-align:center;
            }

            .plan-description{
                font-size:12px;
            }

            .userlevel{
                color:${color};
            }
        }
    }


    .posts{
        display:flex;
        flex-direction:column;
        width:600px;
        animation:drop 1.5s;
    }

    .posts-input{
        padding:15px;
        margin:0px;
        margin-top:15px;
        display:flex;
        flex-direction:column;
        border:1px solid #8b72a3;
        border-radius:5px;
    }

    .posts-input-header{
        display:flex;
        color:white;
        height:50px;
        font-size:20px;
        
        p{
            margin:0px;
            font-weight:bold;
        }
    }

    .posts-input-text{
        display:flex;
        align-items:center;
        
        img{
            width:45px;
            height:45px;
            border-radius:45px;
            margin-right:10px;
        }


        textarea{
            background-color:transparent;
            border:none;
            color:white;
            outline:none;
            padding-top:15px;
            margin-top:5px;
            font-size:18px;
            letter-spacing:0.5px;
            font-weight:100;
            width:100%;
            resize:none;
            overflow-y:auto;
        }
    }

    .posts-input-footer{
        display:flex;
        justify-content:space-between;
        color:white;
        margin-top:9px;
        align-items:center;
        flex-direction:column;

        .posts-input-footer-icons{
            display:flex;
            justify-content:start;
            align-items:center;
            width:100%;
        }
        img{
            display:none;
            width:500px;
            height:500px;
        }
        input[type="file"] {
            display:none;
        }

        label{
            display:flex;
            align-items:center;
        }

        .icon{
            width:20px;
            height:20px;
            padding:5px;
            margin-right:2px;
            color: #8b72a3;
            cursor:pointer;
        }

        p{
            margin:0px;
            margin-right:10px;
            cursor:pointer;
        }
        
        p:hover{
            opacity:.3;
        }
        button{
            background-color:#180829;
            border:none;
            color:#8b72a3;
            width:100px;
            cursor:pointer;
            height:40px;
            font-size:18px;
            border-radius:45px;
            opacity:.7;
            transition:.2s;
            margin-left:200px;
        }

        button:hover{
            opacity:1;
        }
    }

    .news{
        animation:drop 2s;
        width:300px;
        height:520px;
        border:1px solid #8b72a3;
        margin-top:100px;
        border-radius:5px;
        margin-right:150px;
        box-shadow: 0px 0px 12px 12px #180829;
        padding:10px;

        .news-header{
            
            p{
                margin:5px 0px;
                margin-bottom:15px;
            }

            font-size:22px;
            font-weight:bold;
            color:#8b72a3;
        }

        .news-articles{
            
            .articles{
                display:flex;
                margin-top:15px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;

                font-size:14px;
                a{
                   font-weight:bold;
                    color:#8b72a3;
                    overflow: hidden;
                    max-width: 300px;

                }
                
                p {
                    margin:0px; 
                    text-overflow: ellipsis;
                  }
                
            }
            
        }
    }
`);