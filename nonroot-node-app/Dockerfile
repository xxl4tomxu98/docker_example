FROM node:lts-alpine

RUN adduser -D -H -u 10000 app-user

# TODO - Indicate all following actions should use the new app-user user
USER app-user

# TODO - Specify a working directory of /usr/local/app
WORKDIR /usr/local/app

# TODO - Copy in the package.json and yarn.lock files into the working directory,
# setting the owner as app-user
COPY --chown=app-user ./package.json ./yarn.lock /usr/local/app/

# TODO - Run yarn install and yarn cache clean to keep the image size minimal
RUN yarn install && yarn cache clean

# TODO - Copy in the src directory into a directory named src
COPY --chown=app-user ./src /usr/local/app/src

# TODO - Indicate this image exposes port 3000
EXPOSE 3000

CMD ["node", "src/index.js"]