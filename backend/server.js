'use strict'

const express = require('express')
const socket = require('socket.io')
const cors = require('cors')

const app = express()
app.use(cors)

const messages = []

const server = app.listen(process.env.PORT || 3005, process.env.HOST || '0.0.0.0', () => {
  const serverStatus = {
    message: `The server is running at http://${server.address().address}:${
      server.address().port
      }`,
    host: `${server.address().address}`,
    port: `${server.address().port}`
  }
  console.table(serverStatus)
})

const io = socket(server)
io.on('connection', (socket) => {
  console.log(`connection established via id: ${socket.id}`)
  socket.on('chat', (data) => {
    messages.push(data)
    console.log(data)
    io.sockets.emit('chat', { data, messages })
  })
  socket.on('online', (data) => {
    console.log(data)
    io.sockets.emit('chat', { messages })
  })
})
