import api from './api/json';

export const posts = {

  getPosts: async () => {
    return await api.get('/posts')
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },

  getComments: async (postId) => {
    return await api.get(`posts/${postId}/comments`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
};
