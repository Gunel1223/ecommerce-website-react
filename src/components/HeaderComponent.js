import React, { Component } from "react";
import { Nav,  Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from "reactstrap";
import { NavLink } from 'react-router-dom';



class Header extends Component {
    constructor (props){
        super(props);

        this.toggleNav=this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };

    }

    toggleNav(){
        this.setState ({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <React.Fragment>
                <Nav>
                    <Navbar dark sticky="top" >
                        <div className="container">
                            <NavbarToggler  onClick={this.toggleNav} />
                            <Collapse isOpen ={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/myaccount">My Account</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/myorders">My Orders</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/recentlyviewed">Recently Viewed</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/mylists">My Lists</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>
                    <div>
                        <h4>Search Bar</h4>
                    </div>
                    <div>
                        <h4>Cart</h4>
                    </div>
                </Nav>
                <Nav>

                </Nav>
            </React.Fragment>
        );
    }
}

export default Header;