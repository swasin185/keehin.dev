export default eventHandler(async (event) => {
  const query = getQuery(event);
  let isAuthen = query.username ? true : false;
  return { isAuthen: isAuthen };
});
