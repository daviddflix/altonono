import socketio from 'socket.io-client'
import { createContext } from 'react'

const port = process.env.REACT_APP_URL

export const socket = socketio.connect(port, {transport: ['websocket']})
export const SocketContext = createContext()