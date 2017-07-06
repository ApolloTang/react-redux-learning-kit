import _ from 'lodash';
import Action_myDomain from './actions';


const mapStoreToProps = (store, ownProps) => {
  const myDomain =  _.get(store, `myDomain`, {});

  // compute derive data here

  return {
    ownProps,
    myDomain
  }
};




const mapDispatchToProps = dispatch => ({
  dispatch_someAction(data) {
    dispatch( Action_myDomain.doSomthing( data ) );
  }
});






export {mapStoreToProps, mapDispatchToProps};
