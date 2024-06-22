#!/bin/bash

# Replace environment variables in the nginx configuration file
envsubst '$${ARGUS_FE_HOSTNAME} $${ARGUS_FE_PORT} $${VACAY_FE_HOSTNAME} $${VACAY_FE_PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# Start nginx in the foreground
nginx -g 'daemon off;'
