#!/bin/bash

# Rollback script
# Reverts to the previous deployment

set -e

echo "⏪ Starting rollback process..."

# Get the current git commit
CURRENT_COMMIT=$(git rev-parse HEAD)
echo "Current commit: $CURRENT_COMMIT"

# Get the previous commit
PREVIOUS_COMMIT=$(git rev-parse HEAD~1)
echo "Rolling back to: $PREVIOUS_COMMIT"

# Confirm rollback
read -p "Are you sure you want to rollback? (yes/no): " CONFIRM

if [ "$CONFIRM" != "yes" ]; then
    echo "Rollback cancelled"
    exit 0
fi

# Rollback git
git reset --hard $PREVIOUS_COMMIT

# Rebuild and redeploy
echo "Rebuilding application..."
./scripts/deploy.sh

echo "✓ Rollback completed successfully!"
