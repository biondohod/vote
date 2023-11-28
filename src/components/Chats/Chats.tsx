import '../groups/groups.scss'
// @ts-ignore
import avatar from '../../resources/img/avatar.png';
import './Chats.scss'
const Chats = () => {
    return (
        <>
            <h1 className="main__title">Диалоги</h1>
            <div className="groups__content">
                <div className="groups__wrapper">
                    <div className="groups__left-column">
                        <ul className="groups__list">
                            <li className="groups__item groups__item--selected">
                                <h2 className="groups__name">Группа 1</h2>
                                <div className="groups__div">
                                    
                                    <span className="group__count">Участников: 10</span>
                                </div>
                            </li>
                            <li className="groups__item">
                                <h2 className="groups__name">Группа 1</h2>
                                <div className="groups__div">
                                    
                                    <span className="group__count">Участников: 10</span>
                                </div>
                            </li>
                            <li className="groups__item">
                                <h2 className="groups__name">Группа 1</h2>
                                <div className="groups__div">
                                    
                                    <span className="group__count">Участников: 10</span>
                                </div>
                            </li>
                            <li className="groups__item">
                                <h2 className="groups__name">Группа 1</h2>
                                <div className="groups__div">
                                    
                                    <span className="group__count">Участников: 10</span>
                                </div>
                            </li>
                            <li className="groups__item">
                                <h2 className="groups__name">Группа 1</h2>
                                <div className="groups__div">
                                    
                                    <span className="group__count">Участников: 10</span>
                                </div>
                            </li>
                            <li className="groups__item">
                                <h2 className="groups__name">Группа 1</h2>
                                <div className="groups__div">
                                    
                                    <span className="group__count">Участников: 10</span>
                                </div>
                            </li>
                            <li className="groups__item">
                                <h2 className="groups__name">Группа 1</h2>
                                <div className="groups__div">
                                    
                                    <span className="group__count">Участников: 10</span>
                                </div>
                            </li>
                            <li className="groups__item">
                                <h2 className="groups__name">Группа 1</h2>
                                <div className="groups__div">
                                    
                                    <span className="group__count">Участников: 10</span>
                                </div>
                            </li>
                            <li className="groups__item">
                                <h2 className="groups__name">Группа 1</h2>
                                <div className="groups__div">
                                    
                                    <span className="group__count">Участников: 10</span>
                                </div>
                            </li>
                            <li className="groups__item">
                                <h2 className="groups__name">Группа 1</h2>
                                <div className="groups__div">
                                    
                                    <span className="group__count">Участников: 10</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="groups__right-column">
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
                </div>
            </div>
        </>
    );
}

export default Chats;