function out = mapFeature(X1, X2)
% MAPFEATURE Feature mapping function to polynomial features
%
%   MAPFEATURE(X1, X2) maps the two input features
%   to quadratic features used in the regularization exercise.
%
%   Returns a new feature array with more features, comprising of 
%   X1, X2, X1.^2, X2.^2, X1*X2, X1*X2.^2, etc..
%
%   Inputs X1, X2 must be the same size
%

degree = 6;
out = ones(size(X1(:,1)));     % here we are initializing out with first column of 1's.
                               % Inside the for loop more 27 columns of  (X1, X2, X1.^2, X2.^2, X1*X2, X1*X2.^2, etc..) will be added                     
for i = 1:degree
    for j = 0:i
        out(:, end+1) = (X1.^(i-j)).*(X2.^j);    %out(:,end+1) this is an ingenious way of adding new columns
    end
end

end
%========================HELPING NOTES BY ME===================================================================
%---> (X1.^(i-j)).*(X2.^j) does operation between 118 elements of X1 and corresponding elements of X2 to create columns of 27 new features

%---->Out is a 118 x 28 dimensional matrix which is our new design matrix when mapFeature is called in line 58 of ex_reg.m  (28 beacuse first column of 1's)
 
%---->Earlier we had X as our design matrix with 118x3 with first column being a coulumn of 1's and 2nd column X1 and 3rd column X2

%----> When we call mapFeature(u(i),v(i)) instead of mapFeature(X1, X2)  operation (X1.^(i-j)).*(X2.^j) takes place between
%      two numbers u(i) and v(i) to calculate a 1x28 dimensional row vector of (X1, X2, X1.^2, X2.^2, X1*X2, X1*X2.^2, etc..) terms
%      instead of 118 dimensional column vectors X1 and X2.

%----> It is just like operation taking place between one element of X1 and corresponding element in X2

%----> In case of "out = mapFeature(u(i),v(i))"  "out" will be a 1x28 row vector.







