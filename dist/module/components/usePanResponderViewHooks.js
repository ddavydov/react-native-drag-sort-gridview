import { useCallback, useMemo, useRef } from 'react';
import { Animated, PanResponder } from 'react-native';
export default (({
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
}) => {
  const durationMultiplier = useMemo(() => animMoveDuration / itemWidth, [itemWidth, animMoveDuration]);
  const row = useMemo(() => index % numColumns, [index, numColumns]);
  const column = useMemo(() => Math.floor(index / numColumns), [index, numColumns]);
  const normaliseXOffset = useMemo(() => itemWidth * row + sectionWidth, [itemWidth, sectionWidth, row]);
  const normaliseYOffset = useMemo(() => itemHeight * column + sectionHeight, [itemHeight, sectionHeight, column]);
  const dummyPanResponder = useMemo(() => ({
    panHandlers: {}
  }), []);
  const dragXAnimRef = useRef(new Animated.Value(0));
  const dragYAnimRef = useRef(new Animated.Value(0));
  const toIndexRef = useRef(index);

  // scroll
  const listInitOffsetY = useRef(0);
  const currentOffsetY = useRef(0);
  const onPressRelease = useCallback(toIndex => {
    onEndDrag(index, Math.max(0, toIndex));
    if (shouldAnimOnRelease === false) {
      dragXAnimRef.current.setValue(0);
      dragYAnimRef.current.setValue(0);
    }
  }, [index, shouldAnimOnRelease, onEndDrag]);
  const panResponder = useMemo(() => PanResponder.create({
    onStartShouldSetPanResponder: (_evt, _gestureState) => true,
    onStartShouldSetPanResponderCapture: (_evt, _gestureState) => true,
    onMoveShouldSetPanResponder: (_evt, _gestureState) => true,
    onMoveShouldSetPanResponderCapture: (_evt, _gestureState) => true,
    onPanResponderStart: (_evt, gestureState) => {
      if (gestureState.numberActiveTouches > 1) {
        return;
      }
      dragXAnimRef.current.setValue(0);
      dragYAnimRef.current.setValue(0);
      currentOffsetY.current = 0;
      listInitOffsetY.current = listOffsetYRef.current || 0;
      onStartDrag(index);
      startAnim();
    },
    onPanResponderMove: (_evt, gestureState) => {
      const {
        dx,
        dy,
        moveY
      } = gestureState;
      if (scrollThreshold && scrollThreshold > 0) {
        var _listLayoutRef$curren, _listLayoutRef$curren2, _listLayoutRef$curren3;
        const listHeight = ((_listLayoutRef$curren = listLayoutRef.current) === null || _listLayoutRef$curren === void 0 ? void 0 : _listLayoutRef$curren.height) || 0;
        const listThresdshold = listHeight * 0.2;
        const listUpperThresdshold = (((_listLayoutRef$curren2 = listLayoutRef.current) === null || _listLayoutRef$curren2 === void 0 ? void 0 : _listLayoutRef$curren2.y) || 0) + listThresdshold;
        const listLowerThresdshold = (((_listLayoutRef$curren3 = listLayoutRef.current) === null || _listLayoutRef$curren3 === void 0 ? void 0 : _listLayoutRef$curren3.y) || 0) + listHeight - listThresdshold;
        if (moveY > listLowerThresdshold) {
          var _listLayoutRef$curren4, _listRef$current;
          currentOffsetY.current = Math.min(currentOffsetY.current + 10, (listContentHeightRef.current || 0) - (((_listLayoutRef$curren4 = listLayoutRef.current) === null || _listLayoutRef$curren4 === void 0 ? void 0 : _listLayoutRef$curren4.height) || 0) - listInitOffsetY.current);
          const yOffset = listInitOffsetY.current + currentOffsetY.current;
          (_listRef$current = listRef.current) === null || _listRef$current === void 0 || _listRef$current.scrollTo({
            y: yOffset,
            animated: false
          });
        } else if (moveY < listUpperThresdshold) {
          var _listRef$current2;
          currentOffsetY.current = Math.max(currentOffsetY.current - 10, -listInitOffsetY.current);
          const yOffset = listInitOffsetY.current + currentOffsetY.current;
          (_listRef$current2 = listRef.current) === null || _listRef$current2 === void 0 || _listRef$current2.scrollTo({
            y: yOffset,
            animated: false
          });
        }
      }
      const sectionX = Math.floor((normaliseXOffset + dx) / sectionWidth / 2);
      const sectionY = Math.floor((normaliseYOffset + dy + currentOffsetY.current) / sectionHeight / 2);
      const newToIndex = sectionY * numColumns + sectionX;
      if (newToIndex !== toIndexRef.current) {
        toIndexRef.current = newToIndex;
        updateDragToIndex(newToIndex);
      }
      dragXAnimRef.current.setValue(dx);
      dragYAnimRef.current.setValue(dy + currentOffsetY.current);
    },
    onPanResponderTerminationRequest: (_evt, _gestureState) => false,
    onPanResponderRelease: (_evt, gestureState) => {
      const toIndex = Math.min(Math.max(0, toIndexRef.current), itemLength - 1);
      onPressRelease(toIndex);
      if (shouldAnimOnRelease === true) {
        const {
          dx,
          dy
        } = gestureState;
        const distinationX = (toIndex % numColumns - index % numColumns) * itemWidth;
        const distinationY = (Math.floor(toIndex / numColumns) - Math.floor(index / numColumns)) * itemHeight;
        const duration = Math.min(animMoveDuration, Math.sqrt(Math.pow(distinationX - dx, 2) + Math.pow(distinationY - dy, 2)) * durationMultiplier);
        Animated.parallel([Animated.timing(dragXAnimRef.current, {
          toValue: distinationX,
          duration,
          useNativeDriver: true
        }), Animated.timing(dragYAnimRef.current, {
          toValue: distinationY,
          duration,
          useNativeDriver: true
        })]).start(() => {
          endAnim();
        });
      }
    },
    onPanResponderTerminate: (_evt, _gestureState) => {},
    onShouldBlockNativeResponder: (_evt, _gestureState) => {
      return true;
    }
  }), [index, normaliseXOffset, normaliseYOffset, sectionWidth, sectionHeight, numColumns, itemWidth, itemHeight, itemLength, animMoveDuration, scrollThreshold, shouldAnimOnRelease, listContentHeightRef, listLayoutRef, listOffsetYRef, listRef, durationMultiplier, startAnim, endAnim, onPressRelease, onStartDrag, updateDragToIndex]);
  return {
    panResponder: isEditing ? panResponder : dummyPanResponder,
    dragXAnim: dragXAnimRef.current,
    dragYAnim: dragYAnimRef.current
  };
});
//# sourceMappingURL=usePanResponderViewHooks.js.map