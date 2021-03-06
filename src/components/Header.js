import React from 'react'

import '../style/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import HelpIcon from '@material-ui/icons/Help';
import { useStateValue } from "../StateProvider"

const Header = () => {
    const [{ user }] = useStateValue();
    return (
        <div className="header">
            <div className="header_left">
                <Avatar alt={user?.displayName} src={user?.photoURL} />
                <WatchLaterIcon />

            </div>
            <div className="header_search">
                <SearchIcon />
                <input type="text" className="header_input" placeholder="Search" />
            </div>
            <div className="header_right">
                <HelpIcon />
            </div>
        </div>
    )
}

export default Header
