FROM node:13.12.0-alpine

WORKDIR /home

COPY package.json package.json
RUN npm install

WORKDIR /home/app
COPY . .
CMD ["npm", "start"]