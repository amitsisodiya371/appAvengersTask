export const fetchBlogsSuccess = (blogs) => {
  return {
    type: 'FETCH_BLOGS_SUCCESS',
    payload: blogs,
  };
};

export const addBlogSuccess = (blog) => {
  return {
    type: 'ADD_BLOG_SUCCESS',
    payload: blog,
  };
};

export const fetchBlogs = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3030/api/blogs');
      const data = await response.json();
      dispatch(fetchBlogsSuccess(data));
    } catch (error) {
      console.error('Error fetching blogs', error);
    }
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
    } catch (error) {
      console.error('Error creating blog', error);
    }
  };
};
