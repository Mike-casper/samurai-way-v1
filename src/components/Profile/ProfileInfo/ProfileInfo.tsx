import React from "react";
import s from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://www.shutterstock.com/image-photo/chairs-umbrella-palm-beach-tropical-260nw-559599520.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+disc
            </div>
        </div>
    )
}