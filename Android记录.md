2016年5月22，今天我无意间CSDN上有一个博主发的博客，虽然是基础，但是我却有的见过，用过，有的却都没有见过，不知道都是什么东东，然后我觉得应该学习下，然后顺便记录下，以便以后的使用。

##1、.9图
###1、.9图有什么用？
.9图就是说，图片在拉伸的时候特定的区域不会发生图片失真，不失真的区域由我们自己控制。
###2、用什么搞.9图
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
##4、