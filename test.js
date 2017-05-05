'use strict'

const nodeMercuryParser = require('./index.js')
const assert = require('assert');
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const expect = chai.expect
const should = require('chai').should();


nodeMercuryParser.init(process.env.MERCURY_API_KEY)

nodeMercuryParser.get('http://www.cnn.com/2017/05/03/politics/donald-trump-economy/index.html')

describe('Node mercury parser API response', function() {
  let response = nodeMercuryParser.get('http://www.cnn.com/2017/05/03/politics/donald-trump-economy/index.html')

  it('should have a content property', function() {
    return expect(Promise.resolve(response)).to.eventually.have.property("content");
  })

  it('should have a title property', function() {
    return expect(Promise.resolve(response)).to.eventually.have.property("title");
  })

  it('should have an author property', function() {
    return expect(Promise.resolve(response)).to.eventually.have.property("author");
  })

  it('should have a date published property', function() {
    return expect(Promise.resolve(response)).to.eventually.have.property("date_published");
  })

  it('should have a lead image url property', function() {
    return expect(Promise.resolve(response)).to.eventually.have.property("lead_image_url");
  })

  it('should have a dek property', function() {
    return expect(Promise.resolve(response)).to.eventually.have.property("dek");
  })

  it('should have a next page url property', function() {
    return expect(Promise.resolve(response)).to.eventually.have.property("next_page_url");
  })

  it('should have a url property', function() {
    return expect(Promise.resolve(response)).to.eventually.have.property("url");
  })

  it('should have a domain property', function() {
    return expect(Promise.resolve(response)).to.eventually.have.property("domain");
  })

  it('should have an excerpt property', function() {
    return expect(Promise.resolve(response)).to.eventually.have.property("excerpt");
  })

  it('should have a word count property', function() {
    return expect(Promise.resolve(response)).to.eventually.have.property("word_count");
  })

  it('should have a direction property', function() {
    return expect(Promise.resolve(response)).to.eventually.have.property("direction");
  })

  it('should have a total pages property', function() {
    return expect(Promise.resolve(response)).to.eventually.have.property("total_pages");
  })

  it('should have a rendered pages property', function() {
    return expect(Promise.resolve(response)).to.eventually.have.property("rendered_pages");
  })
})
