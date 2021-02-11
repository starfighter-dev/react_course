console.clear()

// People dropping off a form (Action Creators)
const createPolicy = (name, amount) => {
  return { // Action
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  }
}

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  }
}

const createClaim = (name, amount) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amount: amount
    }
  }
}

// Reducers - departments
const claimsHistory = (oldListofClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // we care!
    return [...oldListOfClaims, action.payload] // make a new array, and stick this on the end
    
    // If changing in reducers you want to return a new object - don't modify existing - refs?
  }
  
  // We don't care
  return oldListofClaims;
}

const accounting = (moneyBag = 100, action) => {
  if ( action.type === 'CREATE_CLAIM') {
    return moneyBag - action.payload.amount
  }
  if ( action.type === 'CREATE_POLICY') {
    return moneyBag + action.payload.amount
  }
  return moneyBag
}

const policies = (listOfPolicies = [], action) => {
  if ( action.type === 'CREATE_POLICY') {
    return [ ...listOfPolicies, action.payload.name ]
  }
  if ( action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name)
  }
  return listOfPolicies
}

// Redux follows
const {
  createStore, combineReducers
} = Redux;

const ourDepts = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
})

// This is the main thing?
const store = createStore(ourDepts)

const action = createPolicy('Martin',50)

store.dispatch(action)

console.log( store.getState() )


