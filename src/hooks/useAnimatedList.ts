import { useCallback, useState } from "react";

interface AnimatedListProps {
  id: number;
  type: 'error';
  text: string;
  duration: number;
}

export default function useAnimatedList(initalListValues = [] as AnimatedListProps[]) {  
  const [items, setItems] = useState(initalListValues);
  const [pendingRemovalItemIds, setPendingRemovalItemIds] = useState([] as Number[]);

  const onAnimationEnd = useCallback((id: number) => {
    setItems(prevState => prevState.filter(item => item.id !== id));
    setPendingRemovalItemIds(prevState => prevState.filter(itemId => itemId !== id));
  }, [])

  const onRemoveItem = useCallback((id: number) => {
    setPendingRemovalItemIds(prevState => [...prevState, id]);
  }, []);

  return {
    pendingRemovalItemIds,
    items,
    setItems,
    onAnimationEnd,
    onRemoveItem
  }
}