// functions

async function getApi(link) {
  const result = await fetch(link)
    .then((response) => response.json())
    .then((data) => data);
  return result;
}

async function getBackend(link, methods) {
  const result = await fetch(link, {
    method: methods,

  })
    .then((response) => response.json())
    .then((data) => data);
  return result;
}
// await getBackend(songsLink, 'DELETE');

async function getBackendBody(info) {
  const result = await fetch('https://paul-proyect1887.herokuapp.com/user', {
    headers: {
      "Content-Type": "application/json"
    },
    method: 'POST',
    body: JSON.stringify(info),
  })
    .then((response) => response.json())
    .then((data) => data);
  return result;
}

export {
  getApi,
  getBackend,
  getBackendBody,
};
