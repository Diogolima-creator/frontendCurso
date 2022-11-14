import styled from "styled-components";


export const Container = styled.div`
        width:90px;
        height:100%;
        background-color: #180829;
        margin:0px;
        padding:0px;

        .menu{
            display:flex;
            flex-direction:column;
            width:91px;
            height:100%;
            align-items:center;
            color:#8b72a3;
        }

        .menu-items{
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            height:75px;
            cursor:pointer;
            padding: 10px 0px;
            justify-content:center;
            transition:.4s;

            p{
                padding:5px;
                margin:0px;
            }
        }

        .icon{
            color: #8b72a3;
            cursor:pointer;
            background-color:transparent;
            width:28px;
            height:28px;
        }
`;