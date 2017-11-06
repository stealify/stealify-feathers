let feathersRules = require('./rules')


module.exports = function(config){
  //If no config :)
  config = {
    Replacement: 'stealbase', // require('package.json').name
    rules: [[strMatch,'Replacment'],[strMatch,'Replacment'],feathersRules],
  }
  require('stealify-debug')(config)
  require('stealify-console')(config)
//require('stealify-process')(config)
  //TODO: Return Object with all the other core dependencys like rest and socket and communs
  return require('feathers')
}


