import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import { Friends } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <Friends>
      <FriendListItem friends={friends} />
    </Friends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
