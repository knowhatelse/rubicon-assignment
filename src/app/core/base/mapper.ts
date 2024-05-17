export abstract class Mapper<I,O> {
    abstract mapFrom(param: I): O;
    abstract mapFromList(param: I[]): O[];
}