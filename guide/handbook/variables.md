# 变量

创建一个变量并赋值：

```dart
var name = 'Bob' ; 
```

变量存储引用。调用的变量==name==包含对==String==值为“Bob” 的对象的引用。

变量==name==自动推断变量的类型为==String==，但可以通过指定它来更改该类型。如果对象不限于单一类型，请按照设计准则指定==Object==或==dynamic==类型 。

```dart
dynamic name = 'Bob' ; 
```

另一种选择是显式声明将推断出的类型：

```dart
String name = 'Bob' ; 
```

## 默认值

未初始化的变量的初始值为`null`。即使是具有类型未赋值的变量也是 `null`，无论什么类型的变量，在没有赋初始值的情况下，默认值为 `null`。

```dart
int lineCount;
print(lineCount); // null
assert(lineCount == null);
```

null也是对象，所以未初始化的 Dart 变量都指向null对象。


:::tip 提示
==assert()== 在项目生产时不要使用，请在开发期间使用，如果条件不为==true==，则会抛出异常，详情请参考： [assert]()。
:::

## final 与 const

如果变量的值是一个不变的值，请使用 ==final== 或 ==const== 代替 var 或类型。final 只能赋值一次；const 则是编译时的常量；const 一经声明就不能再次赋值；

创建和设置final变量：

```dart
final name; // 无类型注释
final String nickname = 'Bobby'; // 类型注释 String
name = 'Bob'; // 赋值第一次
name = 'Alice'; //错误：final变量 只能设置一次
```

:::warning 注意
final变量与类变量在首次访问时才执行初始化
:::

例如：

```dart
final name = getName();

String getName() {
  print('getName');
  return 'bob';
}

const String nickname = 'Bobby';

main() {
    print(nickname);
    print(name)
}
```

运行结果：
```
Bobby
getName
bob
```
==final== 变量在没有访问时，是不会自动进行赋值的。所以并没有 打印出 getName。等到访问name变量时才调用 ==getName()== 函数进行赋值。


创建和设置const 常量：

```dart
const String nickname = 'Bobby';
nickname = 'Alice'; // 错误：const变量不能再次赋值；
```

const 关键字不只是用于声明常量，还可以用它来创建常量值；以及声明创建常量值的构造函数。任何变量都可以具有常量值。

例如：
```dart
var foo = const [];
foo = [1, 2, 3]; // 第一次赋值；
foo = [2, 3, 4]; // 错误： const变量不能再次赋值；
```

如果是 final 变量就不能再次赋值：
```dart
final bar = const [];
bar = [1, 2, 3]; // 错误：final变量 只能设置一次
```
