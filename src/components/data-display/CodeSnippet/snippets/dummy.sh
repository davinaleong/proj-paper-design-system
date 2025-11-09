#!/bin/bash
# dummy_script.sh
# Simple bash script for testing

echo "Starting dummy bash script..."

USERS=("alice" "bob" "charlie")
for USER in "${USERS[@]}"; do
  echo "Hello, $USER! This is a dummy Bash test."
done

echo "Script complete."
