export const getPagination = (page, size) => {
  const limit = size ? size : 3;
  const offset = page ? page : 0;

  return { limit, offset };
};
