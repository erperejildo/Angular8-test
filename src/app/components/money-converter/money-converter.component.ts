import {
  Component,
  OnChanges,
  Input,
  SimpleChanges,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-money-converter',
  templateUrl: './money-converter.component.html',
  styleUrls: ['./money-converter.component.scss']
})
export class MoneyConverterComponent implements OnChanges {
  @Input() money: number;
  @Output() update: EventEmitter<number> = new EventEmitter<number>();

  oldValue: number;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    // this is just another silly example but can listen changes like this
    this.oldValue = changes.money.previousValue;
    this.update.emit(this.money);
  }
}
