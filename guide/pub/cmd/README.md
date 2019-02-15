# Pub Commands

The pub tool has commands for managing packages and for deploying packages and command-line apps.

:::warning
The Flutter SDK has its own commands for managing and updating packages. For more information,see [Using Packages](https://flutter.io/docs/development/packages-and-plugins/using-packages) on the [Flutter website](https://flutter.io/).
:::

Quick links to the pub commands:

- [pub cache](./pub-cache.md)
- [pub deps](./pub-deps.md)
- [pub downgrade](./pub-downgrade.md)
- [pub get](./pub-get.md)
- [pub global](./pub-global.md)
- [pub publish](./pub-lish.md)
- [pub run](./pub-run.md)
- [pub upgrade](./pub-upgrade.md)
- [pub uploader](./pub-uploader.md)

## Pub cache
!!!include(./guide/pub/cmd/pub-cache.md)!!!

## Pub deps
!!!include(./guide/pub/cmd/pub-deps.md)!!!

## Pub downgrade
!!!include(./guide/pub/cmd/pub-downgrade.md)!!!

## Pub get
!!!include(./guide/pub/cmd/pub-get.md)!!!

## Pub global
!!!include(./guide/pub/cmd/pub-global.md)!!!

## Pub publish
!!!include(./guide/pub/cmd/pub-lish.md)!!!

## Pub run
!!!include(./guide/pub/cmd/pub-run.md)!!!

## Pub upgrade
!!!include(./guide/pub/cmd/pub-upgrade.md)!!!

## Pub uploader
!!!include(./guide/pub/cmd/pub-uploader.md)!!!

:::tip
Problems? See [Troubleshooting Pub](../troubleshoot.md).
:::

Pub’s commands fall into the following categories:

- [Managing package dependencies](#managing-package-dependencies)
- [Running command-line apps](#running-command-line-apps)
- [Deploying packages and apps](#running-command-line-apps)

## Managing package dependencies

Pub provides a number of commands for managing the [packages your code depends on](../dependencies.md).

In this group, the most commonly used commands are `pub get` and `pub upgrade`, which retrieve or upgrade dependencies used by a package. Every time you modify a pubspec file, run `pub get` to make sure the dependencies are up to date. Some IDEs perform this step automatically on the creation of a project, or any modification of the pubspec.

[pub cache](./pub-cache.md)
Manages pub’s local package cache. Use this command to add packages to your cache, or to perform a clean reinstall of all packages in your cache.

[pub deps](./pub-deps.md)
Lists all dependencies used by the current package.

[pub downgrade](./pub-downgrade.md)
Retrieves the lowest versions of all the packages that are listed as dependencies used by the current package. Used for testing the lower range of your package’s dependencies.

[pub get](./pub-get.md)
Retrieves the packages that are listed as the dependencies for the current package. If a `pubspec.lock` file already exists, fetches the version of each dependency (if possible) as listed in the lock file. Creates or updates the lock file, as needed.

[pub upgrade](./pub-upgrade.md)
Retrieves the latest version of each package listed as dependencies used by the current package. If a `pubspec.lock` file exists, ignores the versions listed in the lock file and fetches the newest versions that honor the constraints in the pubspec. Creates or updates the lock file, as needed.


## Running command-line apps
Two commands let you run Dart scripts from the command line:

- The `pub run` command invokes a Dart script in your package, or in one of its dependencies.
- The `pub global` command lets you work with globally available packages.

## Deploying packages and apps
With pub you can publish packages and command-line apps.

:::tip
Pub used to support building apps through commands like pub build and pub serve. That functionality is now in other tools such as the build system. For details, see Obsolete Pub Features.
:::

### Packages

To share your Dart packages with the world, you can use the [pub publish](./pub-lish.md) command to upload the package to the [Pub site](https://pub.dartlang.org/). The [pub uploader](./pub-uploader.md) command enables specific users to modify and upload new versions of your package.

### Command-line apps

For any package that contains scripts (anything under the `bin/` directory), consider adding the `executables` tag to the pubspec file. When a script is listed under `executables`, users can run [pub global activate](./pub-global.md#activating-a-package) to make it directly available from the command line.

## Global options

Several command-line options work with all of the pub commands. These include:

==--help== or ==-h== Print usage information.

==--version== Print version of pub.

==--trace==
Print debugging information when an error occurs.

==--verbosity=&lt;level&gt;== The specified level determines the amount of information that is displayed:

- ==all== Show all output, including internal tracing messages.
- ==io== Show I/O operations.
- ==normal== Show errors, warnings, and user messages.
- ==solver== Show steps during version resolution.

==-verbose== or ==-v==

Equivalent to ==--verbosity=all==.