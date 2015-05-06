REM Script arguments
REM  [1] project source folder
REM  [2] output folder 
   
REM Create the npm folder in the user profile to fix a bug with npm on Windows
MKDIR C:\Users\buildguest\AppData\Roaming\npm
  
REM Set the working folder to the project source folder to correctly install npm packages locally
CD /D "%TF_BUILD_SOURCESDIRECTORY%%1"
ECHO %TF_BUILD_SOURCESDIRECTORY%%1
REM ECHO Running front end build

REM ECHO running npm...
REM CALL npm --version
REM CALL npm install -g gulp bower less
REM CALL npm install

REM ECHO running bower...
REM CALL bower install 

REM ECHO Starting gulp build....
REM CALL gulp build-ci

REM ECHO gulp build complete!
