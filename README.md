# Country Insights Web App

## Introduction

Country Insights is a basic web application that consists of a React front end and a Node back end. Both are included in the repository/zip file. It was created as part of a coding challenge.

Users can utilize the front end to request information about a country from the [REST Countries API](https://restcountries.com/). These requests for information go through a Node server - the back end part of Country Insights.

The Node server receives the request from the front end and in turn makes a request to the REST Countries API using this endpoint: https://restcountries.com/v3.1/name/{name}?fullText=true, where {name} is the country name the user selected on the front end.

Our Node server then organizes and cleans up the response from the REST Countries API, and sends that data back to the front end client so it can be rendered for the user.

---

## Set Up

### Running Locally

Node will need to be installed on your machine. Download Node [here]("https://nodejs.org/en/download").

- If you received an email with this project attached, download the attached folder and unzip. Alternatively, you can clone this repository.
- Open a terminal window and change the working directory to the root of the newly unzipped folder. You can type 'cd ' at your terminal prompt, note the space, and drag the folder onto the terminal window and hit enter to achieve this easily.

- If you are in the "BICodingChallenge" directory in your terminal window and you have Node installed you can bravely attempt to install all dependencies for client and server and start both using the following command:

```
npm run demo
```

- note, this will start the development version of the client

- alternatively, you can go through the following steps
- to install dependencies for the Node server, you can input the following in your terminal window and hit enter

```
npm i
```

- wait for dependencies to be installed
- change the working directory to the client and install client dependencies
- you should enter the following in your terminal and hit enter, making sure that "BICodingChallenge/client" is the working directory:

```
cd client && npm i
```

- wait for the dependencies to be installed
- switch back to the root directory by entering the following in the terminal

```
cd ..
```

- The working directory should again be "BICodingChallenge"
- now you can run the Node server and the client both in development using:

```
npm start
```

- The client should open automatically in your default browser. If not, you can view the client in your browser at: http://localhost:3000/

---

## Usage

When the app first loads, the user can either select a country from a dropdown menu, or type in the select box to search for available countries.
![Initial 'landing page' for Country Insights](https://res.cloudinary.com/duar7ipaf/image/upload/v1698065053/image_fnf678.png)

- note, if you choose to type in the box, the options are filtered by matching any part of the country's name
  - if you type 'ige,' your available options will be Niger and Nigeria
- once you select a country from the options, you can hit submit to fetch data about that country
- if you select Austria, for example, you would be presented with this screen on a device with a larger screen size:
  ![Country Insights after searching for Austria](https://res.cloudinary.com/duar7ipaf/image/upload/v1698065386/image-1_qdk1ak.png)

- you can now view geographic information about Austria by clicking on the Geography item:
  ![Country Insights after searching for Austria with the geography category expanded](https://res.cloudinary.com/duar7ipaf/image/upload/v1698066155/image-2_vt2kyc.png)

- the app is fully responsive, and so on a mobile device the layout is slightly different
- on smaller screens all categories are shown expanded (they can't be minimized) and are displayed in a single column:

  ![Country Insights after searching for Austria on a mobile screen](https://res.cloudinary.com/duar7ipaf/image/upload/v1698066814/image_qgdrhi.png)

### Beyond requirements

- If the user clicks on the gear icon, they can create custom categories. A custom category allows the user to group together fields that they might be interested in and display them together, similar to the Geography or Demographics category.
- This custom category is stored in local storage
- The user can delete all of their custom categories by clicking 'DELETE ALL' from the sidebar
  - Obviously a delete all button is a bit crude but I didn't have time to create a separate screen where the user could manage their custom categories (edit, delete individual item, reorder, etc)

---

## To Do

- styling and layout for new custom category page needs work
- accessibility - items transitioned off screen can still be tabbed to
- Learn testing with Jest/Cypress!
  - I have a couple of days left and I won't have time to learn much on testing
- ~~Try to implement ability for user to create their own categories using local storage to save settings~~ DONE-ish
- Add jump to top button
- Refactor DynamicObjectRenderer to use new field components
- Add ability to reorder and show/hide all categories being displayed
- search functionality for custom categories?

---

## Testing

- I have never used a testing framework/library before and so I had to really try to learn as I went along on this project. This was made more difficult by the fact that the project was a refactor of an old create-react-app project that I migrated to Vite.
- In the end I created a fresh Vite React project and followed a guide to set up Jest for that. Then I copied the necessary config files over and updated my package.json dependencies. Thankfully that worked and I was able to run my tests!
- To run the tests, change the working directory to the client and run jest:

```
cd client && npm test
```

---

## What I Learned

- consuming an API you don't control is hard
- tables are pretty cool
- how to componentize 'stuff,' albeit badly
- always read the API docs!
- general reinforcement about HTML, CSS, and JavaScript syntax/usage
- using AbortController and using timeout with axios
- custom hooks are cool
- how to migrate from create-react-app to Vite
- various domain things about ISO country and language codes, latitude, longitude etc
- How to install and configure Jest and required dependencies
  - how to write very (extremely) basic tests
- component mapping!
- put aside a day before a deadline to simply go through the code and clean it up
  - I was coding and adding 'features' right up to the point it needed to be submitted.
