import styled, { css, keyframes } from 'styled-components';

interface ToastProps {
  isLeaving: boolean;
}

const messageIn = keyframes`
  from { 
    opactity: 0;
    transform: translateY(100px)
  }

  to { 
    opactity: 1;
    transform: translateY(0)
  }
`;

const messageOut = keyframes`
  from { 
    opactity: 1;
    transform: translateY(0)
  }

  to { 
    opactity: 0;
    transform: translateY(100px)
  }
`;

export const Container = styled.div<ToastProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  border-radius: 4px;
  cursor: pointer;
  color: #F6F5FC;
  background: #FC5050;
  animation: ${messageIn} 0.3s;

  strong {    
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 16px;
  }
  
  ${({isLeaving}) => isLeaving && css`animation: ${messageOut} 0.3s forwards;`};

  & + & {
    margin-top: 12px;
  }

  > img {
    margin-right: 8px;
  }
`;