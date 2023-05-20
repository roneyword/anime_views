import { useEffect } from 'react';
import React, { MutableRefObject, useRef } from 'react';

import {
  Container
} from './styles';

interface ToastMessageProps {
  message: {
    id: number,
    type: 'error',
    text: string,
    duration: number,
  },
  isLeaving: boolean,
  onRemoveMessage: (id: number) => void,
  onAnimationEnd: (id: number) => void,
}

export const ToastMessage = ({
  message,
  onRemoveMessage,
  isLeaving,
  onAnimationEnd
}: ToastMessageProps) => {
  const animatedElementRef = useRef<MutableRefObject<any>>(null) as MutableRefObject<any>;
  const {id, type, text, duration} = message;
  
  const handleRemoveToast = () => {
    onRemoveMessage(id);
  };

  useEffect(() => {      
    const handleAnimationEnd = () => {
      onAnimationEnd(id);
    }
    
    const elementRef = animatedElementRef.current;
    if (isLeaving) {
      elementRef?.addEventListener('animationend', handleAnimationEnd);
    }
    
    return () => {
      elementRef.removeEventListener('animationend', handleAnimationEnd);
    }
  }, [isLeaving, id, onAnimationEnd]);

  useEffect(() => {
    const timeoutId = setTimeout(() => onRemoveMessage(id), duration || 7000);

    return () => {
      clearTimeout(timeoutId); 
    }
  }, [message, onRemoveMessage]);

  return (
    <Container
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      isLeaving={isLeaving}
      ref={animatedElementRef}
    >
      <strong>{text}</strong>
    </Container>
  )
}
