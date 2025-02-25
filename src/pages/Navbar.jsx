import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://img.collegepravesh.com/2022/06/REC-Chennai-Logo.png"
            className="food-munch-logo"
            alt="Campus Connect Logo"
          />
          
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
        <h2>Rajalakshmi Engineering College</h2>
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="./dashboard">Home</a>
            <a className="nav-link" href="/department">Department</a>
            <a className="nav-link" href="/events">Events</a>
            <a className="nav-link" href="/schedule">Schedule</a>
            <a className="nav-link" href="/announcement">Announcement</a>
          </div>
        </div>

        <div className="dropdown ms-3">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
            alt="Profile"
            className="profile-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            width="40"
            height="40"
            style={{ borderRadius: "50%", cursor: "pointer", border: "2px solid black" }}
          />
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Rewards</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="/login">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;