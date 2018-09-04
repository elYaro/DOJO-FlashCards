#!/usr/bin/bash

deactivate() {
    unset MY_PSQL_DBNAME
    unset MY_PSQL_USER
    unset MY_PSQL_HOST
    unset MY_PSQL_PASSWORD
    # uncomment the next line if you want to run your flask server in debug mode
    # unset FLASK_DEBUG
    unset -f deactivate
}

# insert your database name, username (role), host and password
MY_PSQL_DBNAME=""
MY_PSQL_USER=""
MY_PSQL_HOST=""
MY_PSQL_PASSWORD=""

export MY_PSQL_DBNAME
export MY_PSQL_USER
export MY_PSQL_HOST
export MY_PSQL_PASSWORD

# uncomment the next two lines if you want to run your flask server in debug mode
# FLASK_DEBUG="1"
# export FLASK_DEBUG
