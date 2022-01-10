# API for MBI Generator

MBI: Medicare Beneficiary Identifier

## Setup

1. Clone Repository
   ```
   git clone https://github.com/naikvarun/mbr-gen-api.git
   ```
2. Install Dependencies using `npm`/`yarn`
   ```
   yarn install
   ```
3. Start API Server on local (Uses port `3001`})
   ```
   yarn dev
   ```

## API Endpoints

### `GET /mbi/generate`

It will generate a random valid MBI

Sample Response:

```json
{
  "mbi": "5UY2P65RQ91"
}
```

### `POST /mbi/verify`


It will validate the MBI provided and send a result

It will send `HTTP 200` for invalid MBI

Return fields:
- `mbi`: MBI passed to verify
- `isValid`: true/false if MBI is valid or not

Example:

Request
```http
POST http://localhost:3001/mbi/verify
Content-Type: application/json

{ "mbi": "5UY2P65RQ91"}
```

Response:

```json
{
	"mbi": "5UY2P65RQ91"
	"isValid" : true
}
```
