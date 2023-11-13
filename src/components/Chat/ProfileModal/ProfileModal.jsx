import { MainBtn } from 'components/global-components/MainBtn/MainBtn';
import { ProfileInfo } from '../ProfileInfo/ProfileInfo';
import { CloseBtn, ProfileWrapper } from './ProfileModal.styled';
import { RxCross1 } from 'react-icons/rx';

export const ProfileModal = ({ onClose }) => {
  return (
    <ProfileWrapper>
      <CloseBtn onClick={onClose}>
        <RxCross1 />
      </CloseBtn>
      <ProfileInfo />
      <MainBtn>Написати</MainBtn>
    </ProfileWrapper>
  );
};
