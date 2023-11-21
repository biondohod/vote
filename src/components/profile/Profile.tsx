// @ts-ignore
import avatar from '../../resources/img/avatarbig.png';
import './profile.scss';
const Profile = () => {
    return (
        <div className={'profile'}>
            <button className="profile__logout">Выйти</button>
            <h1 className="main__title">Профиль</h1>
            <div className="profile__content">
                <div className="profile__avatar">
                    <img src={avatar} alt="Ваше фото." width={150} height={150} className="profile__img"/>
                    <form action="" className="form form--avatar" id="signUp">
                        <input type="file" name={'avatar'} className="profile__input" accept={"image/png, image/jpeg"}/>
                        <button className="form__btn hover">Сменить аватар</button>
                    </form>
                </div>
                <div className="profile__info">
                    <form action="" className="form form--profile" id="signUp">
                        <label className="form__label">
                            <span className="form__name">ФИО</span>
                            <input type="text" name="FIO" className="form__input"/>
                        </label>
                        <button className="form__btn hover">Изменить</button>
                    </form>
                    <form action="" className="form form--profile" id="signUp">
                        <label className="form__label">
                            <span className="form__name">Почта</span>
                            <input type="text" name="FIO" className="form__input"/>
                        </label>
                        <button className="form__btn hover">Подтвердить</button>
                    </form>
                    <form action="" className="form form--profile" id="signUp">
                        <label className="form__label">
                            <span className="form__name">Пароль</span>
                            <input type="text" name="FIO" className="form__input"/>
                        </label>
                        <button className="form__btn hover">Изменить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile;