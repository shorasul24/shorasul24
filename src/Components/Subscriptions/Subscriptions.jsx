import './Subscriptions.scss';

import User1 from '../../Assets/Images/user1.png';
import User2 from '../../Assets/Images/user2.png';
import User3 from '../../Assets/Images/user3.png';
import User4 from '../../Assets/Images/user4.png';
import User5 from '../../Assets/Images/user5.png';
import User6 from '../../Assets/Images/user6.png';

function Subscriptions() {

   return (
      <div className="subscription">

         <h3 className="subscriptions__heading">Subscriptions</h3>

         <ul className="subscription__list">
            <li className="subscription__item">
               <img className="subscription__avatar" src={User1} alt="Avatar" width="26"
                  height="26"
               />
               Gussie Singleton
            </li>
            <li className="subscription__item">
               <img className="subscription__avatar" src={User2} alt="Avatar" width="26"
                  height="26"
               />
               Nora Francis
            </li>
            <li className="subscription__item">
               <img className="subscription__avatar" src={User3} alt="Avatar" width="26"
                  height="26"
               />
               Belle Briggs
            </li>
            <li className="subscription__item">
               <img className="subscription__avatar" src={User4} alt="Avatar" width="26"
                  height="26"
               />
               Eunice Cortez
            </li>
            <li className="subscription__item">
               <img className="subscription__avatar" src={User5} alt="Avatar" width="26"
                  height="26"
               />
               Emma Hanson
            </li>
            <li className="subscription_item">
               <img className="subscription__avatar" src={User6} alt="Avatar" width="26"
                  height="26"
               />
               Leah Berry
            </li>
         </ul>
      </div>
   )
}

export default Subscriptions;