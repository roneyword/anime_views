import React, { useEffect } from 'react';
import useAnimatedList from '../../../hooks/useAnimatedList';
import { toastEventManager } from '../../../utils/toast';
import { ToastMessage } from '../toastMessage';

import {
  Container
} from './styles';

interface AddToastProps {
  type: 'error',
  text: string,
  duration: number,
}

export const ToastContainer = () => {
  const {
    items: messages,
    setItems: setMessages,
    onAnimationEnd,
    onRemoveItem: onRemoveMessage,
    pendingRemovalItemIds: pendingRemovalMessageIds
  } = useAnimatedList();

  const addToast = ({ type, text, duration}: AddToastProps) => {
    setMessages(prevState => [
      ...prevState, 
      {id: Math.random(), type, text, duration}
    ])
  };

  useEffect(() => {
    toastEventManager.on('addtoast', addToast);

    return () => {
      toastEventManager.removeListener('addtoast', addToast);
    }
  }, [])

  return (
    <Container>
      {messages.map((msg) => (
        <ToastMessage
          key={msg.id}
          message={msg}
          onRemoveMessage={onRemoveMessage}
          isLeaving={pendingRemovalMessageIds.includes(msg.id)}
          onAnimationEnd={onAnimationEnd}
        />
      ))}
    </Container>
  )
}
