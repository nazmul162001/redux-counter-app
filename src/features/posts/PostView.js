import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { fetchPosts } from './postSlice';

const PostView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error} </h2>}
      {posts &&
        posts.map((post) => {
          return (
            <section>
              <article>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
              </article>
            </section>
          );
        })}
    </div>
  );
};

export default PostView;
