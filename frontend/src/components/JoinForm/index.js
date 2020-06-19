import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getRadom } from '../../util/random-numbers'
import './styles.css'
import { JOIN_CHAT } from '../../actions'
import avatars from '../../constants/avatarts'

const JoinForm = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const handleSubmit = () => {
    const name = `Guest_${getRadom(1, 1000).toFixed(0)}`
    const avatar = avatars[getRadom(0, 9).toFixed(0)]
    dispatch({
      type: JOIN_CHAT,
      payload: { success: true, name, avatar }
    })
    history.push('/chat')
  }

  return (<>
    <div className="join-form">
      <div className="user-input">
        <p>Hello, <span>Wellcome to <strong>WeChat</strong> :)</span></p>
      </div>
      <div className="submit-button">
        <button onClick={handleSubmit}>Join Chat</button>
      </div>
    </div>
  </>)
}

export default JoinForm