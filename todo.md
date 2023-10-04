# Ideas

- initial ideas
  - name: kntripedia, went for Qntri!
  - tags:
    - the world at your fingertips
    - the world is only a click away
- styles
  - style it like the potential employers website, cute?
- fetch a list of countries from Node->countries api on refresh?
  - we will need to validate user input, best to already know what countries names are acceptable to the API?
- mad ideas that I won't have time to do:
  - an interactive 3D earth map/sphere/globe that you can interact with and rotate and click on a country to find out about it.
  - country comparison by population, area - this does seem well beyond requirements but would let me introduce graphs
    - you could still do it with a selection of pre picked countries for some stats to demo graphing - **IF TIME ALLOWS**

# To Do

- create icons
- validate the input on the frontend
- get the basic request to the backend working with a response - DONE
- create a readme that details how to set up, start and use the application
  - the use bit is essentially a user guide
- Lighthouse reports!
  - accessibility etc

# Next Commit

# Design Considerations

- The API provides two endpoints that seem to be what we're looking for. One requires the exact name to be provided, the other requires a partial name. Using the one that requires a partial name and inputting 'ireland,' I was confused to get back Great Britain. This is because the official name contains Northern Ireland. I also got back Ireland in this data.
  - this suggests we will have to allow the user to fill in some letters and then prompt them with the allowed values (i.e. specific name)
  - while partial matches might be nice to allow the user to see all countries that contain the string 'ire' for example, it does raise the issue of getting multiple items back in the response data.
- In terms of formulating text that we incorporate the data into, "Ireland has a population of X and a land area of Y", I think this is best done by the server? Better performance for end users in a browser or on a mobile.
- The 'easily ingested and understood by any person' requirement
  - Could we group related data into articles, e.g. international dialing code and country code top-level domain might be seen as related and could be grouped.
  - We could group geographic data: map link, area, landlocked, bordering countries, latlng, latlng of capital, capital
- another way to make the information easily ingested and understood might be to provide options to change how it is displayed on the screen
- we might provide options to turn off fetching or displaying certain info. These would be stored in local storage as we aren't using authentication.
- we will want to provide all of the information, even the more obscure, to me, stuff like ccn3 - CCN3 might be exactly the information that someone wants
  - I think we should avoid using CCN3 as a label for our 3-digit country code - "numeric country code" might be okay, but a little long
    - might also provide a 'more info' icon
    - we might have an option to toggle between a longer name and a shorter label - it can be frustrating to be scrolling around and keep coming across, for example, something like CCN3 and you end up having to look up what it means several times
- may want to provide copy to clipboard for some values, or, indeed for all values - although this is scope creep
