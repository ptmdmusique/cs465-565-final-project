import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "components/Header";
import firebase from "firebase/app";
import { EditingPage } from "pages/EditingPage";
import { GeneratingPage } from "pages/GeneratingPage";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "styles/App.css";
import getClass from "data/helpers/classHelper";

function App() {
  useEffect(() => {
    // Initialize Firebase
    if (firebase.apps.length <= 0) {
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
    } else {
      firebase.app();
    }
  }, []);

  const randomScore = Math.floor(Math.random() * 100) + 1; // 1 to 100
  const npcClass = getClass.getClass("good", randomScore);
  console.log("npc class: " + npcClass);
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

  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/generate">
            <GeneratingPage />
          </Route>

          <Route path="/edit">
            <EditingPage />
          </Route>

          <Route path="*">
            <Redirect to="/generate" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
