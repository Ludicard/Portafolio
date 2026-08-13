# Stage 1: Build the React application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency definitions
COPY package.json package-lock.json* ./

# Install dependencies using npm ci for reproducible builds
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application for production
RUN npm run build


# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built assets from the builder stage to Nginx's public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
