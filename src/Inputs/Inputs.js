import React, {useState} from "react";

function Inputs() {
    const [name,setname]=useState('');
    const [password,setpassword]=useState('');
    return(
        <div>
            <label>Name</label>
            <input type="text" /><br/>
            <label>Password</label>
            <input type="password" /><br/>
            <button onClick={()=>
            setname(name=>"muazam")}>submit</button>
            <p>Name is {name}</p>
            <p>Password is {password}</p>
        </div>
    )

}

export default Inputs;
