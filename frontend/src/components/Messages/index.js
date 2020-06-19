import React, { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import socket from '../../services/chat-service'
import { useSelector } from 'react-redux';


import './styles.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useHistory } from 'react-router-dom';

const Messages = () => {

  const user = useSelector(state => state.user)

  const [text, setText] = useState('')
  const [scrollRef, setScrollRef] = useState({})
  const history = useHistory()



  useEffect(() => {
    if (user && user.name) {
      socket.emit('chat', { sender: user.name, avatar: user.avatar, type: 'online', text: `${user.name} joined chat...` })
    } else
      history.push('/')
  }, [user.name, user.avatar])


  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = () => {
    const payload = {
      sender: user.name,
      avatar: user.avatar,
      type: 'message',
      text
    }
    setText('')
    // scrollRef.scrollTo(0, scrollRef.scrollHeight)
    const top = (scrollRef.scrollHeight + 1000)
    console.log(top)
    socket.emit('chat', payload)
    scrollRef.scrollTop = top
  }




  return (
    <div className="message-container">

      <div className="message-list">
        <PerfectScrollbar containerRef={ref => setScrollRef(ref)} className="message-list-scroll">
          {
            user && user.messages && user.messages.map((message, index) => {
              return (
                <div key={index} className="message-details">
                  {(message && message.type === 'message') ? (
                    <>
                      <div className="user-details">
                        <img className="avatar" src={require(`../../assets/images/${message.avatar}`)} alt="avatar"></img>
                        <strong className="sender"> {message.sender}</strong>
                      </div>
                      <div className="user-message">
                        <p>{message.text}</p>
                      </div>
                    </>
                  ) : (

                      < div className="user-details">
                        {console.log(message)}
                        <img className="avatar" src={require(`../../assets/images/${message.avatar}`)} alt="avatar"></img>
                        <strong className="sender"> {message.text}</strong>
                      </div>
                    )
                  }

                </div>

              )
            })
          }

        </PerfectScrollbar>
      </div>
      <div className="send-message">
        <textarea onChange={handleChange} className="message" value={text} type="text" />
        <button onClick={handleSubmit} className="btn-send">SEND</button>
      </div>
    </div >
  )
}

export default Messages