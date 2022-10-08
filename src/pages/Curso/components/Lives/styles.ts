import styled from "styled-components";


export const Container = styled.div`
        width:100%;
        height:100%;
        background-color:#241434;
        display:flex;
        flex-direction:column;
        

        .lives-header{
            display:flex;
            background-color:#241434;
            width:100%;
            height:80px;
            align-items:center;
            color:white;
            border-bottom:1px solid gray;
            
            h1{
                
                padding:0px;
                margin:0px;
                margin-right:20px;
                margin-left:40px;
            }
    
            p{
                opacity:.7;
                font-size:14px;
                padding:0px;
                margin:0px;
                margin-right:20px;
                margin-left:40px;
            }
        }

        .lives-dentro{
            display:flex;
            justify-content:center;
            align-items:center;
            margin-top:35px;
        }
        
        .live{
            height:700px;
            width:1200px;
            border:2px solid #262626;
            background-color: #1a1a1a;
        }

        .chat{
            width:400px;
            height:700px;
            margin-left:15px;

        }

        .chat-header{
            color:white;
            text-align:center;
            background-color:#1a1a1a;
            padding:20px;
            font-weight:bold;
            p{
                margin:0px;
                padding:0px  
            }
        }

        .chat-comments{
            background-color: #262626;
            height:85%;
            width:100%;
        }

        .chat-input{
            margin:0px;
            padding:0px;
            width:100%;
            height:40px;
            display:flex;
            background-color:#1a1a1a;

            textarea{
                resize:none;
                color:white;
                background-color:#1a1a1a;
                margin:0px;
                padding:0px;
                width:85%;
                height:40px;
                border:none;
                outline:none;
                font-size:16px;
                font-variant: normal;
                text-indent:15px;
                margin-top:10px;
            }

            button{
                cursor:pointer;
                border:none;
                height:50px;
                width:60px;
                font-weight:bold;
                color:White;
                background-color:#0d0d0d;
            }
        }
`;