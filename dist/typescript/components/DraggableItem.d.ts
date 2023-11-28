import { MOVEMENT } from '../models';
import React, { MutableRefObject, RefObject } from 'react';
import { LayoutRectangle, ScrollView, ViewStyle } from 'react-native';
declare const DraggableItem: ({ children, style, itemWidth, itemHeight, sectionWidth, sectionHeight, numColumns, isEditing, shouldVibrate, shouldAnimOnRelease, index, itemLength, isDragging, animDirection, animMoveDuration, scrollThreshold, listRef, listLayoutRef, listContentHeightRef, listOffsetYRef, renderOnEditOverlay, startAnim, endAnim, onStartDrag, updateDragToIndex, onEndDrag }: {
    children?: JSX.Element;
    itemWidth: number;
    itemHeight: number;
    sectionWidth: number;
    sectionHeight: number;
    numColumns: number;
    style?: ViewStyle;
    isEditing: boolean;
    shouldVibrate: boolean;
    shouldAnimOnRelease: boolean;
    index: number;
    itemLength: number;
    isDragging: boolean;
    animDirection: MOVEMENT;
    animMoveDuration: number;
    scrollThreshold?: number | undefined;
    listRef: RefObject<ScrollView>;
    listLayoutRef: MutableRefObject<LayoutRectangle | undefined>;
    listContentHeightRef: MutableRefObject<number | undefined>;
    listOffsetYRef: MutableRefObject<number | undefined>;
    renderOnEditOverlay?: ({ index }: {
        index: number;
    }) => React.ReactElement | null;
    startAnim: () => void;
    endAnim: () => void;
    onStartDrag: (index: number) => void;
    updateDragToIndex: (index: number | undefined) => void;
    onEndDrag: (from: number, to: number) => void;
}) => React.JSX.Element;
export default DraggableItem;
//# sourceMappingURL=DraggableItem.d.ts.map