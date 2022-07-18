import style from './style.scss';
import icon from '../../assets/icons/searchIcon.svg'
import { apiKey } from '../../api';
import { CardMovie } from '../CardMovie';

const searchURL=`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`
const form = document.getElementById('form')
const search = document.getElementById('search')

const delay = ms =>new Promise(
  resolve => setTimeout(resolve,ms)
)
export const InputTxt = ({text, onChange}) => {
  const handleChange= async event=>{
    await delay (3000)
  onChange(event.target.value)
  }

  return (
    <div id='form' className='inputContainer'>
      <img src={icon}>
      </img>
      <input type= "search" value={text} id='search'
       placeholder='Search Movies or TV Shows'
       onChange={handleChange}>
      </input>
    </div >
   
  )
}
// form.addEventListener('submit', (e) =>{
//   e.preventDefault();
  
//   const searchTerm = search.value

//   if(searchTerm){
//     CardMovie(searchURL+'&query='+searchTerm)
//   }else{
//     console.log("nao tem nada")
//   }
// })