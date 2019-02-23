# 基础概念

这里将介绍 Dart 主要功能，从变量和运算符到类和库，假设您已经知道如何使用其他语言编程。

学习更多 Dart 核心库, 参考 Dart 库概览. 想了解更多有关语言功能的详细信息, 参考 Dart 编程语言规范.

:::tip 提示
使用 DartPad 可以体验 [Dart](../dartpad.md) 的大部分语言功能。
[打开 DartPad](https://dartpad.ranyunlong.com/)
:::

## 一个基础的Dart程序

以下代码使用了Dart的许多基本功能，
点击![运行](/red-run.png)按钮运行该案例代码：
<DartPad
    id="d33791fc65ff2670f5ef6935fe33fb29"
    vertical-ratio="60"
    height="400"
/>



以下是此程序使用的代码，这些代码适用于所有（或几乎所有）的 Dart 应用：

==// 注释==
单行注释。 Dart 同样支持多行注释和文档注释。 有关更多信息，参考[注释]()。

==int== 
内置类型的一种。

==42==
字面量。字面量是一种编译型常量。

==print()==
控制台输出函数

=='...'==（或 =="..."== ）
字符串常量。

==$variableName==（或）==${expression}==
字符串插值：包括字符串文字内部的变量或表达式的字符串。有关更多信息，请参考 [字符串](built-in-types.md#字符串)。

==main()==
程序开始执行函数，该函数是特定的、必须的、顶级函数。 有关更多信息，请参考 [main() 函数](built-in-types.md#main-函数)。

==var==
定义变量，通过这种方式定义变量不需要指定变量类型。

:::tip 提示
本网站的代码遵循[Dart风格指南中](https://www.dartlang.org/guides/language/effective-dart/style)的约定 。
:::

## 重要的概念


当您了解Dart语言时，请记住以下事实和概念：

- 任何保存在变量中的都是一个 对象 ， 并且所有的对象都是对应一个 类 的实例。 无论是数字，函数和 ==null== 都是对象。所有对象继承自 [Object](https://api.dart.ranyunlong.com/dart-core/Object-class.html) 类。

- 尽管 Dart 是强类型的，但是 Dart 可以推断类型，所以类型注释是可选的。 在上面的代码中， number 被推断为 int 类型。 如果要明确说明不需要任何类型， [需要使用特殊类型 dynamic]() 。

- Dart 支持泛型，如 List<Generic :value="[{link:'https://api.dart.ranyunlong.com/dart-core/int-class.html', value: 'int'}]"/> （整数列表）或 List<Generic :value="['dynamic']"/>（任何类型的对象列表）。

- Dart 支持顶级函数（例如 ==main()== ）， 同样函数绑定在类或对象上（分别是 静态函数 和 实例函数 ）。 以及支持函数内创建函数 （ 嵌套 或 局部函数 ） 。

- 类似地， Dart 支持顶级 变量 ， 同样变量绑定在类或对象上（静态变量和实例变量）。 实例变量有时称为字段或属性。

- 与 Java 不同，Dart 没有关键字 “public” ， “protected” 和 “private” 。 如果标识符以下划线（\ _）开头，则它相对于库是私有的。 有关更多信息，参考 [库和可见性]()。

- 标识符 以字母或下划线（\ _）开头，后跟任意字母和数字组合。

- Dart 语法中包含 表达式（ expressions ）（有运行时值）和 语句（ statements ）（没有运行时值）。 例如，[条件表达式]() ==condition ? expr1 : expr2== 的值可能是 ==expr1== 或 ==expr2== 。 将其与 [if-else 语句]() 相比较，if-else 语句没有值。 一条语句通常包含一个或多个表达式，相反表达式不能直接包含语句。

- Dart 工具提示两种类型问题：警告_和_错误。 警告只是表明代码可能无法正常工作，但不会阻止程序的执行。 错误可能是编译时错误或者运行时错误。 编译时错误会阻止代码的执行; 运行时错误会导致代码在执行过程中引发 [异常]()。

## 关键字
Dart 语言关键字列表。

<table>
    <tbody>
        <tr>
            <td>
                <a href="">abstract</a>&nbsp;<sup title="built-in-identifier"
                    alt="built-in-identifier">2</sup>
            </td>
            <td>
                <a href="">dynamic</a>&nbsp;<sup
                    title="built-in-identifier" alt="built-in-identifier">2</sup>
            </td>
            <td>
                <a href="">implements</a>&nbsp;<sup title="built-in-identifier"
                    alt="built-in-identifier">2</sup>
            </td>
            <td>
                <a href="">show</a>&nbsp;<sup
                    title="contextual keyword" alt="contextual keyword">1</sup>
            </td>
        </tr>
        <tr>
            <td>
                <a href="">as</a>&nbsp;<sup
                    title="built-in-identifier" alt="built-in-identifier">2</sup>
            </td>
            <td><a href="">else</a></td>
            <td>
                <a href="">import</a>&nbsp;<sup title="built-in-identifier"
                    alt="built-in-identifier">2</sup>
            </td>
            <td>
                <a href="">static</a>&nbsp;<sup
                    title="built-in-identifier" alt="built-in-identifier">2</sup>
            </td>
        </tr>
        <tr>
            <td><a href="">assert</a></td>
            <td><a href="">enum</a></td>
            <td><a href="">in</a></td>
            <td><a href="">super</a></td>
        </tr>
        <tr>
            <td>
                <a href="">async</a>&nbsp;<sup title="contextual keyword"
                    alt="contextual keyword">1</sup>
            </td>
            <td>
                <a href="">export</a>&nbsp;<sup title="built-in-identifier"
                    alt="built-in-identifier">2</sup>
            </td>
            <td>
                <a href=""
                    class="external">interface</a>&nbsp;<sup title="built-in-identifier"
                    alt="built-in-identifier">2</sup>
            </td>
            <td><a href="">switch</a></td>
        </tr>
        <tr>
            <td>
                <a href="">await</a>&nbsp;<sup title="limited reserved word"
                    alt="limited reserved word">3</sup>
            </td>
            <td><a href="">extends</a></td>
            <td><a href="">is</a></td>
            <td>
                <a href="">sync</a>&nbsp;<sup title="contextual keyword"
                    alt="contextual keyword">1</sup>
            </td>
        </tr>
        <tr>
            <td><a href="">break</a></td>
            <td>
                <a href=""
                    class="external">external</a>&nbsp;<sup title="built-in-identifier"
                    alt="built-in-identifier">2</sup>
            </td>
            <td>
                <a href="">library</a>&nbsp;<sup
                    title="built-in-identifier" alt="built-in-identifier">2</sup>
            </td>
            <td><a href="">this</a></td>
        </tr>
        <tr>
            <td><a href="">case</a></td>
            <td>
                <a href="">factory</a>&nbsp;<sup
                    title="built-in-identifier" alt="built-in-identifier">2</sup>
            </td>
            <td>
                <a href="">mixin</a>&nbsp;<sup
                    title="built-in-identifier" alt="built-in-identifier">2</sup>
            </td>
            <td><a href="">throw</a></td>
        </tr>
        <tr>
            <td><a href="">catch</a></td>
            <td><a href="">false</a></td>
            <td><a href="">new</a></td>
            <td><a href="">true</a></td>
        </tr>
        <tr>
            <td><a href="">class</a></td>
            <td><a href="">final</a></td>
            <td><a href="">null</a></td>
            <td><a href="">try</a></td>
        </tr>
        <tr>
            <td><a href="">const</a></td>
            <td><a href="">finally</a></td>
            <td>
                <a href="">on</a>&nbsp;<sup title="contextual keyword" alt="contextual keyword">1</sup>
            </td>
            <td>
                <a href="">typedef</a>&nbsp;<sup title="built-in-identifier" alt="built-in-identifier">2</sup>
            </td>
        </tr>
        <tr>
            <td><a href="">continue</a></td>
            <td><a href="">for</a></td>
            <td>
                <a href="">operator</a>&nbsp;<sup
                    title="built-in-identifier" alt="built-in-identifier">2</sup>
            </td>
            <td><a href="">var</a></td>
        </tr>
        <tr>
            <td>
                <a href="">covariant</a>&nbsp;<sup
                    title="built-in-identifier" alt="built-in-identifier">2</sup>
            </td>
            <td>
                <a href="">Function</a>&nbsp;<sup title="built-in-identifier"
                    alt="built-in-identifier">2</sup>
            </td>
            <td>
                <a href="">part</a>&nbsp;<sup
                    title="built-in-identifier" alt="built-in-identifier">2</sup>
            </td>
            <td><a href="" class="external">void</a>
            </td>
        </tr>
        <tr>
            <td><a href="">default</a></td>
            <td>
                <a href="">get</a>&nbsp;<sup title="built-in-identifier"
                    alt="built-in-identifier">2</sup>
            </td>
            <td><a href="">rethrow</a></td>
            <td><a href="">while</a></td>
        </tr>
        <tr>
            <td>
                <a href="">deferred</a>&nbsp;<sup
                    title="built-in-identifier" alt="built-in-identifier">2</sup>
            </td>
            <td>
                <a href="">hide</a>&nbsp;<sup
                    title="contextual keyword" alt="contextual keyword">1</sup>
            </td>
            <td><a href="">return</a></td>
            <td><a href="">with</a></td>
        </tr>
        <tr>
            <td><a href="">do</a></td>
            <td><a href="">if</a></td>
            <td>
                <a href="">set</a>&nbsp;<sup title="built-in-identifier"
                    alt="built-in-identifier">2</sup>
            </td>
            <td>
                <a href="">yield</a>&nbsp;<sup title="limited reserved word"
                    alt="limited reserved word">3</sup>
            </td>
        </tr>
    </tbody>
</table>

避免使用这些单词作为标识符。 但是，如有必要，标有上标的关键字可以用作标识符：

- 带有 1 上标的单词为 上下文关键字， 仅在特定位置具有含义。 他们在任何地方都是有效的标识符。

- 带有 2 上标的单词为 内置标识符， 为了简化将 JavaScript 代码移植到 Dart 的工作， 这些关键字在大多数地方都是有效的标识符， 但它们不能用作类或类型名称，也不能用作 import 前缀。

- 带有 3 上标的单词是与 Dart 1.0 发布后添加的[异步支持]()相关的更新，作为限制类保留字。
不能在标记为 ==async== ，==async== 或 ==sync*== 的任何函数体中使用 ==await== 或 ==yield== 作为标识符。

关键字表中的剩余单词都是保留字。 不能将保留字用作标识符。