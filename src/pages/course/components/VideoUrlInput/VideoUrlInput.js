import React, { Component, PropTypes } from 'react';

export class VideoUrlInput extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.field !== nextProps.field;
  }

  render() {
    const { field, ...rest } = this.props;
    return <input {...field} {...rest} />;
  }
}

VideoUrlInput.propTypes = {
  field: PropTypes.object.isRequired,
};

export default VideoUrlInput;
