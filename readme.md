# Express PostgreSQL Boilerplate

## Set up
1. Fork and clone this repo
2. From ./ run `npm install`
3. From ./ run `createdb ____` inserting the name of your database
4. In ./backend/knexfile.js change the `dbName` variable to match your new database
5. From ./backend run `mv .env.example .env` and change the secret in the new .env file
6. From ./backend run `npm run dev`
7. In a new tab from ./frontend run `npm run dev`