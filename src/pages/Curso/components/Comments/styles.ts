import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    margin-bottom:20px;
    margin-top:10px;
    height:100px;
    color:white;
    width:100%;
    align-items:center;

    .comment-background{
        background-color:#2f203e;
        border-radius:5px;
        margin-left:5px;
        width:100%; 
        height:90%;

    }

    p{
        margin:0px;
        padding:0px;
        padding-left:15px;
    }

    img{
        width:35px;
        height:35px;
        border-radius:45px;
        margin-bottom: 30px;
    }

    .comment-flex{     
        display:flex;
        padding:15px;
        align-items:center;

        p{
            font-size:12px;
            padding-left:5px;
        }

        .username{
            font-weight:bold;
            font-size:16px;
        }
    }

    .comment-flex-user{
        display:flex;
        flex-direction:column;
        
    }

    .comment{
        p{
            padding-left:20px;
            font-size:14px;
        }
    }
`;