export default function debounce(fn: any, ms: number) {
  let timer: number;
  return function (this: any, e: WheelEvent, ...args: any) {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      fn.call(this, e, args);
    }, ms);
  };
}
