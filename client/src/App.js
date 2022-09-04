
import './App.css';
import AddSong from './components/AddSong';
import Home from './components/Home';

import NavBarApp from './components/NavBarApp';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddArtist from './components/AddArtist';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBarApp/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="addsong" element={<AddSong/>} />
      <Route path="addartist" element={<AddArtist/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
