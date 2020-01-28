import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  languageSubject: Subject<string> = new Subject<string>();
  loadingSubject: Subject<boolean> = new Subject()

  constructor(private title: Title) {
  }


  setTitle(title, addDefault: boolean = true) {
    const pageTitle = addDefault ?
      `${title} => Egyvent : book your event and have fun for free, Create your own event and make online marketing free` : title;
    this.title.setTitle(pageTitle);
  }

  startLoading() {
    this.loadingSubject.next(true);
  }

  stopLoading() {
    this.loadingSubject.next(false);
  }
}
