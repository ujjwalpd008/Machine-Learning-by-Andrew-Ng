clear;close all;clc
fprintf(' =============================MESHGRID=============================')
x = 0:5;
y = 0:2:10;
[X Y] = meshgrid(x,y);
Z = X.^2 + Y.^2;
Z
fprintf('Z(5,10) = %d \n',Z(6,6));
fprintf('Z(0,10) = %d \n',Z(1,6));
fprintf('Z(5,0) = %d \n',Z(6,1));

surf(X,Y,Z);


xlabel('X-values');
ylabel('Y-values');
zlabel('Z-values');


