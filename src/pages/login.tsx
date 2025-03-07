import { useState } from "react"

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);
    };

    return (
        <div>
            <h2 className="title">Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Username</label>
                <input 
                type="text" 
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />

                <br />

                <label htmlFor="">Password</label>
                <input 
                type="text" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </form>
        </div>
    )
}

export default Login