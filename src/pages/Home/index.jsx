import { Navbar } from "../../components/Navbar"
import { InputTxt } from "../../components/inputTxt"
import { Filter } from "../../components/Filter"
import { CardMovie } from "../../components/CardMovie"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useContent } from "../../hook/useContent"

import './style.scss'
import { apiKey } from "../../api"

export function Home() {
  const [text, setText] = useState('')


  
  useEffect (() => {
   
    if(text){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${text}`)
      
      .then((response)=>response.json())
      .then((response)=>{
        console.log(response)
      })
    }

  },[text])


  return (

    <div className='container'>
      <section className='pageContainer'>
        <h1 className='title'>
          MaileHereko
        </h1>
        <p className='description'>
          List of movies and TV Shows, <span>I, Pramod Poudel</span> have
          watched till date. Explore what I have watched and also feel free to
          make a suggestion. 😉
        </p>
        <div className="inputTxt">
          <InputTxt value={text} onChange={(search) => setText(search)} />
        </div>
      </section>
      <div className='tabFilter'>
        <Filter />
      </div>
      <section>
        <header className="category">
          <strong>All</strong>
          <span>(0)</span>
        </header>

        <CardMovie />

      </section>
    </div>
  )

}



