import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "components/Header";
import firebase from "firebase/app";
import { EditingPage } from "pages/EditingPage";
import { GeneratingPage } from "pages/GeneratingPage";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "styles/App.css";

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
  return (
    <div className="App">
      <Header />

      <Router>
        <Switch>
          <Route path="/generate">
            <GeneratingPage />
          </Route>

          <Route path="/edit">
            <EditingPage />
          </Route>

          <Route path="/">
            <Redirect to="/generate" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
