import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./logo.svg";
import firebase from "firebase/app";
import getClass from './data/helpers/classHelper.js';

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
  const randomScore = Math.floor(Math.random()*100)+1;// 1 to 100
  const npcClass = getClass.getClass('good', randomScore);
  console.log('npc class: ' + npcClass);
  const adept = getClass.getAdept();
  const barbarian = getClass.getBarbarian();
  const aristocrat = getClass.getAristocrat();
  const bard = getClass.getBard();
  const cleric = getClass.getCleric();
  const commoner = getClass.getCommoner();
  const druid = getClass.getDruid();
  const expert = getClass.getExpert();
  const fighter = getClass.getFighter();
  const monk = getClass.getMonk();
  const paladin = getClass.getPaladin();
  const ranger = getClass.getRanger();
  const rogue = getClass.getRogue();
  const sorcerer = getClass.getSorcerer();
  const warrior = getClass.getWarrior();
  const wizard = getClass.getWizard();
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
