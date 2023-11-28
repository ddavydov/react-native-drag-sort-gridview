function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Animated } from 'react-native';
import Reanimated from 'react-native-reanimated';
import styles from './styles';
import useDraggableItemHooks from './useDraggableItemHooks';
import usePanResponderViewHooks from './usePanResponderViewHooks';
import useReanimHooks from './useReanimHooks';
import useMovementHooks from './useMovementHooks';
const DraggableItem = ({
  children,
  style,
  itemWidth,
  itemHeight,
  sectionWidth,
  sectionHeight,
  numColumns,
  isEditing,
  shouldVibrate,
  shouldAnimOnRelease,
  index,
  itemLength,
  isDragging,
  animDirection,
  animMoveDuration,
  scrollThreshold,
  listRef,
  listLayoutRef,
  listContentHeightRef,
  listOffsetYRef,
  renderOnEditOverlay,
  startAnim,
  endAnim,
  onStartDrag,
  updateDragToIndex,
  onEndDrag
}) => {
  const {
    isDraggingItem
  } = useDraggableItemHooks({
    animDirection
  });
  const {
    animatedStyles
  } = useReanimHooks({
    isEditing,
    shouldVibrate
  });
  const {
    moveXAnim,
    moveYAnim
  } = useMovementHooks({
    itemWidth,
    itemHeight,
    numColumns,
    isEditing,
    shouldVibrate,
    isDragging,
    isDraggingItem,
    index,
    animDirection,
    animMoveDuration,
    startAnim,
    endAnim
  });
  const {
    panResponder,
    dragXAnim,
    dragYAnim
  } = usePanResponderViewHooks({
    itemWidth,
    itemHeight,
    sectionWidth,
    sectionHeight,
    numColumns,
    index,
    itemLength,
    isEditing,
    animMoveDuration,
    scrollThreshold,
    shouldAnimOnRelease,
    listRef,
    listLayoutRef,
    listContentHeightRef,
    listOffsetYRef,
    startAnim,
    endAnim,
    onStartDrag,
    updateDragToIndex,
    onEndDrag
  });
  return /*#__PURE__*/React.createElement(Animated.View, {
    style: [style, styles.wrapper, {
      width: itemWidth,
      height: itemHeight
    }, {
      transform: [{
        translateX: isDraggingItem ? dragXAnim : moveXAnim
      }, {
        translateY: isDraggingItem ? dragYAnim : moveYAnim
      }]
    }, isDraggingItem && styles.dragging]
  }, /*#__PURE__*/React.createElement(Reanimated.View, _extends({}, panResponder.panHandlers, {
    style: [styles.reanimatedWrapper, animatedStyles]
  }), children), isEditing && renderOnEditOverlay && renderOnEditOverlay({
    index
  }));
};
export default DraggableItem;
//# sourceMappingURL=DraggableItem.js.map