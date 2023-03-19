import PropTypes from 'prop-types';
import scss from './FriendList.module.scss';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={scss.item}>
      <span className={isOnline ? scss.trueOnline : scss.falseOnline}></span>
      <img className={scss.avatar} src={avatar} alt={name} width="48" />
      <p className={scss.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
