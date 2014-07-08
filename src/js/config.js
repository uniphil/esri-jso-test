var dojoConfig = {
  baseUrl: '/js/',
  packages: [
    {
      name: 'dojo',
      location: 'jso/dojo'
    },
    {
      name: 'dijit',
      location: 'jso/dojo'
    },
    {
      name: 'dojox',
      location: 'jso/dojo'
    },
    {
      name: 'esri',
      location: 'jso/dojo'
    },
    {
      name: 'app',
      location: 'app'
    }
  ],

  build: {
    basePath: '.',
    action: 'release',
    layers: {
      'dojo/dojo': {
        include: ['app'],
        exclude: [
          'dojo',
          'dijit',
          'dojox',
          'esri'
        ],
        includeLocales: ['en-us'],
        customBase: true,
        boot: true
      }
    }
  }
}
