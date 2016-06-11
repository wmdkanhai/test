JNI:java本地开发接口。

JNI是一个协议，这个协议用来连接java和外部的本地代码（c/c++）,,,也就是说，通过这个协议，java就可以调用外部的c/c++代码，外部的c/c++代码也可以调用java代码。

物联网，智能家居，车载电脑


C语言开始学习

1、c的基本类型

char int float double long short signed unsigned

* int :32位，能表示的数字是2的32次方
* 最高位用来表示符号位，还剩下31位可以表示数值，所以能表示的数字就是2的31次方
* int的表示范围：-2的31次方~~~2的31次方
	* 当最高位是0时：0~2147483647
	* 当最高位是1时：-2147483648~-1

c的基本数据类型的长度s
* short:2
* int :4
* long:4
* char:1
* float:4
* double:8
* 

java中的基本数据类型长度

* byte:1
* short:2
* int:4
* long:8
* boolean:1
* char:2
* float:4
* double:8

2、C的输出函数

	#include <stdio.h>
	#include <stdlib.h>

	/*
	%d - int 
	%ld - long int
	%hd - 短整型
	%c - char
	%f - float
	%lf - double
	%u - 无符号数
	%x - 十六进制输出 int 或者long int 或者short int
	%o - 八进制输出
	%s - 字符串
	*/

	main(){
	int i = -3;
	long l = 3456;
	char c = 'a'; 
	float f = 3.14444444;
	double d = 3.1444444;
	char arr[] = "你好";
	
	printf("%c\n",c);
	printf("%d\n",i); 
	printf("%f\n",f);
	printf("%lf\n",d);
	printf("%u\n",i);
	printf("%#x\n",l);
	printf("%#o\n",l);
	printf("%s\n",arr);	
	}


记住一般都是用%d来占位

3、c的出入函数

scanf();

	#include <stdio.h>
	#include <stdlib.h>

	main(){
		printf("请输入班级的人数\n");
	
		int number;
		//&:取出number的内存地址 
		scanf("%d",&number);
	
		printf("班级的人数为%d：\n",number); 
	}


4、*的三种用法
1）乘法
2）int* p:定义一个指针变量p,p中存放一个内存地址，这个内存地址所存放的数据规定是int型
3）*p:取出p中保存的内存地址存放的数据

5、数据传递：

所有的语言所有的平台，都只是值传递，引用传递，传递的值是内存地址

	#include <stdio.h>
	#include <stdlib.h>

	//进行数据交换 
	void swap(int* p,int*q){
		int temp = *p;
		*p = *q;
		*q = temp;
	} 

	main(){
		int i = 3;
		int j = 5;
	
		printf("i=%d\n",i);
		printf("j=%d\n",j);
	
		swap(&i,&j);
		
		printf("i=%d\n",i);
		printf("j=%d\n",j);
	
	}

打印的结果：已经进行了数据的互换

![](http://i.imgur.com/HebR9g6.png)

###注意：要是不是互换的内存地址的话，那这两个数值是交换不了的。。。