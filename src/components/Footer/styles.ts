import styled from 'styled-components';
import BGgrid from '../../assets/images/bg.png';

// export const Container = styled.div`
//   margin: 0 auto;
//   width: ${props => `${props.theme.widths.xl}px`};
//   height: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   flex-direction: row;
//   margin-top: 10px;
//   margin-bottom: 10px;
//   background: ${props => `${props.theme.colors.secondary}`};
//   padding: 10px;
//   border-radius: 8px;
//   border: 3px solid ${props => `${props.theme.colors.border}`};
// `;

export const Footerproject = styled.footer`
  bottom: 0;
  background: #000;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 0;
  /* position: fixed; */
`;

export const Row = styled.div`
  width: ${props => `${props.theme.widths.xl}px`};
  margin: 0 auto;
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
    background: url(${BGgrid});
    background-repeat: repeat;
    background-position: center;
    opacity: 0.08;
  }
`;
