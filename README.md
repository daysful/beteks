<p align="center">
    <img src="https://raw.githubusercontent.com/daysful/beso/master/about/identity/beso-logo.png" height="250px">
    <br />
    <br />
    <a target="_blank" href="https://github.com/daysful/beso/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-DEL-blue.svg?colorB=1380C3&style=for-the-badge" alt="License: DEL">
    </a>
</p>



<h1 align="center">
    beso
</h1>


<h3 align="center">
    BioElectric Simulation Orchestrator
</h3>


`BESO` is based on [`BETSE`](https://github.com/betsee/betse) to provide a bioelectric tissue simulation management environment.



## Setup

In order to run `BESO`, a `backend` and a `frontend` server must be set up, given a `*NIX` environment.

Provided [`docker`](https://docs.docker.com/get-docker/) is installed, run

``` bash
docker pull daysful/beso-backend
docker pull daysful/beso-frontend

mkdir ./beso_data

docker run --name beso-backend \
    -p 54567:54567 \
    --mount type=bind,source="$(pwd)"/beso_data,target=/app/data \
    -d daysful/beso-backend
docker run --name beso-frontend \
    -p 54568:54568 \
    -d daysful/beso-frontend
```

for a default setup, storing the data in a local `beso_data` directory.

### Backend

Instead of the default `sqlite` database, `beso.db`, `mongo` can be used by providing the adequate connection string

``` bash
docker run --name beso-backend \
    -p 54567:54567 \
    --mount type=bind,source="$(pwd)"/beso_data,target=/app/data \
    --env BESO_MONGO_CONNECTION_STRING="mongodb://[username:password@]host[:port]" \
    -d daysful/beso-backend
```

Users can be specified through the `BESO_USERS` environment variable as user tuples (`id,name,key`) separated by semicolon, e.g. `BESO_USERS="123,user1,key1;124,user2,key2"`.

User registration can be controlled through the `BESO_ALLOW_USER_REGISTRATION` environment variable, `true` or `false`, default `true`.


### Frontend

The `beso-frontend` might require the environment variable `BESO_BACKEND` to discover the `beso-backend`.

``` bash
docker run --name beso-frontend \
    -p 54568:54568 \
    --env BESO_BACKEND="http://host[:port]" \
    -d daysful/beso-frontend
```



## Development

Clone the repository

``` bash
git clone https://github.com/daysful/beso.git
```

### Backend

Provided [`python3`](https://www.python.org/downloads/) is installed, run in the `backend` directory

``` bash
python3 -m venv ./venv

source ./venv/bin/activate

pip install -r requirements.txt

./scripts/live.sh
```

To package the `docker` image, run in the `backend` directory

``` bash
./scripts/containerize.sh
```


### Frontend

Provided [`Node.js`](https://nodejs.org/en/) is installed, run in the `frontend` directory

``` bash
npm install

npm run live
```
