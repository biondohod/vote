import React from 'react';
import AppHeader from '../appHeader/AppHeader';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";

const SignUpPage = lazy(() => import("../pages/SignUpPage"));
const SignInPage = lazy(() => import("../pages/SignInPage"));
const VotesPage = lazy(() => import("../pages/VotesPage"));
const NewVotePage = lazy(() => import("../pages/NewVotePage"));
const VoteDetailsPage = lazy(() => import("../pages/VoteDetailsPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));

const App = () => {
    return (
        <Router>
            <div className="App">
                <AppHeader/>
                <main>
                    <div className="main__content">
                        <Suspense>
                            <Routes>
                                <Route path='/' element={<VotesPage/>}/>
                                <Route path='/signUp' element={<SignUpPage/>}/>
                                <Route path='/signIn' element={<SignInPage/>}/>
                                <Route path='/newVote' element={<NewVotePage/>}/>
                                <Route path='/vote/1' element={<VoteDetailsPage/>}/>
                                <Route path='/profile' element={<ProfilePage/>}/>
                            </Routes>
                        </Suspense>
                    </div>
                </main>
            </div>
        </Router>
    );
}

export default App;
