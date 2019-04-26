export default class JSONUtil {
    public static tryParse(str: string): any {
        let result: any | null;

        try {
            result = JSON.parse(str);
        } catch {
            result = null;
        }

        return result;
    }

    private constructor() {}
}
