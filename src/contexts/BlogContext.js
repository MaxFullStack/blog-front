import { createContext, useMemo, useState } from 'react';
import { posts as postsService } from '../services/posts';
import { users as usersServices } from '../services/users';

export const BlogContext = createContext({});

export const BlogContextProvider = ({ children }) => {
  const [postList, setPostList] = useState();
  const [commentList, setCommentList] = useState();
  const [userList, setUserList] = useState();

  const getPostList = async () => {
    await postsService.getPosts()
      .then((res) => {
        setPostList(res)
      })
  }

  const getCommentList = async (postId) => {
    await postsService.getComments(postId)
      .then((res) => {
        setCommentList(res)
      })
  }

  const getUserList = async () => {
    await usersServices.getUsers()
      .then((res) => {
        setUserList(res)
      })
  }

  const getUser = async (userId) => {
    await usersServices.getUser(userId)
      .then((res) => {
        return res
      })
  }

  const value = useMemo(() => ({
    getPostList,
    postList,
    getCommentList,
    commentList,
    getUserList,
    userList,
    getUser
  }), [commentList, postList, userList]);

  return <BlogContext.Provider value={value}> {children} </BlogContext.Provider>;
};
