import {Link} from "react-router-dom";
import './groups.scss';
const Groups = () => {
    return (
        <>
            <h1 className="main__title">Группы</h1>
            <div className="groups__content">
                <Link to='newGroup'>
                    <button className="main__btn hover">Создать</button>
                </Link>
                <div className="groups__wrapper">
                    <div className="groups__left-column">
                        <ul className="groups__list">
                            <li className="groups__item groups__item--selected">
                                <h2 className="groups__name">Группа 1</h2>
                                <div className="groups__div">
                                    <button className="group__rename">Переименовать</button>
                                    <span className="group__count">Участников: 10</span>
                                </div>
                            </li>
                            <li className="groups__item">
                                <h2 className="groups__name">Группа 1</h2>
                                <div className="groups__div">
                                    <button className="group__rename">Переименовать</button>
                                    <span className="group__count">Участников: 10</span>
                                </div>
                            </li>
                            <li className="groups__item">
                                <h2 className="groups__name">Группа 1</h2>
                                <div className="groups__div">
                                    <button className="group__rename">Переименовать</button>
                                    <span className="group__count">Участников: 10</span>
                                </div>
                            </li>
                            <li className="groups__item">
                                <h2 className="groups__name">Группа 1</h2>
                                <div className="groups__div">
                                    <button className="group__rename">Переименовать</button>
                                    <span className="group__count">Участников: 10</span>
                                </div>
                            </li>
                            <li className="groups__item">
                                <h2 className="groups__name">Группа 1</h2>
                                <div className="groups__div">
                                    <button className="group__rename">Переименовать</button>
                                    <span className="group__count">Участников: 10</span>
                                </div>
                            </li>
                            <li className="groups__item">
                                <h2 className="groups__name">Группа 1</h2>
                                <div className="groups__div">
                                    <button className="group__rename">Переименовать</button>
                                    <span className="group__count">Участников: 10</span>
                                </div>
                            </li>
                            <li className="groups__item">
                                <h2 className="groups__name">Группа 1</h2>
                                <div className="groups__div">
                                    <button className="group__rename">Переименовать</button>
                                    <span className="group__count">Участников: 10</span>
                                </div>
                            </li>
                            <li className="groups__item">
                                <h2 className="groups__name">Группа 1</h2>
                                <div className="groups__div">
                                    <button className="group__rename">Переименовать</button>
                                    <span className="group__count">Участников: 10</span>
                                </div>
                            </li>
                            <li className="groups__item">
                                <h2 className="groups__name">Группа 1</h2>
                                <div className="groups__div">
                                    <button className="group__rename">Переименовать</button>
                                    <span className="group__count">Участников: 10</span>
                                </div>
                            </li>
                            <li className="groups__item">
                                <h2 className="groups__name">Группа 1</h2>
                                <div className="groups__div">
                                    <button className="group__rename">Переименовать</button>
                                    <span className="group__count">Участников: 10</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="groups__right-column">
                        <h2 className="groups__name">Группа 1</h2>
                        <button className="main__btn hover">Добавить</button>
                        <ul className="groups__members">
                            <li className="groups__member">
                                <div className="groups__member-info">
                                    <span className="groups__member-name">Иванов Иван Иванович</span>
                                    <span className="groups__member-email"> • ivan@mail.ru</span>
                                </div>
                                <button className="groups__btn hover">Удалить</button>
                            </li>
                            <li className="groups__member">
                                <div className="groups__member-info">
                                    <span className="groups__member-name">Иванов Иван Иванович</span>
                                    <span className="groups__member-email"> • ivan@mail.ru</span>
                                </div>
                                <button className="groups__btn hover">Удалить</button>
                            </li>
                            <li className="groups__member">
                                <div className="groups__member-info">
                                    <span className="groups__member-name">Иванов Иван Иванович</span>
                                    <span className="groups__member-email"> • ivan@mail.ru</span>
                                </div>
                                <button className="groups__btn hover">Удалить</button>
                            </li>
                            <li className="groups__member">
                                <div className="groups__member-info">
                                    <span className="groups__member-name">Иванов Иван Иванович</span>
                                    <span className="groups__member-email"> • ivan@mail.ru</span>
                                </div>
                                <button className="groups__btn hover">Удалить</button>
                            </li>
                            <li className="groups__member">
                                <div className="groups__member-info">
                                    <span className="groups__member-name">Иванов Иван Иванович</span>
                                    <span className="groups__member-email"> • ivan@mail.ru</span>
                                </div>
                                <button className="groups__btn hover">Удалить</button>
                            </li>
                            <li className="groups__member">
                                <div className="groups__member-info">
                                    <span className="groups__member-name">Иванов Иван Иванович</span>
                                    <span className="groups__member-email"> • ivan@mail.ru</span>
                                </div>
                                <button className="groups__btn hover">Удалить</button>
                            </li>
                            <li className="groups__member">
                                <div className="groups__member-info">
                                    <span className="groups__member-name">Иванов Иван Иванович</span>
                                    <span className="groups__member-email"> • ivan@mail.ru</span>
                                </div>
                                <button className="groups__btn hover">Удалить</button>
                            </li>
                            <li className="groups__member">
                                <div className="groups__member-info">
                                    <span className="groups__member-name">Иванов Иван Иванович</span>
                                    <span className="groups__member-email"> • ivan@mail.ru</span>
                                </div>
                                <button className="groups__btn hover">Удалить</button>
                            </li>
                            <li className="groups__member">
                                <div className="groups__member-info">
                                    <span className="groups__member-name">Иванов Иван Иванович</span>
                                    <span className="groups__member-email"> • ivan@mail.ru</span>
                                </div>
                                <button className="groups__btn hover">Удалить</button>
                            </li>
                            <li className="groups__member">
                                <div className="groups__member-info">
                                    <span className="groups__member-name">Иванов Иван Иванович</span>
                                    <span className="groups__member-email"> • ivan@mail.ru</span>
                                </div>
                                <button className="groups__btn hover">Удалить</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Groups;