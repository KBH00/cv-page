import numpy as np

# # Example matrices for training and testing data
# # Let's assume we have 2 training examples and 2 test examples, each of size 4x4x3

# # Generating synthetic training data
# train_set_x_orig = np.array([
#     [[[  0,  1,  2], [  3,  4,  5], [  6,  7,  8], [  9, 10, 11]],
#      [[ 12, 13, 14], [ 15, 16, 17], [ 18, 19, 20], [ 21, 22, 23]],
#      [[ 24, 25, 26], [ 27, 28, 29], [ 30, 31, 32], [ 33, 34, 35]],
#      [[ 36, 37, 38], [ 39, 40, 41], [ 42, 43, 44], [ 45, 46, 47]]],
    
#     [[[ 48, 49, 50], [ 51, 52, 53], [ 54, 55, 56], [ 57, 58, 59]],
#      [[ 60, 61, 62], [ 63, 64, 65], [ 66, 67, 68], [ 69, 70, 71]],
#      [[ 72, 73, 74], [ 75, 76, 77], [ 78, 79, 80], [ 81, 82, 83]],
#      [[ 84, 85, 86], [ 87, 88, 89], [ 90, 91, 92], [ 93, 94, 95]],
#      [[ 48, 49, 50], [ 51, 52, 53], [ 54, 55, 56], [ 57, 58, 59]],
#      [[ 60, 61, 62], [ 63, 64, 65], [ 66, 67, 68], [ 69, 70, 71]],
#      [[ 72, 73, 74], [ 75, 76, 77], [ 78, 79, 80], [ 81, 82, 83]],
#      [[ 84, 85, 86], [ 87, 88, 89], [ 90, 91, 92], [ 93, 94, 95]]]
# ])

# train_set_y = np.array([[1, 0]])  # Example labels for training data

# # Generating synthetic test data
# test_set_x_orig = np.array([
#     [[[ 96,  97,  98], [ 99, 100, 101], [102, 103, 104], [105, 106, 107]],
#      [[108, 109, 110], [111, 112, 113], [114, 115, 116], [117, 118, 119]],
#      [[120, 121, 122], [123, 124, 125], [126, 127, 128], [129, 130, 131]],
#      [[132, 133, 134], [135, 136, 137], [138, 139, 140], [141, 142, 143]]],
    
#     [[[144, 145, 146], [147, 148, 149], [150, 151, 152], [153, 154, 155]],
#      [[156, 157, 158], [159, 160, 161], [162, 163, 164], [165, 166, 167]],
#      [[168, 169, 170], [171, 172, 173], [174, 175, 176], [177, 178, 179]],
#      [[180, 181, 182], [183, 184, 185], [186, 187, 188], [189, 190, 191]]]
# ])

# test_set_y = np.array([[1, 1]])  # Example labels for test data

# # Reshape the training and test examples
# train_set_x_flatten = train_set_x_orig.reshape(train_set_x_orig.shape[0], -1).T
# test_set_x_flatten = test_set_x_orig.reshape(test_set_x_orig.shape[0], -1).T

# print("train_set_x_flatten shape: " + str(train_set_x_flatten.shape))
# print("train_set_y shape: " + str(train_set_y.shape))
# print("test_set_x_flatten shape: " + str(test_set_x_flatten.shape))
# print("test_set_y shape: " + str(test_set_y.shape))

# # Check that the first 10 pixels of the second image are in the correct place
# expected_train_flatten_0_10 = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]
# expected_test_flatten_0_10 = [144, 145, 146, 147, 148, 149, 150, 151, 152, 153]

# assert np.alltrue(train_set_x_flatten[0:10, 1] == expected_train_flatten_0_10), "Wrong solution. Use (X.shape[0], -1).T."
# assert np.alltrue(test_set_x_flatten[0:10, 1] == expected_test_flatten_0_10), "Wrong solution. Use (X.shape[0], -1).T."

# print("First 10 pixels of the second training image: ", train_set_x_flatten[0:10, 1])
# print("First 10 pixels of the second test image: ", test_set_x_flatten[0:10, 1])

# GRADED FUNCTION: backward_propagation

def backward_propagation(parameters, cache, X, Y):
    """
    Implement the backward propagation using the instructions above.
    
    Arguments:
    parameters -- python dictionary containing our parameters 
    cache -- a dictionary containing "Z1", "A1", "Z2" and "A2".
    X -- input data of shape (2, number of examples)
    Y -- "true" labels vector of shape (1, number of examples)
    
    Returns:
    grads -- python dictionary containing your gradients with respect to different parameters
    """
    m = X.shape[1]
    
    # First, retrieve W1 and W2 from the dictionary "parameters".
    #(≈ 2 lines of code)
    W1 = parameters['W1']
    W2 = parameters['W2']
    # YOUR CODE ENDS HERE
        
    # Retrieve also A1 and A2 from dictionary "cache".
    #(≈ 2 lines of code)
    # A1 = ...
    # A2 = ...
    # YOUR CODE STARTS HERE
    A1 = cache["A1"]
    A2 = cache["A2"]
    # YOUR CODE ENDS HERE
    
    # Backward propagation: calculate dW1, db1, dW2, db2. 
    dZ2 = A2 - Y
    dW2 = np.dot(dZ2, A1.T)/m
    db2 = np.sum(dZ2, axis=1, keepdims=True)/m
    dZ1 = np.dot(W2.T, dZ2) * (1-np.power(A1, 2))
    dW1 = np.dot(dZ1, X.T)/m
    db1 = np.sum(dZ1, axis=1, keepdims=True)/m
    # YOUR CODE ENDS HERE
    
    grads = {"dW1": dW1,
             "db1": db1,
             "dW2": dW2,
             "db2": db2}
    
    return grads


A = np.random.randn(4,3)

B = np.sum(A, axis = 1, keepdims = True)
print(B)