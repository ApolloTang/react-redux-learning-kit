import _ from 'lodash';
import c from 'root/actions-names';

const Action_fooBar = {
  doSomthing(data) {

    // compute data and create payload here

    const _id = _.uniqueId();
    return {
      type: c[`myDomain__doSomthing`],
      payload: {
        id: _id,
        data: `foo bar ${data}`
      }
    }
  },
};

export default Action_fooBar;
