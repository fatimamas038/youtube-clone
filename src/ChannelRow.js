import React from 'react'
import "./ChannelRow.css";
import Avatar from '@material-ui/core/Avatar';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow(props) {
    return (
        <div className="ChannelRow">
   <Avatar className="ChannelRow__logo" alt={props.channel} src={props.image} />         
   <div className="ChannelRow__text">
       <h4>{props.channel} {props.verified && <VerifiedIcon />}</h4>
       <p>{props.subs} subscribers . {props.noOfVideos} videos </p>
       <p>{props.description}</p>
   </div>
        </div>
    );
}

export default ChannelRow
