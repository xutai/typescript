# typescript

## learn and take note



```
$ npm install -g typescript
$ tsc
```
site: https://www.typescriptlang.org/



common git commands
```shell
git init
git add .
git commit -m "new"
git remote add origin https://github.com/xutai/typescript.git
git push -u origin master
echo "done"
```


- double check generics2.ts 
- double check ambient modules
ambient adj. 周围的；外界的；环绕的；产生轻松氛围的 


/// <reference types="node" /> 
/// <reference path="@types/node/index.d.ts" /> 

/// <reference path="../@types/webpack-numbers-library.d.ts" />

```
tsc --watch --traceResolution
```






## How to run typescript source code?
first of all, **fork** the code, then
just run `npm run b`

```json
    "scripts": {
        "b": "npm run build:compiler && node built/local/tsc.js ./abc.ts",
        "c": "npm run build:compiler && npm run build:tests && node build/local/tsc.js ./abc.ts",
    }
```


if want to change the file `src\executeCommandLine\executeCommandLine.ts`, for example add code
```js
console.log(system, cb, commandLineArgs)
```
in `export function executeCommandLine()`,
you must change the file `src\executeCommandLine\tsconfig.json` as follows
```js
    "compilerOptions": {
        "lib": ["es5", "es6", "esnext",  "dom"]
    },
```
