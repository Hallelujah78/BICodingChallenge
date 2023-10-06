# Broad overview of what I'm actually doing/decisions

- We have limited the user input by using a select input
  **IMPLEMENT THE SELECT INPUT**

- We return all of the data to the frontend
  - we loosely categorize and group the data together and display that related data together in a container.
    - for example, translations of the official & common name can be grouped together
      **CATEGORIZE AND GROUP DATA**
- For the currencies property:
  - currencies in the json references an object with dynamic keys
  - in our responseObject, currencies will be an array of objects
  - can we take the object referenced by 'EUR', add a property to it, 'icc' for ISO currency code, and set the value of icc to 'EUR', then add it to our array of objects
- we will NOT bake tooltips or other text into our response from Node to the frontend

# Steps Taken

## Day 1

- Refactored existing node server and frontend for this project
- wrote a simple frontend where a user could input a country
- Wrote code in backend to fetch from rcAPI and got the response
- Sent the response to the frontend
- displayed the population of that country in a paragraph

## Day 2

- deep investigation of response from rcAPI

## Day 3

- verified the json data in terms of
  - the number of keys each country has (26-35 keys)
  - for countries with 35 keys, I verified that they had identical keys
    - added keys to array, joined, and created md5 hash of the string and compared hashes
    - don't know why I did it this way, md5 hash sounds cool
- created an object on the backend that we can populate with our response data
  - used wikipedia entry for Ireland to decide how to categorize the data
- started to fill out default values and structure for our responseObject
