# Country Insights Web App

## Introduction

Country Insights is a basic web application that consists of a React front end and a Node back end. Both are included in the repository/zip file. It was created as part of a coding challenge.

On the front end, the user can use a select type input to select the name of a country and then hit the submit button. The front end then makes a request to the Node back end. The Node back end receives the request and makes a request to the Rest Countries API (rcAPI) using this endpoint: https://restcountries.com/v3.1/name/{name}?fullText=true, where {name} is the country name the user selected on the front end.

When the Node server receives the response from rcAPI, it organizes and validates (see Validation below) the data to make it easier to render on the front end. It then returns the data to the frontend.

The front end receives the data and renders it for the user. I've organized the data being rendered into categories on the back end so that we can display it in nice containers on the front end. The decision to categorize and group the data was inspired by examining a demo video on the website of the company that set the coding challenge.

---

## Set Up

### Running Locally

Node will need to be installed on your machine. Download Node [here]("https://nodejs.org/en/download").

- If you received an email with this project attached, download the attached folder and unzip. Alternatively, you can clone this repository.
- Open a terminal window and change the working directory to the root of the newly unzipped folder. You can type 'cd ' at the terminal prompt, note the space, and drag the folder onto the terminal window and hit enter to achieve this easily.

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

---

- The client should open automatically in your default browser. If not, you can view the client in your browser at: http://localhost:3000/

---

## Usage

- Country Insights is a pretty simple web app. It provides a front end that users can utilize to request information about a country from the [REST Countries API](https://restcountries.com/). These requests for information go through a Node server (the back end part of Country Insights). The Node server receives the request from the front end, in turn makes a request to the REST Countries API, organizes and cleans up the response from the REST Countries API, and then sends data back to the front end client so it can be rendered for the user.

## To Do

- Fix development issue with NavSearchForm styling on code save
- switch from CRA to Vite
- Deploy to Render.com
- Finesse README.md
