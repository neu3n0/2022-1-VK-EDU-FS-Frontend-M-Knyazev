import React from 'react'
import './Dialogue.scss'
import Avatar from '../../components/Avatar/Avatar';

export default function Dialogue(props) {

    return (
        // <div className="chat-with-person" onClick={() => props.onClick('chat', props.chat_id)}>
        // <div className="chat-with-person" onClick={props.onClick}>
        <div className="chat-with-person" onClick={() => props.onClick(2)}>
            <Avatar/>
            <div className="chat-information">
                <div className="info-row">
                    <div className="title">
                        {props.chat['chat']['title']}
                    </div>
                    <div className="last-message-meta">
                        <div className="last-message-status">
                            <span className="material-icons done_all">done_all</span>
                        </div>
                        <div className="last-message-time">
                            {props.chat['last_message']['pub_date']}
                        </div>
                    </div>
                </div>
                <div className="subtitle">
                    {props.chat['last_message']['text']}
                </div>
            </div>
        </div>

    )
}