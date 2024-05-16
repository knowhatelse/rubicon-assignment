import { HttpHeaders } from "@angular/common/http";

export abstract class IConfigurationService {
    abstract getApiUrl(): string;
    abstract getApiHeaders(): HttpHeaders;
}