export const addBlogSuccess = (blog) => {
  return {
    type: 'ADD_BLOG_SUCCESS',
    payload: blog,
  };
};

export const addBlog = (blog) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3030/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog),
      });
      const data = await response.json();
      dispatch(addBlogSuccess(data));
      return data; 
    } catch (error) {
      console.error('Error creating blog', error);
    }
  };
};
