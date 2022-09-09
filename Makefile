add_tag:
	docker tag oragazzo-website ragazz0/oragazzo-website:latest

docker_build:
	docker build -t oragazzo-website .
	docker push ragazz0/oragazzo-website:latest