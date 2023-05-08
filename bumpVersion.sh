#!/bin/bash

# Read the current version from app.json
CURRENT_VERSION=$(grep -oP '(?<="version": ")[^"]*' app.json)

# Use regex to bump the version by 0.0.1
NEW_VERSION=$(echo $CURRENT_VERSION | perl -pe 's/^((\d+\.)*)(\d+)(.*)$/$1.($3+1)/e')
NEW_EXPO_VERSION=$NEW_VERSION

# Increment the buildNumber and versionCode values by 1
IOS_BUILD_NUMBER=$(grep -oP '(?<="buildNumber": )\d+' app.json)
ANDROID_VERSION_CODE=$(grep -oP '(?<="versionCode": )\d+' app.json)
sed -i "s/\"buildNumber\": $IOS_BUILD_NUMBER/\"buildNumber\": $((IOS_BUILD_NUMBER+1))/g" app.json
sed -i "s/\"versionCode\": $ANDROID_VERSION_CODE/\"versionCode\": $((ANDROID_VERSION_CODE+1))/g" app.json

# Update the version in app.json and package.json
sed -i "s/\"version\": \"$CURRENT_VERSION\"/\"version\": \"$NEW_VERSION\"/g" package.json
sed -i "s/\"version\": \"$CURRENT_VERSION\"/\"version\": \"$NEW_VERSION\"/" app.json
sed -i "s/\"sdkVersion\": \"$CURRENT_EXPO_VERSION\"/\"sdkVersion\": \"$NEW_EXPO_VERSION\"/" app.json
