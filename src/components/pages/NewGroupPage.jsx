import React from "react";
import {createGroup, createPool} from "../../services/VotesService";

const NewGroupPage = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
        };
        const json = JSON.stringify(data, null, 2);
        try {
            const response = await createGroup(json, localStorage.getItem('token'));

            if (response.ok) {
                response.json().then((res) => {
                    window.alert('Группа успешно создана!');
                    window.location.href = `/groups`;
                })

            } else response.json().then((res) => {
                window.alert(`Произошла ошибка: ${res.message}`);
            })
        } catch (error) {
            window.alert(`Произошла ошибка: ${error.message}`);
        }
    }
    return (
        <div>
            <h1 className={'main__title'}>Создать группу</h1>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <label className="form__label">
                    <span className="form__name">Название группы</span>
                    <input
                        type="text"
                        name="name"
                        className="form__input"
                    />
                </label>
                <button className="form__btn hover">Создать</button>
            </form>
        </div>
    )
}

export default NewGroupPage