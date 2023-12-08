import {getUserId, getProfileInfo} from "../../services/VotesService";

const SignIn = ({setIsAuthorized}) => {
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
                    window.alert(res.error);
                });
            }
        } catch (error) {
            window.alert(error);
        }
    }
    return(
        <div>
            <h1 className="main__title">Вход</h1>
            <form action="" className="form" id="signUp" onSubmit={logIn}>
                <label className="form__label">
                    <span className="form__name">Почта</span>
                    <input type="email" name="email" className="form__input"/>
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