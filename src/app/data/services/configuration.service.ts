import { Injectable } from '@angular/core';
import { IConfigurationService } from '../../core/interfaces/services/i-configuration.service';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService implements IConfigurationService {
  
  getApiUrlImages(): string {
    return environment.apiUrlImages;
  }

  getApiUrl(): string {
    return environment.apiUrl;
  }
  
  getApiHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', environment.headers.accept);
    headers = headers.set('Authorization', environment.headers.Authorization);
    return headers;
  }
  
  getYouTubeUrl(): string {
    return environment.ytUrl;
  }

  getDefaultTabSelected(): string {
    return environment.defaultTabSelected;
  }
}
