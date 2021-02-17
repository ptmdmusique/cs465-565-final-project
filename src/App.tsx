import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./logo.svg";
import firebase from "firebase/app";
import getClass from '../src/data/helpers/helpers.js';

const firebaseConfig = {
  apiKey: "AIzaSyAu48AzSCNeIxovMLOrf9KIwbta2kh47MY",
  authDomain: "cs465-565.firebaseapp.com",
  projectId: "cs465-565",
  storageBucket: "cs465-565.appspot.com",
  messagingSenderId: "611141517345",
  appId: "1:611141517345:web:2ac7d91ca19d480c276360",
  measurementId: "G-NWFJR33125",
};
firebase.initializeApp(firebaseConfig);

function App() {

  // TODO: mccoy - to be removed. Just to see objects created from mapper function
  var adept = getClass.getAdept();
  var barbarian = getClass.getBarbarian();
  var aristocrat = getClass.getAristocrat();
  var bard = getClass.getBard();
  ////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
