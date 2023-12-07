import './voteDetails.scss';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPool, votePool, deleteVotePool } from "../../services/VotesService";

const VoteDetails = () => {
    const [vote, setVote] = useState({});
    const [refreshKey, setRefreshKey] = useState(0); // Уникальный ключ для вызова перерендера
    const voteId = useParams().voteId;

    useEffect(() => {
        getPool(voteId, localStorage.getItem('token')).then((result) => {
            setVote(result);
        });
    }, [voteId, refreshKey]); // Добавлен refreshKey в зависимости useEffect

    const handleOptionClick = async (optionId) => {
        try {
            if (vote.vote === 0) {
                // Если пользователь еще не голосовал, то проголосовать
                const json = JSON.stringify({ "id": optionId });
                await votePool(json, voteId, localStorage.getItem('token'));
            } else if (vote.vote === optionId) {
                // Если пользователь голосовал за текущую опцию, то удалить голос
                await deleteVotePool(voteId, localStorage.getItem('token'));
            } else {
                window.alert("Вы уже проголосовали за другой вариант. Отмените голос и попробуйте снова.");
                return;
            }

            // Увеличиваем refreshKey для вызова перерендера
            setRefreshKey((prevKey) => prevKey + 1);
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    const renderVoteDetails = () => {
        if (vote.options) {
            const totalVotes = vote.options.reduce((total, option) => total + option.count, 0);
            const options = vote.options.map((option) => {
                const percentages = totalVotes > 0 ? (option.count / totalVotes) * 100 : 0;
                const isVoted = vote.vote === option.id;

                return (
                    <li
                        className={`pool__item ${isVoted ? 'voted' : ''}`}
                        id={option.id}
                        key={option.id}
                        onClick={() => handleOptionClick(option.id)}
                    >
                        <div className={'pool__row'}>
                            <span className="pool__option">{option.text}</span>
                            <span className="pool__count">• {option.count}</span>
                        </div>
                        <div className="pool__row">
                            {vote.vote === option.id && <span className="pool__checked"></span>}
                            <span className="pool__percent">{percentages}%</span>
                        </div>
                    </li>
                );
            });

            return (
                <div className="pool__content">
                    <h1 className="main__title">{vote.name}</h1>
                    <span className="pool__descr">{vote.description}</span>
                    <ul className="pool__list">
                        {options}
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="empty-list">There are no pools yet :(</div>
            );
        } 
    };

    return (
        <div className={'pool'}>
            {renderVoteDetails()}
        </div>
    );
};

export default VoteDetails;
