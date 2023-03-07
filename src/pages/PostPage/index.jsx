import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlogContext } from '../../contexts';
import Card from '../../components/Card';

const PostPage = () => {
  const { commentList } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/');
  };

  return (
    <div>
      <div className='flex'>
        <button
          className="bg-gray-300 px-4 py-2 rounded-md mb-4 mr-6"
          onClick={handleBackButtonClick}
        >
          Voltar
        </button>
        <h1 className="text-3xl font-bold mb-4">Comentários</h1>
      </div>
      {commentList && commentList.length > 0 ? (
        commentList.map((comment) => (
          <Card
            key={comment.id}
            title={comment.name}
            body={comment.body}
            author={comment.email}
          />
        ))
      ) : (
        <p>Nenhum comentário encontrado.</p>
      )}
    </div>
  );
};

export default PostPage;
