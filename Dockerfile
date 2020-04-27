
FROM node:current-alpine as build

ENV APP_HOME /app/

RUN mkdir -pv $APP_HOME
WORKDIR $APP_HOME
# ADD . $APP_HOME
COPY build $APP_HOME/build
COPY package.json server.js routes.js build $APP_HOME

ENV NODE_ENV production
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install

# from build image
FROM node:current-alpine
COPY --from=build /app /

# start
EXPOSE 8080
CMD [ "npm", "run", "server" ]