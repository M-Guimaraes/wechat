import React from 'react'
import './styles.css'
import { useSelector, useDispatch } from 'react-redux'
import { EXIT_CHAT } from '../../actions'
const Header =  (props) => {

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleExit = () => {
    dispatch({
      type: EXIT_CHAT,
      payload: { joined: false, name: null, messages: []}
    })
    window.location.href = '/'
  }

  return (<>
  <div className="header">
    <div className="title">WeChat<span></span></div> 
    {user && user.name && <div className="user-name">Olá, {user.name} !!! <span className="exit" onClick={handleExit}></span></div> }

  </div>
  </>);
}

export default Header;