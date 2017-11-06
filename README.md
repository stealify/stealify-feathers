# stealify-feathers

## Use

```
let feathersRules = require('stealify-feathers/rules')

config = {
  Replacement: 'stealbase', // require('package.json').name
  rules: [[strMatch,'Replacment'],[strMatch,'Replacment'],feathersRules],
}
// default replacement is package.name default rules are feathersRules
return require('stealify-feathers')()

```
