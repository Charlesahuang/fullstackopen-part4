//4.3
const dummy = (blogs) => {
  return 1;
};

//4.4
const totalLikes = (e) => {
  return e[0].likes;
};

//4.5
const favoriteBlog = (blogList) => {
  if (blogList.length === 0) {
    return null;
  }

  let maxLikes = -1;
  let maxLikesBlog = null;

  for (const blog of blogList) {
    if (blog.likes > maxLikes) {
      // 如果当前博客的likes大于当前最大likes
      maxLikes = blog.likes; // 更新最大likes
      maxLikesBlog = {
        title: blog.title,
        author: blog.author,
        likes: blog.likes,
      }; // 更新最大likes对应的博客对象
    }
  }

  return maxLikesBlog;
};

//4.6
const mostBlog = (blogs) => {
  const authorCounts = {};
  for (const blog of blogs) {
    const author = blog.author;
    if (authorCounts[author]) {
      authorCounts[author]++;
    } else {
      authorCounts[author] = 1;
    }
  }
  let topAuthor = "";
  let maxBlogs = 0;

  for (const author in authorCounts) {
    if (authorCounts[author] > maxBlogs) {
      topAuthor = author;
      maxBlogs = authorCounts[author];
    }
  }

  return {
    author: topAuthor,
    blogs: maxBlogs,
  };
};

//4.7
const mostLikes = (blogs) => {
  const authorCounts = {};
  for (const blog of blogs) {
    const author = blog.author;
    if (authorCounts[author]) {
      authorCounts[author] = authorCounts[author] + blog.likes;
    } else {
      authorCounts[author] = blog.likes;
    }
  }
  let topAuthor = "";
  let maxLikes = 0;

  for (const author in authorCounts) {
    if (authorCounts[author] > maxLikes) {
      topAuthor = author;
      maxLikes = authorCounts[author];
    }
  }

  return {
    author: topAuthor,
    likes: maxLikes,
  };
};

module.exports = { dummy, totalLikes, favoriteBlog, mostBlog, mostLikes };
