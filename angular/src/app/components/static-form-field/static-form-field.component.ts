import {Component, ElementRef, Input, OnDestroy, Optional, Self} from '@angular/core';
import {MatFormFieldControl} from '@angular/material';
import {Subject} from 'rxjs/Subject';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {ControlValueAccessor, NgControl} from '@angular/forms';

@Component({
  selector: 'app-static-form-field',
  templateUrl: './static-form-field.component.html',
  styleUrls: ['./static-form-field.component.css'],
  providers: [{provide: MatFormFieldControl, useExisting: StaticFormFieldComponent}],
})
export class StaticFormFieldComponent implements ControlValueAccessor, MatFormFieldControl<any>, OnDestroy {
    static nextId = 0;

    private _value = '';
    stateChanges: Subject<void> = new Subject<void>();
    focused = false;
    controlType = 'app-static-input';
    id = `static-input-${StaticFormFieldComponent.nextId++}`;
    describedBy = '';

    get empty() {
        return !this._value;
    }

    get shouldLabelFloat() { return true; }

    @Input()
    get placeholder(): string { return ''; }
    set placeholder(value: string) {
        // this._placeholder = value;
        // this.stateChanges.next();
    }
    // private _placeholder: string;

    @Input()
    get required(): boolean { return this._required; }
    set required(value: boolean) {
        this._required = coerceBooleanProperty(value);
        this.stateChanges.next();
    }
    private _required = false;

    @Input()
    get disabled(): boolean { return true }
    set disabled(value: boolean) {}

    @Input()
    get value(): string {
        return this._value;
    }
    set value(val: string) {
        this._value = val;
        this.stateChanges.next();
    }

    get errorState() {
      return (this.ngControl && this.ngControl.invalid) || false;
    }

    constructor(@Optional() @Self() public ngControl: NgControl) {
        // Replace the provider from above with this.
        if (this.ngControl != null) {
            // Setting the value accessor directly (instead of using
            // the providers) to avoid running into a circular import.
            this.ngControl.valueAccessor = this;
        }
    }

// constructor(private fm: FocusMonitor, private elRef: ElementRef) {
    //     fm.monitor(elRef, true).subscribe(origin => {
    //         this.focused = !!origin;
    //         this.stateChanges.next();
    //     });
    // }

    ngOnDestroy() {
        this.stateChanges.complete();
        // this.fm.stopMonitoring(this.elRef);
    }

    setDescribedByIds(ids: string[]) {
        this.describedBy = ids.join(' ');
    }

    onContainerClick(event: MouseEvent) {
        // if ((event.target as Element).tagName.toLowerCase() != 'input') {
        //     this.elRef.nativeElement.querySelector('input')!.focus();
        // }
    }


    registerOnChange(fn: any): void {
    }

    registerOnTouched(fn: any): void {
    }

    setDisabledState(isDisabled: boolean): void {
    }

    writeValue(obj: any): void {
    }
}
