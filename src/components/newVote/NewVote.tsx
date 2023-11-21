const NewVote = () => {
    return (
        <>
            <h1 className="main__title">Новое голосование</h1>
            <form action="" className="form form--800" id="signUp">
                <label className="form__label">
                    <span className="form__name">Название</span>
                    <input type="text" name="name" className="form__input"/>
                </label>
                <label className="form__label">
                    <span className="form__name">Описание</span>
                    <textarea name="name" className="form__input form__input--textarea"/>
                </label>
                <label className="form__label">
                    <span className="form__name">Варианты ответа</span>
                    <div className="form__div">
                        <span className="form__span">1</span>
                        <input type="text" name="option1" className="form__input"/>
                    </div>
                    <div className="form__div">
                        <span className="form__span">2</span>
                        <input type="text" name="option2" className="form__input"/>
                    </div>
                    <div className="form__div">
                        <span className="form__span">3</span>
                        <input type="text" name="option3" className="form__input"/>
                    </div>
                </label>
                <label className="form__label form__label--checkbox">
                    <input type="checkbox" name="anon" className="form__input"/>
                    <span className="form__name">Анонимное голосование</span>
                </label>
                <label className="form__label form__label--checkbox">
                    <input type="checkbox" name="multiple" className="form__input"/>
                    <span className="form__name">Выбор нескольких вариантов</span>
                </label>
                <label className="form__label form__label--checkbox">
                    <span className="form__name">Закрыть через</span>
                    <select name="select" className="form__select">
                        <option value="day">Закрыть через день</option>
                        <option value="week">Закрыть через неделю</option>
                        <option value="month">Закрыть через месяц</option>
                    </select>
                </label>
                <button className="form__btn hover">Создать</button>
            </form>
        </>
    )
}

export default NewVote;