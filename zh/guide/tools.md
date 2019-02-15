# 开发工具

在你准备好创建一个应用程序时， 请获对应于应用类型的SDK和工具。

应用类型|使用说明|工具信息
--|--|--
移动端|[安装 Flutter](https://flutter.io/)|[Flutter 工具](https://flutter.io/docs/development/tools/android-studio)
Web|[安装 Dart SDK](/zh/guide/install)| Dart Web 端工具
脚本或服务器|[安装 Dart SDK](/zh/guide/install)| 服务端开发工具


dart 支持以下IDE：

1. [Android Studio](http://www.android-studio.org/) flutter 开发推荐使用
2. [Visual Studio code](https://code.visualstudio.com/) web或服务器开发推荐使用
3. [Webstorm](http://www.jetbrains.com/webstorm/) web或服务器开发推荐使用

在web或服务器开发中 [Webstorm](http://www.jetbrains.com/webstorm/) 支持更全面一些。

## DartPad

[DartPad](https://dartpad.cn/) 无需下载，是学习 Dart 语法和体验 Dart 语言功能的 一个非常棒的途径。它支持 Dart 的核心库，但不包括 VM 库，例如 dart:io 。

## vscode配置

### 创建项目
1. 在[Visual Studio code](https://code.visualstudio.com/)扩展中搜索 dart相关的插件，并且安装。使用ctrl + shift + x 可以打开扩展
2. 直接安装点击链接[Visual Studio code for Dart](https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code)，在打开的网页中，点击install 并安装依赖（建议使用chrome 浏览器打开）


## Webstorm配置

###  创建项目
![img](./images/webstorm-create-project.jpg)

### 设置dart sdk
![img](./images/webstorm-set-dart-sdk.jpg)

1. 添加项目名称
2. 设置dart sdk的path
3. 选项开发模板

:::warning 注意
Webstorm 必须添加dart sdk的安装目录，如果不添加就无法创建项目
:::

## SDK 中的工具
大多数与 Dart 相关的 SDK 包括以下工具。

### [Pub 包管理工具 (pub)](/zh/guide/pub/)

通过管理 Dart 包，可以轻松的安装，使用和共享 Dart 库，命令行工具以及其他资源。 某些 Dart 技术（如 Flutter ）可能不支持所有 Pub 命令。支持 Dart 的 IDE 通常会支持 Pub，当然你也可以通过命令行使用它。

### 静态分析工具 (dartanalyzer)
预估并提示代码中的错误或警告。IDE 的 Dart 插件会使用 Dart 的分析工具， 当然你也可以从命令行执行分析工具。

### 代码格式化工具 (dartfmt)
按照 Dart 风格指导的建议格式化你的代码。 支持 Dart 的 IDE 通常允许你在 IDE 中格式化代码。或者可以在命令行执行格式化程序。


## 包中的工具

下列工具分布在 Dart 包站点上的包中。 根据每个工具的安装说明描述，使用 pub 命令安装这些工具。

### build_runner
代码生成器。
### dartfix
用于 Dart 源代码迁移和常见问题修复的工具。