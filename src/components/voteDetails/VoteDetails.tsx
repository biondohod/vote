// @ts-ignore
import avatar from '../../resources/img/avatar.png'
import './voteDetails.scss'
const voteDetails = () => {
    return (
        <div className={'pool'}>
            <h1 className="main__title">Lorem ipsum dolor sit amet</h1>
            <div className="pool__content">
                <span className="pool__descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
                <ul className="pool__list">
                    <li className="pool__item">
                        <div className={'pool__row'}>
                            <span className="pool__option">Вариант 1</span>
                            <span className="pool__count">• 23</span>
                        </div>
                        <div className="pool__row">
                            <span className="pool__checked"></span>
                            <span className="pool__percent">50%</span>
                        </div>
                    </li>
                    <li className="pool__item">
                        <div className={'pool__row'}>
                            <span className="pool__option">Вариант 2</span>
                            <span className="pool__count">• 7</span>
                        </div>
                        <div className="pool__row">
                            <span className="pool__percent">7%</span>
                        </div>
                    </li>
                    <li className="pool__item">
                        <div className={'pool__row'}>
                            <span className="pool__option">Вариант 3</span>
                            <span className="pool__count">• 40</span>
                        </div>
                        <div className="pool__row">
                            <span className="pool__percent">40%</span>
                        </div>
                    </li>
                    <li className="pool__item">
                        <div className={'pool__row'}>
                            <span className="pool__option">Вариант 4</span>
                            <span className="pool__count">• 30</span>
                        </div>
                        <div className="pool__row">
                            <span className="pool__percent">30%</span>
                        </div>
                    </li>

                </ul>
            </div>
            <div className="pool__chat">
                <div className="chat__list--div">
                    <ul className="chat__list">
                        <li className="chat__item">
                            <img src={avatar} alt="" className="chat__img"/>
                            <div className="chat__content">
                                <div className="chat__row">
                                    <span className="chat__name">Иванов Иван</span>
                                    <span className="chat__time">18:01</span>
                                </div>
                                <span className="chat__text">Привет</span>
                            </div>
                        </li>
                        <li className="chat__item">
                            <img src={avatar} alt="" className="chat__img"/>
                            <div className="chat__content">
                                <div className="chat__row">
                                    <span className="chat__name">Степанов Степан</span>
                                    <span className="chat__time">18:02</span>
                                </div>
                                <span className="chat__text">Привет</span>
                            </div>
                        </li>
                    </ul>

                </div>
                <form action="" className="chat__form">
                    <input type="text" className="chat__input" placeholder={'Напишите сообщение...'}/>
                    <button className="chat__btn hover"></button>
                </form>
            </div>
        </div>
    )
}

export default voteDetails