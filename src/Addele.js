import { useState,useEffect } from "react";
import {db} from "./firebase";
import {collection ,query, getDocs,where,limit,addDoc, updateDoc, doc, orderBy} from "firebase/firestore";
import "./App.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";
 export default function Add(){
    const ref= collection(db,"Alumni");
    const [Name,setName]=useState("")
    const [Department,setDepartment]=useState("");
    const [soc,setSoc]=useState("");
    const [Age,setAge]=useState(0);
    const [usn,setUsn]=useState("");
    const [Domain,setDomain]=useState("");
    const [regemail,setRegemail]=useState("");
    const [regpass,setRegpass]=useState("");
    const [user,setUser]=useState({});
  useEffect
   (()=>{ onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });},[])
    const createUser = async () => {
      await addDoc(ref, { name: Name, age: Number(Age) ,Department: Department,Domain:Domain ,usn:usn,contact:soc,email:regemail,password:regpass});


    };
    const register = async () => {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          regemail,
          regpass
        );
        createUser();
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
    };
    

   

      return(
        <div className="ADD">
           
                <label >Name:</label>
                <input  onChange={(event)=>{setName(event.target.value)}} placeholder="Enter Name" />
                <br/>
                <label >Department:</label>
                <input onChange={(event)=>{setDepartment(event.target.value)}} placeholder="Enter Department" />
                <br/>
                <label >USN:</label>
                <input  onChange={(event)=>{setUsn(event.target.value)}} placeholder="Enter USN" />
                <br/>
                <label >Age:</label>
                <input onChange={(event)=>{setAge(event.target.value)}}  type="number" placeholder="Enter Age" />
                <br/>
                <label >Domain:</label>
                <input onChange={(event)=>{setDomain(event.target.value)}} placeholder="Enter Domain" />
                <br/>
                <label >Github profile:</label>
                <input onChange={(event)=>{setSoc(event.target.value)}} placeholder="Enter link here" />
                <br/>
                <label >Emial:</label>
                <input onChange={(event)=>{setRegemail(event.target.value)}} placeholder="Email..." />
                <br/>
                <label >Password:</label>
                <input onChange={(event)=>{setRegpass(event.target.value)}} placeholder="Enter password:" />
                <br/>
                
<button onClick={register}>Submit Data</button>
<h4>User Logged in:</h4>
{user?.email}


            
        </div>
      )
    


}