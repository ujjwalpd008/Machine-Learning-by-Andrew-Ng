clear;close all;clc
%======================1.OPTIONAL EXCERCISES=================================
%you should compute the test error using the best value of ? you found.

%first we need to find theta using lambda = 3 ,basically we are training on training set
load ('ex5data1.mat');
lambda = 3;

[theta] = trainLinearReg([ones(size(X,1),1) X], y,3);

fprintf('Value of theta found is: \n');
theta
[test_error garbage_val] = linearRegCostFunction([ones(size(Xtest,1),1) Xtest] , ytest, theta, 0);   %here lambda should be 0
fprintf('Value of test error found using best lambda = 3 is : %f \n',test_error);
fprintf('This value is expected to be 3.8599 \n')
