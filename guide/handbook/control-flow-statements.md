# 流程控制

Dart 的流程控制包含：

- if 和 else
- for 循环
- while 和 do-while 循环
- break 和 continue
- switch 和 case
- assert

还可以嵌套 ==try-catch==，捕获异常。

## If 和 else

Dart 支持 带有 ==if== 和 ==else== 的语句：

```dart
if (isRaining()) {
  you.bringRainCoat();
} else if (isSnowing()) {
  you.wearJacket();
} else {
  car.putTopDown();
}
```

与JavaScript不同，条件必须使用布尔值。不能使用其他类型，但可以使用 ==null==；

## For 循环

进行迭代操作，可以使用标准 for 语句。 例如：

<DartPad
    id="02cd18044cf3d5fb4c6c34b93f9a82e5"
    vertical-ratio="60"
    height="300"
/>

闭包在 Dart 的 ==for== 循环中会捕获循环的 index 索引值， 来避免 JavaScript 中常见的陷阱。 请思考示例代码：

<DartPad
    id="f8d34f2f34e7269e8941562d83c9306f"
    vertical-ratio="60"
    height="300"
/>

点击![运行](/red-run.png)按钮，输出的结果是 ==0== 和 ==1==， 但如果该案例运行在JavaScript 就会因为变量作用域的问题，输出两个 ==2==。

如果要迭代一个实现了 [Iterable](https://api.dart.ranyunlong.com/dart-core/Iterable-class.html) 接口的对象，可以使用 [forEach()](https://api.dart.ranyunlong.com/dart-core/Iterable/forEach.html) 方法，如果不需要使用当前的下标， 使用 forEach() 是非常棒的选择；

```dart
candidates.forEach((candidate) => candidate.interview());
```

实现了 [Iterable](https://api.dart.ranyunlong.com/dart-core/Iterable-class.html) 的类（比如， List 和 Set）同样也支持使用 ==for-in== 进行迭代操作 iteration ：

```dart
var collection = [0, 1, 2];
for (var x in collection) {
  print(x); // 0 1 2
}
```

## While 和 do-while

==while== 循环在执行前判断执行条件：
```dart
while (!isDone()) {
  doSomething();
}
```

==do-while== 循环在执行 ==后== 判断执行条件：
```dart
do {
  printLine();
} while (!atEndOfPage());
```

## Break 和 continue

使用 ==break== 停止程序循环：

```dart
while (true) {
  if (shutDownRequested()) break;
  processIncomingRequests();
}
```

使用 ==continue== 跳转到下一次迭代：

```dart
for (int i = 0; i < candidates.length; i++) {
  var candidate = candidates[i];
  if (candidate.yearsExperience < 5) {
    continue;
  }
  candidate.interview();
}
```

如果对象实现了 [Iterable](https://api.dart.ranyunlong.com/dart-core/Iterable-class.html) 接口的对象，可以使用 [forEach()](https://api.dart.ranyunlong.com/dart-core/Iterable/forEach.html) 接口 （例如，list 或者 set）。 那么上面示例完全可以用另一种方式来实现：

```dart
candidates
    .where((c) => c.yearsExperience >= 5)
    .forEach((c) => c.interview());
```

## Switch 和 case

在 Dart 中 ==switch== 语句使用 == 比较整数，字符串，或者编译时常量。 比较的对象必须都是同一个类的实例（并且不可以是子类）， 类必须没有对 `==` 重写。 枚举类型 可以用于 ==switch== 语句。

:::tip 提示 
在 Dart 中 Switch 语句仅适用于有限的情况下， 例如在 interpreter 或 scanner 中。
:::

在 ==case== 语句中，每个非空的 ==case== 语句结尾需要跟一个 ==break== 语句。 除 ==break== 以外，还有可以使用 ==continue==, ==throw== ，或者 ==return==。

当没有 ==case== 语句匹配时，执行 ==default== 代码：


```dart
var command = 'OPEN';
switch (command) {
  case 'CLOSED':
    executeClosed();
    break;
  case 'PENDING':
    executePending();
    break;
  case 'APPROVED':
    executeApproved();
    break;
  case 'DENIED':
    executeDenied();
    break;
  case 'OPEN':
    executeOpen();
    break;
  default:
    executeUnknown();
}
```

下面的 ==case== 程序示例中缺省了 ==break== 语句，导致错误：

```dart
var command = 'OPEN';
switch (command) {
  case 'OPEN':
    executeOpen();
    // ERROR: 丢失 break

  case 'CLOSED':
    executeClosed();
    break;
}
```

但是， Dart 支持空 ==case== 语句， 允许程序以 fall-through 的形式执行。

```dart
var command = 'CLOSED';
switch (command) {
  case 'CLOSED': // Empty case falls through.
  case 'NOW_CLOSED':
    // Runs for both CLOSED and NOW_CLOSED.
    executeNowClosed();
    break;
}
```

在非空 ==case== 中实现 fall-through 形式， 可以使用 ==continue== 语句结合 ==lable== 的方式实现:

```dart
var command = 'CLOSED';
switch (command) {
  case 'CLOSED':
    executeClosed();
    continue nowClosed;
  // Continues executing at the nowClosed label.

  nowClosed:
  case 'NOW_CLOSED':
    // Runs for both CLOSED and NOW_CLOSED.
    executeNowClosed();
    break;
}
```

==case== 语句可以拥有局部变量， 这些局部变量只能在这个语句的作用域中可见。


## 断言 Assert

如果 ==assert== 语句中的布尔条件为 `false` ， 那么正常的程序执行流程会被中断。 在本章中包含部分 ==assert== 的使用， 下面是一些示例：

```dart
// 确认变量值不为空。
assert(text != null);

// 确认变量值小于100。
assert(number < 100);

// 确认 URL 是否是 https 类型。
assert(urlString.startsWith('https'));
```

:::tip 提示
 assert 语句只在开发环境中有效， 在生产环境是无效的； Flutter 中的 assert 只在 [debug 模式](https://flutter.io/docs/testing/debugging#debug-mode-assertions) 中有效。 开发用的工具，例如 [dartdevc](https://webdev.dartlang.org/tools/dartdevc) 默认是开启 assert 功能。 其他的一些工具， 例如 [dart]() 和 [dart2js](), 支持通过命令行开启 assert ： ==--enable-asserts==。
:::