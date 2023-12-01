// @ts-ignore
import logo from '../../resources/img/logo.svg';
import './appHeader.scss';
import {Link} from "react-router-dom";
import {useEffect} from "react";
    const AppHeader = ({isAuthorized, setIsAuthorized}) => {
        const checkIsAuthorized = () => {
            if (localStorage.getItem('id') && localStorage.getItem('token')) {
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
            }
        }


        useEffect(() => {
            checkIsAuthorized();
        }, [isAuthorized]);

        const renderAppHeader = () => {
            if (isAuthorized) {
                return (
                    <div className={`app-header__content app-header__content--authorized`}>
                        <div className='app-header__something'>
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
                )
            } else {
                return (
                    <div className={`app-header__content app-header__content--unauthorized`}>
                        <div className='app-header__something'>
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
                    )
            }
        }
    return (
        <header className="app-header">
            {renderAppHeader()}
        </header>
    );
}

export default AppHeader;