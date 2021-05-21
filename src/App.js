import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Posts from './components/posts';
import NewPost from './components/new-post';
import SinglePost from './components/single-post';
import SignIn from './components/sign-in';
import PrivateRoute from './components/private-route';
import Profile from './components/profile';
import Banner from './components/Banner';
import Sidebar from './components/Sidebar';
import ErrorNotFound from './components/ErrorNotFound';

const App = () => {
  return (
    <Router>
      <div>
        <Banner />
        <main className="main-section">
          <Sidebar />
          <Switch>
            <div className="current-page">
              <Route exact path="/" component={Posts} />
              <PrivateRoute path="/posts/new" component={NewPost} />
              <Route exact path="/posts/:postID" component={SinglePost} />
              <Route path="/signin" component={SignIn} />
              <Route path="/profile" component={Profile} />
              <Route component={ErrorNotFound} />
            </div>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
