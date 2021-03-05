import React from 'react'
import '../style/SidebarOption.css'

const SidebarOption = ({ title, Icon }) => {
    return (
        <div className="sidebarOption">
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
