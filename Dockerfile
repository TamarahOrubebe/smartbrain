FROM node:14.18.1

WORKDIR /usr/src/smart-brain-api

COPY ./ ./

RUN npm run install --only=production

RUN npm run build --prefix client

USER node

CMD ["npm", "start", "--prefix", "server"]

EXPOSE 3300