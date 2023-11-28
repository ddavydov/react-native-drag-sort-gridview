"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=require("react");var _reactAddonsUpdate=_interopRequireDefault(require("react-addons-update"));var _reactNative=require("react-native");var _models=require("./models");var _default=exports.default=function _default(_ref){var data=_ref.data,debounce=_ref.debounce,listWidth=_ref.listWidth,propsItemHeight=_ref.propsItemHeight,numColumns=_ref.numColumns,shouldAnimOnRelease=_ref.shouldAnimOnRelease,onOrderChanged=_ref.onOrderChanged,onMovingStateChanged=_ref.onMovingStateChanged,propsOnLayout=_ref.propsOnLayout,propsOnContentSizeChange=_ref.propsOnContentSizeChange,propsOnScroll=_ref.propsOnScroll;var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2.default)(_useState,2),isLock=_useState2[0],setIsLock=_useState2[1];var _useState3=(0,_react.useState)(true),_useState4=(0,_slicedToArray2.default)(_useState3,2),isEnableScroll=_useState4[0],setIsEnableScroll=_useState4[1];var _useState5=(0,_react.useState)(undefined),_useState6=(0,_slicedToArray2.default)(_useState5,2),dragIndex=_useState6[0],setDragIndex=_useState6[1];var _useState7=(0,_react.useState)(undefined),_useState8=(0,_slicedToArray2.default)(_useState7,2),dragToIndex=_useState8[0],setDragToIndex=_useState8[1];var count=(0,_react.useMemo)(function(){return data.length;},[data]);var isDragging=(0,_react.useMemo)(function(){return dragIndex!==undefined;},[dragIndex]);var animDirectionArray=(0,_react.useMemo)(function(){return new Array(count).fill(0).map(function(_,index){if(dragIndex===index){return _models.MOVEMENT.dragging;}if(dragIndex===undefined||dragToIndex===undefined){return _models.MOVEMENT.restore;}if(dragToIndex<dragIndex){if(index>dragIndex){return _models.MOVEMENT.restore;}if(index>=dragToIndex){return _models.MOVEMENT.next;}}else if(dragToIndex>dragIndex){if(index<dragIndex){return _models.MOVEMENT.restore;}if(index<=dragToIndex){return _models.MOVEMENT.prev;}}return _models.MOVEMENT.restore;});},[count,dragIndex,dragToIndex]);var itemWidth=(0,_react.useMemo)(function(){return Math.floor(listWidth||_reactNative.Dimensions.get('screen').width)/(numColumns||1);},[listWidth,numColumns]);var itemHeight=(0,_react.useMemo)(function(){return propsItemHeight||itemWidth;},[propsItemHeight,itemWidth]);var sectionWidth=(0,_react.useMemo)(function(){return itemWidth/2;},[itemWidth]);var sectionHeight=(0,_react.useMemo)(function(){return itemHeight/2;},[itemHeight]);var listRef=(0,_react.useRef)(null);var listLayoutRef=(0,_react.useRef)();var listContentHeightRef=(0,_react.useRef)();var listOffsetYRef=(0,_react.useRef)();var debounceTimerRef=(0,_react.useRef)();var animatingCount=(0,_react.useRef)(0);var pendingFrom=(0,_react.useRef)();var pendingTo=(0,_react.useRef)();var changeOrder=(0,_react.useCallback)(function(from,to){setIsEnableScroll(true);setDragIndex(undefined);setDragToIndex(undefined);if(from===to){return;}var temp=data[from];var orderedData=(0,_reactAddonsUpdate.default)(data,{$splice:[[from,1],[to,0,temp]]});onOrderChanged(orderedData,from,to);},[data,onOrderChanged]);var startAnim=(0,_react.useCallback)(function(){if(shouldAnimOnRelease===false){return;}if(animatingCount.current===0){setIsLock(true);onMovingStateChanged&&onMovingStateChanged(true);}animatingCount.current+=1;},[shouldAnimOnRelease,onMovingStateChanged]);var endAnim=(0,_react.useCallback)(function(){if(shouldAnimOnRelease===false){return;}animatingCount.current-=1;if(animatingCount.current===0){setIsLock(false);onMovingStateChanged&&onMovingStateChanged(false);if(pendingFrom.current!==undefined&&pendingTo.current!==undefined){changeOrder(pendingFrom.current,pendingTo.current);pendingFrom.current=undefined;pendingTo.current=undefined;}}},[shouldAnimOnRelease,changeOrder,onMovingStateChanged]);var onStartDrag=(0,_react.useCallback)(function(index){setIsEnableScroll(false);setDragIndex(index);},[]);var updateDragToIndex=(0,_react.useCallback)(function(index){if(debounce===undefined){setDragToIndex(index);return;}if(debounceTimerRef.current!==undefined){clearTimeout(debounceTimerRef.current);}debounceTimerRef.current=setTimeout(function(){setDragToIndex(index);},debounce);},[debounce]);var onEndDrag=(0,_react.useCallback)(function(from,to){if(shouldAnimOnRelease===true&&animatingCount.current>0){pendingFrom.current=from;pendingTo.current=to;return;}else{changeOrder(from,to);}},[shouldAnimOnRelease,changeOrder]);var onLayout=(0,_react.useCallback)(function(event){propsOnLayout&&propsOnLayout(event);requestAnimationFrame(function(){var _listRef$current;return listRef==null?void 0:(_listRef$current=listRef.current)==null?void 0:_listRef$current.measureInWindow(function(x,y,width,height){listLayoutRef.current={width:width,height:height,x:x,y:y};});});},[propsOnLayout]);var onContentSizeChange=(0,_react.useCallback)(function(w,h){listContentHeightRef.current=h;propsOnContentSizeChange&&propsOnContentSizeChange(w,h);},[propsOnContentSizeChange]);var onScroll=(0,_react.useCallback)(function(event){listOffsetYRef.current=event.nativeEvent.contentOffset.y;propsOnScroll&&propsOnScroll(event);},[propsOnScroll]);return{isLock:isLock,isDragging:isDragging,count:count,animDirectionArray:animDirectionArray,isEnableScroll:isEnableScroll,itemWidth:itemWidth,itemHeight:itemHeight,sectionWidth:sectionWidth,sectionHeight:sectionHeight,listRef:listRef,listLayoutRef:listLayoutRef,listContentHeightRef:listContentHeightRef,listOffsetYRef:listOffsetYRef,onLayout:onLayout,onContentSizeChange:onContentSizeChange,onScroll:onScroll,startAnim:startAnim,endAnim:endAnim,onStartDrag:onStartDrag,updateDragToIndex:updateDragToIndex,onEndDrag:onEndDrag};};
//# sourceMappingURL=useDraggableGridViewHooks.js.map