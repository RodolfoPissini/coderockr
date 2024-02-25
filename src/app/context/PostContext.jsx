import React, { createContext, useEffect, useState } from 'react';

export const PostContext = createContext({});

export function PostProvider({ children }) {
  const [postId, setPostId] = useState(() => {
    const postIdFromStorage = localStorage.getItem('postId');
    return postIdFromStorage ? JSON.parse(postIdFromStorage) : null;
  });
  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(() => {
    localStorage.setItem('postId', JSON.stringify(postId));
  }, [postId]);
  return (
    <PostContext.Provider
      value={{
        postId,
        setPostId,
        isOpenModal,
        setIsOpenModal
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
