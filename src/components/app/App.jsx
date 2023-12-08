import React, {useEffect, useState} from 'react';
import AppHeader from '../appHeader/AppHeader';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import {getProfileInfo} from "../../services/VotesService";

const SignUpPage = lazy(() => import("../pages/SignUpPage"));
const SignInPage = lazy(() => import("../pages/SignInPage"));
const VotesPage = lazy(() => import("../pages/VotesPage"));
const FinishedVotesPage = lazy(() => import("../pages/FinishedVotesPage"));
const NewVotePage = lazy(() => import("../pages/NewVotePage"));
const VoteDetailsPage = lazy(() => import("../pages/VoteDetailsPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));
const GroupsPage = lazy(() => import("../pages/GroupsPage"));
const ChatsPage = lazy(() => import("../pages/ChatsPage"));
const NewGroupPage = lazy(() => import("../pages/NewGroupPage"));
const EditGroupPage = lazy(() => import("../pages/EditGroupPage"));

const App = () => {
    // const [currentUser, setCurrentUser] = useState({});
    // const [userData, setUserData] = useState({});
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        if(isAuthorized) {
            getProfileInfo(localStorage.getItem('id'), localStorage.getItem('token')).then((result) => {
                if (result.groups[0].id === 1) {
                    localStorage.setItem('isAdmin', 'true');
                } else {
                    localStorage.setItem('isAdmin', 'false');
                }
            });
        }
    }, [isAuthorized]);
    return (
        <Router>
            <div className="App">
                <AppHeader isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized}/>
                <main>
                    <div className="main__content">
                        <Suspense>
                            <Routes>
                                <Route path='/' element={<VotesPage/>}/>
                                <Route path='/finished' element={<FinishedVotesPage/>}/>
                                <Route path='/signUp' element={<SignUpPage setIsAuthorized={setIsAuthorized}/>}/>
                                <Route path='/signIn' element={<SignInPage setIsAuthorized={setIsAuthorized}/>}/>
                                <Route path='/newVote' element={<NewVotePage/>}/>
                                <Route path={`/vote/:voteId`} element={<VoteDetailsPage/>}/>
                                <Route path='/profile' element={<ProfilePage setIsAuthorized={setIsAuthorized}/>}/>
                                <Route path='/groups' element={<GroupsPage/>}/>
                                <Route path='/groups/newGroup' element={<NewGroupPage/>}/>
                                <Route path={`/editGroup/:groupId`} element={<EditGroupPage/>}/>
                                <Route path='/chats' element={<ChatsPage/>}/>
                            </Routes>
                        </Suspense>
                    </div>
                </main>
            </div>
        </Router>
    );
}

export default App;
