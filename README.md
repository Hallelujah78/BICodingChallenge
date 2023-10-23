# Country Insights Web App

## Introduction

Country Insights is a basic web application that consists of a React front end and a Node back end. Both are included in the repository/zip file. It was created as part of a coding challenge.

Users can utilize the front end to request information about a country from the [REST Countries API](https://restcountries.com/). These requests for information go through a Node server - the back end part of Country Insights.

The Node server receives the request from the front end, in turn makes a request to the REST Countries API using this endpoint: https://restcountries.com/v3.1/name/{name}?fullText=true, where {name} is the country name the user selected on the front end.

Our Node server then organizes and cleans up the response from the REST Countries API, and sends that data back to the front end client so it can be rendered for the user.

---

## Set Up

### Running Locally

Node will need to be installed on your machine. Download Node [here]("https://nodejs.org/en/download").

- If you received an email with this project attached, download the attached folder and unzip. Alternatively, you can clone this repository.
- Open a terminal window and change the working directory to the root of the newly unzipped folder. You can type 'cd ' at your terminal prompt, note the space, and drag the folder onto the terminal window and hit enter to achieve this easily.

- If you are in the "BICodingChallenge" directory in your terminal window and you have Node installed, you can now install Node dependencies for the back end server.
- Enter the following in your terminal window and hit enter

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

---

## To Do

- switch from CRA to Vite
- ~~Finesse README.md~~ DONE!
- ~~Fix development issue with NavSearchForm styling on code save~~ SEEMS FIXED
- ~~Deploy to Render.com~~ DONE!
- ~~gini info is not showing up, logic is off probably on frontend~~ DONE!

---

## What I Learned

- consuming an API you don't control is hard
- tables are pretty cool
- how to componentize 'stuff'
- always read the API docs!
- general reinforcement about HTML, CSS, and JavaScript syntax/usage
- using AbortController and using timeout with axios
- custom hooks are cool
