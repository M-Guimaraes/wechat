#!/bin/bash

    echo "Iniciando ambiente..."
    echo "Desconstruindo containers, caso existam..."
    docker-compose down
    echo "Construindo containers de desenvolvimento..."
    docker-compose up -d --build