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

This project is view at http://localhost:3000 but it sends messages and communicates with the backend through it's proxy server on port: 6000. 

Look at [package.json](package.json). Line 10: 

`"proxy": "http://localhost:6000"`

Network requests made from this project will come from this address. 

Look at the Express server project. In `server.js` at the end of file you'll find: 

```JS
const port = 6000
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`))
```

This project runs on port: 6000. 

You'll need to have both projects running at the same time! Launch the Express server first using terminal. Open another terminal navigate to this folder and launch this project. 

## Challenges 

- 