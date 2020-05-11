!(g.mizLib.testEnviroment) || g.mizLib.testEnviroment.config = new function(){
  this.enviromentConfig = new function(){
    this.testSet = g.mizLib.testEnviroment.defaultTestSet
  }
  
  this.testConfig = new Function(){
    this.enableDependanceyFailureTesting = false;
    this.DependanceyFailureRate = 0;                           // 0 out of 10.
    this.testType = null;                                      // if multiple use arraay.
    const DetectTedtType = 0;
    const SudoRandom = 1;
    const Systematic = 2;
    const Unit = 3;
    const memreyLeak = 4;
  }
}

