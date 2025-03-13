import { useState } from "react";

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
      try {
          console.log("Attempting login with:", email, password); // Debugging
  
          const response = await fetch("http://localhost:5000/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
          });
  
          console.log("Raw response:", response); // Debugging
          const data = await response.json();
          console.log("Response JSON:", data); // Debugging
  
          if (response.ok) {
              alert("✅ Login successful!");
          } else {
              alert(`❌ ${data.message}`);
          }
      } catch (error) {
          console.error("Login error:", error);
          alert("Something went wrong!");
      }
  };
  
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Login</h2>
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
            <button onClick={handleLogin} style={{ padding: "10px 20px", cursor: "pointer" }}>
                Log In
            </button>
        </div>
    );
}

export default App;
