@REM npm init
npm install --save-dev typescript tslint @types/node
.\node_modules\.bin\tsc --init
.\node_modules\.bin\tslint --init
mkdir src
code .\src\index.ts

.\node_modules\.bin\tsc
node .\dist\index.js