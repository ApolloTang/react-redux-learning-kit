import myDomain from 'my-app/containers/my-domain/actions-names';

const symbols = [
  ...myDomain,
].reduce((acc, eventName) => ({
    ...acc,
    [`${eventName}`]: acc[eventName] ? duplicateEventNameError(eventName) : Symbol.for(eventName)
}), {});

function duplicateEventNameError (eventName) {
    throw new Error(`Event ${eventName} already exists`);
}

export default symbols;

