import {Link} from "react-router-dom";
import './votes.scss';
import {useState} from "react";
import {getAllPools} from "../../services/VotesService";

const Votes = ({valueOf}) => {

    const [active, setActive] = useState(valueOf);
    const [votes, setVotes] = useState([]);
    const getVotes = async () => {
        getAllPools(localStorage.getItem('token')).then((result) => {
            setVotes(result);
            console.log(result);
        });
    }

    useState(() => {
        getVotes();
    }, []);

    const renderVotes = () => {
        if (votes) {
            if (votes.length > 0) {
                return votes.map((item, i) => {
                    let isoDateTime = item.expires_at;
                    let date = new Date(isoDateTime);

                    let day = String(date.getDate()).padStart(2, '0');
                    let month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0 в JavaScript
                    let year = date.getFullYear();

                    let hours = String(date.getHours()).padStart(2, '0');
                    let minutes = String(date.getMinutes()).padStart(2, '0');

                    let formattedDateTime = `${hours}:${minutes} ${day}.${month}.${year}`;
                    let count = 0;
                    item.options.forEach((option) => {
                        count += option.count;
                    })
                    return (
                        <li className="votes__item" id={item.id} key={item.id}>
                            <div className="votes__first-row">
                                <h2 className="votes__name">{item.name}</h2>
                                <span className="votes__date">Доступен до {formattedDateTime}</span>
                            </div>
                            <div className="votes__second-row">
                                <Link to={`/vote/${item.id}`}>
                                    <button className="main__btn main__btn--small hover">Подробнее</button>
                                </Link>
                                <span className="votes__type">{item.is_anonymous ? 'Анонимное' : 'Публичное'}</span>
                                <span className="votes__count">Проголосовало: {count}</span>
                            </div>
                        </li>
                    );
                });
            }
            return (
                <div className="empty-list">There are no pools yet :(</div>
            )
        }
        return (
            <div className="empty-list">There are no pools yet :(</div>
        )
}


    return (
        <>
            <h1 className="main__title">{active ? 'Активные ' : 'Завершенные'} голосования</h1>
            <div className="votes__content">
                <Link to='newVote'>
                    <button className="main__btn hover">Создать</button>
                </Link>
                <ul className="votes__list">
                    {renderVotes()}
                </ul>
            </div>

        </>
    );
}

export default Votes;