import './style.scss'
import logo from '../../assets/logo.svg'
import {Link} from 'react-router-dom';
import arrow from '../../assets/icons/arrow.svg'

export function Navbar() {
  return (
    <header className='nav-header'>
      <Link to='/'>
        <img className='logo' src={logo} alt="Logo"/>
      </Link>
      <nav className='navLinks'>
        <ul>
          <li className='navItens'>
            <a href="#">Movie</a>
          </li>
          <li className='navItens'>
            <a href="#">TV Show</a>
          </li>
          <li className='navItens'>
            <a href="#">Suggest me </a>
            <img className='arrow' src={arrow}></img>
          </li>
        </ul>
      </nav>
    </header>
  )
}