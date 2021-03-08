import React from 'react'
import { useHistory } from 'react-router-dom'
import db from '../firebase';
import '../style/SidebarOption.css'

const SidebarOption = ({ title, Icon, addChannelOption, id }) => {
    const history = useHistory();

    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`);
        } else {
            history.push('title');
        }
    };

    const addChannel = () => {
        const channelName = prompt("Please enter the channel name.")

        if (channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }

    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className="sidebar_icon" />}
            {Icon ? (
                <h3>{title}</h3>
            ) :
                <h3 className="sidebar_channel">
                    <span className="hash">
                        #</span>
                    {title}</h3>
            }

        </div>
    )
}

export default SidebarOption
