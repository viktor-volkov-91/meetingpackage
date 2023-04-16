# MeetingPackage

Steps to run.
1. Run `yarn`
2. I use docker for PostgresSql, so use docker-compose with `/docker/docker-compose.development.yml` config
3. `yarn api:db:sync` to fill DB
4. `yarn api:start` for running api
5. `yarn client:start` for running react app
6. You can use `test@test.com` as a test email to auth
