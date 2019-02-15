# dart:convert library
Encoders and decoders for converting between different data representations, including JSON and UTF-8.

In addition to converters for common data representations, this library provides support for implementing converters in a way which makes them easy to chain and to use with streams.

To use this library in your code:

```dart
import 'dart:convert';
```

Two commonly used converters are the top-level instances of JsonCodec and Utf8Codec, named json and utf8, respectively.

JSON is a simple text format for representing structured objects and collections. The JSON encoder/decoder transforms between strings and object structures, such as lists and maps, using the JSON format.

UTF-8 is a common variable-width encoding that can represent every character in the Unicode character set. The UTF-8 encoder/decoder transforms between Strings and bytes.

Converters are often used with streams to transform the data that comes through the stream as it becomes available. The following code uses two converters. The first is a UTF-8 decoder, which converts the data from bytes to UTF-8 as it's read from a file, The second is an instance of LineSplitter, which splits the data on newline boundaries.

```dart
var lineNumber = 1;
var stream = File('quotes.txt').openRead();

stream.transform(utf8.decoder)
      .transform(const LineSplitter())
      .listen((line) {
        if (showLineNumbers) {
          stdout.write('${lineNumber++} ');
        }
        stdout.writeln(line);
      });
```

See the documentation for the Codec and Converter classes for information about creating your own converters.