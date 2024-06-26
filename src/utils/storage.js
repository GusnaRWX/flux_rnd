/**
 *
 * Configure Local Storage
 *
 * @param {*} name
 * @param {*} value
 * @param {*} action
 */
const configureStorage = (name, value, action = 'set') => {
  if (action === 'set') {
    window.localStorage.setItem(name, value)
  } else {
    window.localStorage.removeItem(name)
  }
}

/**
 *
 * Set Local Storage
 *
 * @param {*} storages
 */
export const setStorages = (storage) => {
  storage.map((item) => configureStorage(item.name, item.value))
}

/**
 *
 * Clear Local Storage
 *
 * @param {*} storages
 */
export const clearStorages = (storage) => {
  storage.map((item) => configureStorage(item, null, 'remove'))
}

/**
 *
 * Get Local Storage
 *
 * @param {*} storage
 * @returns
 */
export const getStorages = (storage) => {
  const store = window.localStorage.getItem(storage)

  if (typeof storage !== 'undefined') {
    return store
  }

  return null
}
