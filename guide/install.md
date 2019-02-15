# Install the SDK

- [Windows](./install.html#windows)
- [Linux](./install.html#linux)
- [Mac](./install.html#mac)

## Windows

Choose one of these options:
- [Install using Chocolatey](./install.html#install-using-chocolatey)
- [Install using a setup wizard](./install.html#install-using-a-setup-wizard)

### Install using Chocolatey

To use [Chocolatey](https://chocolatey.org/) to install a stable release of the Dart SDK, run this command:

:::warning
You must be installed [Chocolatey](https://chocolatey.org/) command line tools.
- [Chocolatey](https://chocolatey.org/)
- [Install chocolatey](https://chocolatey.org/install)
:::

To use Chocolatey to install a stable release of the Dart SDK, run this command:

```bash
C:\> choco install dart-sdk
```

To install a dev release, run this command:
```bash
C:\> choco install dart-sdk --pre
```
To upgrade the Dart SDK, run this command (add --pre to upgrade the dev release):
```bash
C:\> choco upgrade dart-sdk
```

### Install using a setup wizard

Alternatively, use the community-supported [Dart SDK installer for Windows](https://github.com/GeKorm/dart-windows/releases/latest). You can use the wizard to install stable or dev versions of the Dart SDK.[download install file](https://github.com/GeKorm/dart-windows/releases/latest)

![安装程序](./images/installer-screenshot-no.png)

fileName|描述
--|--
Dart_32.dev.setup.exe| 32 bit dev version
Dart_32.stable.setup.exe| 32 bit stable version
Dart_x64.dev.setup.exe| 64 bit dev version
Dart_x64.stable.setup.exe| 64 bit stable version

If you want upgrade dart sdk，Please run Dart Update.exe in the dart installation directory.

## Linux

If you’re using Debian/Ubuntu on AMD64 (64-bit Intel), you can choose one of the following options, both of which can update the SDK automatically when new versions are released.

- [Install using apt-get](./install.html#install-using-apt-get)
- [Install a Debian package](./install.html#install-a-debian-package)

### Install using apt-get

Perform the following one-time setup:

```bash
$ sudo apt-get update
$ sudo apt-get install apt-transport-https
$ sudo sh -c 'curl https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -'
$ sudo sh -c 'curl https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list'
```

Then install the stable release of the Dart SDK:

```bash
$ sudo apt-get update
$ sudo apt-get install dart
```

Or, to install the dev release of the Dart SDK, run the one-time setup commands followed by:

```bash
$ sudo sh -c 'curl https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_unstable.list > /etc/apt/sources.list.d/dart_unstable.list'
$ sudo apt-get update
$ sudo apt-get install dart
```
### Install a Debian package

Alternatively, download Dart SDK as Debian package in the .deb package format.
- [version stable 2.1.0](https://storage.googleapis.com/dart-archive/channels/stable/release/latest/linux_packages/dart_2.1.0-1_amd64.deb)

- [version dev 2.1.0](https://storage.googleapis.com/dart-archive/channels/dev/release/latest/linux_packages/dart_2.1.1-dev.3.2-1_amd64.deb)

### Modify PATH for access to all Dart binaries

After installing the SDK, add its bin directory to your PATH. For example, use the following command to change PATH in your active terminal session:
```bash
export PATH="$PATH:/usr/lib/dart/bin"
```
To change the PATH for future terminal sessions, use a command like this:
```bash
$ echo 'export PATH="$PATH:/usr/lib/dart/bin"' >> ~/.profile
```

## Mac
:::warning
On mac os install dart sdk, you must be installed [homebrew](http://brew.sh/)
:::
Install [homebrew](http://brew.sh/), and then run:

```bash
$ brew tap dart-lang/dart
$ brew install dart
```
To install a dev channel release, use --devel:
```bash
$  brew install dart --devel
```
### Upgrade
To upgrade when a new release of Dart is available run:
```bash
$ brew upgrade dart
```
To install a stable channel release when a dev release is currently active, run:
```bash
$ brew unlink dart
$ brew install dart
```
To upgrade to a dev channel release when a stable release is currently active, run:
```bash
$ brew upgrade dart --devel --force
```
### Switch release

To switch between locally installed dart releases run `brew switch dart <version>`. Examples:

```bash
$ brew switch dart 1.24.3
$ brew switch dart 2.1.0
```

If you aren’t sure which versions of dart you have installed, then run:

```bash
$ brew info dart
```
The command output lists the latest stable and dev versions at the top, followed by your locally installed versions.
