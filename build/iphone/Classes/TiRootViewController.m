/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2011 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 * 
 * WARNING: This is generated code. Modify at your own risk and without support.
 */

#import "TiRootViewController.h"
#import "TiUtils.h"
#import "TiViewProxy.h"
#import "TiWindowProxy.h"
#import "TiTab.h"
#import "TiApp.h"
#import <MessageUI/MessageUI.h>

@interface TiRootView : UIView
@end

@implementation TiRootView

- (void)motionEnded:(UIEventSubtype)motion withEvent:(UIEvent *)event
{
	if (event.type == UIEventTypeMotion && event.subtype == UIEventSubtypeMotionShake) 
	{
        [[NSNotificationCenter defaultCenter] postNotificationName:kTiGestureShakeNotification object:event];
    }
}

- (BOOL)canBecomeFirstResponder
{ 
	return YES; 
}

@end



@implementation TiRootViewController
@synthesize backgroundColor, backgroundImage;

-(void)dealloc
{
	RELEASE_TO_NIL(backgroundColor);
	RELEASE_TO_NIL(backgroundImage);

	RELEASE_TO_NIL(windowProxies);

	RELEASE_TO_NIL(windowViewControllers);
	RELEASE_TO_NIL(viewControllerStack);
	[super dealloc];
}

- (id) init
{
	self = [super init];
	if (self != nil)
	{
		windowProxies = [[NSMutableArray alloc] init];
		viewControllerStack = [[NSMutableArray alloc] init];
	}
	return self;
}


-(CGRect)resizeView
{
	CGRect rect = [[UIScreen mainScreen] applicationFrame];
	VerboseLog(@"(%f,%f),(%fx%f)",rect.origin.x,rect.origin.y,rect.size.width,rect.size.height);
	[[self view] setFrame:rect];
	//Because of the transition in landscape orientation, TiUtils can't be used here... SetFrame compensates for it.
	return [[self view] bounds];
}

-(void)setBackgroundColor:(UIColor *)newColor
{
	if ((newColor == backgroundColor) || [backgroundColor isEqual:newColor])
	{
		return;
	}

	[backgroundColor release];
	backgroundColor = [newColor retain];
	
	[self performSelectorOnMainThread:@selector(updateBackground) withObject:nil
		waitUntilDone:NO modes:[NSArray arrayWithObject:NSRunLoopCommonModes]];
	//The runloopcommonmodes ensures that it'll happen even during tracking.
}

-(void)setBackgroundImage:(UIImage *)newImage
{
	if ((newImage == backgroundImage) || [backgroundImage isEqual:newImage])
	{
		return;
	}

	[backgroundImage release];
	backgroundImage = [newImage retain];
	
	[self performSelectorOnMainThread:@selector(updateBackground) withObject:nil
		waitUntilDone:NO modes:[NSArray arrayWithObject:NSRunLoopCommonModes]];
	//The runloopcommonmodes ensures that it'll happen even during tracking.
}

-(void)updateBackground
{
	UIView * ourView = [self view];
	UIColor * chosenColor = (backgroundColor==nil)?[UIColor blackColor]:backgroundColor;
	[ourView setBackgroundColor:chosenColor];
	[[ourView superview] setBackgroundColor:chosenColor];
	if (backgroundImage!=nil)
	{
		[[ourView layer] setContents:(id)backgroundImage.CGImage];
	}
	else
	{
		[[ourView layer] setContents:nil];
	}
}

-(void)didOrientNotify:(NSNotification *)notification
{
	UIInterfaceOrientation newOrientation = [[UIDevice currentDevice] orientation];
	if (lastOrientation == 0)
	{ //This is when the application first starts. statusBarOrientation lies at the beginning,
	//And device orientation is 0 until this notification.
		// FIRST!  We know the orientation now, so attach the splash!
		UIInterfaceOrientation oldOrientation = [[UIApplication sharedApplication] statusBarOrientation];
		if (![[TiApp app] isSplashVisible]) {
			[[TiApp app] loadSplash];
		}
		windowOrientation = oldOrientation;
		[self manuallyRotateToOrientation:newOrientation duration:0];
		return;
	}

	if ((newOrientation==windowOrientation)&&(lastOrientation!=newOrientation) &&
			[self shouldAutorotateToInterfaceOrientation:newOrientation])
	{ //This is for when we've forced an orientation that was not what the device was, and
	//Now we want to return to it. Because newOrientation and windowOrientation are identical
	//The iPhone OS wouldn't send this method.
		[self willAnimateRotationToInterfaceOrientation:newOrientation duration:[[UIApplication sharedApplication] statusBarOrientationAnimationDuration]];
	}

}


