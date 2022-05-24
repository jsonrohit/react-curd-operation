import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-link active">Home</Link>
                            <Link to="/about/Welcome" className="nav-link">About</Link>
                            <Link to="/contact?name=netflix" className="nav-link">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;