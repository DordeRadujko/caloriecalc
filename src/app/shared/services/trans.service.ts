import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable(
  { providedIn: 'root' }
)
export class TransService {

  constructor(private http: HttpClient,
              private translateService: TranslateService) {}

  loadTranslations(lang: string) {
    this.http.get('http://localhost:4200/assets/i18n/' + lang + '.json')
      .subscribe(data => {
        this.translateService.setTranslation(lang, data);
        this.translateService.use(lang);
      });
  }

  translate(transCode: string) {
    return this.translateService.instant(transCode);
  }

}
