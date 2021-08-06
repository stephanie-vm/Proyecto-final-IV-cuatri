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

async function getBackendBody(link, methods, info) {
  const result = await fetch(link, {
    method: methods,
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
