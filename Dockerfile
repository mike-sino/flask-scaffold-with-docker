FROM ubuntu:14.04

LABEL version="1.0"
LABEL maintainer="mike@mike-sino.eu.org" 

# updata ubuntu
RUN apt-get update -y
RUN apt-get install -y \
    git \
    curl \
    build-essential \ 
    python3-dev


# Install Miniconda
RUN curl -LO http://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh
RUN bash Miniconda3-latest-Linux-x86_64.sh -p /miniconda -b
RUN rm Miniconda3-latest-Linux-x86_64.sh
ENV PATH $PATH:/miniconda/bin
RUN conda update -y conda
RUN pip install --upgrade pip

# Install Jupyter
RUN conda install jupyter


# install requirement for flask
RUN mkdir -p /app
WORKDIR /app

ADD ./flask-scaffold/requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

EXPOSE 5000

CMD [ "python", "run.py" ]