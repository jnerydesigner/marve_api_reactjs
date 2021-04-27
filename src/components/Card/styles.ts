import styled from 'styled-components';
import { shade } from 'polished';
import BGgrid from '../../assets/images/bg.png';

export const Container = styled.div`
  width: 100%;
  height: 460px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  border: 3px solid var(--bg-padrao);
  border-radius: 8px;
  background-color: var(--str-font);

  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;
    background: url(${BGgrid});
    background-repeat: repeat;
    background-position: center;
    opacity: 0.08;
  }

  .box-img {
    width: 50%;
    height: 45%;
    margin-top: 10px;
    margin-bottom: 10px;
    transition: 0.2s;
    z-index: 2;
    img {
      width: 150px;
      height: 150px;
      border-radius: 75px;
      border: 3px solid ${props => `${props.theme.colors.border}`};
    }
    &:hover {
      transform: scale(1.3) rotate(15deg) translateY(10px);
      cursor: pointer;
    }
  }
  &:hover {
    cursor: pointer;
  }
  &:hover .description p {
    background: #b2bec3;
  }
  h3 {
    transition: 0.2s;
  }
  &:hover .description h3 {
    transform: scale(1.2) translateY(-5px);
  }

  .description {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      background: #fff;
      border: 1px solid #4c94f6;
      padding: 10px;
      border-radius: 5px;
      transition: 0.2s;
    }
    .btn {
      display: block;
      background: chocolate;
      padding: 10px 15px;
      border-radius: 5px;
      color: #fff;
      font-size: 20px;
      transition: 0.2s;
      border: 2px solid #4c94f6;
      z-index: 2;
    }
    .btn:hover {
      background: ${shade(0.2, '#4c94f6')};
      color: #fff;
      transform: scale(1.1);
    }
  }
`;
