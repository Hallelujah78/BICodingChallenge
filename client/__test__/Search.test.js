import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "../src/components/Search.js";

// test("", async () => {
//   render(<Search />);

//   const logos = await screen.getAllByAltText("country insights logo");
//   expect(logos).toHaveLength(2);
// });

{
  /*
Test Writing Process
* Pick one component to test all by itself
    - Search.js
* Make a test file for the component if one does not exist
    - done
* decide what the important parts of the component are
    - there's is a custom hook that fetches data
    - there is isLoading
    - the user can interact with the Select to select an option
    - when the user selects an option, setCountry is called with argument selectedOption.value
* Write a test to make sure each part works as expected
* run tests at the command line
*/
}
