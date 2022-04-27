#!/bin/bash
export mongodb_URI='mongodb+srv://user01:test123@clustersy.cztpd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

echo "connecting to $mongodb_URI"
npm install
npm start