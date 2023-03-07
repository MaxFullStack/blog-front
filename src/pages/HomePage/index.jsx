import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { BlogContext } from '../../contexts';
import Card from '../../components/Card'

const HomePage = () => {
  const { getPostList, postList, getCommentList } = useContext(BlogContext);

  const handlePostClick = async (postId) => {
    await getCommentList(postId);
  };

  useEffect(() => {
    getPostList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      {postList?.map((post) => (
        <Link to={`/posts/${post.id}`} key={post.id}>
          <Card
            key={post.id}
            title={post.title}
            body={post.body}
            onClick={() => handlePostClick(post.id)}
          />
        </Link>
      ))}
    </div>
  );
}

export default HomePage