/**
 * @providesModule Keychain
 */
'use strict';

var NativeModules = require('NativeModules')
var KeychainManager = NativeModules.RCTUICKeychainManager;

var Keychain = {
  // Sets the access group on the default keychain.
  setAccessGroup: function (accessGroup: string, callback?: ?(error: ?Error) => void): Promise {
    return new Promise((resolve, reject) => {
      KeychainManager.setAccessGroup(accessGroup, function (error) {
        if (error) {
          reject(error)
        } else {
          resolve()
        }
      })
    })
  },

  // Sets the service on the default keychain.
  setService: function (service: string, callback?: ?(error: ?Error) => void): Promise {
    return new Promise((resolve, reject) => {
      KeychainManager.setService(service, function (error) {
        if (error) {
          reject(error)
        } else {
          resolve()
        }
      })
    })
  },

  // Stores the values of `string` in `key`, returning a promise.
  setString: function (string: string, key: string, callback?: ?(error: ?Error) => void): Promise {
    return new Promise((resolve, reject) => {
      KeychainManager.setString(string, key, function (error) {
        if (error) {
          reject(error)
        } else {
          resolve()
        }
      })
    })
  },

  // Retrieves the value at `key`, returning a promise.
  stringForKey: function (key: string, callback?: ?(error: ?Error, result: ?string) => void): Promise {
    return new Promise((resolve, reject) => {
      KeychainManager.stringForKey(key, function (error) {
        if (error) {
          reject(error)
        } else {
          resolve()
        }
      })
    })
  }
}

module.exports = Keychain
