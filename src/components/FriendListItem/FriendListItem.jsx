import PropTypes from 'prop-types';
import {
  Friend,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

export default function FriendListItem({
  friend: { id, avatar, name, isOnline },
}) {
  return (
    <Friend key={id}>
      <FriendStatus
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
        }}
      >
        {isOnline}
      </FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="50" />
      <FriendName>{name}</FriendName>
    </Friend>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
