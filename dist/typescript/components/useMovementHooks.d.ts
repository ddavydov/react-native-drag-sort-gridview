import { MOVEMENT } from '../models';
import { Animated } from 'react-native';
declare const _default: ({ itemWidth, itemHeight, numColumns, isEditing, isDragging, isDraggingItem, index, animDirection, animMoveDuration, startAnim, endAnim }: {
    itemWidth: number;
    itemHeight: number;
    numColumns: number;
    isEditing: boolean;
    shouldVibrate: boolean;
    isDragging: boolean;
    isDraggingItem: boolean;
    index: number;
    animDirection: MOVEMENT;
    animMoveDuration: number;
    startAnim: () => void;
    endAnim: () => void;
}) => {
    moveXAnim: Animated.Value;
    moveYAnim: Animated.Value;
};
export default _default;
//# sourceMappingURL=useMovementHooks.d.ts.map