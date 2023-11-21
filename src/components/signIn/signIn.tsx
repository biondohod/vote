const SignIn = () => {
    return(
        <div>
            <h1 className="main__title">Вход</h1>
            <form action="" className="form" id="signUp">
                <label className="form__label">
                    <span className="form__name">Почта</span>
                    <input type="email" name="mail" className="form__input"/>
                </label>
                <label className="form__label">
                    <span className="form__name">Пароль</span>
                    <input type="password" name="password" className="form__input"/>
                </label>
                <button className="form__btn hover">Войти</button>
            </form>
        </div>

    )
}

export default SignIn