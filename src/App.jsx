  import { useState } from "react";

  function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
      try { 
        const response = await fetch("http://localhost:5000/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        alert(response.ok ? "✅ Registration successful!" : `❌ ${data.message}`);
      } catch (error) {
        console.error("Registration error:", error);
        alert("Something went wrong!");
      }
    };

    const handleLogin = async () => {
      try {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        alert(response.ok ? "✅ Login successful!" : `❌ ${data.message}`);
      } catch (error) {
        console.error("Login error:", error);
        alert("Something went wrong!");
      }
    };

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Register / Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: "block", margin: "10px auto", padding: "10px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", margin: "10px auto", padding: "10px" }}
        />
        <button onClick={handleRegister} style={{ marginRight: "10px", padding: "10px 20px" }}>
          Register
        </button>
        <button onClick={handleLogin} style={{ padding: "10px 20px" }}>
          Log In
        </button>
      </div>
    );
  }

  export default App;
