/* global describe it */

import findWinner from '../game/lib/findWinner'
import chai from 'chai'
const expect = chai.expect

describe('findWinner', () => {
  it('should return the winner for a won game', () => {
    const won = [
      {textContent: 'X'}, {textContent: 'X'}, {textContent: 'X'},
      {textContent: 'X'}, {textContent: 'X'}, {textContent: 'X'},
      {textContent: 'X'}, {textContent: 'X'}, {textContent: 'X'}
    ]
    expect(findWinner(won)).to.equal('X')
  })
})
