import React from 'react'
import "../style/Message.css"

const Message = ({ message, user, userimage }) => {
    return (
        <div className="message">
            <img src={userimage} alt="" className="message_userImg" />
            <div className="message_info">
                <h4>{user} {" "}
                    {/* <span className="message_timestamp">
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span> */}
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}


export default Message
