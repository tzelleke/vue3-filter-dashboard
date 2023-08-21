ARG NODE_VERSION=18

FROM node:${NODE_VERSION} as dev
ENV NODE_ENV=development
WORKDIR /home/node/project
COPY package*.json ./
RUN npm install
EXPOSE 5173
CMD ["npm", "run", "dev"]
