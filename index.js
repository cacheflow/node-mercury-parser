'use strict'

const axios = require('axios')
const endpoint =  'https://mercury.postlight.com/parser?url='
const apiInfo = {}

const nodeMercuryParser = {url: "", apiKey: ""}

nodeMercuryParser.init = (apiKey) => {
  if(!apiKey) {
    throw new Error("Looks like you forgot to add an API key. Make sure to add it.")
  }
  else {
    this.apiKey = apiKey
  }
}

nodeMercuryParser.get = (url) => {
  if(!url) {
    throw new Error("Looks like you forgot to add a URL. Make sure to add it.")
  }
  axios.defaults.headers.common['x-api-key'] = this.apiKey
  return axios.get(`${endpoint}${encodeURIComponent(url)}`).then(res => res.data).catch(err => err )
}

module.exports = nodeMercuryParser
