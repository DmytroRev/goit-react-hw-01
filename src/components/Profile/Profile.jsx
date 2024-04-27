import userData from "../../userData.json"
import css from "../Profile/Profile.module.css"

export default function Profile() {
    return (  
        <div className={css.containerDesign}>
  <div className={css.container}>
    <img className={css.avatar}
      src={userData.avatar}
      alt="User avatar"
    />
            <p className={css.name}>{userData.username}</p>
    <p className={css.from}>{userData.tag}</p>
            <p className={css.from}
            style={{marginBottom: 8}}>{userData.location}</p>
  </div>

  <ul className={css.allList}>
            <li className={css.list}
            style={{borderRight: "1.5px solid rgba(0, 0, 0, 0.5)"}}>
      <span>Followers</span>
                <span style={{fontWeight: "bold",
        fontSize: "1.2rem"}}>
                {userData.stats.followers}</span>
    </li>
            <li className={css.list}
            style={{borderRight: "1.5px solid rgba(0, 0, 0, 0.5)"}}>
      <span>Views</span>
                <span  style={{fontWeight: "bold",
                    fontSize: "1.2rem"
                }}>
                    {userData.stats.views}</span>
    </li>
    <li className={css.list}>
      <span>Likes</span>
                <span  style={{fontWeight: "bold",
                    fontSize: "1.2rem"
                }}>
                    {userData.stats.likes}</span>
    </li>
  </ul>
        </div>
        )
}