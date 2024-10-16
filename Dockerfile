# Use an official Node runtime as the base image
FROM node:20.18-alpine3.20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application's port
EXPOSE 3002

# Define the command to run the application
CMD ["npm", "start"]
