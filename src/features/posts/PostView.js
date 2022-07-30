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
      <h3>Fetch data using Redux Async function</h3>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error} </h2>}
      <section>
        {posts &&
          posts.map((post) => {
            return (
              <article>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default PostView;
