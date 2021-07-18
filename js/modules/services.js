// functions
async function getApi(link) {
  try {
    const result = await fetch(link)
      .then((response) => response.json())
      .then((data) => data);
    return result;
  } catch (error) {
    console.log(error);
  }
}
/*async function getApi(link) {
  const result = await fetch(link)
    .then((response) => response.json())
    .then((data) => data);
  return result;
}*/

export {
  getApi,
}
