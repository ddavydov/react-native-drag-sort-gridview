import { MOVEMENT } from '../models';
import { useMemo } from 'react';
export default (({
  animDirection
}) => {
  const isDraggingItem = useMemo(() => animDirection === MOVEMENT.dragging, [animDirection]);
  return {
    isDraggingItem
  };
});
//# sourceMappingURL=useDraggableItemHooks.js.map