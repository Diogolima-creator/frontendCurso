import styled from "styled-components";


export const Container = styled.div((color:string) => `
    width:100vw;
    height:100vh;
    background-color:#3d1466;
    display:flex;
    justify-content:center;
    align-items:center;

    .menu-left{
        background-color:#180829;
        width:150px;
        height:267px;
        margin-right:20px;
        justify-content:center;

        p{
            margin:0px;
            display:flex;
            justify-content:center;
            align-items:center;
            height:66.67px;
            padding:0px 0px;
            color:white;
            font-size:18px;
            cursor:pointer;
            font-weight:bold;
        }

        p:hover{
            background-color:#241434
        }
    }

    .menu-right{
        background-color:#180829;
        width:550px;
        height:650px;
        
        h1{
            margin:0px;
            color:${color};
        }

        .menu-right-profile{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            margin-top:20px;
        }

        img{
            width:110px;
            height:110px;
            border-radius:90px;
        }

        form{
            margin:10px;
            margin-top:15px;
            display:flex;
            flex-direction:column;
            
        }

        label{
            font-weight:bold;
           color:#8b72a3;
           margin:10px 0;
        }

        input{
            outline:none;
            border:none;
            font-size:16px;
            padding:10px;
            background-color:white;
            color:#8b72a3 ;
            letter-spacing: 2.25px;
        }

        textarea{
            outline:none;
            border:none;
            letter-spacing: 1.25px;
            font-size:16px;
            padding:7px;
            background-color:white;
            color:#8b72a3 ;
            resize:none;
            height:90px;
        }

        #profilePic{
            background-color:transparent;
        }

        button{
            border:none;
            padding:20px;
            font-weight:bold;
            background-color:#2f213e;
            font-size:20px;
            color:#8b72a3;
            cursor:pointer;

            &:hover{
                opacity:.8;
            }
        }
        
        .menu-right-changePlan{
            display:flex;
            align-items:center;
            justify-content:center;
            height:100%;
            p{
                text-align:center;
                color:white;
            }

            .plans{
                display:flex;
                align-items:center;
                justify-content:center;
            }

            .changePlan{
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
            }

            .plan{
                width:200px;
                height:100px;
                padding:10px;
                margin-top:50px;
                margin-left:15px;
                border:1px solid white;
                cursor:pointer;
            }

            .plat{
                color:#e5e4e2;
            }
            
            #plat{
                border:2px solid #e5e4e2;
            }

            .diamond{
                color:#b9f2ff;
            }

            #diamond{
                border:2px solid #b9f2ff;
            }

            #button{
                background-color:grey;
                color:white;
                margin-top:45px;
                cursor:auto;
            }

            #button2{
                margin-top:45px;
            }
        }
    }
`);