import { State } from "../../models/other/state.model";

export abstract class IStateService {
    abstract setTabState(param: string) :void;
    abstract setQuerySearchState(param: string) :void;
    abstract getState(): State;
}