# Ravenous

A Yelp replicate using the Yelp API. 

Read more about the Yelp API [here](https://www.yelp.com/developers/documentation/v3/business_search).

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*

## Project Layout

```
ravenous
├── /public
│   └── favico.ico              # favico
│   └── index.html              # index page
│   └── manifest.json           # TODO
│   └── reset.css               # TODO
├── /src
│   └── /components
│   	└── /Business           # component that contains a single business instance
│   	    └── Business.css
│   	    └── Business.js
│   	└── /BusinessList       # component contains all search results
│   	    └── Business.css
│   	    └── Business.js
│   	└── /SearchBar          # the searching component
│   	    └── Business.css
│   	    └── Business.js
│   └── /util                   # for Yelp functionalities
│   ├── App.css                 # style for App
│   ├── App.js                  # main div!
│   ├── App.test.js             # TODO
│   ├── index.css               # style for index
│   ├── index.js                # index renderer
│   ├── logo.svg                # logo
│   └── serviceWorker.js        # responsively updates the page during development
├── .gitignore                  # gitignore
├── package-lock.json                  
├── package.json                # package list for npm
├── README.md                   # README
└── TODO.md                     # TODO list
```

## Run Scripts (by `create-react-app`)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Potential Bug & Fixes

#### `ENOSPC`

If developing under Ubuntu environment, nodejs might yield this `ENOSPC` error.

**Solution:**

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

*Cheers to @Murali Krishna on [stackoverflow](https://stackoverflow.com/questions/22475849/node-js-what-is-enospc-error-and-how-to-solve/32600959#32600959).*