/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMapPin,
} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { selectisAuthenticated, selectUser } from '../store/selectors';

// eslint-disable-next-line no-unused-vars
import { signOutUser, fetchProject } from '../store/actions/index';

library.add(faMapPin);

const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectisAuthenticated);

  const handleSignOut = () => dispatch(signOutUser(history));

  const projectList = [
    {
      industry: [
        'finance',
      ],
      tools: [
        'react-native',
        'redux',
        'css',
      ],
      neededTeam: [
        'dev',
        'designer',
        'designer',
      ],
      team: [
        null,
      ],
      _id: '60b0880171de580fe478c07f',
      name: 'test project',
      bio: 'testing',
      logo: '🐉',
      __v: 0,
      id: '60b0880171de580fe478c07f',
    },
    {
      industry: [
        'finance',
        'tech',
      ],
      tools: [
        'react',
        'html',
        'css',
      ],
      neededTeam: [
        'dev',
        'dev',
        'designer',
      ],
      team: [
        null,
      ],
      _id: '60b0884971de580fe478c080',
      name: 'test project 2',
      bio: 'more testing',
      logo: '🐉',
      __v: 0,
      id: '60b0884971de580fe478c080',
    },
  ];

  const projects = projectList.map((project) => {
    const descriptions = project.industry.map((ind) => {
      return <h3 key={ind}>{ind}</h3>;
    });
    return (
      <div className="project" key={project.id}>
        <h1>{project.logo}</h1>
        <h2>{project.name}</h2>
        <div className="descriptions">
          {descriptions}
        </div>

      </div>
    );
  });

  const renderPic = () => {
    let classes = 'profile';
    classes = classes.concat(user.roles.includes('designer') ? ' des' : '');
    classes = classes.concat(user.roles.includes('developer') ? ' dev' : '');
    classes = user.roles.includes('designer') && user.roles.includes('developer') ? 'profile both' : classes;
    return (
      // eslint-disable-next-line max-len
      <img className={classes} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile" />
    );
  };

  // const projects = user.projects.map((projectID) => {
  //   const project = fetchProject(projectID);
  //   console.log(project);
  //   return '';
  // });

  return (
    <div id="profile">
      <div className="left-side">
        <div className="container">
          <h2>Current Projects</h2>
          {projects}
        </div>
        <div className="container">
          <h2>Recent Activity</h2>
          <div className="activity">
            <h3>Pull request</h3>
            <p>Today, 4:22pm</p>
          </div>
          <div className="activity">
            <h3>Joined project</h3>
            <p>4/19, 2:10pm</p>
          </div>
        </div>

      </div>
      <div className="right-side">
        <div className="container profile-container">
          <div className="circular--landscape">
            {renderPic()}
          </div>
          <h1>{user.firstName} {user.lastName}</h1>
          <div className="location">
            <FontAwesomeIcon icon={['fas', 'map-pin']} size="lg" />
            <h3>{user.location}</h3>
          </div>
        </div>
        <div className="badges-container">
          <h3>Develop</h3>
          <div className="badges">
            <img src="../../images/cil_badge.png" alt="badge" />
            <img src="../../images/cil_badge.png" alt="badge" />
            <img src="../../images/cil_badge.png" alt="badge" />
          </div>

        </div>
        <div className="badges-container">
          <h3>Design</h3>
          <div className="badges">
            <img src="../../images/cil_badge.png" alt="badge" />
          </div>

        </div>

      </div>
      {/* {isAuthenticated ? <button type="button" onClick={handleSignOut}>Sign Out</button> : <div />} */}
    </div>
  );
};

export default Profile;
