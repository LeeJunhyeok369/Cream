import React from 'react';
import { IoBookmarkOutline } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { stringPostDate } from '../../store/slices/postSlice';
import { useNavigate } from 'react-router-dom';

const StPostItem = styled.button`
  background-color: transparent;
  width: 100%;
  height: auto;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5%;
  cursor: pointer;
  border: none;
`;

const StImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5%;
`;

const StIdAndLikeButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5% 0 0 0;
`;

const StPostUserId = styled.span`
  font-size: 150%;
  color: #484848;
`;

const StLikeAndBookmark = styled.span`
  /* background-color: aqua; */
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 120%;
  color: #484848;
`;

const StPostContentWrapper = styled.div`
  /* background-color: green; */
  width: 100%;
  height: 200%;
  padding: 3% 0;
`;

const StPostContent = styled.p`
  overflow: hidden;
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-align: justify;
  color: #7e7e7e;
`;

const StPostDate = styled.div`
  /* background-color: aliceblue; */
  width: 100%;
  display: flex;
  justify-content: left;
  color: #d0d0d0;
`;
const PostItem = ({ post }) => {
  const { image, userId, productName, postContent, popularity } = post;

  const navigate = useNavigate();

  return (
    <StPostItem onClick={() => navigate(`/detailed`)}>
      <StImage src={image} alt={productName} />
      <StIdAndLikeButtons>
        <StPostUserId>{userId}</StPostUserId>
        <StLikeAndBookmark>
          <IoHeartOutline size={27} onClick={() => {}} />
          {popularity}
          <IoBookmarkOutline size={27} onClick={() => {}} />
        </StLikeAndBookmark>
      </StIdAndLikeButtons>
      <StPostContentWrapper>
        <StPostContent>{postContent}</StPostContent>
      </StPostContentWrapper>
      <StPostDate>{stringPostDate}</StPostDate>
    </StPostItem>
  );
};
export default PostItem;
