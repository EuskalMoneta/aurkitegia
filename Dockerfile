FROM node

WORKDIR /data
COPY ./reacttest/ /data

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

