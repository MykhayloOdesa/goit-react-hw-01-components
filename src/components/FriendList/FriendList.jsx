import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import { Friends } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(friend => {
        const { id } = friend;
        return <FriendListItem key={id} friend={friend} />;
      })}
    </Friends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
