import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  // Open and close modals
  const openLoginModal = () => setLoginModalOpen(true);
  const openSignupModal = () => setSignupModalOpen(true);
  const closeModals = () => {
    setLoginModalOpen(false);
    setSignupModalOpen(false);
  };

  // Handle form submissions
  const handleReportSubmit = (e) => {
    e.preventDefault();
    alert("Issue reported successfully!");
  };

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    alert("Tracking issue...");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("Logged in successfully!");
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    alert("Signed up successfully!");
  };

  return (
    <div className="App" style={{marginLeft:"300px"}}>
      {/* Navigation Bar */}
      <nav>
        <div className="logo">Issue Reporter</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#report">Report Issue</a></li>
          <li><a href="#track">Track Issue</a></li>
          <li><a href="#login" className="login-btn" onClick={openLoginModal}>Login</a></li>
          <li><a href="#signup" className="signup-btn" onClick={openSignupModal}>Sign Up</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h1>Report Local Issues</h1>
        <p>Help make your community better by reporting issues like potholes, broken streetlights, and more.</p>
        <a href="#report" className="cta-btn">Report an Issue</a>
      </section>
      


      {/* Report Issue Section */}
      <section id="report" className="report-issue">
        <h2>Report an Issue</h2>
        <form onSubmit={handleReportSubmit}>
          <label htmlFor="issue-type">Issue Type:</label>
          <select id="issue-type" name="issue-type">
            <option value="pothole">Pothole</option>
            <option value="streetlight">Broken Streetlight</option>
            <option value="graffiti">Graffiti</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" placeholder="Enter location" />

          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" placeholder="Describe the issue"></textarea>

          <button type="submit">Submit Report</button>
        </form>
      </section>

      {/* Track Issue Section */}
      <section id="track" className="track-issue">
        <h2>Track Your Reported Issues</h2>
        <p>Enter your report ID to track the status of your issue.</p>
        <form onSubmit={handleTrackSubmit}>
          <label htmlFor="report-id">Report ID:</label>
          <input type="text" id="report-id" name="report-id" placeholder="Enter your report ID" />
          <button type="submit">Track</button>
        </form>
      </section>

      {/* Login Modal */}
      {loginModalOpen && (
        <div id="login" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModals}>&times;</span>
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" placeholder="Enter your username" />

              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" />

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {signupModalOpen && (
        <div id="signup" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModals}>&times;</span>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignupSubmit}>
              <label htmlFor="fullname">Full Name:</label>
              <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" />

              <label htmlFor="new-password">Password:</label>
              <input type="password" id="new-password" name="new-password" placeholder="Create a password" />

              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;