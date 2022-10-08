import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    width:20%;
    background-color:#3d1466;
    flex-direction:column;
    overflow-y:scroll;
    overflow-x:hidden;

    .Menu-header{
        display:flex;
        align-items:center;
        justify-content:Center;
        padding:20px;
        
        height:70px;
        width:100%;
    }
    
    #MenuRightOptions{
        display:none;
    }
    
    .icon{
        margin-left:20px;
        color:white;
        width:20px;
        height:20px;
        cursor:pointer;
    }

    .Menu-header-text{
        display:flex;
        flex-direction:column;
        justify-content:Center;

        .title{
            font-size:20px;
            font-weight:Bold;
        }

        .author{
            opacity:.7;
            font-weight:300;
            font-size:14px;
        }
        p{
            margin:0px;
            padding:0px;
            color:white;
            margin-left:20px;
        }
    }

    .img{
        display:flex;
        align-items:center;
        justify-content:center;
        width:75px;
        height:75px;
        background-color:yellow;
        font-size:48px;
        font-weight:bold;
        border-radius:45px;
    }

    img{
        border-radius:45px;
        width:80px;
        height:80px;
        
    }
`;