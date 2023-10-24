import { act, renderHook } from "@testing-library/react";
import mockAxios from "jest-mock-axios";
import Search from "../src/components/Search.js";
import "whatwg-fetch";

afterAll(() => {
  mockAxios.reset();
});

it("Search should get data from the server", () => {
  let catchFn = jest.fn(),
    thenFn = jest.fn();

  // using the component, which should make a server response
  let clientMessage = "client is saying hello!";

  Search(clientMessage).then(thenFn).catch(catchFn);

  // since `post` method is a spy, we can check if the server request was correct
  // a) the correct method was used (post)
  // b) went to the correct web service URL ('/web-service-url/')
  // c) if the payload was correct ('client is saying hello!')
  expect(mockAxios.post).toHaveBeenCalledWith("/web-service-url/", {
    data: clientMessage,
  });

  // simulating a server response
  let responseObj = { data: "server says hello!" };
  mockAxios.mockResponse(responseObj);

  // checking the `then` spy has been called and if the
  // response from the server was converted to upper case
  expect(thenFn).toHaveBeenCalledWith("server says hello!");

  // catch should not have been called
  expect(catchFn).not.toHaveBeenCalled();
});
