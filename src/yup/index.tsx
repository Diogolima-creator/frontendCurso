export const changeForm = () => {
  if((document.getElementById('user') as HTMLInputElement).value !== '' && (document.getElementById('email') as HTMLInputElement).value !== '' && (document.getElementById('pass') as HTMLInputElement).value !== '' && (document.getElementById('cpass') as HTMLInputElement).value !== ''){  
      if((document.getElementById('pass') as HTMLInputElement).value === (document.getElementById('cpass') as HTMLInputElement).value){
          if((document.getElementById('pass') as HTMLInputElement).value.length > 8){
              document.getElementById('form-login')!.style.display = 'none';
              document.getElementById('form-level')!.style.display = 'flex';
          }else{
              document.getElementById('passdont2')!.style.display = 'none';
              document.getElementById('passdont')!.style.display = 'none';
              document.getElementById('passdont1')!.style.display = 'flex';
          }
      }else{
          document.getElementById('passdont2')!.style.display = 'none';
          document.getElementById('passdont')!.style.display = 'flex';
      }
      
  }else{
      document.getElementById('passdont2')!.style.display = 'flex';
  }
}