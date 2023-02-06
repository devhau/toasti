# toasti
**toasti** is a Javascript library for non-blocking notifications and without jQuery. The goal is to create a simple core library that can be customized and extended.


## Demo
- Demo can be found at https://toasti.hau.xyz

## Install

#### [npm](https://www.npmjs.com/package/toasti)
```
npm install --save toasti
```

#### [yarn](https://yarnpkg.com/en/package/toasti)
```
yarn add toasti
```



## Wiki and Change Log
[Wiki including Change Log](https://github.com/devhau/toasti/wiki)

## Breaking Changes

#### Animation Changes
The following animations options have been deprecated and should be replaced:

 - Replace `options.fadeIn` with `options.showDuration`
 - Replace `options.onFadeIn` with `options.onShown`
 - Replace `options.fadeOut` with `options.hideDuration`
 - Replace `options.onFadeOut` with `options.onHidden`

## Quick Start

### 3 Easy Steps
For other API calls, see the [demo](https://toasti.hau.xyz).

1. Link to toasti.css `<link href="toasti.css" rel="stylesheet"/>`

2. Link to toasti.js `<script src="toasti.js"></script>`

3. use toasti to display a toast for info, success, warning or error
	```js
	// Display an info toast with no title
	toasti.info('Are you the 6 fingered man?')
	```

### Other Options
```js
// Display a warning toast, with no title
toasti.warning('My name is Inigo Montoya. You killed my father, prepare to die!')

// Display a success toast, with a title
toasti.success('Have fun storming the castle!', 'Miracle Max Says')

// Display an error toast, with a title
toasti.error('I do not think that word means what you think it means.', 'Inconceivable!')

// Immediately remove current toasts without using animation
toasti.remove()

// Remove current toasts using animation
toasti.clear()

// Override global options
toasti.success('We do have the Kapua suite available.', 'Turtle Bay Resort', {timeOut: 5000})
```

### Escape HTML characters
In case you want to escape HTML characters in title and message

	toasti.options.escapeHtml = true;

### Close Button
Optionally enable a close button
```js
toasti.options.closeButton = true;
````

Optionally override the close button's HTML.

```js
toasti.options.closeHtml = '<button><i class="icon-off"></i></button>';
```

You can also override the CSS/LESS for `#toast-container .toast-close-button`

Optionally override the hide animation when the close button is clicked (falls back to hide configuration).
```js
toasti.options.closeMethod = 'fadeOut';
toasti.options.closeDuration = 300;
toasti.options.closeEasing = 'swing';
```

### Display Sequence
Show newest toast at bottom (top is default)
```js
toasti.options.newestOnTop = false;
```

### Callbacks
```js
// Define a callback for when the toast is shown/hidden/clicked
toasti.options.onShown = function() { console.log('hello'); }
toasti.options.onHidden = function() { console.log('goodbye'); }
toasti.options.onclick = function() { console.log('clicked'); }
toasti.options.onCloseClick = function() { console.log('close button clicked'); }
```

### Animation Options
toasti will supply default animations, so you do not have to provide any of these settings. However you have the option to override the animations if you like.

#### Easings
Optionally override the animation easing to show or hide the toasts. Default is swing. swing and linear are built into jQuery.
```js
toasti.options.showEasing = 'swing';
toasti.options.hideEasing = 'linear';
toasti.options.closeEasing = 'linear';
```

Using the jQuery Easing plugin (http://www.gsgd.co.uk/sandbox/jquery/easing/)
```js
toasti.options.showEasing = 'easeOutBounce';
toasti.options.hideEasing = 'easeInBack';
toasti.options.closeEasing = 'easeInBack';
```

#### Animation Method
Use the jQuery show/hide method of your choice. These default to fadeIn/fadeOut. The methods fadeIn/fadeOut, slideDown/slideUp, and show/hide are built into jQuery.
```js
toasti.options.showMethod = 'slideDown';
toasti.options.hideMethod = 'slideUp';
toasti.options.closeMethod = 'slideUp';
```

### Prevent Duplicates
Rather than having identical toasts stack, set the preventDuplicates property to true. Duplicates are matched to the previous toast based on their message content.
```js
toasti.options.preventDuplicates = true;
```

### Timeouts
Control how toasti interacts with users by setting timeouts appropriately.
```js
toasti.options.timeOut = 30; // How long the toast will display without user interaction
toasti.options.extendedTimeOut = 60; // How long the toast will display after a user hovers over it
```

### Prevent from Auto Hiding
To prevent toasti from closing based on the timeouts, set the `timeOut` and `extendedTimeOut` options to `0`. The toasti will persist until selected.

```js
toasti.options.timeOut = 0;
toasti.options.extendedTimeOut = 0;
```

### Progress Bar
Visually indicate how long before a toast expires.
```js
toasti.options.progressBar = true;
```

### rtl
Flip the toasti to be displayed properly for right-to-left languages.
```js
toasti.options.rtl = true;
```

## Building toasti

To build the minified and css versions of toasti you will need [node](http://nodejs.org) installed. (Use Homebrew or Chocolatey.)

```
npm install -g gulp karma-cli
npm install
```

At this point the dependencies have been installed and you can build toasti

- Run the analytics `gulp analyze`
- Run the test `gulp test`
- Run the build `gulp`

## Contributing

For a pull request to be considered it must resolve a bug, or add a feature which is beneficial to a large audience.

Pull requests must pass existing unit tests, CI processes, and add additional tests to indicate successful operation of a new feature, or the resolution of an identified bug.

Requests must be made against the `develop` branch. Pull requests submitted against the `master` branch will not be considered.

All pull requests are subject to approval by the repository owners, who have sole discretion over acceptance or denial.

## License
toasti is under MIT license