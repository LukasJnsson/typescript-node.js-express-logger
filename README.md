<div align="center">

**`HTTP logger middleware for Express`**

<div align="center">
<img alt="TypeScript" width="40px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
<img alt="NodeJS" width="40px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
<img alt="Express" width="40px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"/>
<br/>

#### HTTP logger middleware for Express with implemented color highlighting and support for deuteranomaly and protanomaly (two types of red-green color blindness), published as hybrid NPM package


## Installation
```sh
npm i express-loggerr
```

## Import 
### (ES Modules)
```js
import { expressLogger } from 'express-loggerr';
```

## Import 
### (CommonJS Modules)
```js
const { expressLogger } = require('express-loggerr');
```

## Implementation
```js
const app = express();
app.use(expressLogger('selectedLogger'));
```

## Reference
- [**CLF**](#CLF)
- [**UTC**](#UTC)
- [**W3C**](#W3C)
- [**Dev**](#Dev)

### **CLF**

Selects NCSA Common Log Format (CLF)

```js
app.use(expressLogger('CLF'));
```

### **UTC**

Selects modified CLF with Universal Coordinated Time (UTC)

```js
app.use(expressLogger('UTC'));
```

### **W3C**

Selects W3C Extended format

```js
app.use(expressLogger('W3C'));
```

### **Dev**

Selects logger for development

```js
app.use(expressLogger('Dev'));
```