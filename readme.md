##### PRE REQUISITE #####
1. Node.js and npm should be installed in the system. You can download and install them from nodejs.org


##### SETUP PROCESS #####
1. Clone repo from: https://github.com/chama999/idelsoft or execute in the terminal following command: git clone https://github.com/chama999/idelsoft.git
2. npm install
3. Configure .env file
    '''
    BASE_URL="https://magento.softwaretestingboard.com"
    CYPRESS_ENVIRONMENT="QA"
    CYPRESS_API_KEY="Set the api key"
    ''' 


#### Validate browsers ####
Run below command to to validate the browsers installed. If you need some other browser please install as Prerequisite.
 * npx cypress info

##### EXECUTE REGRESSION #####
* npx cypress run

##### CROSS BROWSER TESTING EXECUTION #####
* npx cypress run --browser chrome
* npx cypress run --browser firefox
* npx cypress run --browser edge

#### CI/CD #####
On each push into main branch, it will execute cypress-run job that will be executing the regression test using chrome. It will generate a report as output using mochawesome report tool.


