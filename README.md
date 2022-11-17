# morse-code-translator

## Description
A Morse Code converter which converts letters, numbers and symbols in real time. Built using Javascript, HTML and SCSS, jest for testing.
Provides functionality to convert a message to and from Morse Code whilst providing instant feedback to the user.

![morsecodePreview](https://user-images.githubusercontent.com/93106408/201288736-db035b55-3dbe-4063-ae89-7aca0c1e94fc.JPG)

## Setup
Clone this repository and open the index.html file.

Alternatively hosted [here](https://morsecode-translator-app.netlify.app)

## Approach

I began with creating the morse code converter functionality by creating a dictionary object containing the key-value pairs for each letter, number and symbol and its corresponding morse code translation. I grab user input from the ```<input>``` element and split it into an array, where the translate function maps each character to the matching value in the dictionary object. If the mode is changed to decode, the dictionary object is reversed so the morse code can be used as a key in the object and retrieve the decoded message. 

## Struggles

The main struggle I encountered when developing the application was dealing with edge cases in the translation which were not translating properly. These required changes to the way I handled splitting the input string into an array and the way I stored values in the dictionary object. This led to me developing unit tests for the translate functionality with Jest, to ensure I was outputting the correct translation and it was consistent with any changes I was making to other parts of the application. 

## Things I would do differently

Due to time constraints developing the project, there are some changes I would make to improve the quality of the application.  I would ensure when the mode is changed that the message in the input is stored and translated back and forth instead of being deleted, which may be useful when making changes to the message. I would also fix errors with the helper text in each input and output box which are displayed incorrectly after changing the mode.
