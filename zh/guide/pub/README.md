# Pub 包管理器

您可以使用pub工具来管理dart包。pub是安装dart SDK 后的内置命令行工具。类似于 [npm](https://www.npmjs.com/) 或[yarn](https://yarnpkg.com/)

:::warning 注意
flutter SDK有自己的命令来管理和更新软件包。有关更多信息，请参阅[Flutter](https://flutter.io/docs/development/packages-and-plugins/using-packages)网站上的使用包。
:::

您可以通过IDE（例如WebStorm）或命令行访问pub命令。 使用最方便的方法。

:::tip 提示
遇到问题？ 请参阅[故障排除](./troubleshoot.md)。
:::


## 管理包

Dart应用程序依赖于包。 如果您的Dart应用程序使用一个或多个库包，那么您的应用程序本身必须是应用程序包。
:::tip 提示
Pub用于通过pub build和pub serve等命令支持构建应用程序。 该功能现在在其他工具中，例如构建系统。 有关详细信息，请参阅[Obsolete Pub Features](./obsolete.md).
:::

### 如何使用pub

- [Pub入门](./get-started.md)
- [创建 Library Packages](./create-library-packages.md)
- [配置Pub环境变量](./environment-variables.md)

### 概念

- [Pub Dependencies（Pub依赖）](./dependencies.md)
- [Pub Package Layout Conventions（Pub 包结构约定）](./package-layout.md)
- [Pub Versioning Philosophy（Pub 包版本管理）](./versioning.md)

### 参考

- [Pubspec 格式](./pubspec.md)
- [词汇表](./glossary.md)

## Pub 命令

pub工具提供以下命令：

- [pub cache](./cmd/pub-cache.md)
- [pub deps](./cmd/pub-deps.md)
- [pub downgrade](./cmd/pub-downgrade.md)
- [pub get](./cmd/pub-get.md)
- [pub global](./cmd/pub-global.md)
- [pub publish](./cmd/pub-lish.md)
- [pub run](./cmd/pub-run.md)
- [pub upgrade](./cmd/pub-upgrade.md)
- [pub uploader](./cmd/pub-uploader.md)

有关所有pub命令的概述，请参阅[Pub命令](./cmd/)。

## 故障排除

对pub进行[故障排除](./troubleshoot.md)可以解决使用pub时可能遇到的问题。