# stealify-feathers

## Use

```
let feathersRules = require('stealify-feathers/rules')

require('stealify-debug')({
  Replacement: 'stealbase', // require('package.json').name
  rules: [[strMatch,'Replacment'],[strMatch,'Replacment'],feathersRules],
})

require('stealify-console')({
  Replacement: 'stealbase', // require('package.json').name
  rules: [[strMatch,'Replacment'],[strMatch,'Replacment'],feathersRules],
})

require('stealify-process')({
  Replacement: 'stealbase', // require('package.json').name
  rules: [[strMatch,'Replacment'],[strMatch,'Replacment'],feathersRules],
})

return require('feathers')

```
