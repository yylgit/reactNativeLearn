package com.reactnativelearn;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "reactNativeLearn";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        RnPushActivityDelegate.getIns().onCreate(getIntent());
    }
 
    @Override
    public void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        RnPushActivityDelegate.getIns().onNewIntent(getIntent());
    }
}
