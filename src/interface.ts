// @ts-ignore

export type PolygonStyle = {
  PolygonStyle?: undefined;
};

export type LineStyle = {
  LineStyle?: undefined;
  
};

export type State = 'drawing' | 'edit' | 'static' | 'animating' | 'hidden';
export type GeometryStyle = PolygonStyle | LineStyle;

export type EventType = 'drawStart' | 'drawUpdate' | 'drawEnd' | 'editEnd' | 'editStart';
export type EventListener = (eventData?: any) => void;

export type VisibleAnimationOpts = {
  duration?: number;
  delay?: number;
  callback?: () => void;
};

export type GrowthAnimationOpts = {
  duration: number;
  delay: number;
  callback: Function;
};
