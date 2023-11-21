// @ts-ignore
import logo from '../../resources/img/logo.svg';
import './appHeader.scss';
import {Link} from "react-router-dom";
    const AppHeader = () => {
    return (
        <header className="app-header">
            <div className="app-header__content app-header__content--unauthorized">
                <div>
                    <Link to='/'>
                        <span className="app-header__btn app-header--authorized hover">Голосования</span>
                    </Link>
                    <div></div>
                </div>
                <img src={logo} alt="Логотип Портала Айкидо." className="app-header__logo"/>
                <div className="app-header__container app-header--unauthorized">
                    <Link to='signIn'>
                        <span className="app-header__btn app-header__btn--in hover">Вход</span>
                    </Link>
                    <Link to='signUp'>
                        <span className="app-header__btn hover">Регистрация</span>
                    </Link>
                </div>
                <Link to='profile'>
                    <span className="app-header__btn app-header--authorized">Профиль</span>
                </Link>

            </div>
        </header>
    );
}

export default AppHeader;