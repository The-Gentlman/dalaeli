FROM node:latest
WORKDIR /usr/src/app

# Set environment variable to suppress warnings
ENV NODE_NO_WARNINGS=1

# Copy package.json and package-lock.json (or yarn.lock if using Yarn)
COPY package*.json ./

RUN npm install --verbose

COPY . .

# Build the application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
