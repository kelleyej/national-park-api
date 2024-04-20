## PINE 🌲

There is no setup to use this API! The API does **not** need to be run locally as it is hosted on Heroku. 

BASE URL: https://national-park-ce3a01ee1a6f.herokuapp.com/api/v1

The API allows you to make GET requests and is meant to be used with the following frontend: https://github.com/kelleyej/pine-project

| **VERB** | **URL** | **REQUEST BODY** | **SAMPLE RESPONSE** |
| -------- | ------- | ---------------- | ------------------- |
| GET all National Parks| /locations | None | `[ { id: "1", name: "National Park name" city: "city name", state: "state name", region: "region name", image: "someURL", visited: "someURL", parkCode: "park code", ... ] }` |
| GET a single National Park | /locations/:id | None | `{ id: "1", name: "National Park name" city: "city name", state: "state name", region: "region name", image: "someURL", visited: "someURL", parkCode: "park code"}` |

