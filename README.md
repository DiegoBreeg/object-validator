<h3>Object-Validator<h3>

This library allows you to easily check if an object has the names of its keys and expected value types.

<h3>Usage<h3>
Install this library:

```bash
$ npm i object-validatordb
```
Import or require the library to your code and instantiate
```js
const  {ObjectValidator} = require('object-validatordb')
const validator = new ObjectValidator()
```
validator has a method called validate() that takes two parameters
-dummy: which will receive the object to be validated.
-rules: an object with the validation rules.
If dummy follows the rules described in rules validator returns ture, otherwise it returns false

```js
const dummy = { name: 'Joe', lastName: 'doe', age: 27}
const rules = {name: String, lastName: String, age: Number}
validator.validate(dummy, rules) //true
```

```js
const dummy = { name: 'Joe', lastName: 'doe'}
const rules = {name: String, lastName: String, age: Number}
validator.validate(dummy, rules) //false
```
