import './Searchinput.scss';

function Searchinput () {
   return(
      <div className="icon__search">
               <div className='header__search--box'>
               <input className='header__search' type="search" placeholder='Search...' />
               </div>


               <div className='search__icon'>
                  <i className="far fa-search"></i>
               </div>
            </div>
   )
}
export default Searchinput;