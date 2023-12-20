import { Close } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default function Chat({ setOpenChatIndex, bidData }) {

    const [sendMessage, setSendMessage] = useState('');
    const [chatList, setChatList] = useState([]);

    const userId = useSelector((state) => {
        return state?.userProfileSlice?.userData?.data?.id;
    });

    console.log(userId, 'USERID')

    const nameIcon = useSelector((state) => {
        return state?.userProfileSlice?.userData?.data?.fname;
    });

    if (nameIcon && nameIcon.length > 0) {
        var firstLetter = nameIcon[0].toUpperCase(); // Convert to uppercase
    }

    const chatContainerRef = useRef(null); // Create a ref for the chat container
    const inputRef = useRef(null);

    const handleChat = async () => {
        try {
            let url = process.env.REACT_APP_BASE_URL;
            const token = localStorage.getItem('authToken');
            const requestData = {
                project_id: bidData.project_id,
                bid_id: bidData.id,
                message: sendMessage,
            };

            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(requestData),
            };

            const res = await fetch(
                url + `/new_message`,
                requestOptions
            );

            const body = await res.json();

            if (body.success === true) {
                toast.success('Message sent successfully!', { autoClose: 3000 });

                if (chatContainerRef.current) {
                    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
                }

                // Focus on the input field
                if (inputRef.current) {
                    inputRef.current.focus();
                }

                // Append the new message to the chatList
                setChatList(prevChatList => [...prevChatList, {
                    id: body.data.id, // Use the actual ID received from the server
                    user_id: userId,
                    message: sendMessage,
                }]);
                setSendMessage('');
            }
            console.log({ body });
        } catch (err) {
            console.error(err);
        } finally {
            // Any cleanup code here
        }
    };


    const fetchChatList = async () => {
        let url = process.env.REACT_APP_BASE_URL;
        const token = localStorage.getItem('authToken');
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        const data = fetch(
            url +
            `/chat_listing?bid_id=${bidData.id}`,
            requestOptions
        )
            .then(async (res) => {
                let body = await res.json();
                console.log({ body });
                setChatList(body?.data)
                if (chatContainerRef.current) {
                    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
                }
    
                // Focus on the input field
                if (inputRef.current) {
                    inputRef.current.focus();
                }
            })
            .catch((err) => {
                console.log(err)
            });

        return data;
    };

    useEffect(() => {
        const fetchDataAndScroll = async () => {
            await fetchChatList();

            // Scroll to the latest message
            if (chatContainerRef.current) {
                chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }

            // Focus on the input field
            if (inputRef.current) {
                inputRef.current.focus();
            }
        };

        fetchDataAndScroll();
    }, []); // E

    return (
        <div className='comunication_content' aria-labelledby="dropdownMenuButton1">
            <div className='fixed-top d-flex justify-content-between align-items-center p-3' style={{ backgroundColor: '#fff', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', zIndex: 999 }}>
                <h4 className='mb-0'><strong>Chatbox</strong></h4>
                <div className='cursor-pointer' onClick={() => { setOpenChatIndex(null) }}><Close /></div>
            </div>
            <div className='proposal_content' style={{ marginTop: '20px' }} ref={chatContainerRef}>
                <div className="chat-container-wrapper">
                    {chatList.map((message) => (
                        <div key={message.id} className={`chat-container ${message.user_id !== userId ? '' : 'darker'}`}>
                            <div className={`d-flex ${message.user_id === userId ? 'justify-content-end' : ''}`}>
                                {message.user_id !== userId && (
                                    <Avatar sx={{ width: 32, height: 32 }} className='me-2'>{firstLetter}</Avatar>
                                )}
                                <p className='mt-1'>{message.message}</p>
                                {message.user_id == userId && (
                                    <Avatar sx={{ width: 32, height: 32 }} className='ms-2'>{firstLetter}</Avatar>
                                )}
                            </div>
                            <span className={`time-${message.user_id === userId ? 'right' : 'left'}`}>11:00</span>
                        </div>
                    ))}
                </div>

                <ul className='breadcrumbs'>
                    <li>
                        <a href="">Description</a>
                    </li>
                    <li>
                        <a href="">Biography of Company & Services</a>
                    </li>
                </ul>
                <div className='form_input'>
                    <input ref={inputRef} type="text" name="" id="" value={sendMessage} onChange={(e) => { setSendMessage(e.target.value) }} autofocus />
                    <button onClick={() => { handleChat() }}><img src="/assets/images/cirlce.png" alt="" /></button>
                </div>
            </div>
        </div>
    )
}
