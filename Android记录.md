2016年5月22，今天我无意间CSDN上有一个博主发的博客，虽然是基础，但是我却有的见过，用过，有的却都没有见过，不知道都是什么东东，然后我觉得应该学习下，然后顺便记录下，以便以后的使用。

##1、.9图
###1.1、.9图有什么用？
.9图就是说，图片在拉伸的时候特定的区域不会发生图片失真，不失真的区域由我们自己控制。
###1.2、用什么搞.9图
1、Android SDK自带的draw9path.bat

2、NinePatchEditor

--------------
##2、界面原型设计
就是设计UI
引用博主的话：一个产品的UI是非常重要的，而产品的界面原型设计一般是由公司的产品经理+美工来完成的，需求分析--->界面原型设计--->我们来写代码。但是我们还是很有必要了解下的。。
使用工具：Mockplus(摩客)

PS: 自己下载好Mockplus软件，然后自己搞了一会儿，大致了解了这个软件，要是让我用，估计就不太会了！！


----
##3、程序签名打包
1、Build ->Generate Signed APK..

![](http://i.imgur.com/r9Dnvw5.png)


2、弹出窗口，如果没有key，就创建一个，有的话就选择存在的Key

![](http://i.imgur.com/vbLg2Yp.png)

3、要是没有key我们就新建一个，根据自己的需要进行填写

![](http://i.imgur.com/Jy7G1Ho.png)

4、点击OK，填入密码

![](http://i.imgur.com/rf62pRb.png)

5、点击Next

![](http://i.imgur.com/mXvcdE4.png)

6、点击Finish，然后稍微等会儿，出现下边的提示，说明应用已经打包签名成功了

![](http://i.imgur.com/lAiakcL.png)

7、打开我们的工作空间，然后就发现打包好的APK就出现在app目录下了

![](http://i.imgur.com/ZtJAFlp.png)

8、验证我们是否签名，输入如下的cmd命令

![](http://i.imgur.com/vvavfYp.png)


--------
##4、Android的布局
6大布局：分别是：
LinearLayout(线性布局)、RelativeLayout(相对布局)、TableLayout(表格布局)、FrameLayout(帧布局)、AbsoluteLayout(绝对布局)、GridLayout(网格布局)

自我感觉，就LinearLayout,和RelativeLayout用的多，其他的我都没有用过，是不是自己太菜了，不管怎样，少年加油吧！

------
###4.1、LinearLayout
最重要的的就数：weight了

1、简单的用法，当width_layout:wrap_content时，直接就按比例就可以了

![](http://i.imgur.com/UVEaViQ.png)

实现的代码：
       

	<TextView
        android:layout_width="wrap_content"
        android:layout_height="match_parent"
        android:layout_weight="1"
        android:background="#00ff00"
        android:text="第一个"
         />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="match_parent"
        android:layout_weight="2"
        android:background="#ff00ff"
        android:text="第二个"
        />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="match_parent"
        android:layout_weight="3"
        android:background="#0000ff"
        android:text="第三个"
        />

2、要自己算的时候：width_layout:match_parent

![](http://i.imgur.com/2Hn0PRc.png)

实现代码：

	<TextView
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:layout_weight="1"
        android:background="#00ff00"
        android:text="第一个"
         />

    <TextView
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:layout_weight="2"
        android:background="#ff00ff"
        android:text="第二个"
        />

    <TextView
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:layout_weight="3"
        android:background="#0000ff"
        android:text="第三个"
        />

这种显示显然让我没有想到，怎么会这样,这比例是2:1吧,那么three去哪了？

代码里面明明有three的啊,还设置了3的,而1和2的比例也不对耶,1:2:3却变成了2:1:0,怎么会这样呢? 

答:这里其实没那么简单的,还是需要我们计算的,网上给出的算法有几种,这里就给出笔者 觉得比较容易理解的一种: 

step 1：个个都是match_parent,但是屏幕只有一个啦,那么1 - 3 = - 2 match_parent 

step 2：依次比例是1/6,2/6,3/6 

step 3：先到先得,先分给one,计算: 1 - 2 * (1/6) = 2/3 match_parent 
接着到two,计算: 1 - 2 * (2/6) = 1/3 match_parent 
最后到three,计算 1 - 2 * (3/6) = 0 match_parent 

step 4：所以最后的结果是:one占了两份,two占了一份,three什么都木有 

-----
###4.2、RelativeLayout

1、当页面比较复杂的时候，需要嵌套多层的LinearLayout，这样就会降低UI Render的效率（渲染速度），而且如果是ListView和GridView上的item，效率就更低了。另外太多层的LinearLayout嵌套会占用更多的系统资源，还有可能引stackoverflow; 
但是如果我们使用RelativeLayout的话,可能仅仅需要一层就可以完成了,以父容器或者兄弟组件参考+margin+padding就可以设置组件的显示位置,是比较方便的!当然,也不是绝对的,具体问题具体分析吧! 

总结就是:尽量使用RelativeLayout + LinearLayout的weight属性搭配使用吧！

2、注意margin的值可以为负数

3、margin和padding的区别，

PS：自己在用的时候，根本就没有想过这个问题，现在想想，......
记录下：
Padding 为内边框，指该控件内部内容，如文本/图片距离该控件的边距
Margin 为外边框，指该控件距离边父控件的边距
上图：

![](http://i.imgur.com/zcGOXdl.png)

---
##5、基本控件
自己在设置大小的时候，总是在想要用dp，还是sp....
到底要用什么呢？

dp(dip): device independent pixels(设备独立像素). 不同设备有不同的显示效果,这个和设备硬件有关，一般我们为了支持WVGA、HVGA和QVGA 推荐使用这个，不依赖像素。 

px: pixels(像素). 不同设备显示效果相同，一般我们HVGA代表320x480像素，这个用的比较多。 

pt: point，是一个标准的长度单位，1pt＝1/72英寸，用于印刷业，非常简单易用； 

sp: scaled pixels(放大像素). 主要用于字体显示best for textsize。也就是说我们在设置字体大小的时候用sp!!!!注意！！！！


###5.1、TextView
1、基本的用法都已经知道了，现在要给TextView搞个背景框，怎么搞定呢？

实现的原理很简单，就是自己编写一个ShapeDrawable的资源文件！然后TextView将blackgroung设置为这个drawable资源即可！

####shapeDrawable属性：
简单的学习下shapeDrawable资源文件的几个节点以及属性：


    <solid android:color = “xxx”> 这个是设置背景颜色的
	<stroke android:width = “xdp” android:color=”xxx”> 这个是设置边框的粗细,以及边框颜色的
	<padding androidLbottom = “xdp”…> 这个是设置边距的
	<corners android:topLeftRadius=”10px”…> 这个是设置圆角的
	<gradient> 这个是设置渐变色的,可选属性有: 
	startColor:起始颜色 endColor:结束颜色 centerColor:中间颜色 
	angle:方向角度,等于0时,从左到右,然后逆时针方向转,当angle = 90度时从下往上 
	type:设置渐变的类型

编写矩形边框的Drawable：txt_rectborder

	<?xml version="1.0" encoding="utf-8"?>
	<shape xmlns:android="http://schemas.android.com/apk/res/android" >

    <!-- 设置一个黑色边框 -->
    <stroke android:width="2px" android:color="#000000"/>
    <!-- 渐变 -->
    <gradient
        android:angle="270"
        android:endColor="#C0C0C0"
        android:startColor="#FCD209" />
    <!-- 设置一下边距,让空间大一点 -->
    <padding
        android:left="5dp"
        android:top="5dp"
        android:right="5dp"
        android:bottom="5dp"/>
	</shape>  

编写圆角边框的Drawable：txt_radiuborder
	
	<?xml version="1.0" encoding="utf-8"?>
	<shape xmlns:android="http://schemas.android.com/apk/res/android">

    <!-- 设置透明背景色 -->
    <solid android:color="#87CEEB" />

    <!-- 设置一个黑色边框 -->
    <stroke
        android:width="2px"
        android:color="#000000" />
    <!-- 设置四个圆角的半径 -->
    <corners
        android:bottomLeftRadius="10px"
        android:bottomRightRadius="10px"
        android:topLeftRadius="10px"
        android:topRightRadius="10px" />
    <!-- 设置一下边距,让空间大一点 -->
    <padding
        android:bottom="5dp"
        android:left="5dp"
        android:right="5dp"
        android:top="5dp" />

	</shape>  
	
已经完成定义，然后我们要用的时候，直接用

	android:background="@drawable/txt_rectborder"
来进行引用


2、带图片的TextView

在实际的开发中我们要实现这种的时候

![](http://i.imgur.com/WGvdZSO.png)

以后别在用LinearLayout中放imageView和TextView，然后再放到LinearLayout中，注意：使用drawableXxx来进行，直接设置4个TextView来完成。

>设置图片的核心其实就是:drawableXxx;可以设置四个方向的图片: 
>drawableTop(上),drawableButtom(下),drawableLeft(左)
>drawableRight>(右) 
>另外,你也可以使用drawablePadding来设置图片与文字间的间距！

3、跑马灯

     <TextView
        android:id="@+id/txtOne"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:textSize="18sp"
        android:singleLine="true"
        android:ellipsize="marquee"
        android:marqueeRepeatLimit="marquee_forever"
        android:focusable="true"
        android:focusableInTouchMode="true"
        android:text="ghfgfgrhrhrehehddgdhdfhdhhhahahhahahahah呵呵呵呵呵呵~"/>




##6、基于监听的事件处理机制

###6.1、监听器
1、直接使用匿名内部类：也就是setXxxListener后，重写里面的方法，通常是临时使用一次，复用性不高

	 
	import android.os.Bundle;    
	import android.view.View;    
	import android.view.View.OnClickListener;    
	import android.widget.Button;    
	import android.widget.Toast;    
	import android.app.Activity;    


	public class MainActivity extends Activity {    
    private Button btnshow;    

    @Override    
    protected void onCreate(Bundle savedInstanceState) {    
        super.onCreate(savedInstanceState);    
        setContentView(R.layout.activity_main);    
        btnshow = (Button) findViewById(R.id.btnshow);    
        btnshow.setOnClickListener(new OnClickListener() {    
            //重写点击事件的处理方法onClick()    
            @Override    
            public void onClick(View v) {    
                //显示Toast信息    
                Toast.makeText(getApplicationContext(), "你点击了按钮", Toast.LENGTH_SHORT).show();    
            }    
        });    
    }        
	}    

2、使用内部类：

	import android.os.Bundle;    
	import android.view.View;    
	import android.view.View.OnClickListener;    
	import android.widget.Button;    
	import android.widget.Toast;    
	import android.app.Activity;    


	public class MainActivity extends Activity {    
    private Button btnshow;    
    @Override    
    protected void onCreate(Bundle savedInstanceState) {    
        super.onCreate(savedInstanceState);    
        setContentView(R.layout.activity_main);    
        btnshow = (Button) findViewById(R.id.btnshow);    
        //直接new一个内部类对象作为参数    
        btnshow.setOnClickListener(new BtnClickListener());    
    }     
    //定义一个内部类,实现View.OnClickListener接口,并重写onClick()方法    
    class BtnClickListener implements View.OnClickListener    
    {    
        @Override    
        public void onClick(View v) {    
            Toast.makeText(getApplicationContext(), "按钮被点击了", Toast.LENGTH_SHORT).show();   
        }    
    }    
	}  

3、使用外部类
MyClick.java	

	import android.view.View;    
	import android.view.View.OnClickListener;    
	import android.widget.TextView;    

	public class MyClick implements OnClickListener {    
    	private TextView textshow;    
    //把文本框作为参数传入    
    public MyClick(TextView txt)    
    {    
        textshow = txt;    
    }    
    @Override    
    public void onClick(View v) {    
        //点击后设置文本框显示的文字    
        textshow.setText("点击了按钮!");    
    }    
	}    


MainActivity.java

	import android.os.Bundle;    
	import android.widget.Button;    
	import android.widget.TextView;    
	import android.app.Activity;    


	public class MainActivity extends Activity {    
    private Button btnshow;    
    private TextView txtshow;    
    @Override    
    protected void onCreate(Bundle savedInstanceState) {    
        super.onCreate(savedInstanceState);    
        setContentView(R.layout.activity_main);    
        btnshow = (Button) findViewById(R.id.btnshow);    
        txtshow = (TextView) findViewById(R.id.textshow);    
        //直接new一个外部类，并把TextView作为参数传入    
        btnshow.setOnClickListener(new MyClick(txtshow));    
    }         
	}    

4、直接使用Activity作为事件监听器

只需要让Activity类实现XxxListener事件监听接口，在Activity中定义重写对应的事件处理器方法 
eg:Actitity实现了OnClickListener接口,重写了onClick(view)方法在为某些组建添加该事件监听对象 
时,直接setXxx.Listener(this)即可

	import android.os.Bundle;    
	import android.view.View;    
	import android.view.View.OnClickListener;    
	import android.widget.Button;    
	import android.widget.Toast;    
	import android.app.Activity;    

	//让Activity方法实现OnClickListener接口    
	public class MainActivity extends Activity implements OnClickListener{    
    private Button btnshow;    
    @Override    
    protected void onCreate(Bundle savedInstanceState) {    
        super.onCreate(savedInstanceState);    
        setContentView(R.layout.activity_main);    

        btnshow = (Button) findViewById(R.id.btnshow);    
        //直接写个this    
        btnshow.setOnClickListener(this);    
    }    
    //重写接口中的抽象方法    
    @Override    
    public void onClick(View v) {    
        Toast.makeText(getApplicationContext(), "点击了按钮", Toast.LENGTH_SHORT).show();         
    }         
	}    

5、直接绑定到标签：onClick

------

###6.2、基于回调的事件处理机制
####什么是方法回调！！要我用自己的话说，我真说不出来！！！！
引用：是将功能定义与功能分开的一种手段，一种解耦的设计思想，在java中回调是通过接口来实现的，作为一种系统的构架，必须要有自己的运行环境，并且需要为用户提供实现接口；实现依赖于客户，这样就可以达到接口统一，实现不同，系统通过在不同的状态下 回调 我们的实现类，从而达到接口和实现的分离！


####android为GUI组件提供了一些事件处理的回调方法，如下：

①在该组件上触发屏幕事件: boolean onTouchEvent(MotionEvent event); 
②在该组件上按下某个按钮时: boolean onKeyDown(int keyCode,KeyEvent event); 
③松开组件上的某个按钮时: boolean onKeyUp(int keyCode,KeyEvent event); 
④长按组件某个按钮时: boolean onKeyLongPress(int keyCode,KeyEvent event); 
⑤键盘快捷键事件发生: boolean onKeyShortcut(int keyCode,KeyEvent event); 
⑥在组件上触发轨迹球屏事件: boolean onTrackballEvent(MotionEvent event); 
⑦当组件的焦点发生改变,和前面的6个不同,这个方法只能够在View中重写哦！ 
protected void onFocusChanged(boolean gainFocus, int direction, Rect previously FocusedRect)

####仔细查看，会发现回调方法返回的值是boolean类型！！！
为啥呢？

返回的是boolean类型，这个返回值是用来标识这个方法是否完全处理完，如果为false就说明没有处理完，然后呢，就会传播出去，触发组件所在的Activity的相关的回调方法，返回值要是true的话就不会传播了！！

然后记住他的传播顺序是：

监听器---->View组件的回调方法--->Activity的回调方法


----
##7、Handler消息传递机制
其实我以前刚开始学习的时候全部都放在主Activity中，但是，这样很容易出现问题的，后来才知道，原来不允许我们在UI外操作UI；然后我们就需要做页面刷新的时候通过Handler来通知UI组件更新

----
##8、Adapter

###8.1MVC模式
Model：通常可以理解为数据，负责执行程序的核心运算和判断逻辑，通过view获得用户输入的数据，然后根据从数据库查询相关的信息，最后进行运算和判断，再将得到的结果交给view来显示

View:用户的操作接口，说白了就是GUI，应该使用哪种接口组件，组件间的排列位置和顺序都需要设计

Controller:控制器，作为model和view之间的枢纽，负责控制程序的执行流程以及对象之间的一个互动

而Adapter就是中间的这个Controller的部分

###8.2

1、了解Adapter的继承关系，
2、掌握这个几个重要的Adapter

BaseAdapter:抽象类，实际的开发中我们会继承这个类并且重写相关的方法，是用得最多的一个Adapter!

ArrayAdapter:支持泛型操作，最简单的一个Adapter，只能展示一行文字

SimpleAdapter:同样具有良好的扩展性的一个Adapter，可以自定义多种效果

###8.3编码
1、ArrayAdapter使用的示例：
	
	public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        //要显示的数据
        String[] strs = {"基神","B神","翔神","曹神","J神"};
        //创建ArrayAdapter
        ArrayAdapter<String> adapter = new ArrayAdapter<String>
                (this,android.R.layout.simple_expandable_list_item_1,strs);
        //获取ListView对象，通过调用setAdapter方法为ListView设置Adapter设置适配器
        ListView list_test = (ListView) findViewById(R.id.list_test);
        list_test.setAdapter(adapter);
    }
	}

ArrayAdapter要传3个参数：
1，content
2，资源ID，用来作为ArrayAdapter的列表项组件
3，数组或者是List,用来提供数据

----

2、SimpleAdapter：简单的Adapter，功能很强大，实现带头像的列表布局


list_item.xml

经典的Item的设计（以后只要用就从这里粘就好了）

    <?xml version="1.0" encoding="utf-8"?>
	<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:orientation="horizontal">


    <ImageView
        android:layout_width="64dp"
        android:layout_height="64dp"
        android:src="@drawable/mishu" />

    	<LinearLayout
        	android:layout_width="match_parent"
        	android:layout_height="wrap_content"
        	android:orientation="vertical">

        <TextView
            android:id="@+id/name"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginLeft="5dp"
            android:layout_marginTop="5dp"
            android:text="小明"
            android:textColor="#1D1D1C"
            android:textSize="20sp" />

       	 <TextView
            android:id="@+id/says"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="5dp"
            android:layout_marginLeft="5dp"
            android:text="我是一个努力的孩子"
            android:textColor="#B4B4B9"
            android:textSize="14sp" />

    	</LinearLayout>
	</LinearLayout>



MainActivity.java

	public class MainActivity extends AppCompatActivity {

    private String [] name = {"哈哈哈","么么么","嘻嘻嘻"};
    private String [] content = {"我是哈哈哈哈哈","我是么么么","我是嘻嘻嘻"};
    private int [] imageId = {R.drawable.haha,R.drawable.haha,R.drawable.haha};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
	//        ListView listView = (ListView) findViewById(R.id.list1);
	//        String [] arr = {"哈哈哈","嘻嘻嘻","么么么么"};
	//        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this,R.layout.array_item,arr);
	//        listView.setAdapter(adapter);

        List<Map<String, Object>> listItems = new ArrayList<>();
        for (int i = 0; i<name.length; i++){
            Map<String, Object> listItem = new HashMap<>();
            listItem.put("name",name[i]);
            listItem.put("image",imageId[i]);
            listItem.put("content",content[i]);
            listItems.add(listItem);
        }

        SimpleAdapter simpleAdapter = new SimpleAdapter(this,listItems,R.layout.list_item,
                new String []{"name","image","content"},
                new int []{R.id.tv_name,R.id.image,R.id.tv_content});
        ListView listView = (ListView) findViewById(R.id.list1);
        listView.setAdapter(simpleAdapter);

        
        //每个列表项别点击的监听器
        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Toast.makeText(MainActivity.this,name[position]+"被点击了",Toast.LENGTH_SHORT).show();
            }
        });
    }



3、自定义BaseAdapter，然后绑定到ListView的简单的例子

先不写了，！！



-----------

##Android数据存储

自己想一想，android中进行数据的存储的几种方式
1，文件存储
2，SharedPreferences
3,SQLite数据库

###文件读写
1、存储到APP中，效果图如下

![](http://i.imgur.com/rXcL2Ne.png)


activity_main.xml

	<?xml version="1.0" encoding="utf-8"?>
	<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingBottom="@dimen/activity_vertical_margin"
    android:paddingLeft="@dimen/activity_horizontal_margin"
    android:paddingRight="@dimen/activity_horizontal_margin"
    android:paddingTop="@dimen/activity_vertical_margin"
    android:orientation="vertical"
    tools:context="zzu.com.wenjianduixie.MainActivity">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="请输入文件名" />

    <EditText
        android:id="@+id/et_filename"
        android:layout_width="match_parent"
        android:layout_height="wrap_content" />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="请输入文件内容" />

    <EditText
        android:id="@+id/et_filecontent"
        android:lines="3"
        android:layout_width="match_parent"
        android:layout_height="wrap_content" />

    <LinearLayout
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        >
        <Button
            android:id="@+id/btn_save"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="写入"
            />
        <Button
            android:id="@+id/btn_clean"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="清空"
            />

        <Button
            android:id="@+id/btn_read"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="读取"
            />

    </LinearLayout>
	</LinearLayout>


FileHelper.java

	package zzu.com.wenjianduixie;

	import android.content.Context;

	import java.io.FileInputStream;
	import java.io.FileOutputStream;
	import java.io.IOException;

	/**
	 * Created by xm on 2016/6/1.
	 */

	//这是一个读写文件的辅助类
	public class FileHelper {
    private Context mContext;
    public FileHelper() {
    }
    public FileHelper(Context mContext) {
        this.mContext = mContext;
    }
    /*
    	* 这里定义的是一个文件保存的方法，写入到文件中，所以是输出流
    	* */
    public void save(String filename, String filecontent) throws Exception {
        //这里我们使用私有模式,创建出来的文件只能被本应用访问,还会覆盖原文件哦
        FileOutputStream output = mContext.openFileOutput(filename,Context.MODE_PRIVATE);
        output.write(filecontent.getBytes());  //将String字符串以字节流的形式写入到输出流中
        output.close();         //关闭输出流
    }


    // 这里定义的是文件读取的方法

    public String read(String filename) throws IOException {
        //打开文件输入流
        FileInputStream input = mContext.openFileInput(filename);
        byte[] temp = new byte[1024];
        StringBuilder sb = new StringBuilder("");
        int len = 0;
        //读取文件内容:
        while ((len = input.read(temp)) > 0) {
            sb.append(new String(temp, 0, len));
        }
        //关闭输入流
        input.close();
        return sb.toString();
    }

	}



MainActivity.java

	package zzu.com.wenjianduixie;

	import android.content.Context;
	import android.support.v7.app.AppCompatActivity;
	import android.os.Bundle;
	import android.view.View;
	import android.widget.Button;
	import android.widget.EditText;
	import android.widget.Toast;

	import java.io.IOException;

	public class MainActivity extends AppCompatActivity implements View.OnClickListener{

    private EditText et_filename;
    private EditText et_filecontent;
    private Button btn_save;
    private Button btn_clean;
    private Button btn_read;
    private Context mContext;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mContext = getApplicationContext();

        bindViews();

    }

    private void bindViews() {
        et_filename = (EditText) findViewById(R.id.et_filename);
        et_filecontent = (EditText) findViewById(R.id.et_filecontent);
        btn_save = (Button) findViewById(R.id.btn_save);
        btn_clean = (Button) findViewById(R.id.btn_clean);
        btn_read = (Button) findViewById(R.id.btn_read);

        btn_save.setOnClickListener(this);
        btn_clean.setOnClickListener(this);
        btn_read.setOnClickListener(this);

    }

    @Override
    public void onClick(View v) {
        switch (v.getId()){
            case R.id.btn_clean:
                et_filename.setText("");
                et_filecontent.setText("");
                break;
            case R.id.btn_save:
                FileHelper fileHelper = new FileHelper(mContext);
                String filename = et_filename.getText().toString();
                String filecontent = et_filecontent.getText().toString();

                try {
                    fileHelper.save(filename,filecontent);
                    Toast.makeText(MainActivity.this,"数据写入成功",Toast.LENGTH_SHORT).show();
                } catch (Exception e) {
                    e.printStackTrace();
                    Toast.makeText(MainActivity.this,"数据写入失败",Toast.LENGTH_SHORT).show();
                }
                break;
            case R.id.btn_read:
                String detail = "";
                FileHelper fHelper2 = new FileHelper(getApplicationContext());
                try {
                    String fname = et_filename.getText().toString();
                    detail = fHelper2.read(fname);
                } catch (IOException e) {
                    e.printStackTrace();
                }
                Toast.makeText(getApplicationContext(), detail, Toast.LENGTH_SHORT).show();
                break;
        }
    }
	}


2、存储到SD卡，效果图如下

![](http://i.imgur.com/TdR95Hk.png)


activity_mian.xml

	`<?xml version="1.0" encoding="utf-8"?>
	<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:paddingBottom="@dimen/activity_vertical_margin"
    android:paddingLeft="@dimen/activity_horizontal_margin"
    android:paddingRight="@dimen/activity_horizontal_margin"
    android:paddingTop="@dimen/activity_vertical_margin"   tools:context="zzu.com.sdwenjianduxie.MainActivity">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="请输入文件名" />

    <EditText
        android:id="@+id/et_filename"
        android:layout_width="match_parent"
        android:layout_height="wrap_content" />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="请输入文件内容" />

    <EditText
        android:id="@+id/et_filecontent"
        android:lines="3"
        android:layout_width="match_parent"
        android:layout_height="wrap_content" />

    <LinearLayout
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        >
        <Button
            android:id="@+id/btn_save"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="保存到SD卡"
            />
        <Button
            android:id="@+id/btn_clean"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="清空"
            />

        <Button
            android:id="@+id/btn_read"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="读取SD卡的文件"
            />

    </LinearLayout>
	</LinearLayout>

`
SDFileHelper.java

	package zzu.com.sdwenjianduxie;

	import android.content.Context;
	import android.os.Environment;
	import android.widget.Toast;

	import java.io.FileInputStream;
	import java.io.FileOutputStream;
	import java.io.IOException;

	/**
 	* Created by xm on 2016/6/1.
 	*/
	public class SDFileHelper {
    private Context context;

    public SDFileHelper() {
    }

    public SDFileHelper(Context context) {
        this.context = context;
    }
    //往SD卡写入文件的方法
    public void saveFileToSD(String filename,String filecontent) throws IOException {
        //如果手机已经插入了sd卡，并且这个APP具有读写sd卡的权限
        if (Environment.getExternalStorageState().equals(Environment.MEDIA_MOUNTED)){
                filename = Environment.getExternalStorageDirectory().getCanonicalPath() + "/" + filename;
                //这里就不要用openFileOutput了，那个是往手机内存中进行存储
                FileOutputStream outputStream = new FileOutputStream(filename);
                //将String字符串以字节流的形式写入到输出流中
                outputStream.write(filecontent.getBytes());
                //关闭这个输出流
                outputStream.close();
        }else{
            Toast.makeText(context,"sd卡不存在或者不可读写",Toast.LENGTH_SHORT).show();
        }
    }

    //读取SD卡中文件的方法
    //定义读取文件的方法
    public String readFromSD(String filename) throws IOException {
        StringBuffer sb = new StringBuffer("");
        if (Environment.getExternalStorageState().equals(Environment.MEDIA_MOUNTED)){
            filename = Environment.getExternalStorageDirectory().getCanonicalPath() + "/" + filename;
            //打开文件输入流
            FileInputStream inputStream = new FileInputStream(filename);
            byte[] temp = new byte[1024];
            int len = 0;
            //读取内容
            while ((len = inputStream.read(temp)) > 0){
                sb.append(new String(temp, 0, len));
            }
            //关闭输入流
            inputStream.close();
        }
        return sb.toString();
    }
	}

MainActivity.java

	package zzu.com.sdwenjianduxie;

	import android.content.Context;
	import android.support.v7.app.AppCompatActivity;
	import android.os.Bundle;
	import android.view.View;
	import android.widget.Button;
	import android.widget.EditText;
	import android.widget.Toast;

	import java.io.IOException;

	public class MainActivity extends AppCompatActivity implements View.OnClickListener{

    private EditText et_filename;
    private EditText et_filecontent;
    private Button btn_save;
    private Button btn_clean;
    private Button btn_read;
    private Context mContext;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mContext = getApplicationContext();

        bindViews();

    }

    private void bindViews() {
        et_filename = (EditText) findViewById(R.id.et_filename);
        et_filecontent = (EditText) findViewById(R.id.et_filecontent);
        btn_save = (Button) findViewById(R.id.btn_save);
        btn_clean = (Button) findViewById(R.id.btn_clean);
        btn_read = (Button) findViewById(R.id.btn_read);

        btn_save.setOnClickListener(this);
        btn_clean.setOnClickListener(this);
        btn_read.setOnClickListener(this);

    }

    @Override
    public void onClick(View v) {
        switch (v.getId()){
            case R.id.btn_clean:
                et_filename.setText("");
                et_filecontent.setText("");
                break;
            case R.id.btn_save:
                String filename = et_filename.getText().toString();
                String filecontent = et_filecontent.getText().toString();
                SDFileHelper sdFileHelper = new SDFileHelper(mContext);
                try {
                    sdFileHelper.saveFileToSD(filename,filecontent);
                    Toast.makeText(getApplicationContext(),"写入数据成功",Toast.LENGTH_SHORT).show();
                } catch (IOException e) {
                    e.printStackTrace();
                    Toast.makeText(getApplicationContext(), "数据写入失败", Toast.LENGTH_SHORT).show();
                }
                break;
            case R.id.btn_read:
                String content = "";
                SDFileHelper sdFileHelper1 = new SDFileHelper(mContext);

                try {
                    String filename1 = et_filename.getText().toString();
                    content = sdFileHelper1.readFromSD(filename1);
                } catch (IOException e) {
                    e.printStackTrace();
                }
                Toast.makeText(getApplicationContext(), content, Toast.LENGTH_SHORT).show();
                break;

        }
    }
	}


写完这些，记得加上权限

	 <!-- 在SDCard中创建与删除文件权限 -->
    <uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS"/>
    <!-- 往SDCard写入数据权限 -->
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>


对文件的读写，最重要的就是我们的那个辅助类，让我们的操作变得简单，，，，



2、SharedPreferences

什么时候要用这个东西呢？
当我们的应用想要保存用户的一些偏好参数，比如：自动登录。是否记住密码，是否在Wifi下才能联网等相关信息，把这些配置信息称为用户的偏好设置。windows使用ini文件，J2SE中使用properties属性文件与xml文件来保存软件的配置信息。

自我感觉，SharedPreferences用的还是比较多的，实现一个小的案例：在一个页面上进行信息的填写，然后点击注册，就把信息写入，下次进入软件就可以回显信息


![](http://i.imgur.com/zR2ZuB2.png)

直接上代码，主要的是看人家怎么写的，，，，

activity_main.xml,就不贴了，就是一个布局文件，两个EditText,一个Button,,,

SharedHelper.java

	package zzu.com.sharedpreference;

	import android.content.Context;
	import android.content.SharedPreferences;
	import android.widget.Toast;

	import java.util.HashMap;
	import java.util.Map;

	public class SharedHelper {

    private Context mContext;

    public SharedHelper(Context mContext) {
        this.mContext = mContext;
    }

    //定义一个保存数据的方法
    public void save(String name, String password){
        //getSharedPreferences()方法，获得SharedPreferences对象，传2个参数：文件名和操作模式
        SharedPreferences sharedPreferences = mContext.getSharedPreferences("mysp",Context.MODE_PRIVATE);
        ///获得Editor对象
        SharedPreferences.Editor editor =sharedPreferences.edit();
        //调用Editor对象的putXxx(),将不同类型的数据进行写入，参数是键值对的形式！！！
        editor.putString("name",name);
        editor.putString("password",password);
        //提交数据
        editor.commit();
        Toast.makeText(mContext,"信息已经被写入",Toast.LENGTH_SHORT).show();
    }

    public Map<String, String> read(){
        Map<String, String> data = new HashMap<>();
        SharedPreferences sharedPreferences = mContext.getSharedPreferences("mysp",Context.MODE_PRIVATE);
        data.put("name",sharedPreferences.getString("name",""));
        data.put("password",sharedPreferences.getString("password",""));
        return data;
    }
	}


辅助类中有2个方法，一个是文件的写入，一个是文件的读取。。

MainActivity.java

	package zzu.com.sharedpreference;


	/*
		* 这个案例是实现SharedPreference,进行对密码的保存和读取
		* 这个页面中有注册。然后要是有信息就回显，要是没有就不回显，可以注册
		*
		* */
	import android.support.v7.app.AppCompatActivity;
	import android.os.Bundle;
	import android.view.View;
	import android.widget.Button;
	import android.widget.EditText;

	import java.util.Map;

	public class MainActivity extends AppCompatActivity {

    private EditText et_name;
    private EditText et_pass;
    private Button bt_register;
    private SharedHelper sharedHelper;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        sharedHelper = new SharedHelper(this);
        init();
    }

    private void init() {
        et_name = (EditText) findViewById(R.id.et_name);
        et_pass = (EditText) findViewById(R.id.et_pass);


        bt_register = (Button) findViewById(R.id.bt_register);
        bt_register.setOnClickListener(new View.OnClickListener() {

            private String name;
            private String pass;

            @Override
            public void onClick(View v) {
                name = et_name.getText().toString();
                pass = et_pass.getText().toString();

                sharedHelper.save(name,pass);

            }
        });

    }

    @Override
    protected void onStart() {
        super.onStart();
        Map<String,String> data = sharedHelper.read();
        et_name.setText(data.get("name"));
        et_pass.setText(data.get("password"));
    }

	}


把读取数据写到onStart()方法中，在下次进入应用后就直接进行回显

主要是学习大神们的代码规范，少年，努力吧！！！

3、MD5

1)Message Digest Algorithm MD5（中文名字为消息摘要算法第5版），为计算机安全领域广泛使用的一种散列函数，用于提供消息的完整性保护

也就是说，它就是一种加密算法，可以将一个字符串，或者是一个文件，压缩包，执行MD5加密后，就可以产生一个固定长度的128bit的串，一个十六进制需要4个bit来表示，那么MD5的字符串长度就为128/4=32位，要是有的MD5是16位的，那是把32的去掉了前8位，后8位，

MD5在线解密，[http://www.cmd5.com/](http://www.cmd5.com/)。。

你对文件进行1次加密，人家很容易给你破解，那你就对文件进行100次加密，，，，，，


4、工具类

保存一个SharedPreferences工具类，工具类来源于鸿洋大神的blog~

	import android.content.Context;
	import android.content.SharedPreferences;
	import java.util.Map;

	public class SPUtils {
    /**
     * 保存在手机里的SP文件名
     */
    public static final String FILE_NAME = "my_sp";

    /**
     * 保存数据
     */
    public static void put(Context context, String key, Object obj) {
        SharedPreferences sp = context.getSharedPreferences(FILE_NAME, context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sp.edit();
        if (obj instanceof Boolean) {
            editor.putBoolean(key, (Boolean) obj);
        } else if (obj instanceof Float) {
            editor.putFloat(key, (Float) obj);
        } else if (obj instanceof Integer) {
            editor.putInt(key, (Integer) obj);
        } else if (obj instanceof Long) {
            editor.putLong(key, (Long) obj);
        } else {
            editor.putString(key, (String) obj);
        }
        editor.commit();
    }


    /**
     * 获取指定数据
     */
    public static Object get(Context context, String key, Object defaultObj) {
        SharedPreferences sp = context.getSharedPreferences(FILE_NAME, context.MODE_PRIVATE);
        if (defaultObj instanceof Boolean) {
            return sp.getBoolean(key, (Boolean) defaultObj);
        } else if (defaultObj instanceof Float) {
            return sp.getFloat(key, (Float) defaultObj);
        } else if (defaultObj instanceof Integer) {
            return sp.getInt(key, (Integer) defaultObj);
        } else if (defaultObj instanceof Long) {
            return sp.getLong(key, (Long) defaultObj);
        } else if (defaultObj instanceof String) {
            return sp.getString(key, (String) defaultObj);
        }
        return null;
    }

    /**
     * 删除指定数据
     */
    public static void remove(Context context, String key) {
        SharedPreferences sp = context.getSharedPreferences(FILE_NAME, context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sp.edit();
        editor.remove(key);
        editor.commit();
    }


    /**
     * 返回所有键值对
     */
    public static Map<String, ?> getAll(Context context) {
        SharedPreferences sp = context.getSharedPreferences(FILE_NAME, context.MODE_PRIVATE);
        Map<String, ?> map = sp.getAll();
        return map;
    }

    /**
     * 删除所有数据
     */
    public static void clear(Context context) {
        SharedPreferences sp = context.getSharedPreferences(FILE_NAME, context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sp.edit();
        editor.clear();
        editor.commit();
    }

    /**
     * 检查key对应的数据是否存在
     */
    public static boolean contains(Context context, String key) {
        SharedPreferences sp = context.getSharedPreferences(FILE_NAME, context.MODE_PRIVATE);
        return sp.contains(key);
    }

	}


	























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































