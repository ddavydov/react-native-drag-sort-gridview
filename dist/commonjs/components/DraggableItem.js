"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _reactNativeReanimated=_interopRequireDefault(require("react-native-reanimated"));var _styles=_interopRequireDefault(require("./styles"));var _useDraggableItemHooks=_interopRequireDefault(require("./useDraggableItemHooks"));var _usePanResponderViewHooks=_interopRequireDefault(require("./usePanResponderViewHooks"));var _useReanimHooks2=_interopRequireDefault(require("./useReanimHooks"));var _useMovementHooks2=_interopRequireDefault(require("./useMovementHooks"));var _jsxRuntime=require("react/jsx-runtime");var _this=void 0,_jsxFileName="/Users/denis/www/react-native-drag-sort-gridview/src/components/DraggableItem.tsx";var DraggableItem=function DraggableItem(_ref){var children=_ref.children,style=_ref.style,itemWidth=_ref.itemWidth,itemHeight=_ref.itemHeight,sectionWidth=_ref.sectionWidth,sectionHeight=_ref.sectionHeight,numColumns=_ref.numColumns,isEditing=_ref.isEditing,shouldVibrate=_ref.shouldVibrate,shouldAnimOnRelease=_ref.shouldAnimOnRelease,index=_ref.index,itemLength=_ref.itemLength,isDragging=_ref.isDragging,animDirection=_ref.animDirection,animMoveDuration=_ref.animMoveDuration,scrollThreshold=_ref.scrollThreshold,listRef=_ref.listRef,listLayoutRef=_ref.listLayoutRef,listContentHeightRef=_ref.listContentHeightRef,listOffsetYRef=_ref.listOffsetYRef,renderOnEditOverlay=_ref.renderOnEditOverlay,startAnim=_ref.startAnim,endAnim=_ref.endAnim,onStartDrag=_ref.onStartDrag,updateDragToIndex=_ref.updateDragToIndex,onEndDrag=_ref.onEndDrag;var _useDraggableItemHook=(0,_useDraggableItemHooks.default)({animDirection:animDirection}),isDraggingItem=_useDraggableItemHook.isDraggingItem;var _useReanimHooks=(0,_useReanimHooks2.default)({isEditing:isEditing,shouldVibrate:shouldVibrate}),animatedStyles=_useReanimHooks.animatedStyles;var _useMovementHooks=(0,_useMovementHooks2.default)({itemWidth:itemWidth,itemHeight:itemHeight,numColumns:numColumns,isEditing:isEditing,shouldVibrate:shouldVibrate,isDragging:isDragging,isDraggingItem:isDraggingItem,index:index,animDirection:animDirection,animMoveDuration:animMoveDuration,startAnim:startAnim,endAnim:endAnim}),moveXAnim=_useMovementHooks.moveXAnim,moveYAnim=_useMovementHooks.moveYAnim;var _usePanResponderViewH=(0,_usePanResponderViewHooks.default)({itemWidth:itemWidth,itemHeight:itemHeight,sectionWidth:sectionWidth,sectionHeight:sectionHeight,numColumns:numColumns,index:index,itemLength:itemLength,isEditing:isEditing,animMoveDuration:animMoveDuration,scrollThreshold:scrollThreshold,shouldAnimOnRelease:shouldAnimOnRelease,listRef:listRef,listLayoutRef:listLayoutRef,listContentHeightRef:listContentHeightRef,listOffsetYRef:listOffsetYRef,startAnim:startAnim,endAnim:endAnim,onStartDrag:onStartDrag,updateDragToIndex:updateDragToIndex,onEndDrag:onEndDrag}),panResponder=_usePanResponderViewH.panResponder,dragXAnim=_usePanResponderViewH.dragXAnim,dragYAnim=_usePanResponderViewH.dragYAnim;return(0,_jsxRuntime.jsxs)(_reactNative.Animated.View,{style:[style,_styles.default.wrapper,{width:itemWidth,height:itemHeight},{transform:[{translateX:isDraggingItem?dragXAnim:moveXAnim},{translateY:isDraggingItem?dragYAnim:moveYAnim}]},isDraggingItem&&_styles.default.dragging],children:[(0,_jsxRuntime.jsx)(_reactNativeReanimated.default.View,Object.assign({},panResponder.panHandlers,{style:[_styles.default.reanimatedWrapper,animatedStyles],children:children})),isEditing&&renderOnEditOverlay&&renderOnEditOverlay({index:index})]});};var _default=exports.default=DraggableItem;
//# sourceMappingURL=DraggableItem.js.map