((modules, entryPoint) => {
  let global = function() {
    return this;
  }();
  let cache = {};
  let require = (target, arg) => {
    if (typeof target === "number") {
      let module = cache[target], exports;
      if (!module) {
        module = cache[target] = {
          exports: {}
        };
        modules[target].call(global, require, module.exports, module);
      }
      exports = module.exports;
      if (arg && (!exports || !exports.__esModule)) {
        if (!exports || typeof exports !== "object") {
          exports = {};
        }
        if (!("default" in exports)) {
          Object.defineProperty(exports, "default", {
            get: () => module.exports,
            enumerable: true
          });
        }
      }
      return exports;
    }
    arg.__esModule = () => true;
    for (let name in arg) {
      Object.defineProperty(target, name, {
        get: arg[name],
        enumerable: true
      });
    }
  };
  return require(entryPoint);
})({
  2() {
    // export-named-default-class.js
    class Test {
      test() {
        console.log("export default class Test {");
      }
    }

    // export-named-default-fn.js
    function test2() {
      console.log("export default function test2()");
    }

    // index.js
    const test = new default2();
    test.test();
    default3();
  }
}, 2);
