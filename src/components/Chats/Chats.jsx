import React, {useEffect, useState} from "react";
import {getAllGroups, getGroup, getGroupMessages, sendGroupMessage} from "../../services/VotesService";

// @ts-ignore
import avatar from '../../resources/img/avatar.png';
import '../groups/groups.scss';
import './Chats.scss';

const Chats = () => {
    const [groups, setGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [groupUsersCount, setGroupUsersCount] = useState({});
    const [messages, setMessages] = useState([]);
    const [messageText, setMessageText] = useState('');

    useEffect(() => {
        getAllGroups(localStorage.getItem('token'))
            .then((data) => {
                setGroups(data);
                if (data.length > 0) {
                    setSelectedGroup(data[0]);
                    renderGroupMessages(data[0].id);
                    getGroupsCount(data);
                }
            })
            .catch((error) => console.error("Error loading groups:", error));
    }, []);

    const getGroupsCount = (groups) => {
        groups.forEach((group) => {
            getGroup(group.id, localStorage.getItem('token')).then(
                (users) => {
                    setGroupUsersCount((prevCount) => ({
                        ...prevCount,
                        [group.id]: users.length,
                    }));
                }
            )
        });
    };

    const handleGroupClick = (group) => {
        setSelectedGroup(group);
        renderGroupMessages(group.id);
    };

    const renderGroupMessages = (groupId) => {
        getGroupMessages(groupId, localStorage.getItem('token')).then((messages) => {
            setMessages(messages);
        });
    };

    const renderMessages = () => {
        if (messages.length > 0) {
            if (messages.error) {
                return (
                    <span>Вы не можете читать и писать в этот чат. Обратитесь к преподавателю и сообщите ему свой ID, если вас должны добавить в эту группу.</span>
                );
            }
            return (
                        messages.map((message) => (
                            <li className="chat__item">
                                <img src={avatar} alt="" className="chat__img" />
                                <div className="chat__content">
                                    <div className="chat__row">
                                        <span className="chat__name">{message.user.name}</span>
                                        <span className="chat__time">{getDate(message.created_at)}</span>
                                    </div>
                                    <span className="chat__text">{message.text}</span>
                                </div>
                            </li>
                        ))
                    );
        } else {
            return (
                <span>Нет сообщений</span>
            )
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedGroup) {
            const message = { text: messageText };
            const json = JSON.stringify(message, null, 2);
            sendGroupMessage(selectedGroup.id, json, localStorage.getItem('token'))
                .then((res) => {
                    if (res.ok) {
                        renderGroupMessages(selectedGroup.id);
                    } else {
                        res.json().then((res) => {
                            window.alert(`Произошла ошибка: ${res.error}`);
                        });
                    }
                })
                .catch((error) => console.error('Error sending message:', error));

            setMessageText('');
        }
    };

    const getDate = (data) =>{
        let date = new Date(data);
        let day = String(date.getDate()).padStart(2, '0');
        let month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0 в JavaScript
        let year = date.getFullYear();

        let hours = String(date.getHours()).padStart(2, '0');
        let minutes = String(date.getMinutes()).padStart(2, '0');

        return `${hours}:${minutes} ${day}.${month}.${year}`;
    }

    return (
        <>
            <h1 className="main__title">Диалоги</h1>
            <div className="groups__content">
                <div className="groups__wrapper">
                    <div className="groups__left-column">
                        <ul className="groups__list">
                            {groups.map((group) => (
                                <li
                                    key={group.id}
                                    className={`groups__item ${selectedGroup?.id === group.id ? 'groups__item--selected' : ''}`}
                                    onClick={() => handleGroupClick(group)}
                                >
                                    <h2 className="groups__name">{group.name}. ID:&nbsp;{group.id}</h2>
                                    <div className="groups__div">
                                        <span className="group__count">Участников: {groupUsersCount[group.id] || '?'}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div style={{ padding: 0 }} className="groups__right-column">
                        <div className="pool__chat">
                            <div className="chat__list--div">
                                <ul className="chat__list">
                                    {renderMessages()}
                                </ul>
                                {/*    {messages.length > 0 ? (*/}
                                {/*        messages.map((message) => (*/}
                                {/*            <li className="chat__item">*/}
                                {/*                <img src={avatar} alt="" className="chat__img" />*/}
                                {/*                <div className="chat__content">*/}
                                {/*                    <div className="chat__row">*/}
                                {/*                        <span className="chat__name">{message.user.name}</span>*/}
                                {/*                        <span className="chat__time">{getDate(message.created_at)}</span>*/}
                                {/*                    </div>*/}
                                {/*                    <span className="chat__text">{message.text}</span>*/}
                                {/*                </div>*/}
                                {/*            </li>*/}
                                {/*        ))*/}
                                {/*    ) : (*/}
                                {/*        <span>Нет сообщений</span>*/}
                                {/*    )}*/}
                                {/*</ul>*/}
                            </div>
                            <form onSubmit={handleSubmit} className="chat__form">
                                <input
                                    type="text"
                                    className="chat__input"
                                    placeholder={'Напишите сообщение...'}
                                    value={messageText}
                                    onChange={(e) => setMessageText(e.target.value)}
                                />
                                <button type="submit" className="chat__btn hover"></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chats;
