import styled from "styled-components";

/*

CLARA <3

#8b72a3 clarinho
#47206e escuro
#4c0080 claro
#escurao #180829
*/

export const Container = styled.div`
        width:100%;
        height:90px;
        background-color: #180829;
        display:flex;
        align-items:center;
        justify-content:space-between;

        .left{
            display:flex;
            align-items:center;
        }

        .icon{
            background-color: #47206e;
            color: #8b72a3;
            padding:25px;
            height:40px;
            width:40px;
            margin-right:40px;
        }

        h1{
            margin:0px;
            color:white;
        }
`;