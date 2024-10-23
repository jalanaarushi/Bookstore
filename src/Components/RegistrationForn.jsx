// src/Components/RegistrationForm.jsx
import { useState } from "react";

export default function RegistrationForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send only necessary data to the server
        const userData = { email, password };
        // Your API call here
        console.log("User Data:", userData); // Example log to show data
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                placeholder="Email"
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                placeholder="Password"
            />
            <button type="submit">Register</button>
        </form>
    );
}
