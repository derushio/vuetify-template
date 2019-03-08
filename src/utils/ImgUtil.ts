import * as Exif from 'exif-js';

/**
 * need
 * img {
 *     image-orientation: none !important;
 * }
 */
export default class ImgUtil {
    /**
     * Imageをロード
     * @param url
     */
    public static async loadImg(url: string) {
        return new Promise<HTMLImageElement>(async (resolve, reject) => {
            const image = new Image();
            image.crossOrigin = 'anonymous';

            image.onload = () => {
                resolve(image);
            };
            image.onerror = (e) => {
                reject(e);
            };

            image.src = url;
        });
    }

    public static buildBlob(base64: string) {
        const buffer = this.buildBuffer(base64);
        const blob = new Blob([buffer.buffer] as BlobPart[], {
            type: 'image/jpeg',
        });
        return blob;
    }

    public static buildBuffer(base64: string) {
        const bin = atob(base64.replace(/^.*,/, ''));
        const buffer = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) {
            buffer[i] = bin.charCodeAt(i);
        }
        return buffer;
    }

    public static async loadBlob(blob: Blob) {
        return await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result as string);
            };
            reader.onerror = (e) => {
                reject(e);
            };

            reader.readAsDataURL(blob);
        });
    }

    /**
     * Exif情報から角度IDを取得
     * @param img
     */
    public static async getOrientation(img: HTMLImageElement) {
        return new Promise<number>((resolve, reject) => {
            Exif.getData(img, () => {
                const orientation = Exif.getTag(img, 'Orientation');
                resolve(orientation || 1);
            });
        });
    }

    /**
     * Exif情報から撮影時の角度を取得
     * @param img
     */
    public static async getRotateFromExif(img: HTMLImageElement) {
        const orientation = await this.getOrientation(img);
        switch (orientation) {
            case 1:
            case 2:
                return 0;
            case 3:
            case 4:
                return 180;
            case 5:
            case 6:
                return 90;
            case 7:
            case 9:
                return 270;
            default:
                return 0;
        }
    }

    /**
     * Exif情報から画像を回転
     * @param img
     */
    public static async rotateFromExif(img: HTMLImageElement) {
        Exif.getData(img, () => {
            Exif.getTag(img, 'Orientation');
        });

        const rotate = await this.getRotateFromExif(img);
        const canvas = document.createElement('canvas');
        if (rotate === 90 || rotate === 270) {
            // 90度回転時は縦横が入れ替わる
            canvas.width = img.naturalHeight;
            canvas.height = img.naturalWidth;
        } else {
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
        }

        const context = canvas.getContext('2d')!;
        context.rotate(rotate * Math.PI / 180);

        // offset
        if (rotate === 90) {
            context.translate(0, -img.naturalHeight);
        } else if (rotate === 180) {
            context.translate(-img.naturalWidth, -img.naturalHeight);
        } else if (rotate === 270) {
            context.translate(-img.naturalWidth, 0);
        }

        // draw
        context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
        img.src = canvas.toDataURL();
        return img;
    }

    /**
     * 画像を切り取り
     */
    public static async crop(image: string, x: number, y: number,
            width: number, height: number) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const context = canvas.getContext('2d')!;
        const imageSource = await this.loadImg(image);
        context.drawImage(imageSource, -x, -y);
        return canvas.toDataURL();
    }

    public static async resize(image: string, maxWidth: number, maxHeight: number) {
        const imageSource = await this.loadImg(image);

        const sAspect = imageSource.naturalWidth / imageSource.naturalHeight;
        const dAspect = maxWidth / maxHeight;
        const dSize = {
            width: maxWidth, height: maxHeight,
        };
        if (sAspect < dAspect) {
            dSize.width = dSize.height * sAspect;
        } else {
            dSize.height = dSize.width * (1 / sAspect);
        }

        const canvas = document.createElement('canvas');
        canvas.width = dSize.width; canvas.height = dSize.height;
        const context = canvas.getContext('2d')!;
        context.drawImage(imageSource,
            0, 0, imageSource.naturalWidth, imageSource.naturalHeight,
            0, 0, dSize.width, dSize.height);
        return canvas.toDataURL();
    }

    protected constructor() {}
}
