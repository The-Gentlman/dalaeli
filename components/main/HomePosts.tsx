// components/HomePosts.tsx
import Homeposts from "@/config/Homeposts";
import { HomePostType } from "@/types";
import styles from "../styles/HomePosts.module.css"; // Import the styles

const HomePosts = () => {
  return (
    <div className={styles.homePosts}> {/* Use the imported styles */}
      {Homeposts.map((post: HomePostType, index: number) => (
        <div key={index} className={styles.post}>
          {post.title && <h2 className={styles.postTitle}>{post.title}</h2>}
          <p className={styles.postBody}>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePosts;