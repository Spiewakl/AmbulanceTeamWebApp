import { io } from "socket.io-client";


export async function createSocket(){
    const socket = io('http://localhost:81');

socket.on("connect", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

socket.on("connect_error", (err) => {
  console.log('wsError', err)
});

socket.on("disconnect", () => {
  console.log(socket.id); // undefined
});

socket.onAny((eventName, ...args) => {
    console.log(eventName, args)
  });
  return socket
}