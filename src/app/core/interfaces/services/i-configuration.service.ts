import { HttpHeaders } from "@angular/common/http";

export abstract class IConfigurationService {
    abstract getApiUrlImages(): string;
    abstract getApiUrl(): string;
    abstract getApiHeaders(): HttpHeaders;
}