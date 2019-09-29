import p5 from 'p5';

function sketch(p: p5) {}

export function renderDesigner(element: HTMLElement) {
  return new p5(sketch, element);
}
