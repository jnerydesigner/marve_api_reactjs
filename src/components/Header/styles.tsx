import styled from 'styled-components';
import BgCity from '../../assets/images/header_bg.png';
// import { shade } from 'polished';
// import BGgrid from '../../assets/images/bg.png';

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  width: 100%;
`;

export const ContainerHeader = styled.div`
  background: url(${BgCity});
  background-repeat: repeat-x;
  background-position: center;
  background-color: ${props => props.theme.colors.black};
  background-size: 180px;
  height: 200px;
`;

export const Row = styled.div`
  margin: 0 auto;
  width: ${props => `${props.theme.widths.xl}px`};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
