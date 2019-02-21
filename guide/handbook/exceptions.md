# 异常

Dart 代码可以抛出和捕获异常。 异常表示一些未知的错误情况。 如果异常没有被捕获， 则异常会抛出， 导致抛出异常的代码终止执行。

和 Java 有所不同， Dart 中的所有异常是非检查异常。 方法不会声明它们抛出的异常， 也不要求捕获任何异常。

Dart 提供了 [Exception](https://api.dart.ranyunlong.com/dart-core/Exception-class.html) 和 [Error](https://api.dart.ranyunlong.com/dart-core/Error-class.html) 类型， 以及一些子类型。 当然也可以定义自己的异常类型。 但是，此外 Dart 程序可以抛出任何非 null 对象， 不仅限 Exception 和 Error 对象。


## Throw

下面是关于抛出或者 引发 异常的示例：

```dart
throw FormatException('Expected at least 1 section');
```

也可以抛出任意的对象：

```dart
throw 'Out of llamas!';
```

:::tip 提示
高质量的生产环境代码通常会实现 Error 或 Exception 类型的异常抛出。
:::

因为抛出异常是一个表达式， 所以可以在 => 语句中使用，也可以在其他使用表达式的地方抛出异常：

```dart
void distanceTo(Point other) => throw UnimplementedError();
```

## Catch

捕获异常可以避免异常继续传递（除非重新抛出（ rethrow ）异常）。 可以通过捕获异常的机会来处理该异常：

```dart
try {
  breedMoreLlamas();
} on OutOfLlamasException {
  buyMoreLlamas();
}
```

通过指定多个 ==catch== 语句，可以处理可能抛出多种类型异常的代码。 与抛出异常类型匹配的第一个 ==catch== 语句处理异常。 如果 ==catch== 语句未指定类型， 则该语句可以处理任何类型的抛出对象：

```dart
try {
  breedMoreLlamas();
} on OutOfLlamasException {
  // 一个特殊的异常
  buyMoreLlamas();
} on Exception catch (e) {
  // 其他任何异常
  print('Unknown exception: $e');
} catch (e) {
  // 没有指定的类型，处理所有异常
  print('Something really unknown: $e');
}
```

如上述代码所示，捕获语句中可以同时使用 ==on== 和 ==catch== ，也可以单独分开使用。 使用 ==on== 来指定异常类型， 使用 ==catch== 来 捕获异常对象。


==catch()== 函数可以指定1到2个参数， 第一个参数为抛出的异常对象， 第二个为堆栈信息 ( 一个 [StackTrace](https://api.dart.ranyunlong.com/dart-core/StackTrace-class.html) 对象 )。

```dart
try {
  // ···
} on Exception catch (e) {
  print('Exception details:\n $e');
} catch (e, s) {
  print('Exception details:\n $e');
  print('Stack trace:\n $s');
}
```

如果仅需要部分处理异常， 那么可以使用关键字 ==rethrow== 将异常重新抛出。

void misbehave() {
  try {
    dynamic foo = true;
    print(foo++); // Runtime error
  } catch (e) {
    print('misbehave() partially handled ${e.runtimeType}.');
    rethrow; // Allow callers to see the exception.
  }
}

void main() {
  try {
    misbehave();
  } catch (e) {
    print('main() finished handling ${e.runtimeType}.');
  }
}

## Finally

不管是否抛出异常， ==finally== 中的代码都会被执行。 如果 ==catch== 没有匹配到异常， 异常会在 ==finally== 执行完成后，再次被抛出：

```dart
try {
  breedMoreLlamas();
} finally {
  // Always clean up, even if an exception is thrown.
  cleanLlamaStalls();
}
```

任何匹配的 ==catch== 执行完成后，再执行 ==finally== ：

```dart
try {
  breedMoreLlamas();
} catch (e) {
  print('Error: $e'); // Handle the exception first.
} finally {
  cleanLlamaStalls(); // Then clean up.
}
```

Dart核心库定义了许多常见的异常和错误:

- [NoSuchMethodError])(https://api.dart.ranyunlong.com/dart-core/NoSuchMethodError-class.html)
调用不存在的方法时抛出。
- [ArgumentError](https://api.dartlang.org/stable/2.1.1/dart-core/ArgumentError-class.html)
函数传递错误的参数时抛出。

抛出特定于应用程序的异常是指示发生错误的常用方法。您可以通过实现Exception接口来定义自定义异常：

```dart
class FooException implements Exception {
  final String msg;

  const FooException([this.msg]);

  @override
  String toString() => msg ?? 'FooException';
}
```

有关更多信息，请参考 [Exception API](https://api.dart.ranyunlong.com/dart-core/Exception-class.html)。


