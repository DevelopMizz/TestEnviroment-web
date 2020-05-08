GlobalObject= Window || Global;

GloabalObject.config = {
  testConfig = new Function(){
    enableDependanceyFailureTesting = false;
    DependanceyFailureRate = 0;                           // 0 out of 10.
    testType = null;                                      // if multiple use arraay.
    condt DetectTedtType = 0;
    const SudoRandom = 1;
    const Systematic = 2;
    const Unit = 3
    const memreyLeak = 4;
  }
}
