import React, { useState } from 'react';
import * as S from './styles';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import { IoMdClose } from 'react-icons/io';

export function ModalForm({ handleModalClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [textPost, setTextPost] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <S.ModalContainer>
      <form onSubmit={handleSubmit}>
        <S.FormContainer>
          <IoMdClose className="closeIcon" size={40} onClick={() => handleModalClose(false)} />
          <h2>Contact</h2>
          <label htmlFor="">
            <input
              type="text"
              placeholder="Fill your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p>Name</p>
          </label>
          <label htmlFor="">
            <input
              type="email"
              placeholder="Fill valid e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>E-mail</p>
          </label>
          <label htmlFor="">
            <input
              type="number"
              placeholder="Fill your phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <p>Phone</p>
          </label>
          <S.TextareaContent>
            <p>Post</p>
            <textarea placeholder="Hello..." value={textPost} onChange={(e) => setTextPost(e.target.value)}></textarea>
          </S.TextareaContent>

          <button type="submit">
            <PiPaperPlaneRightFill />
            Submit
          </button>
        </S.FormContainer>
      </form>
    </S.ModalContainer>
  );
}
