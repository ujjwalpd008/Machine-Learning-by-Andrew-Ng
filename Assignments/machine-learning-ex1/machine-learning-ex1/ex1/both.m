clear;close all;clc
fprintf(' ==========================WITH MESHGRID=============================\n')
x = 0:5;
y = 0:2:10;
[X Y] = meshgrid(x,y);
X
Y
Z = X.^2 + Y.^2;
Z
fprintf('Z(5,10) = %d \n',Z(6,6));
fprintf('Z(0,10) = %d \n',Z(1,6));
fprintf('Z(5,0) = %d \n',Z(6,1));
figure;
surf(X,Y,Z);
title('WITH MESHGRID')


xlabel('X-values');
ylabel('Y-values');
zlabel('Z-values');

fprintf('====================WITHOUT MESHGRID================(uses the function exp_fun) \n')

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

fprintf('Original z will be printed \n')
z
z = z';
figure;
surf(x,y,z)
title('WITHOUT MESHGRID')
xlabel('x-values');
ylabel('y-values');
zlabel('z-values')

%======================NOTES================================================
%In conclusion  when 