// functions

async function getApi(link) {
  const result = await fetch(link)
    .then((response) => response.json())
    .then((data) => data);
  return result;
}

async function getBackend(methodType, url) {
  const result = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: methodType,
  })
    .then((response) => response.json())
    .then((data) => data);
  return result;
}
// await getBackend(songsLink, 'DELETE');

async function getBackendBody(info, methodType, url) {
  const result = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: methodType,
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
