function [h, display_array] = displayData(X, example_width)
%DISPLAYDATA Display 2D data in a nice grid
%   [h, display_array] = DISPLAYDATA(X, example_width) displays 2D data
%   stored in X in a nice grid. It returns the figure handle h and the 
%   displayed array if requested.
%    ----I think here  X = sel--------- and example width 

% Set example_width automatically if not passed in
if ~exist('example_width', 'var') || isempty(example_width) 
	example_width = round(sqrt(size(X, 2)));     % (400)^0.5 = 20
end

% Gray Image
colormap('gray');

% Compute rows, cols
[m n] = size(X);                       % m = 100 , n = 400
example_height = (n / example_width);  % = 400/20 = 20

% Compute number of items to display
display_rows = floor(sqrt(m));          % = floor(m=10) = 10
display_cols = ceil(m / display_rows);  % = ceil(100/10) = 10

% Between images padding
pad = 1;               %pad spacing beetwen the digit inside Figure

% Setup blank display
display_array = - ones(pad + display_rows * (example_height + pad), pad + display_cols * (example_width + pad));
                       % -ones(1 + 10*(20+1), 1 + 10*(20 + 1))   = -ones(211,211)

% Copy each example into a patch on the display array
curr_ex = 1;                       %"curr_ex" is the current example counter, when curr_ex is > m 
                                   %(m= number of example in the training set) you exit the loop.

for j = 1:display_rows            % 1:10
	for i = 1:display_cols          % 1:10
		if curr_ex > m,               % if curr_ex > 100
			break; 
		end
		% Copy the patch
		
		% Get the max value of the patch
		max_val = max(abs(X(curr_ex, :)));
		display_array(pad + (j - 1) * (example_height + pad) + (1:example_height), ...
		              pad + (i - 1) * (example_width + pad) + (1:example_width)) = ...
						reshape(X(curr_ex, :), example_height, example_width) / max_val;
		curr_ex = curr_ex + 1;
	end
	if curr_ex > m, 
		break; 
	end
end

% Display Image
h = imagesc(display_array, [-1 1]);

% Do not show axis
axis image off

drawnow;

end
