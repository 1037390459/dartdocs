# dart:async library

Support for asynchronous programming, with classes such as Future and Stream.

Understanding Futures and Streams is a prerequisite for writing just about any Dart program.

To use this library in your code:

```dart
import 'dart:async';
```

## Future

A Future object represents a computation whose return value might not yet be available. The Future returns the value of the computation when it completes at some time in the future. Futures are often used for potentially lengthy computations such as I/O and interaction with users.

Many methods in the Dart libraries return Futures when performing tasks. For example, when binding an HttpServer to a host and port, the bind() method returns a Future.

```dart
 HttpServer.bind('127.0.0.1', 4444)
     .then((server) => print('${server.isBroadcast}'))
     .catchError(print);
```
Future.then registers a callback function that runs when the Future's operation, in this case the bind() method, completes successfully. The value returned by the operation is passed into the callback function. In this example, the bind() method returns the HttpServer object. The callback function prints one of its properties. Future.catchError registers a callback function that runs if an error occurs within the Future.

## Stream

A Stream provides an asynchronous sequence of data. Examples of data sequences include individual events, like mouse clicks, or sequential chunks of larger data, like multiple byte lists with the contents of a file such as mouse clicks, and a stream of byte lists read from a file. The following example opens a file for reading. Stream.listen registers a callback function that runs each time more data is available.

```dart
Stream<List<int>> stream = new File('quotes.txt').openRead();
stream.transform(utf8.decoder).listen(print);
```

The stream emits a sequence of a list of bytes. The program must interpret the bytes or handle the raw byte data. Here, the code uses a UTF-8 decoder (provided in the dart:convert library) to convert the sequence of bytes into a sequence of Dart strings.

Another common use of streams is for user-generated events in a web app: The following code listens for mouse clicks on a button.

```dart
querySelector('#myButton').onClick.listen((_) => print('Click.'));
```

Other resources

- The dart:async section of the library tour: A brief overview of asynchronous programming.

Use Future-Based APIs: A closer look at Futures and how to use them to write asynchronous Dart code.

- Futures and Error Handling: Everything you wanted to know about handling errors and exceptions when working with Futures (but were afraid to ask).

- The Event Loop and Dart: Learn how Dart handles the event queue and microtask queue, so you can write better asynchronous code with fewer surprises.

- test package: Asynchronous Tests: How to test asynchronous code.

## Classes

### Completer`<T>`
A way to produce Future objects and to complete them later with a value or error. [...]
DeferredLibrary
Indicates that loading of libraryName is deferred. [...]

### EventSink`<T>`
A Sink that supports adding errors. [...]

### Future`<T>`
An object representing a delayed computation. [...]

### FutureOr`<T>`
A type representing values that are either Future`<T>` or T. [...]

### Stream`<T>`
A source of asynchronous data events. [...]

### StreamConsumer`<S>`
Abstract interface for a "sink" accepting multiple entire streams. [...]

### StreamController`<T>`
A controller with the stream it controls. [...]

### StreamIterator`<T>`
An Iterator like interface for the values of a Stream. [...]

### StreamSink`<S>`
A object that accepts stream events both synchronously and asynchronously. [...]

### StreamSubscription`<T>`
A subscription on events from a Stream. [...]

### StreamTransformer`<S, T>`
Transforms a Stream. [...]

### StreamTransformerBase`<S, T>`
Base class for implementing StreamTransformer. [...]

### StreamView`<T>`
Stream wrapper that only exposes the Stream interface.

### SynchronousStreamController`<T>`
A stream controller that delivers its events synchronously. [...]

### Timer
A count-down timer that can be configured to fire once or repeatedly. [...]

### Zone
A zone represents an environment that remains stable across asynchronous calls. [...]

### ZoneDelegate
An adapted view of the parent zone. [...]

### ZoneSpecification
This class provides the specification for a forked zone. [...]


## Functions

### runZoned`<R>`(R body(), { Map zoneValues, ZoneSpecification zoneSpecification, Function onError }) → R
Runs body in its own zone. [...]

### scheduleMicrotask(void callback()) → void
Runs a function asynchronously. [...]

## Typedefs

### ControllerCallback() → void
Type of a stream controller's onListen, onPause and onResume callbacks.

### ControllerCancelCallback() → dynamic
Type of stream controller onCancel callbacks. [...]

### CreatePeriodicTimerHandler(Zone self, ZoneDelegate parent, Zone zone, Duration period, void f(Timer timer)) → Timer

### CreateTimerHandler(Zone self, ZoneDelegate parent, Zone zone, Duration duration, void f()) → Timer

### ErrorCallbackHandler(Zone self, ZoneDelegate parent, Zone zone, Object error, StackTrace stackTrace) → AsyncError

### ForkHandler(Zone self, ZoneDelegate parent, Zone zone, ZoneSpecification specification, Map zoneValues) → Zone

### HandleUncaughtErrorHandler(Zone self, ZoneDelegate parent, Zone zone, Object error, StackTrace stackTrace) → void

### PrintHandler(Zone self, ZoneDelegate parent, Zone zone, String line) → void

### RegisterBinaryCallbackHandler(Zone self, ZoneDelegate parent, Zone zone, R f(T1 arg1, T2 arg2)) → ZoneBinaryCallback`<R, T1, T2>`

### RegisterCallbackHandler(Zone self, ZoneDelegate parent, Zone zone, R f()) → ZoneCallback`<R>`

### RegisterUnaryCallbackHandler(Zone self, ZoneDelegate parent, Zone zone, R f(T arg)) → ZoneUnaryCallback`<R, T>`

### RunBinaryHandler(Zone self, ZoneDelegate parent, Zone zone, R f(T1 arg1, T2 arg2), T1 arg1, T2 arg2) → R

### RunHandler(Zone self, ZoneDelegate parent, Zone zone, R f()) → R

### RunUnaryHandler(Zone self, ZoneDelegate parent, Zone zone, R f(T arg), T arg) → R

### ScheduleMicrotaskHandler(Zone self, ZoneDelegate parent, Zone zone, void f()) → void

### ZoneBinaryCallback`<R, T1, T2>`(T1 arg1, T2 arg2) → R

### ZoneCallback`<R>`() → R

### ZoneUnaryCallback`<R, T>`(T arg) → R

## Exceptions / Errors

### syncError
Pair of error and stack trace. Returned by Zone.errorCallback.

### DeferredLoadException
Thrown when a deferred library fails to load.

### TimeoutException
Thrown when a scheduled timeout happens while waiting for an async result.