# 运算符

以下列出 Dart 的运算符，从高到低按照优先级排列：

描述|运算符
--|--
一元运算符（后置）| `expr++` `expr--` ` ()`  `[]`    `.`    `?.`
一元运算符（前置）| `-expr`  `!expr`   `~expr`  `++expr`  `--expr`
乘法运算符| `*` `/` `%` `~/`
加法运算符| `+`   `-`
按位运算符| `<<`  `>>`
按位与| `&`
按位异或| `^`
按位或| `|`
关系与类型检测| `>=`  `>`  `<=`  `<` `as` `is` `is!`
平等| `==` `!=`   
逻辑与| `&&`
逻辑或| `||`
是否为null| `??`
三目运算符| `expr1 ? expr2 : expr3`
级联运算符| `..`
赋值运算符| `= ` ` *=` `/= ` `~/=` `%=` `+=` `-=` `<<=` `>>=` `&=` `^=` `|=` `??=`

使用运算符时，可以创建表达式。以下是运算符表达式的一些示例：

```dart
a++
a + b
a = b
a == b
c ? a : b
a is T
```

## 算术运算符

运算符|描述
--|--
+| 加
-| 减
-expr | 一元运算减
*| 乘
/ | 除
~/ | 除以，返回整数结果
% | 获取整数除法的余数（模数）

Dart 也支持前置和后缀 递增、递减运算符。

例子：

```dart
assert(2 + 3 == 5);
assert(2 - 3 == -1);
assert(2 * 3 == 6);
assert(5 / 2 == 2.5); // Result is a double
assert(5 ~/ 2 == 2); // Result is an int
assert(5 % 2 == 1); // Remainder

assert('5/2 = ${5 ~/ 2} r ${5 % 2}' == '5/2 = 2 r 1');
```

运算符|描述
--|--
++var| var = var + 1（表达式值是var + 1）
var++| var = var + 1（表达式值是var）
--var| var  = var – 1（表达式值是var – 1）
var--| var = var – 1（表达式值是var）

例子：

```dart
var a, b;

a = 0;
b = ++a; // Increment a before b gets its value.
assert(a == b); // 1 == 1

a = 0;
b = a++; // Increment a AFTER b gets its value.
assert(a != b); // 1 != 0

a = 0;
b = --a; // Decrement a before b gets its value.
assert(a == b); // -1 == -1

a = 0;
b = a--; // Decrement a AFTER b gets its value.
assert(a != b); // -1 != 0
```

## 比较运算符

运算符|描述
--|--
==| 等于
!=| 不等于
> | 大于
< | 小于
>=| 大于或等于
<=| 小于或等于

例子：
```dart
assert(2 == 2);
assert(2 != 3);
assert(3 > 2);
assert(2 < 3);
assert(3 >= 3);
assert(2 <= 3);
```

## 类型检查运算符

使用 ==as== ，==is== 和 ==is== !运算符可以方便地在运行时检查类型。

运算符|描述
--|--
as| Typecast（也用于指定库前缀）
is| 如果对象具有指定的类型，则为True
is!| 如果对象具有指定的类型，则返回false

案例1：下面案例用于检测emp是否是==Person==类型：
```dart
if (emp is Person) {
  // Type check
  emp.firstName = 'Bob';
}
```

案例2：下面案例emp的类型设置为==Person==类型；
```dart
(emp as Person).firstName = 'Bob';
```

:::tip 提示
如果emp为`null`或不是==Person==，则案例1不执行任何操作，案例2会抛出异常。
:::

## 赋值运算符

Dart 可以使用 `=` 运算符赋值。

```dart
// 把value 赋值给a
a = value;
// 如果b 为null 把 value 赋值给 b；否则b 保持不变。
b ??= value;
```

复合赋值运算符：

`=`| `–=`| `/=`| `%=` | `>>=` | `^=`
--|--|--|--|--|--
`+=`| `*=`| `~/=`| `<<=` | `&=`| `|=`

以下是复合赋值运算符的工作原理：
- |复合表达式|赋值表达式
--|--|--
复合表达式| `a op= b` | `a = a op b`
例子|  `a += b` | `a = a + b`

