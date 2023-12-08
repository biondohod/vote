import React, {useEffect} from "react";
import {editGroup, deleteGroup} from "../../services/VotesService";
import {useParams} from "react-router-dom";

const NewGroupPage = () => {
    const groupId = useParams().groupId;

    const onDeleteGroup = async () => {
        try {
            const response = await deleteGroup(groupId, localStorage.getItem('token'));
            if (response.ok) {
                window.alert('Вы успешно удалили группу!');
                window.location.href = `/groups`;
            } else response.json().then((res) => {
                window.alert(res.error);
            })
        } catch (error) {
            window.alert(error);
        }
    }
    const renderDeleteButton = () => {
        if (localStorage.getItem('isAdmin') === 'true') {
            return (
                <button
                    className="form__btn hover"
                    onClick={onDeleteGroup}
                    style={{
                        padding: 10,
                        color: 'white',
                        backgroundColor: 'red',
                        border: 'none',
                        borderRadius: 10,
                        marginTop: 64
                    }}
                >
                    Удалить группу
                </button>
            );
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
        };
        const json = JSON.stringify(data, null, 2);
        try {
            const response = await editGroup(groupId, json, localStorage.getItem('token'));

            if (response.ok) {
                response.json().then((res) => {
                    window.alert('Группа успешно изменена!');
                    window.location.href = `/groups`;
                })

            } else response.json().then((res) => {
                window.alert(`Произошла ошибка: ${res.error}`);
            })
        } catch (error) {
            window.alert(`Произошла ошибка: ${error.message}`);
        }
    }
    return (
        <div>
            <h1 className={'main__title'}>Изменить группу</h1>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <label className="form__label">
                    <span className="form__name">Название группы</span>
                    <input
                        type="text"
                        name="name"
                        className="form__input"
                    />
                </label>
                <button className="form__btn hover">Изменить</button>
            </form>
            {renderDeleteButton()}
        </div>
    )
}

export default NewGroupPage