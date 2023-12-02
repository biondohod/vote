import React, { useState } from "react";
import { createPool } from "../../services/VotesService";

const NewVote = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        options: [""],
        anon: false,
        multiple: false,
        select: 24,
    });

    const handleInputChange = (e, index) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;

        if (name === "options") {
            const updatedOptions = [...formData.options];
            updatedOptions[index] = newValue;
            setFormData((prevData) => ({ ...prevData, options: updatedOptions }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: newValue }));
        }
    };

    const handleAddOption = () => {
        setFormData((prevData) => ({
            ...prevData,
            options: [...prevData.options, ""],
        }));
    };

    const handleDeleteOption = (index) => {
        const updatedOptions = [...formData.options];
        updatedOptions.splice(index, 1);
        setFormData((prevData) => ({ ...prevData, options: updatedOptions }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = document.getElementById("signUp");
        const formData = new FormData(form);
        createNewVote(formData);
    };

    const createNewVote = async (formData) => {
        const options = Array.from(formData.entries())
            .filter(([key]) => key.startsWith("option"))
            .map(([, value]) => value);

        const voteData = {
            name: formData.get("name"),
            description: formData.get("description"),
            group_id: 1, // Здесь вам нужно указать нужное значение
            is_anonymous: formData.get("anon") === "on",
            options,
            open_for: parseInt(formData.get("select"), 10),
        };

        const json = JSON.stringify(voteData, null, 2);
        try {
            const response = await createPool(json, localStorage.getItem('token'));

            if (response.ok) {
                response.json().then((res) => {
                    const voteId = res.id;
                    window.alert('Опрос успешно создан!');
                    window.location.href = `/vote/${voteId}`;
                })

            } else response.json().then((res) => {
                window.alert(`Произошла ошибка: ${res.message}`);
            })
        } catch (error) {
            window.alert(`Произошла ошибка: ${error.message}`);
        }
    };


    return (
        <>
            <h1 className="main__title">Новое голосование</h1>
            <form
                action=""
                className="form form--800"
                id="signUp"
                onSubmit={handleFormSubmit}
            >
                <label className="form__label">
                    <span className="form__name">Название</span>
                    <input
                        type="text"
                        name="name"
                        className="form__input"
                        onChange={(e) => handleInputChange(e)}
                    />
                </label>
                <label className="form__label">
                    <span className="form__name">Описание</span>
                    <textarea
                        name="description"
                        className="form__input form__input--textarea"
                        onChange={(e) => handleInputChange(e)}
                    />
                </label>
                <div className="form__options">
                    {formData.options.map((option, index) => (
                        <label
                            className="form__label form__label--options"
                            key={`option-${index}`}
                        >

                            <div className="form__div form__option-wrapper">
                                <span className="form__name">{index + 1}</span>
                                <input
                                    type="text"
                                    name="options"
                                    value={option}
                                    className="form__input form__option"
                                    onChange={(e) => handleInputChange(e, index)}
                                />
                                {index > 0 && (
                                    <button
                                        type="button"
                                        className="main__btn form__delete"
                                        onClick={() => handleDeleteOption(index)}
                                    >
                                        Удалить
                                    </button>
                                )}
                            </div>
                        </label>
                    ))}
                    <button
                        type="button"
                        className="main__btn form__add"
                        onClick={handleAddOption}
                    >
                        Добавить вариант ответа
                    </button>
                </div>
                <label className="form__label form__label--checkbox">
                    <input
                        type="checkbox"
                        name="anon"
                        className="form__input"
                        onChange={(e) => handleInputChange(e)}
                    />
                    <span className="form__name">Анонимное голосование</span>
                </label>
                {/*<label className="form__label form__label--checkbox">*/}
                {/*    <input*/}
                {/*        type="checkbox"*/}
                {/*        name="multiple"*/}
                {/*        className="form__input"*/}
                {/*        onChange={(e) => handleInputChange(e)}*/}
                {/*    />*/}
                {/*    <span className="form__name">Выбор нескольких вариантов</span>*/}
                {/*</label>*/}
                <label className="form__label form__label--checkbox">
                    <span className="form__name">Закрыть через</span>
                    <select
                        name="select"
                        className="form__select"
                        onChange={(e) => handleInputChange(e)}
                    >
                        <option value={24}>Закрыть через день</option>
                        <option value={24 * 7}>Закрыть через неделю</option>
                        <option value={24 * 30}>Закрыть через месяц</option>
                    </select>
                </label>
                <button className="form__btn hover">Создать</button>
            </form>
        </>
    );
};

export default NewVote;