例如：
```dart
var a = 2; // Assign using =
a *= 3; // Assign and multiply: a = a * 3
assert(a == 6);
```

## 逻辑运算符


运算符|描述
--|--
`!`| 逻辑非 
`||`| 逻辑与
`&&`| 逻辑或

例如： 
```dart
if (!done && (col == 0 || col == 3)) {
  // ...Do something...
}
```

## 按位运算符合移位运算符

您可以在Dart中操纵数字的各个位。通常，您将使用这些按位和移位运算符和整数。

运算符|描述
--|--
`&` | 按位或
`|` | 按位与
`^` | 按位异或
`~expr`| 按位取反
`<<` | 左移
`>>` | 右移

例如： 
```dart
final value = 0x22;
final bitmask = 0x0f;

assert((value & bitmask) == 0x02); // AND
assert((value & ~bitmask) == 0x20); // AND NOT
assert((value | bitmask) == 0x2f); // OR
assert((value ^ bitmask) == 0x2d); // XOR
assert((value << 4) == 0x220); // Shift left
assert((value >> 4) == 0x02); // Shift right
```

## 条件表达式

条件表达式
Dart有两个运算符，条件表达式可以用来简化 if-else语句。
- ==condition ? expr1 : expr2==

如果condition为true，则计算expr1（并返回其值）; 否则，计算并返回expr2的值。

- ==expr1 ?? expr2==

如果expr1为非null，则返回其值; 否则，计算并返回expr2的值。

当您需要根据布尔表达式赋值时，请考虑使用==?:== ：
```dart
var visibility = isPublic ? 'public' : 'private';
```

如果布尔表达式测试为null，请考虑使用==??== ：
```dart
String playerName(String name) => name ?? 'Guest';
```

前面的例子至少可以用其他两种方式编写，但不能简洁：
```dart
// Slightly longer version uses ?: operator.
String playerName(String name) => name != null ? name : 'Guest';

// Very long version uses if-else statement.
String playerName(String name) {
  if (name != null) {
    return name;
  } else {
    return 'Guest';
  }
}
```

## 级联运算符

级联运算符（ ==..==）,允许您对同一对象进行多项操作。

```dart
querySelector('#confirm') // 获取html元素对象
  ..text = 'Confirm' // 访问成员
  ..classes.add('important') // 添加样式
  ..onClick.listen((e) => window.alert('Confirmed!')); // 监听事件
```

上面的代码等同于：

```dart
var button = querySelector('#confirm');
button.text = 'Confirm';
button.classes.add('important');
button.onClick.listen((e) => window.alert('Confirmed!'));
```

级联嵌套：
```dart
final addressBook = (AddressBookBuilder()
      ..name = 'jenny'
      ..email = 'jenny@example.com'
      ..phone = (PhoneNumberBuilder()
            ..number = '415-555-0100'
            ..label = 'home')
          .build())
    .build();
```
小心在返回实际对象的函数上构造级联。例如，以下代码失败：

```dart
var sb = StringBuffer();
sb.write('foo')
  ..write('bar'); // Error: method 'write' isn't defined for 'void'.
```
==sb.write()==方法没有返回write成员方法。所以抛出异常，==sb.write()==必须也使用级联访问。

```dart
var sb = StringBuffer();
  	sb
    ..write('123')
    ..write('22');

    print(sb); // 输出 => 12322 
```

:::tip 提示
 严格来说，级联的“双点”符号不是运算符。它只是Dart语法的一部分。
:::


## 其他运算符

运算符| 名称| 描述
--|--|--
`()`| 函数调用| 表示函数调用
`[]`| List访问 | 引用列表中指定索引处的值
`.` | 成员访问| 访问对象的成员属性
`?.`| 条件的成员访问|  在不明确对象是否存在的情况下使用 `?.` 访问对象的成员

==?.== 运算符使用案例：
```dart
class Test {
    num member = 1;
}

void main() {
  var test = null;
  print(test?.member); // 返回null 不会抛出异常
  test = new Test();
  print(test?.member); // 返回 1
}
```