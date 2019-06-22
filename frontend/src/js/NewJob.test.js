import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import React from 'react';
import ReactDOM from 'react-dom';
import NewJob from './NewJob';
import { shallow } from 'enzyme';


describe('New Job', function () {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewJob />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should update state with changed input value', function() {
    const wrapper = shallow(<NewJob />),
      input = wrapper.find('#job-title');
    input.simulate("change", {target: {value: 'Admin', name: 'title'}})
    wrapper.update();
    expect(wrapper.instance().state.title).toBe('Admin');
  });
});