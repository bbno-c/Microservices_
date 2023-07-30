# Use an official Node.js image as the base image
FROM node:14

RUN mkdir -p /app/m1
ADD . /app/m1
WORKDIR /app/m1

# # Copy the project files to the working directory in the container
# COPY package.json package-lock.json ./

# # Copy the rest of the project files to the working directory in the container
COPY ./m1 .

RUN npm install

# Expose port for HTTP (M1)
EXPOSE 3000

# Command to start Microservice M1
CMD ["node", "index.js"]
