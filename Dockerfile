# Use the official Node.js LTS Alpine image as the build stage
FROM node:lts-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application for production
RUN npm run build

# Use the official Nginx Alpine image as the runtime stage
FROM nginx:alpine AS runtime

# Copy custom Nginx configuration file
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Copy the built application from the build stage to the Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 8080 for the application
EXPOSE 8080