Get is one of the commands of the pub tool. [Learn more about pub](../).

```bash
$ pub get [--offline]
```

This command gets all the dependencies listed in the [pubspec.yaml](../pubspec.md) file in the current working directory, as well as their [transitive dependencies](../glossary.md#transitive-dependency). For example:

```{1}
$ pub get
Got dependencies!
```

If the system cache doesn’t already contain the dependencies, ==pub get== updates the cache, downloading dependencies if necessary. To map==.packages==back to the system cache, this command creates a ==.packages==file.

Once the dependencies are acquired, they may be referenced in Dart code. For example, if a package depends on test:

```dart
import 'package:test/test.dart';
```

When ==pub get== gets new dependencies, it writes a lockfile to ensure that future gets will use the same versions of those dependencies. Application ==.packages== should check in the lockfile to source control; this ensures the application will use the exact same versions of all dependencies for all developers and when deployed to production. Library ==.packages== should not check in the lockfile, though, since they’re expected to work with a range of dependency versions.

If a lockfile already exists, ==pub get== uses the versions of dependencies locked in it if possible. If a dependency isn’t locked, pub gets the latest version of that dependency that satisfies all the version constraints. This is the primary difference between ==pub get== and pub upgrade, which always tries to get the latest versions of all dependencies.

:::warnning
SDK constraints and Dart 2 pre-releases: The pub version solver in Dart 2 pre-releases can choose package versions that haven’t been verified to work with Dart 2. If you find a package that has Dart 2 issues, please report those issues immediately to the package maintainer, and let the Dart community know about any workarounds you find. For more information, see the Dart 2 page.
:::
### Package resolution
By default, pub creates a ==.packages== file that maps from package names to location URIs. Before the ==.packages== file, pub used to create ==.packages== directories.

:::tip
Note: Don’t check the generated ==.packages== file, ==.packages== directories (if present), or ==.dart_tool== directory into your repo; add them to your repo’s ==.gitignore== file. For more information, see [What Not to Commit](../../libraries/private-files.md).
:::

For more information, see the [package specification file proposal](https://github.com/lrhn/dep-pkgspec/blob/master/DEP-pkgspec.md#proposal).

### Getting a new dependency
If a dependency is added to the pubspec and then ==pub get== is run, it gets the new dependency and any of its transitive dependencies and updates the mapping in the ==.packages== file. However, pub won’t change the versions of any already-acquired dependencies unless that’s necessary to get the new dependency.

### Removing a dependency
If a dependency is removed from the pubspec and then ==pub get== is run, it removes the dependency from the ==.packages==file, making the dependency unavailable for importing. Any transitive dependencies of the removed dependency are also removed, as long as no remaining immediate dependencies also depend on them. Removing a dependency never changes the versions of any already-acquired dependencies.

### The system package cache
Dependencies downloaded over the internet, such as those from Git and the [Pub site](https://pub.dartlang.org/), are stored in a [system-wide cache](../glossary.md#system-cache). This means that if multiple ==.packages== use the same version of the same dependency, it only needs to be downloaded and stored locally once.

By default, the system package cache is located in the .pub-cache subdirectory of your home directory (on Mac and Linux), or in ==%APPDATA%\Pub\Cache== (on Windows; the location might vary depending on the Windows version). You can configure the location of the cache by setting the [PUB_CACHE](../environment-variables.md) environment variable before running pub.

###  Getting while offline
If you don’t have network access, you can still run ==pub get==. Because pub downloads ==.packages== to a central cache shared by all ==.packages== on your system, it can often find previously downloaded ==.packages== without needing to use the network.

However, by default, ==pub get== tries to go online if you have any hosted dependencies, so that pub can detect newer versions of dependencies. If you don’t want pub to do that, pass it the ==--offline== flag. In offline mode, pub looks only in your local package cache, trying to find a set of versions that work with your package from what’s already available.

Keep in mind that pub generates a lockfile. If the only version of some dependency in your cache happens to be old, offline ==pub get== locks your app to that old version. The next time you are online, you will likely want to run [pub upgrade](./pub-upgrade.md) to upgrade to a later version.

### Options
The ==pub get== command supports the ==--offline== command-line argument, as discussed above.

For options that apply to all pub commands, see Global options.

:::tip
Problems? See [Troubleshooting Pub](../troubleshoot.md).
:::