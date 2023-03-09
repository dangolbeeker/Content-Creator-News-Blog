import { useState } from "react";
import { NavLink, Link } from "react-router-dom";








const Header = () => {
    return (
        <nav id="menu" className="navbar navbar-fixed-top navbar-default">
            <div className="container">
                <div className="navbar-header">
                <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href={''}>
          <img src={LOGO} width="170" height="170" />
          </a>{''}
        </div>


        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
                <a href="#Articles" className="page-scroll">
                    Articles
                </a>
            </li>
            <li>
                <a href="#Featured" className="page-scroll">
                    Featured
                </a>
            </li>
            <li>
                <a href="#About" className="page-scroll">
                    About
                </a>
            </li>

            <li>
                <a href="#Contact" className="page-scroll">
                    Contact
                </a>
            </li>
            </ul>
                </div>
            </div>
        </nav>
        
    );
};