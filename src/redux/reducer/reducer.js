let initialState = {
  contactList: [],
  // filteredList: []
  keyword: ""
};

function reducer(state=initialState, action) {
  const {type, payload} = action;

  switch(type){
    case "ADD_CONTACT":
      return{...state, contactList:[...state.contactList,{name: payload.name,phoneNumber: payload.phoneNumber}]}

    case "SEARCH_CONTACT":
      return{...state, keyword: payload.keyword}

    // case "SEARCH_CONTACT":
    //   const result = state.contactList.filter(person => person.name.includes(payload.searchName));
    //   return{...state, filteredList:[...result]}

    // case "SEARCH_BLANK":
    //   return{...state, filteredList:[]}
    default:
      return{...state}
  }
}

export default reducer;