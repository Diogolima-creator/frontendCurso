import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    
    .Map{
        cursor:pointer;
        p{
            color:#241434;
            opacity:1;
            font-weight:bold;
        }
        padding-left:20px;
        padding-top:5px;
        padding-bottom:5px;
    }

    .Map-Header{
        display:flex;
        width:100%;
        align-items:center;
        padding:0px;
        margin-bottom:15px;
        transition:4s;
        justify-content:space-between;
        cursor:pointer;

        p{
            margin:0px;
            padding:0px;
        }

        h1{
            margin:0px;
            padding:0px;
            font-size:24px;
            Color:white;
            margin-top:10px;
        }
        .icon{
            display:flex;
           margin-right:15px;
        }
        .iconUp{
            display:none;
            color:white;
            width:20px;
            height:20px;
            margin-right:15px;
            cursor:pointer;
        }
    }

    .Map-Values{
        margin-left:30px;
        display:none;
        p{
            
            margin:0px;
            padding:5px 10px;
            color:white;
            display:flex;
            align-items:center;
            cursor:pointer;
        }

        .ballCheck{
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:45px;
            width:14px;
            height:14px;
            border:1px solid white;
            margin-right:10px;
            color:#4ca64c;

            .Icon{
                display:flex;
                width:16px;
                height:16px;
                padding:0px;
                margin:0px;
                
                
            }

            .NoIcon{
                display:none;

                
            }
        }

        .ballCheckBord{
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:45px;
            width:14px;
            height:14px;
            border:0px solid white;
            margin-right:10px;
            color:#4ca64c;

            .Icon{
                display:flex;
                width:16px;
                height:16px;
                padding:0px;
                margin:0px;
                
                
            }

            .NoIcon{
                display:none;

               
        }
    }

    
`;