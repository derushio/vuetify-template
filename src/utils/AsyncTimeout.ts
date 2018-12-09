/**
 * 通常のタイムアウト
 * @param millisec
 * @param func
 */
export async function astimeout(millisec: number, func?: () => Promise<void>): Promise<void> {
    return await new Promise<void>((resolve, reject) => {
        setTimeout(async () => {
            try {
                if (func != null) {
                    await func();
                }
            } catch (e) {
                reject(e);
            }

            resolve();
        }, millisec);
    });
}

/**
 * 実行してから待つ
 * @param millisec
 * @param func
 */
export async function aswait(millisec: number, func?: () => Promise<void>): Promise<void> {
    return await new Promise<void>(async (resolve, reject) => {
        try {
            if (func != null) {
                await func();
            }
        } catch (e) {
            reject(e);
        }

        setTimeout(() => {
            resolve();
        }, millisec);
    });
}
