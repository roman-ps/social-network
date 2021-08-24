import React from 'react';
import User from './User/User';
import Message from './Message/Message';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  const messagesElements = props.messages.map((elem, index) => {
    return <Message key={index} text={elem.message} />
  })
  
  const dialogsElements = props.dialogs.map((elem, index) => {
    return <User key={index} name={elem.name} id={elem.id} />
  })

  return (
    <div className={classes.dialogs}>
      <div className={classes.users}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
    </div>
  )
};

export default Dialogs;
