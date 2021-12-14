// React sleek to change avatars

import { useState } from "react";

const AddUser = () => {
  const [username, setUsername] = "";

  const changeUserName = (name) => {
    setUsername(name);
  };

  const changeAvatar = (avatarId) => {
    setAvatar(avatarId);
  };

  const addUser = () => {
    addUserToTheGame(username, username);
  };

  return <div></div>;
};
