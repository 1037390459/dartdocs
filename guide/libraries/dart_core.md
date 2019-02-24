# dart:core

dart:core 库 ([API 参考](https://api.dart.ranyunlong.com/dart-core/dart-core-library.html)) 提供了一个少量但是重要的内置功能集合。 该库会被自动导入每个 Dart 程序。

## 控制台打印

顶级 ==print()== 方法接受一个参数 任意对象） 并输出显示这个对象的字符串值(由 ==toString()== 返回) 到控制台。

```dart
print(anObject);
print('I drink $tea.');
```

有关基本字符串和 ==toString()== 的更多信息，参考 [字符串](../handbook/built-in-types.html#字符串)。

## 数字

dart:core 库定义了[num](https://api.dart.ranyunlong.com/dart-core/num-class.html)，[int](https://api.dart.ranyunlong.com/dart-core/int-class.html) 以及 [double](https://api.dart.ranyunlong.com/dart-core/double-class.html) 类， 这些类拥有一定的工具方法来处理数字。

使用 int 和 double 的 parse() 方法将字符串转换为整型或浮点型对象：

```dart
assert(int.parse('42') == 42);
assert(int.parse('0x42') == 66);
assert(double.parse('0.50') == 0.5);
```
或者使用 num 的 parse() 方法，该方法可能会创建一个整型，否则为浮点型对象：
```dart
assert(num.parse('42') is int);
assert(num.parse('0x42') is int);
assert(num.parse('0.50') is double);
```
通过添加 ==radix== 参数，指定整数的进制基数：

```dart
assert(int.parse('42', radix: 16) == 66);
```
使用 ==toString()== 方法将整型或双精度浮点类型转换为字符串类型。使用 [toStringAsFixed()](https://api.dart.ranyunlong.com/dart-core/num/toStringAsFixed.html) 指定小数点右边的位数， 使用 [toStringAsPrecision()](https://api.dart.ranyunlong.com/dart-core/num/toStringAsPrecision.html): 指定字符串中的有效数字的位数。

```dart
// 整型转换为字符串类型。
assert(42.toString() == '42');

// 双浮点型转换为字符串类型。
assert(123.456.toString() == '123.456');

// 指定小数点后的位数。
assert(123.456.toStringAsFixed(2) == '123.46');

// 指定有效数字的位数。
assert(123.456.toStringAsPrecision(2) == '1.2e+2');
assert(double.parse('1.2e+2') == 120.0);
```

更多详情， 参考 [int](https://api.dart.ranyunlong.com/dart-core/int-class.html)， [double](https://api.dart.ranyunlong.com/dart-core/double-class.html)， 和 [num](https://api.dart.ranyunlong.com/dart-core/num-class.html) 的相关 API 文档。 也可参考 [dart:math](./dart_math.md)。

## 字符和正则表达式

在 Dart 中一个字符串是一个固定不变的 UTF-16 编码单元序列。 语言概览中有更多关于 [字符串](../handbook/built-in-types.md#字符串) 的内容。 使用正则表达式 (RegExp 对象) 可以在字符串内搜索和替换部分字符串。

String 定义了例如 ==split()==， ==contains()==， ==startsWith()==， ==endsWith()== 等方法。

### 在字符串中搜索

可以在字符串内查找特定字符串的位置， 以及检查字符串是否以特定字符串作为开头或结尾。例如：

```dart
// 检查一个字符串是否包含另一个字符串。
assert('Never odd or even'.contains('odd'));

// 一个字符串是否以另一个字符串为开头?
assert('Never odd or even'.startsWith('Never'));

// 一个字符串是否以另一个字符串为结尾?
assert('Never odd or even'.endsWith('even'));

// 查找一个字符串在另一个字符串中的位置。
assert('Never odd or even'.indexOf('odd') == 6);
```

### 从字符串中提取数据

可以获取字符串中的单个字符，将其作为字符串或者整数。 确切地说，实际上获取的是单独的UTF-16编码单元; 诸如高音谱号符号 (‘\u{1D11E}’) 之类的高编号字符分别为两个编码单元。

你也可以获取字符串中的子字符串或者将一个字符串分割为子字符串列表：

```dart
// 抓取一个子字符串。
assert('Never odd or even'.substring(6, 9) == 'odd');

// 使用字符串模式分割字符串。
var parts = 'structured web apps'.split(' ');
assert(parts.length == 3);
assert(parts[0] == 'structured');

// 通过下标获取 UTF-16 编码单元（编码单元作为字符串）。
assert('Never odd or even'[0] == 'N');

// 使用 split() 传入一个空字符串参数，
// 得到一个所有字符的 list 集合；
// 有助于字符迭代。
for (var char in 'hello'.split('')) {
  print(char);
}

// 获取一个字符串的所有 UTF-16 编码单元。
var codeUnitList =
    'Never odd or even'.codeUnits.toList();
assert(codeUnitList[0] == 78);
```

### 首字母大小写转换
可以轻松的对字符串的首字母大小写进行转换：

```dart
// 转换为首字母大写。
assert('structured web apps'.toUpperCase() ==
    'STRUCTURED WEB APPS');

// 转换为首字母小写。
assert('STRUCTURED WEB APPS'.toLowerCase() ==
    'structured web apps');
```

:::tip 提示
这些方法不是在所有语言上都有效的。例如， 土耳其字母表的无点 `I` 转换是不正确的。
:::

### Trimming 和空字符串

使用 ==trim()== 移除首尾空格。 使用 ==isEmpty== 检查一个字符串是否为空（长度为0）。

```dart
// Trim a string.
assert('  hello  '.trim() == 'hello');

// 检查字符串是否为空。
assert(''.isEmpty);

// 空格字符串不是空字符串。
assert('  '.isNotEmpty);
```

### 替换部分字符串

字符串是不可变的对象，也就是说字符串可以创建但是不能被修改。 如果仔细阅读了 [String API](https://api.dart.ranyunlong.com/dart-core/String-class.html), 你会注意到，没有一个方法实际的改变了字符串的状态。 例如，方法 ==replaceAll()== 返回一个新字符串， 并没有改变原始字符串：

```dart
var greetingTemplate = 'Hello, NAME!';
var greeting =
    greetingTemplate.replaceAll(RegExp('NAME'), 'Bob');

// greetingTemplate 没有改变。
assert(greeting != greetingTemplate);
```

### 构建一个字符串

要以代码方式生成字符串，可以使用 [StringBuffer](https://api.dart.ranyunlong.com/dart-core/StringBuffer-class.html) 。 在调用 ==toString()== 之前， StringBuffer 不会生成新字符串对象。 ==writeAll()== 的第二个参数为可选参数，用来指定分隔符， 本例中使用空格作为分隔符。

```dart
var sb = StringBuffer();
sb
  ..write('Use a StringBuffer for ')
  ..writeAll(['efficient', 'string', 'creation'], ' ')
  ..write('.');

var fullString = sb.toString();

assert(fullString ==
    'Use a StringBuffer for efficient string creation.');
```

### 正则表达式

[RegExp](https://api.dart.ranyunlong.com/dart-core/RegExp-class.html)类提供与JavaScript正则表达式相同的功能。 使用正则表达式可以对字符串进行高效搜索和模式匹配。

```dart
// 下面正则表达式用于匹配一个或多个数字。
var numbers = RegExp(r'\d+');

var allCharacters = 'llamas live fifteen to twenty years';
var someDigits = 'llamas live 15 to 20 years';

// contains() 能够使用正则表达式。
assert(!allCharacters.contains(numbers));
assert(someDigits.contains(numbers));

// 替换所有匹配对象为另一个字符串。
var exedOut = someDigits.replaceAll(numbers, 'XX');
assert(exedOut == 'llamas live XX to XX years');
```

你也可以直接使用[RegExp](https://api.dart.ranyunlong.com/dart-core/RegExp-class.html)类。 [Match](https://api.dart.ranyunlong.com/dart-core/Match-class.html) 类提供对正则表达式匹配对象的访问。

```dart
var numbers = RegExp(r'\d+');
var someDigits = 'llamas live 15 to 20 years';

// 检查正则表达式是否在字符串中匹配到对象。
assert(numbers.hasMatch(someDigits));

// 迭代所有匹配对象
for (var match in numbers.allMatches(someDigits)) {
  print(match.group(0)); // 15, then 20
}
```

### 更多信息

有关完整的方法列表， 请参考 [String API](https://api.dart.ranyunlong.com/dart-core/String-class.html)。 另请参考 [StringBuffer](https://api.dart.ranyunlong.com/dart-core/StringBuffer-class.html)， [Pattern](https://api.dart.ranyunlong.com/dart-core/Pattern-class.html)， [RegExp](https://api.dart.ranyunlong.com/dart-core/RegExp-class.html)， 和 [Match](https://api.dart.ranyunlong.com/dart-core/Match-class.html) 的 API 文档。


## 集合


Dart 附带了核心集合 API ，其中包括 [List](https://api.dart.ranyunlong.com/dart-core/List-class.html) ，[Set](https://api.dart.ranyunlong.com/dart-core/Set-class.html) 和 [Map](https://api.dart.ranyunlong.com/dart-core/Map-class.html) 类。

### List

如语言指南中介绍，List可以通过字面量来创建和初始化。 另外，也可以使用 List 的构造函数。 List 类还定义了若干方法，用于向列表添加或删除项目。

```dart
// 使用 List 构造函数。
var vegetables = List();

// 或者仅使用一个 list 字面量。
var fruits = ['apples', 'oranges'];

// 添加一个元素到 list 对象。
fruits.add('kiwis');

// 添加多个元素到 list 对象。
fruits.addAll(['grapes', 'bananas']);

// 获取 list 长度。
assert(fruits.length == 5);

// 移除一个元素到 list 对象。
var appleIndex = fruits.indexOf('apples');
fruits.removeAt(appleIndex);
assert(fruits.length == 4);

// 移除多个元素到 list 对象。
fruits.clear();
assert(fruits.length == 0);
```

使用 ==indexOf()== 方法查找一个对象在 list 中的下标值。

```dart
var fruits = ['apples', 'oranges'];

// 使用下标访问 list 中的元素
assert(fruits[0] == 'apples');

// 查找一个元素在 list 中的下标。
assert(fruits.indexOf('apples') == 0);
```

使用 [sort()](https://api.dart.ranyunlong.com/dart-core/List/sort.html) 方法排序一个 list 。 你可以提供一个排序函数用于比较两个对象。 比较函数在 小于 时返回 \ <0，相等 时返回 0，bigger 时返回 > 0 。 下面示例中使用 ==compareTo()== 函数， 该函数在 [Comparable](https://api.dart.ranyunlong.com/dart-core/Comparable-class.html) 中定义， 并被 [String](https://api.dart.ranyunlong.com/dart-core/String-class.html) 类实现。

```dart
var fruits = ['bananas', 'apples', 'oranges'];

// 排序一个 list 。
fruits.sort((a, b) => a.compareTo(b));
assert(fruits[0] == 'apples');
```
list 是参数化类型， 因此可以指定 list 应该包含的元素类型：

```dart
// 这个 list 只能包含字符串类型。
var fruits = List<String>();

fruits.add('apples');
var fruit = fruits[0];
assert(fruit is String);

// 产生静态分析警告，num 不是字符串类型。
fruits.add(5); // BAD: Throws exception in checked mode.
```

:::danger
fruits.add(5); // Error: 'int' can't be assigned to 'String'
:::

全部的方法介绍 ，请参考 [List API](https://api.dart.ranyunlong.com/dart-core/List-class.html) 。

### Set

在 Dart 中，set 是一个无序的，元素唯一的集合。 因为一个 set 是无序的，所以无法通过下标（位置）获取 set 中的元素。

```dart
var ingredients = Set();
ingredients.addAll(['gold', 'titanium', 'xenon']);
assert(ingredients.length == 3);

// 添加一个重复的元素是无效的。
ingredients.add('gold');
assert(ingredients.length == 3);

// 从 set 中移除一个元素。
ingredients.remove('gold');
assert(ingredients.length == 2);
```
使用 ==contains()== 和 ==containsAll()== 来检查一个或多个元素是否在 set 中。
```dart
var ingredients = Set();
ingredients.addAll(['gold', 'titanium', 'xenon']);

// 检查一个元素是否在该 set 中。
assert(ingredients.contains('titanium'));

// 检查多个元素是否在该 set 中。
assert(ingredients.containsAll(['titanium', 'xenon']));
```

交集是另外两个 set 中的公共元素组成的 set 。

```dart
var ingredients = Set();
ingredients.addAll(['gold', 'titanium', 'xenon']);

// 创建两个 set 的交集。
var nobleGases = Set.from(['xenon', 'argon']);
var intersection = ingredients.intersection(nobleGases);
assert(intersection.length == 1);
assert(intersection.contains('xenon'));
```

全部的方法介绍 ，请参考 [Set API](https://api.dart.ranyunlong.com/dart-core/Set-class.html) 。

### Map

map 是一个无序的 key-value （键值对）集合，就是大家熟知的 dictionary 或者 hash。 map 将 kay 与 value 关联，以便于检索。和 JavaScript 不同，Dart 对象不是 map 。

声明 map 可以使用简洁的字面量语法，也可以使用传统构造函数：

```dart
// map 通常使用字符串作为 key。
var hawaiianBeaches = {
  'Oahu': ['Waikiki', 'Kailua', 'Waimanalo'],
  'Big Island': ['Wailea Bay', 'Pololu Beach'],
  'Kauai': ['Hanalei', 'Poipu']
};

// map 可以通过构造函数构建。
var searchTerms = Map();

// map 是参数化类型；
// 可以指定一个 map 中 key 和 value 的类型。
var nobleGases = Map<int, String>();
```

通过大括号语法可以为 map 添加，获取，设置元素。 使用 remove() 方法从 map 中移除键值对。

```dart
var nobleGases = {54: 'xenon'};

// 使用 key 检索 value 。
assert(nobleGases[54] == 'xenon');

// 检查 map 是否包含 key 。
assert(nobleGases.containsKey(54));

// 移除一个 key 及其 value。
nobleGases.remove(54);
assert(!nobleGases.containsKey(54));
```

可以从一个 map 中检索出所有的 key 或所有的 value：

```dart
var hawaiianBeaches = {
  'Oahu': ['Waikiki', 'Kailua', 'Waimanalo'],
  'Big Island': ['Wailea Bay', 'Pololu Beach'],
  'Kauai': ['Hanalei', 'Poipu']
};

// 获取的所有的 key 是一个无序集合
// (可迭代 list 对象)。
var keys = hawaiianBeaches.keys;

assert(keys.length == 3);
assert(Set.from(keys).contains('Oahu'));

// 获取的所有的 value 是一个无序集合
// (可迭代 list 对象).
var values = hawaiianBeaches.values;
assert(values.length == 3);
assert(values.any((v) => v.contains('Waikiki')));
```

使用 ==containsKey()== 方法检查一个 map 中是否包含某个key 。 因为 map 中的 value 可能会是 null ， 所有通过 key 获取 value，并通过判断 value 是否为 null 来判断 key 是否存在是不可靠的。

```dart
var hawaiianBeaches = {
  'Oahu': ['Waikiki', 'Kailua', 'Waimanalo'],
  'Big Island': ['Wailea Bay', 'Pololu Beach'],
  'Kauai': ['Hanalei', 'Poipu']
};

assert(hawaiianBeaches.containsKey('Oahu'));
assert(!hawaiianBeaches.containsKey('Florida'));
```

如果当且仅当该 key 不存在于 map 中，且要为这个 key 赋值， 可使用putIfAbsent（）方法。 该方法需要一个方法返回这个 value 。

```dart
var teamAssignments = {};
teamAssignments.putIfAbsent(
    'Catcher', () => pickToughestKid());
assert(teamAssignments['Catcher'] != null);
```

全部的方法介绍 ，请参考 [Map API](https://api.dart.ranyunlong.com/dart-core/Map-class.html) 。


### 公共集合方法

List, Set, 和 Map 共享许多集合中的常用功能。 其中一些常见功能由 [Iterable](https://api.dart.ranyunlong.com/dart-core/Iterable-class.html) 类定义， 这些函数由 List 和 Set 实现。

:::tip 提示
 虽然Map没有实现 [Iterable](https://api.dart.ranyunlong.com/dart-core/Iterable-class.html)， 但可以使用 Map keys 和 values 属性从中获取 [Iterable](https://api.dart.ranyunlong.com/dart-core/Iterable-class.html) 对象。
:::

使用 ==isEmpty== 和 ==isNotEmpty== 方法可以检查 list， set 或 map 对象中是否包含元素：

```dart
var coffees = [];
var teas = ['green', 'black', 'chamomile', 'earl grey'];
assert(coffees.isEmpty);
assert(teas.isNotEmpty);
```
使用 ==forEach()== 可以让 list， set 或 map 对象中的每个元素都使用一个方法。

```dart
var teas = ['green', 'black', 'chamomile', 'earl grey'];

teas.forEach((tea) => print('I drink $tea'));
```

当在 map 对象上调用 `forEach() 方法时，函数必须带两个参数（key 和 value）：

```dart
hawaiianBeaches.forEach((k, v) {
  print('I want to visit $k and swim at $v');
  // 我想去瓦胡岛并且在
  // [Waikiki, Kailua, Waimanalo]游泳， 等等。
});
```
Iterable 提供 ==map()== 方法，这个方法将所有结果返回到一个对象中。

```dart
var teas = ['green', 'black', 'chamomile', 'earl grey'];

var loudTeas = teas.map((tea) => tea.toUpperCase());
loudTeas.forEach(print);
```
:::tip 提示
== map()== 方法返回的对象是一个 懒求值（lazily evaluated）对象： 只有当访问对象里面的元素时，函数才会被调用。
:::

使用 ==map().toList()== 或 ==map().toSet()== ， 可以强制在每个项目上立即调用函数。

```dart
var loudTeas =
    teas.map((tea) => tea.toUpperCase()).toList();
```

使用 Iterable 的 ==where()==方法可以获取所有匹配条件的元素。 使用 Iterable 的 ==any()== 和 ==every()== 方法可以检查部分或者所有元素是否匹配某个条件。

```dart
var teas = ['green', 'black', 'chamomile', 'earl grey'];

// 洋甘菊不含咖啡因。
bool isDecaffeinated(String teaName) =>
    teaName == 'chamomile';

// 使用 where() 来查找元素，
// 这些元素在给定的函数中返回 true 。
var decaffeinatedTeas =
    teas.where((tea) => isDecaffeinated(tea));
// 或者 teas.where(isDecaffeinated)

// 使用 any() 来检查集合中是否至少有一个元素满足条件。
assert(teas.any(isDecaffeinated));

// 使用 every() 来检查集合中是否所有元素满足条件。
assert(!teas.every(isDecaffeinated));
```

有关方法的完整列表，请参考 [Iterable API](https://api.dart.ranyunlong.com/dart-core/Iterable-class.html), 以及 [List](https://api.dart.ranyunlong.com/dart-core/List-class.html), [Set](https://api.dart.ranyunlong.com/dart-core/Set-class.html), 和 [Map](https://api.dart.ranyunlong.com/dart-core/Map-class.html)。

## URI

在使用 URI（可能你会称它为 URLs） 时，[Uri 类](https://api.dart.ranyunlong.com/dart-core/Uri-class.html) 提供对字符串的编解码操作。 这些函数用来处理 URI 特有的字符，例如 ＆ 和 = 。 Uri 类还可以解析和处理 URI—host，port，scheme等组件。
