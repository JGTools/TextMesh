import { Mesh } from 'three';
import { TextGeometry, TextGeometryParameters } from 'three/examples/jsm/geometries/TextGeometry';
import { Font } from 'three/examples/jsm/loaders/FontLoader';

export default class TextMesh extends Mesh {
    #text = "";
    #hAlign;
    #vAlign;
    #rotation;
    #options;
    /**
     * @param font - Font used for generating geometry.
     * @param rotation - Rotation in x, y, z axis. Default is [0, 0, 0].
     * @param hAlign - Horizontal alignment, range 0-1, 0 is left and 1 is right. Default is 0.5.
     * @param vAlign - Vertical alignment, range 0-1, 0 is bottom and 1 is top. Default is 0.5.
     * @param options - TextGeometryParameters passed to TextGeometry
     */
    constructor(font: Font, rotation = [0, 0, 0], hAlign = 0.5, vAlign = 0.5, options: TextGeometryParameters = { font: font, size: 1, height: 0, curveSegments: 0 }) {
        super();
        this.#rotation = rotation;
        this.#hAlign = hAlign;
        this.#vAlign = vAlign;
        this.#options = options;
    }
    setText(text: string) {
        if (text == this.#text)
            return;
        this.#text = text;
        this.geometry?.dispose();
        this.geometry = new TextGeometry(text, this.#options);
        this.geometry.computeBoundingBox();

        const xo = -(this.geometry.boundingBox?.max.x || 0) * this.#hAlign;
        const yo = -(this.geometry.boundingBox?.max.y || 0) * this.#vAlign;
        this.geometry.translate(xo, yo, 0);
        this.geometry.rotateX(this.#rotation[0]);
        this.geometry.rotateY(this.#rotation[1]);
        this.geometry.rotateZ(this.#rotation[2]);
    }
    getText() {
        return this.#text;
    }
}