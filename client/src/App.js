import { Route } from 'react-router-dom';
import './App.css';
// import CardDog from './components/CardDog/CardDog';
import DogDetail from './components/DogDetail/DogDetail';
// import Searchbar from './components/SerchBar/SearchBar'
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
// import Navbar from './components/NavBar/Navbar';
import Formdog from './components/CreateDog/CreateDogs2';


function App() {
  return (
    <div className="App">
      <Route exact path= "/">
        <LandingPage/>
      </Route>

      <Route path= "/Home" >
        <Home/>
      </Route>

      <Route path= "/dogs/:id" >
        <DogDetail/>
      </Route>

      <Route path= "/Create" >
        {/* <CreateDog/> */}
        <Formdog/>
      </Route>
    </div>
  );
}

export default App;
