package com.appname;

import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "AppName";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(null);
  }
}
