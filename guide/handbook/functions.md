# 函数

Dart 是一门真正面向对象的语言， 甚至其中的函数也是对象，并且有它的类型 [Function](https://api.dart.ranyunlong.com/dart-core/Function-class.html) 。 这也意味着函数可以被赋值给变量或者作为参数传递给其他函数。 也可以把 Dart 类的实例当做方法来调用。 有关更多信息，参考 [Callable classes]().

已下是函数实现的示例：

```dart
bool isNoble(int atomicNumber) {
  return _nobleGases[atomicNumber] != null;
}
```
虽然在 Effective Dart 中推荐 [公共API中声明类型](), 但是省略了类型声明，函数依旧是可以正常使用的：

```dart
isNoble(atomicNumber) {
  return _nobleGases[atomicNumber] != null;
}
```
如果函数中只有一句表达式，可以使用简写语法：

```dart
bool isNoble(int atomicNumber) => _nobleGases[atomicNumber] != null;
```

=> expr 语法是 =={ return expr; }== 的简写。 => 符号 有时也被称为 箭头 语法。

:::tip 提示
在箭头 (=>) 和分号 ( ; ) 之间只能使用一个 表达式 ，不能是 语句 。 例如：不能使用 [if 语句]() ，但是可以是用 [条件表达式]().
:::

函数有两种参数类型: required 和 optional。 required 类型参数在参数最前面， 随后是 optional 类型参数。 命名的可选参数也可以标记为 “@ required” 。 参考下一章节，了解更多细节。

## 可选参数

可选参数可以是命名参数或者位置参数，但一个参数只能选择其中一种方式修饰。

### 命名可选参数
调用函数时，可以使用指定命名参数 ==paramName: value==。 例如：

```dart
enableFlags(bold: true, hidden: false);
```

定义函数是，使用 =={param1, param2, …}== 来指定命名参数：
```dart
/// Sets the [bold] and [hidden] flags ...
void enableFlags({bool bold, bool hidden}) {...}
```

[Flutter](https://flutter.io/) 创建实例的表达式可能很复杂， 因此窗口小部件构造函数仅使用命名参数。 这样创建实例的表达式更易于阅读。

使用 [@required](https://pub.dartlang.org/documentation/meta/latest/meta/required-constant.html) 注释表示参数是 required 性质的命名参数， 该方式可以在任何 Dart 代码中使用（不仅仅是Flutter）。

```dart
const Scrollbar({Key key, @required Widget child})
```

此时 ==Scrollbar== 是一个构造函数， 当 ==child== 参数缺少时，分析器会提示错误。

[Required]() 被定义在 [meta]() package。 无论是直接引入（import） ==package:meta/meta.dart== ，或者引入了其他 package，而这个 package 输出（export）了 ==meta==，比如 Flutter 的 ==package:flutter/material.dart==。

### 位置可选参数
将参数放到 [] 中来标记参数是可选的：

```dart
String say(String from, String msg, [String device]) {
  var result = '$from says $msg';
  if (device != null) {
    result = '$result with a $device';
  }
  return result;
}
```

下面是不使用可选参数调用上面方法 的示例：

```dart
assert(say('Bob', 'Howdy') == 'Bob says Howdy');
```

下面是使用可选参数调用上面方法的示例：

```dart
assert(say('Bob', 'Howdy', 'smoke signal') ==
    'Bob says Howdy with a smoke signal');
```

### 默认参数值

在定义方法的时候，可以使用 = 来定义可选参数的默认值。 默认值只能是编译时常量。 如果没有提供默认值，则默认值为 null。

下面是设置可选参数默认值示例：

```dart
/// 设置 [bold] 和 [hidden] 标志 ...
void enableFlags({bool bold = false, bool hidden = false}) {...}

// bold 值为 true; hidden 值为 false.
enableFlags(bold: true);
```
:::tip 不推荐
旧版本代码中可能使用的是冒号 (`:`) 而不是 = 来设置参数默认值。 原因是起初命名参数只支持 : 。 这种支持可能会被弃用。 建议 使用 = 指定默认值。
:::

下面示例演示了如何为位置参数设置默认值：

```dart
String say(String from, String msg,
    [String device = 'carrier pigeon', String mood]) {
  var result = '$from says $msg';
  if (device != null) {
    result = '$result with a $device';
  }
  if (mood != null) {
    result = '$result (in a $mood mood)';
  }
  return result;
}

assert(say('Bob', 'Howdy') ==
    'Bob says Howdy with a carrier pigeon');
```

list 或 map 可以作为默认值传递。 下面的示例定义了一个方法 ==doStuff()==， 并分别指定参数 ==list== 和 ==gifts== 的默认值。
```dart
void doStuff(
    {List<int> list = const [1, 2, 3],
    Map<String, String> gifts = const {
      'first': 'paper',
      'second': 'cotton',
      'third': 'leather'
    }}) {
  print('list:  $list');
  print('gifts: $gifts');
}
```

## main() 函数

每个应用程序都必须具有顶级main()函数，该函数用作应用程序的入口点。

==main()==函数返回==void==，并具有 ==List<Generic :value="['String']" />== 参数的可选参数。

以下==main()==函数是Web应用程序功能的示例：
```dart
void main() {
  querySelector('#sample_text_id')
    ..text = 'Click me!'
    ..onClick.listen(reverseText);
}
```

:::tip 提示
==..== 语法是被称为[cascade 级联]语法。 用于对同一个对象进行多次操作，上面案例中对 querySelector('#sample_text_id')返回的对象，的属性成员 ==text== 进行赋值操作；对querySelector('#sample_text_id')返回的对象添加了一个 ==onClick== 事件的侦听。
:::

以下main()是带参数的命令行应用程序的函数示例：
```dart
// Run the app like this: dart args.dart 1 test
void main(List<String> arguments) {
  print(arguments);

  assert(arguments.length == 2);
  assert(int.parse(arguments[0]) == 1);
  assert(arguments[1] == 'test');
}
```

还可以使用[args](https://pub.dartlang.org/packages/args)库来定义和解析命令行参数。

## 函数作为对象使用

您可以将函数作为参数传递给另一个函数。例如：
```dart
void printElement(int element) {
  print(element);
}

var list = [1, 2, 3];

// 将printElement作为参数传递。
list.forEach(printElement);
```

您还可以为变量分配函数，例如：

```dart
var loudify = (msg) => '!!! ${msg.toUpperCase()} !!!';
assert(loudify('hello') == '!!! HELLO !!!');
```
上面的案例使用了匿名函数。函数体 ==(msg) => '!!! ${msg.toUpperCase()} !!!';== 类似 ==JavaScript== 的箭头函数。有关[匿名函数](#匿名函数)请参考下一节内容。

## 匿名函数

大多数函数都被命名，例如 ==main()== 或 ==printElement()== 。当然也可以创建匿名函数，以便分配到不同的变量中。或者在集合中添加或删除它。

在使用函数时将匿名函数做为参数传递：
```dart
var list = ['apples', 'bananas', 'oranges'];
list.forEach((item) {
  print('${list.indexOf(item)}: $item');
});
```
点击按钮 ![运行](/red-run.png)运行该案例代码：


<DartPad
    id="5d70bc1889d055c7a18d35d77874af88"
    vertical-ratio="60"
    height="300"
/>

如果函数只有一个语句，也可以用箭头函数来简化代码，将以下代码替换上面dartpad中的代码 看看代码运行结果是否相同：
<DartPad
    id="80e3d93e85626f511900c3a49ffcc1ea"
    vertical-ratio="60"
    height="300"
/>


## 函数作用域

Dart 使用词法作用域（也称为静态作用域），即变量的作用域在定义时确定。

作用域范围由变量所处代码块（大括号）的层级决定，层级越深，作用域越小，层级越浅，作用域越大。

不被任何代码块包含的变量通常称为顶层变量，它们的作用域最大。

<DartPad
    id="1ebe714df6366bde5a23fa673dc1f750"
    vertical-ratio="70"
    height="650"
/>

## 闭包

闭包（closure）是指一个函数对象，即使不在初始作用域内，也仍然能够访问其中的变量。

<DartPad
    id="0598a70d7fe40e8ad9817488cae993e4"
    vertical-ratio="70"
    height="550"
/>

## 检测函数是否相等

以下是测试顶级函数，静态方法和实例方法是否相等的例子：
<DartPad
    id="3d5f185191619211f694ec90ada4df36"
    vertical-ratio="80"
    height="900"
/>


## 返回值

所有函数都返回一个值。如果未指定返回值，则将语句 ==return null;== 隐式附加到函数体。
也就是说，如果函数不添加返回值。 则默认返回null;

<DartPad
    id="8f453a38fbe93869c90178f8e542e9b4"
    vertical-ratio="60"
    height="300"
/>

