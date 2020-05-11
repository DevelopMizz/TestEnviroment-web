!(g.mizLib.testEnviroment.defaultTestSet) || g.mizLib.testEnviroment.defaultTestSet = new function(){
  this.test = new function(){
    this.targetFunc = null;
    this.arguments = [];
    this.exspectedResult = {};
    this.run = function(){
      return (this.exspectedResult === this.targetFunc
    }
  };
};
