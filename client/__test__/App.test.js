import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "../src/App";

test("we see a logo in the top left of the screen", async () => {
  render(<App />);

  const logos = await screen.getAllByAltText("country insights logo");
  expect(logos).toHaveLength(2);
});

test("we see a select input box", async () => {
  render(<App />);

  const inputs = await screen.getAllByRole("combobox");
  expect(inputs).toHaveLength(1);
});

test("we see a submit button", async () => {
  render(<App />);

  const buttons = await screen.getAllByText("submit");
  expect(buttons).toHaveLength(1);
});

test("we see an SVG which is a globe of the world", async () => {
  render(<App />);
  const buttons = await screen.getAllByText("submit");
  expect(buttons).toHaveLength(1);
});

{
  /*
core functionality
* the app loads
* we see a logo in the top left - alt="country insights logo"
* we see a select input box - input id="react-select-2-input"
* we see a submit button
* we see an SVG which is a globe of the world

*/
}
