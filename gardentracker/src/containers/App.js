import logo from '../logo.svg';
import NavBar from '../components/Navbar';
import { Route} from 'react-router-dom';
import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        The Garden Tracker
      </header>
      <NavBar />
      <div>
        {/* replace with a fetch garden or send fetch garden to create garden add router? */}
        <Route exact path='/' /> {/*render={routerProps => <CreateGarden {...routerProps} />} /> {/* Home page what do welcome page shows gardens last event logged to the notes shows plant count shows harvest count */}
        <Route exact path='/garden'/> {/*render={routerProps => <Garden {...routerProps} />} /> {/* Garden page this will show a list of the current plants and allow you to add more plants */}
        <Route exact path='/harvest' /> {/*render={routerProps => <Harvest {...routerProps} />}*/ }  {/* Harvest page shows a list of harvested plants this is not editable stands as a living record of your garden*/}
        {/*<Route />*/} {/* Plant page shows the plant and a form to add notes to the plant has pre-determined buttons that  add a templated event to the plant tracker notes*/}
      </div>
    </div>
  );
}

export default App;
