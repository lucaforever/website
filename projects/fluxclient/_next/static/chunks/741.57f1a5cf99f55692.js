"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [741],
  {
    2741: function (t, e, r) {
      var n = r(3227),
        u = r(8361),
        i = r(5971),
        o = r(2715),
        a = r(1193),
        p = r(7794);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AppInitialProps", {
          enumerable: !0,
          get: function () {
            return f.AppInitialProps;
          },
        }),
        Object.defineProperty(e, "NextWebVitalsMetric", {
          enumerable: !0,
          get: function () {
            return f.NextWebVitalsMetric;
          },
        }),
        (e.default = void 0);
      var c = r(932).Z,
        s = (0, r(2648).Z)(r(7294)),
        f = r(9475);
      function l(t) {
        return d.apply(this, arguments);
      }
      function d() {
        return (d = c(
          p.mark(function t(e) {
            var r, n, u;
            return p.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (r = e.Component),
                      (n = e.ctx),
                      (t.next = 3),
                      f.loadGetInitialProps(r, n)
                    );
                  case 3:
                    return (u = t.sent), t.abrupt("return", { pageProps: u });
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var h = (function (t) {
        i(c, t);
        var e,
          r,
          p =
            ((e = c),
            (r = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = a(e);
              if (r) {
                var u = a(this).constructor;
                t = Reflect.construct(n, arguments, u);
              } else t = n.apply(this, arguments);
              return o(this, t);
            });
        function c() {
          return n(this, c), p.apply(this, arguments);
        }
        return (
          u(c, [
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.Component,
                  r = t.pageProps;
                return s.default.createElement(e, Object.assign({}, r));
              },
            },
          ]),
          c
        );
      })(s.default.Component);
      (h.origGetInitialProps = l), (h.getInitialProps = l), (e.default = h);
    },
  },
]);
