import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Filter, QueryFilters } from '../services/filter.service';

@Component({
  templateUrl: 'filter.component.html',
  selector: 'app-filter',
})
export class FilterComponent implements AfterViewInit {
  @Input() filters?: Observable<Array<Filter> | null>;
  @Output() makeRequest = new EventEmitter<QueryFilters>();
  started = false;
  realFilters: Array<Filter> = [];
  paramsFilter = new FormGroup({});
  ngAfterViewInit(): void {
    this.filters?.subscribe((filters) => {
      if (filters) {
        this.realFilters = filters;
        this.paramsFilter = this.createForm(filters);
      }
    });
  }
  createForm(filters: Array<Filter>): FormGroup {
    const controls: { [key: string]: FormControl } = {};
    filters.forEach(
      (filter) => (controls[filter.filter] = new FormControl(null))
    );
    return new FormGroup(controls);
  }
}
