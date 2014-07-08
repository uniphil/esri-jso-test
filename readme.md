ESRI JSO Test App
=================

A simple proof-of-concept using dojo build + the [ArcGIS JSO](http://jso.arcgis.com/)


JSO
---

Download a custom build, selecting _only_ the modules needed by the app. For this example:

  * `dojo/text`
  * `esri/map`

Based on the 404s ecountered layer, it seems the following are also required:

 * `dojox/gfx/svg`
 * `esri/dijit/Attribution`  (note: my JSO builds were getting `queued` so I do not have a build with this explicitly included. I hacked my previous build by sym-linking `jso/dojo/dijit` to `jso/esri/dijit`)


Select **Advanced Optimizations** and configure:

 [*] Strip legacy loader support
 [ ] Optimize for modern browsers
 [ ] Omit unused packages
 [ ] Only include built layer files and resources

Create the build, and download it. Extract the contents to [app/js/jso](app/js/jso).


Dojo Build
----------

### Set up some requirements

_Note: You need to have a working node.js runtime for the dojo build_

Get bower:

```bash
$ sudo npm install -g bower
```

Install the dojo build tool:

```bash
$ bower install dojo dojo-util
```
_Note: a symbolic link called `util` points at `dojo-util` because the build scripts expect `util` while bower wants to call it `dojo-util`.


### Run the build

(the un-built local version with ADM and JSO-esri is not working yet, so a build has not been attempted.)

