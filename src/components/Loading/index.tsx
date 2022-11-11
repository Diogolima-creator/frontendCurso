import * as C from './styles';

interface LoadingTypes {
  mt?:string 
  mr?:string 
  ml?:string 
  tam?:string
}

export const Loading = (props:LoadingTypes) => {
    return(
        <C.Container mt={props.mt} mr={props.mr} ml={props.ml} tam={props.tam}>
                <img src='images/goldwell-loader.gif' alt=''/>
        </C.Container>
    )
}