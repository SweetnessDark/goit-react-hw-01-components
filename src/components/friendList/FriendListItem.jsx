import scss from './FriendList.module.scss';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (<li className={scss['item']}>
                <span className={scss[`${isOnline ? 'true-online' : 'false-online'}`]}></span>
                <img className={scss['avatar']} src={avatar} alt={name} width="48" />
                <p className={scss['name']}>{name}</p>
            </li>)
}