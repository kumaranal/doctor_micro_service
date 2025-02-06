# Use Node.js as the base image
FROM node:18

# Set working directory
WORKDIR /src/server.ts

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your microservice listens on
EXPOSE 6001

# Start the microservice
CMD ["node", "server.js"]
