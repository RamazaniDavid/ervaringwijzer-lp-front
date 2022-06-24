import { SvgPathType } from './SvgPathType';

export interface MediaType {
  style?: React.CSSProperties;
  className?: string;
  data?:
    | JSX.Element
    | string
    | SVGAElement
    | HTMLImageElement
    | HTMLCanvasElement
    | HTMLVideoElement
    | SvgPathType;
  overrideClassName?: boolean;
}
