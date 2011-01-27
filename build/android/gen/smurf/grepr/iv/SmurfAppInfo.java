package smurf.grepr.iv;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.titanium.util.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public final class SmurfAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";
	
	public SmurfAppInfo(TiApplication app) {
		TiProperties properties = app.getSystemProperties();
					
					properties.setString("ti.deploytype", "development");
	}
	
	public String getId() {
		return "smurf.grepr.iv";
	}
	
	public String getName() {
		return "smurf";
	}
	
	public String getVersion() {
		return "1.0.1096";
	}
	
	public String getPublisher() {
		return "gakan";
	}
	
	public String getUrl() {
		return "http://smurf.grep-r.com";
	}
	
	public String getCopyright() {
		return "2011 by gakan";
	}
	
	public String getDescription() {
		return "No description provided";
	}
	
	public String getIcon() {
		return "default_app_logo.png";
	}
	
	public boolean isAnalyticsEnabled() {
		return true;
	}
	
	public String getGUID() {
		return "86450ef1-7194-4856-90d5-b481b4b6ef8e";
	}
	
	public boolean isFullscreen() {
		return false;
	}
	
	public boolean isNavBarHidden() {
		return false;
	}
}
