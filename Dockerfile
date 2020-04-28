
# Step 1: choose a smaller base image
FROM node:current-alpine as build

# Step 2: only copy in what you need
ENV APP_HOME /app/
RUN mkdir -pv $APP_HOME
WORKDIR $APP_HOME
COPY build $APP_HOME/build
COPY package.json yarn.lock server.js routes.js $APP_HOME

# Step 3: make sure your dependancies are clean
ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV production
RUN yarn

# Step 4: use a multi-stage build
FROM node:current-alpine
COPY --from=build /app /

# start
EXPOSE 8080
CMD [ "yarn", "run", "server" ]