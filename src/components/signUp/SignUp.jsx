import {createUser, getUserId} from "../../services/VotesService";
const SignUp = ({setIsAuthorized}) => {
    const signUp = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const object = {};
        formData.forEach(function (value, key) {
            object[key] = value;
        });
        const json = JSON.stringify(object);
        try {
            const response = await createUser(json);
            if (response.ok) {
                // document.getElementById('username').value = formData.get('username');
                // document.getElementById('password').value = formData.get('password');
                // document.getElementById('log-in').querySelector('.sign-up__btn').click();
            } else {
                response.json().then((res) => {
                    throw new Error(res.message);
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
    const logIn = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const object = {};
        formData.forEach(function (value, key) {
            object[key] = value;
        });
        const json = JSON.stringify(object);
        try {
            const response = await getUserId(json);
            if (response.ok) {
                response.json().then((res) => {
                    const id = res.id;
                    const token = res.token;
                    localStorage.setItem('id', id);
                    localStorage.setItem('token', token);
                    localStorage.setItem('password', formData.get('password'));
                    window.location.href = `/`;
                    // сделать header authorized
                    setIsAuthorized(true);
                })
            } else {
                response.json().then((res) => {
                    throw new Error(res.message);
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div>
            <h1 className="main__title">Регистрация</h1>
            <form action="" className="form" id="signUp" onSubmit={signUp}>
                <label className="form__label">
                    <span className="form__name">ФИО</span>
                    <input type="text" name="fullname" className="form__input"/>
                </label>
                <label className="form__label">
                    <span className="form__name">Почта</span>
                    <input type="email" name="mail" className="form__input"/>
                </label>
                <label className="form__label">
                    <span className="form__name">Пароль</span>
                    <input type="password" name="password" className="form__input"/>
                </label>
                <button className="form__btn hover">Зарегистрироваться</button>
            </form>
            <form style={{display: "none"}} className="form" id="signIp">
                    <input type="email" id="username" name="email" className="form__input"/>
                    <input type="password" id="password" name="password" className="form__input"/>
                <button className="sign-up__btn">Войти</button>
            </form>
        </div>

    )
}

export default SignUp