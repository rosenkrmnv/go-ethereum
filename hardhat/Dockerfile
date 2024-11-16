# Use the official Node.js image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy only package.json and package-lock.json initially for efficient caching
COPY ./package*.json ./

# Install dependencies
RUN npm install -g hardhat

# Copy the rest of the application code
COPY . .

# Set the default command
CMD ["npx", "hardhat"]

