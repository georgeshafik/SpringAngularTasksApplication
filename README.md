# SpringAngularTasksApplication

Angular app lives under

tasks -> src -> main -> frontend

***

Added a proxy file so base URL can work in development environment
{

    "/api": {

        "target": "http://localhost:8080",

        "secure": false

    }
    
}

Proxy files is reference in the package.json npm start command
    
    "start": "ng serve --proxy-config proxy-conf.json",

This way the important links below work straight out of the box.    

***

I also installed bootstrap and all npm angular packages from the following location:

/development/Development/Angular4JavaDevelopers/tasks/src/main/frontend

npm install bootstrap@3 --save

Add a reference to bootstrap css in angular.json configuration file, as shown below:
           
            "styles": [
           
                "node_modules/bootstrap/dist/css/bootstrap.min.css",
           
                "src/styles.css"
           
            ],
            
***

Important links:

    http://localhost:4200/

    http://localhost:8080/h2-console    

H2 database:

    JDBC URL: jdbc:h2:mem:tasks
    
Following changes where made to the   

tasks -> src -> main -> frontend -> package.json file:

    "build": "ng build",

    "postbuild": "npm run deploy",

    "predeploy": "rimraf ../resources/static/ && mkdirp ../resources/static",

    "deploy": "copyfiles -f dist/** ../resources/static",
    

We installed three rpm packages so we can perform post/post/deploy operations when
we run sudo npm run build from the commandline from location
/development/Development/Angular4JavaDevelopers/tasks/src/main/frontend

Example commands below:

    npm install --save-dev rimraf 
  
    npm install --save-dev mkdirp 
  
    sudo npm install --save-dev copyfiles


and cleaned up a security vulnerability by install 
npm install jquery@3.4.2 after running 
 
    sudo nom audit


Unix commandline history:

    502  npm install --save-dev rimraf
  
    503  npm audit
  
    504  sudo npm audit
  
    505  npm install jquery@3.4.1 
  
    506  sudo npm audit
  
    507  npm install --save-dev mkdirp
  
    508  npm install --save-dev copyfiles


Special note I was not able to get the build to work purely by only running npm run build
this may be attributed to security issues and git.

The follow worked fine for me:

Unix history log:

    536  sudo npm run build

    537  sudo cp -rf ./dist/frontend/ ../resources/static/


So the files in location:

    /development/Development/Angular4JavaDevelopers/tasks/src/main/frontend/dist/frontend

where build and deployed to the following Spring Boot location:

    /development/Development/Angular4JavaDevelopers/tasks/src/main/resources/static





