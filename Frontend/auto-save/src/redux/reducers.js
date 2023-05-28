const initialState = {
  blogs: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BLOGS_SUCCESS':
      return {
        ...state,
        blogs: action.payload,
      };
    case 'ADD_BLOG_SUCCESS':
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    default:
      return state;
  }
};
export default blogReducer;
