# defered-iframe-element

Iframe custom element. Makes iframe not render blocking, increases your page loading speed.

## Demo

[Check it live!](https://denar90.github.io/defered-iframe-element/demo)

## Install

Install the component using [Npm](https://www.npmjs.com/):

```sh
$ npm install defered-iframe-element --save
```

Install the component using [Bower](http://bower.io/):

```sh
$ bower install defered-iframe-element --save
```

Or [download as ZIP](https://github.com/denar90/defered-iframe-element/archive/master.zip).

## Usage

```html
  <defered-iframe data-width="500" data-height="500" data-src="//player.vimeo.com/video/75702540"></defered-iframe>
```

## Options

Attribute     | Options     | Default  | Description
---           | ---         | ---      | ---
`data-width`  | *string*    | -        | Iframe width
`data-height` | *string*    | -        | Iframe height
`data-src`    | *string*    | -        | Iframe src


## Deploy

```sh
$ npm run build
```

## History

For detailed changelog, check [Releases](https://github.com/denar90/defered-iframe-element/releases).

MIT © [Artem Denysov](https://github.com/denar90)
