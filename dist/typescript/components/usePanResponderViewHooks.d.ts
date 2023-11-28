import { MutableRefObject, RefObject } from 'react';
import { Animated, LayoutRectangle, ScrollView } from 'react-native';
declare const _default: ({ itemWidth, itemHeight, sectionWidth, sectionHeight, numColumns, index, itemLength, isEditing, animMoveDuration, scrollThreshold, shouldAnimOnRelease, listRef, listLayoutRef, listContentHeightRef, listOffsetYRef, startAnim, endAnim, onStartDrag, updateDragToIndex, onEndDrag }: {
    itemWidth: number;
    itemHeight: number;
    sectionWidth: number;
    sectionHeight: number;
    numColumns: number;
    index: number;
    itemLength: number;
    isEditing: boolean;
    animMoveDuration: number;
    scrollThreshold?: number | undefined;
    shouldAnimOnRelease: boolean;
    listRef: RefObject<ScrollView>;
    listLayoutRef: MutableRefObject<LayoutRectangle | undefined>;
    listContentHeightRef: MutableRefObject<number | undefined>;
    listOffsetYRef: MutableRefObject<number | undefined>;
    startAnim: () => void;
    endAnim: () => void;
    onStartDrag: (index: number) => void;
    updateDragToIndex: (index: number | undefined) => void;
    onEndDrag: (from: number, to: number) => void;
}) => {
    panResponder: {
        panHandlers: {};
    };
    dragXAnim: Animated.Value;
    dragYAnim: Animated.Value;
};
export default _default;
//# sourceMappingURL=usePanResponderViewHooks.d.ts.map