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
                <img src='https://github.com/Diogolima-creator/frontendCurso/assets/62246037/82778772-9303-4ea2-974c-d37920547fcf' alt=''/>
        </C.Container>
    )
}