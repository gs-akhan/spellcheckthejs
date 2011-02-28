# Spellcheck the JS

This small script helps Javascript developers spellcheck their strings.

## Installation

Make sure you have Node.js and npm properly set up in your `PATH`. Simply install the `speller` and `uglify-js` libraries from `npm`:

	npm install speller uglify-js

## Usage

Invoke the `spellcheckthejs.js` script as follows:

	node spellcheckthejs.js yourscript.js

The script will print the corrected version of the Javascript source `yourscript.js` to `stdout`.

If you want to, you can provide an extra parameter with the training data for the spellchecker:

	node spellcheckthejs.js yourscript.js data.txt

## To Do

* Cleanup
* Make this a proper module
* Make it installable via `npm`
* Inspect other object types beyond `strings`

## License

(The MIT License)

Copyright © 2011 Rui Lopes

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the ‘Software’), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED ‘AS IS’, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.