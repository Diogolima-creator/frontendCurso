import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items:center;
    margin-right:100px;

    p{
        margin: 0 10px;
        color:white;
    }

    img{
        padding:5px;
        border-radius:45px;
        width:40px;
        height:40px;
    }

    .iconDown{
        width:20px;
        height:20px;
        color:white;
        cursor:pointer;
        transition:2s;
    }

    .iconBell{
        width:20px;
        height:20px;
        color:white;
        cursor:pointer;
        transition:2s;
        margin-right:10px;
    }

    .menu{
        background-color:#3d1466;
        position:absolute;
        top:80px;
        right:100px;
        display:none;
        animation:open .5s;
        border-radius:10px;
        z-index:999;
        ul{
            margin:0px;
            padding:5px;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            list-style-type: none;
            color:white;
        }

        ul li{
            cursor:pointer;
            margin:10px 5px;
        }

        ul li:hover{
            opacity:0.7;
        }
    }

    @keyframes open {
        from{
            height:40px;
        }to{
            height:110px;
        }
    }
`;