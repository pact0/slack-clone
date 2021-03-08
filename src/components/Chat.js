import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../style/Chat.css"
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from "../firebase"
import Message from "./Message"
import ChatInput from "./ChatInput"

const Chat = () => {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState();
    const [roomMessages, setRoomMessages] = useState([]);

    useEffect(() => {
        if (roomId) {

            db.collection("rooms")
                .doc(roomId)
                .onSnapshot((snapshot) =>
                    (setRoomDetails(snapshot.data()))
                )
        }

        db.collection("rooms").doc(roomId).collection("messages")
            // .orderBy("timestamp", "ascr")
            .onSnapshot(snapshot =>
                setRoomMessages(snapshot.docs.map(doc => doc.data())))
    }, [roomId])

    console.log(roomDetails)
    return (
        <div className="chat">

            <div className="chat_header">


                <div className="chat_headerLeft">
                    <h4 className="chat_channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderIcon />
                    </h4>
                </div>

                <div className="chat_headerRight">
                    <p>
                        <InfoOutlinedIcon />
                        Details
                    </p>
                </div>
            </div>

            <div className="chat_messages">
                {roomMessages.map(({ message, user, userimage }) =>
                    <Message
                        message={message}
                        // timestamp={timestamp}
                        user={user}
                        userimage={userimage}
                    />
                )}
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}

export default Chat
