# TextMesh

[![npm](https://img.shields.io/npm/v/@jgtools/textmesh)](https://www.npmjs.com/package/@jgtools/textmesh)
[![npm](https://img.shields.io/npm/dm/@jgtools/textmesh)](https://www.npmjs.com/package/@jgtools/textmesh)
[![GitHub](https://img.shields.io/github/license/jgtools/textmesh)](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)

TextMesh for ThreeJS that extends Mesh and uses TextGeometry.

## Installation

### Using npm

```bash
npm i @jgtools/textmesh
```

```javascript
import TextMesh from "@jgtools/textmesh";
// ...
```

### Using cdn

```html
<script type="module">
    import TextMesh from "https://cdn.jsdelivr.net/npm/@jgtools/textmesh@1.0.0/dist/index.min.js";
    // ...
</script>
```

## Usage

```javascript
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import TextMesh from "@jgtools/textmesh";

const loader = new FontLoader();
const font = await loader.loadAsync("font.json");

const mesh = new TextMesh(font);
mesh.setText("Hello World!");

// use it as a regular Mesh
scene.add(mesh);

// get text as string
const text = mesh.getText();
```

## License

MIT
