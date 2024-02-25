import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { PostContext } from '../../context/PostContext';

export function Header() {
  const { setIsOpenModal } = useContext(PostContext);
  const navigate = useNavigate();

  function handleModalOpen() {
    setIsOpenModal(true);
  }

  return (
    <S.HeaderContent>
      <button onClick={() => navigate('/')}>
        <h3>Rockr Blog</h3>
      </button>
      <div>
        <button onClick={() => navigate('/post')}>
          <h3>Posts</h3>
        </button>
        <button onClick={handleModalOpen}>
          <h3>Contact</h3>
        </button>
      </div>
    </S.HeaderContent>
  );
}
