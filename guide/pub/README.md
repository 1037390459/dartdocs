# Pub Package Manager

You can use the pub tool to manage Dart packages. Pub is one of the tools that you get when you install the Dart SDK.

:::warning
The Flutter SDK has its own commands for managing and updating packages. For more information, see [Using Packages](https://flutter.io/docs/development/packages-and-plugins/using-packages) on the [Flutter website](https://flutter.io/).
:::

You can access the pub commands either through an IDE, such as WebStorm, or at the command line. Use whatever approach is most convenient.

:::tip
Problems? See [Troubleshooting Pub](./troubleshoot.md).
:::


## Managing packages
Dart applications rely on packages. If your Dart app uses one or more library packages, then your app itself must be an application package.
:::tip
Pub used to support building apps through commands like pub build and pub serve. That functionality is now in other tools such as the build system. For details, see [Obsolete Pub Features](./obsolete.md).
:::

### How to

- [Getting Started with Pub](./get-started.md)
- [Create Library Packages](./create-library-packages.md)
- [Configuring Pub Environment Variables](./environment-variables.md)
- [Publishing a Package](./publishing.md)

### Concepts

- [Pub Dependencies](./dependencies.md)
- [Pub Package Layout Conventions](./package-layout.md)
- [Pub Versioning Philosophy](./versioning.md)

### Reference

- [Pubspec Format](./pubspec.md)
- [Glossary](./glossary.md)

## Pub commands

The pub tool provides the following commands:

- [pub cache](./cmd/pub-cache.md)
- [pub deps](./cmd/pub-deps.md)
- [pub downgrade](./cmd/pub-downgrade.md)
- [pub get](./cmd/pub-get.md)
- [pub global](./cmd/pub-global.md)
- [pub publish](./cmd/pub-lish.md)
- [pub run](./cmd/pub-run.md)
- [pub upgrade](./cmd/pub-upgrade.md)
- [pub uploader](./cmd/pub-uploader.md)

For an overview of all the pub commands, see [Pub Commands].(./cmd/)。

## Troubleshooting

[Troubleshooting Pub ](./troubleshoot.md)gives solutions to problems that you might encounter when using pub.