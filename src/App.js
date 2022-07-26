import logo from './logo.svg';
import './App.css';
import Add from './Addele';
import {db} from "./firebase";
import Update from './Update';
import {useState,useEffect} from "react";
import Comp from './comp';
import {collection , getDocs,addDoc, updateDoc, doc} from "firebase/firestore";

function App() {
  return (
    <div className="App">
      <Add/>
    </div>
  );
}

export default App;
