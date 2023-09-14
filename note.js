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
//
//js中的map使用二维数组初始化var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);或者初始化一个空map： var m = new Map();
//js中的map使用get,set,delete的函数操作值,不能直接使用下标操作
//
//set使用 一维数组初始化，或者直接定义为空
//使用add,delete操作其中的元素
//ps: map和set的初始化方式比较固定(二位数组/一维数组或者为空)不想c++那么自由
//
//js中使用iterable便利set,map或者array(array当然也可以用下标遍历)
//在js中完全可以将数组看作一个object，下标就是key，下标对应的元素就是value。
//使用"for in"其实遍历的属性名称(可以理解成key),例如：
/*
    var a = ['A', 'B', 'C'];
    a.name = 'Hello';
    for (var x in a) {
        console.log(x); // '0', '1', '2', 'name'
    }
*/
//"for of"循环则修复了这个问题，
/*
    var a = ['A', 'B', 'C'];
    a.name = 'Hello';
    for (var x of a) {
        console.log(x); // 'A', 'B', 'C'
    }
*/

//更好的方式是直接使用iterable内置的forEach方法，它接收一个函数，每次迭代就自动回调该函数。
//注意，使用forEach方法会自动调用数组里面undefined元素
/*
    a.forEach(function (element, index, array) {
        // element: 指向当前元素的值
        // index: 指向当前索引
        // array: 指向Array对象本身
        console.log(element + ', index = ' + index);
    });
*/
//set回调函数的前2个参数都是元素本身，map的回调函数参数是value,key,map
//
//js中，定义函数的方式: function + ${函数名}(${参数列表}){${函数体}}
//js中的匿名函数可以直接赋值给一个对象,类似c++中的std::function<>
//假设函数只需要一个参数，那么无论多传(只使用需要用的)或者少传(没穿的参数是'undefined')都不会报错，
/*
    function abs(x) {
        if (typeof x !== 'number') {
            throw 'Not a number';
        }
        if (x >= 0) {
            return x;
        } else {
            return -x;
        }
    }
*/
//js函数用含有一个arguments参数，指向所有参数，类似于argv(),但是其中的类型还是参数本身的2类型，argument神奇使用：
/*
    // foo(a[, b], c)(b是可选参数)
    // 接收2~3个参数，b是可选参数，如果只传2个参数，b默认为null：
    function foo(a, b, c) {
        if (arguments.length === 2) {
            // 实际拿到的参数是a和b，c为undefined
            c = b; // 把b赋给c
            b = null; // b变为默认值
        }
        // ...
    }
*/

//js中有...reset参数，类似于python中的*args
//小心js会自动在每一行的最后加上';所以有时候需要小心语义被改变,特别是在return的时候
//
//JavaScript的函数可以嵌套，此时，内部函数可以访问外部函数定义的变量，反过来则不行
//js的函数中有 "变量提升" 特性: 会将函数体内部的变量声明提升，但是并不会提升，所以有了一下结果
/*
    function foo() {
        var y; // 提升变量y的申明，此时y为undefined
        var x = 'Hello, ' + y;
        console.log(x); // hello undefined
        y = 'Bob';
    }
*/
//因此，在js代码中"切记"在函数开头直接定义所有变量
//
//js中的作用域     "window"
//其实写的js代码都在一个叫做"window"的对象下，定义出来的全局变量(函数也可以理解成一个变量)都是windows下的一个属性
//到这里可以看出前面直接将一个函数赋值给变量，其中那个函数也是全局函数
//js中如果在当前函数作用域中没有找到对应的变量就会一直网上找，在window下都没有找到的话就会抛出‘ReferenceError’错误
//在不同的js文件中定义了同名的变量或者函数都会造成命名冲突所以可以将所有变量和函数绑定到一个全局变量中,如下：
/*
    // 唯一的全局变量MYAPP:
    var MYAPP = {};

    // 其他变量:
    MYAPP.name = 'myapp';
    MYAPP.version = 1.0;

    // 其他函数:
    MYAPP.foo = function () {
        return 'foo';
    };
*/
//
//js中有解构赋值的特性，和python有点类似
//如果结构的是数组，按照顺序赋值，结构的object按照属性名对应
//js中的解构赋值还可以结构object,赋值运算符左边的变量名需要和object中的属性名一致,如下：
/*
    var person = {
        name: '小明',
        age: 20,
        gender: 'male',
        passport: 'G-12345678',
        school: 'No.4 middle school'
    };

    // 把passport属性赋值给变量id:
    let {name, passport:id} = person;
    // 如果object可能不存在某个属性，可以设置一个默认值(不设置的话就是undefined)
    let {name, ip:true} = person;// name = 小明   ip = true
*/
//在js中也是使用this指向当前对象,如果在全局函数中使用this，指向window对象,小心下面这种情况。
/*
    var xiaoming = {
        name: '小明',
        birth: 1990,
        age: function () {
            function getAgeFromBirth() {
                var y = new Date().getFullYear();
                return y - this.birth;
            }
            return getAgeFromBirth();
        }
    };
    xiaoming.age();// undefined，因为这里的this指针时上级函数的this指针，上级函数属于window对象
*/
//js中也提供了调用某个函数时修改函数中this指针指向的关键字apply和call,二者的区别在于前者将参数打包成array传入，后者直接按顺序传入,如下
/*
    Math.max.apply(null, [3, 5, 4]); // 5
    Math.max.call(null, 3, 5, 4); // 5
*/
// 对普通函数调用，我们通常把this绑定为null,apply的应用

// 现在假定我们想统计一下代码一共调用了多少次parseInt()
/*
    var count = 0;
    var oldParseInt = parseInt; // 保存原函数

    window.parseInt = function () {
        count += 1;
        return oldParseInt.apply(null, arguments); // 调用原函数
    };
*/
// 虽然有这样的作用，但是暂时还没想到这有啥用(或许就在于不修改源码的情况下可以将原有的函数封装？这里使用apply的意义在于提心之后调用某些函数可能需要指定this指向？)