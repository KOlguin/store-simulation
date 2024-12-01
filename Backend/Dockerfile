FROM node:20-alpine

WORKDIR /Backend

COPY package*.json ./
RUN npm install

COPY ./entrypoint.sh ./entrypoint.sh

COPY . . 

# CMD npm start
ENTRYPOINT [ "sh", "./entrypoint.sh" ]
# RUN git clone https://github.com/vishnubob/wait-for-it.git
EXPOSE 3000