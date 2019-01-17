# React Express Front End Starter 

This project is a front end project meant to work with the Express backend [here](https://github.com/Product-College-Labs/react-express-server). 

The goal of this project is to provide a front end for a simple Express server. 

## Getting started 

This project is made up two parts. The React front end client and the Express backend server. 

Install and run this project: 

- `npm install`
- `npm start`

View the project at: [http://localhost:3000](http://localhost:3000)

### Proxy Server 

This project is viewed at http://localhost:3000 but it sends messages and communicates with the backend through it's proxy server on port: 4000. 

Look at [package.json](package.json). Line 10: 

`"proxy": "http://localhost:4000"`

Network requests made from this project will come from this address. 

Look at the Express server project. In `server.js` at the end of file you'll find: 

```JS
const port = 4000
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`))
```

This project runs on port: 4000. 

You'll need to have both projects running at the same time! Launch the Express server first using terminal. Open another terminal navigate to this folder and launch this project. 

## Challenges (3hrs)

Your goal is to connect this project to the server project and challenges from the previous class. 

Study the example code. It makes a couple calls to the [react-express-server](https://github.com/Product-College-Labs/react-express-project). 

You should launch your express server from the previous class. It should be running on localhost:4000. This project should proxy to localhost:4000. The calls this project makes to your express may or may not work at this point, recall you changed the API. 

Your goal is to get this project connected to you express server and solve the challenges below. 

**Challenge 1:** 

Your first goal is ot get the demo project working with your express server and it's API. You've made changes to the API yoju may have to change this project to work with your server. 

- Modify the API to work with the changes you made to your server
  - Get a random number from your service
  - Add an input that sets the number of dice and number of sides and displays the returned values in a list with the total at the bottom 
  
**Challenge 2:**



**Challenge x:**

Use your express server as an intermediary to another server. Many API servers work fine but there are times when they do not everything we'd like them to do. 

There are times when passing data from one server through your server to transform the data to better fit your uses. 

- Make a service to get the weather
  - Use [node-fetch](https://www.npmjs.com/package/node-fetch) to get the weather in Express
    - node-fetch 
  - Create an endpoint in your express project that returns the weather data from OpenWeatherMap. Use node-fetch to get the weather. Modify the JSON returned from OpenWeatherMap to a more concise and usable format. Return this modified data from your endpoint.

Your data should be formatted like this: 

{
  temp: 70,
  short: "Short description",
  long: "A long and more detailed description of the weather",
  humidity: 10,

}

**Challenge x:**

You've heard [Darksky.net](https://darksky.net/dev) is a pretty good API. Modify your backend to use this service in place of OpenWeatherMap. 

Don't change the format of the JSON that you returned in the previous challenge. 

- Use the concept above to get the weather from the darkskys API. 
