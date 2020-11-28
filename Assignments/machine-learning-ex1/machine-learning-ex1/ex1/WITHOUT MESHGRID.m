clear;close all;clc
fprintf('====================WITHOUT MESHGRID================(uses the function exp_fun)')
x = 0:5;
y = 0:2:10;
z = zeros(6,6);
for i = 1:6
  for j = 1:6
    z(i,j) = exp_fun(x(i),y(j));
  endfor
endfor

fprintf('z(5,10) = %d \n',z(6,6));
fprintf('z(0,10) = %d \n',z(1,6));
fprintf('z(5,0) = %d \n',z(6,1));
z
z = z';
surf(x,y,z)
xlabel('x-values');
ylabel('y-values');
zlabel('z-values')