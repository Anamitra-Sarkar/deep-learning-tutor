export const tutorData = [
  {
    "id": "intro",
    "title": "1. Introduction to Deep Learning",
    "easyConcept": "Deep Learning is a subset of Machine Learning inspired by the human brain. Instead of explicitly programming rules, we feed the computer lots of data, and it learns the rules itself using layers of 'artificial neurons'. It's the engine behind ChatGPT, self-driving cars, and facial recognition!",
    "visualGuide": "Check out the Neural Network visualizer to see how simple neurons connect to form a deep network.",
    "hasVisualizer": "neural_net",
    "examQuestions": [
      {
        "q": "What is deep learning? What is the fundamental of machine learning?",
        "a": "**Answer:**\\n**Machine Learning Fundamental:** The ability of an algorithm to learn patterns from data and improve its performance on a specific task without being explicitly programmed.\\n**Deep Learning:** A specialized subset of ML that uses deep Artificial Neural Networks (networks with multiple hidden layers) to automatically discover complex, hierarchical representations from raw data (like pixels or text)."
      },
      {
        "q": "What is meant by artificial neural network?",
        "a": "**Answer:** An Artificial Neural Network (ANN) is a computational model inspired by biological neural networks. It consists of interconnected nodes (artificial neurons) arranged in layers, which process information by adjusting their connection weights based on input data to minimize prediction error."
      },
      {
        "q": "What is the difference between a neuron and a perceptron?",
        "a": "**Answer:** A **biological neuron** is a physical cell in the brain. A **perceptron** is the simplest mathematical model of an artificial neuron; it takes multiple inputs, multiplies them by weights, sums them up, adds a bias, and passes the result through a step-activation function to make a binary decision."
      },
      {
        "q": "What is a tensor in deep learning?",
        "a": "**Answer:** A tensor is a mathematical object that generalizes scalars, vectors, and matrices to higher dimensions. It is the fundamental data structure in deep learning (e.g., a 0D tensor is a scalar, a 1D tensor is a vector, a 2D tensor is a matrix, and a 3D tensor can represent an RGB image)."
      },
      {
        "q": "What are the deep learning frameworks or tools?",
        "a": "**Answer:** Popular frameworks include **TensorFlow** (developed by Google), **PyTorch** (developed by Meta/Facebook), **Keras** (a high-level API usually running on TensorFlow), and **JAX**."
      },
      {
        "q": "Briefly describe the concept of transfer learning in deep neural networks.",
        "a": "**Answer:** Transfer Learning is a technique where a model developed for one task (e.g., recognizing 1000 object categories in ImageNet) is reused as the starting point for a model on a second, related task (e.g., recognizing specific types of dogs). It drastically reduces the required training time and data."
      },
      {
        "q": "Define early stopping. What is weight decay?",
        "a": "**Answer:**\\n**Early Stopping:** A regularization technique where training is halted as soon as the model's performance on a validation dataset starts to degrade, preventing overfitting.\\n**Weight Decay:** Another term for L2 Regularization. It continually decays the weights by a small factor during training to penalize large weights and keep the model simple."
      },
      {
        "q": "What is fuzzy logic?",
        "a": "**Answer:** Unlike classical Boolean logic which requires variables to be strictly True (1) or False (0), Fuzzy Logic allows for degrees of truth (e.g., a value between 0 and 1). It is useful in expert systems for dealing with imprecise or vague information."
      },
      {
        "q": "Which one is better Lasso or ridge? Give reason.",
        "a": "**Answer:** Neither is universally 'better'; it depends on the problem.\\n**Lasso (L1)** is better when you want *feature selection* because it drives unimportant weights to exactly zero, resulting in a simpler, sparse model.\\n**Ridge (L2)** is better when all features are somewhat relevant and you just want to prevent any single feature from dominating, as it shrinks weights evenly but rarely to zero."
      },
      {
        "q": "What does high entropy mean for classification?",
        "a": "**Answer:** In information theory and classification, high entropy means high uncertainty or impurity. If a classification model predicts high entropy, it means it is very unsure about which class the input belongs to (the probabilities are evenly distributed across classes)."
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "q": "Which parameter is most critical here?",
        "options": [
          "Learning Rate",
          "Batch Size",
          "Epochs",
          "Depends on the architecture"
        ],
        "answer": 3,
        "explanation": "Architecture dictates hyperparameters."
      },
      {
        "type": "long",
        "q": "What is fuzzy logic?"
      },
      {
        "type": "long",
        "q": "What is the difference between a neuron and a perceptron?"
      },
      {
        "type": "long",
        "q": "What is deep learning? What is the fundamental of machine learning?"
      },
      {
        "type": "mcq",
        "q": "What does Early Stopping prevent?",
        "options": [
          "Underfitting",
          "Overfitting",
          "Fast Training",
          "High Learning Rate"
        ],
        "answer": 1,
        "explanation": "Early stopping halts training before the model memorizes the training data (overfits)."
      },
      {
        "type": "mcq",
        "q": "What is a 2D tensor commonly known as?",
        "options": [
          "Scalar",
          "Vector",
          "Matrix",
          "Cube"
        ],
        "answer": 2,
        "explanation": "A 1D tensor is a vector, and a 2D tensor is a matrix."
      },
      {
        "type": "long",
        "q": "Briefly describe the concept of transfer learning in deep neural networks."
      },
      {
        "type": "mcq",
        "q": "Which framework is primarily developed by Google?",
        "options": [
          "PyTorch",
          "TensorFlow",
          "Theano",
          "Caffe"
        ],
        "answer": 1,
        "explanation": "TensorFlow was developed by the Google Brain team."
      },
      {
        "type": "mcq",
        "q": "Is this approach robust to overfitting?",
        "options": [
          "Yes, always",
          "No, never",
          "Yes, with proper regularization",
          "Only with small data"
        ],
        "answer": 2,
        "explanation": "Regularization is key."
      },
      {
        "type": "long",
        "q": "Explain the concept of Transfer Learning and why it is useful."
      }
    ]
  },
  {
    "id": "ffnn",
    "title": "2. Feed Forward Neural Networks",
    "easyConcept": "Feed Forward Networks (FFNN or MLP) are the simplest neural nets. Data moves strictly in one direction: from Input, through Hidden layers, to Output. Activation functions act like 'gates' that decide if a neuron should fire or stay quiet, allowing the network to solve complex, non-linear problems like recognizing faces instead of just drawing straight lines.",
    "visualGuide": "Interact with the McCulloch-Pitts Neuron Visualizer to understand how weights, biases, and thresholds create an output.",
    "hasVisualizer": "neuron",
    "examQuestions": [
      {
        "q": "How are feed forward networks trained?",
        "a": "**Answer:** They are trained using Supervised Learning via the Backpropagation algorithm. The network makes a prediction (Forward Pass), calculates the error using a loss function, and then updates its weights (Backward Pass) using an optimizer like Gradient Descent."
      },
      {
        "q": "Explain the architecture of a multi-layer perceptron (MLP) with a neat diagram.",
        "a": "**Answer:** An MLP consists of:\\n1. **Input Layer:** Receives the feature vector.\\n2. **Hidden Layer(s):** Dense interconnected layers where each neuron applies a linear transformation ($W \\cdot x + b$) followed by a non-linear activation function.\\n3. **Output Layer:** Produces the final prediction (e.g., using Softmax for classification).\\n*(Diagram: Imagine three columns of nodes, with lines connecting every node in one column to every node in the next.)*"
      },
      {
        "q": "Why do neural networks need an activation function? Explain the different type of activation functions. How to choose the right activation function?",
        "a": "**Answer:** Activation functions introduce **non-linearity**. Without them, a deep neural network would mathematically collapse into a single linear regression model, incapable of solving complex tasks.\\n**Types:**\\n1. **Sigmoid:** Maps input to [0,1]. Used in binary classification output. (Prone to vanishing gradient).\\n2. **Tanh:** Maps input to [-1,1]. Zero-centered.\\n3. **ReLU (Rectified Linear Unit):** Maps negative inputs to 0, and keeps positive inputs as is ($max(0,x)$). Fast and prevents vanishing gradients.\\n**Choosing:** Use ReLU for hidden layers. Use Sigmoid for binary output, and Softmax for multi-class output."
      },
      {
        "q": "What is the equation for the Sigmoid activation function? What is the range of tanh activation function?",
        "a": "**Answer:**\\n- **Sigmoid Equation:** $\\sigma(x) = \\frac{1}{1 + e^{-x}}$\\n- **Tanh Range:** The range is **[-1, 1]**."
      },
      {
        "q": "Explain the problem of 'Dying ReLU' and how Leaky ReLU addresses it.",
        "a": "**Answer:** **Dying ReLU:** Because standard ReLU outputs exactly $0$ for all negative inputs, neurons can become 'dead' if their weights update in a way that always produces negative inputs. They stop passing gradients, permanently halting learning.\\n**Leaky ReLU:** Fixes this by having a small, non-zero slope for negative values (e.g., $f(x) = 0.01x$ for $x<0$), ensuring a tiny gradient always flows backward."
      },
      {
        "q": "Why ReLU activation function leads to sparse activation maps?",
        "a": "**Answer:** ReLU outputs exactly zero for any negative input. In a typical neural network, roughly half the pre-activation values might be negative. Thus, ReLU strictly turns off ~50% of the neurons at any given time, creating a 'sparse' representation (many zeros), which is computationally efficient."
      },
      {
        "q": "Say we have a neural network with 3 input neurons, 2 hidden layers each having 8 neurons, and 3 neurons at the output layer. Find the total number of biases. Find the total number of weights.",
        "a": "**Answer:**\\n- **Weights:** (Input to H1) $3 \\times 8 = 24$. (H1 to H2) $8 \\times 8 = 64$. (H2 to Output) $8 \\times 3 = 24$. Total = $24 + 64 + 24 = 112$.\\n- **Biases:** One for each neuron in the hidden and output layers. $8 (H1) + 8 (H2) + 3 (Out) = 19$.\\n- **Total Parameters:** $112 + 19 = 131$."
      },
      {
        "q": "Which loss and activation function for the output layer is best suited if the outputs are given as {1,2,3\u2026} in this form?",
        "a": "**Answer:** Since {1,2,3...} implies discrete categorical classes (Multi-class classification), the best suited output activation function is **Softmax** and the required loss function is **Categorical Cross-Entropy**."
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "q": "What is the main purpose of an activation function?",
        "options": [
          "To initialize weights",
          "To introduce non-linearity",
          "To prevent overfitting",
          "To speed up the CPU"
        ],
        "answer": 1,
        "explanation": "Activation functions allow neural networks to learn non-linear decision boundaries."
      },
      {
        "type": "long",
        "q": "Explain the Dying ReLU problem and one way to fix it."
      },
      {
        "type": "mcq",
        "q": "Is this approach robust to overfitting?",
        "options": [
          "Yes, always",
          "No, never",
          "Yes, with proper regularization",
          "Only with small data"
        ],
        "answer": 2,
        "explanation": "Regularization is key."
      },
      {
        "type": "long",
        "q": "Explain the architecture of a multi-layer perceptron (MLP) with a neat diagram."
      },
      {
        "type": "mcq",
        "q": "Which parameter is most critical here?",
        "options": [
          "Learning Rate",
          "Batch Size",
          "Epochs",
          "Depends on the architecture"
        ],
        "answer": 3,
        "explanation": "Architecture dictates hyperparameters."
      },
      {
        "type": "mcq",
        "q": "Which activation function is most prone to the Vanishing Gradient problem?",
        "options": [
          "ReLU",
          "Leaky ReLU",
          "Sigmoid",
          "Maxout"
        ],
        "answer": 2,
        "explanation": "Sigmoid compresses large inputs into a very small range, causing gradients to become infinitesimally small."
      },
      {
        "type": "long",
        "q": "How are feed forward networks trained?"
      },
      {
        "type": "mcq",
        "q": "For a binary classification problem, which output activation is best?",
        "options": [
          "ReLU",
          "Softmax",
          "Sigmoid",
          "Linear"
        ],
        "answer": 2,
        "explanation": "Sigmoid outputs a value between 0 and 1, perfectly mapping to a binary probability."
      },
      {
        "type": "long",
        "q": "Which loss and activation function for the output layer is best suited if the outputs are given as {1,2,3\u2026} in this form?"
      },
      {
        "type": "long",
        "q": "Say we have a neural network with 3 input neurons, 2 hidden layers each having 8 neurons, and 3 neurons at the output layer. Find the total number of biases. Find the total number of weights."
      }
    ]
  },
  {
    "id": "training_optimization",
    "title": "3. Training & Optimization",
    "easyConcept": "Training a neural network is like climbing down a mountain blindfolded to find the lowest valley (minimum error). The Loss Function tells you your current altitude. Gradient Descent tells you which way is downhill. The Learning Rate is how big of a step you take. Backpropagation calculates the slope for every parameter so everyone knows how to move!",
    "visualGuide": "Use the Gradient Descent Simulator to see how learning rate affects the 'steps' down the error curve.",
    "hasVisualizer": "gradient",
    "examQuestions": [
      {
        "q": "What is Gradient Descent? Explain Stochastic Gradient Descent (SGD) and Mini-batch Gradient Descent.",
        "a": "**Answer:**\\n**Gradient Descent (GD):** An optimization algorithm used to minimize the loss function by iteratively updating weights in the opposite direction of the gradient.\\n**SGD:** Updates weights after evaluating a *single* training example. Very noisy but fast.\\n**Mini-batch GD:** A compromise between Full Batch GD and SGD. It updates weights after evaluating a small batch (e.g., 32 or 64) of examples, offering stability and computational efficiency."
      },
      {
        "q": "What is back propagation in deep learning? What are the steps in the back propagation learning algorithm?",
        "a": "**Answer:** Backpropagation computes the gradient of the loss function with respect to every weight in the network by applying the chain rule of calculus backward from the output layer to the input layer.\\n**Steps:**\\n1. **Forward Pass:** Compute network predictions and calculate the loss.\\n2. **Compute Gradients:** Calculate the error derivative at the output layer.\\n3. **Backward Pass:** Propagate the error backward to compute gradients for all hidden layers.\\n4. **Weight Update:** Adjust the weights using an optimization algorithm (like Gradient Descent)."
      },
      {
        "q": "What is a learning rate? How is the learning rate important in training deep neural networks? Explain learning rate scheduling.",
        "a": "**Answer:** **Learning Rate ($\\alpha$):** A hyperparameter that controls the step size at each iteration while moving toward a minimum of a loss function.\\n**Importance:** If too large, the model might overshoot the minimum and fail to converge. If too small, training will be painfully slow and might get stuck in local minima.\\n**Scheduling:** Dynamically reducing the learning rate during training (e.g., Step Decay or Exponential Decay) helps the model converge smoothly as it gets closer to the minimum."
      },
      {
        "q": "What is the difference between epoch and batch size?",
        "a": "**Answer:**\\n**Epoch:** One complete forward and backward pass of the *entire* training dataset through the neural network.\\n**Batch Size:** The number of training examples utilized in one iteration to compute the gradients and update the weights."
      },
      {
        "q": "Name two common loss functions used in Deep Learning.",
        "a": "**Answer:** 1. **Mean Squared Error (MSE):** Used for Regression tasks. 2. **Cross-Entropy Loss (Binary/Categorical):** Used for Classification tasks."
      },
      {
        "q": "Explain various regularization techniques used in Deep Learning: L1, L2, and Dropout. Explain in which case you would use L1 regularization over L2 regularization.",
        "a": "**Answer:** Regularization prevents overfitting (where the model memorizes training data but fails on new data).\\n**L1 (Lasso):** Adds the absolute value of weights to the loss. It drives less important weights exactly to zero, creating **sparse** models. Use it for feature selection.\\n**L2 (Ridge):** Adds the squared value of weights. It penalizes large weights, spreading the impact across all features.\\n**Dropout:** Randomly ignores a percentage of neurons during each training step, forcing the network to learn robust, redundant representations."
      },
      {
        "q": "What is Batch Normalization? Explain the mathematical operations involved during the forward pass.",
        "a": "**Answer:** Batch Normalization standardizes the inputs to a layer for each mini-batch. It accelerates training, allows higher learning rates, and reduces sensitivity to network initialization.\\n**Operations:**\\n1. Compute the batch mean $\\mu$.\\n2. Compute the batch variance $\\sigma^2$.\\n3. Normalize the input: $\\hat{x}_i = \\frac{x_i - \\mu}{\\sqrt{\\sigma^2 + \\epsilon}}$.\\n4. Scale and shift: $y_i = \\gamma \\hat{x}_i + \\beta$, where $\\gamma$ and $\\beta$ are learnable parameters."
      },
      {
        "q": "Discuss different optimization algorithms: Momentum, RMSprop, and Adam. Compare their update rules and explain the advantages of Adam.",
        "a": "**Answer:**\\n**Momentum:** Adds a fraction of the previous update to the current one, helping to accelerate GD in the relevant direction and dampening oscillations.\\n**RMSprop:** Divides the learning rate by an exponentially decaying average of squared gradients. It adapts the learning rate for each parameter.\\n**Adam (Adaptive Moment Estimation):** Combines both Momentum (first moment) and RMSprop (second moment). It computes adaptive learning rates for each parameter.\\n**Advantage:** Adam is highly robust, works well out-of-the-box, and requires little tuning of the initial learning rate."
      },
      {
        "q": "Why is empirical risk minimization prone to overfitting? What is underfitting?",
        "a": "**Answer:** **Overfitting:** Empirical risk minimization just minimizes error on the *training set*. Without regularization, a highly complex model will perfectly memorize the training noise, failing to generalize.\\n**Underfitting:** When the model is too simple (or training is too short) and it fails to capture the underlying pattern of the data, resulting in high error on both training and test sets."
      },
      {
        "q": "We cannot use mean squared error loss function in binary classification problem for ANN. True or False?",
        "a": "**Answer:** **True** (in practice). While mathematically possible, MSE with a sigmoid activation function creates a non-convex loss surface with many local minima, leading to slow or stalled learning. Binary Cross-Entropy is the standard."
      },
      {
        "q": "Mini batch gradient descent is advantageous comparing to full-batch gradient descent. True or false?",
        "a": "**Answer:** **True.** It offers a balance: it's computationally faster per step than full-batch (which requires the entire dataset in memory) and has more stable gradients than pure Stochastic Gradient Descent (batch size 1)."
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "q": "Which parameter is most critical here?",
        "options": [
          "Learning Rate",
          "Batch Size",
          "Epochs",
          "Depends on the architecture"
        ],
        "answer": 3,
        "explanation": "Architecture dictates hyperparameters."
      },
      {
        "type": "long",
        "q": "Why is empirical risk minimization prone to overfitting? What is underfitting?"
      },
      {
        "type": "mcq",
        "q": "What is an Epoch?",
        "options": [
          "One forward pass of one batch",
          "One full pass of the entire dataset",
          "The time taken to train the network",
          "A type of activation function"
        ],
        "answer": 1,
        "explanation": "An epoch represents one complete cycle through the full training dataset."
      },
      {
        "type": "mcq",
        "q": "What happens if your learning rate is too large?",
        "options": [
          "Faster convergence",
          "Overshooting the minimum",
          "Underfitting",
          "The gradients vanish"
        ],
        "answer": 1,
        "explanation": "A very high learning rate will cause the weights to bounce back and forth across the valley, failing to converge."
      },
      {
        "type": "long",
        "q": "Explain the difference between L1 and L2 Regularization."
      },
      {
        "type": "long",
        "q": "What is a learning rate? How is the learning rate important in training deep neural networks? Explain learning rate scheduling."
      },
      {
        "type": "long",
        "q": "Discuss different optimization algorithms: Momentum, RMSprop, and Adam. Compare their update rules and explain the advantages of Adam."
      },
      {
        "type": "long",
        "q": "What is Batch Normalization? Explain the mathematical operations involved during the forward pass."
      },
      {
        "type": "mcq",
        "q": "Is this approach robust to overfitting?",
        "options": [
          "Yes, always",
          "No, never",
          "Yes, with proper regularization",
          "Only with small data"
        ],
        "answer": 2,
        "explanation": "Regularization is key."
      },
      {
        "type": "mcq",
        "q": "Which optimization algorithm combines both Momentum and RMSprop?",
        "options": [
          "Adagrad",
          "SGD",
          "Adam",
          "Nesterov"
        ],
        "answer": 2,
        "explanation": "Adam (Adaptive Moment Estimation) combines the first and second moments of gradients."
      }
    ]
  },
  {
    "id": "cnn",
    "title": "4. Convolutional Neural Networks (CNN)",
    "easyConcept": "CNNs are like human eyes for computers! They scan over an image using small filters (kernels) to detect edges, shapes, and patterns, eventually recognizing complex objects. They shrink the image (Pooling) to focus only on the most important parts.",
    "visualGuide": "Look at the interactive Visualizer to see how different layers (Conv, Pooling) process data.",
    "hasVisualizer": "ffnn",
    "examQuestions": [
      {
        "q": "What is the purpose of the pooling layer in a CNN?",
        "a": "**Answer:** The pooling layer reduces the spatial dimensions (width and height) of the input volume. This decreases computational complexity, extracts dominant features (making them translation-invariant), and helps prevent overfitting."
      },
      {
        "q": "What is Pooling? What is Max Pooling? What is Average pooling? Show two examples",
        "a": "**Answer:**\\n**Pooling:** A downsampling operation.\\n**Max Pooling:** Selects the maximum value from the region covered by the filter. (e.g., from a 2x2 patch [1,3; 2,4], max is 4).\\n**Average Pooling:** Calculates the average of the values in the region. (e.g., from [1,3; 2,4], average is 2.5)."
      },
      {
        "q": "Discuss the role of padding and stride in convolutional neural networks.",
        "a": "**Answer:**\\n**Padding:** Adding extra border pixels (usually zeros) to the input image so the filter can process edge pixels, preserving spatial dimensions.\\n**Stride:** The number of pixels the filter shifts over the input matrix. A higher stride leads to a smaller output size."
      },
      {
        "q": "Describe the detailed architecture of a Convolutional Neural Network (CNN) for image classification.",
        "a": "**Answer:** A standard CNN consists of:\\n1. **Input Layer:** Raw image pixels (e.g., 224x224x3).\\n2. **Convolutional Layers:** Apply filters to extract feature maps. Use ReLU activation.\\n3. **Pooling Layers:** Reduce spatial size (e.g., Max Pooling).\\n4. **Fully Connected (Dense) Layers:** Flatten the output and map features to specific classes.\\n5. **Output Layer:** Softmax activation for class probabilities."
      },
      {
        "q": "Define a 'kernel' in the context of CNNs.",
        "a": "**Answer:** A kernel (or filter) is a small matrix of weights that slides across the input data (image) to perform the convolution operation. It detects specific features like edges, textures, or shapes."
      },
      {
        "q": "What is the dimension of the output if a 3x3 filter is applied to a 5x5 input image without padding?",
        "a": "**Answer:** The formula is (N - F) / Stride + 1. Here N=5, F=3, Stride=1 (default). \\nOutput Dimension = (5 - 3) / 1 + 1 = 3. So the output is a **3x3** matrix."
      },
      {
        "q": "Design a CNN architecture for classifying handwritten digits (like MNIST). Clearly mention the number of layers, types of layers, filter sizes, and activation functions used at each step.",
        "a": "**Answer:** **LeNet-5 style architecture:**\\n- **Input:** 28x28x1 Grayscale Image\\n- **Layer 1:** Conv2D (32 filters, 3x3), Activation: ReLU\\n- **Layer 2:** MaxPooling (2x2 filter, stride 2)\\n- **Layer 3:** Conv2D (64 filters, 3x3), Activation: ReLU\\n- **Layer 4:** MaxPooling (2x2 filter, stride 2)\\n- **Layer 5:** Flatten into 1D vector\\n- **Layer 6:** Dense (Fully Connected) with 128 neurons, Activation: ReLU\\n- **Output Layer:** Dense with 10 neurons, Activation: Softmax."
      },
      {
        "q": "Define 'receptive field' in the context of CNN.",
        "a": "**Answer:** The receptive field is the specific localized region of the input image that a particular CNN feature (or neuron) is 'looking at' or influenced by. As you go deeper in the network, the receptive field increases."
      },
      {
        "q": "Mention one difference between RNN and CNN.",
        "a": "**Answer:** CNNs are primarily designed for spatial data (like images) using grid-like topology, whereas RNNs are designed for sequential data (like time-series or text) by maintaining an internal state (memory)."
      },
      {
        "q": "Name a pre-trained model used for ImageNet classification.",
        "a": "**Answer:** Common pre-trained models include ResNet-50, VGG-16, InceptionV3, and MobileNet."
      },
      {
        "q": "What is YOLO in computer vision?",
        "a": "**Answer:** YOLO (You Only Look Once) is an extremely fast real-time object detection algorithm. It frames object detection as a single regression problem, straight from image pixels to bounding box coordinates and class probabilities."
      },
      {
        "q": "Mention the application of a 1D Convolutional Neural Network.",
        "a": "**Answer:** 1D CNNs are used for processing sequential data such as time-series forecasting, audio signal processing, and certain Natural Language Processing (NLP) text classification tasks."
      },
      {
        "q": "Discuss the use of Deep Learning in Medical Image Analysis. Explain how you would design a system to detect plant diseases from images using a CNN.",
        "a": "**Answer:** **Medical Image Analysis:** Deep learning (CNNs) is used for detecting tumors in MRIs, analyzing X-rays, and diagnosing diseases (e.g., Diabetic Retinopathy).\\n**Plant Disease CNN Design:**\\n1. **Data Collection:** Gather a labeled dataset of healthy and diseased plant leaves.\\n2. **Preprocessing:** Resize images, normalize pixel values, and apply Data Augmentation.\\n3. **Architecture:** Use a pre-trained model (like ResNet) via Transfer Learning or build a custom CNN with Conv2D -> ReLU -> MaxPool layers.\\n4. **Classification:** Add Fully Connected layers ending with Softmax to predict the specific disease class."
      },
      {
        "q": "Stride and number of filters are treated as hyperparameters True or False?",
        "a": "**Answer:** **True.** They are set before the training process begins and control the architecture and capacity of the network."
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "q": "Is this approach robust to overfitting?",
        "options": [
          "Yes, always",
          "No, never",
          "Yes, with proper regularization",
          "Only with small data"
        ],
        "answer": 2,
        "explanation": "Regularization is key."
      },
      {
        "type": "long",
        "q": "Stride and number of filters are treated as hyperparameters True or False?"
      },
      {
        "type": "mcq",
        "q": "What is the output dimension if a 3x3 filter is applied to a 5x5 image without padding (stride=1)?",
        "options": [
          "5x5",
          "4x4",
          "3x3",
          "2x2"
        ],
        "answer": 2,
        "explanation": "Formula: (5 - 3) / 1 + 1 = 3. So, 3x3."
      },
      {
        "type": "long",
        "q": "Mention one difference between RNN and CNN."
      },
      {
        "type": "long",
        "q": "What is the dimension of the output if a 3x3 filter is applied to a 5x5 input image without padding?"
      },
      {
        "type": "mcq",
        "q": "Which parameter is most critical here?",
        "options": [
          "Learning Rate",
          "Batch Size",
          "Epochs",
          "Depends on the architecture"
        ],
        "answer": 3,
        "explanation": "Architecture dictates hyperparameters."
      },
      {
        "type": "mcq",
        "q": "Which of these is NOT a CNN architecture?",
        "options": [
          "ResNet",
          "VGG-16",
          "LSTM",
          "YOLO"
        ],
        "answer": 2,
        "explanation": "LSTM is a type of Recurrent Neural Network, not a CNN."
      },
      {
        "type": "long",
        "q": "Discuss the role of padding and stride in convolutional neural networks."
      },
      {
        "type": "long",
        "q": "Explain the difference between Max Pooling and Average Pooling."
      },
      {
        "type": "mcq",
        "q": "What does a pooling layer primarily do?",
        "options": [
          "Increases image size",
          "Reduces spatial dimensions",
          "Adds color channels",
          "Normalizes weights"
        ],
        "answer": 1,
        "explanation": "Pooling layers downsample the image, reducing its height and width."
      }
    ]
  },
  {
    "id": "rnn_sequence",
    "title": "5. Sequence Models (RNN, LSTM, CRF)",
    "easyConcept": "Sequence models are built for data that depends on time or order (like sentences or stock prices). Imagine reading a book; you understand the current word based on the previous words. RNNs do exactly that by keeping a 'memory' of past inputs!",
    "visualGuide": "Explore how information cycles back into the network to create 'memory'.",
    "hasVisualizer": "crf",
    "examQuestions": [
      {
        "q": "Define the vanishing gradient problem. What is vanishing gradient? Which activation function(s) lead(s) to the same? Explain with example.",
        "a": "**Answer:** The vanishing gradient problem occurs during Backpropagation Through Time (BPTT) in deep networks or RNNs, where gradients of the loss function approach zero as they propagate backward. This stops the early layers from learning. **Activation functions:** Sigmoid and Tanh often cause this because their derivatives are small (max 0.25 for sigmoid) and multiplying many small fractions yields near-zero values."
      },
      {
        "q": "How you can manage the vanishing gradient problem in deep network? Suggest one network which can help you to prevent the same.",
        "a": "**Answer:** We can manage it by using ReLU activation functions, careful weight initialization (like He initialization), or skip-connections. For sequence models, the best network to prevent this is the **Long Short-Term Memory (LSTM)** network or **Gated Recurrent Unit (GRU)**."
      },
      {
        "q": "What is the use of a forget gate in LSTM?",
        "a": "**Answer:** The forget gate in an LSTM cell decides which information from the previous cell state should be discarded (forgotten) and which should be kept. It uses a sigmoid function to output values between 0 (completely forget) and 1 (completely keep)."
      },
      {
        "q": "What are Recurrent Neural Networks (RNN)? Why are they used for sequence data?",
        "a": "**Answer:** RNNs are neural networks with loops in their architecture, allowing information to persist. They are used for sequence data because they process inputs sequentially, maintaining a 'hidden state' (memory) that captures context from previous timesteps."
      },
      {
        "q": "What is the Vanishing Gradient Problem? How does Long Short-Term Memory (LSTM) solve this problem? Explain the architecture of an LSTM cell with the help of a block diagram.",
        "a": "**Answer:** **Vanishing Gradient:** Gradients shrink to zero during backpropagation in deep networks/RNNs, halting learning for long-term dependencies.\\n**How LSTM Solves It:** LSTMs introduce a 'Cell State' (a direct conveyor belt of information) and 'Gates' (Forget, Input, Output) that regulate information flow, allowing gradients to flow unchanged.\\n**Architecture:**\\n1. **Forget Gate:** Decides what past info to discard.\\n2. **Input Gate:** Decides what new info to add to the cell state.\\n3. **Cell State Update:** Combines the past state and new input.\\n4. **Output Gate:** Decides what the next hidden state should be."
      },
      {
        "q": "Does RNN have memory cell? Justify.",
        "a": "**Answer:** Standard RNNs do not have a dedicated 'memory cell' like LSTMs; instead, they have a 'hidden state' that gets continuously overwritten at each timestep. LSTMs and GRUs specifically introduce memory cells/paths to preserve long-term context."
      },
      {
        "q": "What is a Gated Recurrent Unit (GRU)? Detail the working mechanism of a GRU cell. How does it compare to an LSTM cell?",
        "a": "**Answer:** A GRU is a simplified version of an LSTM. It combines the forget and input gates into a single 'Update Gate', and merges the cell state and hidden state.\\n**Working:** It has two gates: Reset Gate (determines how much past info to keep) and Update Gate (determines how much new info to add).\\n**Comparison:** GRUs have fewer parameters, train faster, and require less memory than LSTMs, but perform similarly well on many sequence tasks."
      },
      {
        "q": "Discuss the mathematical foundation of Backpropagation through time (BPTT) for training RNNs.",
        "a": "**Answer:** BPTT is an extension of standard backpropagation. Since an RNN can be unrolled over time, BPTT calculates the gradient of the loss function by summing the gradients at each timestep. The chain rule is applied backwards from the final timestep $t$ to $t=0$. This repeated multiplication of weight matrices leads to the vanishing/exploding gradient problems."
      },
      {
        "q": "Name the algorithm used for parameter learning in Hidden Markov Models. Which algorithm is used for likelihood computation in HMM?",
        "a": "**Answer:** \\n- **Parameter Learning:** Baum-Welch Algorithm (an Expectation-Maximization method).\\n- **Likelihood Computation:** Forward-Backward Algorithm."
      },
      {
        "q": "Viterbi Algorithm is used for decoding i.e. to find hidden sequence. True or False?",
        "a": "**Answer:** **True.** The Viterbi algorithm finds the most likely sequence of hidden states that resulted in an observed sequence."
      },
      {
        "q": "Write down the equations for forward propagation in a simple RNN.",
        "a": "**Answer:**\\n1. **Hidden State Update:** $h_t = \\tanh(W_{hh}h_{t-1} + W_{xh}x_t + b_h)$\\n2. **Output:** $y_t = W_{hy}h_t + b_y$\\n(Where $W$ are weight matrices, $x_t$ is input, $h_t$ is hidden state, and $b$ are biases)."
      },
      {
        "q": "Explain Sequence-to-Sequence (Seq2Seq) models. How do they utilize Encoder-Decoder architecture? Discuss the problem with standard Seq2Seq models for long sentences and how the Attention mechanism resolves it.",
        "a": "**Answer:** **Seq2Seq:** Models that map an input sequence to an output sequence (e.g., translation).\\n**Architecture:** An **Encoder** RNN processes the input and compresses it into a single fixed-length context vector. A **Decoder** RNN uses this vector to generate the output sequence.\\n**Problem:** Compressing a long sentence into a single vector causes information bottleneck/loss.\\n**Attention Mechanism:** Attention solves this by allowing the decoder to 'look back' at ALL encoder hidden states at each step, dynamically weighting (paying attention to) the most relevant input words for the current output word."
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "q": "What is the Viterbi Algorithm used for in HMMs?",
        "options": [
          "Parameter Learning",
          "Likelihood Computation",
          "Decoding the hidden sequence",
          "Calculating Loss"
        ],
        "answer": 2,
        "explanation": "Viterbi is used for decoding the most probable hidden state sequence."
      },
      {
        "type": "long",
        "q": "How you can manage the vanishing gradient problem in deep network? Suggest one network which can help you to prevent the same."
      },
      {
        "type": "long",
        "q": "Does RNN have memory cell? Justify."
      },
      {
        "type": "long",
        "q": "Explain how the Attention Mechanism improves standard Seq2Seq models."
      },
      {
        "type": "mcq",
        "q": "Which parameter is most critical here?",
        "options": [
          "Learning Rate",
          "Batch Size",
          "Epochs",
          "Depends on the architecture"
        ],
        "answer": 3,
        "explanation": "Architecture dictates hyperparameters."
      },
      {
        "type": "mcq",
        "q": "Is this approach robust to overfitting?",
        "options": [
          "Yes, always",
          "No, never",
          "Yes, with proper regularization",
          "Only with small data"
        ],
        "answer": 2,
        "explanation": "Regularization is key."
      },
      {
        "type": "long",
        "q": "What is a Gated Recurrent Unit (GRU)? Detail the working mechanism of a GRU cell. How does it compare to an LSTM cell?"
      },
      {
        "type": "mcq",
        "q": "Which gate is NOT part of a standard LSTM cell?",
        "options": [
          "Input Gate",
          "Forget Gate",
          "Update Gate",
          "Output Gate"
        ],
        "answer": 2,
        "explanation": "The Update Gate is used in a GRU, not an LSTM."
      },
      {
        "type": "long",
        "q": "Write down the equations for forward propagation in a simple RNN."
      },
      {
        "type": "mcq",
        "q": "What problem does BPTT commonly suffer from?",
        "options": [
          "High memory usage",
          "Vanishing gradients",
          "Exploding gradients",
          "Both B and C"
        ],
        "answer": 3,
        "explanation": "Repeated multiplication of weights over time steps leads to vanishing or exploding gradients."
      }
    ]
  },
  {
    "id": "advanced_topics",
    "title": "6. Advanced Topics (NLP, Generative Models, Autoencoders)",
    "easyConcept": "Advanced DL looks at two cool things: generating new stuff (like deepfakes or generating text) and understanding human language (NLP). Generative models (GANs, Autoencoders) learn the 'blueprint' of data to create new examples. NLP models (Transformers, Word2Vec) learn the meaning of words to translate, summarize, or chat!",
    "visualGuide": "Explore how Autoencoders compress an image down to a tiny bottleneck and then try to reconstruct it.",
    "hasVisualizer": "arch_compare",
    "examQuestions": [
      {
        "q": "What is the difference between Generative and Discriminative models with examples?",
        "a": "**Answer:**\\n**Discriminative Models:** Learn the boundary between classes. They model the conditional probability $P(Y|X)$. (e.g., Logistic Regression, standard CNNs for image classification. Output: 'Is this a cat or dog?').\\n**Generative Models:** Learn the actual distribution of the data classes. They model the joint probability $P(X,Y)$. (e.g., Naive Bayes, GANs, Variational Autoencoders. Output: 'Draw me a picture of a cat.')."
      },
      {
        "q": "What are Autoencoders? Describe the concept of Denoising Autoencoders. How do Autoencoders work? Draw a simple architecture.",
        "a": "**Answer:** An Autoencoder is an unsupervised neural network that learns to compress data into a lower-dimensional representation (latent space/bottleneck) and then reconstruct the original data from it.\\n**Architecture:** `Input -> Encoder -> Bottleneck (Latent Space) -> Decoder -> Reconstructed Output`.\\n**Denoising Autoencoder:** The model is given a corrupted/noisy version of the input and must learn to reconstruct the clean, original input. This forces the model to learn robust features rather than just memorizing the data."
      },
      {
        "q": "Write short notes on Generative Adversarial Networks (GANs). Explain the mathematical intuition behind the GAN loss function.",
        "a": "**Answer:** A GAN consists of two neural networks playing a zero-sum game: a **Generator** (tries to create fake data that looks real) and a **Discriminator** (tries to distinguish real data from fake data).\\n**Mathematical Intuition:** It's a minimax game. The Discriminator maximizes the probability of assigning correct labels to real/fake images. The Generator minimizes the Discriminator's success rate ($min_G \\max_D V(D,G)$). When trained perfectly, the Generator produces indistinguishable fakes, and the Discriminator's accuracy becomes 50% (random guess)."
      },
      {
        "q": "What is Natural Language Processing (NLP)? What is the purpose of NLP?",
        "a": "**Answer:** NLP is a branch of AI that enables computers to understand, interpret, and generate human language. Its purpose is to bridge the gap between human communication and computer understanding (e.g., machine translation, sentiment analysis, chatbots)."
      },
      {
        "q": "What are the common steps involved in text preprocessing for NLP? Explain stop word removal and stemming. What is tokenisation?",
        "a": "**Answer:**\\n1. **Tokenization:** Splitting text into smaller units (words, subwords, or sentences).\\n2. **Lowercasing:** Converting all text to lowercase for uniformity.\\n3. **Stop Word Removal:** Removing common, low-meaning words (e.g., 'the', 'is', 'in') to reduce noise and computation.\\n4. **Stemming/Lemmatization:** Stemming chops off word endings to get a root (e.g., 'running' -> 'run', but might yield non-words). Lemmatization uses a dictionary to return the proper base word (e.g., 'better' -> 'good')."
      },
      {
        "q": "Describe the Word2Vec model. Explain the CBOW and Skip-gram architectures briefly.",
        "a": "**Answer:** Word2Vec is an algorithm that uses a neural network to learn word embeddings (dense vector representations) from a large corpus of text, capturing semantic meaning.\\n**CBOW (Continuous Bag of Words):** Predicts a target word based on its surrounding context words.\\n**Skip-gram:** Predicts the surrounding context words given a single target word. (Better for infrequent words)."
      },
      {
        "q": "Write a detailed note on Transformer architecture. How does self-attention replace recurrence?",
        "a": "**Answer:** The Transformer architecture dispenses entirely with recurrence (RNNs) and convolutions, relying solely on **Attention Mechanisms**.\\n**Self-Attention:** Instead of processing words sequentially, self-attention computes the relationship (attention scores) between ALL words in a sentence simultaneously. It allows the model to instantly see how 'bank' relates to 'river' vs. 'money' in the same sentence, regardless of distance, solving the long-term dependency problem of RNNs and enabling massive parallelization."
      },
      {
        "q": "What is the significance of the BLEU score?",
        "a": "**Answer:** BLEU (Bilingual Evaluation Understudy) is a standard metric used to evaluate the quality of machine-translated text. It compares n-gram overlaps between the machine's translation and a human reference translation. A score closer to 1 (or 100%) indicates higher quality."
      },
      {
        "q": "Explain the concept of Maximum Likelihood Estimation (MLE) in the context of Deep Learning.",
        "a": "**Answer:** MLE is a probabilistic framework for estimating the parameters of a model. It seeks to find the parameters (weights) that maximize the likelihood of observing the actual training data given the model. In deep learning, minimizing the Cross-Entropy loss is mathematically equivalent to performing Maximum Likelihood Estimation."
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "q": "Is this approach robust to overfitting?",
        "options": [
          "Yes, always",
          "No, never",
          "Yes, with proper regularization",
          "Only with small data"
        ],
        "answer": 2,
        "explanation": "Regularization is key."
      },
      {
        "type": "long",
        "q": "What is the significance of the BLEU score?"
      },
      {
        "type": "mcq",
        "q": "Which parameter is most critical here?",
        "options": [
          "Learning Rate",
          "Batch Size",
          "Epochs",
          "Depends on the architecture"
        ],
        "answer": 3,
        "explanation": "Architecture dictates hyperparameters."
      },
      {
        "type": "mcq",
        "q": "Which model consists of a Generator and a Discriminator?",
        "options": [
          "Autoencoder",
          "Transformer",
          "GAN",
          "Word2Vec"
        ],
        "answer": 2,
        "explanation": "Generative Adversarial Networks (GANs) pit two networks against each other."
      },
      {
        "type": "mcq",
        "q": "What is the purpose of stemming in NLP?",
        "options": [
          "To translate languages",
          "To reduce a word to its root form",
          "To capitalize letters",
          "To count word frequency"
        ],
        "answer": 1,
        "explanation": "Stemming chops off prefixes/suffixes to group related words together."
      },
      {
        "type": "mcq",
        "q": "What does a Discriminative model do?",
        "options": [
          "Generates new images",
          "Learns the boundary between classes",
          "Translates text",
          "Compresses data"
        ],
        "answer": 1,
        "explanation": "Discriminative models draw a decision boundary to classify data."
      },
      {
        "type": "long",
        "q": "Describe the Word2Vec model. Explain the CBOW and Skip-gram architectures briefly."
      },
      {
        "type": "long",
        "q": "Explain how the Self-Attention mechanism in Transformers works."
      },
      {
        "type": "long",
        "q": "What is the difference between Generative and Discriminative models with examples?"
      },
      {
        "type": "long",
        "q": "Write short notes on Generative Adversarial Networks (GANs). Explain the mathematical intuition behind the GAN loss function."
      }
    ]
  }
];