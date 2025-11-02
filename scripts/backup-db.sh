#!/bin/bash

# Database backup script
# Creates a backup of the MongoDB database

set -e

BACKUP_DIR="./backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="${BACKUP_DIR}/mongodb_backup_${TIMESTAMP}"

echo "📦 Starting database backup..."

# Create backup directory if it doesn't exist
mkdir -p $BACKUP_DIR

# Check if MONGODB_URI is set
if [ -z "$MONGODB_URI" ]; then
    echo "Error: MONGODB_URI environment variable is not set"
    exit 1
fi

# Create backup using mongodump
echo "Creating backup to ${BACKUP_FILE}..."
mongodump --uri="$MONGODB_URI" --out="$BACKUP_FILE"

# Compress backup
echo "Compressing backup..."
tar -czf "${BACKUP_FILE}.tar.gz" -C "$BACKUP_DIR" "mongodb_backup_${TIMESTAMP}"
rm -rf "$BACKUP_FILE"

echo "✓ Backup completed: ${BACKUP_FILE}.tar.gz"

# Clean up old backups (keep last 7 days)
echo "Cleaning up old backups..."
find $BACKUP_DIR -name "mongodb_backup_*.tar.gz" -mtime +7 -delete

echo "✓ Database backup completed successfully!"
