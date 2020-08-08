import React from 'react';
import { shallow } from 'enzyme';

import AppHeader from 'components/shared/AppHeader';

describe('AppHeader', () => {
  it('renders all links', () => {
    const header = shallow(<AppHeader />);
    expect(header.find('li')).toHaveLength(2);
  });

  it('<AppHeader /> should render list of navigation links', () => {
    const header = shallow(<AppHeader />);
    expect(header).toMatchSnapshot();
  });
});
