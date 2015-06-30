//
//  RCTUICKeychainStoreManager.m
//  RCTUICKeychainStore
//
//  Created by Justin Makaila on 6/26/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "RCTUICKeychainStoreManager.h"
#import "RCTBridge.h"

#import "UICKeyChainStore.h"

@interface RCTUICKeychainStoreManager () <RCTBridgeModule>

@property (nullable, copy, nonatomic) NSString *accessGroup;
@property (nullable, copy, nonatomic) NSString *service;

@end

@implementation RCTUICKeychainStoreManager

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(setAccessGroup:(NSString *)accessGroup callback:(RCTResponseSenderBlock)callback) {
  self.accessGroup = accessGroup;
  callback(@[[NSNull null], accessGroup]);
}

RCT_EXPORT_METHOD(setService:(NSString *)service callback:(RCTResponseSenderBlock)callback) {
  self.service = service;
  callback(@[[NSNull null], service]);
}

RCT_EXPORT_METHOD(setString:(NSString *)string forKey:(NSString *)key callback:(RCTResponseSenderBlock)callback) {
  [self setString:string forKey:key service:self.service accessGroup:self.accessGroup callback:callback];
}


RCT_EXPORT_METHOD(setString:(NSString *)string forKey:(NSString *)key service:(NSString *)service accessGroup:(NSString *)accessGroup callback:(RCTResponseSenderBlock)callback) {
  BOOL success = [UICKeyChainStore setString:string forKey:key service:service accessGroup:accessGroup];
  
  callback(@[[NSNull null], @(success)]);
}


RCT_EXPORT_METHOD(stringForKey:(NSString *)key callback:(RCTResponseSenderBlock)callback) {
  [self stringForKey:key service:self.service accessGroup:self.accessGroup callback:callback];
}

RCT_EXPORT_METHOD(stringForKey:(NSString *)key service:(NSString *)service accessGroup:(NSString *)accessGroup callback:(RCTResponseSenderBlock)callback) {
  NSError *error = nil;
  NSString *string = [UICKeyChainStore stringForKey:key service:service accessGroup:accessGroup error:&error];
  
  if (error) {
    callback(@[error, [NSNull null]]);
  } else {
    callback(@[[NSNull null], string]);
  }
}

@end
