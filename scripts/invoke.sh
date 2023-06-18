#!/bin/bash

FUNCTION_NAME=$1
PAYLOAD=$2
OUT_FILE='out.txt'

echo "FUNCTION_NAME: $FUNCTION_NAME"
echo "PAYLOAD: $PAYLOAD"
echo ''

aws lambda invoke \
  --function-name $FUNCTION_NAME \
  --cli-binary-format raw-in-base64-out \
  --payload $PAYLOAD \
  --log-type Tail $OUT_FILE \
  --query 'LogResult' \
  --output text \
  | base64 -d

rm -f $OUT_FILE
