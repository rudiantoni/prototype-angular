import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'm-select',
  standalone: true,
  imports: [DropdownModule, FormsModule],
  templateUrl: './m-select.component.html',
  styleUrl: './m-select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MSelectComponent),
      multi: true,
    },
  ],
})
export class MSelectComponent implements OnInit, ControlValueAccessor {
  @Input() options: any[] = [];
  @Input() optionLabel?: string = undefined;
  @Input() optionValue?: string = undefined;
  @Output() onChange: EventEmitter<DropdownChangeEvent> = new EventEmitter<DropdownChangeEvent>();

  value: any;
  onTouched: () => void = () => {};
  onChangeCallback: (_: any) => void = () => {};

  private DEFAULT_OPTION_LABEL: string = 'label';

  ngOnInit(): void {
    if (this.optionLabel === null || this.optionLabel === undefined) {
      if (this.options.length > 0 &&this.objContainsKey(this.options[0], this.DEFAULT_OPTION_LABEL)) {
        this.optionLabel = this.DEFAULT_OPTION_LABEL;
      }
    }
  }

  writeValue(option: any): void {
    this.value = option;
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  handleChange(event: DropdownChangeEvent): void {
    this.value = event.value;
    this.onChangeCallback(this.value);
    this.onChange.emit(event);
  }

  private objContainsKey(obj: object, key: string): boolean {
    return key in obj;
  }
}
