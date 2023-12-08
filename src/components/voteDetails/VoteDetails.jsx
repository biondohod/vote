import './voteDetails.scss';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPool, votePool, deleteVotePool, deletePool, whoVoted } from "../../services/VotesService";

const VoteDetails = () => {
    const [vote, setVote] = useState({});
    const [refreshKey, setRefreshKey] = useState(0);
    const [showVotersPopup, setShowVotersPopup] = useState(false);
    const [votersList, setVotersList] = useState([]);

    const voteId = useParams().voteId;

    useEffect(() => {
        getPool(voteId, localStorage.getItem('token')).then((result) => {
            setVote(result);
        });
    }, [voteId, refreshKey]);

    const handleOptionClick = async (optionId) => {
        try {
            if (vote.vote === 0) {
                const json = JSON.stringify({ "id": optionId });
                await votePool(json, voteId, localStorage.getItem('token'));
            } else if (vote.vote === optionId) {
                await deleteVotePool(voteId, localStorage.getItem('token'));
            } else {
                window.alert("Вы уже проголосовали за другой вариант. Отмените голос и попробуйте снова.");
                return;
            }

            setRefreshKey((prevKey) => prevKey + 1);
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    const onDeleteVote = async () => {
        try {
            const response = await deletePool(voteId, localStorage.getItem('token'));
            if (response.ok) {
                window.alert('Вы успешно удалили опрос!');
                window.location.href = `/`;
            } else response.json().then((res) => {
                window.alert(res.error);
            })
        } catch (error) {
            window.alert(error);
        }
    };

    const showVotersPopupHandler = async (id) => {
        try {
            const voters = await whoVoted(voteId, id, localStorage.getItem('token'));
            setVotersList(voters);
            setShowVotersPopup(true);
        } catch (error) {
            console.error("Error fetching voters:", error.message);
        }
    };

    const closeVotersPopupHandler = () => {
        setShowVotersPopup(false);
        setVotersList([]);
    };

    const renderDeleteButton = () => {
        if (localStorage.getItem('isAdmin') === 'true') {
            return (
                <button
                    className="form__btn hover"
                    onClick={onDeleteVote}
                    style={{
                        padding: 10,
                        color: 'white',
                        backgroundColor: 'red',
                        border: 'none',
                        borderRadius: 10,
                        marginTop: 64
                    }}
                >
                    Удалить опрос
                </button>
            );
        }
    };

    const renderVotersPopup = () => {
        if(votersList.length > 0) {

            return (
                showVotersPopup && (
                    <div className="voters-popup" style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 100,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <div className="voters-popup__content" style={{
                            backgroundColor: 'white',
                            padding: 16,
                            borderRadius: 10,
                            maxWidth: '60%',
                            maxHeight: '90%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}>
                            <ul className="groups__members" style={{
                                maxHeight: '100%',
                                overflowY: 'auto',
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                            }}>
                                {votersList.map((voter) => {
                                    if (voter) {
                                        return (
                                            <li key={voter.id} className="groups__member">
                                                <div className="groups__member-info">
                                                    <span className="groups__member-name">ID: {voter.id}</span>
                                                    <span className="groups__member-name"> • ФИО: {voter.name}</span>
                                                    <span className="groups__member-email"> • Почта: {voter.email}</span>
                                                </div>
                                            </li>
                                        )
                                    } else {
                                        return <></>
                                }})}
                            </ul>
                            <button
                                className="main__btn hover"
                                onClick={closeVotersPopupHandler}
                                style={{ marginTop: 16 }}
                            >
                                Закрыть
                            </button>
                        </div>
                    </div>
                )
            );
        }
    };

    const renderVoteDetails = () => {
        if (vote.options) {
            const totalVotes = vote.options.reduce((total, option) => total + option.count, 0);
            const options = vote.options.map((option) => {
                // let percentages = totalVotes > 0 ? Math.round((parseInt(option.count) / parseInt(totalVotes)) * 100) : 0;
                // percentages = parseFloat(percentages)
                // percentages = percentages.toFixed(2)




                const percentages = totalVotes > 0 ? (option.count / totalVotes) * 100 : 0
                const isVoted = vote.vote === option.id;

                return (
                    <li
                        className={`pool__item ${isVoted ? 'voted' : ''}`}
                        id={option.id}
                        key={option.id}
                    >
                        <div className="pool__row" style={{ flexGrow: 1, justifyContent: 'space-between' }} onClick={() => handleOptionClick(option.id)}>
                            <div className={'pool__row'}>
                                <span className="pool__option">{option.text}</span>
                                <span className="pool__count">• {option.count}</span>
                            </div>

                            <div className="pool__row">
                                {vote.vote === option.id && <span className="pool__checked"></span>}
                                <span className="pool__percent">{percentages.toFixed(0)}%</span>
                            </div>
                        </div>
                        {!vote.is_anonymous ? <button
                            className="main__btn hover"
                            id={'show-voters'}
                            style={{
                                margin: 0,
                                marginLeft: 8,
                                padding: 5,
                                fontSize: 14,
                            }}
                            onClick={() => showVotersPopupHandler(option.id)}
                        >
                            Кто проголосовал
                        </button> : <></>}
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
            {renderDeleteButton()}
            {renderVotersPopup()}
        </div>
    );
};

export default VoteDetails;
