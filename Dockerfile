
# Step 1: choose a smaller base image
FROM node:current-alpine as build

# Step 2: only copy in what you need
ENV APP_HOME /app
RUN mkdir -pv $APP_HOME
WORKDIR $APP_HOME

# Step 3: Copy npm dependencies & install
ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV production
COPY package.json yarn.lock $APP_HOME
RUN yarn

# Step #4: copy app files
COPY build $APP_HOME/build
COPY server.js routes.js $APP_HOME

# Step 4: use a multi-stage build
FROM node:current-alpine
COPY --from=build /app /

# start
EXPOSE 8080
CMD [ "yarn", "run", "server" ]