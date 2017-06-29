import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";

export default {
    "entry": "index.js",
    "sourceMap": false,
    "targets": [
        {
            "dest": "dest/app.js",
            "format": "iife"
        }
    ],
    "plugins": [
        resolve({
            "jsnext": true,
            "main": true,
            "module": true,
            "browser": true,
            "extensions": [".js", ".jsx"],
            "preferBuiltins": true
        }),
        replace({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        }),
        commonjs({
            "include": "node_modules/**",
            "namedExports": {
                // left-hand side can be an absolute path, a path
                // relative to the current directory, or the name
                // of a module in node_modules
                "react": ["Children", "Component", "PropTypes", "createElement"]
            }
        }),
        babel({
            "babelrc": false,
            "plugins": [["transform-class-properties", { "spec": true }], "external-helpers", "transform-inline-environment-variables"],
            "runtimeHelpers": true,
            "exclude": "./node_modules/**",
            "presets": [
                ["latest", { "es2015": { "modules": false, "loose": true } }],
                "react"
            ]
        })
    ]
};
