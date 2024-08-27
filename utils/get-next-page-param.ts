export const getNextPageParam = (
  lastPageItems?: object[],
  allPages?: object[],
  limit?: number
) => {
  const lastPageItemsLength = lastPageItems?.length;
  const isEnd = lastPageItemsLength !== limit;
  const nextPage = isEnd ? undefined : allPages?.length || 0;
  return nextPage;
};

export default getNextPageParam;
