import styled from "styled-components";

interface LoadingTypes {
  mt:string
  mr:string 
  ml:string 
  tam:string
}


export const Container = styled.div((props:LoadingTypes) => `
    
    img{
        margin-top:${props.mt}px;
        margin-left:${props.ml}px;
        margin-right:${props.mr}px;
        width:${props.tam}px;
        height:${props.tam}px;
    }
`);