import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import { constants } from './constants'

describe('App.js', () => {
  const wrapper = shallow(<App />)
  it('should render the title as Tic Tac Toe', ()=> {
    expect(wrapper.find('h1').text()).toBe(constants.APP_TITLE)
  })

  it('should render MessageList component', ()=> {
    expect(wrapper.find(MessageList).length).toEqual(1)
  })

  it('should render SendMessageForm component', ()=> {
    expect(wrapper.find(SendMessageForm).length).toEqual(1)
  })
});
