# angular-isolated-scope-embeddable

## Purpose

`ng-transclude` does not have access to its template directive's isolated scope. I encountered [this issue](https://github.com/angular/angular.js/issues/7874) when attempting to use `ng-transclude` within an `ng-repeat`.

`isolated-scope-embeddable` (directive: `embeddable`) allows the replaced content to access the scope of its parent template directive.


## Installation

One of the following will do:

* Add it via `bower`
* Download `angular-isolated-scope-embeddable` and include it in your application

Add `isolatedScopeEmbeddable` module as a dependency on your angular app.


## Example use of the `embeddable` directive

In your directive `foo`'s template:

```
<li ng-repeat="item in list"
    other-properties
>
  <div embeddable></div>
</li>
```

When using the `foo` directive:

```
<foo>
    <div>{{item.value.name}}</div>
</foo>
```

Or maybe you want to use `foo` in another place and wish to have slightly different list item contents...:

```
<foo>
    <div>{{item.value.url}}</div>
    <div>{{item.value.description}}</div>
</foo>
```

This way, your `foo` directive can be generic and at the same time, allow access to the instance (i.e. `item` in the example) of the collection when using the template.

## License

[MIT License](LICENSE.md)
