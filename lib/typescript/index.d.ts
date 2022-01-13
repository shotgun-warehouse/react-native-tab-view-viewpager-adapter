import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { NavigationState, Route, PagerCommonProps, EventEmitterProps } from 'react-native-tab-view/src/types';
declare type Props<T extends Route> = PagerCommonProps & {
    onIndexChange: (index: number) => void;
    navigationState: NavigationState<T>;
    children: (props: EventEmitterProps & {
        position: Animated.Node<number>;
        render: (children: React.ReactNode) => React.ReactNode;
        jumpTo: (key: string) => void;
    }) => React.ReactNode;
    style?: StyleProp<ViewStyle>;
    orientation?: 'vertical' | 'horizontal';
    transition?: 'scroll' | 'curl';
    showPageIndicator?: boolean;
    pageMargin?: number;
    overdrag?: boolean;
    overScrollMode?: 'always' | 'never' | 'auto';
};
export default class ViewPagerBackend<T extends Route> extends React.Component<Props<T>> {
    static defaultProps: {
        onIndexChange: () => void;
        swipeEnabled: boolean;
    };
    componentDidUpdate(prevProps: Props<T>): void;
    private enterListeners;
    private jumpToIndex;
    private jumpTo;
    private addListener;
    private removeListener;
    private currentIndex;
    private offset;
    private justScrolled;
    private onPageScroll;
    onPageScrollStateChanged: (state: "Idle" | "Dragging" | "Settling") => void;
    private onIndexChange;
    ref: React.RefObject<any>;
    render(): React.ReactNode;
}
export {};
