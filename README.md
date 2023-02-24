Ambient Data Logger
===================

Collect and process wireless ambient data packets, writing specific properties to log files.


Quick Start
-----------

Clone this repository, install package dependencies with `npm install`,  and then from the root folder run at any time:

    npm start

__ambient-data-logger__ will indiscriminately accept UDP __raddec__ packets on 0.0.0.0:50001 and write comma-separated values (CSV) data to logs/dynamb-YYMMDD-HHMMSS.csv and logs/raddec-YYMMDD-HHMMSS.csv.

See the [reelyActive Developers Cheatsheet](https://reelyactive.github.io/diy/cheatsheet/) to learn more about the __raddec__ and __dynamb__ data structures.


Supported Listener Interfaces
-----------------------------

__ambient-data-tds__ can interface with wireless infrastructure via any of the __barnowl-x__ modules, which can be installed on-demand, as indicated below.

### barnowl-aruba

To receive data from Aruba APs, install the [barnowl-aruba](https://github.com/reelyactive/barnowl-aruba) module with the command `npm install barnowl-aruba`, and then from the root folder run at any time:

    npm run aruba

For debugging, instead run the script `npm run aruba-verbose`.

### barnowl-minew

To receive data from Minew gateways, install the [barnowl-minew](https://github.com/reelyactive/barnowl-minew) module with the command `npm install barnowl-minew`, and then from the root folder run at any time:

    npm run minew

For debugging, instead run the script `npm run minew-verbose`.


Configuration
-------------

Edit the files in the /config folder as required for the data collection.


Contributing
------------

Discover [how to contribute](CONTRIBUTING.md) to this open source project which upholds a standard [code of conduct](CODE_OF_CONDUCT.md).


Security
--------

Consult our [security policy](SECURITY.md) for best practices using this open source software and to report vulnerabilities.

[![Known Vulnerabilities](https://snyk.io/test/github/reelyactive/ambient-data-logger/badge.svg)](https://snyk.io/test/github/reelyactive/ambient-data-logger)


License
-------

MIT License

Copyright (c) 2022 [reelyActive](https://www.reelyactive.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.
