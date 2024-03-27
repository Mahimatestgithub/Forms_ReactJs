import React, { useState } from "react";
const App = ()=>{

    const [name,setName]=useState("");  //hooks

    const[fullName,setFullName]=useState("");  //hooks

    const[lastName,setLastName]=useState(""); //hooks

    const[lastNamenew,setLastNameNew]=useState(""); //hooks

    const onSubmit=(event)=>
    {
    event.preventDefault();
    setFullName(name);
    setLastNameNew(lastName);
    }
    const inputEvent =(event)=>
    {
        setName(event.target.value);
        
    };

    const inputEventTwo =(event)=>
    {
        setLastName(event.target.value);
    };
   
    return (
        <>
        <div className="main_div">
        <form onSubmit={onSubmit}>
            <div>
                <h1>Hello {fullName} {lastNamenew}</h1>

                <input type="text" placeholder="Enter your Name"
                    onChange={inputEvent}
                    value={name}
                />
                <br/>
                
                <input type="text" placeholder="Enter your LastName"
                    onChange={inputEventTwo}
                    value={lastName}
                />
                <button type="submit" >Submit Me 👍</button>
            </div>
            </form>
            </div>
        </>
    )
};
export default App;