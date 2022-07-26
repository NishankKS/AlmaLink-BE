import React  from "react";
import ReactDom from "react-dom"
import { useState,useEffect } from "react";
import {db} from "./firebase";
import {collection ,query, getDocs,where,limit,addDoc, updateDoc, doc, orderBy} from "firebase/firestore";

export default function Comp(){
   const [Input,setInput]=useState("");
    const ref= query(collection(db,"Alumni"),where("Age","<=",24));
    const [users,setUsers]=useState([]);
//     const [dat,setDat]=useState([]);
//     const getDat=()=>{
// setDat(users)
//     }
    
    
    

    useEffect(()=>{
    
        const getUsers=async()=>{
          const data=await getDocs(ref);
          setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
         
        }
        getUsers();
        // getDat();
        
      },[]);
      const HandleSubmit=(e)=>{
        e.preventDefault();
      // if(dat.length==0)
      // getDat();
       setUsers(users.filter(user =>user.name.includes(Input)))
        
       }
       const HandleCheck=(e)=>{
        e.preventDefault();
        // if(users.length!=0)
        // getDat();
        
        setUsers(users.filter(user=>user.Department.includes(e.target.value)))
       }
      return(
        <div>
          <form onSubmit={(e)=>{HandleSubmit(e)}}>
          <input placeholder="name..." onChange={(e)=>{setInput(e.target.value)}}/>
          <button type="submit">Search</button>
          
          
          <input type={"checkbox"} onChange={(e)=>{HandleCheck(e)}} value="CSE"/><label>CSE</label>
          <input type={"checkbox"}  onChange={(e)=>{HandleCheck(e)}} value="ISE"/><label>ISE</label>
          </form>
{console.log(Input)}
          
          {
            
              <>
              {console.log(users)}
              {users.map((user)=>{
                return(<div>
                  <h2>name:{user.name}</h2>
                  <h2>Department: {user.Department}</h2>
                  
                  <h2>domain:{user.Domain}</h2>
                  
                  
                  </div>)
                })};
                
                </>
                
              }
      </div>
      )
}

