import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

console.log(s)

// let c1 = "item";
// let c2 = "active";
//item active
// let classes = c1 + " " + c2;
let classesNew = `${s.item} ${s.active}`;

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={classesNew}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/setting" activeClassName={s.activeSett}>Setting</NavLink>
            </div>
        </nav>
    )
}