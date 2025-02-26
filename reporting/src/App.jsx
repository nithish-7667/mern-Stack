import React, { useState } from "react";

const HomePage = ({ onLogin }) => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Welcome to Local Issue Reporting</h2>
      <button
        onClick={onLogin}
        className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Login to Report Issues
      </button>
    </div>
  );
};

const LoginPage = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      onLoginSuccess();
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter Username"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter Password"
          required
        />
        <button
          type="submit"
          className="w-full p-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

const LocalIssueReporting = () => {
  const [formData, setFormData] = useState({
    name: "",
    issue: "",
    location: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Issue reported successfully!");
    setFormData({ name: "", issue: "", location: "" });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Local Issue Reporting</h2>
      <form onSubmit={handleSubmit}>
        <label className="block font-semibold">Your Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your name"
          required
        />
        <label className="block font-semibold">Issue Description:</label>
        <textarea
          name="issue"
          value={formData.issue}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          placeholder="Describe the issue"
          rows="4"
          required
        />
        <label className="block font-semibold">Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter issue location"
          required
        />
        <button
          type="submit"
          className="w-full p-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        showLogin ? (
          <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />
        ) : (
          <HomePage onLogin={() => setShowLogin(true)} />
        )
      ) : (
        <LocalIssueReporting />
      )}
    </div>
  );
};

export default App;
