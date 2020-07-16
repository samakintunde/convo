export interface IBreakpoint {
  mobile: number;
  tablet: number;
  desktop: number;
}

const BREAKPOINT: IBreakpoint = {
  mobile: 0,
  tablet: 640,
  desktop: 1024,
};

export default BREAKPOINT;
