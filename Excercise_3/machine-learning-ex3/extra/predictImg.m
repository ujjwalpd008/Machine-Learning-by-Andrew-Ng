function p = predictImg(Theta1, Theta2, Img)
X = imread(Img);% reads the image .bmp (24 bits) (20x20)

X = double(X);% converts it to double
temp = X;% creates a copy for later use

X = (X.-128)./255;%normalize the features
X = X .* (temp > 0);%return the original 0 values to the X
X = reshape(X, [], numel(X));%converts the 20x20 matrix into a 1x400 vector

displayData(X);%display the image imported

p = predict(Theta1, Theta2, X);% calls the neural network prediction method

end