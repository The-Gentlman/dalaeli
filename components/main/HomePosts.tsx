import Homeposts from "@/config/Homeposts";
import { HomePostType } from "@/types";
import styles from "../styles/HomePosts.module.css";

const HomePosts = () => {
  return (
    <div className={styles.post} >
      {Homeposts.map((post: HomePostType, index: number) => (
        <div key={index} className={styles.post}>
          {post.title && <h2 className={styles.post_title}>{post.title}</h2>}
          <p className={styles.post_body}>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePosts;
