package com.example.avfandrfix;

import android.app.Activity;
import android.os.Bundle;
import org.apache.cordova.*;

public class Avfandrfix extends Activity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_avfandrfix);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.activity_avfandrfix, menu);
        return true;
    }
}
