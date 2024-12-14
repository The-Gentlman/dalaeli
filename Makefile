BUILD_NAME ?= dalaeli-product

prod/run:
	@echo "Stopping and removing the last running container..."
	@docker ps -q --filter "name=$(BUILD_NAME)" | xargs -r docker stop | xargs -r docker rm
	@echo "Building the Docker image with name $(BUILD_NAME)..."
	@docker build -t $(BUILD_NAME):latest .
	@echo "Starting the product environment..."
	@docker run --name $(BUILD_NAME) -p 3000:3000 -d $(BUILD_NAME):latest
