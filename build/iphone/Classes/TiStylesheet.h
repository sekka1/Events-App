/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2011 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 * 
 * WARNING: This is generated code. Modify at your own risk and without support.
 */
#import "TiBase.h"

@interface TiStylesheet : NSObject {
	NSDictionary* classesDict;
	NSDictionary* classesDictByDensity;
	NSDictionary* idsDict;
	NSDictionary* idsDictByDensity;
}

-(id)stylesheet:(NSString*)objectId type:(NSString*)type density:(NSString*)density basename:(NSString*)basename;

@end
