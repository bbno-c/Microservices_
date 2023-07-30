# Use an official Node.js image as the base image
FROM node:14

# Set the working directory in the container
RUN mkdir -p /app/m2
ADD . /app/m2
WORKDIR /app/m2

# Copy the project files to the working directory in the container
# COPY package.json package-lock.json ./

# Copy the rest of the project files to the working directory in the container
COPY ./m2 .

RUN npm install

# Command to start Microservice M2
CMD ["node", "index.js"]
