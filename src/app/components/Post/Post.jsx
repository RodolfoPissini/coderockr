import React, { useState, useEffect, useContext } from 'react';
import * as S from './styles';
import { getPost } from '../../utils/http/GetPosts';
import moment from 'moment';
import CircularProgress from '@mui/material/CircularProgress';
import { PostContext } from '../../context/PostContext';
import { BsEmojiFrown } from 'react-icons/bs';
import { ModalForm } from '../Modal';
import { Modal } from '@mui/material';

export function Post() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { postId, isOpenModal, setIsOpenModal } = useContext(PostContext);

  function handleModalClose() {
    setIsOpenModal(false);
  }

  async function getSelectedPost() {
    setIsLoading(true);
    try {
      const { data } = await getPost(postId);
      setSelectedPost(data);
    } catch (error) {
      console.warn(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getSelectedPost();
  }, []);

  return (
    <>
      <S.Container>
        {isLoading && (
          <S.LoadingContainer>
            <CircularProgress />
          </S.LoadingContainer>
        )}
        {!isLoading &&
          (selectedPost === null ? (
            <S.WarningText>
              <p>Post não encontrado</p>
              <BsEmojiFrown />
            </S.WarningText>
          ) : (
            <S.Content>
              <S.TopContent>
                <img src={selectedPost?.image} alt="" />
                <S.PublisherInfo>
                  <p>{moment.utc(selectedPost?.createdAt, 'YYYY-MM-DDTHH:mm:ssZ')?.format('MMM DD, YYYY')}</p>
                  <h3>{selectedPost?.author?.name}</h3>
                  <h2>{selectedPost?.title}</h2>
                </S.PublisherInfo>
              </S.TopContent>
              <S.PublisherContent dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
            </S.Content>
          ))}
        {isOpenModal && (
          <Modal open={isOpenModal} onClose={handleModalClose} closeAfterTransition>
            <ModalForm handleModalClose={handleModalClose} />
          </Modal>
        )}
      </S.Container>
    </>
  );
}
