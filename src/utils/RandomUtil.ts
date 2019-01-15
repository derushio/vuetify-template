export default class RandomUtil {
    public static rand(start: number, end?: number) {
        if (end == null) {
            return Math.random() * start;
        }
        return Math.floor(Math.random() * (end - start) + start);
    }

    protected constructor() {}
}
