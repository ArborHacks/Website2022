# base image and update npm
FROM node:14.19.0

# working directory
WORKDIR /app

# add local node modules to path
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./

# install dependencies
RUN npm install
# RUN npm install react-scripts@4.0.0 -g

# COPY . .

# CMD ["npm", "start"]
