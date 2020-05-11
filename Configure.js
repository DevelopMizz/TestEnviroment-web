!(g.MizLib.TestEnviroment) || g.MizLib.TestEnviroment.config = new function(){
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

