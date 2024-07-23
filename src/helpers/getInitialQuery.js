const getInitialQuery = (searchParams) => {
  const query = {}
  const search = searchParams.get("search")
  const category = searchParams.get("category")

  if (search) query.search = search
  if (category) query.category = category

  return query
}

export { getInitialQuery }