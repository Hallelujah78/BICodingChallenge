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
- Add search functionality on the response - beyond scope
  - letting user quickly search for exactly what they want would be cool
- different views
  - tabular form
  - group data

# To Do

- create icons
- validate the input on the frontend
- get the basic request to the backend working with a response - DONE
- create a readme that details how to set up, start and use the application
  - the use bit is essentially a user guide
- Lighthouse reports!
  - accessibility etc
- ~~move react-scripts to dev deps~~ - DONE
- handle the fact (front end informational) that users may expect to be able to retrieve information about certain countries (england, scotland, wales) but those countries may not have their own separate entries
- programmatically check json data for uniformity - do some countries have keys that other countries don't have - eg postalCode
- rearrange data on backend before sending to front
  - will also want to add postalCode and other fields for all countries where those fields don't exist for uniformity

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
- will have to destructure and massage response from rcAPI on the backend before sending to front end

### What is a country?

- I find it bizarre that England, Scotland and Wales are not in the restcountries API (rcAPI) by themselves.

  - I feel users would have an expectation that Scotland is a country by itself. On the other hand, do we provide the information as is from rcAPI? I think we do provide it as is. Technically they are not independent, well more than technically.
  - there are no entries for England, Scotland and Wales. When retrieving all countries or all countries that are not independent and searching the raw text for these names, they don't appear at all!
  - ~~it's likely that England, Scotland and Wales have full nested data in the API and it is also extremely likely that they are not alone in this respect - ie there will be plenty of countries that are not independent and so will have nested data under a larger state/kingdom, confederation or whatever~~
    - ~~if no breakdown of data is provided for places like Wales, Scotland, then we will have to just provide UK stats~~
    - There is no breakdown of data for scotland, wales, england when fetching united kingdom as exact name from rcAPI
  - ~~consulting google, Scotland is a country but it's not a country, or at least not independent~~

- The size of data being returned for a single country is about 4.8kb
  - 10,000 requests is about 48 megabytes, not that much
  - for example AWS customers receive 100GB data transfer out to the internet per month for free, or about 20 million requests per month. Data cost is not a factor yet.
  - conclusion: we can send all of the data for each request to the frontend and filter it on the frontend
- UN member, the field unMember in the json: see Vatican City, it is a member but more complex
- providing more information by using tooltips could be the way to go to keep the interface clean
  - eg https://www.npmjs.com/package/react-tooltip#demo this looks good
- **IMPORTANT** the postalCode key is absent from some responses completely, example, Ireland. This implies that there could be other fields that exist on some responses for some countries and not for other countries. Will have to handle properties not existing when trying to access
  - further investigation: keys per country vary. Some have as little as 26, with others having up to 35. Will create an object on backend with keys and structure and add our data in there from the response if it exists.
- make sure we can display different translations in our font
-

## Useful Resources

- list of response fields and description of same: https://www.educative.io/courses/get-started-with-the-rest-countries-api-in-javascript/an-overview-of-the-rest-countries-api
- note, the description of the status field is still not that useful but I have to assume it relates to independence/sovereignty
- emoji code for flags, may not need this:
  - function getFlagEmoji(countryCode) {
    return [...countryCode.toUpperCase()].map(char =>
    String.fromCodePoint(127397 + char.charCodeAt())
    ).reduce((a, b) => `${a}${b}`);
    }

## What we know about our response from rcAPI

- the number of keys varies
  - some countries won't have a fifa code, a postalCode etc
  - the max number of fields is 35
  - for countries with 35 keys, the keys are all identical
    - there is not a situation where a country is missing a key, but has an extra key that other countries don't have, thus maintaining a total key count of 35
- the name key:
  - name.common and name.official should equal name.nativeName.eng.common and name.nativeName.eng.official
    - I think to render this info we ignore nativeName.eng in all cases and just render name.common and name.official

### Issues I've identified with the response

- may be out of date
  - Ireland has a postal code system
- International Direct Dialing
  - the idd key references an object
  - this object has root and suffix keys
    - note that the suffixes list for the USA contains area codes
    - the root key for the USA contains the actual country code '1'
    - the suffix array for Ireland contains '53'
    - the root key for Ireland contains +3
    - the issue is the actual country code for ireland is 353
  - **_WARN USERS_**
    - These international direct dialing codes may contain area codes! North America (Canada and The United States) share the international code of +1. I don't really have the ability to go through the data and check and fix this for each country.
