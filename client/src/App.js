import { Route } from 'react-router-dom';
import './App.css';
import CardDog from './components/CardDog';
import DogDetail from './components/DogDetail';
import Form from './components/Form';
import Home from './components/Home';
import LandingPage from './components/landingPage';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Route exact path= "/">
        <LandingPage/>
      </Route>

      <Route path= "/Home" >
        <Navbar/>
        <Home/>
      </Route>

      <Route path= "/Detail/:id" >
        <DogDetail/>
      </Route>

      <Route path= "/Create" >
        <Form/>
      </Route>
    </div>
  );
}

export default App;
