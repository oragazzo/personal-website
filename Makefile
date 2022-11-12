docker_build:
	docker build -t oragazzo-website .
	docker tag oragazzo-website ragazz0/oragazzo-website:latest
	docker push ragazz0/oragazzo-website:latest