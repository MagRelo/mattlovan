
# Step 1: choose a smaller base image
FROM node:current-alpine as build

# Step 2: only copy in what you need
ARG APP_HOME=/app/
RUN mkdir -pv /app/
WORKDIR /app/

# Step 3: Copy npm dependencies & install
ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV production
COPY package.json yarn.lock /app/
RUN yarn

# Step #4: copy app files
COPY build /app/build/
COPY server.js routes.js /app/

# Step 4: use a multi-stage build
FROM node:current-alpine
COPY --from=build /app /

# start
EXPOSE 8080
CMD [ "yarn", "run", "server" ]