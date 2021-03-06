
# The develop env for flask scaffold

[![](https://images.microbadger.com/badges/image/mikesino/flask-scaffold-with-docker.svg)](https://microbadger.com/images/mikesino/flask-scaffold-with-docker "Get your own image badge on microbadger.com")
[![](https://images.microbadger.com/badges/version/mikesino/flask-scaffold-with-docker.svg)](https://microbadger.com/images/mikesino/flask-scaffold-with-docker "Get your own version badge on microbadger.com")

This project is based on Flask-Scaffold and a ubuntu docker envrionment is provided for it.


## Base project
* [Flask-Scaffold](https://github.com/Leo-G/Flask-Scaffold)

## Base Docker Image
* [ubuntu:16.04](https://registry.hub.docker.com/u/library/ubuntu/)

## Usage
### The first time 

Step 1. run container

```
docker-compose up -d
```

Step 2. go into container

```
docker exec -it flask bash
```

Step 3. prepare the scaffold and database

```
/miniconda/bin/python scaffold.py scaffold/blog.yaml
/miniconda/bin/python db.py db init
/miniconda/bin/python db.py db migrate
/miniconda/bin/python db.py db upgrade
```

Step 4. close container

```
docker-compose down
```

### After the first time:

Step 1. start container

```
docker-compose up -d
```

Step 2. close container

```
docker-compose down
```

## The useage of flask scffold

flask: http://localhost:80

phppgadmin: http://localhost:8000

supervisor: http://localhost:9001

## Python and Jupyter notebook

### Python 
python3.6 & pip3.6 in Miniconda3

### Jupyter notebook

access to jupyter notebook through "http://localhost:8080" with login password: "jupyter"

