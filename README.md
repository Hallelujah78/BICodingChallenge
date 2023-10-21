# Country Insights Web App

## Introduction

Country Insights is a basic web application that consists of a React front end and a Node back end. Both are included in the repository/zip file. It was created as part of a coding challenge.

On the front end, the user can use a select input to type/select the name of a country and then hit the submit button. The front end then makes a request to the Node back end. The Node back end receives the request and makes a request to the Rest Countries API (rcAPI) using this endpoint: https://restcountries.com/v3.1/name/{name}?fullText=true, where {name} is the country name received from the front end.

When the Node server receives the response from rcAPI, it organizes and validates (see Validation below) the data to make it easier to render on the front end. It then returns the data to the frontend.

The front end receives the data and renders it for the user. I've organized the data being rendered into categories on the back end so that we can display it in nice containers on the front end. The decision to categorize and group the data was inspired by examining a demo video on the website of the company that set the coding challenge.

---

## Set Up

### Running Locally

Node will need to be installed on your machine.

- Download the attached folder and unzip.
- Open a terminal window and change the working directory to the folder root. You can type 'cd ' (note the space) and drag the folder onto the terminal window and hit enter to achieve this easily.

- Install Node dependencies for the back end server:

```
npm i
```

- change the working directory to the client and install Node dependencies:

```
cd client && npm i
```

- and back to the root directory:

```
cd ..
```

- now you can run the Node server and the client both in development using:

```
npm start
```

---

## Validation

- data received from rcAPI
  - some values are undefined
  - arrays may consist of a single element which is an empty string
  - keys may be omitted from objects
- in the case of the International Direct Dialing Code (idd):
  - the 'suffixes' array includes area codes for a handful of countries only, most countries only h
  - I've handled these by omitting area codes for all countries
    - this has meant creating separate logic on the backend for the specific countries where the suffixes array contained area codes
    - the internationalDialingFix.js file in utils on the backend handles this

## Front End Validation

- I chose to use a select input on the front end. The user can still type into the input to search for and filter the country they would like to retrieve data for.
- The option data for the select is retrieved from rcAPI when the client loads.
- As a result, it is not possible for the user to request data for a country that doesn't exist in the API.
- therefore, we don't really need validation on the front end, apart from checking for no selection

---

## Error Handling

- errors we might expect would be 400, 404 or 500, either from the Node backend or rcAPI
- I tested these in development by:
  - using a malformed URL on the front & back ends to retrieve country names (for the select input)
  - requesting data for countries that don't exist in the API/malformed URL
  - disabling wifi and making a request to the back end which obviously can't contact rcAPI

---

## Known Issues

### Front end

- SearchForm component is used when the app first loads. It consists of the Select component and a submit button.
- NavSearchForm is used on our nav bar which appears after we have made our first search.
- NavSearchForm is a styled SearchForm, however:
  - in development, when saving code changes, NavSearchForm will move out of position
  - have to refresh to get it to 'behave'
  - should probably just implement a separate nav search component

---

## To Do

- Fix development issue with NavSearchForm styling on code save
- switch from CRA to Vite
- Deploy to Render.com
