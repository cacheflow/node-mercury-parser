# Node-Mercury-Parser

## Overview
A promise-based Node wrapper around the [Mercury web parser] API.
## Installation
Make sure you obtain an API key from https://mercury.postlight.com/web-parser/.

Install the package with:

```
npm install node-mercury-parser --save
```
## How to use
```
const nodeMercuryParser = require('node-mercury-parser')
nodeMercuryParser.init(API_KEY)
nodeMercuryParser.get('http://www.cnn.com/2017/02/07/us/harambe-cheeto-trnd/')
  .then(data => res)
  .catch(err => err)
```
## Available attributes

The API response exposes the following attributes, which allow you to access specific
data from your HTML page and can be accessed like: 

```
  nodeMercuryParser.title
  nodeMercuryParser.content
  nodeMercuryParser.date_published
  nodeMercuryParser.lead_image_url
  nodeMercuryParser.dek
  nodeMercuryParser.url
  nodeMercuryParser.domain
  nodeMercuryParser.excerpt
  nodeMercuryParser.word_count
  nodeMercuryParser.direction
  nodeMercuryParser.total_pages
  nodeMercuryParser.rendered_pages
  nodeMercuryParser.next_page_url
```
## For more information about the underlying API visit
[Mercury web parser](https://mercury.postlight.com/web-parser/)
