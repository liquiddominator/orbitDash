function J() {
    this.B = function (e) {
      for (var f = 0; 24 > f; f++) this[String.fromCharCode(97 + f)] = e[f] || 0;
      0.01 > this.c && (this.c = 0.01);
      e = this.b + this.c + this.e;
      0.18 > e && ((e = 0.18 / e), (this.b *= e), (this.c *= e), (this.e *= e));
    };
  }
  
  var W = new (function () {
    this.A = new J();
    var e, f, d, g, l, z, K, L, M, A, m, N;
    this.reset = function () {
      var c = this.A;
      g = 100 / (c.f * c.f + 0.001);
      l = 100 / (c.g * c.g + 0.001);
      z = 1 - 0.01 * c.h * c.h * c.h;
      K = 1e-6 * -c.i * c.i * c.i;
      c.a || ((m = 0.5 - c.n / 2), (N = 5e-5 * -c.o));
      L = 0 < c.l ? 1 - 0.9 * c.l * c.l : 1 + 10 * c.l * c.l;
      M = 0;
      A = 1 == c.m ? 0 : 2e4 * (1 - c.m) * (1 - c.m) + 32;
    };
    this.D = function () {
      this.reset();
      var c = this.A;
      e = 1e5 * c.b * c.b;
      f = 1e5 * c.c * c.c;
      d = 1e5 * c.e * c.e + 10;
      return e + f + d | 0;
    };
    this.C = function (c, O) {
      var a = this.A,
        P = 1 != a.s || a.v,
        r = 0.1 * a.v * a.v,
        Q = 1 + 3e-4 * a.w,
        n = 0.1 * a.s * a.s * a.s,
        X = 1 + 1e-4 * a.t,
        Y = 1 != a.s,
        Z = a.x * a.x,
        $ = a.g,
        R = a.q || a.r,
        aa = 0.2 * a.r * a.r * a.r,
        D = a.q * a.q * (0 > a.q ? -1020 : 1020),
        S = a.p ? (2e4 * (1 - a.p) * (1 - a.p) | 0) + 32 : 0,
        ba = a.d,
        T = a.j / 2,
        ca = 0.01 * a.k * a.k,
        E = a.a,
        F = e,
        da = 1 / e,
        ea = 1 / f,
        fa = 1 / d,
        a = 5 / (1 + 20 * a.u * a.u) * (0.01 + n);
      0.8 < a && (a = 0.8);
      for (
        var a = 1 - a,
          G = !1,
          U = 0,
          v = 0,
          w = 0,
          B = 0,
          t = 0,
          x,
          u = 0,
          h,
          p = 0,
          s,
          H = 0,
          b,
          V = 0,
          q,
          I = 0,
          C = Array(1024),
          y = Array(32),
          k = C.length;
        k--;
  
      )
        C[k] = 0;
      for (k = y.length; k--;) y[k] = 2 * Math.random() - 1;
      for (k = 0; k < O; k++) {
        if (G) return k;
        S && ++V >= S && ((V = 0), this.reset());
        A && ++M >= A && ((A = 0), (g *= L));
        z += K;
        g *= z;
        g > l && ((g = l), 0 < $ && (G = !0));
        h = g;
        0 < T && ((I += ca), (h *= 1 + Math.sin(I) * T));
        h |= 0;
        8 > h && (h = 8);
        E || ((m += N), 0 > m ? (m = 0) : 0.5 < m && (m = 0.5));
        if (++v > F)
          switch (((v = 0), ++U)) {
            case 1:
              F = f;
              break;
            case 2:
              F = d;
          }
        switch (U) {
          case 0:
            w = v * da;
            break;
          case 1:
            w = 1 + 2 * (1 - v * ea) * ba;
            break;
          case 2:
            w = 1 - v * fa;
            break;
          case 3:
            w = 0;
            G = !0;
        }
        R && ((D += aa), (s = D | 0), 0 > s ? (s = -s) : 1023 < s && (s = 1023));
        P &&
          Q &&
          ((r *= Q), 1e-5 > r ? (r = 1e-5) : 0.1 < r && (r = 0.1));
        q = 0;
        for (var ga = 8; ga--;) {
          p++;
          if (p >= h && ((p %= h), 3 == E))
            for (x = y.length; x--;) y[x] = 2 * Math.random() - 1;
          switch (E) {
            case 0:
              b = p / h < m ? 0.5 : -0.5;
              break;
            case 1:
              b = 1 - 2 * (p / h);
              break;
            case 2:
              b = p / h;
              b = 0.5 < b ? 6.28318531 * (b - 1) : 6.28318531 * b;
              b =
                0 > b
                  ? 1.27323954 * b + 0.405284735 * b * b
                  : 1.27323954 * b - 0.405284735 * b * b;
              b = 0 > b ? 0.225 * (b * -b - b) + b : 0.225 * (b * b - b) + b;
              break;
            case 3:
              b = y[Math.abs((32 * p) / h | 0)];
          }
          P &&
            ((x = u),
            (n *= X),
            0 > n ? (n = 0) : 0.1 < n && (n = 0.1),
            Y ? ((t += (b - u) * n), (t *= a)) : ((u = b), (t = 0)),
            (u += t),
            (B += u - x),
            (b = B *= 1 - r));
          R && ((C[H % 1024] = b), (b += C[(H - s + 1024) % 1024]), H++);
          q += b;
        }
        q = 0.125 * q * w * Z;
        c[k] = 1 <= q ? 32767 : -1 >= q ? -32768 : (32767 * q) | 0;
      }
      return O;
    };
  })();
  
  window.jsfxr = function (e) {
    W.A.B(e);
    var f = W.D();
    e = new Uint8Array(4 * ((f + 1) / 2 | 0) + 44);
    var f = 2 * W.C(new Uint16Array(e.buffer, 44), f),
      d = new Uint32Array(e.buffer, 0, 44);
    d[0] = 1179011410;
    d[1] = f + 36;
    d[2] = 1163280727;
    d[3] = 544501094;
    d[4] = 16;
    d[5] = 65537;
    d[6] = 44100;
    d[7] = 88200;
    d[8] = 1048578;
    d[9] = 1635017060;
    d[10] = f;
    for (
      var f = f + 44, d = 0, g = "data:audio/wav;base64,";
      d < f;
      d += 3
    )
      var l = (e[d] << 16) | (e[d + 1] << 8) | e[d + 2],
        g =
          g +
          ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
            l >> 18
          ] +
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
              (l >> 12) & 63
            ] +
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
              (l >> 6) & 63
            ] +
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
              l & 63
            ]);
    d -= f;
    return g.slice(0, g.length - d) + "==".slice(0, d);
  };