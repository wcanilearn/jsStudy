//注意Nan == Nan     的结构false
//js中==只比较值，但是===会同时比较类型,如下
/*
    let x = "123", a = 123
    if (a == x) {                       //true
        console.log("equals")
    }
    if(a === x){                        //false
        console.log("NO")
    }
*/

//js有自己的回收机制，即使是使用new创建的对象也不需要手动释放
//如果想要判断数组是否越界可以使用undefine来判断if(array[3] === undefine),那么数组越界
//js中的对象就是map，dict但是其中的key都是string类型
//对于js中的块的理解，类似于作用域，但是可以随时随地使用{}获取一个块,if,for的{}也是一个块
/*js中var,let,const:
    使用var申明的变量可以在其它块中使用,但注意，只能是在用一个函数中跨块，例如在函数func()中定义的不能在main()函数中使用
    使用let申明的变量在其它快中不可用
    使用conse申明常量(不可修改),并且在其它块中不可使用
    如果不使用以上三种之一来申明变量，那么会认为是全局变量，但是在stric模式下不支持
*/
//在js中，浮点类型的计算并不是那么精切，所以和其他语言一样使用一个比较小的范围来比较浮点类型是否相等


//-------------string-----------------------------
//js中的字符串类似于python不可以直接使用下标修改字符串内容，但是并不会报错
//.length
//toUpperCase()   toLowerCase()
//indexOf()类似于find
//substring

//-------------数组-----------------------------------
//.length 可以直接给length赋值修改数组长度,增长补"undefined",缩短直接截断(直接修改length对于string类型无效)
//可以直接使用下标赋值,如下
/*
    var arr = [1, 2, 3];
    arr[5] = 'x';
    arr; // arr变为[1, 2, 3, undefined, undefined, 'x']
*/
//slice  类似与substring，js中数组A直接使用数值运算符给B赋值，那么A,B使用的都是同一个数组，类似于引用。所以如果想要拷贝A给B可以使用slice
//push pop
//如果要往Array的头部添加若干元素，使用unshift()方法，shift()方法则把Array的第一个元素删掉
//sort reverse
//splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素,返回值是被删除的元素!!!!!!!!!!!!!!!!!!!!
//concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array,concat()方法并没有修改当前Array，而是返回了一个新的Array  类似于python中的append
//join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，返回连接后的字符串
//
//js中的对象和python中的dict相似，不同点是，js中对象的key都是string类型,可以使用object.prop访问(该prop命令规范)/或者object[prop]
//如果直接使用'='将一个对象变量A赋值给另一个变量B，那么A,B操作的都是同一个对象实体(浅拷贝，可以理解成引用,和上面数组同理)
//如果想要深拷贝: 1,Object.assign()(如果对象成员都是基础数据类型)   2,手动拷贝  3.JSON库函数  4,拓展运算符
//hasOwnProperty 用来判断对象中是否有某属性
//
//js中也可以使用for(var i in object),和python类似