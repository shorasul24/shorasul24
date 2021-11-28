import './Humburger.scss';

import Logo from '../../Assets/Images/logo.png'
import Searchinput from '../Seachinput/Searchinput'
import useAside from '../../Hook/useAside.js';
import { NavLink } from 'react-router-dom';


function Humburger() {

   const [setOpen] = useAside(true);

   return (
      <>
         <div className='humburger'>

            <div className='btn__logo--box'>
               <button className='btn__humburger'
                  onClick={() => setOpen((prev) => !prev)}
                  >
                  <i className="far fa-bars"></i>
               </button>

               <NavLink className="logo" to='/'>
                  <img src={Logo} alt="Youtube Logo" width='116' height='25' />
               </NavLink>
            </div>

            <Searchinput />
         </div>

      </>
   )
}

export default Humburger;