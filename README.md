# cpnt262-calculator

# Description: This is a simple command-line calculator built using Node.js. It supports basic arithmetic operations: addition (+), subtraction (-), multiplication (\*), and division (/). The calculator takes two operands and an operator as command-line arguments and displays the result.

# To use the calculator, run the following command in the terminal:

node calculator.js < operand1 > < operator > < operand2 >

# example:

node calculator.js 3 + 5
node calculator.js 10 / 2
node calculator.js 4 "\*" 6
node calculator.js 9 - 3

# Note : For multiplication (_), use quotes ("_" or '\*') or a backslash (\*) to prevent the terminal from interpreting it as a wildcard.

# challanges : After finishing the code, the challenge was figuring out why the _ operator wasn't working in the terminal. It turned out that in shells like zsh and bash, _ is interpreted as a wildcard for file matching. To fix this, the operator needs to be enclosed in quotes ("_" or '_') or escaped with a backslash (\*). This was a valuable learning experience about how shell behavior can affect command-line applications.
