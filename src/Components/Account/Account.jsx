import Useravatart from '../../Assets/Images/Userpic.png'
import './Account.scss';

function Account() {
   return (
      <>
         <div className="icons__avatar">

            <button className='icon__video block__icon'>
               <i className="far fa-video"></i>
            </button>

            <button className='grip__icon block__icon'>
               <i className="far fa-grip-horizontal"></i>
            </button>

            <button className='bell__icon block__icon'>
               <i className="far fa-bell"></i>
            </button>

            <img src={Useravatart} alt="Avatar" width='40' height='40'/>
         </div>
      </>
   )
}

export default Account;