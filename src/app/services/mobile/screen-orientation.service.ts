import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export type Orientation = 'vertical' | 'horizontal';

@Injectable({
  providedIn: 'root'
})
export class ScreenOrientationService {
  constructor() {}

  getScreenOrientation(): Observable<Orientation> {
    return fromEvent(window, 'resize').pipe(
      startWith(null), // Добавляем начальное значение
      map(() => {
        if (window.innerHeight > window.innerWidth) {
          return 'vertical';
        } else {
          return 'horizontal';
        }
      })
    );
  }
}