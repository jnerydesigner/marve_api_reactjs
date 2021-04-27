import styled from 'styled-components';
import BG from '../../assets/images/bg.png';

export const ContainerMain = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  margin-bottom: 100px;
  padding: 20px;
`;

export const RowCard = styled.div`
  margin: 0 auto;
  width: ${props => `${props.theme.widths.xl}px`};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const Paginator = styled.div`
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: -20px;
  width: ${props => `${props.theme.widths.xl}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border: 3px solid ${props => `${props.theme.colors.border}`};
  background: ${props => `${props.theme.colors.secondary}`};
  border-radius: 8px;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;
    background: url(${BG});
    background-repeat: repeat;
    background-position: center;
    opacity: 0.08;
  }
  ul {
    list-style: none;
    z-index: 2;
  }
  li {
    display: inline-block;
    margin: 0 5px;
  }
  a,
  button {
    padding: 10px 25px;
    border-radius: 5px;
    transition: 0.2s;
    background: #fff;
    cursor: pointer;
    &:hover {
      background: #fd79a8;
      color: #fff;
    }
  }
  button.activePage {
    background: ${props => `${props.theme.colors.border}`};
    color: #fff;
    &:hover {
      background: #fd79a8;
      color: #fff;
    }
  }
  a.activePage {
    background: ${props => `${props.theme.colors.border}`};
    color: #fff;
    &:hover {
      background: #fd79a8;
      color: #fff;
    }
  }
`;