-(void)loadView
{
	[[UIDevice currentDevice] beginGeneratingDeviceOrientationNotifications];
	WARN_IF_BACKGROUND_THREAD_OBJ;	//NSNotificationCenter is not threadsafe!
	[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(didOrientNotify:) name:UIDeviceOrientationDidChangeNotification object:nil];

	TiRootView *rootView = [[TiRootView alloc] init];
	self.view = rootView;
	[self updateBackground];
	[self resizeView];
	// we have to make a copy since this code can cause a mutation
	for (TiWindowProxy * thisProxy in windowProxies)
	{
		UIView * thisView = [thisProxy view];
		[rootView addSubview:thisView];
		[thisProxy reposition];
	}
	[rootView release];
}

- (void)viewWillAppear:(BOOL)animated;    // Called when the view is about to made visible. Default does nothing
{
	VerboseLog(@"%@%@",self,CODELOCATION);
	isCurrentlyVisible = YES;
	[[viewControllerStack lastObject] viewWillAppear:animated];
}
- (void)viewWillDisappear:(BOOL)animated; // Called when the view is dismissed, covered or otherwise hidden. Default does nothing
{
	VerboseLog(@"%@%@",self,CODELOCATION);
	[[viewControllerStack lastObject] viewWillDisappear:animated];
}

- (void) viewDidAppear:(BOOL)animated
{
	[self.view becomeFirstResponder];
    [super viewDidAppear:animated];
	VerboseLog(@"%@%@",self,CODELOCATION);
	[[viewControllerStack lastObject] viewDidAppear:animated];
}

- (void) viewDidDisappear:(BOOL)animated
{
	isCurrentlyVisible = NO;
	[self.view resignFirstResponder];
    [super viewDidDisappear:animated];
	VerboseLog(@"%@%@",self,CODELOCATION);
	[[viewControllerStack lastObject] viewDidDisappear:animated];
}

-(void)repositionSubviews
{
	for (TiWindowProxy * thisProxy in windowProxies)
	{
		[thisProxy reposition];
	}
}

-(void)manuallyRotateToOrientation:(UIInterfaceOrientation)newOrientation duration:(NSTimeInterval)duration
{
	UIApplication * ourApp = [UIApplication sharedApplication];
	if (newOrientation != [ourApp statusBarOrientation])
	{
		[ourApp setStatusBarOrientation:newOrientation animated:YES];
	}
	
	// if already in the orientation, don't do it again
	if (lastOrientation==newOrientation)
	{
		return;
	}

	CGAffineTransform transform;

	switch (newOrientation)
	{
		case UIInterfaceOrientationPortraitUpsideDown:
			transform = CGAffineTransformMakeRotation(M_PI);
			break;
		case UIInterfaceOrientationLandscapeLeft:
			transform = CGAffineTransformMakeRotation(-M_PI_2);
			break;
		case UIInterfaceOrientationLandscapeRight:
			transform = CGAffineTransformMakeRotation(M_PI_2);
			break;
		default:
			transform = CGAffineTransformIdentity;
			break;
	}

	for (TiWindowProxy * thisProxy in windowProxies)
	{
		UIViewController * thisNavCon = [thisProxy navController];
		if (thisNavCon == nil)
		{
			thisNavCon = [thisProxy controller];
		}
		[thisNavCon willAnimateRotationToInterfaceOrientation:newOrientation duration:duration];
	}


	if (duration > 0.0)
	{
		[UIView beginAnimations:@"orientation" context:nil];
		[UIView setAnimationDuration:duration];
	}

	[[self view] setTransform:transform];
	lastOrientation = newOrientation;
	[self resizeView];

	//Propigate this to everyone else. This has to be done INSIDE the animation.
	[self repositionSubviews];
	
	if (duration > 0.0)
	{
		[UIView commitAnimations];
	}
}

-(void)manuallyRotateToOrientation:(UIInterfaceOrientation) newOrientation
{
	[self manuallyRotateToOrientation:newOrientation duration:[[UIApplication sharedApplication] statusBarOrientationAnimationDuration]];
}

- (void)willAnimateRotationToInterfaceOrientation:(UIInterfaceOrientation)toInterfaceOrientation duration:(NSTimeInterval)duration
{
	VerboseLog(@"Rotating to %d (Landscape? %d)",toInterfaceOrientation,UIInterfaceOrientationIsLandscape(toInterfaceOrientation));
	windowOrientation = toInterfaceOrientation;
	[self manuallyRotateToOrientation:toInterfaceOrientation duration:duration];
	[super willAnimateRotationToInterfaceOrientation:toInterfaceOrientation duration:duration];
}

