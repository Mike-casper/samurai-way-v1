import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://www.shutterstock.com/image-photo/chairs-umbrella-palm-beach-tropical-260nw-559599520.jpg"/>
            </div>
            <div>
                ava+disc
            </div>
            <MyPosts/>
        </div>
    )
}