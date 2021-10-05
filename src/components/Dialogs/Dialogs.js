import React from 'react';
import User from './User/User';
import Message from './Message/Message';
import classes from './Dialogs.module.css';
import DATA from '../../redux/state';

const Dialogs = (props) => {
  console.log(props)
  const messagesElements = props.messages.map((elem, index) => {
    return <Message key={index} text={elem.message} />
  })

  const dialogsElements = props.dialogs.map((elem, index) => {
    return <User key={index} name={elem.name} id={elem.id} />
  })

  let newDialog = React.createRef();

  let addMessages = () => {
    const text = newDialog.current.value;
    props.addMessages(text);
    props.updatePostText('');
  }

  let onPostChange = () => {
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
        <textarea onChange={onPostChange} ref={newDialog} placeholder='Напишите что-нибудь'></textarea>
        <br />

        <button onClick={addMessages} type='button'>Добавить</button>
      </div>
    </div>
  )
};

export default Dialogs;
