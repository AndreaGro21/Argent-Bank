import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditProfile } from "../redux/profileInfoSlice";

export default function RenameBtn() {
    const token = useSelector(state => state.userToken.token);
    const profile = useSelector(state => state.profile);
    const [newUserName, setNewUserName] = useState(profile.nickName);
    const [error, setError] = useState("");
    const [showForm, setShowForm] = useState(false); 
    const dispatch = useDispatch();

    useEffect(() => {
        setNewUserName(profile.nickName);
    }, [profile.nickName]);

    const editUserName = async (e) => {
        e.preventDefault();
        if (!newUserName) {
            setError("This field cannot be empty.");
            return;
        }
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ nickName: newUserName })
            });
            if (!response) {
                throw new error("Something went wrong");
            }
            dispatch(setEditProfile(newUserName));
            setShowForm(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <button
                className="sign-in-button"
                onClick={() => setShowForm(!showForm)}>
                {showForm ? "Close" : "Edit"}
            </button>
            {showForm && (
                <form onSubmit={editUserName}>
                    <div className="input-wrapper">
                        <label htmlFor="nickName">Username</label>
                        <input
                            type="text"
                            id="nickName"
                            autoComplete="nickName"
                            value={newUserName}
                            onChange={(e) => setNewUserName(e.target.value)}
                        />
                        <button type="submit" className="sign-in-button">
                            Save
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
