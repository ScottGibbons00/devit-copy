import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Posts from './components/posts';
import NewPost from './components/new-post';
import SinglePost from './components/single-post';
// import Nav from './components/nav-bar';
import SignIn from './components/sign-in';
import PrivateRoute from './components/private-route';
import Profile from './components/profile';
import NewIdea from './components/new-idea';

const App = (props) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Posts} />
          <PrivateRoute path="/posts/new" component={NewPost} />
          <Route path="/posts/:postID" component={SinglePost} />
          <Route path="/signin" component={SignIn} />
          <Route path="/profile" component={Profile} />
          <Route path="/newidea" component={NewIdea} />
          <Route render={() => (<div>post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
