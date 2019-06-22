import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Job from './Job';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('Job', function () {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Job title="Admin" location="Melbourne" description="Some description"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should update state on click', function() {
    const wrapper = shallow(<Job title="Admin" location="Melbourne" description="Some description"/>),
      heading = wrapper.find('.jobs__title').first(),
      prevIsCollapsed = wrapper.instance().state.isCollapsed;

    heading.simulate("click");
    wrapper.update();
    expect(wrapper.instance().state.isCollapsed).toBe(!prevIsCollapsed);
  })

});