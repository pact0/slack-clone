import React from 'react';
import "../style/Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider"
import { actionTypes } from "../reducer"

const Login = () => {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            console.log(result)
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }).catch(err => {
            alert(err)
        });
    }

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1280px-Slack_Technologies_Logo.svg.png" alt="" className="logo" />
                <h1>Sign in</h1>
                <p>slack-clone</p>
                <Button type="submit" onClick={signIn()}>Sign in with Google</Button>
            </div>

        </div >
    )
}

export default Login
