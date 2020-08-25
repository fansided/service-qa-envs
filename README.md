# Service QA Envs

Mock services for local development and end-to-end testing.

### Start

To run all services, run `dc up`. To run select services, comment out unwanted services in `docker-compose.yml` & run
`dc up`.

### Adding a mock

Let's say you need a mock for Arrowhead Addict users. Navigate there in the app and notice
`Looking for /mocks/GET_user-management_api_v1_users?perPage=20&page=1&site=130&sortBy=createdAt&desc=-1` in your
terminal log. That's where you need to dump that response data. Go get it from app-dev or something. Copy the whole
response. Then make a new file in `user-management/mocks` and copy-paste in the name
`GET_user-management_api_v1_users?perPage=20&page=1&site=130&sortBy=createdAt&desc=-1`.

Congrats, you're firing on all cylinders.
