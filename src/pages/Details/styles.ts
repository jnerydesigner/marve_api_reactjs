import styled from 'styled-components';
import BGgrid from '../../assets/images/bg.png';

export const Container = styled.div`
  margin: 0 auto;
  height: 300px;
  width: ${props => `${props.theme.widths.xl}px`};
  border: 3px solid ${props => `${props.theme.colors.border}`};
  background: ${props => `${props.theme.colors.secondary}`};
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

export const ContainerHero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  z-index: 2;
`;
export const HeroImageBox = styled.div`
  width: 25%;
  margin-right: 20px;
  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const HeroDetailBox = styled.div`
  flex: 1;

  padding: 20px;
  h1 {
    font-size: 3rem;
    text-align: center;
    text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }
  p {
    padding: 15px 10px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  }
`;
