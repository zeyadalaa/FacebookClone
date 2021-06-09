import React from 'react'
import './RightSidebar.css'
import Add from './Add/Add'
import addImage from './Enigma.jpg'
import FriendRequest from './FriendRequest/FriendRequest'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import SidebarRow from '../Sidebar/SidebarRow/SidebarRow.jsx'
import friendImage from './download.jpg'

function RightSidebar() {
    return (
        <div className="rightSidebar">
            {/**adds section */}
            <div className="rightSidebar__adds">
                <h3>Sponsored</h3>
                <Add src={addImage} title="Enigma lel EL7agat Elzakia" urlLink="el7agatelzakia.com"/>
                <Add src={addImage} title="Enigma lel EL7agat Elzakia" urlLink="el7agatelzakia.com"/>
            </div>
            {/**friend requests section */}
            <div className="rightSidebar__friendRequests">
            <h3>Friend Requests</h3>

                <FriendRequest src={friendImage} name="Elon Musk" mutualFriend="58" numberOfdays="14"/>
            </div>
            {/**birthday section */}
            <div className="rightSidebar__birthdays">
                <h3>Birthdays</h3>
                <div className="rightSidebarBirthdays__info">
                <CardGiftcardIcon/>
                {/**set names from the app in props */}
                <h5> Mohamed koko and 2 others have birthdays today.</h5>

                </div>
            </div>

            {/** contacts section */}
                <div className="rightSidebar__contacts">
                    <h3>Contacts</h3>
                    <SidebarRow src= {addImage} title="Ahmed Ahmed"/>
                    <SidebarRow src= {addImage} title="Ahmed Ahmed"/>
                    <SidebarRow src= {addImage} title="Ahmed Ahmed"/>
                </div>

        </div>
    )
}

export default RightSidebar;
