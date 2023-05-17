import { Component, OnInit } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';
import { TransService } from './shared/services/trans.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  selectedLang: string = 'sl';
  langs: {id: string, name: string}[] = [{id: 'sl', name: 'sl'}, {id: 'en', name: 'en'}];

  constructor(private themeService: ThemeService,
              private transService: TransService) {}

  ngOnInit(): void {
    this.themeService.appendTheme('light');
    this.transService.loadTranslations(this.selectedLang);
  }

  changeTheme(e: boolean) {
    let theme = e ? 'dark' : 'light';
    this.themeService.changeTheme(theme);
  }

  changeLanguage() {
    this.transService.loadTranslations(this.selectedLang);
  }
}
