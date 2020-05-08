----------------------------------------------------------------------------------------
HEAD
----------------------------------------------------------------------------------------
An open source project for testing JS Libaries.

add the liberies to be tested in config.js
add test, and exspected results in testDefinition.js
add APIs you exspect to be avalible in the target enviroment to Enviroment.js

In config.js you can also find the (boolean) enableDepentencyFaliureTest, (enum) testType, and (number) depenantencyFailureRate.
These enable you to run systimatic or sudo-random API failure tests, to see how you code reacts to missing enviroment APIs.
----------------------------------------------------------------------------------------
Types of test.
----------------------------------------------------------------------------------------
Function level unit testing.
Sudo-random dependency testing.
Systematic dependacey testing.
Memrey leak testing.
Undeisreable coercion testing.
IO failure testing.
