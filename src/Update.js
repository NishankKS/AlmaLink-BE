import { useState,useEffect } from "react";
import {db} from "./firebase";
import {collection ,query, getDocs,where,limit,addDoc, updateDoc, doc, orderBy} from "firebase/firestore";
import { auth } from "./firebase";


import "./App.css";
export default function Update(){

const us=auth.currentUser;

    const ref= query(collection(db,"Alumni"), where());
    const [users,setUsers]=useState([]);
    useEffect(()=>{
    
        const getUsers=async()=>{
          const data=await getDocs(ref);
          setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
         
        }
        
        getUsers();
      
        
      },[]);
      
    const [Name,setName]=useState(users.name)
    const [dept,setDept]=useState(users.Department);
    const [soc,setSoc]=useState(users.contact);
    const [age1,setAge]=useState(users.age);
    const [usn1,setUsn]=useState(users.usn);
    const [domain,setDomain]=useState(users.Domain);

    const updateUser = async (id,name,usn,age,Department,Domain,social) => {
        const userDoc = doc(db, "Alumni", id);
        const newDat={name:Name,age:age1,usn:usn1,Department:dept,Domain:domain,social:soc};
        try{
        await updateDoc(userDoc,newDat );}
        catch(error){
          console.log(error);
        }
      };

    return(
      <div>
       {
            
            <>
            
            {users.map((user)=>{
              return(
                <div className="ADD">
            <label >Name:</label>
                <input  onChange={(event)=>{setName(event.target.value)}} placeholder={user.name} />
                <br/>
                <label >Department:</label>
                <input onChange={(event)=>{setDept(event.target.value)}} placeholder={user.Department}/>
                <br/>
                <label >USN:</label>
                <input  onChange={(event)=>{setUsn(event.target.value)}} placeholder={user.usn} />
                <br/>
                <label >Age:</label>
                <input onChange={(event)=>{setAge(event.target.value)}}  type="number" placeholder={user.age} />
                <br/>
                <label >Domain:</label>
                <input onChange={(event)=>{setDomain(event.target.value)}} placeholder={user.Domain} />
                <br/>
                <label >Github profile:</label>
                <input onChange={(event)=>{setSoc(event.target.value)}} placeholder={user.contact} />
                <br/>
<button onClick={()=>{updateUser(user.id,user.name,user.usn,user.age,user.Department,user.Domain,user.contact)}}>Update  Data</button>
        </div>
              )
              })};
              
              </>
              
            }
      </div>
    )
      }