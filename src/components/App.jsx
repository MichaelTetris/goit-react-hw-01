/* import React from 'react'; */

import FriendList from './FriendList/FriendList';
import Profile from './Profile/Profile';
import profileData from './Profile/profileData.json';
import friend from './FriendList/friends.json';



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
      <FriendList friends={friend} />
    </>
  );
};

export default App;