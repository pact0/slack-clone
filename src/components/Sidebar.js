import '../style/Sidebar.css';
import { useState, useEffect } from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption'
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from "../firebase"

const Sidebar = () => {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection("rooms").onSnapshot((snapshot) => (
            setChannels(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                })))
        ))
    }, [])



    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_logged">
                    Logged as
                    <div className="sidebar_info">
                        <FiberManualRecordIcon />
                    Dude
                    </div>
                </div>
                <CreateIcon />
            </div>

            <div className="menu_options">
                <SidebarOption Icon={InsertCommentIcon} title="Threads" />
                <SidebarOption Icon={InboxIcon} title="Mentions" />
                <SidebarOption Icon={DraftsIcon} title="Saved" />
                <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
                <SidebarOption Icon={PeopleAltIcon} title="Peopl" />
                <SidebarOption Icon={AppsIcon} title="Apps" />
                <SidebarOption Icon={FileCopyIcon} title="Files" />
                <SidebarOption Icon={ExpandLessIcon} title="Show less" />
                <hr className="hr" />
                <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
                <hr className="hr" />
                <SidebarOption Icon={AddIcon} title="Add channel" />
                <hr className="hr" />


            </div>


            <div className="channels">
                {channels.map(channel =>
                    <SidebarOption title={channel.name} id={channel.id} />
                )}
            </div>

        </div>
    )
}

export default Sidebar
