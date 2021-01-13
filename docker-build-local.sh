#!/bin/bash

docker ps
docker build --file Dockerfile.dev -t keiko15678/ire:app .
docker image ls
docker run -it -p 3000:3000 keiko15678/ire:app