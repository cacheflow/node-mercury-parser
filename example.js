'use strict'

const nodeMercuryParser = require('./index')

nodeMercuryParser.init(process.env.MERCURY_API_KEY)

let response = nodeMercuryParser.get('https://www.bloomberg.com/news/features/2017-05-02/trump-s-trade-warrior-is-the-most-unpopular-economist-in-the-class')
response.then(res => console.log(res))
