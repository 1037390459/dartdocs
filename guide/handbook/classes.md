# 类

Dart 是一种基于类和 mixin 继承机制的面向对象的语言。 每个对象都是一个类的实例，所有的类都继承于 [Object](https://api.dart.ranyunlong.com/dart-core/Object-class.html)。 基于 * Mixin 继承* 意味着每个类（除 Object 外） 都只有一个超类， 一个类中的代码可以在其他多个继承类中重复使用。

## 使用类的成员

对象的由函数和数据（即方法和实例变量）组成。方法的调用要通过对象来完成： 调用的方法可以访问其对象的其他函数和数据。

使用 ( ==.== ) 来引用实例对象的变量和方法：

```dart
var p = Point(2, 2);

// 为实例的变量 y 设置值。
p.y = 3;

// 获取变量 y 的值。
assert(p.y == 3);

// 调用 p 的 distanceTo() 方法。
num distance = p.distanceTo(Point(4, 4));
```
使用 ==?.== 来代替 ==.== ， 可以避免因为左边对象可能为 null ， 导致的异常：

```dart
// 如果 p 不为null，设置它变量 y 的值为 4。
p?.y = 4;
```

## 使用构造函数

通过 构造函数 创建对象。 构造函数的名字可以是 ==ClassName== 或者 ==ClassName.identifier==。例如， 以下代码使用 ==Point== 和 ==Point.fromJson()== 构造函数创建 Point 对象：

```dart
var p1 = Point(2, 2);
var p2 = Point.fromJson({'x': 1, 'y': 2});
```

以下代码具有相同的效果， 但是构造函数前面的的 ==new== 关键字是可选的：

```dart
var p1 = new Point(2, 2);
var p2 = new Point.fromJson({'x': 1, 'y': 2});
```

:::tip 版本提示
在 Dart 2 中 new 关键字变成了可选的。
:::

一些类提供了[常量构造函数](#常量构造函数)。 使用常量构造函数，在构造函数名之前加 ==const== 关键字，来创建编译时常量时：

```dart
var p = const ImmutablePoint(2, 2);
```

构造两个相同的编译时常量会产生一个唯一的， 标准的实例：

```dart
var a = const ImmutablePoint(1, 1);
var b = const ImmutablePoint(1, 1);

assert(identical(a, b)); // 它们是同一个实例。
```

在 常量上下文 中， 构造函数或者字面量前的 ==const== 可以省略。 例如，下面代码创建了一个 const 类型的 map 对象：

```dart
// 这里有很多的 const 关键字。
const pointAndLine = const {
  'point': const [const ImmutablePoint(0, 0)],
  'line': const [const ImmutablePoint(1, 10), const ImmutablePoint(-2, 11)],
};
```

保留第一个 ==const== 关键字，其余的全部省略：

```dart
// 仅有一个 const ，由该 const 建立常量上下文。
const pointAndLine = {
  'point': [ImmutablePoint(0, 0)],
  'line': [ImmutablePoint(1, 10), ImmutablePoint(-2, 11)],
};
```

如果常量构造函数在常量上下文之外， 且省略了 ==const== 关键字， 此时创建的对象是非常量对象：

```dart
var a = const ImmutablePoint(1, 1); // 创建一个常量对象
var b = ImmutablePoint(1, 1); // 创建一个非常量对象

assert(!identical(a, b)); // 两者不是同一个实例!
```
:::tip 版本提示 
在 Dart 2 中，一个常量上下文中的 ==const== 关键字可以被省略。
:::

## 获取对象的类型

使用对象的 ==runtimeType== 属性， 可以在运行时获取对象的类型， ==runtimeType== 属性回返回一个 [Type](https://api.dart.ranyunlong.com/dart-core/Type-class.html) 对象。

```dart
print('The type of a is ${a.runtimeType}');
```

到目前为止，我们已经解了如何使用类。 本节的其余部分将介绍如何实现一个类。


## 实例变量

下面是声明实例变量的示例：

```dart
class Point {
  num x; // 声明示例变量 x，初始值为 null 。
  num y; // 声明示例变量 y，初始值为 null 。
  num z = 0; // 声明示例变量 z，初始值为 0 。
}
```

未初始化实例变量的默认值为 “null” 。

所有实例变量都生成隐式 getter 方法。 非 final 的实例变量同样会生成隐式 setter 方法。 有关更多信息，参考 [Getters 和 setters](#getters-和-setters)。

```dart
class Point {
  num x;
  num y;
}

void main() {
  var point = Point();
  point.x = 4; // Use the setter method for x.
  assert(point.x == 4); // Use the getter method for x.
  assert(point.y == null); // Values default to null.
}
```

如果在声明时进行了示例变量的初始化， 那么初始化值会在示例创建时赋值给变量， 该赋值过程在构造函数及其初始化列表执行之前。

## 构造函数

通过创建一个与其类同名的函数来声明构造函数 （另外，还可以附加一个额外的可选标识符，如 [命名构造函数](#命名构造函数 ) 中所述）。 下面通过最常见的构造函数形式， 即生成构造函数， 创建一个类的实例：

```dart
class Point {
  num x, y;

  Point(num x, num y) {
    // 还有更好的方式来实现下面代码，敬请关注。
    this.x = x;
    this.y = y;
  }
}
```

使用 ==this== 关键字引用当前实例。

:::tip 提示
当存在命名冲突时，使用 ==this== 关键字。 否则，按照 Dart 风格应该省略 ==this== 。
:::

通常模式下，会将构造函数传入的参数的值赋值给对应的实例变量， Dart 自身的语法糖精简了这些代码：

```dart
class Point {
  num x, y;

  // 在构造函数体执行前，
  // 语法糖已经设置了变量 x 和 y。
  Point(this.x, this.y);
}
```

### 默认构造函数
在没有声明构造函数的情况下， Dart 会提供一个默认的构造函数。 默认构造函数没有参数并会调用父类的无参构造函数。


### 构造函数不被继承
子类不会继承父类的构造函数。 子类不声明构造函数，那么它就只有默认构造函数 (匿名，没有参数) 。

### 命名构造函数
使用命名构造函数可为一个类实现多个构造函数， 也可以使用命名构造函数来更清晰的表明函数意图：

```dart
class Point {
  num x, y;

  Point(this.x, this.y);

  // 命名构造函数
  Point.origin() {
    x = 0;
    y = 0;
  }
}
```

切记，构造函数不能够被继承， 这意味着父类的命名构造函数不会被子类继承。 如果希望使用父类中定义的命名构造函数创建子类， 就必须在子类中实现该构造函数。


### 调用父类非默认构造函数

默认情况下，子类的构造函数会自动调用父类的默认构造函数（匿名，无参数）。 父类的构造函数在子类构造函数体开始执行的位置被调用。 如果提供了一个 initializer list （初始化参数列表）， 则初始化参数列表在父类构造函数执行之前执行。 总之，执行顺序如下：

1. initializer list （初始化参数列表）
2. superclass’s no-arg constructor （父类的无名构造函数）
3. main class’s no-arg constructor （主类的无名构造函数）

如果父类中没有匿名无参的构造函数， 则需要手工调用父类的其他构造函数。 在当前构造函数冒号 ( ==:== ) 之后，函数体之前，声明调用父类构造函数。

下面的示例中，Employee 类的构造函数调用了父类 Person 的命名构造函数。 点击![运行](/red-run.png)按钮, 运行以下案例。

<DartPad
    id="e57aa06401e6618d4eb8"
    vertical-ratio="80"
    height="750"
/>

由于父类的构造函数参数在构造函数执行之前执行， 所以参数可以是一个表达式或者一个方法调用：

```dart
class Employee extends Person {
  Employee() : super.fromJson(getDefaultData());
  // ···
}
```

:::warning 警告
调用父类构造函数的参数无法访问 this 。 例如，参数可以为静态函数但是不能是实例函数。
:::

#### 初始化列表

除了调用超类构造函数之外， 还可以在构造函数体执行之前初始化实例变量。 各参数的初始化用逗号分隔。

```dart
// 在构造函数体执行之前，
// 通过初始列表设置实例变量。
Point.fromJson(Map<String, num> json)
    : x = json['x'],
      y = json['y'] {
  print('In Point.fromJson(): ($x, $y)');
}
```

:::warning 警告
初始化程序的右侧无法访问 this 。
:::

在开发期间， 可以使用 ==assert== 来验证输入的初始化列表。

```dart
Point.withAssert(this.x, this.y) : assert(x >= 0) {
  print('In Point.withAssert(): ($x, $y)');
}
```

使用初始化列表可以很方便的设置 final 字段。 下面示例演示了，如何使用初始化列表初始化设置三个 final 字段。 点击![运行](/red-run.png)按钮, 运行以下案例。

<DartPad
    id="7a9764702c0608711e08"
    vertical-ratio="75"
    height="500"
/>

#### 重定向构造函数

有时构造函数的唯一目的是重定向到同一个类中的另一个构造函数。 重定向构造函数的函数体为空， 构造函数的调用在冒号 ( ==:== ) 之后。

```dart
class Point {
  num x, y;

  // 类的主构造函数。
  Point(this.x, this.y);

  // 指向主构造函数
  Point.alongXAxis(num x) : this(x, 0);
}
```

#### 常量构造函数
如果该类生成的对象是固定不变的， 那么就可以把这些对象定义为编译时常量。 为此，需要定义一个 ==const== 构造函数， 并且声明所有实例变量为 ==final==。
```dart
class ImmutablePoint {
  static final ImmutablePoint origin =
      const ImmutablePoint(0, 0);

  final num x, y;

  const ImmutablePoint(this.x, this.y);
}
```

常量构造函数创建的实例并不总是常量。 更多内容，查看 [使用构造函数](#使用构造函数) 章节。

#### 工厂构造函数

当执行构造函数并不总是创建这个类的一个新实例时，则使用 ==factory== 关键字。 例如，一个工厂构造函数可能会返回一个 cache 中的实例， 或者可能返回一个子类的实例。

以下示例演示了从缓存中返回对象的工厂构造函数：

```dart
class Logger {
  final String name;
  bool mute = false;

  // 从命名的 _ 可以知，
  // _cache 是私有属性。
  static final Map<String, Logger> _cache =
      <String, Logger>{};

  factory Logger(String name) {
    if (_cache.containsKey(name)) {
      return _cache[name];
    } else {
      final logger = Logger._internal(name);
      _cache[name] = logger;
      return logger;
    }
  }

  Logger._internal(this.name);

  void log(String msg) {
    if (!mute) print(msg);
  }
}
```

:::tip 提示
工厂构造函数无法访问 this。
:::

工厂构造函的调用方式与其他构造函数一样：

```dart
var logger = Logger('UI');
logger.log('Button clicked');
```

## 方法

方法是为对象提供行为的函数。

### 实例方法

对象的实例方法可以访问 ==this== 和实例变量。 以下示例中的 ==distanceTo()== 方法就是实例方法：

```dart
import 'dart:math';

class Point {
  num x, y;

  Point(this.x, this.y);

  num distanceTo(Point other) {
    var dx = x - other.x;
    var dy = y - other.y;
    return sqrt(dx * dx + dy * dy);
  }
}
```

### Getters 和 setters

getters 和 setters 是用于对象属性读和写的特殊方法。 回想之前的例子，每个实例变量都有一个隐式 getter ，通常情况下还会有一个 setter 。 使用 ==get== 和 ==set== 关键字实现 getters 和 setters ，能够为实例创建额外的属性。

```dart
class Rectangle {
  num left, top, width, height;

  Rectangle(this.left, this.top, this.width, this.height);

  // 定义两个计算属性： right 和 bottom。
  num get right => left + width;
  set right(num value) => left = value - width;
  num get bottom => top + height;
  set bottom(num value) => top = value - height;
}

void main() {
  var rect = Rectangle(3, 4, 20, 15);
  assert(rect.left == 3);
  rect.right = 12;
  assert(rect.left == -8);
}
```

最开始实现 getters 和 setters 也许是直接返回成员变量； 随着需求变化，getters 和 setters 可能需要进行计算处理而使用方法来实现； 但是，调用对象的代码不需要做任何的修改。

:::tip 提示
类似 (++) 之类操作符不管是否定义了 getter 方法，都能够正确的执行。 为了避免一些问题，操作符只调用一次 getter 方法， 然后把值保存到一个临时的变量中。
:::

### 抽象方法

实例方法， getter， 和 setter 方法可以是抽象的， 只定义接口不进行实现，而是留给其他类去实现。 抽象方法只存在于 抽象类 中。

定义一个抽象函数，使用分号 (`;`) 来代替函数体：

```dart
abstract class Doer {
  // 定义实例变量和方法 ...

  void doSomething(); // 定义一个抽象方法。
}

class EffectiveDoer extends Doer {
  void doSomething() {
    // 提供方法实现，所以这里的方法就不是抽象方法了...
  }
}
```

调用抽象方法会导致运行时错误。


## 抽象类

使用 ==abstract== 修饰符来定义 抽象类 — 抽象类不能实例化。 抽象类通常用来定义接口，以及部分实现。 如果希望抽象类能够被实例化，那么可以通过定义一个 工厂构造函数 来实现。

抽象类通常具有 [抽象方法](#抽象方法)。 下面是一个声明具有抽象方法的抽象类示例：

```dart
// 这个类被定义为抽象类，
// 所以不能被实例化。
abstract class AbstractContainer {
  // 定义构造行数，字段，方法...

  void updateChildren(); // 抽象方法。
}
```

## 隐式接口

每个类都隐式的定义了一个接口，接口包含了该类所有的实例成员及其实现的接口。 如果要创建一个 A 类，A 要支持 B 类的 API ，但是不需要继承 B 的实现， 那么可以通过 A 实现 B 的接口。

一个类可以通过 ==implements== 关键字来实现一个或者多个接口， 并实现每个接口要求的 API。 例如：

```dart
// person 类。 隐式接口里面包含了 greet() 方法声明。
class Person {
  // 包含在接口里，但只在当前库中可见。
  final _name;

  // 不包含在接口里，因为这是一个构造函数。
  Person(this._name);

  // 包含在接口里。
  String greet(String who) => 'Hello, $who. I am $_name.';
}

// person 接口的实现。
class Impostor implements Person {
  get _name => '';

  String greet(String who) => 'Hi $who. Do you know who I am?';
}

String greetBob(Person person) => person.greet('Bob');

void main() {
  print(greetBob(Person('Kathy')));
  print(greetBob(Impostor()));
}
```

下面示例演示一个类如何实现多个接口：

```dart
class Point implements Comparable, Location {...}
```

## 扩展类（继承）

使用 ==extends== 关键字来创建子类， 使用 ==super== 关键字来引用父类：

```dart
class Television {
  void turnOn() {
    _illuminateDisplay();
    _activateIrSensor();
  }
  // ···
}

class SmartTelevision extends Television {
  void turnOn() {
    super.turnOn();
    _bootNetworkInterface();
    _initializeMemory();
    _upgradeApps();
  }
  // ···
}
```

### 重写类成员
子类可以重写实例方法，getter 和 setter。 可以使用 ==@override== 注解指出想要重写的成员：

```dart
class SmartTelevision extends Television {
  @override
  void turnOn() {...}
  // ···
}
```

### 重写运算符

下标的运算符可以被重写。 例如，想要实现两个向量对象相加，可以重写 + 方法。

`<`	|`+` | `|` | `[]`
--|--|--|---
`>`	|`/` |`^` |`[]=`
`<=` |`~/` |`&` |`~`
`>=` |`*` |`<<` |`==`
`–`	|`%`|`>>`

:::tip 提示
你可能会被提示 `!=` 运算符为非可重载运算符。 因为 ==e1 != e2== 表达式仅仅是 ==!(e1 == e2)== 的语法糖。
:::

下面示例演示一个类重写 + 和 - 操作符：

```dart
class Vector {
  final int x, y;

  Vector(this.x, this.y);

  Vector operator +(Vector v) => Vector(x + v.x, y + v.y);
  Vector operator -(Vector v) => Vector(x - v.x, y - v.y);

  // 运算符 == 和 hashCode 部分没有列出。 有关详情，请参考下面的注释。
  // ···
}

void main() {
  final v = Vector(2, 3);
  final w = Vector(2, 2);

  assert(v + w == Vector(4, 5));
  assert(v - w == Vector(0, 1));
}
```

如果要重写 `==` 操作符，需要重写对象的 ==hashCode getter== 方法。

在 Dart 中每个对象会默认提供一个整数的哈希值， 因此在 map 中可以作为 key 来使用， 重写 hashCode 的 getter 方法来生成自定义哈希值。 如果重写 hashCode 的 getter 方法，那么可能还需要重写 `==` 运算符。 相等的（通过 `==` ）对象必须拥有相同的 hashCode。 hashCode 并不要求是唯一的， 但是应该具有良好的分布形态。

```dart
class Person {
  final String firstName, lastName;

  Person(this.firstName, this.lastName);

  // 重写 hashCode，实现策略源于  Effective Java，
  // 第11章。
  @override
  int get hashCode {
    int result = 17;
    result = 37 * result + firstName.hashCode;
    result = 37 * result + lastName.hashCode;
    return result;
  }

  // 如果重写了 hashCode，通常应该从新实现 == 操作符。
  @override
  bool operator ==(dynamic other) {
    if (other is! Person) return false;
    Person person = other;
    return (person.firstName == firstName &&
        person.lastName == lastName);
  }
}

void main() {
  var p1 = Person('Bob', 'Smith');
  var p2 = Person('Bob', 'Smith');
  var p3 = 'not a person';
  assert(p1.hashCode == p2.hashCode);
  assert(p1 == p2);
  assert(p1 != p3);
}
```
