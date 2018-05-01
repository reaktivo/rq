# [rq](https://github.com/reaktivo/rq/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/reaktivo/rq/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/@reaktivo/rq.svg?style=flat)](https://www.npmjs.com/package/@reaktivo/rq) [![Coverage Status](https://img.shields.io/coveralls/@reaktivo/reaktivo/rq/master.svg?style=flat)](https://coveralls.io/github/@reaktivo/reaktivo/rq?branch=master) [![CircleCI Status](https://circleci.com/gh/@reaktivo/rq.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/reaktivo/rq) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/reaktivo/rq/compare)

rq is a jq inspired command-line swiss-army tool

## Installation

```sh
npm install -g @reaktivo/rq
```

## Usage

```sh
rq 'fetch`https://httpbin.org/ip`.then(res => res.json()).then(res => res.origin)'
77.173.138.54
```

Out of the box, **rq** allows you to safely evaluate
javascript with the following globals exposed:

* [x] `fetch`: A browser compatible fetch implementation
* [ ] Rxjs Operators: `map`, `filter`, `switchMap`, etc

## Development

Testing is done via the [tape](https://github.com/substack/tape) and
is intended to be simple and straight to the point.

```sh
npm test
```

## Acknowledgements

I'm thankful to the authors of the following related projects which server as inspiration to rq:

* [jq](https://stedolan.github.io/jq/)
* [gron](https://github.com/tomnomnom/gron)

## License

rq is open source software [licensed as MIT](https://github.com/reaktivo/rq/blob/master/LICENSE).
