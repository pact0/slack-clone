import React, { useState } from 'react'
import "../style/ChatInput.css"
import db from "../firebase"
import { useStateValue } from '../StateProvider';
import firebase from "firebase/app"

const ChatInput = ({ channelName, channelId }) => {
    const [input, setInput] = useState('');
    const [{ user }] = useStateValue();
    const sendMessage = (e) => {
        e.preventDefault();

        if (channelId) {

            db.collection("rooms").doc(channelId).collection("messages").add({
                message: input,
                // timestamp:,
                user: user.displayName,
                userimage: user.photoURL,
            }).then(() => {
                console.log("Document successfully written!");
            })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });


        }
    }
    return (
        <div className="chatInput">
            <form action="">
                <input
                    type="text"
                    value={input}
                    placeholder={`Message #${channelName}`}
                    onChange={e => setInput(e.target.value)} />
                <button type="submit" onClick={sendMessage}>SEND</button>
            </form>
        </div>
    )
}

export default ChatInput
