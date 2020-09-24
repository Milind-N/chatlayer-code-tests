import React from 'react';
import { shallow } from 'enzyme';
import MessageList from './MessageList'

const DUMMY_DATA = [
  {
    senderId: "Bot",
    text: "who'll win?"
  },
  {
    senderId: "User",
    text: "who'll win?"
  }
]

describe('MessageList.js', () => {
  const wrapper = shallow(<MessageList messages={DUMMY_DATA} />)

  it('should render the div with who\'ll win?', ()=> {
    expect(
      wrapper.find('div')
        .at(2)
        .text()
      ).toBe(DUMMY_DATA[0]['text'])
  })

  it('should render the div with who\'ll win?', ()=> {
    expect(
      wrapper.find('div')
        .at(4)
        .text()
      ).toBe(DUMMY_DATA[1]['text'])
  })
});