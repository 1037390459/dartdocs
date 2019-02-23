# DartPad

[DartPad(dartpad.cn)](https://dartpad.ranyunlong.com/) 是一个开源工具，可让您在任何现代浏览器中使用Dart语言。 这是DartPad的样子：

![DartPad](../images/dartpad-hello-fffafbc5af52bd8cc22aeec07c4342e5c6a929b2c8ece1998e9d0e30f408b573.png)


## 类库支持

DartPad支持 dart：* 与Web应用程序一起使用的库; 它不支持 [dart:io]() 或[packages](https://pub.flutter-io.cn)中的库。 如果您想使用[dart:io]()，请改用[Dart SDK](../#安装sdk)。如果要使用程序包，请获取该程序包[支持的平台](../platforms.md)的SDK 。


## 入门

要熟悉DartPad，请尝试运行一些示例，然后创建一个简单的命令行应用程序。


### 打开DartPad，然后运行一些示例

1. 打开DartPad(dartpad.ranyunlong.com)](https://dartpad.ranyunlong.com/)。

左侧显示一个样本，右侧显示输出。如果您之前使用过DartPad，则可以单击“New Pad”以返回原始样本。

2. 单击 Run。

案例代码重新运行，更新输出。

3. 使用右上角的“samples”列表选择像Sunflower这样的HTML示例。
    
同样，输出显示在右侧。默认情况下，您会看到HTML输出 - 您在浏览器中看到的内容。

4. 单击CONSOLE以查看示例的控制台输出。

5. 在左侧，单击HTML选项卡以查看示例的HTML标记。

### 创建一个命令行应用程序

要创建一个简单的命令行应用程序，请使用New Pad。

1. 单击“ 新建填充”按钮，确认您要放弃对当前打击垫的更改。

Hello World应用程序的源代码显示在DART选项卡下。

2. 清除DartPad右下角的显示Web内容复选框。

HTML和CSS选项卡消失。

3. 更改代码。例如，更改main()函数以包含此代码：

```dart
for (var char in 'hello'.split('')) {
  print(char);
}
```

在您键入时，DartPad会显示提示，文档和自动填充建议。

4. 单击“Format”按钮。DartPad使用Dart[格式化程序](https://github.com/dart-lang/dart_style#readme) 确保您的代码具有适当的缩进，空白和换行。

5. 运行你的应用程序

6. 如果您在输入代码时没有遇到任何错误，请尝试引入错误。

例如，如果更改 ==split== 为 ==spit==，则会在窗口底部和“运行”按钮中收到警告。如果您运行该应用程序，您将看到未捕获的异常的输出。

## 检查Dart版本信息

DartPad支持的语言功能和API取决于DartPad所基于的 ==Dart SDK== 版本。您可以在DartPad的右下角找到SDK版本。

## 隐私声明

DartPad是一项免费的开源服务，可帮助开发人员了解Dart语言和库。输入DartPad的源代码可能会被发送到运行在Google Cloud Platform中的服务器，以便进行错误/警告分析，编译为JavaScript，然后返回到浏览器。

输入DartPad的源代码可以存储，处理和聚合，以改善DartPad和其他Dart工具的用户体验。例如，我们可能会使用源代码来帮助提供更好的代码完成建议。原始源代码在不超过60天后删除。