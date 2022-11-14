import styled from 'styled-components';

export const Container = styled.div`
    display:Flex;
    width:80%;
    height:100%;
    flex-direction:Column;
    transition:0s;


    .class-header{
        display:flex;
        background-color:#241434;
        width:100%;
        height:110px;
        align-items:center;
        color:white;
        border-bottom:1px solid gray;
        h1{
            padding:0px;
            margin:0px;
        }

        p{
            opacity:.7;
            font-size:14px;
            padding:0px;
            margin:0px;
        }
    }
    .ballCheckIcon{
        display:flex;
        border-radius:45px;
        width:28px;
        height:28px;
        margin-right:20px;
        margin-left:40px;
        align-items:center;
        justify-content:center;
        color:#66b366;

        .Icon{
                display:flex;
                width:28px;
                height:28px;
                padding:0px;
                margin:0px;
            }

        .NoIcon{
            display:none;
        }
    }

    .ballCheck{
        display:flex;
        border-radius:45px;
        width:20px;
        height:20px;
        border:1px solid white;
        margin-right:20px;
        margin-left:40px;
        align-items:center;
        justify-content:center;
        color:#66b366;

        .Icon{
                display:flex;
                width:20px;
                height:20px;
                padding:0px;
                margin:0px;
            }

        .NoIcon{
            display:none;
        }
        
    }

    

    .class-video{
        display:flex;
        background-color:#241434;
        width:100%;
    }

    hr{
        width:95%;
        color:gray;
        border:1px solid gray;

    }

    .class-video{
        margin-top:50px;
        display:flex;
        width:100%;
        justify-content:center;
        align-items:center;
    }

    video{
    
        border:1px solid white;
    }
    
`;