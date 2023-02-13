import PropTypes from 'prop-types';
import {
  Friend,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

export default function FriendListItem({ friends }) {
  return (
    <>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Friend key={id}>
          <FriendStatus typeName={isOnline}>{isOnline}</FriendStatus>
          <FriendAvatar src={avatar} alt="User avatar" width="50" />
          <FriendName>{name}</FriendName>
        </Friend>
      ))}
    </>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
