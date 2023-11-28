import React from 'react';
import { LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent, ScrollViewProps, ViewStyle } from 'react-native';
declare const DraggableGridView: <T>(props: ScrollViewProps & {
    data: T[];
    listWidth?: number;
    itemHeight?: number;
    isEditing: boolean;
    shouldVibrate?: boolean;
    shouldAnimOnRelease?: boolean;
    itemContainerStyle?: ViewStyle;
    animMoveDuration?: number;
    numColumns: number;
    debounce?: number | undefined;
    scrollThreshold?: number | undefined;
    renderItem: ({ item, index }: {
        item: T;
        index: number;
    }) => React.ReactElement | null;
    renderOnEditOverlay?: ({ index }: {
        index: number;
    }) => React.ReactElement | null;
    keyExtractor: (item: T, index: number) => string;
    onOrderChanged: (orderedData: T[], from: number, to: number) => void;
    onMovingStateChanged?: (isMoving: boolean) => void;
    onLayout?: (event: LayoutChangeEvent) => void;
    onContentSizeChange?: (w: number, h: number) => void;
    onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}) => React.JSX.Element;
export default DraggableGridView;
//# sourceMappingURL=DraggableGridView.d.ts.map