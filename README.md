# Node.js Rest APIs with Express, Sequelize & MySQL example


## Install dependencies

```zsh
npm install
```

## Usage

```bash
node server.js -U 'me' -p 'password'
```


### How to set up remote Postgres connection


```bash
psql -h <REMOTE HOST> -p <REMOTE PORT> -U <DB_USER> <DB_NAME>
```

## Troubleshooting

#### If you get the error message

```zsh
psql: error: connection to server at "192.168.0.XXX", port 5432 failed: FATAL:  no pg_hba.conf entry for host "192.168.0.XXX", user "me", database "api", SSL off
```

You likely enabled the setting in windows firewall but misconfigured it.

#### Where is pg_hba.conf stored

By default on Win10 it is located at

```bash
C:\AppData\PostgreSQL\13\pg_hba.conf
```

AppData is synonymous with the folder one chooses when selecting a data directory. This typically will be different than the source folder directory
