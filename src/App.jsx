import './assets/css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddAbout from './pages/AddAbout';
import Interest from './pages/Interest';
import Personality from './pages/Personality';
import Topmatches from './pages/Topmatches';
import UsersList from './pages/UsersList';
import RegisterDetails from './pages/RegisterDetails';
import Login from './pages/Login';
import ProfileDetails from './pages/PersonalDetails';
import LoadingPage from './pages/Loading';
import LandingPage from './pages/Landing';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingPage/>} />
        <Route path="/home" element={<LandingPage/>} />
        <Route path="/register" element={<RegisterDetails/>} />
        <Route path="/addinterest" element={<Interest/>} />
        <Route path="/addabout" element={<AddAbout/>} />
        <Route path="/addpersonality" element={<Personality/>} />
        <Route path="/topmatches" element={<Topmatches/>}/>
        <Route path="/users" element={<UsersList/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile/:profileId" element={<ProfileDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
