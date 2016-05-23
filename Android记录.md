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

step 1：个个都是fill_parent,但是屏幕只有一个啦,那么1 - 3 = - 2 fill_parent 

step 2：依次比例是1/6,2/6,3/6 

step 3：先到先得,先分给one,计算: 1 - 2 * (1/6) = 2/3 fill_parent 
接着到two,计算: 1 - 2 * (2/6) = 1/3 fill_parent 
最后到three,计算 1 - 2 * (3/6) = 0 fill_parent 

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


























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































