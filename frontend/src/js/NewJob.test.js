import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react';
import NewJob from './NewJob';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';


describe('New Job', function () {
  it('should renders correctly', () => {
    const tree = renderer.create(<NewJob />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should update state with changed input value', function() {
    const wrapper = shallow(<NewJob />),
      input = wrapper.find('#job-title');
    input.simulate("change", {target: {value: 'Admin', name: 'title'}})
    wrapper.update();
    expect(wrapper.instance().state.title).toBe('Admin');
  });
});