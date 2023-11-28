function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { ScrollView, View } from 'react-native';
import DraggableItem from './components/DraggableItem';
import styles from './styles';
import useDraggableGridViewHooks from './useDraggableGridViewHooks';
const DraggableGridView = props => {
  const {
    style,
    contentContainerStyle,
    data,
    isEditing,
    shouldVibrate = true,
    shouldAnimOnRelease = false,
    itemContainerStyle,
    listWidth,
    itemHeight: propsItemHeight,
    numColumns,
    animMoveDuration,
    scrollThreshold,
    debounce,
    renderItem: propsRenderItem,
    renderOnEditOverlay,
    keyExtractor,
    onOrderChanged,
    onMovingStateChanged,
    onLayout: propsOnLayout,
    onContentSizeChange: propsOnContentSizeChange,
    onScroll: propsOnScroll
  } = props;
  const {
    isLock,
    isDragging,
    count,
    animDirectionArray,
    isEnableScroll,
    itemWidth,
    itemHeight,
    sectionWidth,
    sectionHeight,
    listRef,
    listLayoutRef,
    listContentHeightRef,
    listOffsetYRef,
    onLayout,
    onContentSizeChange,
    onScroll,
    startAnim,
    endAnim,
    onStartDrag,
    updateDragToIndex,
    onEndDrag
  } = useDraggableGridViewHooks({
    data,
    listWidth,
    propsItemHeight,
    numColumns,
    debounce,
    shouldAnimOnRelease,
    onOrderChanged,
    onMovingStateChanged,
    propsOnLayout,
    propsOnContentSizeChange,
    propsOnScroll
  });
  const renderItem = ({
    item,
    index
  }) => /*#__PURE__*/React.createElement(DraggableItem, {
    key: keyExtractor(item, index),
    style: itemContainerStyle,
    itemWidth: itemWidth,
    itemHeight: itemHeight,
    sectionWidth: sectionWidth,
    sectionHeight: sectionHeight,
    numColumns: numColumns || 1,
    itemLength: count,
    isDragging: isDragging,
    animDirection: animDirectionArray[index],
    index: index,
    isEditing: isEditing,
    shouldVibrate: shouldVibrate,
    shouldAnimOnRelease: shouldAnimOnRelease,
    animMoveDuration: animMoveDuration || 500,
    scrollThreshold: scrollThreshold,
    listRef: listRef,
    listLayoutRef: listLayoutRef,
    listContentHeightRef: listContentHeightRef,
    listOffsetYRef: listOffsetYRef,
    renderOnEditOverlay: renderOnEditOverlay,
    startAnim: startAnim,
    endAnim: endAnim,
    onStartDrag: onStartDrag,
    updateDragToIndex: updateDragToIndex,
    onEndDrag: onEndDrag
  }, /*#__PURE__*/React.createElement(React.Fragment, null, propsRenderItem({
    item,
    index
  })));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ScrollView, _extends({}, props, {
    ref: listRef,
    onLayout: onLayout,
    onContentSizeChange: onContentSizeChange,
    onScroll: onScroll,
    scrollEventThrottle: 16,
    style: [styles.list, style, {
      width: listWidth
    }],
    contentContainerStyle: [contentContainerStyle, styles.content],
    scrollEnabled: isEnableScroll
  }), data.map((item, index) => renderItem({
    item,
    index
  }))), isLock === true && /*#__PURE__*/React.createElement(View, {
    style: styles.uiBlock
  }));
};
export default DraggableGridView;
//# sourceMappingURL=DraggableGridView.js.map