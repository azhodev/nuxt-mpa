export interface IStatItem {
    value: number;
    description: string;
}

export interface AnimatedStat extends IStatItem {
    target: number;
    current: number;
    isAnimating: boolean;
    isVisible: boolean;
    el: Element | null;
}
