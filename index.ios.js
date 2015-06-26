/**
 * @providesModule Keychain
 */
'use strict';

var NativeModules = require('NativeModules')
var KeychainManager = NativeModules.RCTUICKeychainManager;

var Keychain = {
  setAccessGroup: function (accessGroup: string, callback?: ?(error: ?Error) => void): Promise {
    return new Promise((resolve, reject) => {
      KeychainManager.setAccessGroup(accessGroup, function (error) {
        if (error) {
          reject(convertError(error))
        } else {
          resolve()
        }
      })
    })
  },

  setService: function (service: string, callback?: ?(error: ?Error) => void): Promise {
    return new Promise((resolve, reject) => {
      KeychainManager.setService(service, function (error) {
        if (error) {
          reject(convertError(error))
        } else {
          resolve()
        }
      })
    })
  },

  setString: function (string: string, key: string, callback?: ?(error: ?Error) => void): Promise {
    return new Promise((resolve, reject) => {
      KeychainManager.setString(string, key, function (error) {
        if (error) {
          reject(convertError(error))
        } else {
          resolve()
        }
      })
    })
  },

  stringForKey: function (key: string, callback?: ?(error: ?Error, result: ?string) => void): Promise {
    return new Promise((resolve, reject) => {
      KeychainManager.stringForKey(key, function (error) {
        if (error) {
          reject(convertError(error))
        } else {
          resolve()
        }
      })
    })
  }
}

function convertError(error) {
  if (!error) {
    return null
  }

  var out = new Error(error.message)
  out.key = error.key

  return out
}

module.exports = Keychain