-(TiOrientationFlags)getDefaultOrientations
{
	// Read the orientation values from the plist - if they exist.
	TiOrientationFlags defaultFlags = TiOrientationPortrait;
	NSString* property = @"UISupportedInterfaceOrientations";
	if ([TiUtils isIPad]) {
		defaultFlags = TiOrientationAny;
		property = [property stringByAppendingString:@"~ipad"];
	}
	NSArray* orientations = [[NSBundle mainBundle] objectForInfoDictionaryKey:property];
	if (orientations == nil || [orientations count] == 0) {
		return defaultFlags;
	}
	else {
		defaultFlags = TiOrientationNone;
		for (NSString* orientationString in orientations) {
			UIInterfaceOrientation orientation = [TiUtils orientationValue:orientationString def:-1];
			if (orientation != -1) {
				TI_ORIENTATION_SET(defaultFlags, orientation);
			}
		}
	}
	
	return defaultFlags;
}

-(void)setOrientationModes:(NSArray *)newOrientationModes
{
	allowedOrientations = TiOrientationNone;

	for (id mode in newOrientationModes)
	{
		UIInterfaceOrientation orientation = [TiUtils orientationValue:mode def:-1];
		switch (orientation)
		{
			case UIDeviceOrientationPortrait:
			case UIDeviceOrientationPortraitUpsideDown:
			case UIDeviceOrientationLandscapeLeft:
			case UIDeviceOrientationLandscapeRight:
				TI_ORIENTATION_SET(allowedOrientations,orientation);
				break;
			case -1:
				break;
			default:
				NSLog(@"[WARN] An invalid orientation was requested. Ignoring.");
				break;
		}
	}
	
	if (allowedOrientations == TiOrientationNone)
	{
		allowedOrientations = [self getDefaultOrientations];
	}
}

-(UIInterfaceOrientation)mostRecentlyAllowedOrientation
{
	UIInterfaceOrientation requestedOrientation = [[UIApplication sharedApplication] statusBarOrientation];
	NSTimeInterval latestRequest = 0.0;
	for (int i=0; i<MAX_ORIENTATIONS; i++)
	{
		if (TI_ORIENTATION_ALLOWED(allowedOrientations,i) && (orientationRequestTimes[i]>latestRequest))
		{
			requestedOrientation = i;
			latestRequest = orientationRequestTimes[i];
		}
	}
	return requestedOrientation;
}


- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation 
{
	orientationRequestTimes[interfaceOrientation] = [NSDate timeIntervalSinceReferenceDate];
	return TI_ORIENTATION_ALLOWED(allowedOrientations,interfaceOrientation);
}


/*
Okay, Blain's sit and think about this. This is only concerning the top level of things.
That is, this is only a stack of open windows, and does not concern beyond that.
What this does mean is that any 

*/

- (void)willHideViewController:(UIViewController *)focusedViewController animated:(BOOL)animated
{
	if (!isCurrentlyVisible || (focusedViewController != [viewControllerStack lastObject]))
	{
		return;
	}
	
	[focusedViewController viewWillDisappear:animated];
	
	int previousIndex = [viewControllerStack count] - 2;	
	if (previousIndex > 0)
	{
		[[viewControllerStack objectAtIndex:previousIndex] viewWillAppear:animated];
	}
}

- (void)didHideViewController:(UIViewController *)focusedViewController animated:(BOOL)animated
{
	if (!isCurrentlyVisible || (focusedViewController != [viewControllerStack lastObject]))
	{
		return;
	}
	
	[focusedViewController viewDidDisappear:animated];
	[viewControllerStack removeLastObject];
	
	[[viewControllerStack lastObject] viewDidAppear:animated];
}

- (void)willShowViewController:(UIViewController *)focusedViewController animated:(BOOL)animated
{
	if (!isCurrentlyVisible || [viewControllerStack containsObject:focusedViewController])
	{
		return;
	}
	
	[[viewControllerStack lastObject] viewWillDisappear:animated];
	[focusedViewController viewWillAppear:animated];
}

- (void)didShowViewController:(UIViewController *)focusedViewController animated:(BOOL)animated
{
	if (!isCurrentlyVisible || [viewControllerStack containsObject:focusedViewController])
	{
		return;
	}
	
	[[viewControllerStack lastObject] viewDidDisappear:animated];
	[viewControllerStack addObject:focusedViewController];
	[focusedViewController viewDidAppear:animated];
}


