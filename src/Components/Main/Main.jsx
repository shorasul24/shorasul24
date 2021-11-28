import './Main.scss';

import Aside from '../Aside/Aside';
import MainContent from '../MainContent/MainContent';

function Main () {
   return (
      <main className='main'>

         <div className="container">
            <Aside/>

            <MainContent/>
         </div>

      </main>
   )
}

export default Main;