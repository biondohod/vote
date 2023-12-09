import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllGroups, getGroup, groupAddUser, groupDeleteUser } from "../../services/VotesService";
import './groups.scss';

const Groups = () => {
    const [groups, setGroups] = useState([]); // Данные о группах
    const [selectedGroup, setSelectedGroup] = useState(null); // Выбранная группа
    const [userIdInput, setUserIdInput] = useState(""); // Состояние для ввода id пользователя
    const [groupUsersCount, setGroupUsersCount] = useState({}); // Количество пользователей для каждой группы

    useEffect(() => {
        // Загружаем все группы при монтировании компонента
        getAllGroups(localStorage.getItem('token'))
            .then((data) => {
                setGroups(data);
                // По умолчанию выбираем первую группу
                if (data.length > 0) {
                    setSelectedGroup(data[0]);
                    // Получаем пользователей для выбранной группы
                    getGroupUsers(data[0].id);
                    getGroupsCount(data)
                }
            })
            .catch((error) => console.error("Error loading groups:", error));
    }, []);

    const getGroupsCount = (groups) => {
        // Загружаем количество пользователей для каждой группы
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
    }

    const getGroupUsers = (groupId) => {
        // Загружаем пользователей для выбранной группы
        getGroup(groupId, localStorage.getItem('token'))
            .then((users) => {
                // Обновляем состояние с пользователями
                // (предполагается, что у объекта пользователя есть уникальный идентификатор user.id)
                setSelectedGroup((prevGroup) => ({
                    ...prevGroup,
                    users,
                }));
                // Обновляем количество пользователей для текущей группы
                setGroupUsersCount((prevCount) => ({
                    ...prevCount,
                    [groupId]: users.length,
                }));
            })
            .catch((error) => console.error("Error loading group users:", error));
    };

    const handleGroupClick = (group) => {
        // Обработчик клика по группе
        setSelectedGroup(group);
        // Получаем пользователей для выбранной группы
        getGroupUsers(group.id);
    };

    const handleAddUser = async (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение формы
        try {
            const userId = parseInt(userIdInput, 10);
            if (!userId || isNaN(userId)) {
                alert("Введите корректный ID пользователя.");
                return;
            }

            const jsonData = JSON.stringify({ "id": userId });
            await groupAddUser(selectedGroup.id, jsonData, localStorage.getItem('token'));

            // После добавления пользователя обновляем список пользователей для текущей группы
            getGroupUsers(selectedGroup.id);

            // Очищаем поле ввода
            setUserIdInput("");
        } catch (error) {
            window.alert(`Error adding user to group: ${error.message}`);
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            await groupDeleteUser(selectedGroup.id, userId, localStorage.getItem('token')).then((res) => {
                if(res.ok) {
                } else res.json().then((res) => {
                    window.alert(`Произошла ошибка: ${res.error}`);
                })
            });
            // После удаления пользователя обновляем список пользователей для текущей группы
            getGroupUsers(selectedGroup.id);
        } catch (error) {
            window.alert(`Error deleting user from group: ${error.message}`);
        }
    };

    const renderNewGroup = () => {
        if (localStorage.getItem('isAdmin') === 'true') {
            return (
                <Link to='newGroup'>
                    <button className="main__btn hover">Создать</button>
                </Link>
            );
        }
    };

    const renderEditGroup = () => {
        if (localStorage.getItem('isAdmin') === 'true' && selectedGroup) {
            return (
                <Link to={`/editGroup/${selectedGroup.id}`}>
                    <button className="group__rename">Редактировать</button>
                </Link>
            );
        }
    };

    const renderAddUser = () => {
        if (localStorage.getItem('isAdmin') === 'true') {
            return (
                <form id="form" onSubmit={handleAddUser} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                    <input
                        type="number"
                        name={'id'}
                        placeholder={'ID пользователя'}
                        min={1}
                        value={userIdInput}
                        onChange={(e) => setUserIdInput(e.target.value)}
                        style={{ marginRight: 8 }}
                    />
                    <button type="submit" className="main__btn hover">Добавить</button>
                </form>
            );
        }
    };

    return (
        <>
            <h1 className="main__title">Группы</h1>
            <div className="groups__content">
                {renderNewGroup()}
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
                                        <span className="group__count">Участников: {groupUsersCount[group.id] || 0}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="groups__right-column">
                        <div style={{display: "flex", gap: 10, justifyContent: "center"}}>
                            <h2 className="groups__name" style={{margin: 0}}>{selectedGroup?.name}</h2>
                            {renderEditGroup()}
                        </div>
                        {renderAddUser()}
                        <ul className="groups__members">
                            {selectedGroup?.users?.map((user) => (
                                <li key={user ? user.id : undefined} className="groups__member">
                                    <div className="groups__member-info">
                                        <span className="groups__member-name">{user ? `ID: ${user.id}` : ''}</span>
                                        <span className="groups__member-name"> • {user ? user.name : ''}</span>
                                        <span className="groups__member-email"> • {user ? user.email : ''}</span>
                                    </div>
                                    {
                                        localStorage.getItem('isAdmin') === 'true' ? <button className="groups__btn hover" onClick={() => handleDeleteUser(user.id)}>Удалить</button> : <></>
                                    }

                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Groups;
