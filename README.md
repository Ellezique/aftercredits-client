# This is the front end of a full stack app.
Access the github repository for this front end app at: https://github.com/Ellezique/aftercredits-client

Access the github repository for the backend app at: https://github.com/Ellezique/aftercredits-server

Access the full README PART A for planning and project information: https://github.com/Ellezique/Full-Stack-App-PART-A

## Setup REACT CLIENT APP
- Clone this repo to your local development environment (or make a fork and clone the fork to your local)
- Change into the project directory `$ cd after-credits`
- Install dependencies: `$ yarn install`
- Run the application: `$ yarn start`
- Check the ports and open localhost in your browser and verify that the application runs as expected



## BING MAPS API:
- Get your own api key at https://www.bingmapsportal.com/ (log in with an outlook account such as a hotmail email address, then click on the My account tab > My keys, copy that key and paste over xxxxx)
- In .env add: 
REACT_APP_BING_API_KEY=xxxxxxxxx


Bing maps documentation: https://docs.microsoft.com/en-us/bingmaps/v8-web-control/map-control-api/mapoptions-object
Bing Maps -React package: https://www.npmjs.com/package/bingmaps-react



## IMDB API
- Get your own api key from Rapid API at https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative/ 
- In .env add: 
REACT_APP_MOVIE_API_KEY=xxxxxxxxx

-----------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the basic template.


### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
