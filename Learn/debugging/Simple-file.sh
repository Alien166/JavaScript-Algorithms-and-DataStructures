#!/bin/bash

# Prompt the user for input
read -p "Enter the principal amount: " principal
read -p "Enter the interest rate (in percentage): " rate
read -p "Enter the time period (in years): " time

# Calculate the simple interest
interest=$(( principal * rate * time / 100 ))

# Display the result
echo "The simple interest is: $interest"
