FROM node:16.14 AS development

WORKDIR /usr/src/app

# Pass the MongoDB hostname and port as environment variables
ENV MONGODB_HOST=mongo
ENV MONGODB_PORT=27017

COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json

RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 8080

CMD [ "npm", "run", "dev"]
