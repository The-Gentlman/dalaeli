prod/run:
	@echo "Destroying Production server"
	@docker rm -f dalaeli-client-prod
	
	@echo "Deploying the dalaeli Client in a production environment"
	@docker build -t dalaeli-client-prod .


prod/down:
	@echo "Destroying Production server"
	@docker rm -f dalaeli-client-prod