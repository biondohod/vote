// @ts-ignore
import avatar from '../../resources/img/avatarbig.png';
import './profile.scss';
import {useState, useEffect} from "react";
import {getProfileInfo, updateUser, deleteUser} from "../../services/VotesService";

const Profile = ({setIsAuthorized}) => {
    const [userData, setUserData] = useState({});
    const getUserData = (id) => {
        getProfileInfo(id, localStorage.getItem('token')).then((result) => {
            setUserData(result);
        });
    }

    const onUpdateUser = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newPassword = document.getElementById('password').value;
        const object = {};
        formData.forEach(function (value, key) {
            object[key] = value;
        });
        const json = JSON.stringify(object);
        try {
            const response = await updateUser(json, localStorage.getItem('token'));
            if (response.ok) {
                localStorage.setItem('password', newPassword)
                window.alert('Вы успешно обновили данные!');
                // window.location.reload()
            } else response.json().then((res) => {
                window.alert(res.message);
            })
        } catch (error) {
            window.alert(error);
        }
    }

    const logOut = () => {
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        localStorage.removeItem('password');
        localStorage.removeItem('isAdmin');
        setIsAuthorized(false);
        window.location.href = `/signIn`;
    }

    useEffect(() => {
        getUserData(localStorage.getItem('id'));
    }, []);

    const  onDeleteUser = async () => {
        try {
            const response = await deleteUser(localStorage.getItem('token'));
            if (response.ok) {
                window.alert('Вы успешно удалили профиль!');
                logOut();
            } else response.json().then((res) => {
                window.alert(res.message);
            })
        } catch (error) {
            window.alert(error);
        }
    }
    return (
        <div className={'profile'}>
            <button className="profile__logout" onClick={logOut}>Выйти</button>
            <h1 className="main__title">Профиль</h1>
            <div className="profile__content">
                <div className="profile__avatar">
                    <img src={avatar} alt="Ваше фото." width={150} height={150} className="profile__img"/>
                    <form action="" className="form form--avatar" id="signUp">
                        {/*<input type="file" name={'avatar'} className="profile__input" accept={"image/png, image/jpeg"}/>*/}
                        <span>
                            Ваш ID:
                            <span style={{fontSize: 18, fontWeight: 700}}> {localStorage.getItem('id')}</span>.
                            Сообщите его преподавателю для добавления в группу
                        </span>
                    </form>
                </div>
                <div className="profile__info">
                    <form action="" className="form form--profile" id="signUp" onSubmit={onUpdateUser}>
                        <label className="form__label">
                            <span className="form__name">ФИО</span>
                            <input type="text" name="name" className="form__input" defaultValue={userData.name}/>
                        </label>
                        <button className="form__btn hover">Изменить</button>
                    </form>
                    <form action="" className="form form--profile" id="signUp" onSubmit={onUpdateUser}>
                        <label className="form__label">
                            <span className="form__name">Почта</span>
                            <input type="text" name="email" className="form__input" defaultValue={userData.email}/>
                        </label>
                        <button className="form__btn hover">Подтвердить</button>
                    </form>
                    <form action="" className="form form--profile" id="signUp" onSubmit={onUpdateUser}>
                        <label className="form__label">
                            <span className="form__name">Пароль</span>
                            <input type="text" name="password" id="password" className="form__input" defaultValue={localStorage.getItem('password')}/>
                        </label>
                        <button className="form__btn hover">Изменить</button>
                    </form>
                    <button className="profile__delete hover" onClick={onDeleteUser} style={{
                        padding: 10,
                        color: 'white',
                        backgroundColor: 'red',
                        border: 'none',
                        borderRadius: 10,
                    }}>Удалить профиль. !НЕОБРАТИМО!</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;