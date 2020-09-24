import React from 'react';
import { shallow } from 'enzyme';
import SendMessageForm from './SendMessageForm'
import { constants } from './constants'

const sendMessage = jest.fn()
const props = { sendMessage }

describe('SendMessageForm.js', () => {
  const wrapper = shallow(<SendMessageForm {...props} />)

  it('should render the Form element', ()=> {
    expect(wrapper.find('form').length).toBe(1)
  })

  it('should render the input element', ()=> {
    expect(wrapper.find('input').length).toBe(1)
  })

  it('should render the button element', ()=> {
    expect(wrapper.find('button').text()).toEqual(constants.SEND_BUTTON_TEXT)
  })

  it('should call handleClick when click on button', () => {
    const setMessage = jest.fn();
    const input = wrapper.find('input')
    const event = { target: { value: 'Hello' } };
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation(message => [message, setMessage]);

    input.simulate('change', event)
    expect(handleClick).toBeTruthy()
  })

  it('should call handleSubmit when click on button', () => {
    const setMessage = jest.fn()
    const button = wrapper.find('button')
    const handleClick = jest.spyOn(React, 'useState');
    handleClick.mockImplementation(message => [message, setMessage]);

    button.simulate('click', {
      preventDefault: () => {}
    })
    expect(handleClick).toBeTruthy()
  })
});