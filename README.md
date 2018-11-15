# framework-perf
framework-perf is a performance test suite comparing multiple NodeJS frameworks as well as a native NodeJS server. Each server(framework) will respond with an identical message in JSON format(`{"msg": "Hello Human!"}`). Each server will respond with an explicitly set status code of 200.

# Currently Supported Frameworks
  - NodeJS(Native)
  - Express(4.16.4)
  - Koa2(2.0.0-alpha.7)
  - Restana(2.3.2)
  - Restify(7.2.2)
  - Hapi(17.7.0)
  - Fastify(1.13.0)

# Minimum Requirements
  - NodeJS 8+

# Load Testing
Included is a basic load test file intended for use with k6 from LoadImpact. Instructions for Linux, Mac and Windows are included in the `load.js` file.

# Running Servers
From a command line(bash, terminal, cmd, powershell), run `node <server>.js` replacing ``<server>`` with the name of the framework. All servers will start on port 3000.

## Server List
 - express.js
 - restana.js
 - native.js
 - hapi.js
 - restify.js
 - koa2.js
 - fastify.js
