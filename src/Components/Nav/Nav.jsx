import './Nav.scss';

import { NavLink } from 'react-router-dom';


function Nav() {
   return (
      <nav className="nav">
         <ul className="nav__list">
            <li className="nav__list--item">
               <NavLink className='nav__link' to='/'>
                  <i class="fal fa-home-lg-alt far__icon"></i>
                  Home
               </NavLink>
            </li>
            <li className="nav__list--item" >
               <NavLink className='nav__link' to='/channel'>
               <i class="far fa-fire far__icon"></i>
               Trending
               </NavLink>
            </li>
            <li className="nav__list--item">
              <NavLink className='nav__link' to='/video/:id'>
              <i class="fal fa-album-collection far__icon"></i>
               Subscriptions
              </NavLink>
            </li>
            <li className="nav__list--item">
               <i class="fal fa-folder far__icon"></i>
               Library
            </li>
            <li className="nav__list--item">
               <i class="fal fa-scroll far__icon"></i>
               History
            </li>
            <li className="nav__list--item">
               <i class="fal fa-alarm-clock far__icon"></i>
               Watch later
            </li>
            <li className="nav__list--item">
               <i class="fal fa-star far__icon"></i>
               Favourites
            </li>
            <li className="nav__list--item">
               <i class="fal fa-heart far__icon"></i>
               Liked videos
            </li>
            <li className="nav__list--item">
               <i class="far fa-music far__icon"></i>
               Music
            </li>
            <li className="nav__list--item">
               <i class="far fa-gamepad-alt far__icon"></i>
               Games
            </li>
            <li className="nav__list--item">
               <i class="far fa-chevron-down far__icon"></i>
               Show more
            </li>
         </ul>
      </nav>
   )
}

export default Nav;