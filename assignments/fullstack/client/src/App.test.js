import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { constants } from './constants'

describe('App.js', () => {
  const wrapper = shallow(<App />)
  it('should render the title as Tic Tac Toe', ()=> {
    expect(wrapper.find('h1').text()).toBe(constants.APP_TITLE)
  })
});
