# dart:async - 异步编程

异步编程通常使用回调方法来实现，但是 Dart 提供了其他方案：[Future](https://api.dart.ranyunlong.com/dart-async/Future-class.html) 和 [Stream](https://api.dart.ranyunlong.com/dart-async/Stream-class.html) 对象。 Future 类似与 JavaScript 中的 Promise ， 代表在将来某个时刻会返回一个结果。 Stream 类可以用来获取一系列的值，比如，一些列事件。 Future， Stream，以及更多内容，参考 dart:async 库 ([API 参考](https://api.dart.ranyunlong.com/dart-async/dart-async-library.html))。

:::tip 提示
你并不总是需要直接使用 Future 或 Stream 的 API。 Dart 语言支持使用关键字（例如，==async== 和 ==await== ）来实现异步编程。 更多详情，参考语言概览中 [异步支持]()。
::: 