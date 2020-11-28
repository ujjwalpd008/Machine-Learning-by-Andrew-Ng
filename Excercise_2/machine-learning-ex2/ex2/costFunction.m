function [J, grad] = costFunction(theta, X, y)
%COSTFUNCTION Compute cost and gradient for logistic regression
%   J = COSTFUNCTION(theta, X, y) computes the cost of using theta as the
%   parameter for logistic regression and the gradient of the cost
%   w.r.t. to the parameters.

% Initialize some useful values
m = length(y); % number of training examples

% You need to return the following variables correctly 
J = 0;
grad = zeros(size(theta));

% ====================== YOUR CODE HERE ======================
% Instructions: Compute the cost of a particular choice of theta.
%               You should set J to the cost.
%               Compute the partial derivatives and set grad to the partial
%               derivatives of the cost w.r.t. each parameter in theta
%
% Note: grad should have the same dimensions as theta
%
J = (-1/m)*(  (y')*(log(sigmoid(X*theta))) + ((1-y)')*(log(1-sigmoid(X*theta)))  ) ;

grad = (1/m)*X'*(sigmoid(X*theta)-y) ;


% =============================================================

end
% very very important --> theta above is just a variable, the fminunc will calculate the value of this varible
%for ex if  f= 2(x^2)+20x-22 as here x is just present, just like that theta is just present above
% dimensions of theta are known  from dimensions of initial_theta 
