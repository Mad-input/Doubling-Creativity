// eslint-disable-next-line import/no-absolute-path
import Logo from './icons/Logo.jsx'

export default function Navbar () {
  return (
    <nav className='navbar'>
      <div className="logo-container">
        <Logo size={'35px'}/>
        <strong>DoubingCreativity</strong>
      </div>
      <ul className='navbar-list'>
        <li className='list-item'>
          <a href='#'>Cursos</a>
        </li>
        <li className='list-item'>
        <a href='#'>Articulo</a>
        </li>
        <li className='list-item'>
        <a href='#'>Blog</a>
        </li>
        <li className='list-item'>
        <a href='#'>Eventos</a>
        </li>
      </ul>
      <div className="buttons-sig-log">
        <button className="btn sing-up">Sing up</button>
        <button className="btn log-ing">Log in</button>
      </div>
    </nav>
  )
}
