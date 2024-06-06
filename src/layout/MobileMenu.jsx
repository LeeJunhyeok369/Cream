import React from 'react';
import { GoBookmark, GoHome, GoPencil, GoPerson, GoSearch } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StMobileNav = styled.ul`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100vw;
  padding: 10px 0;
  border-top: 1px solid #cfcfcf;
  box-sizing: border-box;
  background-color: #fff;
  z-index: 9;

  @media (min-width: 1120px) {
    display: none;
  }

  li {
    text-align: center;
    font-size: 12px;
    cursor: pointer;

    @media (max-width: 800px) {
      font-size: 9px;
    }
  }

  span {
    display: block;
    color: #9a9a9a;
    margin-top: 3px;
    @media (max-width: 800px) {
      margin: 0;
    }
  }

  svg {
    @media (max-width: 1120px) {
      width: 1.5rem;
      height: auto;
      margin-bottom: 3px;
    }
  }
  @media (max-width: 800px) {
    gap: 30px;
  }
`;

const MobileMenu = () => {
  const navigate = useNavigate();
  return (
    <StMobileNav>
      <li onClick={() => navigate(`/`)}>
        <GoHome size="40" />
        <span>HOME</span>
      </li>
      <li>
        <GoSearch size="40" />
        <span>PRODUCT</span>
      </li>
      <li>
        <GoBookmark size="40" />
        <span>SAVED</span>
      </li>
      <li onClick={() => navigate(`/mypage`)}>
        <GoPerson size="40" />
        <span>MY</span>
      </li>
      <li onClick={() => navigate(`/createPost`)}>
        <GoPencil size="40" />
        <span>WRITE</span>
      </li>
    </StMobileNav>
  );
};

export default MobileMenu;
