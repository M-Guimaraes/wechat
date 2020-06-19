
export const SEND_MESSAGE = 'SEND_MESSAGE'


export const sendMessage = (messages) => {
  return {
    type: SEND_MESSAGE,
    payload: [...messages]
  }
}

