import styles from "./Posts.module.css";

// Hooks
import { useParams } from "react-router-dom";

const Posts = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Posts {id}</h1>
    </div>
  );
};

export default Posts;
