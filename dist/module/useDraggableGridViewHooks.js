import { useCallback, useMemo, useRef, useState } from 'react';
import update from 'react-addons-update';
import { Dimensions } from 'react-native';
import { MOVEMENT } from './models';
export default (({
  data,
  debounce,
  listWidth,
  propsItemHeight,
  numColumns,
  shouldAnimOnRelease,
  onOrderChanged,
  onMovingStateChanged,
  propsOnLayout,
  propsOnContentSizeChange,
  propsOnScroll
}) => {
  const [isLock, setIsLock] = useState(false);
  const [isEnableScroll, setIsEnableScroll] = useState(true);
  const [dragIndex, setDragIndex] = useState(undefined);
  const [dragToIndex, setDragToIndex] = useState(undefined);
  const count = useMemo(() => data.length, [data]);
  const isDragging = useMemo(() => dragIndex !== undefined, [dragIndex]);
  const animDirectionArray = useMemo(() => {
    return new Array(count).fill(0).map((_, index) => {
      if (dragIndex === index) {
        return MOVEMENT.dragging;
      }
      if (dragIndex === undefined || dragToIndex === undefined) {
        return MOVEMENT.restore;
      }
      if (dragToIndex < dragIndex) {
        // drag to prev
        if (index > dragIndex) {
          return MOVEMENT.restore;
        }
        if (index >= dragToIndex) {
          return MOVEMENT.next;
        }
      } else if (dragToIndex > dragIndex) {
        // drag to next
        if (index < dragIndex) {
          return MOVEMENT.restore;
        }
        if (index <= dragToIndex) {
          return MOVEMENT.prev;
        }
      }
      return MOVEMENT.restore;
    });
  }, [count, dragIndex, dragToIndex]);
  const itemWidth = useMemo(() => Math.floor(listWidth || Dimensions.get('screen').width) / (numColumns || 1), [listWidth, numColumns]);
  const itemHeight = useMemo(() => propsItemHeight || itemWidth, [propsItemHeight, itemWidth]);
  const sectionWidth = useMemo(() => itemWidth / 2, [itemWidth]);
  const sectionHeight = useMemo(() => itemHeight / 2, [itemHeight]);
  const listRef = useRef(null);
  const listLayoutRef = useRef();
  const listContentHeightRef = useRef();
  const listOffsetYRef = useRef();
  const debounceTimerRef = useRef();
  const animatingCount = useRef(0);
  const pendingFrom = useRef();
  const pendingTo = useRef();
  const changeOrder = useCallback((from, to) => {
    setIsEnableScroll(true);
    setDragIndex(undefined);
    setDragToIndex(undefined);
    if (from === to) {
      return;
    }
    const temp = data[from];
    const orderedData = update(data, {
      $splice: [[from, 1], [to, 0, temp]]
    });
    onOrderChanged(orderedData, from, to);
  }, [data, onOrderChanged]);
  const startAnim = useCallback(() => {
    if (shouldAnimOnRelease === false) {
      return;
    }
    if (animatingCount.current === 0) {
      setIsLock(true);
      onMovingStateChanged && onMovingStateChanged(true);
    }
    animatingCount.current += 1;
  }, [shouldAnimOnRelease, onMovingStateChanged]);
  const endAnim = useCallback(() => {
    if (shouldAnimOnRelease === false) {
      return;
    }
    animatingCount.current -= 1;
    if (animatingCount.current === 0) {
      setIsLock(false);
      onMovingStateChanged && onMovingStateChanged(false);
      if (pendingFrom.current !== undefined && pendingTo.current !== undefined) {
        changeOrder(pendingFrom.current, pendingTo.current);
        pendingFrom.current = undefined;
        pendingTo.current = undefined;
      }
    }
  }, [shouldAnimOnRelease, changeOrder, onMovingStateChanged]);
  const onStartDrag = useCallback(index => {
    setIsEnableScroll(false);
    setDragIndex(index);
  }, []);
  const updateDragToIndex = useCallback(index => {
    if (debounce === undefined) {
      setDragToIndex(index);
      return;
    }
    if (debounceTimerRef.current !== undefined) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(() => {
      setDragToIndex(index);
    }, debounce);
  }, [debounce]);
  const onEndDrag = useCallback((from, to) => {
    if (shouldAnimOnRelease === true && animatingCount.current > 0) {
      pendingFrom.current = from;
      pendingTo.current = to;
      return;
    } else {
      changeOrder(from, to);
    }
  }, [shouldAnimOnRelease, changeOrder]);
  const onLayout = useCallback(event => {
    propsOnLayout && propsOnLayout(event);
    requestAnimationFrame(() => {
      var _listRef$current;
      return (// @ts-ignore
        listRef === null || listRef === void 0 || (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.measureInWindow((x, y, width, height) => {
          listLayoutRef.current = {
            width,
            height,
            x,
            y
          };
        })
      );
    });
  }, [propsOnLayout]);
  const onContentSizeChange = useCallback((w, h) => {
    listContentHeightRef.current = h;
    propsOnContentSizeChange && propsOnContentSizeChange(w, h);
  }, [propsOnContentSizeChange]);
  const onScroll = useCallback(event => {
    listOffsetYRef.current = event.nativeEvent.contentOffset.y;
    propsOnScroll && propsOnScroll(event);
  }, [propsOnScroll]);
  return {
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
  };
});
//# sourceMappingURL=useDraggableGridViewHooks.js.map