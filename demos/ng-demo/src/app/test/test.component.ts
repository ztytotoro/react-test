import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked
} from '@angular/core';
import { renderRuntime, size, pos } from '@ztytotoro/react-runtime';
import { TestControl, NewTestControl } from '@ztytotoro/react-control';

const controls = [
  TestControl.option({
    ...size(400, 300),
    ...pos(50, 50),
    props: {
      text: '123'
    }
  }),
  NewTestControl.option({
    ...size(300, 300),
    ...pos(600, 50)
  })
];
const mount = renderRuntime({
  ...size(1920, 1080),
  controls
});

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements AfterViewChecked {
  constructor() {}
  @ViewChild('container', { static: false }) container: ElementRef<
    HTMLDivElement
  >;

  ngAfterViewChecked() {
    mount(this.container.nativeElement);
  }
}
