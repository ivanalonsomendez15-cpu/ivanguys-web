package com.simturbopc.ultra;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.view.MotionEvent;
import android.view.View;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

/**
 * V15 on-screen 8-way joystick for the existing LAN keyboard receiver.
 * Sends ONLY W/A/S/D through the user-enabled ControllerSender.
 * No Accessibility Service, no root, no control of other Android applications.
 */
public final class TouchJoystickV15 extends View {
    public interface KeySink {
        void down(String key);
        void up(String key);
    }
    private final Paint paint=new Paint(Paint.ANTI_ALIAS_FLAG);
    private final KeySink sink;
    private final Set<String> pressed=new HashSet<>();
    private int pointer=-1;
    private float centerX,centerY,radius;
    private float knobX,knobY;
    private boolean active;
    private final String[] KEYS={"W","A","S","D"};

    public TouchJoystickV15(Context context,KeySink sink) {
        super(context);
        this.sink=sink;
        setMinimumHeight(dp(192));
        setContentDescription("Joystick virtual: mover WASD, admite diagonales");
    }
    private int dp(float x) {return (int)(x*getResources().getDisplayMetrics().density+0.5f);}
    @Override protected void onSizeChanged(int w,int h,int oldw,int oldh) {
        super.onSizeChanged(w,h,oldw,oldh);
        centerX=w*0.5f;centerY=h*0.5f;
        radius=Math.max(dp(36),Math.min(w,h)*0.35f);
        if(!active){knobX=centerX;knobY=centerY;}
    }
    @Override protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        paint.setColor(Color.rgb(17,57,77));
        canvas.drawCircle(centerX,centerY,radius,paint);
        paint.setColor(Color.rgb(48,136,148));
        paint.setStyle(Paint.Style.STROKE);
        paint.setStrokeWidth(dp(3));
        canvas.drawCircle(centerX,centerY,radius,paint);
        paint.setStyle(Paint.Style.FILL);
        paint.setColor(Color.rgb(54,220,196));
        canvas.drawCircle(knobX,knobY,radius*0.40f,paint);
        paint.setColor(Color.WHITE);
        paint.setTextSize(dp(14));
        paint.setTextAlign(Paint.Align.CENTER);
        canvas.drawText("WASD",centerX,centerY+dp(5),paint);
    }
    private void update(float x,float y) {
        float dx=x-centerX,dy=y-centerY;
        float distance=(float)Math.sqrt(dx*dx+dy*dy);
        if(distance>radius) {
            dx*=radius/distance;
            dy*=radius/distance;
        }
        knobX=centerX+dx;knobY=centerY+dy;
        float dead=radius*0.30f;
        Set<String> wanted=new HashSet<>();
        if(dy < -dead)wanted.add("W");
        if(dy > dead)wanted.add("S");
        if(dx < -dead)wanted.add("A");
        if(dx > dead)wanted.add("D");
        // Release old directions before pressing new directions.
        for(String key:KEYS)if(pressed.contains(key)&&!wanted.contains(key))sink.up(key);
        for(String key:KEYS)if(wanted.contains(key)&&!pressed.contains(key))sink.down(key);
        pressed.clear();pressed.addAll(wanted);
        invalidate();
    }
    public void releaseAll() {
        for(String key:KEYS)if(pressed.contains(key))sink.up(key);
        pressed.clear();active=false;pointer=-1;
        knobX=centerX;knobY=centerY;invalidate();
    }
    @Override public boolean onTouchEvent(MotionEvent event) {
        int action=event.getActionMasked();
        if(action==MotionEvent.ACTION_DOWN||action==MotionEvent.ACTION_POINTER_DOWN) {
            if(pointer!=-1)return true;
            int index=event.getActionIndex();
            pointer=event.getPointerId(index);
            active=true;
            getParent().requestDisallowInterceptTouchEvent(true);
            update(event.getX(index),event.getY(index));
            return true;
        }
        if(action==MotionEvent.ACTION_MOVE) {
            if(pointer<0)return true;
            int index=event.findPointerIndex(pointer);
            if(index>=0)update(event.getX(index),event.getY(index));
            else releaseAll();
            return true;
        }
        if(action==MotionEvent.ACTION_UP||action==MotionEvent.ACTION_POINTER_UP) {
            if(event.getPointerId(event.getActionIndex())==pointer)releaseAll();
            return true;
        }
        if(action==MotionEvent.ACTION_CANCEL) {releaseAll();return true;}
        return true;
    }
    @Override protected void onDetachedFromWindow() {
        releaseAll();super.onDetachedFromWindow();
    }
}
