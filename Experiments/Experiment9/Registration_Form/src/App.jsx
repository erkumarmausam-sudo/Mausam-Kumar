import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [users, setUsers] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const newUser = {
      name,
      email,
    };

    setUsers([...users, newUser]);

    setSuccess(true);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Registration Form</h1>

         

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register Here!</button>
        </form>

        {success && (
          <p className="success-message">Registration Successful!</p>
        )}

        {users.length > 0 && (
          <div className="users-box">
            <h3>Registered Users</h3>

            <ul>
              {users.map((user, index) => (
                <li key={index}>
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;