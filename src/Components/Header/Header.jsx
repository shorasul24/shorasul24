import './Header.scss'
import Humburger from "../Humburger/Humburger";
import Account from '../Account/Account';


function Header() {
   return (
      <>
         <header className='header'>
            <div className="container">
               <Humburger />
               <Account />
            </div>
         </header>

      </>

   )
}

export default Header;