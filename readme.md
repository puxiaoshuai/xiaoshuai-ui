 npm i @umijs/fabric prettier -D
 npm i husky lint-staged -D
 npm i @commitlint/cli @commitlint/config-conventional commitizen cz-conventional-changelog -D
 npm i typescript -D 
 tsc --init
 npm i react react-dom @types/react @types/react-dom -D
 npm  i prop-types   
  npm i dumi serve rimraf -D   //rimraf 这是个删除文件内容的
  npm i cross-env
```js
"build:site": "rimraf doc-site && dumi build",
"build:types": "tsc -p tsconfig.build.json && cpr lib esm",
"build": "npm run clean && npm run build:types && gulp",
"preview:site": "cross-env SITE_BUILD_ENV=PREVIEW npm run build:site && serve doc-site",
"deploy:site": "npm run build:site && gh-pages -d doc-site",
 ```