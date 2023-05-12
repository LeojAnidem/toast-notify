export const fnSet = (setHook) => {
  return (keyName, val) => setHook(prev => ({ ...prev, [keyName]: val }))
}

export const fnSetDeep = (setHook) => {
  return (parentKeyName, keyName, val) => setHook(prev => ({
    ...prev,
    [parentKeyName]: {
      ...prev[parentKeyName],
      [keyName]: val
    }
  }))
}

export const fnOneSetDeep = (setHook, parentKeyName) => {
  return (keyName, val) => setHook(prev => ({
    ...prev,
    [parentKeyName]: {
      ...prev[parentKeyName],
      [keyName]: val
    }
  }))
}
