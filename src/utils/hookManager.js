export const fnSet = (setHook) => {
  return (keyName, val) => setHook(prev => ({ ...prev, [keyName]: val }))
}
