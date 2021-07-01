import React, { Component } from 'react';
import { NavLink, Route  } from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <div>
                <h2>The Worst Page in the History of Pages</h2>
                <Route>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/create">
                        Add a Character
                    </NavLink>
                    <NavLink to="/listpage">
                        Character List
                        </NavLink>
                    </Route>
            </div>
        )
    }
}
