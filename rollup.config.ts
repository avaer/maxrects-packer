// NOTE: The plugin has two different modes:
// * one to transpile `.ts -> .js`
// * one to create `.ts -> .d.ts` bundles
import { ts, dts } from "rollup-plugin-dts";

const config = [
    {
        input: "./src/maxrects-packer.ts",
        // NOTE: The first output is your transpiled typescript
        output: [
            { file: "dist/maxrects-packer.js", name: "MaxRectsPacker", format: "umd", sourcemap: true },
            { file: "dist/maxrects-packer.mjs", format: "es", sourcemap: true }
        ],
        plugins: [ ts() ]
    },
    {
        input: "./src/maxrects-packer.ts",
        // NOTE: The second output is your bundled `.d.ts` file
        output: [{ file: "dist/maxrects-packer.d.ts", format: "es" }],
        plugins: [dts()]
    }
];
export default config;
