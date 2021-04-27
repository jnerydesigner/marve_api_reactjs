import styled from 'styled-components';
import BGgrid from '../../assets/images/bg.png';

export const Container = styled.div`
  margin: 0 auto;
  width: ${props => `${props.theme.widths.xl}px`};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  margin-top: 10px;
  background: ${props => `${props.theme.colors.secondary}`};
  padding: 10px;
  border-radius: 8px;
  border: 3px solid ${props => `${props.theme.colors.border}`};
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
`;

export const ContentSearchBar = styled.div`
  width: 200px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  z-index: 2;
  span {
    margin-right: 10px;
    width: 180px;
  }
  input {
    width: 100%;
    height: 30px;
    padding: 10px;
    border: 2px solid ${props => `${props.theme.colors.border}`};
    margin: 10px 15px;
    border-radius: 5px;
  }
`;
export const ContentMenuBar = styled.div`
  width: 300px;
  margin-right: 50px;
  z-index: 2;
  a {
    cursor: pointer;
    display: block;
    width: 130px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: ${props => `${props.theme.colors.border}`};
    color: #fff;
    transition: 0.2s;
    &:hover {
      background: #fd79a8;
      color: #fff;
    }
    span {
      font-size: 20px;
      line-height: 45px;
      height: 40px;
      margin-left: 5px;
    }
    svg {
      color: #fff;
    }
  }
`;
