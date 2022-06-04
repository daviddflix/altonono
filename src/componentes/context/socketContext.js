import socketio from 'socket.io-client'
import { createContext } from 'react'

const port = 'https://altonono.herokuapp.com/'

export const socket = socketio.connect(port, {transport: ['websocket']})
export const SocketContext = createContext()