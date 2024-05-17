import { Observable } from "rxjs";

export abstract class ITabSwitchService {
    abstract switchTab(tab:string): void;
    abstract getCurrentTab():Observable<string>;
}