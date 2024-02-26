import './App.css';
import { Feed } from './Components/Feed/Feed';
import { Header } from './Components/Header/Header';
import { Login } from './Components/Login/Login';


function App() {
  return (
    <div className="App">
      {/* Login
          Del login que me envie para el feed
            Header
            Routes
              Feed
              Profile
              Chat
            Routes
             */}

      {/* <Login/> */}
      <div className="body-container">
        <Header/>
        <Feed/>
      </div>
    </div>
  );
}

export default App;
