# verify docker is installed via
  docker --version
# create an image from the dockerfile provided via 
  docker build -t app1:1.0
# Run the container via 
  docker run app1:1.0
# confirm the image was created via 
   docker images
# confirm that the containerwas created via
   docker ps
   docker ps -a -to see all containers that have ever been created


