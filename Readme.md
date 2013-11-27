# mysql-intermediate-type

## Install

```bash
npm install mysql-intermediate-type
```

## Introduction

Here is an example on how to use it:

```js
var ba_intermediateType = require('mysql-intermediate-type').forBackbone;
var mo_intermediateType = require('mysql-intermediate-type').forMongoose;

console.log(ba_intermediateType.get("int(32)"));
console.log(mo_intermediateType.get("int(32)"));
```
