# 内置类型

Dart 语言支持以下内置类型：

- numbers
- strings
- booleans
- lists (也被称为 arrays)
- maps
- runes (用于在字符串中表示 Unicode 字符)
- symbols

这些类型都可以被初始化为字面量。 例如, =='this is a string'== 是一个字符串的字面量， true 是一个布尔的字面量。

因为在 Dart 所有的变量终究是一个对象（一个类的实例）， 所以变量可以使用 构造涵数 进行初始化。 一些内建类型拥有自己的构造函数。 例如， 通过 Map() 来构造一个 map 变量。

## 数字

Dart 语言的 数字 有两种类型:

- [int]()

整数值不大于64位， 具体取决于平台。 在 Dart VM 上， 值的范围从 -2<sup>63</sup> 到 2<sup>63</sup>  - 1。 Dart 被编译为 JavaScript 时，使用 [JavaScript numbers](https://stackoverflow.com/questions/2802957/number-of-bits-in-javascript-numbers/2803010#2803010), 值的范围从 -2<sup>53</sup>  到 2<sup>53</sup>  - 1。

- [double]()

64位（双精度）浮点数，依据 IEEE 754 标准。

int 和 double 都是[num](https://api.dart.ranyunlong.com/dart-core/num-class.html)的子类型。 [num](https://api.dart.ranyunlong.com/dart-core/num-class.html) 类型包括基本运算 +， -， /， 和 *， 以及 ==abs()==， ==ceil()==， 和 ==floor()==， 等函数方法。 （按位运算符，例如 >>，定义在 int 类中。） 如果 [num](https://api.dart.ranyunlong.com/dart-core/num-class.html) 及其子类型找不到你想要的方法， 尝试使用 [dart:math](https://api.dart.ranyunlong.com/dart-math/dart-math-library.html) 库。

整数类型不包含小数点。 下面是定义整数类型字面量的例子:

```dart
var x = 1;
var hex = 0xDEADBEEF;
```
如果一个数字包含小数点，那么就是小数类型。 下面是定义小数类型字面量的例子:

```dart
var y = 1.1;
var exponents = 1.42e5;
```

从 Dart 2.1 开始，必要的时候 int 字面量会自动转换成 double 类型。

```dart
double z = 1; // 相当于 double z = 1.0.
```

:::tip 提示
在 2.1 之前，在 double 上下文中使用 int 字面量是错误的。
:::

以下是将字符串转换为数字的方法，反之亦然：

```dart
// String -> int
var one = int.parse('1');
assert(one == 1);

// String -> double
var onePointOne = double.parse('1.1');
assert(onePointOne == 1.1);

// int -> String
String oneAsString = 1.toString();
assert(oneAsString == '1');

// double -> String
String piAsString = 3.14159.toStringAsFixed(2);
assert(piAsString == '3.14');
```
int 特有的传统按位运算操作，移位（<<， >>），按位与（&）以及 按位或（|）。 例如：

```dart
assert((3 << 1) == 6); // 0011 << 1 == 0110
assert((3 >> 1) == 1); // 0011 >> 1 == 0001
assert((3 | 4) == 7); // 0011 | 0100 == 0111
```

数字类型字面量是编译时常量。 在算术表达式中，只要参与计算的因子是编译时常量， 那么算术表达式的结果也是编译时常量。

```dart
const msPerSecond = 1000;
const secondsUntilRetry = 5;
const msUntilRetry = secondsUntilRetry * msPerSecond;
```

## 字符串

Dart 字符串是一组 UTF-16 单元序列。 字符串通过单引号或者双引号创建。
```dart
var s1 = 'Single quotes work well for string literals.';
var s2 = "Double quotes work just as well.";
var s3 = 'It\'s easy to escape the string delimiter.';
var s4 = "It's even easier to use the other delimiter.";
```

字符串可以通过 ==${expression}== 的方式内嵌表达式。 如果表达式是一个标识符，则 {} 可以省略。 在 Dart 中通过调用就对象的 ==toString()== 方法来得到对象相应的字符串。

```dart
var s = 'string interpolation';

assert('Dart has $s, which is very handy.' ==
    'Dart has string interpolation, ' +
        'which is very handy.');
assert('That deserves all caps. ' +
        '${s.toUpperCase()} is very handy!' ==
    'That deserves all caps. ' +
        'STRING INTERPOLATION is very handy!');
```
:::tip 提示
== 运算符用来测试两个对象是否相等。 在字符串中，如果两个字符串包含了相同的编码序列，那么这两个字符串相等。
:::

可以使用 ==+== 运算符来把多个字符串连接为一个，也可以把多个字面量字符串写在一起来实现字符串连接：

```dart
var s1 = 'String '
    'concatenation'
    " works even over line breaks.";
assert(s1 ==
    'String concatenation works even over '
    'line breaks.');

var s2 = 'The + operator ' + 'works, as well.';
assert(s2 == 'The + operator works, as well.');
```

使用连续三个单引号或者三个双引号实现多行字符串对象的创建：

```dart
var s1 = '''
You can create
multi-line strings like this one.
''';

var s2 = """This is also a
multi-line string.""";
```

使用 r 前缀，可以创建 “原始 raw” 字符串不进行字符串转义：

```dart
var s = r"In a raw string, even \n isn't special.";
```

参考 [Runes]() 来了解如何在字符串中表达 Unicode 字符。

一个编译时常量的字面量字符串中，如果存在插值表达式，表达式内容也是编译时常量， 那么该字符串依旧是编译时常量。 插入的常量值类型可以是 null，数值，字符串或布尔值。

```dart
// const 类型数据
const aConstNum = 0;
const aConstBool = true;
const aConstString = 'a constant string';

// 非 const 类型数据
var aNum = 0;
var aBool = true;
var aString = 'a string';
const aConstList = [1, 2, 3];

const validConstString = '$aConstNum $aConstBool $aConstString'; //const 类型数据
// const invalidConstString = '$aNum $aBool $aString $aConstList'; //非 const 类型数据
```
更多关于 string 的使用, 参考 [字符串和正则表达式]().

## 布尔

Booleans
Dart 使用 bool 类型表示布尔值。 Dart 只有字面量 ==true== and ==false== 是布尔类型， 这两个对象都是编译时常量。

Dart 的类型安全意味着不能使用 ==if (nonbooleanValue)== 或者 ==assert (nonbooleanValue)==。 而是应该像下面这样，明确的进行值检查：

```dart
// 检查空字符串。
var fullName = '';
assert(fullName.isEmpty);

// 检查 0 值。
var hitPoints = 0;
assert(hitPoints <= 0);

// 检查 null 值。
var unicorn;
assert(unicorn == null);

// 检查 NaN 。
var iMeantToDoThis = 0 / 0;
assert(iMeantToDoThis.isNaN);
```

## List

Lists
几乎每种编程语言中最常见的集合可能是 array 或有序的对象集合。 在 Dart 中的 array 就是 [List]() 对象， 通常称之为 lists 。

Dart 中的 list 字面量非常像 JavaScript 中的 array 字面量。 下面是一个 Dart list 的示例：

```dart
var list = [1, 2, 3];
```

:::tip 提示
分析器推断 ==list== 的类型为 ==List&lg;int&gt;== 。 如果尝试将非整数对象添加到此 list 中， 则分析器或运行时会引发错误。 有关更多信息，请阅读 [类型推断]()。
:::

Lists 的下标索引从 0 开始，第一个元素的索引是 0。 list.length - 1 是最后一个元素的索引。 访问 list 的长度和元素与 JavaScript 中的用法一样：

```dart
var list = [1, 2, 3];
assert(list.length == 3);
assert(list[1] == 2);

list[1] = 1;
assert(list[1] == 1);
```

在 list 字面量之前添加 const 关键字，可以定义 list 类型的编译时常量：

```dart
var constantList = const [1, 2, 3];
// constantList[1] = 1; // 取消注释会引起错误。
```
List 类型包含了很多 lists 的操作函数。 更多信息参考 [泛型]() 和 [集合]().

## Map

通常来说， map 是用来关联 keys 和 values 的对象。 keys 和 values 可以是任何类型的对象。在一个 map 对象中一个 key 只能出现一次。 但是 value 可以出现多次。 Dart 中 map 通过 map 字面量 和 [Map]() 类型来实现。

下面是使用 map 字面量的两个简单例子：

```dart
var gifts = {
  // Key:    Value
  'first': 'partridge',
  'second': 'turtledoves',
  'fifth': 'golden rings'
};

var nobleGases = {
  2: 'helium',
  10: 'neon',
  18: 'argon',
};
```

:::tip 提示 
分析器会将 gifts 的类型推断为 Map<String, String>， nobleGases 的类型推断为 ==Map&lt;int, String&gt;== 。 如果尝试在上面的 map 中添加错误类型，那么分析器或者运行时会引发错误。 有关更多信息，请阅读[类型推断]()。
:::

以上 map 对象也可以使用 Map 构造函数创建：

```dart
var gifts = Map();
gifts['first'] = 'partridge';
gifts['second'] = 'turtledoves';
gifts['fifth'] = 'golden rings';

var nobleGases = Map();
nobleGases[2] = 'helium';
nobleGases[10] = 'neon';
nobleGases[18] = 'argon';
```

这里为什么只有 Map() ，而不是使用 new Map()。 因为在 Dart 2 中，new 关键字是可选的。 有关更多信息，参考 [构造函数的使用]()。

类似 JavaScript ，添加 key-value 对到已有的 map 中：

```dart
var gifts = {'first': 'partridge'};
gifts['fourth'] = 'calling birds'; // Add a key-value pair
```

类似 JavaScript ，从一个 map 中获取一个 value：

```dart
var gifts = {'first': 'partridge'};
assert(gifts['first'] == 'partridge');
```
如果 map 中不包含所要查找的 key，那么 map 返回 null：

```dart
var gifts = {'first': 'partridge'};
assert(gifts['fifth'] == null);
```

使用 ==.length== 函数获取当前 map 中的 key-value 对数量：

```dart
var gifts = {'first': 'partridge'};
gifts['fourth'] = 'calling birds';
assert(gifts.length == 2);
```
创建 map 类型运行时常量，要在 map 字面量前加上关键字 ==const==。 add ==const== before the map literal:

```dart
final constantMap = const {
  2: 'helium',
  10: 'neon',
  18: 'argon',
};

// constantMap[2] = 'Helium'; // 取消注释会引起错误。
```

更名多关于 map 的内容，参考 [Generics]() 和 [Maps]().


## Rune

在 Dart 中，runes 用来表示字符串中的 UTF-32 编码字符。

Unicode 定义了一个全球的书写系统编码， 系统中使用的所有字母，数字和符号都对应唯一的数值编码。 由于 Dart 字符串是一系列 UTF-16 编码单元， 因此要在字符串中表示32位 Unicode 值需要特殊语法支持。

表示 Unicode 编码的常用方法是， ==\uXXXX==, 这里 XXXX 是一个4位的16进制数。 例如，心形符号 (♥) 是 ==\u2665==。 对于特殊的非 4 个数值的情况， 把编码值放到大括号中即可。 例如，emoji 的笑脸 (😆) 是 ==\u{1f600}==。

[String]() 类有一些属性可以获得 rune 数据。 属性 ==codeUnitAt== 和 ==codeUnit== 返回16位编码数据。 属性 ==runes== 获取字符串中的 runes 。

下面是示例演示了 runes、 16-bit code units、 和 32-bit code points 之间的关系。 点击运行按钮 ![run](../images/red-run-50a66e01c7e7a877dbc06e799d5bc4b73c4dace2926ec17b4493d8c3e939c59a.png) 查看 runes 结果。

<iframe style="border:none" width="100%" height="300" src="https://dartpad.cn/embed-inline.html?id=5d70bc1889d055c7a18d35d77874af88&verticalRatio=60"></iframe>

:::warning 提示
谨慎使用 list 方式操作 runes。 这种方法很容易引发崩溃， 具体原因取决于特定的语言，字符集和操作。 有关更多信息，参考 [How do I reverse a String in Dart? on Stack Overflow](https://stackoverflow.com/questions/21521729/how-do-i-reverse-a-string-in-dart).
:::

## Symbol

一个 Symbol 对象表示 Dart 程序中声明的运算符或者标识符。 你也许永远都不需要使用 Symbol ，但要按名称引用标识符的 API 时， Symbol 就非常有用了。 因为代码压缩后会改变标识符的名称，但不会改变标识符的符号。 通过字面量 Symbol ，也就是标识符前面添加一个 ==#== 号，来获取标识符的 Symbol 。

```dart
#radix
#bar
```

Symbol 字面量是编译时常量。