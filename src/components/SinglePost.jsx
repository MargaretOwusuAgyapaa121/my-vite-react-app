import { Link } from "react-router-dom";

export default function SinglePost() {
    return (
      <>
        <div className="post-preview">
          <Link to="post.html">
            <h2 className="post-title">
              Man must explore, and this is exploration at its greatest
            </h2>
            <h3 className="post-subtitle">
              Problems look mighty small from 150 miles up
            </h3>
          </Link>
          <p className="post-meta">
            Posted by
            <Link to="#!">Start Bootstrap</Link>
            on September 24, 2023
          </p>
        </div>
  
        <hr className="my-4" />
      </>
    );
  }
  