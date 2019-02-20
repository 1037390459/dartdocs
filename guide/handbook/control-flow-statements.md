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


