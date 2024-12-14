prod/run:
	@echo "Building the product environment..."
	@docker rm -f dalaeli-product
	@echo "Building the Docker image..."
	@docker build -t dalaeli-product .
	@echo "Starting the product environment..."
	@docker run -p 3000:3000 dalaeli-product:latest