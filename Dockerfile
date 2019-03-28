FROM node

WORKDIR /applications

COPY . .

RUN npm install

WORKDIR /applications/server

RUN npm install

EXPOSE 3000

CMD ["node", "bin/www"]
