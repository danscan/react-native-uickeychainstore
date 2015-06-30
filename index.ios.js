/**
 * @providesModule react-uickeychainstore
 */
let { KeychainManager } = require('NativeModules')

let Keychain = {
  // Sets the access group on the default keychain.
  setAccessGroup(accessGroup: string, callback?: ?(error: ?Error) => void): Promise {
    return new Promise((resolve, reject) => {
      KeychainManager.setAccessGroup(accessGroup, (error) => {
        if (error) {
          return reject(error)
        } 

        return resolve()
      })
    })
  },

  // Sets the service on the default keychain.
  setService(service: string, callback?: ?(error: ?Error) => void): Promise {
    return new Promise((resolve, reject) => {
      KeychainManager.setService(service, (error) => {
        if (error) {
          return reject(error)
        } 

        return resolve()
      })
    })
  },

  // Stores the values of `string` in `key`, returning a promise.
  setString(string: string, key: string, callback?: ?(error: ?Error) => void): Promise {
    return new Promise((resolve, reject) => {
      KeychainManager.setString(string, key, (error) => {
        if (error) {
          return reject(error)
        } 

        return resolve()
      })
    })
  },

  // Retrieves the value at `key`, returning a promise.
  stringForKey(key: string, callback?: ?(error: ?Error, result: ?string) => void): Promise {
    return new Promise((resolve, reject) => {
      KeychainManager.stringForKey(key, (error, result) => {
        if (error) {
          return reject(error)
        } 

        return resolve(result)
      })
    })
  }
}

module.exports = Keychain
