import socketIOClient from "socket.io-client"
import { sendMessage } from '../actions/send-message';
import { store } from '../store'
const PORT = 3005
const socket = socketIOClient(`http://localhost:${PORT}`)


socket.on('chat', (data) => {
  store.dispatch(sendMessage(data.messages));
});

export default socket