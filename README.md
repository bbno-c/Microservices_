# NodeJS_TestTask
GREEN-API test assignment

## Usage:
1) clone the repository
2) run
    ```bash
    cd .\NodeJS_TestTask\
    docker-compose up
    ```
4) Here's an example curl command to test the request:

   For Unix systems:
   ```bash
    curl -X POST \
    http://localhost:3000/process \
    -H 'Content-Type: application/json' \
    -d '{"data": 5}'
    ```
   For Windows:
   ```bash
    Invoke-RestMethod -Method Post `
    -Uri 'http://localhost:3000/process' `
    -Headers @{'Content-Type' = 'application/json'} `
    -Body '{"data": 5}'
   ```
