import './voteDetails.scss';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPool, votePool, deleteVotePool } from "../../services/VotesService";

const VoteDetails = () => {
    const [vote, setVote] = useState({});
    const voteId = useParams().voteId;

    useEffect(() => {
        getPool(voteId, localStorage.getItem('token')).then((result) => {
            setVote(result);
        });
    }, [voteId]);

    const handleOptionClick = async (optionId) => {
        try {
            if (!vote.votedOptionId) {
                // Если пользователь еще не голосовал, то проголосовать
                await votePool({ optionId }, voteId, localStorage.getItem('token'));
            } else if (vote.votedOptionId === optionId) {
                // Если пользователь голосовал за текущую опцию, то удалить голос
                await deleteVotePool(vote.votedOptionId, voteId, localStorage.getItem('token'));
            } else {
                console.log("You have already voted for another option.");
                return;
            }

            // Обновить состояние, чтобы вызвать перерисовку компонента
            setVote((prevVote) => ({ ...prevVote, votedOptionId: optionId }));
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    const renderVoteDetails = () => {
        if (vote.options) {
            const totalVotes = vote.options.reduce((total, option) => total + option.count, 0);
            const options = vote.options.map((option) => {
                const percentages = totalVotes > 0 ? (option.count / totalVotes) * 100 : 0;
                const isVoted = vote.votedOptionId === option.id;

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
                            {isVoted && <span className="pool__checked"></span>}
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
