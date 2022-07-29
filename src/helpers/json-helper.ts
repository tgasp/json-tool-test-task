
export class JSONHelper {
    static isValid(json: string) {
        try {
            JSON.parse(json);
        } catch (err) {
            return false;
        }

        return true;
    }

    static format(json: string, tabSpace = 2) {
        if (JSONHelper.isValid(json)) {
            const parsed = JSON.parse(json);

            return JSON.stringify(parsed, null, tabSpace);
        }
    }

    static minify(json: string) {
        return JSONHelper.format(json, 0);
    }
}