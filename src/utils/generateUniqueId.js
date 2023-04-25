export const generateUniqueId = (existedIds = []) => {
  const idLength = 10
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const arrayId = new Array(idLength).fill(0)

  const id = arrayId
    .map(char => chars.charAt(Math.floor(Math.random() * chars.length)))
    .join('')

  if (existedIds?.includes(id)) return generateUniqueId(existedIds)

  existedIds?.push(id)
  return id
}
