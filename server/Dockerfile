FROM node:16.14 AS development

WORKDIR /usr/src/app

# Install nodemon globally
RUN npm install -g nodemon

# Install build tools
RUN apt-get update && apt-get install -y build-essential

COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json

RUN npm install

COPY . /usr/src/app

EXPOSE 8080

CMD [ "npm", "run", "dev"]
