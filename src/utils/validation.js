import _ from 'lodash';

const join = (rules) => (value, data) => rules.map(rule => rule(value, data))
                                              .filter(error => !!error)[0];

export function email(value) {
  if (!_.isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
}

export function required(value) {
  if (_.isEmpty(value)) {
    return 'Required';
  }
}


export function createValidator(rules) {
  return (data = {}) => {
    const errors = {};
    Object.keys(rules).forEach((key) => {
      const rule = join([].concat(rules[key]));
      const error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
}
