
import { SEND_MESSAGE, JOIN_CHAT, EXIT_CHAT } from '../actions'

const init = {
  messages: [],
  users: [],
  joined: false,
  name: null,
  avatar: null
}

const user = (state = init, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...action.payload
        ]
      }
    case JOIN_CHAT:
      return {
        ...state,
        joined: action.payload.success,
        name: action.payload.name,
        avatar: action.payload.avatar,
        users: action.payload.users
      }
    case EXIT_CHAT:
      return {
        joined: action.payload.joined,
        name: action.payload.name,
        avatar: action.payload.avatar,
        messages: action.payload.messages,
        users: action.payload.users
      }
    default:
      return state
  }
}

export default user

