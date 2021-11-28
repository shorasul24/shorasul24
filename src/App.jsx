import './App.scss';

import Home from '../src/Pages/HomePage/Home';
import Channel from '../src/Pages/ChannelPages/ChannelPages';
import Video from '../src/Pages/VideoPlayPage/VideoPlayPage';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/channel/*' element={<Channel/>}/>
        <Route path='/video/:id' element={<Video/>}/>
      </Routes> 
    </>
  );
}

export default App;
