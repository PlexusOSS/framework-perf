import { check, sleep } from "k6";
import http from "k6/http";

export let options = {
  vus: 20,
  duration: "300s"
};

export default function() {
    let res = http.get("http://localhost:3000/");
    check(res, {
        "is status 200": (r) => r.status === 200
    });
};

/*
================================================================================
***************************** Load Test Help File ******************************
================================================================================

  1: docker pull loadimpact/k6
  2: docker run -i loadimpact/k6 run --vus 10 --duration 30s -< load.js
    2a: 2 contains the linux/macOS command, see 2b for windows
    2b: docker run -i -v //c/Users/k6:/k6 loadimpact/k6 run --vus 10 --duration 30s /k6/load.js

================================================================================
================================================================================
*/
