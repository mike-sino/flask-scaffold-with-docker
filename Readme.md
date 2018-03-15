
# The develop env for flask scaffold
This project is based on Flask-Scaffold and a ubuntu docker envrionment is provided for it.

## Base Docker Image

* [ubuntu:10:04](https://registry.hub.docker.com/u/library/ubuntu/)

## Base project

* [Flask-Scaffold](https://github.com/Leo-G/Flask-Scaffold)


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
python scaffold.py scaffold/blog.yaml
python db.py db init
python db.py db migrate
python db.py db upgrade
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

# The useage of flask scffold

flask: http://localhost:5000

phppgadmin: http://localhost:12345



# Python and Jupyter notebook

## Python 

python3.6

pip3.6 

## Jupyter notebook

You can access to jupyter notebook through "http://localhost:8080" with login password: "jupyter"

