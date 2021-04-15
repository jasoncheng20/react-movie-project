export const getData = async url => {
  const result = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  const data = await result.json()
  return data
}
