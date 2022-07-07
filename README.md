# real-time-chat-app-how-you-doing

for the backend part we can run the server in to ways.

either
download the backend folder and run npm install to down load the packages from package.json
in the terminal write npm run start

or
download the backend folder and install docker on your machine.
run docker build -t chat-server-image . to build the image from docker file.
in the terminal run docker run -d -p 8000:8000 --name chat-server chat-server-image
this will start theserver in  a container.


for the client server
download the frontend folder and open the index.html file in the browser.
