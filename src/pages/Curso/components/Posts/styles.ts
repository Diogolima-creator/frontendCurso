import styled from "styled-components";

export const Container = styled.div(({color}:any) =>`
        width:560px;
        border-radius:5px;
        padding:20px;
        background-color:transparent;
        margin-top:20px;
        display:flex;
        flex-direction:column;
        border:1px solid #8b72a3;
        margin-bottom:20px;
        padding-bottom:0px;


        .profile{

            .profile-description{
                
            }
        }

        .posts-header{
            margin-left:20px;
            display:flex;
            color:white;
            font-weight:bold;
            

            p{
                margin-right:5px;
            }

            img{
                width:45px;
                height:45px;
                border-radius:45px;
                margin-right:5px;
            }

            
        }

        .posts-caption{
            margin-left:20px;
            color:white;
        }

        .posts-img{
            margin-left:20px;
            img{
                max-height:500px;
                width:500px;
            }
            
        }
        .posts-footer{
            margin-left:20px;
            width:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            padding:0px;

            .icon{
                background-color:transparent;
                color:#8b72a3;
                width:24px;
                height:24px;
                cursor:pointer;
            }
            

            p{
                cursor:pointer;
                color:white;
                padding:0px 5px;
                padding-right: 60px;
            }
            
            p:hover{
                opacity:.3;
            }
            #turn{
                transform: rotate(270deg)
            }
        }
        
        .userlevel{
            cursor:pointer;
            text-decoration:underline;
            color: ${color};
        }

        .posts-footer-date{
            margin: 5px 40px 5px 20px;
            color:white;
            opacity:.6;
            p{
                margin:0px;
                padding:0px;
            }

            .posts-footer-date-p{
                display:flex;
                justify-content:space-between;
                font-size:14px;
            }
        }

        .commentslength{
            cursor:pointer;

        }

        .commentslength:hover{
            text-decoration:underline;
        }
        
        .posts-area-comments{
            display:none;
            flex-direction:column;
        }
        
        .posts-input-comments{
            display:flex;
            padding:10px;

            img{
                margin-right:10px;
                border-radius:45px;
                width:40px;
                height:40px;
            }

            textarea{
                border-radius:5px;
                margin-right:10px;
                width:100%;
                resize:none;
                border:none;
                outline:none;
                font-size:18px;
                font-weight:900;
                text-align:start;
                padding: 10px 0px;
                padding-bottom:0px;
                font-size:14px;
                height:28px;
            }

            button{
                border:none;
                color:#8b72a3;
                padding:10px;
                cursor:pointer;
                font-size:16px;
                font-weight:bold;
                background-color:#180829;
            }

            button:hover{
                opacity:.9;
            }
            
        }
`);