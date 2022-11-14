import styled from "styled-components";

export const Container = styled.div`
    background-color:#241434;
    width:150px;
    height:150px;
    position:absolute;
    top:170px;
    right:25px;
    margin:0px;
    padding:0px;
    border-radius:10px;
    animation: open .6s;
    display:flex;
    padding:10px;

    ul{
        display:flex;
        color:white;
        margin:0px;
        padding:0px;
        list-style: none;
        flex-direction:column;
        width:100%;
    }

    ul li{
        display:flex;
        align-items:center;
        justify-content:center;
        height:50px;
        cursor:pointer;
        
    }

    li:hover{
        background-color:#3a2c48;
        border-radius:5px;
    }

    @keyframes open {
        from{
            height:40px;
        }to{
            height:150px;
        }
    }

    .icon{
        height:18px;
        width:18px;
        margin-left:8px;
        color:purple;
    }
`;