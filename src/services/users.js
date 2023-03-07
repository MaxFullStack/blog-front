import api from './api/json';

export const users = {

  getUsers: async () => {
    try {
      const res = await api.get("https://jsonplaceholder.typicode.com/users")

      return res.data;
    } catch (err) {
      return { error: 'something went wrong' };
    }
  },

  getUser: async (userId) => {
    try {
      const res = await api.get(`https://jsonplaceholder.typicode.com/users/${userId}`);

      return res.data;
    } catch (err) {
      return { error: 'something went wrong' };
    }
  },
};