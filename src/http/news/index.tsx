import axios from "axios"
const API_KEY = "834bc2e5cfe44c40b141cf46157eb0d0"; // api news

export async function newsRequest(){
  const result = await axios.get('https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=834bc2e5cfe44c40b141cf46157eb0d0',
  {
      headers:{
          "Content-Type" : "application/x-www-form-urlencoded"
      },
  }
  )
  if(result.data.status === 'ok'){
      return result.data
  }else{
      alert('deu ruim')
  }
}