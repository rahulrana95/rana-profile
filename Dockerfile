FROM node:12-stretch

USER node 

RUN mkdir /home/node/client

RUN ls /home/node/client

WORKDIR /home/node/client

#caching the node_modules
COPY --chown=node:node package-lock.json package.json ./

RUN npm ci


COPY --chown=node:node . .




CMD ["npm","start"]