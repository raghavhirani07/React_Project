import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary h6'>
      <div className='container-fluid'>
      {
      /* -------------------------------------------------------------------------- */
      /*                                    Logo                                    */
      /* -------------------------------------------------------------------------- */
      }
        <a className='navbar-brand' href='/'>{props.title}  </a>
        <button
          className='navbar-toggler'
          type='button'
          data-mdb-toggle='collapse'
          data-mdb-target='#navbarTogglerDemo02'
          aria-controls='navbarTogglerDemo02'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <i className='fas fa-bars'></i>
        </button>
        {
        /* -------------------------------------------------------------------------- */
        /*                                    pages                                   */
        /* -------------------------------------------------------------------------- */
        }
        <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/'>Home</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/about'>About </Link>
            </li>
            <li className='nav-item'>
              <a className='nav-link ' href='/'>Contact us</a>
            </li>
          </ul>
          {
            /*-------------------------------------------------------------------------- */
            /*                                   search                                   */
            /* -------------------------------------------------------------------------- */
          }
          {/* <form className='d-flex input-group w-auto'>
            <input
              type='search'
              className='form-control'
              placeholder='Type query'
              aria-label='Search'
            />
            <button
              className='btn btn-warning  text-dark mx-1 rounded'
              type='button'
              data-mdb-ripple-color='dark'
            >
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

Navbar.defaultProps = {title : 'Not Found'}
// Navbar.propsTypes = {
//     title: propsTypes.string
// }
