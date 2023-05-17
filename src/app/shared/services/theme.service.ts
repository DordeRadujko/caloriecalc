import { DOCUMENT } from "@angular/common";
import { Injectable, Inject } from "@angular/core";

@Injectable(
  {providedIn: 'root'}
)
export class ThemeService {

  constructor(@Inject(DOCUMENT) private doc: Document) {}

  appendTheme(theme: string) {

    let link: HTMLLinkElement = this.doc.createElement('link');

    link.setAttribute('id', 'theme');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', 'assets/themes/' + theme + '.css');

    this.doc.head.appendChild(link);

  }

  changeTheme(theme: string) {

    let themeLink = this.doc.getElementById('theme');
    themeLink?.setAttribute('href', 'assets/themes/' + theme + '.css')

  }

}
