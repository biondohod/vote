import './voteDetails.scss';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getPool} from "../../services/VotesService";

const VoteDetails = () => {
    const [vote, setVote] = useState({});//[{}, {}, {}
    const voteId = useParams().voteId;

    useEffect(() => {
        getPool(voteId, localStorage.getItem('token')).then((result) => {
            setVote(result);
            console.log(result);
        });
    }, []);

    const renderVoteDetails = () => {
        if (vote.options) {
            const totalVotes = vote.options.reduce((total, option) => total + option.count, 0);
            // let totalVotes = 0;
            const options = vote.options.map((option) => {
                const percentages =  totalVotes > 0 ? (option.count / totalVotes) * 100 : 0;
                return (
                    <li className="pool__item" key={option.id}>
                        <div className={'pool__row'}>
                            <span className="pool__option">{option.text}</span>
                            <span className="pool__count">• {option.count}</span>
                        </div>
                        <div className="pool__row">
                            {/*<span className="pool__checked"></span>*/}
                            <span className="pool__percent">{percentages}%</span>
                        </div>
                    </li>
                )
            });
            return (
                <div className="pool__content">
                    <h1 className="main__title">{vote.name}</h1>
                <span className="pool__descr">{vote.description}</span>
                    <ul className="pool__list">
                        {options}
                    </ul>
                </div>
            )
        } else {
            return (
                <div className="empty-list">There are no pools yet :(</div>
            )
        }
    }

    return (
        <div className={'pool'}>
            {renderVoteDetails()}
        </div>
    )
}

export default VoteDetails;


