import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ChatPage = () => {
    const [getChats,setChats] = useState([])
    const fetchChats = async () => {
        const {data} = await axios.get('/data/chat')
        console.log('data', data);
        setChats(data)
    }
    useEffect(() => {
        fetchChats()
    }, [])
    return (
        <>
        {getChats?.map((item,index)=>{
            return (<div key={index}>{item?.chatName}</div>)
        })}
        </>
    )
}

export default ChatPage