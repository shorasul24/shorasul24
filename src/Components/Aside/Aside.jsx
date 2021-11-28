import './Aside.scss'

import Nav from '../Nav/Nav';
import Subscriptions from '../Subscriptions/Subscriptions'
import Setting from '../Setting/Setting';
import useAside from '../../Hook/useAside';

function Aside () {

   const [open] = useAside();

   return(
      <>
         <aside className={`aside ${open && 'aside-close'}`}>
            <Nav/>
            <Subscriptions/>
            <Setting/>
         </aside>
      </>
   )
}

export default Aside;