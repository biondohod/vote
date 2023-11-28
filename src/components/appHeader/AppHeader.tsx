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
                    <div style={{width: 1, height: 1}}></div>
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
                <div className="app-header__wrapper">
                    <Link to='chats' className={'app-header--authorized'}>
                        <span className="app-header__btn app-header--authorized">Диалоги</span>
                    </Link>
                    <Link to='profile' className={'app-header--authorized'}>
                        <span className="app-header__btn app-header--authorized">Профиль</span>
                    </Link>
                    <Link to='groups' className={'app-header--authorized'}>
                        <span className="app-header__btn app-header--authorized">Группы</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;