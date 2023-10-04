# Ideas

- initial ideas
  - name: kntripedia, went for Qntri!
  - tags:
    - the world at your fingertips
    - the world is only a click away
- styles

  - style it like the potential employers website, cute?

- fetch a list of countries from Node->countries api on refresh?

# To Do

- create icons
- validate the input on the frontend
- get the basic request to the backend working with a response

# Next Commit

Refactoring code from Mern Jobify project. Most of it has to go but it's acting as a good template. At this point we have a countryController that we can use to fetch country information from restcountries.com and return it to the user. We have a front end of sorts that the user can enter a country into, hit submit, and get back information about that country.

# Design Considerations

- The API provides two endpoints that seem to be what we're looking for. One requires the exact name to be provided, the other requires a partial name. Using the one that requires a partial name and inputting 'ireland,' I was confused to get back Great Britain. This is because the official name contains Northern Ireland. I also got back Ireland in this data.
  - this suggests we will have to allow the user to fill in some letters and then prompt them with the allowed values (i.e. specific name)
  - while partial matches might be nice to allow the user to see all countries that contain the string 'ire' for example, it does raise the issue of getting multiple items back in the response data.
