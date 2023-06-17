#!/bin/bash

FUNCTION_NAME=$1
PAYLOAD="${2-file://./default-payloads/${FUNCTION_NAME}.json}"

echo "FUNCTION_NAME $FUNCTION_NAME"
echo "PAYLOAD $PAYLOAD"
