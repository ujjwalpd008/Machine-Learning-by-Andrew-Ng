function plotDecisionBoundary(theta, X, y)
%PLOTDECISIONBOUNDARY Plots the data points X and y into a new figure with
%the decision boundary defined by theta
%   PLOTDECISIONBOUNDARY(theta, X,y) plots the data points with + for the 
%   positive examples and o for the negative examples. X is assumed to be 
%   a either 
%   1) Mx3 matrix, where the first column is an all-ones column for the 
%      intercept.
%   2) MxN, N>3 matrix, where the first column is all-ones

% Plot Data
plotData(X(:,2:3), y);
hold on

if size(X, 2) <= 3
    % Only need 2 points to define a line, so choose two endpoints
    plot_x = [min(X(:,2))-2,  max(X(:,2))+2];

    % Calculate the decision boundary line
    plot_y = (-1/theta(3)).*(theta(2).*plot_x + theta(1));

    % Plot, and adjust axes for better viewing
    plot(plot_x, plot_y)
    
    % Legend, specific for the exercise
    legend('Admitted', 'Not admitted', 'Decision Boundary')
    axis([30, 100, 30, 100])
else
    % Here is the grid range
    u = linspace(-1, 1.5, 50);     %divide -1 to 1.5 into 50 equally spaced parts
    v = linspace(-1, 1.5, 50);

    z = zeros(length(u), length(v));      %dimension of z is 50x50
    % Evaluate z = theta*x over the grid
    for i = 1:length(u)                             % i= 1:50
        for j = 1:length(v)                         % j= 1:50
            z(i,j) = mapFeature(u(i), v(j))*theta;   %remember dimensions of theta = 28x1 and dimensions of z(i,j)  is 1x28
        end
    end
    z = z'; % important to transpose z before calling contour

    % Plot z = 0
    % Notice you need to specify the range [0, 0]
    contour(u, v, z, [0, 0], 'LineWidth', 2)    
                                                
end
hold off

end
%=================================NOTES=================================
%--->1.In "contour(u, v, z, [0, 0], 'LineWidth', 2)" we have [0,0] because That's how you tell the contour() function what 
%      values to draw the contours for. If you want only one curve, it must be entered as a vector of two identical values.
 





