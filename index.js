const express = require("express")
const app = express()
const cors = require("cors")

app.use(
    cors({
      origin:"*",
    })
  )
  const jokeHereFin = document.querySelector(".jokeHere")
  // console.log(jokeHereFin.value)
  
      const getJoke = ()=>{
   
          const setHeader = {
              headers: {
                  Accept : "application/json"
              }
          }
          console.log("this is working")
      fetch("https://api.wazirx.com/api/v2/tickers",setHeader)
    //   fetch("/api/v2/tickers",{
    //     method : "GET",
    //     headers : {
    //       "Content-Type" : "application/json"
    //     }
    //   })
  
      .then((res)=>{ 
        res.json()
        
      })
  
      .then((data)=>{
        console.log(data)
        //  jokeHereFin.innerHTML = data.btcinr.base_unit;
       
      }).catch((error) =>{
          console.log(error);
      })
  }
  getJoke();