-(void)windowFocused:(UIViewController*)focusedViewController
{
	if ([focusedViewController isKindOfClass:[UINavigationController class]] && ![focusedViewController isKindOfClass:[MFMailComposeViewController class]])
	{
		UIViewController * topViewController = [(UINavigationController *)focusedViewController topViewController];
		if (topViewController != nil)
		{
			focusedViewController = topViewController;
		}
	}

	TiWindowProxy * focusedProxy = nil;

	if ([focusedViewController respondsToSelector:@selector(proxy)])
	{
		focusedProxy = (TiWindowProxy *)[(id)focusedViewController proxy];
	}
	
	UIViewController * oldTopWindow = [windowViewControllers lastObject];
	[windowViewControllers removeObject:focusedViewController];
	if ((focusedViewController==nil) || [(TiWindowProxy *)focusedProxy _isChildOfTab] || ([(TiWindowProxy *)focusedProxy parent]!=nil))
	{
		return;
	}
	
	if (windowViewControllers==nil)
	{
		windowViewControllers = [[NSMutableArray alloc] initWithObjects:focusedViewController,nil];
	}
	else
	{
		[windowViewControllers addObject:focusedViewController];
	}
	
	if ((oldTopWindow != focusedViewController) && [oldTopWindow respondsToSelector:@selector(proxy)])
	{
		[(TiWindowProxy *)[(id)oldTopWindow proxy] _tabBlur];
	}
}

-(void)windowClosed:(UIViewController *)closedViewController
{
	if ([closedViewController isKindOfClass:[UINavigationController class]] && ![closedViewController isKindOfClass:[MFMailComposeViewController class]])
	{
		UIViewController * topViewController = [(UINavigationController *)closedViewController topViewController];
		if (topViewController != nil)
		{
			closedViewController = topViewController;
		}
	}

	BOOL focusChanged = [windowViewControllers lastObject] == closedViewController;
	[[closedViewController retain] autorelease];
	[windowViewControllers removeObject:closedViewController];
	if (!focusChanged)
	{
		closedViewController=nil;
		return; //Exit early. We're done here.
	}
	
	UIViewController * newTopWindow = [windowViewControllers lastObject];
	
	if ([newTopWindow respondsToSelector:@selector(proxy)])
	{
		[(TiWindowProxy *)[(id)newTopWindow proxy] _tabFocus];
	}
	
}

-(UIViewController *)focusedViewController
{
	return [windowViewControllers lastObject];
}

#pragma mark Remote Control Notifications

#if __IPHONE_OS_VERSION_MAX_ALLOWED >= __IPHONE_4_0
- (void)remoteControlReceivedWithEvent:(UIEvent *)event 
{ 
	[[NSNotificationCenter defaultCenter] postNotificationName:kTiRemoteControlNotification object:self userInfo:[NSDictionary dictionaryWithObject:event forKey:@"event"]];
}
#endif

#pragma mark TiOrientationFlags management.
- (void)openWindow:(TiWindowProxy *)window withObject:(id)args
{
	if ([windowProxies lastObject] == window)
	{
		return;
	}

	if ([windowProxies containsObject:window])
	{
		[[window retain] autorelease];
		[windowProxies removeObject:window];
	}

	[window setParentOrientationController:self];
	[windowProxies addObject:window];
	[window parentWillShow];
	//Todo: Move all the root-attaching logic here.

	[self childOrientationControllerChangedFlags:window];
}

- (void)closeWindow:(TiWindowProxy *)window withObject:(id)args
{
	if (![windowProxies containsObject:window])
	{
		return;
	}
	
	BOOL wasTopWindow = [windowProxies lastObject] == window;

	//Todo: Move all the root-detaching logic here.

	[window setParentOrientationController:nil];
	[window parentWillHide];
	[windowProxies removeObject:window];

	if(wasTopWindow)
	{
		[self childOrientationControllerChangedFlags:[windowProxies lastObject]];
	}
}

-(void)childOrientationControllerChangedFlags:(id<TiOrientationController>) orientationController;
{
	WARN_IF_BACKGROUND_THREAD_OBJ;
	//Because a modal window might not introduce new 

	TiOrientationFlags newFlags = [self orientationFlags];
	if (newFlags == allowedOrientations)
	{
		//No change. Nothing to update. Skip.
		return;
	}

	allowedOrientations = newFlags;
	if (TI_ORIENTATION_ALLOWED(allowedOrientations,lastOrientation))
	{
		//We're still good. No need to rotate. Skip.
		return;
	}

	//Force a rotate to accomodate.
	[self manuallyRotateToOrientation:[self mostRecentlyAllowedOrientation]];
}

-(void)setParentOrientationController:(id <TiOrientationController>)newParent
{
	//Blank method since we never have a parent.
}

-(id)parentOrientationController
{
	//Blank method since we never have a parent.
	return nil;
}

-(TiOrientationFlags) orientationFlags
{
	for (TiWindowProxy * thisWindow in [windowProxies reverseObjectEnumerator])
	{
		TiOrientationFlags result = [thisWindow orientationFlags];
		if (result != TiOrientationNone)
		{
			return result;
		}
	}
	
	return [self getDefaultOrientations];
}


@end
