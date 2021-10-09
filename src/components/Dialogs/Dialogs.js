import React from 'react';
import User from './User/User';
import Message from './Message/Message';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  console.log(props)
  const messagesElements = props.messages.map((elem, index) => {
    return <Message key={index} text={elem.message} />
  })

  const dialogsElements = props.dialogs.map((elem, index) => {
    return <User key={index} name={elem.name} id={elem.id} />
  })

  let newDialog = React.createRef();

  const addMessages = () => {
    props.addMessages();
    props.updatePostText('');
  }

  const onPostChange = () => {
    let newText = newDialog.current.value;
    props.updatePostText(newText);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.users}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
      <div>
        <textarea onChange={onPostChange} ref={newDialog} value={props.newPost} placeholder='Напишите что-нибудь'></textarea>
        <br />

        <button onClick={addMessages} type='button'>Добавить</button>
      </div>
    </div>
  )
};

export default Dialogs;
