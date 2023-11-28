import {Link} from "react-router-dom";
import './votes.scss';
import {useState} from "react";

const Votes = (props: any) => {

    const [active, setActive] = useState<boolean>(props.valueOf);

    return (
        <>
            <h1 className="main__title">{active ? 'Активные ' : 'Завершенные'} голосования</h1>
            <div className="votes__content">
                <Link to='newVote'>
                    <button className="main__btn hover">Создать</button>
                </Link>
                <ul className="votes__list">
                    <li className="votes__item">
                        <div className="votes__first-row">
                            <h2 className="votes__name">Lorem ipsum dolor sit amet</h2>
                            <span className="votes__date">Осталось 5 часов</span>
                        </div>
                        <div className="votes__second-row">
                            <Link to='/vote/1'>
                                <button className="main__btn main__btn--small hover">Подробнее</button>
                            </Link>
                            <span className="votes__type">Публичное</span>
                            <span className="votes__count">Проголосовало: 69</span>
                        </div>
                    </li>
                    <li className="votes__item">
                        <div className="votes__first-row">
                            <h2 className="votes__name">Consectetur adipiscing elit</h2>
                            <span className="votes__date">Осталось 2 дня</span>
                        </div>
                        <div className="votes__second-row">
                            <Link to='/vote/1'>
                                <button className="main__btn main__btn--small hover">Подробнее</button>
                            </Link>
                            <span className="votes__type">Анонимное</span>
                            <span className="votes__count">Проголосовало: 1488</span>
                        </div>
                    </li>
                    <li className="votes__item">
                        <div className="votes__first-row">
                            <h2 className="votes__name">Sed do eiusmod tempor incididunt ut labore</h2>
                            <span className="votes__date">Осталась 1 неделя</span>
                        </div>
                        <div className="votes__second-row">
                            <Link to='/vote/1'>
                                <button className="main__btn main__btn--small hover">Подробнее</button>
                            </Link>
                            <span className="votes__type">Публичное</span>
                            <span className="votes__count">Проголосовало: 228</span>
                        </div>
                    </li>
                </ul>
            </div>

        </>
    );
}

export default Votes;