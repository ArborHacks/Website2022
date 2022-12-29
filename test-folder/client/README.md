# ArborHacks WEB Project
Repository for ArborHacks website code 2022 - Present

# Development Setup
This project uses docker together with react. React is installed within the docker container, so
only docker and docker-compose have to be installed in order to run this. Follow docker's [installation guide](https://docs.docker.com/get-docker/)

Additionally, this repo is configured to work with vscode's Remote-Containers extension. With our code cloned on your machine,
and vscode installed, you can install the Remote-Containers extension, open the ArborHacks-WEB folder in vscode, and run
"reopen in container" command from the command palette. From there, everything should work out of the box. Open a terminal
from inside the container, and run "npm start" from the command line, and it should pull up the webpage on your default browser

