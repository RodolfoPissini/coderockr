import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { getListPosts } from '../utils/http/GetPosts';
import { MdDoubleArrow } from 'react-icons/md';
import CircularProgress from '@mui/material/CircularProgress';
import { PostContext } from '../context/PostContext';
import { Modal } from '@mui/material';
import { ModalForm } from '../components/Modal';

export function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setPostId, isOpenModal, setIsOpenModal } = useContext(PostContext);
  const navigate = useNavigate();

  function handleModalClose() {
    setIsOpenModal(false);
  }

  async function showPosts() {
    setIsLoading(true);
    try {
      const { data } = await getListPosts();
      setPosts(data);
    } catch (error) {
      console.warn(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    showPosts();
  }, []);

  return (
    <S.Container>
      <S.Content>
        {isLoading ? (
          <S.LoadingContainer>
            <CircularProgress />
          </S.LoadingContainer>
        ) : (
          posts.map((post, index) => (
            <S.PostItem key={post.id} id={post.id}>
              <S.PostContent
                id={post.id}
                index={index}
                onClick={() => {
                  navigate(`/post`);
                  setPostId(post?.id);
                }}
              >
                <S.ImageContainer id={post.id}>
                  <img src={post.image} />
                </S.ImageContainer>
                <S.PostInformation id={post.id}>
                  <S.Name>{post.author.name}</S.Name>
                  <h2>{post.title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: post.content }} />
                </S.PostInformation>
                <MdDoubleArrow size={24} />
              </S.PostContent>
            </S.PostItem>
          ))
        )}
      </S.Content>
      {isOpenModal && (
        <Modal open={isOpenModal} onClose={handleModalClose} closeAfterTransition>
          <ModalForm handleModalClose={handleModalClose}/>
        </Modal>
      )}
    </S.Container>
  );
}
