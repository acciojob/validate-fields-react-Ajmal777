import React , {useState} from "react";

const Form = () =>{
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);
    function handleClick(){
        if(!name || !pass){
            setError(true);
        }
        else setError(false)
    }

    return (
        <div id="form">
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" onChange={(e) => setPass(e.target.value)} />
            {error && <p id="errorMessage" style={{color: "red"}}>Both username and password are required.</p>}
            <button onClick={handleClick}>Login</button>
        </div>
    )
}

export default Form;