# Node.js Rest APIs with Express, Sequelize & MySQL example

First make sure to use the the versions pg `"8.4.2"` sequelize `"6.3.5"`


## Install dependencies

```zsh
npm install
```

## Usage

```bash
node server.js -U 'me' -p 'password'
```

## Pre-Reqs

Migrations for table are not included

```sql
CREATE TABLE tutorial (
  title VARCHAR(255),
  description VARCHAR(255),
  published boolean
);
```

Why we do VarChar 255? See below.

```js
Sequelize.STRING                      // VARCHAR(255)
Sequelize.STRING(1234)                // VARCHAR(1234)
Sequelize.STRING.BINARY               // VARCHAR BINARY
```


# Common Commands


#### Show tables in database

```sql
\dt
```

#### Delete table in SQL

```sql
DROP TABLE <table_name>
```


#### Delete DB in sql

Angle brackets are simply templating

```sql
DROP DATABASE <db_name>;
```
