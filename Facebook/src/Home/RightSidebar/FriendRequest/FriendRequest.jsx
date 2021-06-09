import { Avatar } from '@material-ui/core'
import React from 'react'
import './FriendRequest.css'

function FriendRequest({src, name, mutualFriend, numberOfdays}) {
    return (
        <div className="friendRequest">
            <div className="friendRequest__image">
                <Avatar id="profPic" src={src}/>
            </div>
            <div className="friendRequest__info">
                <div className="friendRequest__header">
                <h4>{name}</h4>
                <h6>{numberOfdays} days</h6>
                </div>
                <h6>{mutualFriend} mutual friends</h6>
                <div className="friendRequest__controls">
                    <button className="friendRequest__confirm">Confirm</button>
                    <button className="friendRequest__delete">Delete</button>
                </div>
            </div>

        </div>
    )
}

export default FriendRequest
