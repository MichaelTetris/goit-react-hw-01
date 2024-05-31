/* import React from 'react'; */
/* import Profile  from './Profile/Profile'; */
import Profile from './Profile/Profile';
import profileData from './Profile/profileData.json';



const App = () => {
  return (
    <>
      <Profile
        username={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        avatar={profileData.avatar}
        stats={profileData.stats}
      />
    </>
  );
};

export default App;