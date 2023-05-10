const paginate = (followers) => {
  const itemsPerPage = 10;

  console.log(itemsPerPage);
  const pages = Math.ceil(followers.length / itemsPerPage);

  // new array with pages amount array
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  return newFollowers;
};

export default paginate;
