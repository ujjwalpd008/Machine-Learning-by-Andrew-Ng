function [J grad] = nnCostFunction(nn_params, ...
                                   input_layer_size, ...
                                   hidden_layer_size, ...
                                   num_labels, ...
                                   X, y, lambda)
%NNCOSTFUNCTION Implements the neural network cost function for a two layer
%neural network which performs classification
%   [J grad] = NNCOSTFUNCTON(nn_params, hidden_layer_size, num_labels, ...
%   X, y, lambda) computes the cost and gradient of the neural network. The
%   parameters for the neural network are "unrolled" into the vector
%   nn_params and need to be converted back into the weight matrices. 
% 
%   The returned parameter grad should be a "unrolled" vector of the
%   partial derivatives of the neural network.
%

% Reshape nn_params back into the parameters Theta1 and Theta2, the weight matrices
% for our 2 layer neural network
%------------RESHAPING THE UNROLLED Theta MATRICES------------------------------
Theta1 = reshape(nn_params(1:hidden_layer_size * (input_layer_size + 1)), ...
                 hidden_layer_size, (input_layer_size + 1));
         % reshape(nn_params(1:25*(400+1),25,(400+1))
         % reshape(1:10025,25,401)
         
Theta2 = reshape(nn_params((1 + (hidden_layer_size * (input_layer_size + 1))):end), ...
                 num_labels, (hidden_layer_size + 1));
         %reshape(  (1+25*(400+1) :end),10,26)
         %reshape(10026:end,10,26)
      
% Setup some useful variables
m = size(X, 1);
         
% You need to return the following variables correctly 
J = 0;
Theta1_grad = zeros(size(Theta1));
Theta2_grad = zeros(size(Theta2));

% ====================== YOUR CODE HERE ======================
% Instructions: You should complete the code by working through the
%               following parts.
%
% Part 1: Feedforward the neural network and return the cost in the
%         variable J. After implementing Part 1, you can verify that your
%         cost function computation is correct by verifying the cost
%         computed in ex4.m
%
% Part 2: Implement the backpropagation algorithm to compute the gradients
%         Theta1_grad and Theta2_grad. You should return the partial derivatives of
%         the cost function with respect to Theta1 and Theta2 in Theta1_grad and
%         Theta2_grad, respectively. After implementing Part 2, you can check
%         that your implementation is correct by running checkNNGradients
%
%         Note: The vector y passed into the function is a vector of labels
%               containing values from 1..K. You need to map this vector into a 
%               binary vector of 1's and 0's to be used with the neural network
%               cost function.
%
%         Hint: We recommend implementing backpropagation using a for-loop
%               over the training examples if you are implementing it for the 
%               first time.
%
% Part 3: Implement regularization with the cost function and gradients.
%
%         Hint: You can implement this around the code for
%               backpropagation. That is, you can compute the gradients for
%               the regularization separately and then add them to Theta1_grad
%               and Theta2_grad from Part 2.
%
% for the purpose of training a neuralnetwork, we need to recode the labels as vectors containing only values 0 or 1

%---------------------COST FUNCTION---------------------------------------------
%We proceed with one training example at a time

for i = 1:m
    p = zeros(num_labels,1);                    %the p matrix will be our 10 dimensional matrix of one 1 and nine 0's for each label in y
    p(y(i)) = 1;                                %suppose y(i) = 3 (this could be between 1 to num_labels) then p = [0;0;1;0;0;0;0;0;0;0]
    a1 = [1 ; X(i,:)'];                         %dim of a1 = 1x401    X(i,:)' is first row of X as a cloumn vector
    a2 = sigmoid(Theta1*a1);                    %dim of a2 = 1x25
    a2 = [1 ; a2];                              %dim of a2 = 1x26   
    a3 = sigmoid(Theta2*a2);                    %dim of a3 = 1x10
    J += sum(  p.*(log(a3)) + (1-p).*(log(1-a3))  );
end
Zeta1 = Theta1(:,2:end);  %removing bias terms from Theta1 for regularization
Zeta2 = Theta2(:,2:end);  %removing bias terms from Theta2 for regularization

J = (-1/m)*J + (lambda/(2*m))*(  sum(sum(Zeta1.^2)) +sum(sum(Zeta2.^2) )   )   ;



%-------------------CALCULATION OF ? (accumulator) matrices----------------------
%We proceed with one training example at a time

for t = 1:m
    p = zeros(num_labels,1);             %the p matrix will be our 10 dimensional matrix of one 1 and nine 0's for each label in y
    p(y(t)) = 1;                         %suppose y(t) = 3 (this could be between 1 to num_labels) then p = [0;0;1;0;0;0;0;0;0;0]
    a1 = [1 ; X(t,:)'];   
    z2 = Theta1*a1;                     %dim of z2 = 1x25
    a2 = sigmoid(z2);                   %dim of a2 = 1x25 
    a2 = [1 ; a2];                      %dim of a2 = 1x26
    z3 = Theta2*a2;                     %dim of z3 = 1x10
    a3 = sigmoid(z3);                   %dim of a3 = 1x10
    
    del3 = a3 - p;                                            
    del2 = ((Theta2(:,2:end))'*del3).*sigmoidGradient(z2);   %here first column of Theta2 matrix is removed
    Theta1_grad += del2*(a1)'            ;
    Theta2_grad += del3*(a2)'            ;
end


%---------------------REGULARIZATION--------------------------------------------
%we have got our accumulator matrices ?(1) = Theta1_grad and ?(2) = Theta2_grad.
%Now we will do regularization in which first column of Theta1 and Theta2 should not participate as they consists of bias terms so set them to 0. 
temp1 = zeros(size(Theta1));
Theta1(:,1) = temp1(:,1);
Theta1_grad = (1/m)*(Theta1_grad + lambda*Theta1 )      ;

temp2 = zeros(size(Theta2));
Theta2(:,1) = temp2(:,1);
Theta2_grad = (1/m)*(Theta2_grad + lambda*Theta2 )     ;



% Unroll gradients
grad = [Theta1_grad(:) ; Theta2_grad(:)];





end
