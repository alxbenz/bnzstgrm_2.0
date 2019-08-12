import React, { PureComponent } from 'react';
import { TextProps } from './Text.types';

import { connect } from 'react-redux';
import { someAction } from '../redux/actions';

class Text extends PureComponent<TextProps> {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

// Map Redux State To Props
const mapStateToProps = () => {
  return {};
};

// Map Redux Actions To Props
const mapDispatchToProps = {
  action: someAction
};

// Connect Props and Dispatch to Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Text);