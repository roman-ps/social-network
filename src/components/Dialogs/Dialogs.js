import React from 'react';
import User from './User/User';
import Message from './Message/Message';
import classes from './Dialogs.module.css';

const dialogsData = [
  { id: 1, name: 'Rudo' },
  { id: 2, name: 'Mara' },
  { id: 3, name: 'Kent' },
  { id: 4, name: 'Tala' },
  { id: 5, name: 'John' },
];

const dialogsElements = dialogsData.map((elem) => {
  return <User name={elem.name} id={elem.id} />
});

const messagesData = [
  { id: 1, message: 'Javascript forever' },
  { id: 2, message: 'Batman return' },
  { id: 3, message: 'Play dota' },
  { id: 4, message: 'Go to the ocean' },
  { id: 5, message: 'Beautiful wood' },
];

const messagesElements = messagesData.map((elem) => {
  return <Message text={elem.message} />
});

const Dialogs = () => {
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
