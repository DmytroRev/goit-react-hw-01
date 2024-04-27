import friends from "../../friends.json"
import { FriendListItem } from "../FriendListItem/FriendListItem"
import css from "../FriendList/FriendList.module.css"

export function FriendList() {
  return (
    <ul className={css.containerFriend}>
      {friends.map((friend) => (
        <li key={friend.id} className={css.containerList}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
