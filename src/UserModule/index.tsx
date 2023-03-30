import React, { useState } from 'react';
import styled from 'styled-components';
import Dialog from './Dialog';

interface Props {
  imageUrl: string;
  username: string;
  email: string;
}




const USerModule = ({ imageUrl, username, email }: Props) => {
  const [showUserInfo, setShowUserInfo] = useState(false);

  const handleAvatarClick = () => {
    setShowUserInfo(!showUserInfo);
  };
  const handleCloseDialog = () => {
    setShowUserInfo(!showUserInfo);
  };

  return (
    <AvatarContainer onClick={handleAvatarClick}>
      <AvatarImg src={imageUrl} alt="User Avatar" />
      <Dialog isOpen={showUserInfo} onClose={handleCloseDialog} />
      {/* <AvatarOverlay>{showUserInfo ? <span>2</span> : null}</AvatarOverlay>
      {showUserInfo && (
        <UserInfoDialog>
          <UserInfoLabel>Username: {username}</UserInfoLabel>
          <UserInfoLabel>Email: {email}</UserInfoLabel>
        </UserInfoDialog>
      )} */}
    </AvatarContainer>
  );
};

const AvatarContainer = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  margin-top : 30px;
   @media (max-width: 1440px) {
  width: 60px;
  height: 60px;
  margin-top : 25px;
 @media (max-width: 600px) {
 margin-top : 15px;
}
  }
`;


const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


export default USerModule;
