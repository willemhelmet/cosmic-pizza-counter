(async ()=>{
    (function() {
        const e = document.createElement("link").relList;
        if (e && e.supports && e.supports("modulepreload")) return;
        for (const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);
        new MutationObserver((r)=>{
            for (const s of r)if (s.type === "childList") for (const o of s.addedNodes)o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function t(r) {
            const s = {};
            return r.integrity && (s.integrity = r.integrity), r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? s.credentials = "include" : r.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
        }
        function n(r) {
            if (r.ep) return;
            r.ep = !0;
            const s = t(r);
            fetch(r.href, s);
        }
    })();
    const as = "160", Ln = {
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2
    }, Dn = {
        ROTATE: 0,
        PAN: 1,
        DOLLY_PAN: 2,
        DOLLY_ROTATE: 3
    }, Wo = 0, Es = 1, Xo = 2, to = 1, no = 2, Zt = 3, pn = 0, St = 1, Bt = 2, un = 0, Jn = 1, Yr = 2, Ts = 3, bs = 4, qo = 5, Sn = 100, Yo = 101, jo = 102, ws = 103, As = 104, Ko = 200, $o = 201, Zo = 202, Jo = 203, jr = 204, Kr = 205, Qo = 206, ec = 207, tc = 208, nc = 209, ic = 210, rc = 211, sc = 212, ac = 213, oc = 214, cc = 0, lc = 1, hc = 2, Ki = 3, uc = 4, dc = 5, fc = 6, pc = 7, io = 0, mc = 1, gc = 2, dn = 0, _c = 1, vc = 2, xc = 3, ro = 4, yc = 5, Mc = 6, so = 300, ei = 301, ti = 302, $r = 303, Zr = 304, ir = 306, Jr = 1e3, zt = 1001, Qr = 1002, yt = 1003, Rs = 1004, fr = 1005, Lt = 1006, Sc = 1007, pi = 1008, fn = 1009, Ec = 1010, Tc = 1011, os = 1012, ao = 1013, cn = 1014, ln = 1015, mi = 1016, oo = 1017, co = 1018, Tn = 1020, bc = 1021, kt = 1023, wc = 1024, Ac = 1025, bn = 1026, ni = 1027, Rc = 1028, lo = 1029, Cc = 1030, ho = 1031, uo = 1033, pr = 33776, mr = 33777, gr = 33778, _r = 33779, Cs = 35840, Ps = 35841, Ls = 35842, Ds = 35843, fo = 36196, Is = 37492, Us = 37496, Ns = 37808, Fs = 37809, Os = 37810, Bs = 37811, zs = 37812, ks = 37813, Gs = 37814, Hs = 37815, Vs = 37816, Ws = 37817, Xs = 37818, qs = 37819, Ys = 37820, js = 37821, vr = 36492, Ks = 36494, $s = 36495, Pc = 36283, Zs = 36284, Js = 36285, Qs = 36286, po = 3e3, wn = 3001, Lc = 3200, Dc = 3201, mo = 0, Ic = 1, Dt = "", ft = "srgb", en = "srgb-linear", cs = "display-p3", rr = "display-p3-linear", $i = "linear", $e = "srgb", Zi = "rec709", Ji = "p3", In = 7680, ea = 519, Uc = 512, Nc = 513, Fc = 514, go = 515, Oc = 516, Bc = 517, zc = 518, kc = 519, ta = 35044, na = "300 es", es = 1035, Jt = 2e3, Qi = 2001;
    class Pn {
        addEventListener(e, t) {
            this._listeners === void 0 && (this._listeners = {});
            const n = this._listeners;
            n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
        }
        hasEventListener(e, t) {
            if (this._listeners === void 0) return !1;
            const n = this._listeners;
            return n[e] !== void 0 && n[e].indexOf(t) !== -1;
        }
        removeEventListener(e, t) {
            if (this._listeners === void 0) return;
            const r = this._listeners[e];
            if (r !== void 0) {
                const s = r.indexOf(t);
                s !== -1 && r.splice(s, 1);
            }
        }
        dispatchEvent(e) {
            if (this._listeners === void 0) return;
            const n = this._listeners[e.type];
            if (n !== void 0) {
                e.target = this;
                const r = n.slice(0);
                for(let s = 0, o = r.length; s < o; s++)r[s].call(this, e);
                e.target = null;
            }
        }
    }
    const gt = [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "0a",
        "0b",
        "0c",
        "0d",
        "0e",
        "0f",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "1a",
        "1b",
        "1c",
        "1d",
        "1e",
        "1f",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "2a",
        "2b",
        "2c",
        "2d",
        "2e",
        "2f",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "3a",
        "3b",
        "3c",
        "3d",
        "3e",
        "3f",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "4a",
        "4b",
        "4c",
        "4d",
        "4e",
        "4f",
        "50",
        "51",
        "52",
        "53",
        "54",
        "55",
        "56",
        "57",
        "58",
        "59",
        "5a",
        "5b",
        "5c",
        "5d",
        "5e",
        "5f",
        "60",
        "61",
        "62",
        "63",
        "64",
        "65",
        "66",
        "67",
        "68",
        "69",
        "6a",
        "6b",
        "6c",
        "6d",
        "6e",
        "6f",
        "70",
        "71",
        "72",
        "73",
        "74",
        "75",
        "76",
        "77",
        "78",
        "79",
        "7a",
        "7b",
        "7c",
        "7d",
        "7e",
        "7f",
        "80",
        "81",
        "82",
        "83",
        "84",
        "85",
        "86",
        "87",
        "88",
        "89",
        "8a",
        "8b",
        "8c",
        "8d",
        "8e",
        "8f",
        "90",
        "91",
        "92",
        "93",
        "94",
        "95",
        "96",
        "97",
        "98",
        "99",
        "9a",
        "9b",
        "9c",
        "9d",
        "9e",
        "9f",
        "a0",
        "a1",
        "a2",
        "a3",
        "a4",
        "a5",
        "a6",
        "a7",
        "a8",
        "a9",
        "aa",
        "ab",
        "ac",
        "ad",
        "ae",
        "af",
        "b0",
        "b1",
        "b2",
        "b3",
        "b4",
        "b5",
        "b6",
        "b7",
        "b8",
        "b9",
        "ba",
        "bb",
        "bc",
        "bd",
        "be",
        "bf",
        "c0",
        "c1",
        "c2",
        "c3",
        "c4",
        "c5",
        "c6",
        "c7",
        "c8",
        "c9",
        "ca",
        "cb",
        "cc",
        "cd",
        "ce",
        "cf",
        "d0",
        "d1",
        "d2",
        "d3",
        "d4",
        "d5",
        "d6",
        "d7",
        "d8",
        "d9",
        "da",
        "db",
        "dc",
        "dd",
        "de",
        "df",
        "e0",
        "e1",
        "e2",
        "e3",
        "e4",
        "e5",
        "e6",
        "e7",
        "e8",
        "e9",
        "ea",
        "eb",
        "ec",
        "ed",
        "ee",
        "ef",
        "f0",
        "f1",
        "f2",
        "f3",
        "f4",
        "f5",
        "f6",
        "f7",
        "f8",
        "f9",
        "fa",
        "fb",
        "fc",
        "fd",
        "fe",
        "ff"
    ], Yi = Math.PI / 180, ts = 180 / Math.PI;
    function gi() {
        const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
        return (gt[i & 255] + gt[i >> 8 & 255] + gt[i >> 16 & 255] + gt[i >> 24 & 255] + "-" + gt[e & 255] + gt[e >> 8 & 255] + "-" + gt[e >> 16 & 15 | 64] + gt[e >> 24 & 255] + "-" + gt[t & 63 | 128] + gt[t >> 8 & 255] + "-" + gt[t >> 16 & 255] + gt[t >> 24 & 255] + gt[n & 255] + gt[n >> 8 & 255] + gt[n >> 16 & 255] + gt[n >> 24 & 255]).toLowerCase();
    }
    function vt(i, e, t) {
        return Math.max(e, Math.min(t, i));
    }
    function Gc(i, e) {
        return (i % e + e) % e;
    }
    function xr(i, e, t) {
        return (1 - t) * i + t * e;
    }
    function ia(i) {
        return (i & i - 1) === 0 && i !== 0;
    }
    function ns(i) {
        return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
    }
    function oi(i, e) {
        switch(e.constructor){
            case Float32Array:
                return i;
            case Uint32Array:
                return i / 4294967295;
            case Uint16Array:
                return i / 65535;
            case Uint8Array:
                return i / 255;
            case Int32Array:
                return Math.max(i / 2147483647, -1);
            case Int16Array:
                return Math.max(i / 32767, -1);
            case Int8Array:
                return Math.max(i / 127, -1);
            default:
                throw new Error("Invalid component type.");
        }
    }
    function Mt(i, e) {
        switch(e.constructor){
            case Float32Array:
                return i;
            case Uint32Array:
                return Math.round(i * 4294967295);
            case Uint16Array:
                return Math.round(i * 65535);
            case Uint8Array:
                return Math.round(i * 255);
            case Int32Array:
                return Math.round(i * 2147483647);
            case Int16Array:
                return Math.round(i * 32767);
            case Int8Array:
                return Math.round(i * 127);
            default:
                throw new Error("Invalid component type.");
        }
    }
    const Hc = {
        DEG2RAD: Yi
    };
    class be {
        constructor(e = 0, t = 0){
            be.prototype.isVector2 = !0, this.x = e, this.y = t;
        }
        get width() {
            return this.x;
        }
        set width(e) {
            this.x = e;
        }
        get height() {
            return this.y;
        }
        set height(e) {
            this.y = e;
        }
        set(e, t) {
            return this.x = e, this.y = t, this;
        }
        setScalar(e) {
            return this.x = e, this.y = e, this;
        }
        setX(e) {
            return this.x = e, this;
        }
        setY(e) {
            return this.y = e, this;
        }
        setComponent(e, t) {
            switch(e){
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                default:
                    throw new Error("index is out of range: " + e);
            }
            return this;
        }
        getComponent(e) {
            switch(e){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + e);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y);
        }
        copy(e) {
            return this.x = e.x, this.y = e.y, this;
        }
        add(e) {
            return this.x += e.x, this.y += e.y, this;
        }
        addScalar(e) {
            return this.x += e, this.y += e, this;
        }
        addVectors(e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this;
        }
        addScaledVector(e, t) {
            return this.x += e.x * t, this.y += e.y * t, this;
        }
        sub(e) {
            return this.x -= e.x, this.y -= e.y, this;
        }
        subScalar(e) {
            return this.x -= e, this.y -= e, this;
        }
        subVectors(e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this;
        }
        multiply(e) {
            return this.x *= e.x, this.y *= e.y, this;
        }
        multiplyScalar(e) {
            return this.x *= e, this.y *= e, this;
        }
        divide(e) {
            return this.x /= e.x, this.y /= e.y, this;
        }
        divideScalar(e) {
            return this.multiplyScalar(1 / e);
        }
        applyMatrix3(e) {
            const t = this.x, n = this.y, r = e.elements;
            return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
        }
        min(e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
        }
        max(e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
        }
        clamp(e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
        }
        clampScalar(e, t) {
            return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
        }
        clampLength(e, t) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        }
        roundToZero() {
            return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this;
        }
        dot(e) {
            return this.x * e.x + this.y * e.y;
        }
        cross(e) {
            return this.x * e.y - this.y * e.x;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        angle() {
            return Math.atan2(-this.y, -this.x) + Math.PI;
        }
        angleTo(e) {
            const t = Math.sqrt(this.lengthSq() * e.lengthSq());
            if (t === 0) return Math.PI / 2;
            const n = this.dot(e) / t;
            return Math.acos(vt(n, -1, 1));
        }
        distanceTo(e) {
            return Math.sqrt(this.distanceToSquared(e));
        }
        distanceToSquared(e) {
            const t = this.x - e.x, n = this.y - e.y;
            return t * t + n * n;
        }
        manhattanDistanceTo(e) {
            return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
        }
        setLength(e) {
            return this.normalize().multiplyScalar(e);
        }
        lerp(e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
        }
        lerpVectors(e, t, n) {
            return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
        }
        equals(e) {
            return e.x === this.x && e.y === this.y;
        }
        fromArray(e, t = 0) {
            return this.x = e[t], this.y = e[t + 1], this;
        }
        toArray(e = [], t = 0) {
            return e[t] = this.x, e[t + 1] = this.y, e;
        }
        fromBufferAttribute(e, t) {
            return this.x = e.getX(t), this.y = e.getY(t), this;
        }
        rotateAround(e, t) {
            const n = Math.cos(t), r = Math.sin(t), s = this.x - e.x, o = this.y - e.y;
            return this.x = s * n - o * r + e.x, this.y = s * r + o * n + e.y, this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y;
        }
    }
    class He {
        constructor(e, t, n, r, s, o, a, c, l){
            He.prototype.isMatrix3 = !0, this.elements = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ], e !== void 0 && this.set(e, t, n, r, s, o, a, c, l);
        }
        set(e, t, n, r, s, o, a, c, l) {
            const h = this.elements;
            return h[0] = e, h[1] = r, h[2] = a, h[3] = t, h[4] = s, h[5] = c, h[6] = n, h[7] = o, h[8] = l, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
        }
        copy(e) {
            const t = this.elements, n = e.elements;
            return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
        }
        extractBasis(e, t, n) {
            return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
        }
        setFromMatrix4(e) {
            const t = e.elements;
            return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
        }
        multiply(e) {
            return this.multiplyMatrices(this, e);
        }
        premultiply(e) {
            return this.multiplyMatrices(e, this);
        }
        multiplyMatrices(e, t) {
            const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[3], c = n[6], l = n[1], h = n[4], d = n[7], p = n[2], m = n[5], g = n[8], _ = r[0], f = r[3], u = r[6], S = r[1], y = r[4], b = r[7], L = r[2], R = r[5], A = r[8];
            return s[0] = o * _ + a * S + c * L, s[3] = o * f + a * y + c * R, s[6] = o * u + a * b + c * A, s[1] = l * _ + h * S + d * L, s[4] = l * f + h * y + d * R, s[7] = l * u + h * b + d * A, s[2] = p * _ + m * S + g * L, s[5] = p * f + m * y + g * R, s[8] = p * u + m * b + g * A, this;
        }
        multiplyScalar(e) {
            const t = this.elements;
            return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
        }
        determinant() {
            const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8];
            return t * o * h - t * a * l - n * s * h + n * a * c + r * s * l - r * o * c;
        }
        invert() {
            const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8], d = h * o - a * l, p = a * c - h * s, m = l * s - o * c, g = t * d + n * p + r * m;
            if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const _ = 1 / g;
            return e[0] = d * _, e[1] = (r * l - h * n) * _, e[2] = (a * n - r * o) * _, e[3] = p * _, e[4] = (h * t - r * c) * _, e[5] = (r * s - a * t) * _, e[6] = m * _, e[7] = (n * c - l * t) * _, e[8] = (o * t - n * s) * _, this;
        }
        transpose() {
            let e;
            const t = this.elements;
            return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
        }
        getNormalMatrix(e) {
            return this.setFromMatrix4(e).invert().transpose();
        }
        transposeIntoArray(e) {
            const t = this.elements;
            return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
        }
        setUvTransform(e, t, n, r, s, o, a) {
            const c = Math.cos(s), l = Math.sin(s);
            return this.set(n * c, n * l, -n * (c * o + l * a) + o + e, -r * l, r * c, -r * (-l * o + c * a) + a + t, 0, 0, 1), this;
        }
        scale(e, t) {
            return this.premultiply(yr.makeScale(e, t)), this;
        }
        rotate(e) {
            return this.premultiply(yr.makeRotation(-e)), this;
        }
        translate(e, t) {
            return this.premultiply(yr.makeTranslation(e, t)), this;
        }
        makeTranslation(e, t) {
            return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
        }
        makeRotation(e) {
            const t = Math.cos(e), n = Math.sin(e);
            return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
        }
        makeScale(e, t) {
            return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
        }
        equals(e) {
            const t = this.elements, n = e.elements;
            for(let r = 0; r < 9; r++)if (t[r] !== n[r]) return !1;
            return !0;
        }
        fromArray(e, t = 0) {
            for(let n = 0; n < 9; n++)this.elements[n] = e[n + t];
            return this;
        }
        toArray(e = [], t = 0) {
            const n = this.elements;
            return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
        }
        clone() {
            return new this.constructor().fromArray(this.elements);
        }
    }
    const yr = new He;
    function _o(i) {
        for(let e = i.length - 1; e >= 0; --e)if (i[e] >= 65535) return !0;
        return !1;
    }
    function er(i) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", i);
    }
    function Vc() {
        const i = er("canvas");
        return i.style.display = "block", i;
    }
    const ra = {};
    function fi(i) {
        i in ra || (ra[i] = !0, console.warn(i));
    }
    const sa = new He().set(.8224621, .177538, 0, .0331941, .9668058, 0, .0170827, .0723974, .9105199), aa = new He().set(1.2249401, -.2249404, 0, -.0420569, 1.0420571, 0, -.0196376, -.0786361, 1.0982735), Si = {
        [en]: {
            transfer: $i,
            primaries: Zi,
            toReference: (i)=>i,
            fromReference: (i)=>i
        },
        [ft]: {
            transfer: $e,
            primaries: Zi,
            toReference: (i)=>i.convertSRGBToLinear(),
            fromReference: (i)=>i.convertLinearToSRGB()
        },
        [rr]: {
            transfer: $i,
            primaries: Ji,
            toReference: (i)=>i.applyMatrix3(aa),
            fromReference: (i)=>i.applyMatrix3(sa)
        },
        [cs]: {
            transfer: $e,
            primaries: Ji,
            toReference: (i)=>i.convertSRGBToLinear().applyMatrix3(aa),
            fromReference: (i)=>i.applyMatrix3(sa).convertLinearToSRGB()
        }
    }, Wc = new Set([
        en,
        rr
    ]), je = {
        enabled: !0,
        _workingColorSpace: en,
        get workingColorSpace () {
            return this._workingColorSpace;
        },
        set workingColorSpace (i){
            if (!Wc.has(i)) throw new Error(`Unsupported working color space, "${i}".`);
            this._workingColorSpace = i;
        },
        convert: function(i, e, t) {
            if (this.enabled === !1 || e === t || !e || !t) return i;
            const n = Si[e].toReference, r = Si[t].fromReference;
            return r(n(i));
        },
        fromWorkingColorSpace: function(i, e) {
            return this.convert(i, this._workingColorSpace, e);
        },
        toWorkingColorSpace: function(i, e) {
            return this.convert(i, e, this._workingColorSpace);
        },
        getPrimaries: function(i) {
            return Si[i].primaries;
        },
        getTransfer: function(i) {
            return i === Dt ? $i : Si[i].transfer;
        }
    };
    function Qn(i) {
        return i < .04045 ? i * .0773993808 : Math.pow(i * .9478672986 + .0521327014, 2.4);
    }
    function Mr(i) {
        return i < .0031308 ? i * 12.92 : 1.055 * Math.pow(i, .41666) - .055;
    }
    let Un;
    class vo {
        static getDataURL(e) {
            if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
            let t;
            if (e instanceof HTMLCanvasElement) t = e;
            else {
                Un === void 0 && (Un = er("canvas")), Un.width = e.width, Un.height = e.height;
                const n = Un.getContext("2d");
                e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Un;
            }
            return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png");
        }
        static sRGBToLinear(e) {
            if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
                const t = er("canvas");
                t.width = e.width, t.height = e.height;
                const n = t.getContext("2d");
                n.drawImage(e, 0, 0, e.width, e.height);
                const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
                for(let o = 0; o < s.length; o++)s[o] = Qn(s[o] / 255) * 255;
                return n.putImageData(r, 0, 0), t;
            } else if (e.data) {
                const t = e.data.slice(0);
                for(let n = 0; n < t.length; n++)t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Qn(t[n] / 255) * 255) : t[n] = Qn(t[n]);
                return {
                    data: t,
                    width: e.width,
                    height: e.height
                };
            } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
        }
    }
    let Xc = 0;
    class xo {
        constructor(e = null){
            this.isSource = !0, Object.defineProperty(this, "id", {
                value: Xc++
            }), this.uuid = gi(), this.data = e, this.version = 0;
        }
        set needsUpdate(e) {
            e === !0 && this.version++;
        }
        toJSON(e) {
            const t = e === void 0 || typeof e == "string";
            if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
            const n = {
                uuid: this.uuid,
                url: ""
            }, r = this.data;
            if (r !== null) {
                let s;
                if (Array.isArray(r)) {
                    s = [];
                    for(let o = 0, a = r.length; o < a; o++)r[o].isDataTexture ? s.push(Sr(r[o].image)) : s.push(Sr(r[o]));
                } else s = Sr(r);
                n.url = s;
            }
            return t || (e.images[this.uuid] = n), n;
        }
    }
    function Sr(i) {
        return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? vo.getDataURL(i) : i.data ? {
            data: Array.from(i.data),
            width: i.width,
            height: i.height,
            type: i.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
    }
    let qc = 0;
    class Et extends Pn {
        constructor(e = Et.DEFAULT_IMAGE, t = Et.DEFAULT_MAPPING, n = zt, r = zt, s = Lt, o = pi, a = kt, c = fn, l = Et.DEFAULT_ANISOTROPY, h = Dt){
            super(), this.isTexture = !0, Object.defineProperty(this, "id", {
                value: qc++
            }), this.uuid = gi(), this.name = "", this.source = new xo(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = o, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = c, this.offset = new be(0, 0), this.repeat = new be(1, 1), this.center = new be(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new He, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof h == "string" ? this.colorSpace = h : (fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = h === wn ? ft : Dt), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
        }
        get image() {
            return this.source.data;
        }
        set image(e = null) {
            this.source.data = e;
        }
        updateMatrix() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(e) {
            return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
        }
        toJSON(e) {
            const t = e === void 0 || typeof e == "string";
            if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
            const n = {
                metadata: {
                    version: 4.6,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                image: this.source.toJSON(e).uuid,
                mapping: this.mapping,
                channel: this.channel,
                repeat: [
                    this.repeat.x,
                    this.repeat.y
                ],
                offset: [
                    this.offset.x,
                    this.offset.y
                ],
                center: [
                    this.center.x,
                    this.center.y
                ],
                rotation: this.rotation,
                wrap: [
                    this.wrapS,
                    this.wrapT
                ],
                format: this.format,
                internalFormat: this.internalFormat,
                type: this.type,
                colorSpace: this.colorSpace,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                generateMipmaps: this.generateMipmaps,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
        transformUv(e) {
            if (this.mapping !== so) return e;
            if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch(this.wrapS){
                case Jr:
                    e.x = e.x - Math.floor(e.x);
                    break;
                case zt:
                    e.x = e.x < 0 ? 0 : 1;
                    break;
                case Qr:
                    Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
                    break;
            }
            if (e.y < 0 || e.y > 1) switch(this.wrapT){
                case Jr:
                    e.y = e.y - Math.floor(e.y);
                    break;
                case zt:
                    e.y = e.y < 0 ? 0 : 1;
                    break;
                case Qr:
                    Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
                    break;
            }
            return this.flipY && (e.y = 1 - e.y), e;
        }
        set needsUpdate(e) {
            e === !0 && (this.version++, this.source.needsUpdate = !0);
        }
        get encoding() {
            return fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === ft ? wn : po;
        }
        set encoding(e) {
            fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === wn ? ft : Dt;
        }
    }
    Et.DEFAULT_IMAGE = null;
    Et.DEFAULT_MAPPING = so;
    Et.DEFAULT_ANISOTROPY = 1;
    class Ze {
        constructor(e = 0, t = 0, n = 0, r = 1){
            Ze.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r;
        }
        get width() {
            return this.z;
        }
        set width(e) {
            this.z = e;
        }
        get height() {
            return this.w;
        }
        set height(e) {
            this.w = e;
        }
        set(e, t, n, r) {
            return this.x = e, this.y = t, this.z = n, this.w = r, this;
        }
        setScalar(e) {
            return this.x = e, this.y = e, this.z = e, this.w = e, this;
        }
        setX(e) {
            return this.x = e, this;
        }
        setY(e) {
            return this.y = e, this;
        }
        setZ(e) {
            return this.z = e, this;
        }
        setW(e) {
            return this.w = e, this;
        }
        setComponent(e, t) {
            switch(e){
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                case 2:
                    this.z = t;
                    break;
                case 3:
                    this.w = t;
                    break;
                default:
                    throw new Error("index is out of range: " + e);
            }
            return this;
        }
        getComponent(e) {
            switch(e){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + e);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z, this.w);
        }
        copy(e) {
            return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
        }
        add(e) {
            return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
        }
        addScalar(e) {
            return this.x += e, this.y += e, this.z += e, this.w += e, this;
        }
        addVectors(e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
        }
        addScaledVector(e, t) {
            return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
        }
        sub(e) {
            return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
        }
        subScalar(e) {
            return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
        }
        subVectors(e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
        }
        multiply(e) {
            return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
        }
        multiplyScalar(e) {
            return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
        }
        applyMatrix4(e) {
            const t = this.x, n = this.y, r = this.z, s = this.w, o = e.elements;
            return this.x = o[0] * t + o[4] * n + o[8] * r + o[12] * s, this.y = o[1] * t + o[5] * n + o[9] * r + o[13] * s, this.z = o[2] * t + o[6] * n + o[10] * r + o[14] * s, this.w = o[3] * t + o[7] * n + o[11] * r + o[15] * s, this;
        }
        divideScalar(e) {
            return this.multiplyScalar(1 / e);
        }
        setAxisAngleFromQuaternion(e) {
            this.w = 2 * Math.acos(e.w);
            const t = Math.sqrt(1 - e.w * e.w);
            return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
        }
        setAxisAngleFromRotationMatrix(e) {
            let t, n, r, s;
            const c = e.elements, l = c[0], h = c[4], d = c[8], p = c[1], m = c[5], g = c[9], _ = c[2], f = c[6], u = c[10];
            if (Math.abs(h - p) < .01 && Math.abs(d - _) < .01 && Math.abs(g - f) < .01) {
                if (Math.abs(h + p) < .1 && Math.abs(d + _) < .1 && Math.abs(g + f) < .1 && Math.abs(l + m + u - 3) < .1) return this.set(1, 0, 0, 0), this;
                t = Math.PI;
                const y = (l + 1) / 2, b = (m + 1) / 2, L = (u + 1) / 2, R = (h + p) / 4, A = (d + _) / 4, G = (g + f) / 4;
                return y > b && y > L ? y < .01 ? (n = 0, r = .707106781, s = .707106781) : (n = Math.sqrt(y), r = R / n, s = A / n) : b > L ? b < .01 ? (n = .707106781, r = 0, s = .707106781) : (r = Math.sqrt(b), n = R / r, s = G / r) : L < .01 ? (n = .707106781, r = .707106781, s = 0) : (s = Math.sqrt(L), n = A / s, r = G / s), this.set(n, r, s, t), this;
            }
            let S = Math.sqrt((f - g) * (f - g) + (d - _) * (d - _) + (p - h) * (p - h));
            return Math.abs(S) < .001 && (S = 1), this.x = (f - g) / S, this.y = (d - _) / S, this.z = (p - h) / S, this.w = Math.acos((l + m + u - 1) / 2), this;
        }
        min(e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
        }
        max(e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
        }
        clamp(e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
        }
        clampScalar(e, t) {
            return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
        }
        clampLength(e, t) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
        }
        roundToZero() {
            return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
        }
        dot(e) {
            return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        setLength(e) {
            return this.normalize().multiplyScalar(e);
        }
        lerp(e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
        }
        lerpVectors(e, t, n) {
            return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
        }
        equals(e) {
            return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
        }
        fromArray(e, t = 0) {
            return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
        }
        toArray(e = [], t = 0) {
            return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
        }
        fromBufferAttribute(e, t) {
            return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z, yield this.w;
        }
    }
    class Yc extends Pn {
        constructor(e = 1, t = 1, n = {}){
            super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Ze(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ze(0, 0, e, t);
            const r = {
                width: e,
                height: t,
                depth: 1
            };
            n.encoding !== void 0 && (fi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === wn ? ft : Dt), n = Object.assign({
                generateMipmaps: !1,
                internalFormat: null,
                minFilter: Lt,
                depthBuffer: !0,
                stencilBuffer: !1,
                depthTexture: null,
                samples: 0
            }, n), this.texture = new Et(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
        }
        setSize(e, t, n = 1) {
            (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(e) {
            this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
            const t = Object.assign({}, e.texture.image);
            return this.texture.source = new xo(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    class An extends Yc {
        constructor(e = 1, t = 1, n = {}){
            super(e, t, n), this.isWebGLRenderTarget = !0;
        }
    }
    class yo extends Et {
        constructor(e = null, t = 1, n = 1, r = 1){
            super(null), this.isDataArrayTexture = !0, this.image = {
                data: e,
                width: t,
                height: n,
                depth: r
            }, this.magFilter = yt, this.minFilter = yt, this.wrapR = zt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    class jc extends Et {
        constructor(e = null, t = 1, n = 1, r = 1){
            super(null), this.isData3DTexture = !0, this.image = {
                data: e,
                width: t,
                height: n,
                depth: r
            }, this.magFilter = yt, this.minFilter = yt, this.wrapR = zt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    class Rn {
        constructor(e = 0, t = 0, n = 0, r = 1){
            this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
        }
        static slerpFlat(e, t, n, r, s, o, a) {
            let c = n[r + 0], l = n[r + 1], h = n[r + 2], d = n[r + 3];
            const p = s[o + 0], m = s[o + 1], g = s[o + 2], _ = s[o + 3];
            if (a === 0) {
                e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = d;
                return;
            }
            if (a === 1) {
                e[t + 0] = p, e[t + 1] = m, e[t + 2] = g, e[t + 3] = _;
                return;
            }
            if (d !== _ || c !== p || l !== m || h !== g) {
                let f = 1 - a;
                const u = c * p + l * m + h * g + d * _, S = u >= 0 ? 1 : -1, y = 1 - u * u;
                if (y > Number.EPSILON) {
                    const L = Math.sqrt(y), R = Math.atan2(L, u * S);
                    f = Math.sin(f * R) / L, a = Math.sin(a * R) / L;
                }
                const b = a * S;
                if (c = c * f + p * b, l = l * f + m * b, h = h * f + g * b, d = d * f + _ * b, f === 1 - a) {
                    const L = 1 / Math.sqrt(c * c + l * l + h * h + d * d);
                    c *= L, l *= L, h *= L, d *= L;
                }
            }
            e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = d;
        }
        static multiplyQuaternionsFlat(e, t, n, r, s, o) {
            const a = n[r], c = n[r + 1], l = n[r + 2], h = n[r + 3], d = s[o], p = s[o + 1], m = s[o + 2], g = s[o + 3];
            return e[t] = a * g + h * d + c * m - l * p, e[t + 1] = c * g + h * p + l * d - a * m, e[t + 2] = l * g + h * m + a * p - c * d, e[t + 3] = h * g - a * d - c * p - l * m, e;
        }
        get x() {
            return this._x;
        }
        set x(e) {
            this._x = e, this._onChangeCallback();
        }
        get y() {
            return this._y;
        }
        set y(e) {
            this._y = e, this._onChangeCallback();
        }
        get z() {
            return this._z;
        }
        set z(e) {
            this._z = e, this._onChangeCallback();
        }
        get w() {
            return this._w;
        }
        set w(e) {
            this._w = e, this._onChangeCallback();
        }
        set(e, t, n, r) {
            return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._w);
        }
        copy(e) {
            return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
        }
        setFromEuler(e, t = !0) {
            const n = e._x, r = e._y, s = e._z, o = e._order, a = Math.cos, c = Math.sin, l = a(n / 2), h = a(r / 2), d = a(s / 2), p = c(n / 2), m = c(r / 2), g = c(s / 2);
            switch(o){
                case "XYZ":
                    this._x = p * h * d + l * m * g, this._y = l * m * d - p * h * g, this._z = l * h * g + p * m * d, this._w = l * h * d - p * m * g;
                    break;
                case "YXZ":
                    this._x = p * h * d + l * m * g, this._y = l * m * d - p * h * g, this._z = l * h * g - p * m * d, this._w = l * h * d + p * m * g;
                    break;
                case "ZXY":
                    this._x = p * h * d - l * m * g, this._y = l * m * d + p * h * g, this._z = l * h * g + p * m * d, this._w = l * h * d - p * m * g;
                    break;
                case "ZYX":
                    this._x = p * h * d - l * m * g, this._y = l * m * d + p * h * g, this._z = l * h * g - p * m * d, this._w = l * h * d + p * m * g;
                    break;
                case "YZX":
                    this._x = p * h * d + l * m * g, this._y = l * m * d + p * h * g, this._z = l * h * g - p * m * d, this._w = l * h * d - p * m * g;
                    break;
                case "XZY":
                    this._x = p * h * d - l * m * g, this._y = l * m * d - p * h * g, this._z = l * h * g + p * m * d, this._w = l * h * d + p * m * g;
                    break;
                default:
                    console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
            }
            return t === !0 && this._onChangeCallback(), this;
        }
        setFromAxisAngle(e, t) {
            const n = t / 2, r = Math.sin(n);
            return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
        }
        setFromRotationMatrix(e) {
            const t = e.elements, n = t[0], r = t[4], s = t[8], o = t[1], a = t[5], c = t[9], l = t[2], h = t[6], d = t[10], p = n + a + d;
            if (p > 0) {
                const m = .5 / Math.sqrt(p + 1);
                this._w = .25 / m, this._x = (h - c) * m, this._y = (s - l) * m, this._z = (o - r) * m;
            } else if (n > a && n > d) {
                const m = 2 * Math.sqrt(1 + n - a - d);
                this._w = (h - c) / m, this._x = .25 * m, this._y = (r + o) / m, this._z = (s + l) / m;
            } else if (a > d) {
                const m = 2 * Math.sqrt(1 + a - n - d);
                this._w = (s - l) / m, this._x = (r + o) / m, this._y = .25 * m, this._z = (c + h) / m;
            } else {
                const m = 2 * Math.sqrt(1 + d - n - a);
                this._w = (o - r) / m, this._x = (s + l) / m, this._y = (c + h) / m, this._z = .25 * m;
            }
            return this._onChangeCallback(), this;
        }
        setFromUnitVectors(e, t) {
            let n = e.dot(t) + 1;
            return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
        }
        angleTo(e) {
            return 2 * Math.acos(Math.abs(vt(this.dot(e), -1, 1)));
        }
        rotateTowards(e, t) {
            const n = this.angleTo(e);
            if (n === 0) return this;
            const r = Math.min(1, t / n);
            return this.slerp(e, r), this;
        }
        identity() {
            return this.set(0, 0, 0, 1);
        }
        invert() {
            return this.conjugate();
        }
        conjugate() {
            return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
        }
        dot(e) {
            return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
        }
        lengthSq() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
        }
        length() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
        }
        normalize() {
            let e = this.length();
            return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
        }
        multiply(e) {
            return this.multiplyQuaternions(this, e);
        }
        premultiply(e) {
            return this.multiplyQuaternions(e, this);
        }
        multiplyQuaternions(e, t) {
            const n = e._x, r = e._y, s = e._z, o = e._w, a = t._x, c = t._y, l = t._z, h = t._w;
            return this._x = n * h + o * a + r * l - s * c, this._y = r * h + o * c + s * a - n * l, this._z = s * h + o * l + n * c - r * a, this._w = o * h - n * a - r * c - s * l, this._onChangeCallback(), this;
        }
        slerp(e, t) {
            if (t === 0) return this;
            if (t === 1) return this.copy(e);
            const n = this._x, r = this._y, s = this._z, o = this._w;
            let a = o * e._w + n * e._x + r * e._y + s * e._z;
            if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = n, this._y = r, this._z = s, this;
            const c = 1 - a * a;
            if (c <= Number.EPSILON) {
                const m = 1 - t;
                return this._w = m * o + t * this._w, this._x = m * n + t * this._x, this._y = m * r + t * this._y, this._z = m * s + t * this._z, this.normalize(), this;
            }
            const l = Math.sqrt(c), h = Math.atan2(l, a), d = Math.sin((1 - t) * h) / l, p = Math.sin(t * h) / l;
            return this._w = o * d + this._w * p, this._x = n * d + this._x * p, this._y = r * d + this._y * p, this._z = s * d + this._z * p, this._onChangeCallback(), this;
        }
        slerpQuaternions(e, t, n) {
            return this.copy(e).slerp(t, n);
        }
        random() {
            const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), r = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
            return this.set(t * Math.cos(r), n * Math.sin(s), n * Math.cos(s), t * Math.sin(r));
        }
        equals(e) {
            return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
        }
        fromArray(e, t = 0) {
            return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
        }
        toArray(e = [], t = 0) {
            return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
        }
        fromBufferAttribute(e, t) {
            return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
        }
        toJSON() {
            return this.toArray();
        }
        _onChange(e) {
            return this._onChangeCallback = e, this;
        }
        _onChangeCallback() {}
        *[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._w;
        }
    }
    class P {
        constructor(e = 0, t = 0, n = 0){
            P.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
        }
        set(e, t, n) {
            return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
        }
        setScalar(e) {
            return this.x = e, this.y = e, this.z = e, this;
        }
        setX(e) {
            return this.x = e, this;
        }
        setY(e) {
            return this.y = e, this;
        }
        setZ(e) {
            return this.z = e, this;
        }
        setComponent(e, t) {
            switch(e){
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                case 2:
                    this.z = t;
                    break;
                default:
                    throw new Error("index is out of range: " + e);
            }
            return this;
        }
        getComponent(e) {
            switch(e){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + e);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z);
        }
        copy(e) {
            return this.x = e.x, this.y = e.y, this.z = e.z, this;
        }
        add(e) {
            return this.x += e.x, this.y += e.y, this.z += e.z, this;
        }
        addScalar(e) {
            return this.x += e, this.y += e, this.z += e, this;
        }
        addVectors(e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
        }
        addScaledVector(e, t) {
            return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
        }
        sub(e) {
            return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
        }
        subScalar(e) {
            return this.x -= e, this.y -= e, this.z -= e, this;
        }
        subVectors(e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
        }
        multiply(e) {
            return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
        }
        multiplyScalar(e) {
            return this.x *= e, this.y *= e, this.z *= e, this;
        }
        multiplyVectors(e, t) {
            return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
        }
        applyEuler(e) {
            return this.applyQuaternion(oa.setFromEuler(e));
        }
        applyAxisAngle(e, t) {
            return this.applyQuaternion(oa.setFromAxisAngle(e, t));
        }
        applyMatrix3(e) {
            const t = this.x, n = this.y, r = this.z, s = e.elements;
            return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this;
        }
        applyNormalMatrix(e) {
            return this.applyMatrix3(e).normalize();
        }
        applyMatrix4(e) {
            const t = this.x, n = this.y, r = this.z, s = e.elements, o = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
            return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * o, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * o, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * o, this;
        }
        applyQuaternion(e) {
            const t = this.x, n = this.y, r = this.z, s = e.x, o = e.y, a = e.z, c = e.w, l = 2 * (o * r - a * n), h = 2 * (a * t - s * r), d = 2 * (s * n - o * t);
            return this.x = t + c * l + o * d - a * h, this.y = n + c * h + a * l - s * d, this.z = r + c * d + s * h - o * l, this;
        }
        project(e) {
            return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
        }
        unproject(e) {
            return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
        }
        transformDirection(e) {
            const t = this.x, n = this.y, r = this.z, s = e.elements;
            return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize();
        }
        divide(e) {
            return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
        }
        divideScalar(e) {
            return this.multiplyScalar(1 / e);
        }
        min(e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
        }
        max(e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
        }
        clamp(e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
        }
        clampScalar(e, t) {
            return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
        }
        clampLength(e, t) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
        }
        roundToZero() {
            return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
        }
        dot(e) {
            return this.x * e.x + this.y * e.y + this.z * e.z;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        setLength(e) {
            return this.normalize().multiplyScalar(e);
        }
        lerp(e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
        }
        lerpVectors(e, t, n) {
            return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
        }
        cross(e) {
            return this.crossVectors(this, e);
        }
        crossVectors(e, t) {
            const n = e.x, r = e.y, s = e.z, o = t.x, a = t.y, c = t.z;
            return this.x = r * c - s * a, this.y = s * o - n * c, this.z = n * a - r * o, this;
        }
        projectOnVector(e) {
            const t = e.lengthSq();
            if (t === 0) return this.set(0, 0, 0);
            const n = e.dot(this) / t;
            return this.copy(e).multiplyScalar(n);
        }
        projectOnPlane(e) {
            return Er.copy(this).projectOnVector(e), this.sub(Er);
        }
        reflect(e) {
            return this.sub(Er.copy(e).multiplyScalar(2 * this.dot(e)));
        }
        angleTo(e) {
            const t = Math.sqrt(this.lengthSq() * e.lengthSq());
            if (t === 0) return Math.PI / 2;
            const n = this.dot(e) / t;
            return Math.acos(vt(n, -1, 1));
        }
        distanceTo(e) {
            return Math.sqrt(this.distanceToSquared(e));
        }
        distanceToSquared(e) {
            const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
            return t * t + n * n + r * r;
        }
        manhattanDistanceTo(e) {
            return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
        }
        setFromSpherical(e) {
            return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
        }
        setFromSphericalCoords(e, t, n) {
            const r = Math.sin(t) * e;
            return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
        }
        setFromCylindrical(e) {
            return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
        }
        setFromCylindricalCoords(e, t, n) {
            return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
        }
        setFromMatrixPosition(e) {
            const t = e.elements;
            return this.x = t[12], this.y = t[13], this.z = t[14], this;
        }
        setFromMatrixScale(e) {
            const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
            return this.x = t, this.y = n, this.z = r, this;
        }
        setFromMatrixColumn(e, t) {
            return this.fromArray(e.elements, t * 4);
        }
        setFromMatrix3Column(e, t) {
            return this.fromArray(e.elements, t * 3);
        }
        setFromEuler(e) {
            return this.x = e._x, this.y = e._y, this.z = e._z, this;
        }
        setFromColor(e) {
            return this.x = e.r, this.y = e.g, this.z = e.b, this;
        }
        equals(e) {
            return e.x === this.x && e.y === this.y && e.z === this.z;
        }
        fromArray(e, t = 0) {
            return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
        }
        toArray(e = [], t = 0) {
            return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
        }
        fromBufferAttribute(e, t) {
            return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
        }
        randomDirection() {
            const e = (Math.random() - .5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
            return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z;
        }
    }
    const Er = new P, oa = new Rn;
    class _i {
        constructor(e = new P(1 / 0, 1 / 0, 1 / 0), t = new P(-1 / 0, -1 / 0, -1 / 0)){
            this.isBox3 = !0, this.min = e, this.max = t;
        }
        set(e, t) {
            return this.min.copy(e), this.max.copy(t), this;
        }
        setFromArray(e) {
            this.makeEmpty();
            for(let t = 0, n = e.length; t < n; t += 3)this.expandByPoint(Ut.fromArray(e, t));
            return this;
        }
        setFromBufferAttribute(e) {
            this.makeEmpty();
            for(let t = 0, n = e.count; t < n; t++)this.expandByPoint(Ut.fromBufferAttribute(e, t));
            return this;
        }
        setFromPoints(e) {
            this.makeEmpty();
            for(let t = 0, n = e.length; t < n; t++)this.expandByPoint(e[t]);
            return this;
        }
        setFromCenterAndSize(e, t) {
            const n = Ut.copy(t).multiplyScalar(.5);
            return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
        }
        setFromObject(e, t = !1) {
            return this.makeEmpty(), this.expandByObject(e, t);
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(e) {
            return this.min.copy(e.min), this.max.copy(e.max), this;
        }
        makeEmpty() {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
        }
        getCenter(e) {
            return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
        }
        getSize(e) {
            return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
        }
        expandByPoint(e) {
            return this.min.min(e), this.max.max(e), this;
        }
        expandByVector(e) {
            return this.min.sub(e), this.max.add(e), this;
        }
        expandByScalar(e) {
            return this.min.addScalar(-e), this.max.addScalar(e), this;
        }
        expandByObject(e, t = !1) {
            e.updateWorldMatrix(!1, !1);
            const n = e.geometry;
            if (n !== void 0) {
                const s = n.getAttribute("position");
                if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0) for(let o = 0, a = s.count; o < a; o++)e.isMesh === !0 ? e.getVertexPosition(o, Ut) : Ut.fromBufferAttribute(s, o), Ut.applyMatrix4(e.matrixWorld), this.expandByPoint(Ut);
                else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Ei.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Ei.copy(n.boundingBox)), Ei.applyMatrix4(e.matrixWorld), this.union(Ei);
            }
            const r = e.children;
            for(let s = 0, o = r.length; s < o; s++)this.expandByObject(r[s], t);
            return this;
        }
        containsPoint(e) {
            return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
        }
        containsBox(e) {
            return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
        }
        getParameter(e, t) {
            return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
        }
        intersectsBox(e) {
            return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
        }
        intersectsSphere(e) {
            return this.clampPoint(e.center, Ut), Ut.distanceToSquared(e.center) <= e.radius * e.radius;
        }
        intersectsPlane(e) {
            let t, n;
            return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
        }
        intersectsTriangle(e) {
            if (this.isEmpty()) return !1;
            this.getCenter(ci), Ti.subVectors(this.max, ci), Nn.subVectors(e.a, ci), Fn.subVectors(e.b, ci), On.subVectors(e.c, ci), tn.subVectors(Fn, Nn), nn.subVectors(On, Fn), _n.subVectors(Nn, On);
            let t = [
                0,
                -tn.z,
                tn.y,
                0,
                -nn.z,
                nn.y,
                0,
                -_n.z,
                _n.y,
                tn.z,
                0,
                -tn.x,
                nn.z,
                0,
                -nn.x,
                _n.z,
                0,
                -_n.x,
                -tn.y,
                tn.x,
                0,
                -nn.y,
                nn.x,
                0,
                -_n.y,
                _n.x,
                0
            ];
            return !Tr(t, Nn, Fn, On, Ti) || (t = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ], !Tr(t, Nn, Fn, On, Ti)) ? !1 : (bi.crossVectors(tn, nn), t = [
                bi.x,
                bi.y,
                bi.z
            ], Tr(t, Nn, Fn, On, Ti));
        }
        clampPoint(e, t) {
            return t.copy(e).clamp(this.min, this.max);
        }
        distanceToPoint(e) {
            return this.clampPoint(e, Ut).distanceTo(e);
        }
        getBoundingSphere(e) {
            return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Ut).length() * .5), e;
        }
        intersect(e) {
            return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
        }
        union(e) {
            return this.min.min(e.min), this.max.max(e.max), this;
        }
        applyMatrix4(e) {
            return this.isEmpty() ? this : (qt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), qt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), qt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), qt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), qt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), qt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), qt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), qt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(qt), this);
        }
        translate(e) {
            return this.min.add(e), this.max.add(e), this;
        }
        equals(e) {
            return e.min.equals(this.min) && e.max.equals(this.max);
        }
    }
    const qt = [
        new P,
        new P,
        new P,
        new P,
        new P,
        new P,
        new P,
        new P
    ], Ut = new P, Ei = new _i, Nn = new P, Fn = new P, On = new P, tn = new P, nn = new P, _n = new P, ci = new P, Ti = new P, bi = new P, vn = new P;
    function Tr(i, e, t, n, r) {
        for(let s = 0, o = i.length - 3; s <= o; s += 3){
            vn.fromArray(i, s);
            const a = r.x * Math.abs(vn.x) + r.y * Math.abs(vn.y) + r.z * Math.abs(vn.z), c = e.dot(vn), l = t.dot(vn), h = n.dot(vn);
            if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > a) return !1;
        }
        return !0;
    }
    const Kc = new _i, li = new P, br = new P;
    class sr {
        constructor(e = new P, t = -1){
            this.isSphere = !0, this.center = e, this.radius = t;
        }
        set(e, t) {
            return this.center.copy(e), this.radius = t, this;
        }
        setFromPoints(e, t) {
            const n = this.center;
            t !== void 0 ? n.copy(t) : Kc.setFromPoints(e).getCenter(n);
            let r = 0;
            for(let s = 0, o = e.length; s < o; s++)r = Math.max(r, n.distanceToSquared(e[s]));
            return this.radius = Math.sqrt(r), this;
        }
        copy(e) {
            return this.center.copy(e.center), this.radius = e.radius, this;
        }
        isEmpty() {
            return this.radius < 0;
        }
        makeEmpty() {
            return this.center.set(0, 0, 0), this.radius = -1, this;
        }
        containsPoint(e) {
            return e.distanceToSquared(this.center) <= this.radius * this.radius;
        }
        distanceToPoint(e) {
            return e.distanceTo(this.center) - this.radius;
        }
        intersectsSphere(e) {
            const t = this.radius + e.radius;
            return e.center.distanceToSquared(this.center) <= t * t;
        }
        intersectsBox(e) {
            return e.intersectsSphere(this);
        }
        intersectsPlane(e) {
            return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
        }
        clampPoint(e, t) {
            const n = this.center.distanceToSquared(e);
            return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
        }
        getBoundingBox(e) {
            return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
        }
        applyMatrix4(e) {
            return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
        }
        translate(e) {
            return this.center.add(e), this;
        }
        expandByPoint(e) {
            if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
            li.subVectors(e, this.center);
            const t = li.lengthSq();
            if (t > this.radius * this.radius) {
                const n = Math.sqrt(t), r = (n - this.radius) * .5;
                this.center.addScaledVector(li, r / n), this.radius += r;
            }
            return this;
        }
        union(e) {
            return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (br.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(li.copy(e.center).add(br)), this.expandByPoint(li.copy(e.center).sub(br))), this);
        }
        equals(e) {
            return e.center.equals(this.center) && e.radius === this.radius;
        }
        clone() {
            return new this.constructor().copy(this);
        }
    }
    const Yt = new P, wr = new P, wi = new P, rn = new P, Ar = new P, Ai = new P, Rr = new P;
    class ar {
        constructor(e = new P, t = new P(0, 0, -1)){
            this.origin = e, this.direction = t;
        }
        set(e, t) {
            return this.origin.copy(e), this.direction.copy(t), this;
        }
        copy(e) {
            return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
        }
        at(e, t) {
            return t.copy(this.origin).addScaledVector(this.direction, e);
        }
        lookAt(e) {
            return this.direction.copy(e).sub(this.origin).normalize(), this;
        }
        recast(e) {
            return this.origin.copy(this.at(e, Yt)), this;
        }
        closestPointToPoint(e, t) {
            t.subVectors(e, this.origin);
            const n = t.dot(this.direction);
            return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
        }
        distanceToPoint(e) {
            return Math.sqrt(this.distanceSqToPoint(e));
        }
        distanceSqToPoint(e) {
            const t = Yt.subVectors(e, this.origin).dot(this.direction);
            return t < 0 ? this.origin.distanceToSquared(e) : (Yt.copy(this.origin).addScaledVector(this.direction, t), Yt.distanceToSquared(e));
        }
        distanceSqToSegment(e, t, n, r) {
            wr.copy(e).add(t).multiplyScalar(.5), wi.copy(t).sub(e).normalize(), rn.copy(this.origin).sub(wr);
            const s = e.distanceTo(t) * .5, o = -this.direction.dot(wi), a = rn.dot(this.direction), c = -rn.dot(wi), l = rn.lengthSq(), h = Math.abs(1 - o * o);
            let d, p, m, g;
            if (h > 0) if (d = o * c - a, p = o * a - c, g = s * h, d >= 0) if (p >= -g) if (p <= g) {
                const _ = 1 / h;
                d *= _, p *= _, m = d * (d + o * p + 2 * a) + p * (o * d + p + 2 * c) + l;
            } else p = s, d = Math.max(0, -(o * p + a)), m = -d * d + p * (p + 2 * c) + l;
            else p = -s, d = Math.max(0, -(o * p + a)), m = -d * d + p * (p + 2 * c) + l;
            else p <= -g ? (d = Math.max(0, -(-o * s + a)), p = d > 0 ? -s : Math.min(Math.max(-s, -c), s), m = -d * d + p * (p + 2 * c) + l) : p <= g ? (d = 0, p = Math.min(Math.max(-s, -c), s), m = p * (p + 2 * c) + l) : (d = Math.max(0, -(o * s + a)), p = d > 0 ? s : Math.min(Math.max(-s, -c), s), m = -d * d + p * (p + 2 * c) + l);
            else p = o > 0 ? -s : s, d = Math.max(0, -(o * p + a)), m = -d * d + p * (p + 2 * c) + l;
            return n && n.copy(this.origin).addScaledVector(this.direction, d), r && r.copy(wr).addScaledVector(wi, p), m;
        }
        intersectSphere(e, t) {
            Yt.subVectors(e.center, this.origin);
            const n = Yt.dot(this.direction), r = Yt.dot(Yt) - n * n, s = e.radius * e.radius;
            if (r > s) return null;
            const o = Math.sqrt(s - r), a = n - o, c = n + o;
            return c < 0 ? null : a < 0 ? this.at(c, t) : this.at(a, t);
        }
        intersectsSphere(e) {
            return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
        }
        distanceToPlane(e) {
            const t = e.normal.dot(this.direction);
            if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
            const n = -(this.origin.dot(e.normal) + e.constant) / t;
            return n >= 0 ? n : null;
        }
        intersectPlane(e, t) {
            const n = this.distanceToPlane(e);
            return n === null ? null : this.at(n, t);
        }
        intersectsPlane(e) {
            const t = e.distanceToPoint(this.origin);
            return t === 0 || e.normal.dot(this.direction) * t < 0;
        }
        intersectBox(e, t) {
            let n, r, s, o, a, c;
            const l = 1 / this.direction.x, h = 1 / this.direction.y, d = 1 / this.direction.z, p = this.origin;
            return l >= 0 ? (n = (e.min.x - p.x) * l, r = (e.max.x - p.x) * l) : (n = (e.max.x - p.x) * l, r = (e.min.x - p.x) * l), h >= 0 ? (s = (e.min.y - p.y) * h, o = (e.max.y - p.y) * h) : (s = (e.max.y - p.y) * h, o = (e.min.y - p.y) * h), n > o || s > r || ((s > n || isNaN(n)) && (n = s), (o < r || isNaN(r)) && (r = o), d >= 0 ? (a = (e.min.z - p.z) * d, c = (e.max.z - p.z) * d) : (a = (e.max.z - p.z) * d, c = (e.min.z - p.z) * d), n > c || a > r) || ((a > n || n !== n) && (n = a), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(n >= 0 ? n : r, t);
        }
        intersectsBox(e) {
            return this.intersectBox(e, Yt) !== null;
        }
        intersectTriangle(e, t, n, r, s) {
            Ar.subVectors(t, e), Ai.subVectors(n, e), Rr.crossVectors(Ar, Ai);
            let o = this.direction.dot(Rr), a;
            if (o > 0) {
                if (r) return null;
                a = 1;
            } else if (o < 0) a = -1, o = -o;
            else return null;
            rn.subVectors(this.origin, e);
            const c = a * this.direction.dot(Ai.crossVectors(rn, Ai));
            if (c < 0) return null;
            const l = a * this.direction.dot(Ar.cross(rn));
            if (l < 0 || c + l > o) return null;
            const h = -a * rn.dot(Rr);
            return h < 0 ? null : this.at(h / o, s);
        }
        applyMatrix4(e) {
            return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
        }
        equals(e) {
            return e.origin.equals(this.origin) && e.direction.equals(this.direction);
        }
        clone() {
            return new this.constructor().copy(this);
        }
    }
    class it {
        constructor(e, t, n, r, s, o, a, c, l, h, d, p, m, g, _, f){
            it.prototype.isMatrix4 = !0, this.elements = [
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1
            ], e !== void 0 && this.set(e, t, n, r, s, o, a, c, l, h, d, p, m, g, _, f);
        }
        set(e, t, n, r, s, o, a, c, l, h, d, p, m, g, _, f) {
            const u = this.elements;
            return u[0] = e, u[4] = t, u[8] = n, u[12] = r, u[1] = s, u[5] = o, u[9] = a, u[13] = c, u[2] = l, u[6] = h, u[10] = d, u[14] = p, u[3] = m, u[7] = g, u[11] = _, u[15] = f, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        clone() {
            return new it().fromArray(this.elements);
        }
        copy(e) {
            const t = this.elements, n = e.elements;
            return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
        }
        copyPosition(e) {
            const t = this.elements, n = e.elements;
            return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
        }
        setFromMatrix3(e) {
            const t = e.elements;
            return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
        }
        extractBasis(e, t, n) {
            return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
        }
        makeBasis(e, t, n) {
            return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
        }
        extractRotation(e) {
            const t = this.elements, n = e.elements, r = 1 / Bn.setFromMatrixColumn(e, 0).length(), s = 1 / Bn.setFromMatrixColumn(e, 1).length(), o = 1 / Bn.setFromMatrixColumn(e, 2).length();
            return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
        }
        makeRotationFromEuler(e) {
            const t = this.elements, n = e.x, r = e.y, s = e.z, o = Math.cos(n), a = Math.sin(n), c = Math.cos(r), l = Math.sin(r), h = Math.cos(s), d = Math.sin(s);
            if (e.order === "XYZ") {
                const p = o * h, m = o * d, g = a * h, _ = a * d;
                t[0] = c * h, t[4] = -c * d, t[8] = l, t[1] = m + g * l, t[5] = p - _ * l, t[9] = -a * c, t[2] = _ - p * l, t[6] = g + m * l, t[10] = o * c;
            } else if (e.order === "YXZ") {
                const p = c * h, m = c * d, g = l * h, _ = l * d;
                t[0] = p + _ * a, t[4] = g * a - m, t[8] = o * l, t[1] = o * d, t[5] = o * h, t[9] = -a, t[2] = m * a - g, t[6] = _ + p * a, t[10] = o * c;
            } else if (e.order === "ZXY") {
                const p = c * h, m = c * d, g = l * h, _ = l * d;
                t[0] = p - _ * a, t[4] = -o * d, t[8] = g + m * a, t[1] = m + g * a, t[5] = o * h, t[9] = _ - p * a, t[2] = -o * l, t[6] = a, t[10] = o * c;
            } else if (e.order === "ZYX") {
                const p = o * h, m = o * d, g = a * h, _ = a * d;
                t[0] = c * h, t[4] = g * l - m, t[8] = p * l + _, t[1] = c * d, t[5] = _ * l + p, t[9] = m * l - g, t[2] = -l, t[6] = a * c, t[10] = o * c;
            } else if (e.order === "YZX") {
                const p = o * c, m = o * l, g = a * c, _ = a * l;
                t[0] = c * h, t[4] = _ - p * d, t[8] = g * d + m, t[1] = d, t[5] = o * h, t[9] = -a * h, t[2] = -l * h, t[6] = m * d + g, t[10] = p - _ * d;
            } else if (e.order === "XZY") {
                const p = o * c, m = o * l, g = a * c, _ = a * l;
                t[0] = c * h, t[4] = -d, t[8] = l * h, t[1] = p * d + _, t[5] = o * h, t[9] = m * d - g, t[2] = g * d - m, t[6] = a * h, t[10] = _ * d + p;
            }
            return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
        }
        makeRotationFromQuaternion(e) {
            return this.compose($c, e, Zc);
        }
        lookAt(e, t, n) {
            const r = this.elements;
            return wt.subVectors(e, t), wt.lengthSq() === 0 && (wt.z = 1), wt.normalize(), sn.crossVectors(n, wt), sn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? wt.x += 1e-4 : wt.z += 1e-4, wt.normalize(), sn.crossVectors(n, wt)), sn.normalize(), Ri.crossVectors(wt, sn), r[0] = sn.x, r[4] = Ri.x, r[8] = wt.x, r[1] = sn.y, r[5] = Ri.y, r[9] = wt.y, r[2] = sn.z, r[6] = Ri.z, r[10] = wt.z, this;
        }
        multiply(e) {
            return this.multiplyMatrices(this, e);
        }
        premultiply(e) {
            return this.multiplyMatrices(e, this);
        }
        multiplyMatrices(e, t) {
            const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[4], c = n[8], l = n[12], h = n[1], d = n[5], p = n[9], m = n[13], g = n[2], _ = n[6], f = n[10], u = n[14], S = n[3], y = n[7], b = n[11], L = n[15], R = r[0], A = r[4], G = r[8], x = r[12], T = r[1], z = r[5], H = r[9], Q = r[13], D = r[2], F = r[6], V = r[10], Y = r[14], X = r[3], q = r[7], j = r[11], re = r[15];
            return s[0] = o * R + a * T + c * D + l * X, s[4] = o * A + a * z + c * F + l * q, s[8] = o * G + a * H + c * V + l * j, s[12] = o * x + a * Q + c * Y + l * re, s[1] = h * R + d * T + p * D + m * X, s[5] = h * A + d * z + p * F + m * q, s[9] = h * G + d * H + p * V + m * j, s[13] = h * x + d * Q + p * Y + m * re, s[2] = g * R + _ * T + f * D + u * X, s[6] = g * A + _ * z + f * F + u * q, s[10] = g * G + _ * H + f * V + u * j, s[14] = g * x + _ * Q + f * Y + u * re, s[3] = S * R + y * T + b * D + L * X, s[7] = S * A + y * z + b * F + L * q, s[11] = S * G + y * H + b * V + L * j, s[15] = S * x + y * Q + b * Y + L * re, this;
        }
        multiplyScalar(e) {
            const t = this.elements;
            return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
        }
        determinant() {
            const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], o = e[1], a = e[5], c = e[9], l = e[13], h = e[2], d = e[6], p = e[10], m = e[14], g = e[3], _ = e[7], f = e[11], u = e[15];
            return g * (+s * c * d - r * l * d - s * a * p + n * l * p + r * a * m - n * c * m) + _ * (+t * c * m - t * l * p + s * o * p - r * o * m + r * l * h - s * c * h) + f * (+t * l * d - t * a * m - s * o * d + n * o * m + s * a * h - n * l * h) + u * (-r * a * h - t * c * d + t * a * p + r * o * d - n * o * p + n * c * h);
        }
        transpose() {
            const e = this.elements;
            let t;
            return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
        }
        setPosition(e, t, n) {
            const r = this.elements;
            return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
        }
        invert() {
            const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8], d = e[9], p = e[10], m = e[11], g = e[12], _ = e[13], f = e[14], u = e[15], S = d * f * l - _ * p * l + _ * c * m - a * f * m - d * c * u + a * p * u, y = g * p * l - h * f * l - g * c * m + o * f * m + h * c * u - o * p * u, b = h * _ * l - g * d * l + g * a * m - o * _ * m - h * a * u + o * d * u, L = g * d * c - h * _ * c - g * a * p + o * _ * p + h * a * f - o * d * f, R = t * S + n * y + r * b + s * L;
            if (R === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const A = 1 / R;
            return e[0] = S * A, e[1] = (_ * p * s - d * f * s - _ * r * m + n * f * m + d * r * u - n * p * u) * A, e[2] = (a * f * s - _ * c * s + _ * r * l - n * f * l - a * r * u + n * c * u) * A, e[3] = (d * c * s - a * p * s - d * r * l + n * p * l + a * r * m - n * c * m) * A, e[4] = y * A, e[5] = (h * f * s - g * p * s + g * r * m - t * f * m - h * r * u + t * p * u) * A, e[6] = (g * c * s - o * f * s - g * r * l + t * f * l + o * r * u - t * c * u) * A, e[7] = (o * p * s - h * c * s + h * r * l - t * p * l - o * r * m + t * c * m) * A, e[8] = b * A, e[9] = (g * d * s - h * _ * s - g * n * m + t * _ * m + h * n * u - t * d * u) * A, e[10] = (o * _ * s - g * a * s + g * n * l - t * _ * l - o * n * u + t * a * u) * A, e[11] = (h * a * s - o * d * s - h * n * l + t * d * l + o * n * m - t * a * m) * A, e[12] = L * A, e[13] = (h * _ * r - g * d * r + g * n * p - t * _ * p - h * n * f + t * d * f) * A, e[14] = (g * a * r - o * _ * r - g * n * c + t * _ * c + o * n * f - t * a * f) * A, e[15] = (o * d * r - h * a * r + h * n * c - t * d * c - o * n * p + t * a * p) * A, this;
        }
        scale(e) {
            const t = this.elements, n = e.x, r = e.y, s = e.z;
            return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this;
        }
        getMaxScaleOnAxis() {
            const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
            return Math.sqrt(Math.max(t, n, r));
        }
        makeTranslation(e, t, n) {
            return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
        }
        makeRotationX(e) {
            const t = Math.cos(e), n = Math.sin(e);
            return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
        }
        makeRotationY(e) {
            const t = Math.cos(e), n = Math.sin(e);
            return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
        }
        makeRotationZ(e) {
            const t = Math.cos(e), n = Math.sin(e);
            return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        makeRotationAxis(e, t) {
            const n = Math.cos(t), r = Math.sin(t), s = 1 - n, o = e.x, a = e.y, c = e.z, l = s * o, h = s * a;
            return this.set(l * o + n, l * a - r * c, l * c + r * a, 0, l * a + r * c, h * a + n, h * c - r * o, 0, l * c - r * a, h * c + r * o, s * c * c + n, 0, 0, 0, 0, 1), this;
        }
        makeScale(e, t, n) {
            return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
        }
        makeShear(e, t, n, r, s, o) {
            return this.set(1, n, s, 0, e, 1, o, 0, t, r, 1, 0, 0, 0, 0, 1), this;
        }
        compose(e, t, n) {
            const r = this.elements, s = t._x, o = t._y, a = t._z, c = t._w, l = s + s, h = o + o, d = a + a, p = s * l, m = s * h, g = s * d, _ = o * h, f = o * d, u = a * d, S = c * l, y = c * h, b = c * d, L = n.x, R = n.y, A = n.z;
            return r[0] = (1 - (_ + u)) * L, r[1] = (m + b) * L, r[2] = (g - y) * L, r[3] = 0, r[4] = (m - b) * R, r[5] = (1 - (p + u)) * R, r[6] = (f + S) * R, r[7] = 0, r[8] = (g + y) * A, r[9] = (f - S) * A, r[10] = (1 - (p + _)) * A, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
        }
        decompose(e, t, n) {
            const r = this.elements;
            let s = Bn.set(r[0], r[1], r[2]).length();
            const o = Bn.set(r[4], r[5], r[6]).length(), a = Bn.set(r[8], r[9], r[10]).length();
            this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], Nt.copy(this);
            const l = 1 / s, h = 1 / o, d = 1 / a;
            return Nt.elements[0] *= l, Nt.elements[1] *= l, Nt.elements[2] *= l, Nt.elements[4] *= h, Nt.elements[5] *= h, Nt.elements[6] *= h, Nt.elements[8] *= d, Nt.elements[9] *= d, Nt.elements[10] *= d, t.setFromRotationMatrix(Nt), n.x = s, n.y = o, n.z = a, this;
        }
        makePerspective(e, t, n, r, s, o, a = Jt) {
            const c = this.elements, l = 2 * s / (t - e), h = 2 * s / (n - r), d = (t + e) / (t - e), p = (n + r) / (n - r);
            let m, g;
            if (a === Jt) m = -(o + s) / (o - s), g = -2 * o * s / (o - s);
            else if (a === Qi) m = -o / (o - s), g = -o * s / (o - s);
            else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
            return c[0] = l, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = h, c[9] = p, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = m, c[14] = g, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
        }
        makeOrthographic(e, t, n, r, s, o, a = Jt) {
            const c = this.elements, l = 1 / (t - e), h = 1 / (n - r), d = 1 / (o - s), p = (t + e) * l, m = (n + r) * h;
            let g, _;
            if (a === Jt) g = (o + s) * d, _ = -2 * d;
            else if (a === Qi) g = s * d, _ = -1 * d;
            else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
            return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -p, c[1] = 0, c[5] = 2 * h, c[9] = 0, c[13] = -m, c[2] = 0, c[6] = 0, c[10] = _, c[14] = -g, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
        }
        equals(e) {
            const t = this.elements, n = e.elements;
            for(let r = 0; r < 16; r++)if (t[r] !== n[r]) return !1;
            return !0;
        }
        fromArray(e, t = 0) {
            for(let n = 0; n < 16; n++)this.elements[n] = e[n + t];
            return this;
        }
        toArray(e = [], t = 0) {
            const n = this.elements;
            return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
        }
    }
    const Bn = new P, Nt = new it, $c = new P(0, 0, 0), Zc = new P(1, 1, 1), sn = new P, Ri = new P, wt = new P, ca = new it, la = new Rn;
    class vi {
        constructor(e = 0, t = 0, n = 0, r = vi.DEFAULT_ORDER){
            this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r;
        }
        get x() {
            return this._x;
        }
        set x(e) {
            this._x = e, this._onChangeCallback();
        }
        get y() {
            return this._y;
        }
        set y(e) {
            this._y = e, this._onChangeCallback();
        }
        get z() {
            return this._z;
        }
        set z(e) {
            this._z = e, this._onChangeCallback();
        }
        get order() {
            return this._order;
        }
        set order(e) {
            this._order = e, this._onChangeCallback();
        }
        set(e, t, n, r = this._order) {
            return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._order);
        }
        copy(e) {
            return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
        }
        setFromRotationMatrix(e, t = this._order, n = !0) {
            const r = e.elements, s = r[0], o = r[4], a = r[8], c = r[1], l = r[5], h = r[9], d = r[2], p = r[6], m = r[10];
            switch(t){
                case "XYZ":
                    this._y = Math.asin(vt(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(p, l), this._z = 0);
                    break;
                case "YXZ":
                    this._x = Math.asin(-vt(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(a, m), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, s), this._z = 0);
                    break;
                case "ZXY":
                    this._x = Math.asin(vt(p, -1, 1)), Math.abs(p) < .9999999 ? (this._y = Math.atan2(-d, m), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, s));
                    break;
                case "ZYX":
                    this._y = Math.asin(-vt(d, -1, 1)), Math.abs(d) < .9999999 ? (this._x = Math.atan2(p, m), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-o, l));
                    break;
                case "YZX":
                    this._z = Math.asin(vt(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-d, s)) : (this._x = 0, this._y = Math.atan2(a, m));
                    break;
                case "XZY":
                    this._z = Math.asin(-vt(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(p, l), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-h, m), this._y = 0);
                    break;
                default:
                    console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
            }
            return this._order = t, n === !0 && this._onChangeCallback(), this;
        }
        setFromQuaternion(e, t, n) {
            return ca.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ca, t, n);
        }
        setFromVector3(e, t = this._order) {
            return this.set(e.x, e.y, e.z, t);
        }
        reorder(e) {
            return la.setFromEuler(this), this.setFromQuaternion(la, e);
        }
        equals(e) {
            return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
        }
        fromArray(e) {
            return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
        }
        toArray(e = [], t = 0) {
            return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
        }
        _onChange(e) {
            return this._onChangeCallback = e, this;
        }
        _onChangeCallback() {}
        *[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._order;
        }
    }
    vi.DEFAULT_ORDER = "XYZ";
    class ls {
        constructor(){
            this.mask = 1;
        }
        set(e) {
            this.mask = (1 << e | 0) >>> 0;
        }
        enable(e) {
            this.mask |= 1 << e | 0;
        }
        enableAll() {
            this.mask = -1;
        }
        toggle(e) {
            this.mask ^= 1 << e | 0;
        }
        disable(e) {
            this.mask &= ~(1 << e | 0);
        }
        disableAll() {
            this.mask = 0;
        }
        test(e) {
            return (this.mask & e.mask) !== 0;
        }
        isEnabled(e) {
            return (this.mask & (1 << e | 0)) !== 0;
        }
    }
    let Jc = 0;
    const ha = new P, zn = new Rn, jt = new it, Ci = new P, hi = new P, Qc = new P, el = new Rn, ua = new P(1, 0, 0), da = new P(0, 1, 0), fa = new P(0, 0, 1), tl = {
        type: "added"
    }, nl = {
        type: "removed"
    };
    class pt extends Pn {
        constructor(){
            super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
                value: Jc++
            }), this.uuid = gi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = pt.DEFAULT_UP.clone();
            const e = new P, t = new vi, n = new Rn, r = new P(1, 1, 1);
            function s() {
                n.setFromEuler(t, !1);
            }
            function o() {
                t.setFromQuaternion(n, void 0, !1);
            }
            t._onChange(s), n._onChange(o), Object.defineProperties(this, {
                position: {
                    configurable: !0,
                    enumerable: !0,
                    value: e
                },
                rotation: {
                    configurable: !0,
                    enumerable: !0,
                    value: t
                },
                quaternion: {
                    configurable: !0,
                    enumerable: !0,
                    value: n
                },
                scale: {
                    configurable: !0,
                    enumerable: !0,
                    value: r
                },
                modelViewMatrix: {
                    value: new it
                },
                normalMatrix: {
                    value: new He
                }
            }), this.matrix = new it, this.matrixWorld = new it, this.matrixAutoUpdate = pt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new ls, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
        }
        onBeforeShadow() {}
        onAfterShadow() {}
        onBeforeRender() {}
        onAfterRender() {}
        applyMatrix4(e) {
            this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
        }
        applyQuaternion(e) {
            return this.quaternion.premultiply(e), this;
        }
        setRotationFromAxisAngle(e, t) {
            this.quaternion.setFromAxisAngle(e, t);
        }
        setRotationFromEuler(e) {
            this.quaternion.setFromEuler(e, !0);
        }
        setRotationFromMatrix(e) {
            this.quaternion.setFromRotationMatrix(e);
        }
        setRotationFromQuaternion(e) {
            this.quaternion.copy(e);
        }
        rotateOnAxis(e, t) {
            return zn.setFromAxisAngle(e, t), this.quaternion.multiply(zn), this;
        }
        rotateOnWorldAxis(e, t) {
            return zn.setFromAxisAngle(e, t), this.quaternion.premultiply(zn), this;
        }
        rotateX(e) {
            return this.rotateOnAxis(ua, e);
        }
        rotateY(e) {
            return this.rotateOnAxis(da, e);
        }
        rotateZ(e) {
            return this.rotateOnAxis(fa, e);
        }
        translateOnAxis(e, t) {
            return ha.copy(e).applyQuaternion(this.quaternion), this.position.add(ha.multiplyScalar(t)), this;
        }
        translateX(e) {
            return this.translateOnAxis(ua, e);
        }
        translateY(e) {
            return this.translateOnAxis(da, e);
        }
        translateZ(e) {
            return this.translateOnAxis(fa, e);
        }
        localToWorld(e) {
            return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
        }
        worldToLocal(e) {
            return this.updateWorldMatrix(!0, !1), e.applyMatrix4(jt.copy(this.matrixWorld).invert());
        }
        lookAt(e, t, n) {
            e.isVector3 ? Ci.copy(e) : Ci.set(e, t, n);
            const r = this.parent;
            this.updateWorldMatrix(!0, !1), hi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? jt.lookAt(hi, Ci, this.up) : jt.lookAt(Ci, hi, this.up), this.quaternion.setFromRotationMatrix(jt), r && (jt.extractRotation(r.matrixWorld), zn.setFromRotationMatrix(jt), this.quaternion.premultiply(zn.invert()));
        }
        add(e) {
            if (arguments.length > 1) {
                for(let t = 0; t < arguments.length; t++)this.add(arguments[t]);
                return this;
            }
            return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(tl)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
        }
        remove(e) {
            if (arguments.length > 1) {
                for(let n = 0; n < arguments.length; n++)this.remove(arguments[n]);
                return this;
            }
            const t = this.children.indexOf(e);
            return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(nl)), this;
        }
        removeFromParent() {
            const e = this.parent;
            return e !== null && e.remove(this), this;
        }
        clear() {
            return this.remove(...this.children);
        }
        attach(e) {
            return this.updateWorldMatrix(!0, !1), jt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), jt.multiply(e.parent.matrixWorld)), e.applyMatrix4(jt), this.add(e), e.updateWorldMatrix(!1, !0), this;
        }
        getObjectById(e) {
            return this.getObjectByProperty("id", e);
        }
        getObjectByName(e) {
            return this.getObjectByProperty("name", e);
        }
        getObjectByProperty(e, t) {
            if (this[e] === t) return this;
            for(let n = 0, r = this.children.length; n < r; n++){
                const o = this.children[n].getObjectByProperty(e, t);
                if (o !== void 0) return o;
            }
        }
        getObjectsByProperty(e, t, n = []) {
            this[e] === t && n.push(this);
            const r = this.children;
            for(let s = 0, o = r.length; s < o; s++)r[s].getObjectsByProperty(e, t, n);
            return n;
        }
        getWorldPosition(e) {
            return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
        }
        getWorldQuaternion(e) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(hi, e, Qc), e;
        }
        getWorldScale(e) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(hi, el, e), e;
        }
        getWorldDirection(e) {
            this.updateWorldMatrix(!0, !1);
            const t = this.matrixWorld.elements;
            return e.set(t[8], t[9], t[10]).normalize();
        }
        raycast() {}
        traverse(e) {
            e(this);
            const t = this.children;
            for(let n = 0, r = t.length; n < r; n++)t[n].traverse(e);
        }
        traverseVisible(e) {
            if (this.visible === !1) return;
            e(this);
            const t = this.children;
            for(let n = 0, r = t.length; n < r; n++)t[n].traverseVisible(e);
        }
        traverseAncestors(e) {
            const t = this.parent;
            t !== null && (e(t), t.traverseAncestors(e));
        }
        updateMatrix() {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
        }
        updateMatrixWorld(e) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
            const t = this.children;
            for(let n = 0, r = t.length; n < r; n++){
                const s = t[n];
                (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
            }
        }
        updateWorldMatrix(e, t) {
            const n = this.parent;
            if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
                const r = this.children;
                for(let s = 0, o = r.length; s < o; s++){
                    const a = r[s];
                    a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
                }
            }
        }
        toJSON(e) {
            const t = e === void 0 || typeof e == "string", n = {};
            t && (e = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {},
                skeletons: {},
                animations: {},
                nodes: {}
            }, n.metadata = {
                version: 4.6,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            const r = {};
            r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.visibility = this._visibility, r.active = this._active, r.bounds = this._bounds.map((a)=>({
                    boxInitialized: a.boxInitialized,
                    boxMin: a.box.min.toArray(),
                    boxMax: a.box.max.toArray(),
                    sphereInitialized: a.sphereInitialized,
                    sphereRadius: a.sphere.radius,
                    sphereCenter: a.sphere.center.toArray()
                })), r.maxGeometryCount = this._maxGeometryCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.geometryCount = this._geometryCount, r.matricesTexture = this._matricesTexture.toJSON(e), this.boundingSphere !== null && (r.boundingSphere = {
                center: r.boundingSphere.center.toArray(),
                radius: r.boundingSphere.radius
            }), this.boundingBox !== null && (r.boundingBox = {
                min: r.boundingBox.min.toArray(),
                max: r.boundingBox.max.toArray()
            }));
            function s(a, c) {
                return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(e)), c.uuid;
            }
            if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
            else if (this.isMesh || this.isLine || this.isPoints) {
                r.geometry = s(e.geometries, this.geometry);
                const a = this.geometry.parameters;
                if (a !== void 0 && a.shapes !== void 0) {
                    const c = a.shapes;
                    if (Array.isArray(c)) for(let l = 0, h = c.length; l < h; l++){
                        const d = c[l];
                        s(e.shapes, d);
                    }
                    else s(e.shapes, c);
                }
            }
            if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
                const a = [];
                for(let c = 0, l = this.material.length; c < l; c++)a.push(s(e.materials, this.material[c]));
                r.material = a;
            } else r.material = s(e.materials, this.material);
            if (this.children.length > 0) {
                r.children = [];
                for(let a = 0; a < this.children.length; a++)r.children.push(this.children[a].toJSON(e).object);
            }
            if (this.animations.length > 0) {
                r.animations = [];
                for(let a = 0; a < this.animations.length; a++){
                    const c = this.animations[a];
                    r.animations.push(s(e.animations, c));
                }
            }
            if (t) {
                const a = o(e.geometries), c = o(e.materials), l = o(e.textures), h = o(e.images), d = o(e.shapes), p = o(e.skeletons), m = o(e.animations), g = o(e.nodes);
                a.length > 0 && (n.geometries = a), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), d.length > 0 && (n.shapes = d), p.length > 0 && (n.skeletons = p), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
            }
            return n.object = r, n;
            function o(a) {
                const c = [];
                for(const l in a){
                    const h = a[l];
                    delete h.metadata, c.push(h);
                }
                return c;
            }
        }
        clone(e) {
            return new this.constructor().copy(this, e);
        }
        copy(e, t = !0) {
            if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for(let n = 0; n < e.children.length; n++){
                const r = e.children[n];
                this.add(r.clone());
            }
            return this;
        }
    }
    pt.DEFAULT_UP = new P(0, 1, 0);
    pt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
    pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
    const Ft = new P, Kt = new P, Cr = new P, $t = new P, kn = new P, Gn = new P, pa = new P, Pr = new P, Lr = new P, Dr = new P;
    let Pi = !1;
    class Ot {
        constructor(e = new P, t = new P, n = new P){
            this.a = e, this.b = t, this.c = n;
        }
        static getNormal(e, t, n, r) {
            r.subVectors(n, t), Ft.subVectors(e, t), r.cross(Ft);
            const s = r.lengthSq();
            return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
        }
        static getBarycoord(e, t, n, r, s) {
            Ft.subVectors(r, t), Kt.subVectors(n, t), Cr.subVectors(e, t);
            const o = Ft.dot(Ft), a = Ft.dot(Kt), c = Ft.dot(Cr), l = Kt.dot(Kt), h = Kt.dot(Cr), d = o * l - a * a;
            if (d === 0) return s.set(0, 0, 0), null;
            const p = 1 / d, m = (l * c - a * h) * p, g = (o * h - a * c) * p;
            return s.set(1 - m - g, g, m);
        }
        static containsPoint(e, t, n, r) {
            return this.getBarycoord(e, t, n, r, $t) === null ? !1 : $t.x >= 0 && $t.y >= 0 && $t.x + $t.y <= 1;
        }
        static getUV(e, t, n, r, s, o, a, c) {
            return Pi === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Pi = !0), this.getInterpolation(e, t, n, r, s, o, a, c);
        }
        static getInterpolation(e, t, n, r, s, o, a, c) {
            return this.getBarycoord(e, t, n, r, $t) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, $t.x), c.addScaledVector(o, $t.y), c.addScaledVector(a, $t.z), c);
        }
        static isFrontFacing(e, t, n, r) {
            return Ft.subVectors(n, t), Kt.subVectors(e, t), Ft.cross(Kt).dot(r) < 0;
        }
        set(e, t, n) {
            return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
        }
        setFromPointsAndIndices(e, t, n, r) {
            return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
        }
        setFromAttributeAndIndices(e, t, n, r) {
            return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(e) {
            return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
        }
        getArea() {
            return Ft.subVectors(this.c, this.b), Kt.subVectors(this.a, this.b), Ft.cross(Kt).length() * .5;
        }
        getMidpoint(e) {
            return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
        }
        getNormal(e) {
            return Ot.getNormal(this.a, this.b, this.c, e);
        }
        getPlane(e) {
            return e.setFromCoplanarPoints(this.a, this.b, this.c);
        }
        getBarycoord(e, t) {
            return Ot.getBarycoord(e, this.a, this.b, this.c, t);
        }
        getUV(e, t, n, r, s) {
            return Pi === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Pi = !0), Ot.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
        }
        getInterpolation(e, t, n, r, s) {
            return Ot.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
        }
        containsPoint(e) {
            return Ot.containsPoint(e, this.a, this.b, this.c);
        }
        isFrontFacing(e) {
            return Ot.isFrontFacing(this.a, this.b, this.c, e);
        }
        intersectsBox(e) {
            return e.intersectsTriangle(this);
        }
        closestPointToPoint(e, t) {
            const n = this.a, r = this.b, s = this.c;
            let o, a;
            kn.subVectors(r, n), Gn.subVectors(s, n), Pr.subVectors(e, n);
            const c = kn.dot(Pr), l = Gn.dot(Pr);
            if (c <= 0 && l <= 0) return t.copy(n);
            Lr.subVectors(e, r);
            const h = kn.dot(Lr), d = Gn.dot(Lr);
            if (h >= 0 && d <= h) return t.copy(r);
            const p = c * d - h * l;
            if (p <= 0 && c >= 0 && h <= 0) return o = c / (c - h), t.copy(n).addScaledVector(kn, o);
            Dr.subVectors(e, s);
            const m = kn.dot(Dr), g = Gn.dot(Dr);
            if (g >= 0 && m <= g) return t.copy(s);
            const _ = m * l - c * g;
            if (_ <= 0 && l >= 0 && g <= 0) return a = l / (l - g), t.copy(n).addScaledVector(Gn, a);
            const f = h * g - m * d;
            if (f <= 0 && d - h >= 0 && m - g >= 0) return pa.subVectors(s, r), a = (d - h) / (d - h + (m - g)), t.copy(r).addScaledVector(pa, a);
            const u = 1 / (f + _ + p);
            return o = _ * u, a = p * u, t.copy(n).addScaledVector(kn, o).addScaledVector(Gn, a);
        }
        equals(e) {
            return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
        }
    }
    const Mo = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    }, an = {
        h: 0,
        s: 0,
        l: 0
    }, Li = {
        h: 0,
        s: 0,
        l: 0
    };
    function Ir(i, e, t) {
        return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
    }
    class Be {
        constructor(e, t, n){
            return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
        }
        set(e, t, n) {
            if (t === void 0 && n === void 0) {
                const r = e;
                r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
            } else this.setRGB(e, t, n);
            return this;
        }
        setScalar(e) {
            return this.r = e, this.g = e, this.b = e, this;
        }
        setHex(e, t = ft) {
            return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, je.toWorkingColorSpace(this, t), this;
        }
        setRGB(e, t, n, r = je.workingColorSpace) {
            return this.r = e, this.g = t, this.b = n, je.toWorkingColorSpace(this, r), this;
        }
        setHSL(e, t, n, r = je.workingColorSpace) {
            if (e = Gc(e, 1), t = vt(t, 0, 1), n = vt(n, 0, 1), t === 0) this.r = this.g = this.b = n;
            else {
                const s = n <= .5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
                this.r = Ir(o, s, e + 1 / 3), this.g = Ir(o, s, e), this.b = Ir(o, s, e - 1 / 3);
            }
            return je.toWorkingColorSpace(this, r), this;
        }
        setStyle(e, t = ft) {
            function n(s) {
                s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
            }
            let r;
            if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
                let s;
                const o = r[1], a = r[2];
                switch(o){
                    case "rgb":
                    case "rgba":
                        if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, t);
                        if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, t);
                        break;
                    case "hsl":
                    case "hsla":
                        if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, t);
                        break;
                    default:
                        console.warn("THREE.Color: Unknown color model " + e);
                }
            } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
                const s = r[1], o = s.length;
                if (o === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, t);
                if (o === 6) return this.setHex(parseInt(s, 16), t);
                console.warn("THREE.Color: Invalid hex color " + e);
            } else if (e && e.length > 0) return this.setColorName(e, t);
            return this;
        }
        setColorName(e, t = ft) {
            const n = Mo[e.toLowerCase()];
            return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
        }
        clone() {
            return new this.constructor(this.r, this.g, this.b);
        }
        copy(e) {
            return this.r = e.r, this.g = e.g, this.b = e.b, this;
        }
        copySRGBToLinear(e) {
            return this.r = Qn(e.r), this.g = Qn(e.g), this.b = Qn(e.b), this;
        }
        copyLinearToSRGB(e) {
            return this.r = Mr(e.r), this.g = Mr(e.g), this.b = Mr(e.b), this;
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this), this;
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this), this;
        }
        getHex(e = ft) {
            return je.fromWorkingColorSpace(_t.copy(this), e), Math.round(vt(_t.r * 255, 0, 255)) * 65536 + Math.round(vt(_t.g * 255, 0, 255)) * 256 + Math.round(vt(_t.b * 255, 0, 255));
        }
        getHexString(e = ft) {
            return ("000000" + this.getHex(e).toString(16)).slice(-6);
        }
        getHSL(e, t = je.workingColorSpace) {
            je.fromWorkingColorSpace(_t.copy(this), t);
            const n = _t.r, r = _t.g, s = _t.b, o = Math.max(n, r, s), a = Math.min(n, r, s);
            let c, l;
            const h = (a + o) / 2;
            if (a === o) c = 0, l = 0;
            else {
                const d = o - a;
                switch(l = h <= .5 ? d / (o + a) : d / (2 - o - a), o){
                    case n:
                        c = (r - s) / d + (r < s ? 6 : 0);
                        break;
                    case r:
                        c = (s - n) / d + 2;
                        break;
                    case s:
                        c = (n - r) / d + 4;
                        break;
                }
                c /= 6;
            }
            return e.h = c, e.s = l, e.l = h, e;
        }
        getRGB(e, t = je.workingColorSpace) {
            return je.fromWorkingColorSpace(_t.copy(this), t), e.r = _t.r, e.g = _t.g, e.b = _t.b, e;
        }
        getStyle(e = ft) {
            je.fromWorkingColorSpace(_t.copy(this), e);
            const t = _t.r, n = _t.g, r = _t.b;
            return e !== ft ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
        }
        offsetHSL(e, t, n) {
            return this.getHSL(an), this.setHSL(an.h + e, an.s + t, an.l + n);
        }
        add(e) {
            return this.r += e.r, this.g += e.g, this.b += e.b, this;
        }
        addColors(e, t) {
            return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
        }
        addScalar(e) {
            return this.r += e, this.g += e, this.b += e, this;
        }
        sub(e) {
            return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
        }
        multiply(e) {
            return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
        }
        multiplyScalar(e) {
            return this.r *= e, this.g *= e, this.b *= e, this;
        }
        lerp(e, t) {
            return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
        }
        lerpColors(e, t, n) {
            return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
        }
        lerpHSL(e, t) {
            this.getHSL(an), e.getHSL(Li);
            const n = xr(an.h, Li.h, t), r = xr(an.s, Li.s, t), s = xr(an.l, Li.l, t);
            return this.setHSL(n, r, s), this;
        }
        setFromVector3(e) {
            return this.r = e.x, this.g = e.y, this.b = e.z, this;
        }
        applyMatrix3(e) {
            const t = this.r, n = this.g, r = this.b, s = e.elements;
            return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] * n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this;
        }
        equals(e) {
            return e.r === this.r && e.g === this.g && e.b === this.b;
        }
        fromArray(e, t = 0) {
            return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
        }
        toArray(e = [], t = 0) {
            return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
        }
        fromBufferAttribute(e, t) {
            return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
        }
        toJSON() {
            return this.getHex();
        }
        *[Symbol.iterator]() {
            yield this.r, yield this.g, yield this.b;
        }
    }
    const _t = new Be;
    Be.NAMES = Mo;
    let il = 0;
    class ri extends Pn {
        constructor(){
            super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
                value: il++
            }), this.uuid = gi(), this.name = "", this.type = "Material", this.blending = Jn, this.side = pn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = jr, this.blendDst = Kr, this.blendEquation = Sn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Be(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Ki, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = ea, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = In, this.stencilZFail = In, this.stencilZPass = In, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
        }
        get alphaTest() {
            return this._alphaTest;
        }
        set alphaTest(e) {
            this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
        }
        onBuild() {}
        onBeforeRender() {}
        onBeforeCompile() {}
        customProgramCacheKey() {
            return this.onBeforeCompile.toString();
        }
        setValues(e) {
            if (e !== void 0) for(const t in e){
                const n = e[t];
                if (n === void 0) {
                    console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
                    continue;
                }
                const r = this[t];
                if (r === void 0) {
                    console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
                    continue;
                }
                r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
            }
        }
        toJSON(e) {
            const t = e === void 0 || typeof e == "string";
            t && (e = {
                textures: {},
                images: {}
            });
            const n = {
                metadata: {
                    version: 4.6,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Jn && (n.blending = this.blending), this.side !== pn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== jr && (n.blendSrc = this.blendSrc), this.blendDst !== Kr && (n.blendDst = this.blendDst), this.blendEquation !== Sn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Ki && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== ea && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== In && (n.stencilFail = this.stencilFail), this.stencilZFail !== In && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== In && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
            function r(s) {
                const o = [];
                for(const a in s){
                    const c = s[a];
                    delete c.metadata, o.push(c);
                }
                return o;
            }
            if (t) {
                const s = r(e.textures), o = r(e.images);
                s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
            }
            return n;
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(e) {
            this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
            const t = e.clippingPlanes;
            let n = null;
            if (t !== null) {
                const r = t.length;
                n = new Array(r);
                for(let s = 0; s !== r; ++s)n[s] = t[s].clone();
            }
            return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
        set needsUpdate(e) {
            e === !0 && this.version++;
        }
    }
    class xi extends ri {
        constructor(e){
            super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Be(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = io, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
        }
        copy(e) {
            return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
        }
    }
    const st = new P, Di = new be;
    class It {
        constructor(e, t, n = !1){
            if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = ta, this._updateRange = {
                offset: 0,
                count: -1
            }, this.updateRanges = [], this.gpuType = ln, this.version = 0;
        }
        onUploadCallback() {}
        set needsUpdate(e) {
            e === !0 && this.version++;
        }
        get updateRange() {
            return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
        }
        setUsage(e) {
            return this.usage = e, this;
        }
        addUpdateRange(e, t) {
            this.updateRanges.push({
                start: e,
                count: t
            });
        }
        clearUpdateRanges() {
            this.updateRanges.length = 0;
        }
        copy(e) {
            return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
        }
        copyAt(e, t, n) {
            e *= this.itemSize, n *= t.itemSize;
            for(let r = 0, s = this.itemSize; r < s; r++)this.array[e + r] = t.array[n + r];
            return this;
        }
        copyArray(e) {
            return this.array.set(e), this;
        }
        applyMatrix3(e) {
            if (this.itemSize === 2) for(let t = 0, n = this.count; t < n; t++)Di.fromBufferAttribute(this, t), Di.applyMatrix3(e), this.setXY(t, Di.x, Di.y);
            else if (this.itemSize === 3) for(let t = 0, n = this.count; t < n; t++)st.fromBufferAttribute(this, t), st.applyMatrix3(e), this.setXYZ(t, st.x, st.y, st.z);
            return this;
        }
        applyMatrix4(e) {
            for(let t = 0, n = this.count; t < n; t++)st.fromBufferAttribute(this, t), st.applyMatrix4(e), this.setXYZ(t, st.x, st.y, st.z);
            return this;
        }
        applyNormalMatrix(e) {
            for(let t = 0, n = this.count; t < n; t++)st.fromBufferAttribute(this, t), st.applyNormalMatrix(e), this.setXYZ(t, st.x, st.y, st.z);
            return this;
        }
        transformDirection(e) {
            for(let t = 0, n = this.count; t < n; t++)st.fromBufferAttribute(this, t), st.transformDirection(e), this.setXYZ(t, st.x, st.y, st.z);
            return this;
        }
        set(e, t = 0) {
            return this.array.set(e, t), this;
        }
        getComponent(e, t) {
            let n = this.array[e * this.itemSize + t];
            return this.normalized && (n = oi(n, this.array)), n;
        }
        setComponent(e, t, n) {
            return this.normalized && (n = Mt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
        }
        getX(e) {
            let t = this.array[e * this.itemSize];
            return this.normalized && (t = oi(t, this.array)), t;
        }
        setX(e, t) {
            return this.normalized && (t = Mt(t, this.array)), this.array[e * this.itemSize] = t, this;
        }
        getY(e) {
            let t = this.array[e * this.itemSize + 1];
            return this.normalized && (t = oi(t, this.array)), t;
        }
        setY(e, t) {
            return this.normalized && (t = Mt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
        }
        getZ(e) {
            let t = this.array[e * this.itemSize + 2];
            return this.normalized && (t = oi(t, this.array)), t;
        }
        setZ(e, t) {
            return this.normalized && (t = Mt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
        }
        getW(e) {
            let t = this.array[e * this.itemSize + 3];
            return this.normalized && (t = oi(t, this.array)), t;
        }
        setW(e, t) {
            return this.normalized && (t = Mt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
        }
        setXY(e, t, n) {
            return e *= this.itemSize, this.normalized && (t = Mt(t, this.array), n = Mt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
        }
        setXYZ(e, t, n, r) {
            return e *= this.itemSize, this.normalized && (t = Mt(t, this.array), n = Mt(n, this.array), r = Mt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
        }
        setXYZW(e, t, n, r, s) {
            return e *= this.itemSize, this.normalized && (t = Mt(t, this.array), n = Mt(n, this.array), r = Mt(r, this.array), s = Mt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
        }
        onUpload(e) {
            return this.onUploadCallback = e, this;
        }
        clone() {
            return new this.constructor(this.array, this.itemSize).copy(this);
        }
        toJSON() {
            const e = {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: Array.from(this.array),
                normalized: this.normalized
            };
            return this.name !== "" && (e.name = this.name), this.usage !== ta && (e.usage = this.usage), e;
        }
    }
    class So extends It {
        constructor(e, t, n){
            super(new Uint16Array(e), t, n);
        }
    }
    class Eo extends It {
        constructor(e, t, n){
            super(new Uint32Array(e), t, n);
        }
    }
    class ot extends It {
        constructor(e, t, n){
            super(new Float32Array(e), t, n);
        }
    }
    let rl = 0;
    const Pt = new it, Ur = new pt, Hn = new P, At = new _i, ui = new _i, ut = new P;
    class Tt extends Pn {
        constructor(){
            super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {
                value: rl++
            }), this.uuid = gi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                start: 0,
                count: 1 / 0
            }, this.userData = {};
        }
        getIndex() {
            return this.index;
        }
        setIndex(e) {
            return Array.isArray(e) ? this.index = new (_o(e) ? Eo : So)(e, 1) : this.index = e, this;
        }
        getAttribute(e) {
            return this.attributes[e];
        }
        setAttribute(e, t) {
            return this.attributes[e] = t, this;
        }
        deleteAttribute(e) {
            return delete this.attributes[e], this;
        }
        hasAttribute(e) {
            return this.attributes[e] !== void 0;
        }
        addGroup(e, t, n = 0) {
            this.groups.push({
                start: e,
                count: t,
                materialIndex: n
            });
        }
        clearGroups() {
            this.groups = [];
        }
        setDrawRange(e, t) {
            this.drawRange.start = e, this.drawRange.count = t;
        }
        applyMatrix4(e) {
            const t = this.attributes.position;
            t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
            const n = this.attributes.normal;
            if (n !== void 0) {
                const s = new He().getNormalMatrix(e);
                n.applyNormalMatrix(s), n.needsUpdate = !0;
            }
            const r = this.attributes.tangent;
            return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
        }
        applyQuaternion(e) {
            return Pt.makeRotationFromQuaternion(e), this.applyMatrix4(Pt), this;
        }
        rotateX(e) {
            return Pt.makeRotationX(e), this.applyMatrix4(Pt), this;
        }
        rotateY(e) {
            return Pt.makeRotationY(e), this.applyMatrix4(Pt), this;
        }
        rotateZ(e) {
            return Pt.makeRotationZ(e), this.applyMatrix4(Pt), this;
        }
        translate(e, t, n) {
            return Pt.makeTranslation(e, t, n), this.applyMatrix4(Pt), this;
        }
        scale(e, t, n) {
            return Pt.makeScale(e, t, n), this.applyMatrix4(Pt), this;
        }
        lookAt(e) {
            return Ur.lookAt(e), Ur.updateMatrix(), this.applyMatrix4(Ur.matrix), this;
        }
        center() {
            return this.computeBoundingBox(), this.boundingBox.getCenter(Hn).negate(), this.translate(Hn.x, Hn.y, Hn.z), this;
        }
        setFromPoints(e) {
            const t = [];
            for(let n = 0, r = e.length; n < r; n++){
                const s = e[n];
                t.push(s.x, s.y, s.z || 0);
            }
            return this.setAttribute("position", new ot(t, 3)), this;
        }
        computeBoundingBox() {
            this.boundingBox === null && (this.boundingBox = new _i);
            const e = this.attributes.position, t = this.morphAttributes.position;
            if (e && e.isGLBufferAttribute) {
                console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new P(-1 / 0, -1 / 0, -1 / 0), new P(1 / 0, 1 / 0, 1 / 0));
                return;
            }
            if (e !== void 0) {
                if (this.boundingBox.setFromBufferAttribute(e), t) for(let n = 0, r = t.length; n < r; n++){
                    const s = t[n];
                    At.setFromBufferAttribute(s), this.morphTargetsRelative ? (ut.addVectors(this.boundingBox.min, At.min), this.boundingBox.expandByPoint(ut), ut.addVectors(this.boundingBox.max, At.max), this.boundingBox.expandByPoint(ut)) : (this.boundingBox.expandByPoint(At.min), this.boundingBox.expandByPoint(At.max));
                }
            } else this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
        }
        computeBoundingSphere() {
            this.boundingSphere === null && (this.boundingSphere = new sr);
            const e = this.attributes.position, t = this.morphAttributes.position;
            if (e && e.isGLBufferAttribute) {
                console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new P, 1 / 0);
                return;
            }
            if (e) {
                const n = this.boundingSphere.center;
                if (At.setFromBufferAttribute(e), t) for(let s = 0, o = t.length; s < o; s++){
                    const a = t[s];
                    ui.setFromBufferAttribute(a), this.morphTargetsRelative ? (ut.addVectors(At.min, ui.min), At.expandByPoint(ut), ut.addVectors(At.max, ui.max), At.expandByPoint(ut)) : (At.expandByPoint(ui.min), At.expandByPoint(ui.max));
                }
                At.getCenter(n);
                let r = 0;
                for(let s = 0, o = e.count; s < o; s++)ut.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(ut));
                if (t) for(let s = 0, o = t.length; s < o; s++){
                    const a = t[s], c = this.morphTargetsRelative;
                    for(let l = 0, h = a.count; l < h; l++)ut.fromBufferAttribute(a, l), c && (Hn.fromBufferAttribute(e, l), ut.add(Hn)), r = Math.max(r, n.distanceToSquared(ut));
                }
                this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
            }
        }
        computeTangents() {
            const e = this.index, t = this.attributes;
            if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
                console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
                return;
            }
            const n = e.array, r = t.position.array, s = t.normal.array, o = t.uv.array, a = r.length / 3;
            this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new It(new Float32Array(4 * a), 4));
            const c = this.getAttribute("tangent").array, l = [], h = [];
            for(let T = 0; T < a; T++)l[T] = new P, h[T] = new P;
            const d = new P, p = new P, m = new P, g = new be, _ = new be, f = new be, u = new P, S = new P;
            function y(T, z, H) {
                d.fromArray(r, T * 3), p.fromArray(r, z * 3), m.fromArray(r, H * 3), g.fromArray(o, T * 2), _.fromArray(o, z * 2), f.fromArray(o, H * 2), p.sub(d), m.sub(d), _.sub(g), f.sub(g);
                const Q = 1 / (_.x * f.y - f.x * _.y);
                isFinite(Q) && (u.copy(p).multiplyScalar(f.y).addScaledVector(m, -_.y).multiplyScalar(Q), S.copy(m).multiplyScalar(_.x).addScaledVector(p, -f.x).multiplyScalar(Q), l[T].add(u), l[z].add(u), l[H].add(u), h[T].add(S), h[z].add(S), h[H].add(S));
            }
            let b = this.groups;
            b.length === 0 && (b = [
                {
                    start: 0,
                    count: n.length
                }
            ]);
            for(let T = 0, z = b.length; T < z; ++T){
                const H = b[T], Q = H.start, D = H.count;
                for(let F = Q, V = Q + D; F < V; F += 3)y(n[F + 0], n[F + 1], n[F + 2]);
            }
            const L = new P, R = new P, A = new P, G = new P;
            function x(T) {
                A.fromArray(s, T * 3), G.copy(A);
                const z = l[T];
                L.copy(z), L.sub(A.multiplyScalar(A.dot(z))).normalize(), R.crossVectors(G, z);
                const Q = R.dot(h[T]) < 0 ? -1 : 1;
                c[T * 4] = L.x, c[T * 4 + 1] = L.y, c[T * 4 + 2] = L.z, c[T * 4 + 3] = Q;
            }
            for(let T = 0, z = b.length; T < z; ++T){
                const H = b[T], Q = H.start, D = H.count;
                for(let F = Q, V = Q + D; F < V; F += 3)x(n[F + 0]), x(n[F + 1]), x(n[F + 2]);
            }
        }
        computeVertexNormals() {
            const e = this.index, t = this.getAttribute("position");
            if (t !== void 0) {
                let n = this.getAttribute("normal");
                if (n === void 0) n = new It(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
                else for(let p = 0, m = n.count; p < m; p++)n.setXYZ(p, 0, 0, 0);
                const r = new P, s = new P, o = new P, a = new P, c = new P, l = new P, h = new P, d = new P;
                if (e) for(let p = 0, m = e.count; p < m; p += 3){
                    const g = e.getX(p + 0), _ = e.getX(p + 1), f = e.getX(p + 2);
                    r.fromBufferAttribute(t, g), s.fromBufferAttribute(t, _), o.fromBufferAttribute(t, f), h.subVectors(o, s), d.subVectors(r, s), h.cross(d), a.fromBufferAttribute(n, g), c.fromBufferAttribute(n, _), l.fromBufferAttribute(n, f), a.add(h), c.add(h), l.add(h), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(_, c.x, c.y, c.z), n.setXYZ(f, l.x, l.y, l.z);
                }
                else for(let p = 0, m = t.count; p < m; p += 3)r.fromBufferAttribute(t, p + 0), s.fromBufferAttribute(t, p + 1), o.fromBufferAttribute(t, p + 2), h.subVectors(o, s), d.subVectors(r, s), h.cross(d), n.setXYZ(p + 0, h.x, h.y, h.z), n.setXYZ(p + 1, h.x, h.y, h.z), n.setXYZ(p + 2, h.x, h.y, h.z);
                this.normalizeNormals(), n.needsUpdate = !0;
            }
        }
        normalizeNormals() {
            const e = this.attributes.normal;
            for(let t = 0, n = e.count; t < n; t++)ut.fromBufferAttribute(e, t), ut.normalize(), e.setXYZ(t, ut.x, ut.y, ut.z);
        }
        toNonIndexed() {
            function e(a, c) {
                const l = a.array, h = a.itemSize, d = a.normalized, p = new l.constructor(c.length * h);
                let m = 0, g = 0;
                for(let _ = 0, f = c.length; _ < f; _++){
                    a.isInterleavedBufferAttribute ? m = c[_] * a.data.stride + a.offset : m = c[_] * h;
                    for(let u = 0; u < h; u++)p[g++] = l[m++];
                }
                return new It(p, h, d);
            }
            if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
            const t = new Tt, n = this.index.array, r = this.attributes;
            for(const a in r){
                const c = r[a], l = e(c, n);
                t.setAttribute(a, l);
            }
            const s = this.morphAttributes;
            for(const a in s){
                const c = [], l = s[a];
                for(let h = 0, d = l.length; h < d; h++){
                    const p = l[h], m = e(p, n);
                    c.push(m);
                }
                t.morphAttributes[a] = c;
            }
            t.morphTargetsRelative = this.morphTargetsRelative;
            const o = this.groups;
            for(let a = 0, c = o.length; a < c; a++){
                const l = o[a];
                t.addGroup(l.start, l.count, l.materialIndex);
            }
            return t;
        }
        toJSON() {
            const e = {
                metadata: {
                    version: 4.6,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
                const c = this.parameters;
                for(const l in c)c[l] !== void 0 && (e[l] = c[l]);
                return e;
            }
            e.data = {
                attributes: {}
            };
            const t = this.index;
            t !== null && (e.data.index = {
                type: t.array.constructor.name,
                array: Array.prototype.slice.call(t.array)
            });
            const n = this.attributes;
            for(const c in n){
                const l = n[c];
                e.data.attributes[c] = l.toJSON(e.data);
            }
            const r = {};
            let s = !1;
            for(const c in this.morphAttributes){
                const l = this.morphAttributes[c], h = [];
                for(let d = 0, p = l.length; d < p; d++){
                    const m = l[d];
                    h.push(m.toJSON(e.data));
                }
                h.length > 0 && (r[c] = h, s = !0);
            }
            s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
            const o = this.groups;
            o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
            const a = this.boundingSphere;
            return a !== null && (e.data.boundingSphere = {
                center: a.center.toArray(),
                radius: a.radius
            }), e;
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(e) {
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
            const t = {};
            this.name = e.name;
            const n = e.index;
            n !== null && this.setIndex(n.clone(t));
            const r = e.attributes;
            for(const l in r){
                const h = r[l];
                this.setAttribute(l, h.clone(t));
            }
            const s = e.morphAttributes;
            for(const l in s){
                const h = [], d = s[l];
                for(let p = 0, m = d.length; p < m; p++)h.push(d[p].clone(t));
                this.morphAttributes[l] = h;
            }
            this.morphTargetsRelative = e.morphTargetsRelative;
            const o = e.groups;
            for(let l = 0, h = o.length; l < h; l++){
                const d = o[l];
                this.addGroup(d.start, d.count, d.materialIndex);
            }
            const a = e.boundingBox;
            a !== null && (this.boundingBox = a.clone());
            const c = e.boundingSphere;
            return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    const ma = new it, xn = new ar, Ii = new sr, ga = new P, Vn = new P, Wn = new P, Xn = new P, Nr = new P, Ui = new P, Ni = new be, Fi = new be, Oi = new be, _a = new P, va = new P, xa = new P, Bi = new P, zi = new P;
    class at extends pt {
        constructor(e = new Tt, t = new xi){
            super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
        }
        copy(e, t) {
            return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
        }
        updateMorphTargets() {
            const t = this.geometry.morphAttributes, n = Object.keys(t);
            if (n.length > 0) {
                const r = t[n[0]];
                if (r !== void 0) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for(let s = 0, o = r.length; s < o; s++){
                        const a = r[s].name || String(s);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
                    }
                }
            }
        }
        getVertexPosition(e, t) {
            const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, o = n.morphTargetsRelative;
            t.fromBufferAttribute(r, e);
            const a = this.morphTargetInfluences;
            if (s && a) {
                Ui.set(0, 0, 0);
                for(let c = 0, l = s.length; c < l; c++){
                    const h = a[c], d = s[c];
                    h !== 0 && (Nr.fromBufferAttribute(d, e), o ? Ui.addScaledVector(Nr, h) : Ui.addScaledVector(Nr.sub(t), h));
                }
                t.add(Ui);
            }
            return t;
        }
        raycast(e, t) {
            const n = this.geometry, r = this.material, s = this.matrixWorld;
            r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Ii.copy(n.boundingSphere), Ii.applyMatrix4(s), xn.copy(e.ray).recast(e.near), !(Ii.containsPoint(xn.origin) === !1 && (xn.intersectSphere(Ii, ga) === null || xn.origin.distanceToSquared(ga) > (e.far - e.near) ** 2)) && (ma.copy(s).invert(), xn.copy(e.ray).applyMatrix4(ma), !(n.boundingBox !== null && xn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, xn)));
        }
        _computeIntersections(e, t, n) {
            let r;
            const s = this.geometry, o = this.material, a = s.index, c = s.attributes.position, l = s.attributes.uv, h = s.attributes.uv1, d = s.attributes.normal, p = s.groups, m = s.drawRange;
            if (a !== null) if (Array.isArray(o)) for(let g = 0, _ = p.length; g < _; g++){
                const f = p[g], u = o[f.materialIndex], S = Math.max(f.start, m.start), y = Math.min(a.count, Math.min(f.start + f.count, m.start + m.count));
                for(let b = S, L = y; b < L; b += 3){
                    const R = a.getX(b), A = a.getX(b + 1), G = a.getX(b + 2);
                    r = ki(this, u, e, n, l, h, d, R, A, G), r && (r.faceIndex = Math.floor(b / 3), r.face.materialIndex = f.materialIndex, t.push(r));
                }
            }
            else {
                const g = Math.max(0, m.start), _ = Math.min(a.count, m.start + m.count);
                for(let f = g, u = _; f < u; f += 3){
                    const S = a.getX(f), y = a.getX(f + 1), b = a.getX(f + 2);
                    r = ki(this, o, e, n, l, h, d, S, y, b), r && (r.faceIndex = Math.floor(f / 3), t.push(r));
                }
            }
            else if (c !== void 0) if (Array.isArray(o)) for(let g = 0, _ = p.length; g < _; g++){
                const f = p[g], u = o[f.materialIndex], S = Math.max(f.start, m.start), y = Math.min(c.count, Math.min(f.start + f.count, m.start + m.count));
                for(let b = S, L = y; b < L; b += 3){
                    const R = b, A = b + 1, G = b + 2;
                    r = ki(this, u, e, n, l, h, d, R, A, G), r && (r.faceIndex = Math.floor(b / 3), r.face.materialIndex = f.materialIndex, t.push(r));
                }
            }
            else {
                const g = Math.max(0, m.start), _ = Math.min(c.count, m.start + m.count);
                for(let f = g, u = _; f < u; f += 3){
                    const S = f, y = f + 1, b = f + 2;
                    r = ki(this, o, e, n, l, h, d, S, y, b), r && (r.faceIndex = Math.floor(f / 3), t.push(r));
                }
            }
        }
    }
    function sl(i, e, t, n, r, s, o, a) {
        let c;
        if (e.side === St ? c = n.intersectTriangle(o, s, r, !0, a) : c = n.intersectTriangle(r, s, o, e.side === pn, a), c === null) return null;
        zi.copy(a), zi.applyMatrix4(i.matrixWorld);
        const l = t.ray.origin.distanceTo(zi);
        return l < t.near || l > t.far ? null : {
            distance: l,
            point: zi.clone(),
            object: i
        };
    }
    function ki(i, e, t, n, r, s, o, a, c, l) {
        i.getVertexPosition(a, Vn), i.getVertexPosition(c, Wn), i.getVertexPosition(l, Xn);
        const h = sl(i, e, t, n, Vn, Wn, Xn, Bi);
        if (h) {
            r && (Ni.fromBufferAttribute(r, a), Fi.fromBufferAttribute(r, c), Oi.fromBufferAttribute(r, l), h.uv = Ot.getInterpolation(Bi, Vn, Wn, Xn, Ni, Fi, Oi, new be)), s && (Ni.fromBufferAttribute(s, a), Fi.fromBufferAttribute(s, c), Oi.fromBufferAttribute(s, l), h.uv1 = Ot.getInterpolation(Bi, Vn, Wn, Xn, Ni, Fi, Oi, new be), h.uv2 = h.uv1), o && (_a.fromBufferAttribute(o, a), va.fromBufferAttribute(o, c), xa.fromBufferAttribute(o, l), h.normal = Ot.getInterpolation(Bi, Vn, Wn, Xn, _a, va, xa, new P), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
            const d = {
                a,
                b: c,
                c: l,
                normal: new P,
                materialIndex: 0
            };
            Ot.getNormal(Vn, Wn, Xn, d.normal), h.face = d;
        }
        return h;
    }
    class Qt extends Tt {
        constructor(e = 1, t = 1, n = 1, r = 1, s = 1, o = 1){
            super(), this.type = "BoxGeometry", this.parameters = {
                width: e,
                height: t,
                depth: n,
                widthSegments: r,
                heightSegments: s,
                depthSegments: o
            };
            const a = this;
            r = Math.floor(r), s = Math.floor(s), o = Math.floor(o);
            const c = [], l = [], h = [], d = [];
            let p = 0, m = 0;
            g("z", "y", "x", -1, -1, n, t, e, o, s, 0), g("z", "y", "x", 1, -1, n, t, -e, o, s, 1), g("x", "z", "y", 1, 1, e, n, t, r, o, 2), g("x", "z", "y", 1, -1, e, n, -t, r, o, 3), g("x", "y", "z", 1, -1, e, t, n, r, s, 4), g("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(c), this.setAttribute("position", new ot(l, 3)), this.setAttribute("normal", new ot(h, 3)), this.setAttribute("uv", new ot(d, 2));
            function g(_, f, u, S, y, b, L, R, A, G, x) {
                const T = b / A, z = L / G, H = b / 2, Q = L / 2, D = R / 2, F = A + 1, V = G + 1;
                let Y = 0, X = 0;
                const q = new P;
                for(let j = 0; j < V; j++){
                    const re = j * z - Q;
                    for(let se = 0; se < F; se++){
                        const W = se * T - H;
                        q[_] = W * S, q[f] = re * y, q[u] = D, l.push(q.x, q.y, q.z), q[_] = 0, q[f] = 0, q[u] = R > 0 ? 1 : -1, h.push(q.x, q.y, q.z), d.push(se / A), d.push(1 - j / G), Y += 1;
                    }
                }
                for(let j = 0; j < G; j++)for(let re = 0; re < A; re++){
                    const se = p + re + F * j, W = p + re + F * (j + 1), K = p + (re + 1) + F * (j + 1), le = p + (re + 1) + F * j;
                    c.push(se, W, le), c.push(W, K, le), X += 6;
                }
                a.addGroup(m, X, x), m += X, p += Y;
            }
        }
        copy(e) {
            return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
        }
        static fromJSON(e) {
            return new Qt(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
        }
    }
    function ii(i) {
        const e = {};
        for(const t in i){
            e[t] = {};
            for(const n in i[t]){
                const r = i[t][n];
                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r;
            }
        }
        return e;
    }
    function xt(i) {
        const e = {};
        for(let t = 0; t < i.length; t++){
            const n = ii(i[t]);
            for(const r in n)e[r] = n[r];
        }
        return e;
    }
    function al(i) {
        const e = [];
        for(let t = 0; t < i.length; t++)e.push(i[t].clone());
        return e;
    }
    function To(i) {
        return i.getRenderTarget() === null ? i.outputColorSpace : je.workingColorSpace;
    }
    const ol = {
        clone: ii,
        merge: xt
    };
    var cl = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, ll = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
    class Cn extends ri {
        constructor(e){
            super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = cl, this.fragmentShader = ll, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
                derivatives: !1,
                fragDepth: !1,
                drawBuffers: !1,
                shaderTextureLOD: !1,
                clipCullDistance: !1
            }, this.defaultAttributeValues = {
                color: [
                    1,
                    1,
                    1
                ],
                uv: [
                    0,
                    0
                ],
                uv1: [
                    0,
                    0
                ]
            }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
        }
        copy(e) {
            return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ii(e.uniforms), this.uniformsGroups = al(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
        }
        toJSON(e) {
            const t = super.toJSON(e);
            t.glslVersion = this.glslVersion, t.uniforms = {};
            for(const r in this.uniforms){
                const o = this.uniforms[r].value;
                o && o.isTexture ? t.uniforms[r] = {
                    type: "t",
                    value: o.toJSON(e).uuid
                } : o && o.isColor ? t.uniforms[r] = {
                    type: "c",
                    value: o.getHex()
                } : o && o.isVector2 ? t.uniforms[r] = {
                    type: "v2",
                    value: o.toArray()
                } : o && o.isVector3 ? t.uniforms[r] = {
                    type: "v3",
                    value: o.toArray()
                } : o && o.isVector4 ? t.uniforms[r] = {
                    type: "v4",
                    value: o.toArray()
                } : o && o.isMatrix3 ? t.uniforms[r] = {
                    type: "m3",
                    value: o.toArray()
                } : o && o.isMatrix4 ? t.uniforms[r] = {
                    type: "m4",
                    value: o.toArray()
                } : t.uniforms[r] = {
                    value: o
                };
            }
            Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
            const n = {};
            for(const r in this.extensions)this.extensions[r] === !0 && (n[r] = !0);
            return Object.keys(n).length > 0 && (t.extensions = n), t;
        }
    }
    class bo extends pt {
        constructor(){
            super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new it, this.projectionMatrix = new it, this.projectionMatrixInverse = new it, this.coordinateSystem = Jt;
        }
        copy(e, t) {
            return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
        }
        getWorldDirection(e) {
            return super.getWorldDirection(e).negate();
        }
        updateMatrixWorld(e) {
            super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        updateWorldMatrix(e, t) {
            super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        clone() {
            return new this.constructor().copy(this);
        }
    }
    class Rt extends bo {
        constructor(e = 50, t = 1, n = .1, r = 2e3){
            super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
        }
        copy(e, t) {
            return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
        }
        setFocalLength(e) {
            const t = .5 * this.getFilmHeight() / e;
            this.fov = ts * 2 * Math.atan(t), this.updateProjectionMatrix();
        }
        getFocalLength() {
            const e = Math.tan(Yi * .5 * this.fov);
            return .5 * this.getFilmHeight() / e;
        }
        getEffectiveFOV() {
            return ts * 2 * Math.atan(Math.tan(Yi * .5 * this.fov) / this.zoom);
        }
        getFilmWidth() {
            return this.filmGauge * Math.min(this.aspect, 1);
        }
        getFilmHeight() {
            return this.filmGauge / Math.max(this.aspect, 1);
        }
        setViewOffset(e, t, n, r, s, o) {
            this.aspect = e / t, this.view === null && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
        }
        clearViewOffset() {
            this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
            const e = this.near;
            let t = e * Math.tan(Yi * .5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -.5 * r;
            const o = this.view;
            if (this.view !== null && this.view.enabled) {
                const c = o.fullWidth, l = o.fullHeight;
                s += o.offsetX * r / c, t -= o.offsetY * n / l, r *= o.width / c, n *= o.height / l;
            }
            const a = this.filmOffset;
            a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(e) {
            const t = super.toJSON(e);
            return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
        }
    }
    const qn = -90, Yn = 1;
    class hl extends pt {
        constructor(e, t, n){
            super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
            const r = new Rt(qn, Yn, e, t);
            r.layers = this.layers, this.add(r);
            const s = new Rt(qn, Yn, e, t);
            s.layers = this.layers, this.add(s);
            const o = new Rt(qn, Yn, e, t);
            o.layers = this.layers, this.add(o);
            const a = new Rt(qn, Yn, e, t);
            a.layers = this.layers, this.add(a);
            const c = new Rt(qn, Yn, e, t);
            c.layers = this.layers, this.add(c);
            const l = new Rt(qn, Yn, e, t);
            l.layers = this.layers, this.add(l);
        }
        updateCoordinateSystem() {
            const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, o, a, c] = t;
            for (const l of t)this.remove(l);
            if (e === Jt) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
            else if (e === Qi) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
            else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
            for (const l of t)this.add(l), l.updateMatrixWorld();
        }
        update(e, t) {
            this.parent === null && this.updateMatrixWorld();
            const { renderTarget: n, activeMipmapLevel: r } = this;
            this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
            const [s, o, a, c, l, h] = this.children, d = e.getRenderTarget(), p = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), g = e.xr.enabled;
            e.xr.enabled = !1;
            const _ = n.texture.generateMipmaps;
            n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, r), e.render(t, s), e.setRenderTarget(n, 1, r), e.render(t, o), e.setRenderTarget(n, 2, r), e.render(t, a), e.setRenderTarget(n, 3, r), e.render(t, c), e.setRenderTarget(n, 4, r), e.render(t, l), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, r), e.render(t, h), e.setRenderTarget(d, p, m), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
        }
    }
    class wo extends Et {
        constructor(e, t, n, r, s, o, a, c, l, h){
            e = e !== void 0 ? e : [], t = t !== void 0 ? t : ei, super(e, t, n, r, s, o, a, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
        }
        get images() {
            return this.image;
        }
        set images(e) {
            this.image = e;
        }
    }
    class ul extends An {
        constructor(e = 1, t = {}){
            super(e, e, t), this.isWebGLCubeRenderTarget = !0;
            const n = {
                width: e,
                height: e,
                depth: 1
            }, r = [
                n,
                n,
                n,
                n,
                n,
                n
            ];
            t.encoding !== void 0 && (fi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === wn ? ft : Dt), this.texture = new wo(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Lt;
        }
        fromEquirectangularTexture(e, t) {
            this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
            const n = {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
                fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
            }, r = new Qt(5, 5, 5), s = new Cn({
                name: "CubemapFromEquirect",
                uniforms: ii(n.uniforms),
                vertexShader: n.vertexShader,
                fragmentShader: n.fragmentShader,
                side: St,
                blending: un
            });
            s.uniforms.tEquirect.value = t;
            const o = new at(r, s), a = t.minFilter;
            return t.minFilter === pi && (t.minFilter = Lt), new hl(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
        }
        clear(e, t, n, r) {
            const s = e.getRenderTarget();
            for(let o = 0; o < 6; o++)e.setRenderTarget(this, o), e.clear(t, n, r);
            e.setRenderTarget(s);
        }
    }
    const Fr = new P, dl = new P, fl = new He;
    class on {
        constructor(e = new P(1, 0, 0), t = 0){
            this.isPlane = !0, this.normal = e, this.constant = t;
        }
        set(e, t) {
            return this.normal.copy(e), this.constant = t, this;
        }
        setComponents(e, t, n, r) {
            return this.normal.set(e, t, n), this.constant = r, this;
        }
        setFromNormalAndCoplanarPoint(e, t) {
            return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
        }
        setFromCoplanarPoints(e, t, n) {
            const r = Fr.subVectors(n, t).cross(dl.subVectors(e, t)).normalize();
            return this.setFromNormalAndCoplanarPoint(r, e), this;
        }
        copy(e) {
            return this.normal.copy(e.normal), this.constant = e.constant, this;
        }
        normalize() {
            const e = 1 / this.normal.length();
            return this.normal.multiplyScalar(e), this.constant *= e, this;
        }
        negate() {
            return this.constant *= -1, this.normal.negate(), this;
        }
        distanceToPoint(e) {
            return this.normal.dot(e) + this.constant;
        }
        distanceToSphere(e) {
            return this.distanceToPoint(e.center) - e.radius;
        }
        projectPoint(e, t) {
            return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
        }
        intersectLine(e, t) {
            const n = e.delta(Fr), r = this.normal.dot(n);
            if (r === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
            const s = -(e.start.dot(this.normal) + this.constant) / r;
            return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
        }
        intersectsLine(e) {
            const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
            return t < 0 && n > 0 || n < 0 && t > 0;
        }
        intersectsBox(e) {
            return e.intersectsPlane(this);
        }
        intersectsSphere(e) {
            return e.intersectsPlane(this);
        }
        coplanarPoint(e) {
            return e.copy(this.normal).multiplyScalar(-this.constant);
        }
        applyMatrix4(e, t) {
            const n = t || fl.getNormalMatrix(e), r = this.coplanarPoint(Fr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
            return this.constant = -r.dot(s), this;
        }
        translate(e) {
            return this.constant -= e.dot(this.normal), this;
        }
        equals(e) {
            return e.normal.equals(this.normal) && e.constant === this.constant;
        }
        clone() {
            return new this.constructor().copy(this);
        }
    }
    const yn = new sr, Gi = new P;
    class hs {
        constructor(e = new on, t = new on, n = new on, r = new on, s = new on, o = new on){
            this.planes = [
                e,
                t,
                n,
                r,
                s,
                o
            ];
        }
        set(e, t, n, r, s, o) {
            const a = this.planes;
            return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(r), a[4].copy(s), a[5].copy(o), this;
        }
        copy(e) {
            const t = this.planes;
            for(let n = 0; n < 6; n++)t[n].copy(e.planes[n]);
            return this;
        }
        setFromProjectionMatrix(e, t = Jt) {
            const n = this.planes, r = e.elements, s = r[0], o = r[1], a = r[2], c = r[3], l = r[4], h = r[5], d = r[6], p = r[7], m = r[8], g = r[9], _ = r[10], f = r[11], u = r[12], S = r[13], y = r[14], b = r[15];
            if (n[0].setComponents(c - s, p - l, f - m, b - u).normalize(), n[1].setComponents(c + s, p + l, f + m, b + u).normalize(), n[2].setComponents(c + o, p + h, f + g, b + S).normalize(), n[3].setComponents(c - o, p - h, f - g, b - S).normalize(), n[4].setComponents(c - a, p - d, f - _, b - y).normalize(), t === Jt) n[5].setComponents(c + a, p + d, f + _, b + y).normalize();
            else if (t === Qi) n[5].setComponents(a, d, _, y).normalize();
            else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
            return this;
        }
        intersectsObject(e) {
            if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
            else {
                const t = e.geometry;
                t.boundingSphere === null && t.computeBoundingSphere(), yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
            }
            return this.intersectsSphere(yn);
        }
        intersectsSprite(e) {
            return yn.center.set(0, 0, 0), yn.radius = .7071067811865476, yn.applyMatrix4(e.matrixWorld), this.intersectsSphere(yn);
        }
        intersectsSphere(e) {
            const t = this.planes, n = e.center, r = -e.radius;
            for(let s = 0; s < 6; s++)if (t[s].distanceToPoint(n) < r) return !1;
            return !0;
        }
        intersectsBox(e) {
            const t = this.planes;
            for(let n = 0; n < 6; n++){
                const r = t[n];
                if (Gi.x = r.normal.x > 0 ? e.max.x : e.min.x, Gi.y = r.normal.y > 0 ? e.max.y : e.min.y, Gi.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Gi) < 0) return !1;
            }
            return !0;
        }
        containsPoint(e) {
            const t = this.planes;
            for(let n = 0; n < 6; n++)if (t[n].distanceToPoint(e) < 0) return !1;
            return !0;
        }
        clone() {
            return new this.constructor().copy(this);
        }
    }
    function Ao() {
        let i = null, e = !1, t = null, n = null;
        function r(s, o) {
            t(s, o), n = i.requestAnimationFrame(r);
        }
        return {
            start: function() {
                e !== !0 && t !== null && (n = i.requestAnimationFrame(r), e = !0);
            },
            stop: function() {
                i.cancelAnimationFrame(n), e = !1;
            },
            setAnimationLoop: function(s) {
                t = s;
            },
            setContext: function(s) {
                i = s;
            }
        };
    }
    function pl(i, e) {
        const t = e.isWebGL2, n = new WeakMap;
        function r(l, h) {
            const d = l.array, p = l.usage, m = d.byteLength, g = i.createBuffer();
            i.bindBuffer(h, g), i.bufferData(h, d, p), l.onUploadCallback();
            let _;
            if (d instanceof Float32Array) _ = i.FLOAT;
            else if (d instanceof Uint16Array) if (l.isFloat16BufferAttribute) if (t) _ = i.HALF_FLOAT;
            else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
            else _ = i.UNSIGNED_SHORT;
            else if (d instanceof Int16Array) _ = i.SHORT;
            else if (d instanceof Uint32Array) _ = i.UNSIGNED_INT;
            else if (d instanceof Int32Array) _ = i.INT;
            else if (d instanceof Int8Array) _ = i.BYTE;
            else if (d instanceof Uint8Array) _ = i.UNSIGNED_BYTE;
            else if (d instanceof Uint8ClampedArray) _ = i.UNSIGNED_BYTE;
            else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + d);
            return {
                buffer: g,
                type: _,
                bytesPerElement: d.BYTES_PER_ELEMENT,
                version: l.version,
                size: m
            };
        }
        function s(l, h, d) {
            const p = h.array, m = h._updateRange, g = h.updateRanges;
            if (i.bindBuffer(d, l), m.count === -1 && g.length === 0 && i.bufferSubData(d, 0, p), g.length !== 0) {
                for(let _ = 0, f = g.length; _ < f; _++){
                    const u = g[_];
                    t ? i.bufferSubData(d, u.start * p.BYTES_PER_ELEMENT, p, u.start, u.count) : i.bufferSubData(d, u.start * p.BYTES_PER_ELEMENT, p.subarray(u.start, u.start + u.count));
                }
                h.clearUpdateRanges();
            }
            m.count !== -1 && (t ? i.bufferSubData(d, m.offset * p.BYTES_PER_ELEMENT, p, m.offset, m.count) : i.bufferSubData(d, m.offset * p.BYTES_PER_ELEMENT, p.subarray(m.offset, m.offset + m.count)), m.count = -1), h.onUploadCallback();
        }
        function o(l) {
            return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
        }
        function a(l) {
            l.isInterleavedBufferAttribute && (l = l.data);
            const h = n.get(l);
            h && (i.deleteBuffer(h.buffer), n.delete(l));
        }
        function c(l, h) {
            if (l.isGLBufferAttribute) {
                const p = n.get(l);
                (!p || p.version < l.version) && n.set(l, {
                    buffer: l.buffer,
                    type: l.type,
                    bytesPerElement: l.elementSize,
                    version: l.version
                });
                return;
            }
            l.isInterleavedBufferAttribute && (l = l.data);
            const d = n.get(l);
            if (d === void 0) n.set(l, r(l, h));
            else if (d.version < l.version) {
                if (d.size !== l.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
                s(d.buffer, l, h), d.version = l.version;
            }
        }
        return {
            get: o,
            remove: a,
            update: c
        };
    }
    class or extends Tt {
        constructor(e = 1, t = 1, n = 1, r = 1){
            super(), this.type = "PlaneGeometry", this.parameters = {
                width: e,
                height: t,
                widthSegments: n,
                heightSegments: r
            };
            const s = e / 2, o = t / 2, a = Math.floor(n), c = Math.floor(r), l = a + 1, h = c + 1, d = e / a, p = t / c, m = [], g = [], _ = [], f = [];
            for(let u = 0; u < h; u++){
                const S = u * p - o;
                for(let y = 0; y < l; y++){
                    const b = y * d - s;
                    g.push(b, -S, 0), _.push(0, 0, 1), f.push(y / a), f.push(1 - u / c);
                }
            }
            for(let u = 0; u < c; u++)for(let S = 0; S < a; S++){
                const y = S + l * u, b = S + l * (u + 1), L = S + 1 + l * (u + 1), R = S + 1 + l * u;
                m.push(y, b, R), m.push(b, L, R);
            }
            this.setIndex(m), this.setAttribute("position", new ot(g, 3)), this.setAttribute("normal", new ot(_, 3)), this.setAttribute("uv", new ot(f, 2));
        }
        copy(e) {
            return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
        }
        static fromJSON(e) {
            return new or(e.width, e.height, e.widthSegments, e.heightSegments);
        }
    }
    var ml = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, gl = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, _l = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, vl = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, xl = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, yl = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Ml = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Sl = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, El = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Tl = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`, bl = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, wl = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Al = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Rl = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Cl = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Pl = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, Ll = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Dl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Il = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Ul = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Nl = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Fl = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Ol = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Bl = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, zl = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, kl = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Gl = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Hl = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Vl = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Wl = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Xl = "gl_FragColor = linearToOutputTexel( gl_FragColor );", ql = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`, Yl = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, jl = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Kl = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, $l = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Zl = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Jl = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Ql = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, eh = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, th = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, nh = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, ih = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, rh = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, sh = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, ah = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, oh = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, ch = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, lh = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, hh = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, uh = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, dh = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, fh = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, ph = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, mh = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, gh = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, _h = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, vh = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, xh = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, yh = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Mh = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Sh = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Eh = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Th = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, bh = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, wh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Ah = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Rh = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Ch = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, Ph = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, Lh = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, Dh = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Ih = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Uh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Nh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Fh = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Oh = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Bh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, zh = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, kh = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Gh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Hh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Vh = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Wh = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Xh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, qh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Yh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, jh = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Kh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, $h = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, Zh = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Jh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Qh = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, eu = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, tu = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, nu = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, iu = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, ru = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, su = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, au = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, ou = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, cu = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, lu = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, hu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, uu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, du = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, fu = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
    const pu = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, mu = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, gu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, _u = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, vu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, xu = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, yu = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Mu = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, Su = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Eu = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Tu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, bu = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, wu = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Au = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Ru = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Cu = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Pu = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Lu = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Du = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Iu = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Uu = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Nu = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Fu = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Ou = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Bu = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, zu = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ku = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Gu = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Hu = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Vu = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Wu = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Xu = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, qu = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Yu = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Oe = {
        alphahash_fragment: ml,
        alphahash_pars_fragment: gl,
        alphamap_fragment: _l,
        alphamap_pars_fragment: vl,
        alphatest_fragment: xl,
        alphatest_pars_fragment: yl,
        aomap_fragment: Ml,
        aomap_pars_fragment: Sl,
        batching_pars_vertex: El,
        batching_vertex: Tl,
        begin_vertex: bl,
        beginnormal_vertex: wl,
        bsdfs: Al,
        iridescence_fragment: Rl,
        bumpmap_pars_fragment: Cl,
        clipping_planes_fragment: Pl,
        clipping_planes_pars_fragment: Ll,
        clipping_planes_pars_vertex: Dl,
        clipping_planes_vertex: Il,
        color_fragment: Ul,
        color_pars_fragment: Nl,
        color_pars_vertex: Fl,
        color_vertex: Ol,
        common: Bl,
        cube_uv_reflection_fragment: zl,
        defaultnormal_vertex: kl,
        displacementmap_pars_vertex: Gl,
        displacementmap_vertex: Hl,
        emissivemap_fragment: Vl,
        emissivemap_pars_fragment: Wl,
        colorspace_fragment: Xl,
        colorspace_pars_fragment: ql,
        envmap_fragment: Yl,
        envmap_common_pars_fragment: jl,
        envmap_pars_fragment: Kl,
        envmap_pars_vertex: $l,
        envmap_physical_pars_fragment: ch,
        envmap_vertex: Zl,
        fog_vertex: Jl,
        fog_pars_vertex: Ql,
        fog_fragment: eh,
        fog_pars_fragment: th,
        gradientmap_pars_fragment: nh,
        lightmap_fragment: ih,
        lightmap_pars_fragment: rh,
        lights_lambert_fragment: sh,
        lights_lambert_pars_fragment: ah,
        lights_pars_begin: oh,
        lights_toon_fragment: lh,
        lights_toon_pars_fragment: hh,
        lights_phong_fragment: uh,
        lights_phong_pars_fragment: dh,
        lights_physical_fragment: fh,
        lights_physical_pars_fragment: ph,
        lights_fragment_begin: mh,
        lights_fragment_maps: gh,
        lights_fragment_end: _h,
        logdepthbuf_fragment: vh,
        logdepthbuf_pars_fragment: xh,
        logdepthbuf_pars_vertex: yh,
        logdepthbuf_vertex: Mh,
        map_fragment: Sh,
        map_pars_fragment: Eh,
        map_particle_fragment: Th,
        map_particle_pars_fragment: bh,
        metalnessmap_fragment: wh,
        metalnessmap_pars_fragment: Ah,
        morphcolor_vertex: Rh,
        morphnormal_vertex: Ch,
        morphtarget_pars_vertex: Ph,
        morphtarget_vertex: Lh,
        normal_fragment_begin: Dh,
        normal_fragment_maps: Ih,
        normal_pars_fragment: Uh,
        normal_pars_vertex: Nh,
        normal_vertex: Fh,
        normalmap_pars_fragment: Oh,
        clearcoat_normal_fragment_begin: Bh,
        clearcoat_normal_fragment_maps: zh,
        clearcoat_pars_fragment: kh,
        iridescence_pars_fragment: Gh,
        opaque_fragment: Hh,
        packing: Vh,
        premultiplied_alpha_fragment: Wh,
        project_vertex: Xh,
        dithering_fragment: qh,
        dithering_pars_fragment: Yh,
        roughnessmap_fragment: jh,
        roughnessmap_pars_fragment: Kh,
        shadowmap_pars_fragment: $h,
        shadowmap_pars_vertex: Zh,
        shadowmap_vertex: Jh,
        shadowmask_pars_fragment: Qh,
        skinbase_vertex: eu,
        skinning_pars_vertex: tu,
        skinning_vertex: nu,
        skinnormal_vertex: iu,
        specularmap_fragment: ru,
        specularmap_pars_fragment: su,
        tonemapping_fragment: au,
        tonemapping_pars_fragment: ou,
        transmission_fragment: cu,
        transmission_pars_fragment: lu,
        uv_pars_fragment: hu,
        uv_pars_vertex: uu,
        uv_vertex: du,
        worldpos_vertex: fu,
        background_vert: pu,
        background_frag: mu,
        backgroundCube_vert: gu,
        backgroundCube_frag: _u,
        cube_vert: vu,
        cube_frag: xu,
        depth_vert: yu,
        depth_frag: Mu,
        distanceRGBA_vert: Su,
        distanceRGBA_frag: Eu,
        equirect_vert: Tu,
        equirect_frag: bu,
        linedashed_vert: wu,
        linedashed_frag: Au,
        meshbasic_vert: Ru,
        meshbasic_frag: Cu,
        meshlambert_vert: Pu,
        meshlambert_frag: Lu,
        meshmatcap_vert: Du,
        meshmatcap_frag: Iu,
        meshnormal_vert: Uu,
        meshnormal_frag: Nu,
        meshphong_vert: Fu,
        meshphong_frag: Ou,
        meshphysical_vert: Bu,
        meshphysical_frag: zu,
        meshtoon_vert: ku,
        meshtoon_frag: Gu,
        points_vert: Hu,
        points_frag: Vu,
        shadow_vert: Wu,
        shadow_frag: Xu,
        sprite_vert: qu,
        sprite_frag: Yu
    }, ae = {
        common: {
            diffuse: {
                value: new Be(16777215)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            mapTransform: {
                value: new He
            },
            alphaMap: {
                value: null
            },
            alphaMapTransform: {
                value: new He
            },
            alphaTest: {
                value: 0
            }
        },
        specularmap: {
            specularMap: {
                value: null
            },
            specularMapTransform: {
                value: new He
            }
        },
        envmap: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            ior: {
                value: 1.5
            },
            refractionRatio: {
                value: .98
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            },
            aoMapTransform: {
                value: new He
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            },
            lightMapTransform: {
                value: new He
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpMapTransform: {
                value: new He
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalMapTransform: {
                value: new He
            },
            normalScale: {
                value: new be(1, 1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementMapTransform: {
                value: new He
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            },
            emissiveMapTransform: {
                value: new He
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            },
            metalnessMapTransform: {
                value: new He
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            },
            roughnessMapTransform: {
                value: new He
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new Be(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            lightProbe: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {}
                }
            },
            directionalLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {}
                }
            },
            spotLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotLightMap: {
                value: []
            },
            spotShadowMap: {
                value: []
            },
            spotLightMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {}
                }
            },
            pointLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    width: {},
                    height: {}
                }
            },
            ltc_1: {
                value: null
            },
            ltc_2: {
                value: null
            }
        },
        points: {
            diffuse: {
                value: new Be(16777215)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            alphaMapTransform: {
                value: new He
            },
            alphaTest: {
                value: 0
            },
            uvTransform: {
                value: new He
            }
        },
        sprite: {
            diffuse: {
                value: new Be(16777215)
            },
            opacity: {
                value: 1
            },
            center: {
                value: new be(.5, .5)
            },
            rotation: {
                value: 0
            },
            map: {
                value: null
            },
            mapTransform: {
                value: new He
            },
            alphaMap: {
                value: null
            },
            alphaMapTransform: {
                value: new He
            },
            alphaTest: {
                value: 0
            }
        }
    }, Vt = {
        basic: {
            uniforms: xt([
                ae.common,
                ae.specularmap,
                ae.envmap,
                ae.aomap,
                ae.lightmap,
                ae.fog
            ]),
            vertexShader: Oe.meshbasic_vert,
            fragmentShader: Oe.meshbasic_frag
        },
        lambert: {
            uniforms: xt([
                ae.common,
                ae.specularmap,
                ae.envmap,
                ae.aomap,
                ae.lightmap,
                ae.emissivemap,
                ae.bumpmap,
                ae.normalmap,
                ae.displacementmap,
                ae.fog,
                ae.lights,
                {
                    emissive: {
                        value: new Be(0)
                    }
                }
            ]),
            vertexShader: Oe.meshlambert_vert,
            fragmentShader: Oe.meshlambert_frag
        },
        phong: {
            uniforms: xt([
                ae.common,
                ae.specularmap,
                ae.envmap,
                ae.aomap,
                ae.lightmap,
                ae.emissivemap,
                ae.bumpmap,
                ae.normalmap,
                ae.displacementmap,
                ae.fog,
                ae.lights,
                {
                    emissive: {
                        value: new Be(0)
                    },
                    specular: {
                        value: new Be(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }
            ]),
            vertexShader: Oe.meshphong_vert,
            fragmentShader: Oe.meshphong_frag
        },
        standard: {
            uniforms: xt([
                ae.common,
                ae.envmap,
                ae.aomap,
                ae.lightmap,
                ae.emissivemap,
                ae.bumpmap,
                ae.normalmap,
                ae.displacementmap,
                ae.roughnessmap,
                ae.metalnessmap,
                ae.fog,
                ae.lights,
                {
                    emissive: {
                        value: new Be(0)
                    },
                    roughness: {
                        value: 1
                    },
                    metalness: {
                        value: 0
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: Oe.meshphysical_vert,
            fragmentShader: Oe.meshphysical_frag
        },
        toon: {
            uniforms: xt([
                ae.common,
                ae.aomap,
                ae.lightmap,
                ae.emissivemap,
                ae.bumpmap,
                ae.normalmap,
                ae.displacementmap,
                ae.gradientmap,
                ae.fog,
                ae.lights,
                {
                    emissive: {
                        value: new Be(0)
                    }
                }
            ]),
            vertexShader: Oe.meshtoon_vert,
            fragmentShader: Oe.meshtoon_frag
        },
        matcap: {
            uniforms: xt([
                ae.common,
                ae.bumpmap,
                ae.normalmap,
                ae.displacementmap,
                ae.fog,
                {
                    matcap: {
                        value: null
                    }
                }
            ]),
            vertexShader: Oe.meshmatcap_vert,
            fragmentShader: Oe.meshmatcap_frag
        },
        points: {
            uniforms: xt([
                ae.points,
                ae.fog
            ]),
            vertexShader: Oe.points_vert,
            fragmentShader: Oe.points_frag
        },
        dashed: {
            uniforms: xt([
                ae.common,
                ae.fog,
                {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }
            ]),
            vertexShader: Oe.linedashed_vert,
            fragmentShader: Oe.linedashed_frag
        },
        depth: {
            uniforms: xt([
                ae.common,
                ae.displacementmap
            ]),
            vertexShader: Oe.depth_vert,
            fragmentShader: Oe.depth_frag
        },
        normal: {
            uniforms: xt([
                ae.common,
                ae.bumpmap,
                ae.normalmap,
                ae.displacementmap,
                {
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: Oe.meshnormal_vert,
            fragmentShader: Oe.meshnormal_frag
        },
        sprite: {
            uniforms: xt([
                ae.sprite,
                ae.fog
            ]),
            vertexShader: Oe.sprite_vert,
            fragmentShader: Oe.sprite_frag
        },
        background: {
            uniforms: {
                uvTransform: {
                    value: new He
                },
                t2D: {
                    value: null
                },
                backgroundIntensity: {
                    value: 1
                }
            },
            vertexShader: Oe.background_vert,
            fragmentShader: Oe.background_frag
        },
        backgroundCube: {
            uniforms: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                },
                backgroundBlurriness: {
                    value: 0
                },
                backgroundIntensity: {
                    value: 1
                }
            },
            vertexShader: Oe.backgroundCube_vert,
            fragmentShader: Oe.backgroundCube_frag
        },
        cube: {
            uniforms: {
                tCube: {
                    value: null
                },
                tFlip: {
                    value: -1
                },
                opacity: {
                    value: 1
                }
            },
            vertexShader: Oe.cube_vert,
            fragmentShader: Oe.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: Oe.equirect_vert,
            fragmentShader: Oe.equirect_frag
        },
        distanceRGBA: {
            uniforms: xt([
                ae.common,
                ae.displacementmap,
                {
                    referencePosition: {
                        value: new P
                    },
                    nearDistance: {
                        value: 1
                    },
                    farDistance: {
                        value: 1e3
                    }
                }
            ]),
            vertexShader: Oe.distanceRGBA_vert,
            fragmentShader: Oe.distanceRGBA_frag
        },
        shadow: {
            uniforms: xt([
                ae.lights,
                ae.fog,
                {
                    color: {
                        value: new Be(0)
                    },
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: Oe.shadow_vert,
            fragmentShader: Oe.shadow_frag
        }
    };
    Vt.physical = {
        uniforms: xt([
            Vt.standard.uniforms,
            {
                clearcoat: {
                    value: 0
                },
                clearcoatMap: {
                    value: null
                },
                clearcoatMapTransform: {
                    value: new He
                },
                clearcoatNormalMap: {
                    value: null
                },
                clearcoatNormalMapTransform: {
                    value: new He
                },
                clearcoatNormalScale: {
                    value: new be(1, 1)
                },
                clearcoatRoughness: {
                    value: 0
                },
                clearcoatRoughnessMap: {
                    value: null
                },
                clearcoatRoughnessMapTransform: {
                    value: new He
                },
                iridescence: {
                    value: 0
                },
                iridescenceMap: {
                    value: null
                },
                iridescenceMapTransform: {
                    value: new He
                },
                iridescenceIOR: {
                    value: 1.3
                },
                iridescenceThicknessMinimum: {
                    value: 100
                },
                iridescenceThicknessMaximum: {
                    value: 400
                },
                iridescenceThicknessMap: {
                    value: null
                },
                iridescenceThicknessMapTransform: {
                    value: new He
                },
                sheen: {
                    value: 0
                },
                sheenColor: {
                    value: new Be(0)
                },
                sheenColorMap: {
                    value: null
                },
                sheenColorMapTransform: {
                    value: new He
                },
                sheenRoughness: {
                    value: 1
                },
                sheenRoughnessMap: {
                    value: null
                },
                sheenRoughnessMapTransform: {
                    value: new He
                },
                transmission: {
                    value: 0
                },
                transmissionMap: {
                    value: null
                },
                transmissionMapTransform: {
                    value: new He
                },
                transmissionSamplerSize: {
                    value: new be
                },
                transmissionSamplerMap: {
                    value: null
                },
                thickness: {
                    value: 0
                },
                thicknessMap: {
                    value: null
                },
                thicknessMapTransform: {
                    value: new He
                },
                attenuationDistance: {
                    value: 0
                },
                attenuationColor: {
                    value: new Be(0)
                },
                specularColor: {
                    value: new Be(1, 1, 1)
                },
                specularColorMap: {
                    value: null
                },
                specularColorMapTransform: {
                    value: new He
                },
                specularIntensity: {
                    value: 1
                },
                specularIntensityMap: {
                    value: null
                },
                specularIntensityMapTransform: {
                    value: new He
                },
                anisotropyVector: {
                    value: new be
                },
                anisotropyMap: {
                    value: null
                },
                anisotropyMapTransform: {
                    value: new He
                }
            }
        ]),
        vertexShader: Oe.meshphysical_vert,
        fragmentShader: Oe.meshphysical_frag
    };
    const Hi = {
        r: 0,
        b: 0,
        g: 0
    };
    function ju(i, e, t, n, r, s, o) {
        const a = new Be(0);
        let c = s === !0 ? 0 : 1, l, h, d = null, p = 0, m = null;
        function g(f, u) {
            let S = !1, y = u.isScene === !0 ? u.background : null;
            y && y.isTexture && (y = (u.backgroundBlurriness > 0 ? t : e).get(y)), y === null ? _(a, c) : y && y.isColor && (_(y, 1), S = !0);
            const b = i.xr.getEnvironmentBlendMode();
            b === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : b === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (i.autoClear || S) && i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil), y && (y.isCubeTexture || y.mapping === ir) ? (h === void 0 && (h = new at(new Qt(1, 1, 1), new Cn({
                name: "BackgroundCubeMaterial",
                uniforms: ii(Vt.backgroundCube.uniforms),
                vertexShader: Vt.backgroundCube.vertexShader,
                fragmentShader: Vt.backgroundCube.fragmentShader,
                side: St,
                depthTest: !1,
                depthWrite: !1,
                fog: !1
            })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(L, R, A) {
                this.matrixWorld.copyPosition(A.matrixWorld);
            }, Object.defineProperty(h.material, "envMap", {
                get: function() {
                    return this.uniforms.envMap.value;
                }
            }), r.update(h)), h.material.uniforms.envMap.value = y, h.material.uniforms.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = u.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = u.backgroundIntensity, h.material.toneMapped = je.getTransfer(y.colorSpace) !== $e, (d !== y || p !== y.version || m !== i.toneMapping) && (h.material.needsUpdate = !0, d = y, p = y.version, m = i.toneMapping), h.layers.enableAll(), f.unshift(h, h.geometry, h.material, 0, 0, null)) : y && y.isTexture && (l === void 0 && (l = new at(new or(2, 2), new Cn({
                name: "BackgroundMaterial",
                uniforms: ii(Vt.background.uniforms),
                vertexShader: Vt.background.vertexShader,
                fragmentShader: Vt.background.fragmentShader,
                side: pn,
                depthTest: !1,
                depthWrite: !1,
                fog: !1
            })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
                get: function() {
                    return this.uniforms.t2D.value;
                }
            }), r.update(l)), l.material.uniforms.t2D.value = y, l.material.uniforms.backgroundIntensity.value = u.backgroundIntensity, l.material.toneMapped = je.getTransfer(y.colorSpace) !== $e, y.matrixAutoUpdate === !0 && y.updateMatrix(), l.material.uniforms.uvTransform.value.copy(y.matrix), (d !== y || p !== y.version || m !== i.toneMapping) && (l.material.needsUpdate = !0, d = y, p = y.version, m = i.toneMapping), l.layers.enableAll(), f.unshift(l, l.geometry, l.material, 0, 0, null));
        }
        function _(f, u) {
            f.getRGB(Hi, To(i)), n.buffers.color.setClear(Hi.r, Hi.g, Hi.b, u, o);
        }
        return {
            getClearColor: function() {
                return a;
            },
            setClearColor: function(f, u = 1) {
                a.set(f), c = u, _(a, c);
            },
            getClearAlpha: function() {
                return c;
            },
            setClearAlpha: function(f) {
                c = f, _(a, c);
            },
            render: g
        };
    }
    function Ku(i, e, t, n) {
        const r = i.getParameter(i.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || s !== null, a = {}, c = f(null);
        let l = c, h = !1;
        function d(D, F, V, Y, X) {
            let q = !1;
            if (o) {
                const j = _(Y, V, F);
                l !== j && (l = j, m(l.object)), q = u(D, Y, V, X), q && S(D, Y, V, X);
            } else {
                const j = F.wireframe === !0;
                (l.geometry !== Y.id || l.program !== V.id || l.wireframe !== j) && (l.geometry = Y.id, l.program = V.id, l.wireframe = j, q = !0);
            }
            X !== null && t.update(X, i.ELEMENT_ARRAY_BUFFER), (q || h) && (h = !1, G(D, F, V, Y), X !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(X).buffer));
        }
        function p() {
            return n.isWebGL2 ? i.createVertexArray() : s.createVertexArrayOES();
        }
        function m(D) {
            return n.isWebGL2 ? i.bindVertexArray(D) : s.bindVertexArrayOES(D);
        }
        function g(D) {
            return n.isWebGL2 ? i.deleteVertexArray(D) : s.deleteVertexArrayOES(D);
        }
        function _(D, F, V) {
            const Y = V.wireframe === !0;
            let X = a[D.id];
            X === void 0 && (X = {}, a[D.id] = X);
            let q = X[F.id];
            q === void 0 && (q = {}, X[F.id] = q);
            let j = q[Y];
            return j === void 0 && (j = f(p()), q[Y] = j), j;
        }
        function f(D) {
            const F = [], V = [], Y = [];
            for(let X = 0; X < r; X++)F[X] = 0, V[X] = 0, Y[X] = 0;
            return {
                geometry: null,
                program: null,
                wireframe: !1,
                newAttributes: F,
                enabledAttributes: V,
                attributeDivisors: Y,
                object: D,
                attributes: {},
                index: null
            };
        }
        function u(D, F, V, Y) {
            const X = l.attributes, q = F.attributes;
            let j = 0;
            const re = V.getAttributes();
            for(const se in re)if (re[se].location >= 0) {
                const K = X[se];
                let le = q[se];
                if (le === void 0 && (se === "instanceMatrix" && D.instanceMatrix && (le = D.instanceMatrix), se === "instanceColor" && D.instanceColor && (le = D.instanceColor)), K === void 0 || K.attribute !== le || le && K.data !== le.data) return !0;
                j++;
            }
            return l.attributesNum !== j || l.index !== Y;
        }
        function S(D, F, V, Y) {
            const X = {}, q = F.attributes;
            let j = 0;
            const re = V.getAttributes();
            for(const se in re)if (re[se].location >= 0) {
                let K = q[se];
                K === void 0 && (se === "instanceMatrix" && D.instanceMatrix && (K = D.instanceMatrix), se === "instanceColor" && D.instanceColor && (K = D.instanceColor));
                const le = {};
                le.attribute = K, K && K.data && (le.data = K.data), X[se] = le, j++;
            }
            l.attributes = X, l.attributesNum = j, l.index = Y;
        }
        function y() {
            const D = l.newAttributes;
            for(let F = 0, V = D.length; F < V; F++)D[F] = 0;
        }
        function b(D) {
            L(D, 0);
        }
        function L(D, F) {
            const V = l.newAttributes, Y = l.enabledAttributes, X = l.attributeDivisors;
            V[D] = 1, Y[D] === 0 && (i.enableVertexAttribArray(D), Y[D] = 1), X[D] !== F && ((n.isWebGL2 ? i : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](D, F), X[D] = F);
        }
        function R() {
            const D = l.newAttributes, F = l.enabledAttributes;
            for(let V = 0, Y = F.length; V < Y; V++)F[V] !== D[V] && (i.disableVertexAttribArray(V), F[V] = 0);
        }
        function A(D, F, V, Y, X, q, j) {
            j === !0 ? i.vertexAttribIPointer(D, F, V, X, q) : i.vertexAttribPointer(D, F, V, Y, X, q);
        }
        function G(D, F, V, Y) {
            if (n.isWebGL2 === !1 && (D.isInstancedMesh || Y.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null) return;
            y();
            const X = Y.attributes, q = V.getAttributes(), j = F.defaultAttributeValues;
            for(const re in q){
                const se = q[re];
                if (se.location >= 0) {
                    let W = X[re];
                    if (W === void 0 && (re === "instanceMatrix" && D.instanceMatrix && (W = D.instanceMatrix), re === "instanceColor" && D.instanceColor && (W = D.instanceColor)), W !== void 0) {
                        const K = W.normalized, le = W.itemSize, ve = t.get(W);
                        if (ve === void 0) continue;
                        const ge = ve.buffer, Le = ve.type, De = ve.bytesPerElement, Te = n.isWebGL2 === !0 && (Le === i.INT || Le === i.UNSIGNED_INT || W.gpuType === ao);
                        if (W.isInterleavedBufferAttribute) {
                            const Ve = W.data, N = Ve.stride, dt = W.offset;
                            if (Ve.isInstancedInterleavedBuffer) {
                                for(let Me = 0; Me < se.locationSize; Me++)L(se.location + Me, Ve.meshPerAttribute);
                                D.isInstancedMesh !== !0 && Y._maxInstanceCount === void 0 && (Y._maxInstanceCount = Ve.meshPerAttribute * Ve.count);
                            } else for(let Me = 0; Me < se.locationSize; Me++)b(se.location + Me);
                            i.bindBuffer(i.ARRAY_BUFFER, ge);
                            for(let Me = 0; Me < se.locationSize; Me++)A(se.location + Me, le / se.locationSize, Le, K, N * De, (dt + le / se.locationSize * Me) * De, Te);
                        } else {
                            if (W.isInstancedBufferAttribute) {
                                for(let Ve = 0; Ve < se.locationSize; Ve++)L(se.location + Ve, W.meshPerAttribute);
                                D.isInstancedMesh !== !0 && Y._maxInstanceCount === void 0 && (Y._maxInstanceCount = W.meshPerAttribute * W.count);
                            } else for(let Ve = 0; Ve < se.locationSize; Ve++)b(se.location + Ve);
                            i.bindBuffer(i.ARRAY_BUFFER, ge);
                            for(let Ve = 0; Ve < se.locationSize; Ve++)A(se.location + Ve, le / se.locationSize, Le, K, le * De, le / se.locationSize * Ve * De, Te);
                        }
                    } else if (j !== void 0) {
                        const K = j[re];
                        if (K !== void 0) switch(K.length){
                            case 2:
                                i.vertexAttrib2fv(se.location, K);
                                break;
                            case 3:
                                i.vertexAttrib3fv(se.location, K);
                                break;
                            case 4:
                                i.vertexAttrib4fv(se.location, K);
                                break;
                            default:
                                i.vertexAttrib1fv(se.location, K);
                        }
                    }
                }
            }
            R();
        }
        function x() {
            H();
            for(const D in a){
                const F = a[D];
                for(const V in F){
                    const Y = F[V];
                    for(const X in Y)g(Y[X].object), delete Y[X];
                    delete F[V];
                }
                delete a[D];
            }
        }
        function T(D) {
            if (a[D.id] === void 0) return;
            const F = a[D.id];
            for(const V in F){
                const Y = F[V];
                for(const X in Y)g(Y[X].object), delete Y[X];
                delete F[V];
            }
            delete a[D.id];
        }
        function z(D) {
            for(const F in a){
                const V = a[F];
                if (V[D.id] === void 0) continue;
                const Y = V[D.id];
                for(const X in Y)g(Y[X].object), delete Y[X];
                delete V[D.id];
            }
        }
        function H() {
            Q(), h = !0, l !== c && (l = c, m(l.object));
        }
        function Q() {
            c.geometry = null, c.program = null, c.wireframe = !1;
        }
        return {
            setup: d,
            reset: H,
            resetDefaultState: Q,
            dispose: x,
            releaseStatesOfGeometry: T,
            releaseStatesOfProgram: z,
            initAttributes: y,
            enableAttribute: b,
            disableUnusedAttributes: R
        };
    }
    function $u(i, e, t, n) {
        const r = n.isWebGL2;
        let s;
        function o(h) {
            s = h;
        }
        function a(h, d) {
            i.drawArrays(s, h, d), t.update(d, s, 1);
        }
        function c(h, d, p) {
            if (p === 0) return;
            let m, g;
            if (r) m = i, g = "drawArraysInstanced";
            else if (m = e.get("ANGLE_instanced_arrays"), g = "drawArraysInstancedANGLE", m === null) {
                console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                return;
            }
            m[g](s, h, d, p), t.update(d, s, p);
        }
        function l(h, d, p) {
            if (p === 0) return;
            const m = e.get("WEBGL_multi_draw");
            if (m === null) for(let g = 0; g < p; g++)this.render(h[g], d[g]);
            else {
                m.multiDrawArraysWEBGL(s, h, 0, d, 0, p);
                let g = 0;
                for(let _ = 0; _ < p; _++)g += d[_];
                t.update(g, s, 1);
            }
        }
        this.setMode = o, this.render = a, this.renderInstances = c, this.renderMultiDraw = l;
    }
    function Zu(i, e, t) {
        let n;
        function r() {
            if (n !== void 0) return n;
            if (e.has("EXT_texture_filter_anisotropic") === !0) {
                const A = e.get("EXT_texture_filter_anisotropic");
                n = i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            } else n = 0;
            return n;
        }
        function s(A) {
            if (A === "highp") {
                if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0) return "highp";
                A = "mediump";
            }
            return A === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
        }
        const o = typeof WebGL2RenderingContext < "u" && i.constructor.name === "WebGL2RenderingContext";
        let a = t.precision !== void 0 ? t.precision : "highp";
        const c = s(a);
        c !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", c, "instead."), a = c);
        const l = o || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, d = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), p = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), m = i.getParameter(i.MAX_TEXTURE_SIZE), g = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), _ = i.getParameter(i.MAX_VERTEX_ATTRIBS), f = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), u = i.getParameter(i.MAX_VARYING_VECTORS), S = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), y = p > 0, b = o || e.has("OES_texture_float"), L = y && b, R = o ? i.getParameter(i.MAX_SAMPLES) : 0;
        return {
            isWebGL2: o,
            drawBuffers: l,
            getMaxAnisotropy: r,
            getMaxPrecision: s,
            precision: a,
            logarithmicDepthBuffer: h,
            maxTextures: d,
            maxVertexTextures: p,
            maxTextureSize: m,
            maxCubemapSize: g,
            maxAttributes: _,
            maxVertexUniforms: f,
            maxVaryings: u,
            maxFragmentUniforms: S,
            vertexTextures: y,
            floatFragmentTextures: b,
            floatVertexTextures: L,
            maxSamples: R
        };
    }
    function Ju(i) {
        const e = this;
        let t = null, n = 0, r = !1, s = !1;
        const o = new on, a = new He, c = {
            value: null,
            needsUpdate: !1
        };
        this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, p) {
            const m = d.length !== 0 || p || n !== 0 || r;
            return r = p, n = d.length, m;
        }, this.beginShadows = function() {
            s = !0, h(null);
        }, this.endShadows = function() {
            s = !1;
        }, this.setGlobalState = function(d, p) {
            t = h(d, p, 0);
        }, this.setState = function(d, p, m) {
            const g = d.clippingPlanes, _ = d.clipIntersection, f = d.clipShadows, u = i.get(d);
            if (!r || g === null || g.length === 0 || s && !f) s ? h(null) : l();
            else {
                const S = s ? 0 : n, y = S * 4;
                let b = u.clippingState || null;
                c.value = b, b = h(g, p, y, m);
                for(let L = 0; L !== y; ++L)b[L] = t[L];
                u.clippingState = b, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += S;
            }
        };
        function l() {
            c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
        }
        function h(d, p, m, g) {
            const _ = d !== null ? d.length : 0;
            let f = null;
            if (_ !== 0) {
                if (f = c.value, g !== !0 || f === null) {
                    const u = m + _ * 4, S = p.matrixWorldInverse;
                    a.getNormalMatrix(S), (f === null || f.length < u) && (f = new Float32Array(u));
                    for(let y = 0, b = m; y !== _; ++y, b += 4)o.copy(d[y]).applyMatrix4(S, a), o.normal.toArray(f, b), f[b + 3] = o.constant;
                }
                c.value = f, c.needsUpdate = !0;
            }
            return e.numPlanes = _, e.numIntersection = 0, f;
        }
    }
    function Qu(i) {
        let e = new WeakMap;
        function t(o, a) {
            return a === $r ? o.mapping = ei : a === Zr && (o.mapping = ti), o;
        }
        function n(o) {
            if (o && o.isTexture) {
                const a = o.mapping;
                if (a === $r || a === Zr) if (e.has(o)) {
                    const c = e.get(o).texture;
                    return t(c, o.mapping);
                } else {
                    const c = o.image;
                    if (c && c.height > 0) {
                        const l = new ul(c.height / 2);
                        return l.fromEquirectangularTexture(i, o), e.set(o, l), o.addEventListener("dispose", r), t(l.texture, o.mapping);
                    } else return null;
                }
            }
            return o;
        }
        function r(o) {
            const a = o.target;
            a.removeEventListener("dispose", r);
            const c = e.get(a);
            c !== void 0 && (e.delete(a), c.dispose());
        }
        function s() {
            e = new WeakMap;
        }
        return {
            get: n,
            dispose: s
        };
    }
    class Ro extends bo {
        constructor(e = -1, t = 1, n = 1, r = -1, s = .1, o = 2e3){
            super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = o, this.updateProjectionMatrix();
        }
        copy(e, t) {
            return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
        }
        setViewOffset(e, t, n, r, s, o) {
            this.view === null && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
        }
        clearViewOffset() {
            this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
            const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
            let s = n - e, o = n + e, a = r + t, c = r - t;
            if (this.view !== null && this.view.enabled) {
                const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                s += l * this.view.offsetX, o = s + l * this.view.width, a -= h * this.view.offsetY, c = a - h * this.view.height;
            }
            this.projectionMatrix.makeOrthographic(s, o, a, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(e) {
            const t = super.toJSON(e);
            return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
        }
    }
    const Kn = 4, ya = [
        .125,
        .215,
        .35,
        .446,
        .526,
        .582
    ], En = 20, Or = new Ro, Ma = new Be;
    let Br = null, zr = 0, kr = 0;
    const Mn = (1 + Math.sqrt(5)) / 2, jn = 1 / Mn, Sa = [
        new P(1, 1, 1),
        new P(-1, 1, 1),
        new P(1, 1, -1),
        new P(-1, 1, -1),
        new P(0, Mn, jn),
        new P(0, Mn, -jn),
        new P(jn, 0, Mn),
        new P(-jn, 0, Mn),
        new P(Mn, jn, 0),
        new P(-Mn, jn, 0)
    ];
    class Ea {
        constructor(e){
            this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
        }
        fromScene(e, t = 0, n = .1, r = 100) {
            Br = this._renderer.getRenderTarget(), zr = this._renderer.getActiveCubeFace(), kr = this._renderer.getActiveMipmapLevel(), this._setSize(256);
            const s = this._allocateTargets();
            return s.depthBuffer = !0, this._sceneToCubeUV(e, n, r, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
        }
        fromEquirectangular(e, t = null) {
            return this._fromTexture(e, t);
        }
        fromCubemap(e, t = null) {
            return this._fromTexture(e, t);
        }
        compileCubemapShader() {
            this._cubemapMaterial === null && (this._cubemapMaterial = wa(), this._compileMaterial(this._cubemapMaterial));
        }
        compileEquirectangularShader() {
            this._equirectMaterial === null && (this._equirectMaterial = ba(), this._compileMaterial(this._equirectMaterial));
        }
        dispose() {
            this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
        }
        _setSize(e) {
            this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
        }
        _dispose() {
            this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
            for(let e = 0; e < this._lodPlanes.length; e++)this._lodPlanes[e].dispose();
        }
        _cleanup(e) {
            this._renderer.setRenderTarget(Br, zr, kr), e.scissorTest = !1, Vi(e, 0, 0, e.width, e.height);
        }
        _fromTexture(e, t) {
            e.mapping === ei || e.mapping === ti ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Br = this._renderer.getRenderTarget(), zr = this._renderer.getActiveCubeFace(), kr = this._renderer.getActiveMipmapLevel();
            const n = t || this._allocateTargets();
            return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
        }
        _allocateTargets() {
            const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
                magFilter: Lt,
                minFilter: Lt,
                generateMipmaps: !1,
                type: mi,
                format: kt,
                colorSpace: en,
                depthBuffer: !1
            }, r = Ta(e, t, n);
            if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
                this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Ta(e, t, n);
                const { _lodMax: s } = this;
                ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = ed(s)), this._blurMaterial = td(s, e, t);
            }
            return r;
        }
        _compileMaterial(e) {
            const t = new at(this._lodPlanes[0], e);
            this._renderer.compile(t, Or);
        }
        _sceneToCubeUV(e, t, n, r) {
            const a = new Rt(90, 1, t, n), c = [
                1,
                -1,
                1,
                1,
                1,
                1
            ], l = [
                1,
                1,
                1,
                -1,
                -1,
                -1
            ], h = this._renderer, d = h.autoClear, p = h.toneMapping;
            h.getClearColor(Ma), h.toneMapping = dn, h.autoClear = !1;
            const m = new xi({
                name: "PMREM.Background",
                side: St,
                depthWrite: !1,
                depthTest: !1
            }), g = new at(new Qt, m);
            let _ = !1;
            const f = e.background;
            f ? f.isColor && (m.color.copy(f), e.background = null, _ = !0) : (m.color.copy(Ma), _ = !0);
            for(let u = 0; u < 6; u++){
                const S = u % 3;
                S === 0 ? (a.up.set(0, c[u], 0), a.lookAt(l[u], 0, 0)) : S === 1 ? (a.up.set(0, 0, c[u]), a.lookAt(0, l[u], 0)) : (a.up.set(0, c[u], 0), a.lookAt(0, 0, l[u]));
                const y = this._cubeSize;
                Vi(r, S * y, u > 2 ? y : 0, y, y), h.setRenderTarget(r), _ && h.render(g, a), h.render(e, a);
            }
            g.geometry.dispose(), g.material.dispose(), h.toneMapping = p, h.autoClear = d, e.background = f;
        }
        _textureToCubeUV(e, t) {
            const n = this._renderer, r = e.mapping === ei || e.mapping === ti;
            r ? (this._cubemapMaterial === null && (this._cubemapMaterial = wa()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = ba());
            const s = r ? this._cubemapMaterial : this._equirectMaterial, o = new at(this._lodPlanes[0], s), a = s.uniforms;
            a.envMap.value = e;
            const c = this._cubeSize;
            Vi(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(o, Or);
        }
        _applyPMREM(e) {
            const t = this._renderer, n = t.autoClear;
            t.autoClear = !1;
            for(let r = 1; r < this._lodPlanes.length; r++){
                const s = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = Sa[(r - 1) % Sa.length];
                this._blur(e, r - 1, r, s, o);
            }
            t.autoClear = n;
        }
        _blur(e, t, n, r, s) {
            const o = this._pingPongRenderTarget;
            this._halfBlur(e, o, t, n, r, "latitudinal", s), this._halfBlur(o, e, n, n, r, "longitudinal", s);
        }
        _halfBlur(e, t, n, r, s, o, a) {
            const c = this._renderer, l = this._blurMaterial;
            o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
            const h = 3, d = new at(this._lodPlanes[r], l), p = l.uniforms, m = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * En - 1), _ = s / g, f = isFinite(s) ? 1 + Math.floor(h * _) : En;
            f > En && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${En}`);
            const u = [];
            let S = 0;
            for(let A = 0; A < En; ++A){
                const G = A / _, x = Math.exp(-G * G / 2);
                u.push(x), A === 0 ? S += x : A < f && (S += 2 * x);
            }
            for(let A = 0; A < u.length; A++)u[A] = u[A] / S;
            p.envMap.value = e.texture, p.samples.value = f, p.weights.value = u, p.latitudinal.value = o === "latitudinal", a && (p.poleAxis.value = a);
            const { _lodMax: y } = this;
            p.dTheta.value = g, p.mipInt.value = y - n;
            const b = this._sizeLods[r], L = 3 * b * (r > y - Kn ? r - y + Kn : 0), R = 4 * (this._cubeSize - b);
            Vi(t, L, R, 3 * b, 2 * b), c.setRenderTarget(t), c.render(d, Or);
        }
    }
    function ed(i) {
        const e = [], t = [], n = [];
        let r = i;
        const s = i - Kn + 1 + ya.length;
        for(let o = 0; o < s; o++){
            const a = Math.pow(2, r);
            t.push(a);
            let c = 1 / a;
            o > i - Kn ? c = ya[o - i + Kn - 1] : o === 0 && (c = 0), n.push(c);
            const l = 1 / (a - 2), h = -l, d = 1 + l, p = [
                h,
                h,
                d,
                h,
                d,
                d,
                h,
                h,
                d,
                d,
                h,
                d
            ], m = 6, g = 6, _ = 3, f = 2, u = 1, S = new Float32Array(_ * g * m), y = new Float32Array(f * g * m), b = new Float32Array(u * g * m);
            for(let R = 0; R < m; R++){
                const A = R % 3 * 2 / 3 - 1, G = R > 2 ? 0 : -1, x = [
                    A,
                    G,
                    0,
                    A + 2 / 3,
                    G,
                    0,
                    A + 2 / 3,
                    G + 1,
                    0,
                    A,
                    G,
                    0,
                    A + 2 / 3,
                    G + 1,
                    0,
                    A,
                    G + 1,
                    0
                ];
                S.set(x, _ * g * R), y.set(p, f * g * R);
                const T = [
                    R,
                    R,
                    R,
                    R,
                    R,
                    R
                ];
                b.set(T, u * g * R);
            }
            const L = new Tt;
            L.setAttribute("position", new It(S, _)), L.setAttribute("uv", new It(y, f)), L.setAttribute("faceIndex", new It(b, u)), e.push(L), r > Kn && r--;
        }
        return {
            lodPlanes: e,
            sizeLods: t,
            sigmas: n
        };
    }
    function Ta(i, e, t) {
        const n = new An(i, e, t);
        return n.texture.mapping = ir, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
    }
    function Vi(i, e, t, n, r) {
        i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
    }
    function td(i, e, t) {
        const n = new Float32Array(En), r = new P(0, 1, 0);
        return new Cn({
            name: "SphericalGaussianBlur",
            defines: {
                n: En,
                CUBEUV_TEXEL_WIDTH: 1 / e,
                CUBEUV_TEXEL_HEIGHT: 1 / t,
                CUBEUV_MAX_MIP: `${i}.0`
            },
            uniforms: {
                envMap: {
                    value: null
                },
                samples: {
                    value: 1
                },
                weights: {
                    value: n
                },
                latitudinal: {
                    value: !1
                },
                dTheta: {
                    value: 0
                },
                mipInt: {
                    value: 0
                },
                poleAxis: {
                    value: r
                }
            },
            vertexShader: us(),
            fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
            blending: un,
            depthTest: !1,
            depthWrite: !1
        });
    }
    function ba() {
        return new Cn({
            name: "EquirectangularToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                }
            },
            vertexShader: us(),
            fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
            blending: un,
            depthTest: !1,
            depthWrite: !1
        });
    }
    function wa() {
        return new Cn({
            name: "CubemapToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                }
            },
            vertexShader: us(),
            fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
            blending: un,
            depthTest: !1,
            depthWrite: !1
        });
    }
    function us() {
        return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
    }
    function nd(i) {
        let e = new WeakMap, t = null;
        function n(a) {
            if (a && a.isTexture) {
                const c = a.mapping, l = c === $r || c === Zr, h = c === ei || c === ti;
                if (l || h) if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
                    a.needsPMREMUpdate = !1;
                    let d = e.get(a);
                    return t === null && (t = new Ea(i)), d = l ? t.fromEquirectangular(a, d) : t.fromCubemap(a, d), e.set(a, d), d.texture;
                } else {
                    if (e.has(a)) return e.get(a).texture;
                    {
                        const d = a.image;
                        if (l && d && d.height > 0 || h && d && r(d)) {
                            t === null && (t = new Ea(i));
                            const p = l ? t.fromEquirectangular(a) : t.fromCubemap(a);
                            return e.set(a, p), a.addEventListener("dispose", s), p.texture;
                        } else return null;
                    }
                }
            }
            return a;
        }
        function r(a) {
            let c = 0;
            const l = 6;
            for(let h = 0; h < l; h++)a[h] !== void 0 && c++;
            return c === l;
        }
        function s(a) {
            const c = a.target;
            c.removeEventListener("dispose", s);
            const l = e.get(c);
            l !== void 0 && (e.delete(c), l.dispose());
        }
        function o() {
            e = new WeakMap, t !== null && (t.dispose(), t = null);
        }
        return {
            get: n,
            dispose: o
        };
    }
    function id(i) {
        const e = {};
        function t(n) {
            if (e[n] !== void 0) return e[n];
            let r;
            switch(n){
                case "WEBGL_depth_texture":
                    r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                default:
                    r = i.getExtension(n);
            }
            return e[n] = r, r;
        }
        return {
            has: function(n) {
                return t(n) !== null;
            },
            init: function(n) {
                n.isWebGL2 ? (t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance")) : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
            },
            get: function(n) {
                const r = t(n);
                return r === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), r;
            }
        };
    }
    function rd(i, e, t, n) {
        const r = {}, s = new WeakMap;
        function o(d) {
            const p = d.target;
            p.index !== null && e.remove(p.index);
            for(const g in p.attributes)e.remove(p.attributes[g]);
            for(const g in p.morphAttributes){
                const _ = p.morphAttributes[g];
                for(let f = 0, u = _.length; f < u; f++)e.remove(_[f]);
            }
            p.removeEventListener("dispose", o), delete r[p.id];
            const m = s.get(p);
            m && (e.remove(m), s.delete(p)), n.releaseStatesOfGeometry(p), p.isInstancedBufferGeometry === !0 && delete p._maxInstanceCount, t.memory.geometries--;
        }
        function a(d, p) {
            return r[p.id] === !0 || (p.addEventListener("dispose", o), r[p.id] = !0, t.memory.geometries++), p;
        }
        function c(d) {
            const p = d.attributes;
            for(const g in p)e.update(p[g], i.ARRAY_BUFFER);
            const m = d.morphAttributes;
            for(const g in m){
                const _ = m[g];
                for(let f = 0, u = _.length; f < u; f++)e.update(_[f], i.ARRAY_BUFFER);
            }
        }
        function l(d) {
            const p = [], m = d.index, g = d.attributes.position;
            let _ = 0;
            if (m !== null) {
                const S = m.array;
                _ = m.version;
                for(let y = 0, b = S.length; y < b; y += 3){
                    const L = S[y + 0], R = S[y + 1], A = S[y + 2];
                    p.push(L, R, R, A, A, L);
                }
            } else if (g !== void 0) {
                const S = g.array;
                _ = g.version;
                for(let y = 0, b = S.length / 3 - 1; y < b; y += 3){
                    const L = y + 0, R = y + 1, A = y + 2;
                    p.push(L, R, R, A, A, L);
                }
            } else return;
            const f = new (_o(p) ? Eo : So)(p, 1);
            f.version = _;
            const u = s.get(d);
            u && e.remove(u), s.set(d, f);
        }
        function h(d) {
            const p = s.get(d);
            if (p) {
                const m = d.index;
                m !== null && p.version < m.version && l(d);
            } else l(d);
            return s.get(d);
        }
        return {
            get: a,
            update: c,
            getWireframeAttribute: h
        };
    }
    function sd(i, e, t, n) {
        const r = n.isWebGL2;
        let s;
        function o(m) {
            s = m;
        }
        let a, c;
        function l(m) {
            a = m.type, c = m.bytesPerElement;
        }
        function h(m, g) {
            i.drawElements(s, g, a, m * c), t.update(g, s, 1);
        }
        function d(m, g, _) {
            if (_ === 0) return;
            let f, u;
            if (r) f = i, u = "drawElementsInstanced";
            else if (f = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", f === null) {
                console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                return;
            }
            f[u](s, g, a, m * c, _), t.update(g, s, _);
        }
        function p(m, g, _) {
            if (_ === 0) return;
            const f = e.get("WEBGL_multi_draw");
            if (f === null) for(let u = 0; u < _; u++)this.render(m[u] / c, g[u]);
            else {
                f.multiDrawElementsWEBGL(s, g, 0, a, m, 0, _);
                let u = 0;
                for(let S = 0; S < _; S++)u += g[S];
                t.update(u, s, 1);
            }
        }
        this.setMode = o, this.setIndex = l, this.render = h, this.renderInstances = d, this.renderMultiDraw = p;
    }
    function ad(i) {
        const e = {
            geometries: 0,
            textures: 0
        }, t = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };
        function n(s, o, a) {
            switch(t.calls++, o){
                case i.TRIANGLES:
                    t.triangles += a * (s / 3);
                    break;
                case i.LINES:
                    t.lines += a * (s / 2);
                    break;
                case i.LINE_STRIP:
                    t.lines += a * (s - 1);
                    break;
                case i.LINE_LOOP:
                    t.lines += a * s;
                    break;
                case i.POINTS:
                    t.points += a * s;
                    break;
                default:
                    console.error("THREE.WebGLInfo: Unknown draw mode:", o);
                    break;
            }
        }
        function r() {
            t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
        }
        return {
            memory: e,
            render: t,
            programs: null,
            autoReset: !0,
            reset: r,
            update: n
        };
    }
    function od(i, e) {
        return i[0] - e[0];
    }
    function cd(i, e) {
        return Math.abs(e[1]) - Math.abs(i[1]);
    }
    function ld(i, e, t) {
        const n = {}, r = new Float32Array(8), s = new WeakMap, o = new Ze, a = [];
        for(let l = 0; l < 8; l++)a[l] = [
            l,
            0
        ];
        function c(l, h, d) {
            const p = l.morphTargetInfluences;
            if (e.isWebGL2 === !0) {
                const g = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, _ = g !== void 0 ? g.length : 0;
                let f = s.get(h);
                if (f === void 0 || f.count !== _) {
                    let F = function() {
                        Q.dispose(), s.delete(h), h.removeEventListener("dispose", F);
                    };
                    var m = F;
                    f !== void 0 && f.texture.dispose();
                    const y = h.morphAttributes.position !== void 0, b = h.morphAttributes.normal !== void 0, L = h.morphAttributes.color !== void 0, R = h.morphAttributes.position || [], A = h.morphAttributes.normal || [], G = h.morphAttributes.color || [];
                    let x = 0;
                    y === !0 && (x = 1), b === !0 && (x = 2), L === !0 && (x = 3);
                    let T = h.attributes.position.count * x, z = 1;
                    T > e.maxTextureSize && (z = Math.ceil(T / e.maxTextureSize), T = e.maxTextureSize);
                    const H = new Float32Array(T * z * 4 * _), Q = new yo(H, T, z, _);
                    Q.type = ln, Q.needsUpdate = !0;
                    const D = x * 4;
                    for(let V = 0; V < _; V++){
                        const Y = R[V], X = A[V], q = G[V], j = T * z * 4 * V;
                        for(let re = 0; re < Y.count; re++){
                            const se = re * D;
                            y === !0 && (o.fromBufferAttribute(Y, re), H[j + se + 0] = o.x, H[j + se + 1] = o.y, H[j + se + 2] = o.z, H[j + se + 3] = 0), b === !0 && (o.fromBufferAttribute(X, re), H[j + se + 4] = o.x, H[j + se + 5] = o.y, H[j + se + 6] = o.z, H[j + se + 7] = 0), L === !0 && (o.fromBufferAttribute(q, re), H[j + se + 8] = o.x, H[j + se + 9] = o.y, H[j + se + 10] = o.z, H[j + se + 11] = q.itemSize === 4 ? o.w : 1);
                        }
                    }
                    f = {
                        count: _,
                        texture: Q,
                        size: new be(T, z)
                    }, s.set(h, f), h.addEventListener("dispose", F);
                }
                let u = 0;
                for(let y = 0; y < p.length; y++)u += p[y];
                const S = h.morphTargetsRelative ? 1 : 1 - u;
                d.getUniforms().setValue(i, "morphTargetBaseInfluence", S), d.getUniforms().setValue(i, "morphTargetInfluences", p), d.getUniforms().setValue(i, "morphTargetsTexture", f.texture, t), d.getUniforms().setValue(i, "morphTargetsTextureSize", f.size);
            } else {
                const g = p === void 0 ? 0 : p.length;
                let _ = n[h.id];
                if (_ === void 0 || _.length !== g) {
                    _ = [];
                    for(let b = 0; b < g; b++)_[b] = [
                        b,
                        0
                    ];
                    n[h.id] = _;
                }
                for(let b = 0; b < g; b++){
                    const L = _[b];
                    L[0] = b, L[1] = p[b];
                }
                _.sort(cd);
                for(let b = 0; b < 8; b++)b < g && _[b][1] ? (a[b][0] = _[b][0], a[b][1] = _[b][1]) : (a[b][0] = Number.MAX_SAFE_INTEGER, a[b][1] = 0);
                a.sort(od);
                const f = h.morphAttributes.position, u = h.morphAttributes.normal;
                let S = 0;
                for(let b = 0; b < 8; b++){
                    const L = a[b], R = L[0], A = L[1];
                    R !== Number.MAX_SAFE_INTEGER && A ? (f && h.getAttribute("morphTarget" + b) !== f[R] && h.setAttribute("morphTarget" + b, f[R]), u && h.getAttribute("morphNormal" + b) !== u[R] && h.setAttribute("morphNormal" + b, u[R]), r[b] = A, S += A) : (f && h.hasAttribute("morphTarget" + b) === !0 && h.deleteAttribute("morphTarget" + b), u && h.hasAttribute("morphNormal" + b) === !0 && h.deleteAttribute("morphNormal" + b), r[b] = 0);
                }
                const y = h.morphTargetsRelative ? 1 : 1 - S;
                d.getUniforms().setValue(i, "morphTargetBaseInfluence", y), d.getUniforms().setValue(i, "morphTargetInfluences", r);
            }
        }
        return {
            update: c
        };
    }
    function hd(i, e, t, n) {
        let r = new WeakMap;
        function s(c) {
            const l = n.render.frame, h = c.geometry, d = e.get(c, h);
            if (r.get(d) !== l && (e.update(d), r.set(d, l)), c.isInstancedMesh && (c.hasEventListener("dispose", a) === !1 && c.addEventListener("dispose", a), r.get(c) !== l && (t.update(c.instanceMatrix, i.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, i.ARRAY_BUFFER), r.set(c, l))), c.isSkinnedMesh) {
                const p = c.skeleton;
                r.get(p) !== l && (p.update(), r.set(p, l));
            }
            return d;
        }
        function o() {
            r = new WeakMap;
        }
        function a(c) {
            const l = c.target;
            l.removeEventListener("dispose", a), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
        }
        return {
            update: s,
            dispose: o
        };
    }
    class Co extends Et {
        constructor(e, t, n, r, s, o, a, c, l, h){
            if (h = h !== void 0 ? h : bn, h !== bn && h !== ni) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
            n === void 0 && h === bn && (n = cn), n === void 0 && h === ni && (n = Tn), super(null, r, s, o, a, c, h, n, l), this.isDepthTexture = !0, this.image = {
                width: e,
                height: t
            }, this.magFilter = a !== void 0 ? a : yt, this.minFilter = c !== void 0 ? c : yt, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
        }
        copy(e) {
            return super.copy(e), this.compareFunction = e.compareFunction, this;
        }
        toJSON(e) {
            const t = super.toJSON(e);
            return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
        }
    }
    const Po = new Et, Lo = new Co(1, 1);
    Lo.compareFunction = go;
    const Do = new yo, Io = new jc, Uo = new wo, Aa = [], Ra = [], Ca = new Float32Array(16), Pa = new Float32Array(9), La = new Float32Array(4);
    function si(i, e, t) {
        const n = i[0];
        if (n <= 0 || n > 0) return i;
        const r = e * t;
        let s = Aa[r];
        if (s === void 0 && (s = new Float32Array(r), Aa[r] = s), e !== 0) {
            n.toArray(s, 0);
            for(let o = 1, a = 0; o !== e; ++o)a += t, i[o].toArray(s, a);
        }
        return s;
    }
    function ct(i, e) {
        if (i.length !== e.length) return !1;
        for(let t = 0, n = i.length; t < n; t++)if (i[t] !== e[t]) return !1;
        return !0;
    }
    function lt(i, e) {
        for(let t = 0, n = e.length; t < n; t++)i[t] = e[t];
    }
    function cr(i, e) {
        let t = Ra[e];
        t === void 0 && (t = new Int32Array(e), Ra[e] = t);
        for(let n = 0; n !== e; ++n)t[n] = i.allocateTextureUnit();
        return t;
    }
    function ud(i, e) {
        const t = this.cache;
        t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
    }
    function dd(i, e) {
        const t = this.cache;
        if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
        else {
            if (ct(t, e)) return;
            i.uniform2fv(this.addr, e), lt(t, e);
        }
    }
    function fd(i, e) {
        const t = this.cache;
        if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
        else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
        else {
            if (ct(t, e)) return;
            i.uniform3fv(this.addr, e), lt(t, e);
        }
    }
    function pd(i, e) {
        const t = this.cache;
        if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
        else {
            if (ct(t, e)) return;
            i.uniform4fv(this.addr, e), lt(t, e);
        }
    }
    function md(i, e) {
        const t = this.cache, n = e.elements;
        if (n === void 0) {
            if (ct(t, e)) return;
            i.uniformMatrix2fv(this.addr, !1, e), lt(t, e);
        } else {
            if (ct(t, n)) return;
            La.set(n), i.uniformMatrix2fv(this.addr, !1, La), lt(t, n);
        }
    }
    function gd(i, e) {
        const t = this.cache, n = e.elements;
        if (n === void 0) {
            if (ct(t, e)) return;
            i.uniformMatrix3fv(this.addr, !1, e), lt(t, e);
        } else {
            if (ct(t, n)) return;
            Pa.set(n), i.uniformMatrix3fv(this.addr, !1, Pa), lt(t, n);
        }
    }
    function _d(i, e) {
        const t = this.cache, n = e.elements;
        if (n === void 0) {
            if (ct(t, e)) return;
            i.uniformMatrix4fv(this.addr, !1, e), lt(t, e);
        } else {
            if (ct(t, n)) return;
            Ca.set(n), i.uniformMatrix4fv(this.addr, !1, Ca), lt(t, n);
        }
    }
    function vd(i, e) {
        const t = this.cache;
        t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
    }
    function xd(i, e) {
        const t = this.cache;
        if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
        else {
            if (ct(t, e)) return;
            i.uniform2iv(this.addr, e), lt(t, e);
        }
    }
    function yd(i, e) {
        const t = this.cache;
        if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
        else {
            if (ct(t, e)) return;
            i.uniform3iv(this.addr, e), lt(t, e);
        }
    }
    function Md(i, e) {
        const t = this.cache;
        if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
        else {
            if (ct(t, e)) return;
            i.uniform4iv(this.addr, e), lt(t, e);
        }
    }
    function Sd(i, e) {
        const t = this.cache;
        t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
    }
    function Ed(i, e) {
        const t = this.cache;
        if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
        else {
            if (ct(t, e)) return;
            i.uniform2uiv(this.addr, e), lt(t, e);
        }
    }
    function Td(i, e) {
        const t = this.cache;
        if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
        else {
            if (ct(t, e)) return;
            i.uniform3uiv(this.addr, e), lt(t, e);
        }
    }
    function bd(i, e) {
        const t = this.cache;
        if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
        else {
            if (ct(t, e)) return;
            i.uniform4uiv(this.addr, e), lt(t, e);
        }
    }
    function wd(i, e, t) {
        const n = this.cache, r = t.allocateTextureUnit();
        n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
        const s = this.type === i.SAMPLER_2D_SHADOW ? Lo : Po;
        t.setTexture2D(e || s, r);
    }
    function Ad(i, e, t) {
        const n = this.cache, r = t.allocateTextureUnit();
        n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || Io, r);
    }
    function Rd(i, e, t) {
        const n = this.cache, r = t.allocateTextureUnit();
        n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || Uo, r);
    }
    function Cd(i, e, t) {
        const n = this.cache, r = t.allocateTextureUnit();
        n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || Do, r);
    }
    function Pd(i) {
        switch(i){
            case 5126:
                return ud;
            case 35664:
                return dd;
            case 35665:
                return fd;
            case 35666:
                return pd;
            case 35674:
                return md;
            case 35675:
                return gd;
            case 35676:
                return _d;
            case 5124:
            case 35670:
                return vd;
            case 35667:
            case 35671:
                return xd;
            case 35668:
            case 35672:
                return yd;
            case 35669:
            case 35673:
                return Md;
            case 5125:
                return Sd;
            case 36294:
                return Ed;
            case 36295:
                return Td;
            case 36296:
                return bd;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
                return wd;
            case 35679:
            case 36299:
            case 36307:
                return Ad;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
                return Rd;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
                return Cd;
        }
    }
    function Ld(i, e) {
        i.uniform1fv(this.addr, e);
    }
    function Dd(i, e) {
        const t = si(e, this.size, 2);
        i.uniform2fv(this.addr, t);
    }
    function Id(i, e) {
        const t = si(e, this.size, 3);
        i.uniform3fv(this.addr, t);
    }
    function Ud(i, e) {
        const t = si(e, this.size, 4);
        i.uniform4fv(this.addr, t);
    }
    function Nd(i, e) {
        const t = si(e, this.size, 4);
        i.uniformMatrix2fv(this.addr, !1, t);
    }
    function Fd(i, e) {
        const t = si(e, this.size, 9);
        i.uniformMatrix3fv(this.addr, !1, t);
    }
    function Od(i, e) {
        const t = si(e, this.size, 16);
        i.uniformMatrix4fv(this.addr, !1, t);
    }
    function Bd(i, e) {
        i.uniform1iv(this.addr, e);
    }
    function zd(i, e) {
        i.uniform2iv(this.addr, e);
    }
    function kd(i, e) {
        i.uniform3iv(this.addr, e);
    }
    function Gd(i, e) {
        i.uniform4iv(this.addr, e);
    }
    function Hd(i, e) {
        i.uniform1uiv(this.addr, e);
    }
    function Vd(i, e) {
        i.uniform2uiv(this.addr, e);
    }
    function Wd(i, e) {
        i.uniform3uiv(this.addr, e);
    }
    function Xd(i, e) {
        i.uniform4uiv(this.addr, e);
    }
    function qd(i, e, t) {
        const n = this.cache, r = e.length, s = cr(t, r);
        ct(n, s) || (i.uniform1iv(this.addr, s), lt(n, s));
        for(let o = 0; o !== r; ++o)t.setTexture2D(e[o] || Po, s[o]);
    }
    function Yd(i, e, t) {
        const n = this.cache, r = e.length, s = cr(t, r);
        ct(n, s) || (i.uniform1iv(this.addr, s), lt(n, s));
        for(let o = 0; o !== r; ++o)t.setTexture3D(e[o] || Io, s[o]);
    }
    function jd(i, e, t) {
        const n = this.cache, r = e.length, s = cr(t, r);
        ct(n, s) || (i.uniform1iv(this.addr, s), lt(n, s));
        for(let o = 0; o !== r; ++o)t.setTextureCube(e[o] || Uo, s[o]);
    }
    function Kd(i, e, t) {
        const n = this.cache, r = e.length, s = cr(t, r);
        ct(n, s) || (i.uniform1iv(this.addr, s), lt(n, s));
        for(let o = 0; o !== r; ++o)t.setTexture2DArray(e[o] || Do, s[o]);
    }
    function $d(i) {
        switch(i){
            case 5126:
                return Ld;
            case 35664:
                return Dd;
            case 35665:
                return Id;
            case 35666:
                return Ud;
            case 35674:
                return Nd;
            case 35675:
                return Fd;
            case 35676:
                return Od;
            case 5124:
            case 35670:
                return Bd;
            case 35667:
            case 35671:
                return zd;
            case 35668:
            case 35672:
                return kd;
            case 35669:
            case 35673:
                return Gd;
            case 5125:
                return Hd;
            case 36294:
                return Vd;
            case 36295:
                return Wd;
            case 36296:
                return Xd;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
                return qd;
            case 35679:
            case 36299:
            case 36307:
                return Yd;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
                return jd;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
                return Kd;
        }
    }
    class Zd {
        constructor(e, t, n){
            this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Pd(t.type);
        }
    }
    class Jd {
        constructor(e, t, n){
            this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = $d(t.type);
        }
    }
    class Qd {
        constructor(e){
            this.id = e, this.seq = [], this.map = {};
        }
        setValue(e, t, n) {
            const r = this.seq;
            for(let s = 0, o = r.length; s !== o; ++s){
                const a = r[s];
                a.setValue(e, t[a.id], n);
            }
        }
    }
    const Gr = /(\w+)(\])?(\[|\.)?/g;
    function Da(i, e) {
        i.seq.push(e), i.map[e.id] = e;
    }
    function ef(i, e, t) {
        const n = i.name, r = n.length;
        for(Gr.lastIndex = 0;;){
            const s = Gr.exec(n), o = Gr.lastIndex;
            let a = s[1];
            const c = s[2] === "]", l = s[3];
            if (c && (a = a | 0), l === void 0 || l === "[" && o + 2 === r) {
                Da(t, l === void 0 ? new Zd(a, i, e) : new Jd(a, i, e));
                break;
            } else {
                let d = t.map[a];
                d === void 0 && (d = new Qd(a), Da(t, d)), t = d;
            }
        }
    }
    class ji {
        constructor(e, t){
            this.seq = [], this.map = {};
            const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
            for(let r = 0; r < n; ++r){
                const s = e.getActiveUniform(t, r), o = e.getUniformLocation(t, s.name);
                ef(s, o, this);
            }
        }
        setValue(e, t, n, r) {
            const s = this.map[t];
            s !== void 0 && s.setValue(e, n, r);
        }
        setOptional(e, t, n) {
            const r = t[n];
            r !== void 0 && this.setValue(e, n, r);
        }
        static upload(e, t, n, r) {
            for(let s = 0, o = t.length; s !== o; ++s){
                const a = t[s], c = n[a.id];
                c.needsUpdate !== !1 && a.setValue(e, c.value, r);
            }
        }
        static seqWithValue(e, t) {
            const n = [];
            for(let r = 0, s = e.length; r !== s; ++r){
                const o = e[r];
                o.id in t && n.push(o);
            }
            return n;
        }
    }
    function Ia(i, e, t) {
        const n = i.createShader(e);
        return i.shaderSource(n, t), i.compileShader(n), n;
    }
    const tf = 37297;
    let nf = 0;
    function rf(i, e) {
        const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
        for(let o = r; o < s; o++){
            const a = o + 1;
            n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
        }
        return n.join(`
`);
    }
    function sf(i) {
        const e = je.getPrimaries(je.workingColorSpace), t = je.getPrimaries(i);
        let n;
        switch(e === t ? n = "" : e === Ji && t === Zi ? n = "LinearDisplayP3ToLinearSRGB" : e === Zi && t === Ji && (n = "LinearSRGBToLinearDisplayP3"), i){
            case en:
            case rr:
                return [
                    n,
                    "LinearTransferOETF"
                ];
            case ft:
            case cs:
                return [
                    n,
                    "sRGBTransferOETF"
                ];
            default:
                return console.warn("THREE.WebGLProgram: Unsupported color space:", i), [
                    n,
                    "LinearTransferOETF"
                ];
        }
    }
    function Ua(i, e, t) {
        const n = i.getShaderParameter(e, i.COMPILE_STATUS), r = i.getShaderInfoLog(e).trim();
        if (n && r === "") return "";
        const s = /ERROR: 0:(\d+)/.exec(r);
        if (s) {
            const o = parseInt(s[1]);
            return t.toUpperCase() + `

` + r + `

` + rf(i.getShaderSource(e), o);
        } else return r;
    }
    function af(i, e) {
        const t = sf(e);
        return `vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
    }
    function of(i, e) {
        let t;
        switch(e){
            case _c:
                t = "Linear";
                break;
            case vc:
                t = "Reinhard";
                break;
            case xc:
                t = "OptimizedCineon";
                break;
            case ro:
                t = "ACESFilmic";
                break;
            case Mc:
                t = "AgX";
                break;
            case yc:
                t = "Custom";
                break;
            default:
                console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
        }
        return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
    }
    function cf(i) {
        return [
            i.extensionDerivatives || i.envMapCubeUVHeight || i.bumpMap || i.normalMapTangentSpace || i.clearcoatNormalMap || i.flatShading || i.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
            (i.extensionFragDepth || i.logarithmicDepthBuffer) && i.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
            i.extensionDrawBuffers && i.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
            (i.extensionShaderTextureLOD || i.envMap || i.transmission) && i.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
        ].filter($n).join(`
`);
    }
    function lf(i) {
        return [
            i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : ""
        ].filter($n).join(`
`);
    }
    function hf(i) {
        const e = [];
        for(const t in i){
            const n = i[t];
            n !== !1 && e.push("#define " + t + " " + n);
        }
        return e.join(`
`);
    }
    function uf(i, e) {
        const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
        for(let r = 0; r < n; r++){
            const s = i.getActiveAttrib(e, r), o = s.name;
            let a = 1;
            s.type === i.FLOAT_MAT2 && (a = 2), s.type === i.FLOAT_MAT3 && (a = 3), s.type === i.FLOAT_MAT4 && (a = 4), t[o] = {
                type: s.type,
                location: i.getAttribLocation(e, o),
                locationSize: a
            };
        }
        return t;
    }
    function $n(i) {
        return i !== "";
    }
    function Na(i, e) {
        const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
        return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
    }
    function Fa(i, e) {
        return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
    }
    const df = /^[ \t]*#include +<([\w\d./]+)>/gm;
    function is(i) {
        return i.replace(df, pf);
    }
    const ff = new Map([
        [
            "encodings_fragment",
            "colorspace_fragment"
        ],
        [
            "encodings_pars_fragment",
            "colorspace_pars_fragment"
        ],
        [
            "output_fragment",
            "opaque_fragment"
        ]
    ]);
    function pf(i, e) {
        let t = Oe[e];
        if (t === void 0) {
            const n = ff.get(e);
            if (n !== void 0) t = Oe[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
            else throw new Error("Can not resolve #include <" + e + ">");
        }
        return is(t);
    }
    const mf = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
    function Oa(i) {
        return i.replace(mf, gf);
    }
    function gf(i, e, t, n) {
        let r = "";
        for(let s = parseInt(e); s < parseInt(t); s++)r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
        return r;
    }
    function Ba(i) {
        let e = "precision " + i.precision + ` float;
precision ` + i.precision + " int;";
        return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
    }
    function _f(i) {
        let e = "SHADOWMAP_TYPE_BASIC";
        return i.shadowMapType === to ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === no ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === Zt && (e = "SHADOWMAP_TYPE_VSM"), e;
    }
    function vf(i) {
        let e = "ENVMAP_TYPE_CUBE";
        if (i.envMap) switch(i.envMapMode){
            case ei:
            case ti:
                e = "ENVMAP_TYPE_CUBE";
                break;
            case ir:
                e = "ENVMAP_TYPE_CUBE_UV";
                break;
        }
        return e;
    }
    function xf(i) {
        let e = "ENVMAP_MODE_REFLECTION";
        if (i.envMap) switch(i.envMapMode){
            case ti:
                e = "ENVMAP_MODE_REFRACTION";
                break;
        }
        return e;
    }
    function yf(i) {
        let e = "ENVMAP_BLENDING_NONE";
        if (i.envMap) switch(i.combine){
            case io:
                e = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case mc:
                e = "ENVMAP_BLENDING_MIX";
                break;
            case gc:
                e = "ENVMAP_BLENDING_ADD";
                break;
        }
        return e;
    }
    function Mf(i) {
        const e = i.envMapCubeUVHeight;
        if (e === null) return null;
        const t = Math.log2(e) - 2, n = 1 / e;
        return {
            texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
            texelHeight: n,
            maxMip: t
        };
    }
    function Sf(i, e, t, n) {
        const r = i.getContext(), s = t.defines;
        let o = t.vertexShader, a = t.fragmentShader;
        const c = _f(t), l = vf(t), h = xf(t), d = yf(t), p = Mf(t), m = t.isWebGL2 ? "" : cf(t), g = lf(t), _ = hf(s), f = r.createProgram();
        let u, S, y = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
        t.isRawShaderMaterial ? (u = [
            "#define SHADER_TYPE " + t.shaderType,
            "#define SHADER_NAME " + t.shaderName,
            _
        ].filter($n).join(`
`), u.length > 0 && (u += `
`), S = [
            m,
            "#define SHADER_TYPE " + t.shaderType,
            "#define SHADER_NAME " + t.shaderName,
            _
        ].filter($n).join(`
`), S.length > 0 && (S += `
`)) : (u = [
            Ba(t),
            "#define SHADER_TYPE " + t.shaderType,
            "#define SHADER_NAME " + t.shaderName,
            _,
            t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
            t.batching ? "#define USE_BATCHING" : "",
            t.instancing ? "#define USE_INSTANCING" : "",
            t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
            t.useFog && t.fog ? "#define USE_FOG" : "",
            t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
            t.map ? "#define USE_MAP" : "",
            t.envMap ? "#define USE_ENVMAP" : "",
            t.envMap ? "#define " + h : "",
            t.lightMap ? "#define USE_LIGHTMAP" : "",
            t.aoMap ? "#define USE_AOMAP" : "",
            t.bumpMap ? "#define USE_BUMPMAP" : "",
            t.normalMap ? "#define USE_NORMALMAP" : "",
            t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
            t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
            t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
            t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            t.anisotropy ? "#define USE_ANISOTROPY" : "",
            t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
            t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
            t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
            t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
            t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
            t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
            t.specularMap ? "#define USE_SPECULARMAP" : "",
            t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
            t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
            t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
            t.metalnessMap ? "#define USE_METALNESSMAP" : "",
            t.alphaMap ? "#define USE_ALPHAMAP" : "",
            t.alphaHash ? "#define USE_ALPHAHASH" : "",
            t.transmission ? "#define USE_TRANSMISSION" : "",
            t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
            t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
            t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
            t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
            t.mapUv ? "#define MAP_UV " + t.mapUv : "",
            t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
            t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
            t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
            t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
            t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
            t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
            t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
            t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
            t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
            t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
            t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
            t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
            t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
            t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
            t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
            t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
            t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
            t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
            t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
            t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
            t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
            t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
            t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
            t.vertexColors ? "#define USE_COLOR" : "",
            t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
            t.vertexUv1s ? "#define USE_UV1" : "",
            t.vertexUv2s ? "#define USE_UV2" : "",
            t.vertexUv3s ? "#define USE_UV3" : "",
            t.pointsUvs ? "#define USE_POINTS_UV" : "",
            t.flatShading ? "#define FLAT_SHADED" : "",
            t.skinning ? "#define USE_SKINNING" : "",
            t.morphTargets ? "#define USE_MORPHTARGETS" : "",
            t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
            t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
            t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
            t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
            t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
            t.doubleSided ? "#define DOUBLE_SIDED" : "",
            t.flipSided ? "#define FLIP_SIDED" : "",
            t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            t.shadowMapEnabled ? "#define " + c : "",
            t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
            t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
            t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
            t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
            "uniform mat4 modelMatrix;",
            "uniform mat4 modelViewMatrix;",
            "uniform mat4 projectionMatrix;",
            "uniform mat4 viewMatrix;",
            "uniform mat3 normalMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform bool isOrthographic;",
            "#ifdef USE_INSTANCING",
            "	attribute mat4 instanceMatrix;",
            "#endif",
            "#ifdef USE_INSTANCING_COLOR",
            "	attribute vec3 instanceColor;",
            "#endif",
            "attribute vec3 position;",
            "attribute vec3 normal;",
            "attribute vec2 uv;",
            "#ifdef USE_UV1",
            "	attribute vec2 uv1;",
            "#endif",
            "#ifdef USE_UV2",
            "	attribute vec2 uv2;",
            "#endif",
            "#ifdef USE_UV3",
            "	attribute vec2 uv3;",
            "#endif",
            "#ifdef USE_TANGENT",
            "	attribute vec4 tangent;",
            "#endif",
            "#if defined( USE_COLOR_ALPHA )",
            "	attribute vec4 color;",
            "#elif defined( USE_COLOR )",
            "	attribute vec3 color;",
            "#endif",
            "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
            "	attribute vec3 morphTarget0;",
            "	attribute vec3 morphTarget1;",
            "	attribute vec3 morphTarget2;",
            "	attribute vec3 morphTarget3;",
            "	#ifdef USE_MORPHNORMALS",
            "		attribute vec3 morphNormal0;",
            "		attribute vec3 morphNormal1;",
            "		attribute vec3 morphNormal2;",
            "		attribute vec3 morphNormal3;",
            "	#else",
            "		attribute vec3 morphTarget4;",
            "		attribute vec3 morphTarget5;",
            "		attribute vec3 morphTarget6;",
            "		attribute vec3 morphTarget7;",
            "	#endif",
            "#endif",
            "#ifdef USE_SKINNING",
            "	attribute vec4 skinIndex;",
            "	attribute vec4 skinWeight;",
            "#endif",
            `
`
        ].filter($n).join(`
`), S = [
            m,
            Ba(t),
            "#define SHADER_TYPE " + t.shaderType,
            "#define SHADER_NAME " + t.shaderName,
            _,
            t.useFog && t.fog ? "#define USE_FOG" : "",
            t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
            t.map ? "#define USE_MAP" : "",
            t.matcap ? "#define USE_MATCAP" : "",
            t.envMap ? "#define USE_ENVMAP" : "",
            t.envMap ? "#define " + l : "",
            t.envMap ? "#define " + h : "",
            t.envMap ? "#define " + d : "",
            p ? "#define CUBEUV_TEXEL_WIDTH " + p.texelWidth : "",
            p ? "#define CUBEUV_TEXEL_HEIGHT " + p.texelHeight : "",
            p ? "#define CUBEUV_MAX_MIP " + p.maxMip + ".0" : "",
            t.lightMap ? "#define USE_LIGHTMAP" : "",
            t.aoMap ? "#define USE_AOMAP" : "",
            t.bumpMap ? "#define USE_BUMPMAP" : "",
            t.normalMap ? "#define USE_NORMALMAP" : "",
            t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
            t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
            t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            t.anisotropy ? "#define USE_ANISOTROPY" : "",
            t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
            t.clearcoat ? "#define USE_CLEARCOAT" : "",
            t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
            t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
            t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
            t.iridescence ? "#define USE_IRIDESCENCE" : "",
            t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
            t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
            t.specularMap ? "#define USE_SPECULARMAP" : "",
            t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
            t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
            t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
            t.metalnessMap ? "#define USE_METALNESSMAP" : "",
            t.alphaMap ? "#define USE_ALPHAMAP" : "",
            t.alphaTest ? "#define USE_ALPHATEST" : "",
            t.alphaHash ? "#define USE_ALPHAHASH" : "",
            t.sheen ? "#define USE_SHEEN" : "",
            t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
            t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
            t.transmission ? "#define USE_TRANSMISSION" : "",
            t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
            t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
            t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
            t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
            t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
            t.vertexUv1s ? "#define USE_UV1" : "",
            t.vertexUv2s ? "#define USE_UV2" : "",
            t.vertexUv3s ? "#define USE_UV3" : "",
            t.pointsUvs ? "#define USE_POINTS_UV" : "",
            t.gradientMap ? "#define USE_GRADIENTMAP" : "",
            t.flatShading ? "#define FLAT_SHADED" : "",
            t.doubleSided ? "#define DOUBLE_SIDED" : "",
            t.flipSided ? "#define FLIP_SIDED" : "",
            t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            t.shadowMapEnabled ? "#define " + c : "",
            t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
            t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
            t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
            t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
            t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
            "uniform mat4 viewMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform bool isOrthographic;",
            t.toneMapping !== dn ? "#define TONE_MAPPING" : "",
            t.toneMapping !== dn ? Oe.tonemapping_pars_fragment : "",
            t.toneMapping !== dn ? of("toneMapping", t.toneMapping) : "",
            t.dithering ? "#define DITHERING" : "",
            t.opaque ? "#define OPAQUE" : "",
            Oe.colorspace_pars_fragment,
            af("linearToOutputTexel", t.outputColorSpace),
            t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
            `
`
        ].filter($n).join(`
`)), o = is(o), o = Na(o, t), o = Fa(o, t), a = is(a), a = Na(a, t), a = Fa(a, t), o = Oa(o), a = Oa(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (y = `#version 300 es
`, u = [
            g,
            "precision mediump sampler2DArray;",
            "#define attribute in",
            "#define varying out",
            "#define texture2D texture"
        ].join(`
`) + `
` + u, S = [
            "precision mediump sampler2DArray;",
            "#define varying in",
            t.glslVersion === na ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
            t.glslVersion === na ? "" : "#define gl_FragColor pc_fragColor",
            "#define gl_FragDepthEXT gl_FragDepth",
            "#define texture2D texture",
            "#define textureCube texture",
            "#define texture2DProj textureProj",
            "#define texture2DLodEXT textureLod",
            "#define texture2DProjLodEXT textureProjLod",
            "#define textureCubeLodEXT textureLod",
            "#define texture2DGradEXT textureGrad",
            "#define texture2DProjGradEXT textureProjGrad",
            "#define textureCubeGradEXT textureGrad"
        ].join(`
`) + `
` + S);
        const b = y + u + o, L = y + S + a, R = Ia(r, r.VERTEX_SHADER, b), A = Ia(r, r.FRAGMENT_SHADER, L);
        r.attachShader(f, R), r.attachShader(f, A), t.index0AttributeName !== void 0 ? r.bindAttribLocation(f, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(f, 0, "position"), r.linkProgram(f);
        function G(H) {
            if (i.debug.checkShaderErrors) {
                const Q = r.getProgramInfoLog(f).trim(), D = r.getShaderInfoLog(R).trim(), F = r.getShaderInfoLog(A).trim();
                let V = !0, Y = !0;
                if (r.getProgramParameter(f, r.LINK_STATUS) === !1) if (V = !1, typeof i.debug.onShaderError == "function") i.debug.onShaderError(r, f, R, A);
                else {
                    const X = Ua(r, R, "vertex"), q = Ua(r, A, "fragment");
                    console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(f, r.VALIDATE_STATUS) + `

Program Info Log: ` + Q + `
` + X + `
` + q);
                }
                else Q !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", Q) : (D === "" || F === "") && (Y = !1);
                Y && (H.diagnostics = {
                    runnable: V,
                    programLog: Q,
                    vertexShader: {
                        log: D,
                        prefix: u
                    },
                    fragmentShader: {
                        log: F,
                        prefix: S
                    }
                });
            }
            r.deleteShader(R), r.deleteShader(A), x = new ji(r, f), T = uf(r, f);
        }
        let x;
        this.getUniforms = function() {
            return x === void 0 && G(this), x;
        };
        let T;
        this.getAttributes = function() {
            return T === void 0 && G(this), T;
        };
        let z = t.rendererExtensionParallelShaderCompile === !1;
        return this.isReady = function() {
            return z === !1 && (z = r.getProgramParameter(f, tf)), z;
        }, this.destroy = function() {
            n.releaseStatesOfProgram(this), r.deleteProgram(f), this.program = void 0;
        }, this.type = t.shaderType, this.name = t.shaderName, this.id = nf++, this.cacheKey = e, this.usedTimes = 1, this.program = f, this.vertexShader = R, this.fragmentShader = A, this;
    }
    let Ef = 0;
    class Tf {
        constructor(){
            this.shaderCache = new Map, this.materialCache = new Map;
        }
        update(e) {
            const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
            return o.has(r) === !1 && (o.add(r), r.usedTimes++), o.has(s) === !1 && (o.add(s), s.usedTimes++), this;
        }
        remove(e) {
            const t = this.materialCache.get(e);
            for (const n of t)n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
            return this.materialCache.delete(e), this;
        }
        getVertexShaderID(e) {
            return this._getShaderStage(e.vertexShader).id;
        }
        getFragmentShaderID(e) {
            return this._getShaderStage(e.fragmentShader).id;
        }
        dispose() {
            this.shaderCache.clear(), this.materialCache.clear();
        }
        _getShaderCacheForMaterial(e) {
            const t = this.materialCache;
            let n = t.get(e);
            return n === void 0 && (n = new Set, t.set(e, n)), n;
        }
        _getShaderStage(e) {
            const t = this.shaderCache;
            let n = t.get(e);
            return n === void 0 && (n = new bf(e), t.set(e, n)), n;
        }
    }
    class bf {
        constructor(e){
            this.id = Ef++, this.code = e, this.usedTimes = 0;
        }
    }
    function wf(i, e, t, n, r, s, o) {
        const a = new ls, c = new Tf, l = [], h = r.isWebGL2, d = r.logarithmicDepthBuffer, p = r.vertexTextures;
        let m = r.precision;
        const g = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "toon",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite"
        };
        function _(x) {
            return x === 0 ? "uv" : `uv${x}`;
        }
        function f(x, T, z, H, Q) {
            const D = H.fog, F = Q.geometry, V = x.isMeshStandardMaterial ? H.environment : null, Y = (x.isMeshStandardMaterial ? t : e).get(x.envMap || V), X = Y && Y.mapping === ir ? Y.image.height : null, q = g[x.type];
            x.precision !== null && (m = r.getMaxPrecision(x.precision), m !== x.precision && console.warn("THREE.WebGLProgram.getParameters:", x.precision, "not supported, using", m, "instead."));
            const j = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color, re = j !== void 0 ? j.length : 0;
            let se = 0;
            F.morphAttributes.position !== void 0 && (se = 1), F.morphAttributes.normal !== void 0 && (se = 2), F.morphAttributes.color !== void 0 && (se = 3);
            let W, K, le, ve;
            if (q) {
                const tt = Vt[q];
                W = tt.vertexShader, K = tt.fragmentShader;
            } else W = x.vertexShader, K = x.fragmentShader, c.update(x), le = c.getVertexShaderID(x), ve = c.getFragmentShaderID(x);
            const ge = i.getRenderTarget(), Le = Q.isInstancedMesh === !0, De = Q.isBatchedMesh === !0, Te = !!x.map, Ve = !!x.matcap, N = !!Y, dt = !!x.aoMap, Me = !!x.lightMap, Re = !!x.bumpMap, pe = !!x.normalMap, Ke = !!x.displacementMap, Ue = !!x.emissiveMap, E = !!x.metalnessMap, v = !!x.roughnessMap, U = x.anisotropy > 0, ee = x.clearcoat > 0, Z = x.iridescence > 0, te = x.sheen > 0, me = x.transmission > 0, ce = U && !!x.anisotropyMap, fe = ee && !!x.clearcoatMap, Ee = ee && !!x.clearcoatNormalMap, Ne = ee && !!x.clearcoatRoughnessMap, $ = Z && !!x.iridescenceMap, Ye = Z && !!x.iridescenceThicknessMap, ze = te && !!x.sheenColorMap, Ce = te && !!x.sheenRoughnessMap, ye = !!x.specularMap, he = !!x.specularColorMap, w = !!x.specularIntensityMap, ne = me && !!x.transmissionMap, _e = me && !!x.thicknessMap, de = !!x.gradientMap, J = !!x.alphaMap, C = x.alphaTest > 0, ie = !!x.alphaHash, oe = !!x.extensions, we = !!F.attributes.uv1, Se = !!F.attributes.uv2, We = !!F.attributes.uv3;
            let Xe = dn;
            return x.toneMapped && (ge === null || ge.isXRRenderTarget === !0) && (Xe = i.toneMapping), {
                isWebGL2: h,
                shaderID: q,
                shaderType: x.type,
                shaderName: x.name,
                vertexShader: W,
                fragmentShader: K,
                defines: x.defines,
                customVertexShaderID: le,
                customFragmentShaderID: ve,
                isRawShaderMaterial: x.isRawShaderMaterial === !0,
                glslVersion: x.glslVersion,
                precision: m,
                batching: De,
                instancing: Le,
                instancingColor: Le && Q.instanceColor !== null,
                supportsVertexTextures: p,
                outputColorSpace: ge === null ? i.outputColorSpace : ge.isXRRenderTarget === !0 ? ge.texture.colorSpace : en,
                map: Te,
                matcap: Ve,
                envMap: N,
                envMapMode: N && Y.mapping,
                envMapCubeUVHeight: X,
                aoMap: dt,
                lightMap: Me,
                bumpMap: Re,
                normalMap: pe,
                displacementMap: p && Ke,
                emissiveMap: Ue,
                normalMapObjectSpace: pe && x.normalMapType === Ic,
                normalMapTangentSpace: pe && x.normalMapType === mo,
                metalnessMap: E,
                roughnessMap: v,
                anisotropy: U,
                anisotropyMap: ce,
                clearcoat: ee,
                clearcoatMap: fe,
                clearcoatNormalMap: Ee,
                clearcoatRoughnessMap: Ne,
                iridescence: Z,
                iridescenceMap: $,
                iridescenceThicknessMap: Ye,
                sheen: te,
                sheenColorMap: ze,
                sheenRoughnessMap: Ce,
                specularMap: ye,
                specularColorMap: he,
                specularIntensityMap: w,
                transmission: me,
                transmissionMap: ne,
                thicknessMap: _e,
                gradientMap: de,
                opaque: x.transparent === !1 && x.blending === Jn,
                alphaMap: J,
                alphaTest: C,
                alphaHash: ie,
                combine: x.combine,
                mapUv: Te && _(x.map.channel),
                aoMapUv: dt && _(x.aoMap.channel),
                lightMapUv: Me && _(x.lightMap.channel),
                bumpMapUv: Re && _(x.bumpMap.channel),
                normalMapUv: pe && _(x.normalMap.channel),
                displacementMapUv: Ke && _(x.displacementMap.channel),
                emissiveMapUv: Ue && _(x.emissiveMap.channel),
                metalnessMapUv: E && _(x.metalnessMap.channel),
                roughnessMapUv: v && _(x.roughnessMap.channel),
                anisotropyMapUv: ce && _(x.anisotropyMap.channel),
                clearcoatMapUv: fe && _(x.clearcoatMap.channel),
                clearcoatNormalMapUv: Ee && _(x.clearcoatNormalMap.channel),
                clearcoatRoughnessMapUv: Ne && _(x.clearcoatRoughnessMap.channel),
                iridescenceMapUv: $ && _(x.iridescenceMap.channel),
                iridescenceThicknessMapUv: Ye && _(x.iridescenceThicknessMap.channel),
                sheenColorMapUv: ze && _(x.sheenColorMap.channel),
                sheenRoughnessMapUv: Ce && _(x.sheenRoughnessMap.channel),
                specularMapUv: ye && _(x.specularMap.channel),
                specularColorMapUv: he && _(x.specularColorMap.channel),
                specularIntensityMapUv: w && _(x.specularIntensityMap.channel),
                transmissionMapUv: ne && _(x.transmissionMap.channel),
                thicknessMapUv: _e && _(x.thicknessMap.channel),
                alphaMapUv: J && _(x.alphaMap.channel),
                vertexTangents: !!F.attributes.tangent && (pe || U),
                vertexColors: x.vertexColors,
                vertexAlphas: x.vertexColors === !0 && !!F.attributes.color && F.attributes.color.itemSize === 4,
                vertexUv1s: we,
                vertexUv2s: Se,
                vertexUv3s: We,
                pointsUvs: Q.isPoints === !0 && !!F.attributes.uv && (Te || J),
                fog: !!D,
                useFog: x.fog === !0,
                fogExp2: D && D.isFogExp2,
                flatShading: x.flatShading === !0,
                sizeAttenuation: x.sizeAttenuation === !0,
                logarithmicDepthBuffer: d,
                skinning: Q.isSkinnedMesh === !0,
                morphTargets: F.morphAttributes.position !== void 0,
                morphNormals: F.morphAttributes.normal !== void 0,
                morphColors: F.morphAttributes.color !== void 0,
                morphTargetsCount: re,
                morphTextureStride: se,
                numDirLights: T.directional.length,
                numPointLights: T.point.length,
                numSpotLights: T.spot.length,
                numSpotLightMaps: T.spotLightMap.length,
                numRectAreaLights: T.rectArea.length,
                numHemiLights: T.hemi.length,
                numDirLightShadows: T.directionalShadowMap.length,
                numPointLightShadows: T.pointShadowMap.length,
                numSpotLightShadows: T.spotShadowMap.length,
                numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
                numLightProbes: T.numLightProbes,
                numClippingPlanes: o.numPlanes,
                numClipIntersection: o.numIntersection,
                dithering: x.dithering,
                shadowMapEnabled: i.shadowMap.enabled && z.length > 0,
                shadowMapType: i.shadowMap.type,
                toneMapping: Xe,
                useLegacyLights: i._useLegacyLights,
                decodeVideoTexture: Te && x.map.isVideoTexture === !0 && je.getTransfer(x.map.colorSpace) === $e,
                premultipliedAlpha: x.premultipliedAlpha,
                doubleSided: x.side === Bt,
                flipSided: x.side === St,
                useDepthPacking: x.depthPacking >= 0,
                depthPacking: x.depthPacking || 0,
                index0AttributeName: x.index0AttributeName,
                extensionDerivatives: oe && x.extensions.derivatives === !0,
                extensionFragDepth: oe && x.extensions.fragDepth === !0,
                extensionDrawBuffers: oe && x.extensions.drawBuffers === !0,
                extensionShaderTextureLOD: oe && x.extensions.shaderTextureLOD === !0,
                extensionClipCullDistance: oe && x.extensions.clipCullDistance && n.has("WEBGL_clip_cull_distance"),
                rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
                rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
                rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
                rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
                customProgramCacheKey: x.customProgramCacheKey()
            };
        }
        function u(x) {
            const T = [];
            if (x.shaderID ? T.push(x.shaderID) : (T.push(x.customVertexShaderID), T.push(x.customFragmentShaderID)), x.defines !== void 0) for(const z in x.defines)T.push(z), T.push(x.defines[z]);
            return x.isRawShaderMaterial === !1 && (S(T, x), y(T, x), T.push(i.outputColorSpace)), T.push(x.customProgramCacheKey), T.join();
        }
        function S(x, T) {
            x.push(T.precision), x.push(T.outputColorSpace), x.push(T.envMapMode), x.push(T.envMapCubeUVHeight), x.push(T.mapUv), x.push(T.alphaMapUv), x.push(T.lightMapUv), x.push(T.aoMapUv), x.push(T.bumpMapUv), x.push(T.normalMapUv), x.push(T.displacementMapUv), x.push(T.emissiveMapUv), x.push(T.metalnessMapUv), x.push(T.roughnessMapUv), x.push(T.anisotropyMapUv), x.push(T.clearcoatMapUv), x.push(T.clearcoatNormalMapUv), x.push(T.clearcoatRoughnessMapUv), x.push(T.iridescenceMapUv), x.push(T.iridescenceThicknessMapUv), x.push(T.sheenColorMapUv), x.push(T.sheenRoughnessMapUv), x.push(T.specularMapUv), x.push(T.specularColorMapUv), x.push(T.specularIntensityMapUv), x.push(T.transmissionMapUv), x.push(T.thicknessMapUv), x.push(T.combine), x.push(T.fogExp2), x.push(T.sizeAttenuation), x.push(T.morphTargetsCount), x.push(T.morphAttributeCount), x.push(T.numDirLights), x.push(T.numPointLights), x.push(T.numSpotLights), x.push(T.numSpotLightMaps), x.push(T.numHemiLights), x.push(T.numRectAreaLights), x.push(T.numDirLightShadows), x.push(T.numPointLightShadows), x.push(T.numSpotLightShadows), x.push(T.numSpotLightShadowsWithMaps), x.push(T.numLightProbes), x.push(T.shadowMapType), x.push(T.toneMapping), x.push(T.numClippingPlanes), x.push(T.numClipIntersection), x.push(T.depthPacking);
        }
        function y(x, T) {
            a.disableAll(), T.isWebGL2 && a.enable(0), T.supportsVertexTextures && a.enable(1), T.instancing && a.enable(2), T.instancingColor && a.enable(3), T.matcap && a.enable(4), T.envMap && a.enable(5), T.normalMapObjectSpace && a.enable(6), T.normalMapTangentSpace && a.enable(7), T.clearcoat && a.enable(8), T.iridescence && a.enable(9), T.alphaTest && a.enable(10), T.vertexColors && a.enable(11), T.vertexAlphas && a.enable(12), T.vertexUv1s && a.enable(13), T.vertexUv2s && a.enable(14), T.vertexUv3s && a.enable(15), T.vertexTangents && a.enable(16), T.anisotropy && a.enable(17), T.alphaHash && a.enable(18), T.batching && a.enable(19), x.push(a.mask), a.disableAll(), T.fog && a.enable(0), T.useFog && a.enable(1), T.flatShading && a.enable(2), T.logarithmicDepthBuffer && a.enable(3), T.skinning && a.enable(4), T.morphTargets && a.enable(5), T.morphNormals && a.enable(6), T.morphColors && a.enable(7), T.premultipliedAlpha && a.enable(8), T.shadowMapEnabled && a.enable(9), T.useLegacyLights && a.enable(10), T.doubleSided && a.enable(11), T.flipSided && a.enable(12), T.useDepthPacking && a.enable(13), T.dithering && a.enable(14), T.transmission && a.enable(15), T.sheen && a.enable(16), T.opaque && a.enable(17), T.pointsUvs && a.enable(18), T.decodeVideoTexture && a.enable(19), x.push(a.mask);
        }
        function b(x) {
            const T = g[x.type];
            let z;
            if (T) {
                const H = Vt[T];
                z = ol.clone(H.uniforms);
            } else z = x.uniforms;
            return z;
        }
        function L(x, T) {
            let z;
            for(let H = 0, Q = l.length; H < Q; H++){
                const D = l[H];
                if (D.cacheKey === T) {
                    z = D, ++z.usedTimes;
                    break;
                }
            }
            return z === void 0 && (z = new Sf(i, T, x, s), l.push(z)), z;
        }
        function R(x) {
            if (--x.usedTimes === 0) {
                const T = l.indexOf(x);
                l[T] = l[l.length - 1], l.pop(), x.destroy();
            }
        }
        function A(x) {
            c.remove(x);
        }
        function G() {
            c.dispose();
        }
        return {
            getParameters: f,
            getProgramCacheKey: u,
            getUniforms: b,
            acquireProgram: L,
            releaseProgram: R,
            releaseShaderCache: A,
            programs: l,
            dispose: G
        };
    }
    function Af() {
        let i = new WeakMap;
        function e(s) {
            let o = i.get(s);
            return o === void 0 && (o = {}, i.set(s, o)), o;
        }
        function t(s) {
            i.delete(s);
        }
        function n(s, o, a) {
            i.get(s)[o] = a;
        }
        function r() {
            i = new WeakMap;
        }
        return {
            get: e,
            remove: t,
            update: n,
            dispose: r
        };
    }
    function Rf(i, e) {
        return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
    }
    function za(i, e) {
        return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
    }
    function ka() {
        const i = [];
        let e = 0;
        const t = [], n = [], r = [];
        function s() {
            e = 0, t.length = 0, n.length = 0, r.length = 0;
        }
        function o(d, p, m, g, _, f) {
            let u = i[e];
            return u === void 0 ? (u = {
                id: d.id,
                object: d,
                geometry: p,
                material: m,
                groupOrder: g,
                renderOrder: d.renderOrder,
                z: _,
                group: f
            }, i[e] = u) : (u.id = d.id, u.object = d, u.geometry = p, u.material = m, u.groupOrder = g, u.renderOrder = d.renderOrder, u.z = _, u.group = f), e++, u;
        }
        function a(d, p, m, g, _, f) {
            const u = o(d, p, m, g, _, f);
            m.transmission > 0 ? n.push(u) : m.transparent === !0 ? r.push(u) : t.push(u);
        }
        function c(d, p, m, g, _, f) {
            const u = o(d, p, m, g, _, f);
            m.transmission > 0 ? n.unshift(u) : m.transparent === !0 ? r.unshift(u) : t.unshift(u);
        }
        function l(d, p) {
            t.length > 1 && t.sort(d || Rf), n.length > 1 && n.sort(p || za), r.length > 1 && r.sort(p || za);
        }
        function h() {
            for(let d = e, p = i.length; d < p; d++){
                const m = i[d];
                if (m.id === null) break;
                m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
            }
        }
        return {
            opaque: t,
            transmissive: n,
            transparent: r,
            init: s,
            push: a,
            unshift: c,
            finish: h,
            sort: l
        };
    }
    function Cf() {
        let i = new WeakMap;
        function e(n, r) {
            const s = i.get(n);
            let o;
            return s === void 0 ? (o = new ka, i.set(n, [
                o
            ])) : r >= s.length ? (o = new ka, s.push(o)) : o = s[r], o;
        }
        function t() {
            i = new WeakMap;
        }
        return {
            get: e,
            dispose: t
        };
    }
    function Pf() {
        const i = {};
        return {
            get: function(e) {
                if (i[e.id] !== void 0) return i[e.id];
                let t;
                switch(e.type){
                    case "DirectionalLight":
                        t = {
                            direction: new P,
                            color: new Be
                        };
                        break;
                    case "SpotLight":
                        t = {
                            position: new P,
                            direction: new P,
                            color: new Be,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0
                        };
                        break;
                    case "PointLight":
                        t = {
                            position: new P,
                            color: new Be,
                            distance: 0,
                            decay: 0
                        };
                        break;
                    case "HemisphereLight":
                        t = {
                            direction: new P,
                            skyColor: new Be,
                            groundColor: new Be
                        };
                        break;
                    case "RectAreaLight":
                        t = {
                            color: new Be,
                            position: new P,
                            halfWidth: new P,
                            halfHeight: new P
                        };
                        break;
                }
                return i[e.id] = t, t;
            }
        };
    }
    function Lf() {
        const i = {};
        return {
            get: function(e) {
                if (i[e.id] !== void 0) return i[e.id];
                let t;
                switch(e.type){
                    case "DirectionalLight":
                        t = {
                            shadowBias: 0,
                            shadowNormalBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new be
                        };
                        break;
                    case "SpotLight":
                        t = {
                            shadowBias: 0,
                            shadowNormalBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new be
                        };
                        break;
                    case "PointLight":
                        t = {
                            shadowBias: 0,
                            shadowNormalBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new be,
                            shadowCameraNear: 1,
                            shadowCameraFar: 1e3
                        };
                        break;
                }
                return i[e.id] = t, t;
            }
        };
    }
    let Df = 0;
    function If(i, e) {
        return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
    }
    function Uf(i, e) {
        const t = new Pf, n = Lf(), r = {
            version: 0,
            hash: {
                directionalLength: -1,
                pointLength: -1,
                spotLength: -1,
                rectAreaLength: -1,
                hemiLength: -1,
                numDirectionalShadows: -1,
                numPointShadows: -1,
                numSpotShadows: -1,
                numSpotMaps: -1,
                numLightProbes: -1
            },
            ambient: [
                0,
                0,
                0
            ],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotLightMap: [],
            spotShadow: [],
            spotShadowMap: [],
            spotLightMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: [],
            numSpotLightShadowsWithMaps: 0,
            numLightProbes: 0
        };
        for(let h = 0; h < 9; h++)r.probe.push(new P);
        const s = new P, o = new it, a = new it;
        function c(h, d) {
            let p = 0, m = 0, g = 0;
            for(let H = 0; H < 9; H++)r.probe[H].set(0, 0, 0);
            let _ = 0, f = 0, u = 0, S = 0, y = 0, b = 0, L = 0, R = 0, A = 0, G = 0, x = 0;
            h.sort(If);
            const T = d === !0 ? Math.PI : 1;
            for(let H = 0, Q = h.length; H < Q; H++){
                const D = h[H], F = D.color, V = D.intensity, Y = D.distance, X = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
                if (D.isAmbientLight) p += F.r * V * T, m += F.g * V * T, g += F.b * V * T;
                else if (D.isLightProbe) {
                    for(let q = 0; q < 9; q++)r.probe[q].addScaledVector(D.sh.coefficients[q], V);
                    x++;
                } else if (D.isDirectionalLight) {
                    const q = t.get(D);
                    if (q.color.copy(D.color).multiplyScalar(D.intensity * T), D.castShadow) {
                        const j = D.shadow, re = n.get(D);
                        re.shadowBias = j.bias, re.shadowNormalBias = j.normalBias, re.shadowRadius = j.radius, re.shadowMapSize = j.mapSize, r.directionalShadow[_] = re, r.directionalShadowMap[_] = X, r.directionalShadowMatrix[_] = D.shadow.matrix, b++;
                    }
                    r.directional[_] = q, _++;
                } else if (D.isSpotLight) {
                    const q = t.get(D);
                    q.position.setFromMatrixPosition(D.matrixWorld), q.color.copy(F).multiplyScalar(V * T), q.distance = Y, q.coneCos = Math.cos(D.angle), q.penumbraCos = Math.cos(D.angle * (1 - D.penumbra)), q.decay = D.decay, r.spot[u] = q;
                    const j = D.shadow;
                    if (D.map && (r.spotLightMap[A] = D.map, A++, j.updateMatrices(D), D.castShadow && G++), r.spotLightMatrix[u] = j.matrix, D.castShadow) {
                        const re = n.get(D);
                        re.shadowBias = j.bias, re.shadowNormalBias = j.normalBias, re.shadowRadius = j.radius, re.shadowMapSize = j.mapSize, r.spotShadow[u] = re, r.spotShadowMap[u] = X, R++;
                    }
                    u++;
                } else if (D.isRectAreaLight) {
                    const q = t.get(D);
                    q.color.copy(F).multiplyScalar(V), q.halfWidth.set(D.width * .5, 0, 0), q.halfHeight.set(0, D.height * .5, 0), r.rectArea[S] = q, S++;
                } else if (D.isPointLight) {
                    const q = t.get(D);
                    if (q.color.copy(D.color).multiplyScalar(D.intensity * T), q.distance = D.distance, q.decay = D.decay, D.castShadow) {
                        const j = D.shadow, re = n.get(D);
                        re.shadowBias = j.bias, re.shadowNormalBias = j.normalBias, re.shadowRadius = j.radius, re.shadowMapSize = j.mapSize, re.shadowCameraNear = j.camera.near, re.shadowCameraFar = j.camera.far, r.pointShadow[f] = re, r.pointShadowMap[f] = X, r.pointShadowMatrix[f] = D.shadow.matrix, L++;
                    }
                    r.point[f] = q, f++;
                } else if (D.isHemisphereLight) {
                    const q = t.get(D);
                    q.skyColor.copy(D.color).multiplyScalar(V * T), q.groundColor.copy(D.groundColor).multiplyScalar(V * T), r.hemi[y] = q, y++;
                }
            }
            S > 0 && (e.isWebGL2 ? i.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = ae.LTC_FLOAT_1, r.rectAreaLTC2 = ae.LTC_FLOAT_2) : (r.rectAreaLTC1 = ae.LTC_HALF_1, r.rectAreaLTC2 = ae.LTC_HALF_2) : i.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = ae.LTC_FLOAT_1, r.rectAreaLTC2 = ae.LTC_FLOAT_2) : i.has("OES_texture_half_float_linear") === !0 ? (r.rectAreaLTC1 = ae.LTC_HALF_1, r.rectAreaLTC2 = ae.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = p, r.ambient[1] = m, r.ambient[2] = g;
            const z = r.hash;
            (z.directionalLength !== _ || z.pointLength !== f || z.spotLength !== u || z.rectAreaLength !== S || z.hemiLength !== y || z.numDirectionalShadows !== b || z.numPointShadows !== L || z.numSpotShadows !== R || z.numSpotMaps !== A || z.numLightProbes !== x) && (r.directional.length = _, r.spot.length = u, r.rectArea.length = S, r.point.length = f, r.hemi.length = y, r.directionalShadow.length = b, r.directionalShadowMap.length = b, r.pointShadow.length = L, r.pointShadowMap.length = L, r.spotShadow.length = R, r.spotShadowMap.length = R, r.directionalShadowMatrix.length = b, r.pointShadowMatrix.length = L, r.spotLightMatrix.length = R + A - G, r.spotLightMap.length = A, r.numSpotLightShadowsWithMaps = G, r.numLightProbes = x, z.directionalLength = _, z.pointLength = f, z.spotLength = u, z.rectAreaLength = S, z.hemiLength = y, z.numDirectionalShadows = b, z.numPointShadows = L, z.numSpotShadows = R, z.numSpotMaps = A, z.numLightProbes = x, r.version = Df++);
        }
        function l(h, d) {
            let p = 0, m = 0, g = 0, _ = 0, f = 0;
            const u = d.matrixWorldInverse;
            for(let S = 0, y = h.length; S < y; S++){
                const b = h[S];
                if (b.isDirectionalLight) {
                    const L = r.directional[p];
                    L.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), L.direction.sub(s), L.direction.transformDirection(u), p++;
                } else if (b.isSpotLight) {
                    const L = r.spot[g];
                    L.position.setFromMatrixPosition(b.matrixWorld), L.position.applyMatrix4(u), L.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), L.direction.sub(s), L.direction.transformDirection(u), g++;
                } else if (b.isRectAreaLight) {
                    const L = r.rectArea[_];
                    L.position.setFromMatrixPosition(b.matrixWorld), L.position.applyMatrix4(u), a.identity(), o.copy(b.matrixWorld), o.premultiply(u), a.extractRotation(o), L.halfWidth.set(b.width * .5, 0, 0), L.halfHeight.set(0, b.height * .5, 0), L.halfWidth.applyMatrix4(a), L.halfHeight.applyMatrix4(a), _++;
                } else if (b.isPointLight) {
                    const L = r.point[m];
                    L.position.setFromMatrixPosition(b.matrixWorld), L.position.applyMatrix4(u), m++;
                } else if (b.isHemisphereLight) {
                    const L = r.hemi[f];
                    L.direction.setFromMatrixPosition(b.matrixWorld), L.direction.transformDirection(u), f++;
                }
            }
        }
        return {
            setup: c,
            setupView: l,
            state: r
        };
    }
    function Ga(i, e) {
        const t = new Uf(i, e), n = [], r = [];
        function s() {
            n.length = 0, r.length = 0;
        }
        function o(d) {
            n.push(d);
        }
        function a(d) {
            r.push(d);
        }
        function c(d) {
            t.setup(n, d);
        }
        function l(d) {
            t.setupView(n, d);
        }
        return {
            init: s,
            state: {
                lightsArray: n,
                shadowsArray: r,
                lights: t
            },
            setupLights: c,
            setupLightsView: l,
            pushLight: o,
            pushShadow: a
        };
    }
    function Nf(i, e) {
        let t = new WeakMap;
        function n(s, o = 0) {
            const a = t.get(s);
            let c;
            return a === void 0 ? (c = new Ga(i, e), t.set(s, [
                c
            ])) : o >= a.length ? (c = new Ga(i, e), a.push(c)) : c = a[o], c;
        }
        function r() {
            t = new WeakMap;
        }
        return {
            get: n,
            dispose: r
        };
    }
    class Ff extends ri {
        constructor(e){
            super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Lc, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
        }
        copy(e) {
            return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
        }
    }
    class Of extends ri {
        constructor(e){
            super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
        }
        copy(e) {
            return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
        }
    }
    const Bf = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, zf = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
    function kf(i, e, t) {
        let n = new hs;
        const r = new be, s = new be, o = new Ze, a = new Ff({
            depthPacking: Dc
        }), c = new Of, l = {}, h = t.maxTextureSize, d = {
            [pn]: St,
            [St]: pn,
            [Bt]: Bt
        }, p = new Cn({
            defines: {
                VSM_SAMPLES: 8
            },
            uniforms: {
                shadow_pass: {
                    value: null
                },
                resolution: {
                    value: new be
                },
                radius: {
                    value: 4
                }
            },
            vertexShader: Bf,
            fragmentShader: zf
        }), m = p.clone();
        m.defines.HORIZONTAL_PASS = 1;
        const g = new Tt;
        g.setAttribute("position", new It(new Float32Array([
            -1,
            -1,
            .5,
            3,
            -1,
            .5,
            -1,
            3,
            .5
        ]), 3));
        const _ = new at(g, p), f = this;
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = to;
        let u = this.type;
        this.render = function(R, A, G) {
            if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || R.length === 0) return;
            const x = i.getRenderTarget(), T = i.getActiveCubeFace(), z = i.getActiveMipmapLevel(), H = i.state;
            H.setBlending(un), H.buffers.color.setClear(1, 1, 1, 1), H.buffers.depth.setTest(!0), H.setScissorTest(!1);
            const Q = u !== Zt && this.type === Zt, D = u === Zt && this.type !== Zt;
            for(let F = 0, V = R.length; F < V; F++){
                const Y = R[F], X = Y.shadow;
                if (X === void 0) {
                    console.warn("THREE.WebGLShadowMap:", Y, "has no shadow.");
                    continue;
                }
                if (X.autoUpdate === !1 && X.needsUpdate === !1) continue;
                r.copy(X.mapSize);
                const q = X.getFrameExtents();
                if (r.multiply(q), s.copy(X.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / q.x), r.x = s.x * q.x, X.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / q.y), r.y = s.y * q.y, X.mapSize.y = s.y)), X.map === null || Q === !0 || D === !0) {
                    const re = this.type !== Zt ? {
                        minFilter: yt,
                        magFilter: yt
                    } : {};
                    X.map !== null && X.map.dispose(), X.map = new An(r.x, r.y, re), X.map.texture.name = Y.name + ".shadowMap", X.camera.updateProjectionMatrix();
                }
                i.setRenderTarget(X.map), i.clear();
                const j = X.getViewportCount();
                for(let re = 0; re < j; re++){
                    const se = X.getViewport(re);
                    o.set(s.x * se.x, s.y * se.y, s.x * se.z, s.y * se.w), H.viewport(o), X.updateMatrices(Y, re), n = X.getFrustum(), b(A, G, X.camera, Y, this.type);
                }
                X.isPointLightShadow !== !0 && this.type === Zt && S(X, G), X.needsUpdate = !1;
            }
            u = this.type, f.needsUpdate = !1, i.setRenderTarget(x, T, z);
        };
        function S(R, A) {
            const G = e.update(_);
            p.defines.VSM_SAMPLES !== R.blurSamples && (p.defines.VSM_SAMPLES = R.blurSamples, m.defines.VSM_SAMPLES = R.blurSamples, p.needsUpdate = !0, m.needsUpdate = !0), R.mapPass === null && (R.mapPass = new An(r.x, r.y)), p.uniforms.shadow_pass.value = R.map.texture, p.uniforms.resolution.value = R.mapSize, p.uniforms.radius.value = R.radius, i.setRenderTarget(R.mapPass), i.clear(), i.renderBufferDirect(A, null, G, p, _, null), m.uniforms.shadow_pass.value = R.mapPass.texture, m.uniforms.resolution.value = R.mapSize, m.uniforms.radius.value = R.radius, i.setRenderTarget(R.map), i.clear(), i.renderBufferDirect(A, null, G, m, _, null);
        }
        function y(R, A, G, x) {
            let T = null;
            const z = G.isPointLight === !0 ? R.customDistanceMaterial : R.customDepthMaterial;
            if (z !== void 0) T = z;
            else if (T = G.isPointLight === !0 ? c : a, i.localClippingEnabled && A.clipShadows === !0 && Array.isArray(A.clippingPlanes) && A.clippingPlanes.length !== 0 || A.displacementMap && A.displacementScale !== 0 || A.alphaMap && A.alphaTest > 0 || A.map && A.alphaTest > 0) {
                const H = T.uuid, Q = A.uuid;
                let D = l[H];
                D === void 0 && (D = {}, l[H] = D);
                let F = D[Q];
                F === void 0 && (F = T.clone(), D[Q] = F, A.addEventListener("dispose", L)), T = F;
            }
            if (T.visible = A.visible, T.wireframe = A.wireframe, x === Zt ? T.side = A.shadowSide !== null ? A.shadowSide : A.side : T.side = A.shadowSide !== null ? A.shadowSide : d[A.side], T.alphaMap = A.alphaMap, T.alphaTest = A.alphaTest, T.map = A.map, T.clipShadows = A.clipShadows, T.clippingPlanes = A.clippingPlanes, T.clipIntersection = A.clipIntersection, T.displacementMap = A.displacementMap, T.displacementScale = A.displacementScale, T.displacementBias = A.displacementBias, T.wireframeLinewidth = A.wireframeLinewidth, T.linewidth = A.linewidth, G.isPointLight === !0 && T.isMeshDistanceMaterial === !0) {
                const H = i.properties.get(T);
                H.light = G;
            }
            return T;
        }
        function b(R, A, G, x, T) {
            if (R.visible === !1) return;
            if (R.layers.test(A.layers) && (R.isMesh || R.isLine || R.isPoints) && (R.castShadow || R.receiveShadow && T === Zt) && (!R.frustumCulled || n.intersectsObject(R))) {
                R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse, R.matrixWorld);
                const Q = e.update(R), D = R.material;
                if (Array.isArray(D)) {
                    const F = Q.groups;
                    for(let V = 0, Y = F.length; V < Y; V++){
                        const X = F[V], q = D[X.materialIndex];
                        if (q && q.visible) {
                            const j = y(R, q, x, T);
                            R.onBeforeShadow(i, R, A, G, Q, j, X), i.renderBufferDirect(G, null, Q, j, R, X), R.onAfterShadow(i, R, A, G, Q, j, X);
                        }
                    }
                } else if (D.visible) {
                    const F = y(R, D, x, T);
                    R.onBeforeShadow(i, R, A, G, Q, F, null), i.renderBufferDirect(G, null, Q, F, R, null), R.onAfterShadow(i, R, A, G, Q, F, null);
                }
            }
            const H = R.children;
            for(let Q = 0, D = H.length; Q < D; Q++)b(H[Q], A, G, x, T);
        }
        function L(R) {
            R.target.removeEventListener("dispose", L);
            for(const G in l){
                const x = l[G], T = R.target.uuid;
                T in x && (x[T].dispose(), delete x[T]);
            }
        }
    }
    function Gf(i, e, t) {
        const n = t.isWebGL2;
        function r() {
            let C = !1;
            const ie = new Ze;
            let oe = null;
            const we = new Ze(0, 0, 0, 0);
            return {
                setMask: function(Se) {
                    oe !== Se && !C && (i.colorMask(Se, Se, Se, Se), oe = Se);
                },
                setLocked: function(Se) {
                    C = Se;
                },
                setClear: function(Se, We, Xe, Qe, tt) {
                    tt === !0 && (Se *= Qe, We *= Qe, Xe *= Qe), ie.set(Se, We, Xe, Qe), we.equals(ie) === !1 && (i.clearColor(Se, We, Xe, Qe), we.copy(ie));
                },
                reset: function() {
                    C = !1, oe = null, we.set(-1, 0, 0, 0);
                }
            };
        }
        function s() {
            let C = !1, ie = null, oe = null, we = null;
            return {
                setTest: function(Se) {
                    Se ? De(i.DEPTH_TEST) : Te(i.DEPTH_TEST);
                },
                setMask: function(Se) {
                    ie !== Se && !C && (i.depthMask(Se), ie = Se);
                },
                setFunc: function(Se) {
                    if (oe !== Se) {
                        switch(Se){
                            case cc:
                                i.depthFunc(i.NEVER);
                                break;
                            case lc:
                                i.depthFunc(i.ALWAYS);
                                break;
                            case hc:
                                i.depthFunc(i.LESS);
                                break;
                            case Ki:
                                i.depthFunc(i.LEQUAL);
                                break;
                            case uc:
                                i.depthFunc(i.EQUAL);
                                break;
                            case dc:
                                i.depthFunc(i.GEQUAL);
                                break;
                            case fc:
                                i.depthFunc(i.GREATER);
                                break;
                            case pc:
                                i.depthFunc(i.NOTEQUAL);
                                break;
                            default:
                                i.depthFunc(i.LEQUAL);
                        }
                        oe = Se;
                    }
                },
                setLocked: function(Se) {
                    C = Se;
                },
                setClear: function(Se) {
                    we !== Se && (i.clearDepth(Se), we = Se);
                },
                reset: function() {
                    C = !1, ie = null, oe = null, we = null;
                }
            };
        }
        function o() {
            let C = !1, ie = null, oe = null, we = null, Se = null, We = null, Xe = null, Qe = null, tt = null;
            return {
                setTest: function(qe) {
                    C || (qe ? De(i.STENCIL_TEST) : Te(i.STENCIL_TEST));
                },
                setMask: function(qe) {
                    ie !== qe && !C && (i.stencilMask(qe), ie = qe);
                },
                setFunc: function(qe, rt, Gt) {
                    (oe !== qe || we !== rt || Se !== Gt) && (i.stencilFunc(qe, rt, Gt), oe = qe, we = rt, Se = Gt);
                },
                setOp: function(qe, rt, Gt) {
                    (We !== qe || Xe !== rt || Qe !== Gt) && (i.stencilOp(qe, rt, Gt), We = qe, Xe = rt, Qe = Gt);
                },
                setLocked: function(qe) {
                    C = qe;
                },
                setClear: function(qe) {
                    tt !== qe && (i.clearStencil(qe), tt = qe);
                },
                reset: function() {
                    C = !1, ie = null, oe = null, we = null, Se = null, We = null, Xe = null, Qe = null, tt = null;
                }
            };
        }
        const a = new r, c = new s, l = new o, h = new WeakMap, d = new WeakMap;
        let p = {}, m = {}, g = new WeakMap, _ = [], f = null, u = !1, S = null, y = null, b = null, L = null, R = null, A = null, G = null, x = new Be(0, 0, 0), T = 0, z = !1, H = null, Q = null, D = null, F = null, V = null;
        const Y = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
        let X = !1, q = 0;
        const j = i.getParameter(i.VERSION);
        j.indexOf("WebGL") !== -1 ? (q = parseFloat(/^WebGL (\d)/.exec(j)[1]), X = q >= 1) : j.indexOf("OpenGL ES") !== -1 && (q = parseFloat(/^OpenGL ES (\d)/.exec(j)[1]), X = q >= 2);
        let re = null, se = {};
        const W = i.getParameter(i.SCISSOR_BOX), K = i.getParameter(i.VIEWPORT), le = new Ze().fromArray(W), ve = new Ze().fromArray(K);
        function ge(C, ie, oe, we) {
            const Se = new Uint8Array(4), We = i.createTexture();
            i.bindTexture(C, We), i.texParameteri(C, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(C, i.TEXTURE_MAG_FILTER, i.NEAREST);
            for(let Xe = 0; Xe < oe; Xe++)n && (C === i.TEXTURE_3D || C === i.TEXTURE_2D_ARRAY) ? i.texImage3D(ie, 0, i.RGBA, 1, 1, we, 0, i.RGBA, i.UNSIGNED_BYTE, Se) : i.texImage2D(ie + Xe, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, Se);
            return We;
        }
        const Le = {};
        Le[i.TEXTURE_2D] = ge(i.TEXTURE_2D, i.TEXTURE_2D, 1), Le[i.TEXTURE_CUBE_MAP] = ge(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (Le[i.TEXTURE_2D_ARRAY] = ge(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Le[i.TEXTURE_3D] = ge(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), De(i.DEPTH_TEST), c.setFunc(Ki), Ue(!1), E(Es), De(i.CULL_FACE), pe(un);
        function De(C) {
            p[C] !== !0 && (i.enable(C), p[C] = !0);
        }
        function Te(C) {
            p[C] !== !1 && (i.disable(C), p[C] = !1);
        }
        function Ve(C, ie) {
            return m[C] !== ie ? (i.bindFramebuffer(C, ie), m[C] = ie, n && (C === i.DRAW_FRAMEBUFFER && (m[i.FRAMEBUFFER] = ie), C === i.FRAMEBUFFER && (m[i.DRAW_FRAMEBUFFER] = ie)), !0) : !1;
        }
        function N(C, ie) {
            let oe = _, we = !1;
            if (C) if (oe = g.get(ie), oe === void 0 && (oe = [], g.set(ie, oe)), C.isWebGLMultipleRenderTargets) {
                const Se = C.texture;
                if (oe.length !== Se.length || oe[0] !== i.COLOR_ATTACHMENT0) {
                    for(let We = 0, Xe = Se.length; We < Xe; We++)oe[We] = i.COLOR_ATTACHMENT0 + We;
                    oe.length = Se.length, we = !0;
                }
            } else oe[0] !== i.COLOR_ATTACHMENT0 && (oe[0] = i.COLOR_ATTACHMENT0, we = !0);
            else oe[0] !== i.BACK && (oe[0] = i.BACK, we = !0);
            we && (t.isWebGL2 ? i.drawBuffers(oe) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe));
        }
        function dt(C) {
            return f !== C ? (i.useProgram(C), f = C, !0) : !1;
        }
        const Me = {
            [Sn]: i.FUNC_ADD,
            [Yo]: i.FUNC_SUBTRACT,
            [jo]: i.FUNC_REVERSE_SUBTRACT
        };
        if (n) Me[ws] = i.MIN, Me[As] = i.MAX;
        else {
            const C = e.get("EXT_blend_minmax");
            C !== null && (Me[ws] = C.MIN_EXT, Me[As] = C.MAX_EXT);
        }
        const Re = {
            [Ko]: i.ZERO,
            [$o]: i.ONE,
            [Zo]: i.SRC_COLOR,
            [jr]: i.SRC_ALPHA,
            [ic]: i.SRC_ALPHA_SATURATE,
            [tc]: i.DST_COLOR,
            [Qo]: i.DST_ALPHA,
            [Jo]: i.ONE_MINUS_SRC_COLOR,
            [Kr]: i.ONE_MINUS_SRC_ALPHA,
            [nc]: i.ONE_MINUS_DST_COLOR,
            [ec]: i.ONE_MINUS_DST_ALPHA,
            [rc]: i.CONSTANT_COLOR,
            [sc]: i.ONE_MINUS_CONSTANT_COLOR,
            [ac]: i.CONSTANT_ALPHA,
            [oc]: i.ONE_MINUS_CONSTANT_ALPHA
        };
        function pe(C, ie, oe, we, Se, We, Xe, Qe, tt, qe) {
            if (C === un) {
                u === !0 && (Te(i.BLEND), u = !1);
                return;
            }
            if (u === !1 && (De(i.BLEND), u = !0), C !== qo) {
                if (C !== S || qe !== z) {
                    if ((y !== Sn || R !== Sn) && (i.blendEquation(i.FUNC_ADD), y = Sn, R = Sn), qe) switch(C){
                        case Jn:
                            i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
                            break;
                        case Yr:
                            i.blendFunc(i.ONE, i.ONE);
                            break;
                        case Ts:
                            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
                            break;
                        case bs:
                            i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", C);
                            break;
                    }
                    else switch(C){
                        case Jn:
                            i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
                            break;
                        case Yr:
                            i.blendFunc(i.SRC_ALPHA, i.ONE);
                            break;
                        case Ts:
                            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
                            break;
                        case bs:
                            i.blendFunc(i.ZERO, i.SRC_COLOR);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", C);
                            break;
                    }
                    b = null, L = null, A = null, G = null, x.set(0, 0, 0), T = 0, S = C, z = qe;
                }
                return;
            }
            Se = Se || ie, We = We || oe, Xe = Xe || we, (ie !== y || Se !== R) && (i.blendEquationSeparate(Me[ie], Me[Se]), y = ie, R = Se), (oe !== b || we !== L || We !== A || Xe !== G) && (i.blendFuncSeparate(Re[oe], Re[we], Re[We], Re[Xe]), b = oe, L = we, A = We, G = Xe), (Qe.equals(x) === !1 || tt !== T) && (i.blendColor(Qe.r, Qe.g, Qe.b, tt), x.copy(Qe), T = tt), S = C, z = !1;
        }
        function Ke(C, ie) {
            C.side === Bt ? Te(i.CULL_FACE) : De(i.CULL_FACE);
            let oe = C.side === St;
            ie && (oe = !oe), Ue(oe), C.blending === Jn && C.transparent === !1 ? pe(un) : pe(C.blending, C.blendEquation, C.blendSrc, C.blendDst, C.blendEquationAlpha, C.blendSrcAlpha, C.blendDstAlpha, C.blendColor, C.blendAlpha, C.premultipliedAlpha), c.setFunc(C.depthFunc), c.setTest(C.depthTest), c.setMask(C.depthWrite), a.setMask(C.colorWrite);
            const we = C.stencilWrite;
            l.setTest(we), we && (l.setMask(C.stencilWriteMask), l.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask), l.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)), U(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits), C.alphaToCoverage === !0 ? De(i.SAMPLE_ALPHA_TO_COVERAGE) : Te(i.SAMPLE_ALPHA_TO_COVERAGE);
        }
        function Ue(C) {
            H !== C && (C ? i.frontFace(i.CW) : i.frontFace(i.CCW), H = C);
        }
        function E(C) {
            C !== Wo ? (De(i.CULL_FACE), C !== Q && (C === Es ? i.cullFace(i.BACK) : C === Xo ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : Te(i.CULL_FACE), Q = C;
        }
        function v(C) {
            C !== D && (X && i.lineWidth(C), D = C);
        }
        function U(C, ie, oe) {
            C ? (De(i.POLYGON_OFFSET_FILL), (F !== ie || V !== oe) && (i.polygonOffset(ie, oe), F = ie, V = oe)) : Te(i.POLYGON_OFFSET_FILL);
        }
        function ee(C) {
            C ? De(i.SCISSOR_TEST) : Te(i.SCISSOR_TEST);
        }
        function Z(C) {
            C === void 0 && (C = i.TEXTURE0 + Y - 1), re !== C && (i.activeTexture(C), re = C);
        }
        function te(C, ie, oe) {
            oe === void 0 && (re === null ? oe = i.TEXTURE0 + Y - 1 : oe = re);
            let we = se[oe];
            we === void 0 && (we = {
                type: void 0,
                texture: void 0
            }, se[oe] = we), (we.type !== C || we.texture !== ie) && (re !== oe && (i.activeTexture(oe), re = oe), i.bindTexture(C, ie || Le[C]), we.type = C, we.texture = ie);
        }
        function me() {
            const C = se[re];
            C !== void 0 && C.type !== void 0 && (i.bindTexture(C.type, null), C.type = void 0, C.texture = void 0);
        }
        function ce() {
            try {
                i.compressedTexImage2D.apply(i, arguments);
            } catch (C) {
                console.error("THREE.WebGLState:", C);
            }
        }
        function fe() {
            try {
                i.compressedTexImage3D.apply(i, arguments);
            } catch (C) {
                console.error("THREE.WebGLState:", C);
            }
        }
        function Ee() {
            try {
                i.texSubImage2D.apply(i, arguments);
            } catch (C) {
                console.error("THREE.WebGLState:", C);
            }
        }
        function Ne() {
            try {
                i.texSubImage3D.apply(i, arguments);
            } catch (C) {
                console.error("THREE.WebGLState:", C);
            }
        }
        function $() {
            try {
                i.compressedTexSubImage2D.apply(i, arguments);
            } catch (C) {
                console.error("THREE.WebGLState:", C);
            }
        }
        function Ye() {
            try {
                i.compressedTexSubImage3D.apply(i, arguments);
            } catch (C) {
                console.error("THREE.WebGLState:", C);
            }
        }
        function ze() {
            try {
                i.texStorage2D.apply(i, arguments);
            } catch (C) {
                console.error("THREE.WebGLState:", C);
            }
        }
        function Ce() {
            try {
                i.texStorage3D.apply(i, arguments);
            } catch (C) {
                console.error("THREE.WebGLState:", C);
            }
        }
        function ye() {
            try {
                i.texImage2D.apply(i, arguments);
            } catch (C) {
                console.error("THREE.WebGLState:", C);
            }
        }
        function he() {
            try {
                i.texImage3D.apply(i, arguments);
            } catch (C) {
                console.error("THREE.WebGLState:", C);
            }
        }
        function w(C) {
            le.equals(C) === !1 && (i.scissor(C.x, C.y, C.z, C.w), le.copy(C));
        }
        function ne(C) {
            ve.equals(C) === !1 && (i.viewport(C.x, C.y, C.z, C.w), ve.copy(C));
        }
        function _e(C, ie) {
            let oe = d.get(ie);
            oe === void 0 && (oe = new WeakMap, d.set(ie, oe));
            let we = oe.get(C);
            we === void 0 && (we = i.getUniformBlockIndex(ie, C.name), oe.set(C, we));
        }
        function de(C, ie) {
            const we = d.get(ie).get(C);
            h.get(ie) !== we && (i.uniformBlockBinding(ie, we, C.__bindingPointIndex), h.set(ie, we));
        }
        function J() {
            i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), n === !0 && (i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null)), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), p = {}, re = null, se = {}, m = {}, g = new WeakMap, _ = [], f = null, u = !1, S = null, y = null, b = null, L = null, R = null, A = null, G = null, x = new Be(0, 0, 0), T = 0, z = !1, H = null, Q = null, D = null, F = null, V = null, le.set(0, 0, i.canvas.width, i.canvas.height), ve.set(0, 0, i.canvas.width, i.canvas.height), a.reset(), c.reset(), l.reset();
        }
        return {
            buffers: {
                color: a,
                depth: c,
                stencil: l
            },
            enable: De,
            disable: Te,
            bindFramebuffer: Ve,
            drawBuffers: N,
            useProgram: dt,
            setBlending: pe,
            setMaterial: Ke,
            setFlipSided: Ue,
            setCullFace: E,
            setLineWidth: v,
            setPolygonOffset: U,
            setScissorTest: ee,
            activeTexture: Z,
            bindTexture: te,
            unbindTexture: me,
            compressedTexImage2D: ce,
            compressedTexImage3D: fe,
            texImage2D: ye,
            texImage3D: he,
            updateUBOMapping: _e,
            uniformBlockBinding: de,
            texStorage2D: ze,
            texStorage3D: Ce,
            texSubImage2D: Ee,
            texSubImage3D: Ne,
            compressedTexSubImage2D: $,
            compressedTexSubImage3D: Ye,
            scissor: w,
            viewport: ne,
            reset: J
        };
    }
    function Hf(i, e, t, n, r, s, o) {
        const a = r.isWebGL2, c = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), h = new WeakMap;
        let d;
        const p = new WeakMap;
        let m = !1;
        try {
            m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
        } catch  {}
        function g(E, v) {
            return m ? new OffscreenCanvas(E, v) : er("canvas");
        }
        function _(E, v, U, ee) {
            let Z = 1;
            if ((E.width > ee || E.height > ee) && (Z = ee / Math.max(E.width, E.height)), Z < 1 || v === !0) if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap) {
                const te = v ? ns : Math.floor, me = te(Z * E.width), ce = te(Z * E.height);
                d === void 0 && (d = g(me, ce));
                const fe = U ? g(me, ce) : d;
                return fe.width = me, fe.height = ce, fe.getContext("2d").drawImage(E, 0, 0, me, ce), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + E.width + "x" + E.height + ") to (" + me + "x" + ce + ")."), fe;
            } else return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + E.width + "x" + E.height + ")."), E;
            return E;
        }
        function f(E) {
            return ia(E.width) && ia(E.height);
        }
        function u(E) {
            return a ? !1 : E.wrapS !== zt || E.wrapT !== zt || E.minFilter !== yt && E.minFilter !== Lt;
        }
        function S(E, v) {
            return E.generateMipmaps && v && E.minFilter !== yt && E.minFilter !== Lt;
        }
        function y(E) {
            i.generateMipmap(E);
        }
        function b(E, v, U, ee, Z = !1) {
            if (a === !1) return v;
            if (E !== null) {
                if (i[E] !== void 0) return i[E];
                console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
            }
            let te = v;
            if (v === i.RED && (U === i.FLOAT && (te = i.R32F), U === i.HALF_FLOAT && (te = i.R16F), U === i.UNSIGNED_BYTE && (te = i.R8)), v === i.RED_INTEGER && (U === i.UNSIGNED_BYTE && (te = i.R8UI), U === i.UNSIGNED_SHORT && (te = i.R16UI), U === i.UNSIGNED_INT && (te = i.R32UI), U === i.BYTE && (te = i.R8I), U === i.SHORT && (te = i.R16I), U === i.INT && (te = i.R32I)), v === i.RG && (U === i.FLOAT && (te = i.RG32F), U === i.HALF_FLOAT && (te = i.RG16F), U === i.UNSIGNED_BYTE && (te = i.RG8)), v === i.RGBA) {
                const me = Z ? $i : je.getTransfer(ee);
                U === i.FLOAT && (te = i.RGBA32F), U === i.HALF_FLOAT && (te = i.RGBA16F), U === i.UNSIGNED_BYTE && (te = me === $e ? i.SRGB8_ALPHA8 : i.RGBA8), U === i.UNSIGNED_SHORT_4_4_4_4 && (te = i.RGBA4), U === i.UNSIGNED_SHORT_5_5_5_1 && (te = i.RGB5_A1);
            }
            return (te === i.R16F || te === i.R32F || te === i.RG16F || te === i.RG32F || te === i.RGBA16F || te === i.RGBA32F) && e.get("EXT_color_buffer_float"), te;
        }
        function L(E, v, U) {
            return S(E, U) === !0 || E.isFramebufferTexture && E.minFilter !== yt && E.minFilter !== Lt ? Math.log2(Math.max(v.width, v.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? v.mipmaps.length : 1;
        }
        function R(E) {
            return E === yt || E === Rs || E === fr ? i.NEAREST : i.LINEAR;
        }
        function A(E) {
            const v = E.target;
            v.removeEventListener("dispose", A), x(v), v.isVideoTexture && h.delete(v);
        }
        function G(E) {
            const v = E.target;
            v.removeEventListener("dispose", G), z(v);
        }
        function x(E) {
            const v = n.get(E);
            if (v.__webglInit === void 0) return;
            const U = E.source, ee = p.get(U);
            if (ee) {
                const Z = ee[v.__cacheKey];
                Z.usedTimes--, Z.usedTimes === 0 && T(E), Object.keys(ee).length === 0 && p.delete(U);
            }
            n.remove(E);
        }
        function T(E) {
            const v = n.get(E);
            i.deleteTexture(v.__webglTexture);
            const U = E.source, ee = p.get(U);
            delete ee[v.__cacheKey], o.memory.textures--;
        }
        function z(E) {
            const v = E.texture, U = n.get(E), ee = n.get(v);
            if (ee.__webglTexture !== void 0 && (i.deleteTexture(ee.__webglTexture), o.memory.textures--), E.depthTexture && E.depthTexture.dispose(), E.isWebGLCubeRenderTarget) for(let Z = 0; Z < 6; Z++){
                if (Array.isArray(U.__webglFramebuffer[Z])) for(let te = 0; te < U.__webglFramebuffer[Z].length; te++)i.deleteFramebuffer(U.__webglFramebuffer[Z][te]);
                else i.deleteFramebuffer(U.__webglFramebuffer[Z]);
                U.__webglDepthbuffer && i.deleteRenderbuffer(U.__webglDepthbuffer[Z]);
            }
            else {
                if (Array.isArray(U.__webglFramebuffer)) for(let Z = 0; Z < U.__webglFramebuffer.length; Z++)i.deleteFramebuffer(U.__webglFramebuffer[Z]);
                else i.deleteFramebuffer(U.__webglFramebuffer);
                if (U.__webglDepthbuffer && i.deleteRenderbuffer(U.__webglDepthbuffer), U.__webglMultisampledFramebuffer && i.deleteFramebuffer(U.__webglMultisampledFramebuffer), U.__webglColorRenderbuffer) for(let Z = 0; Z < U.__webglColorRenderbuffer.length; Z++)U.__webglColorRenderbuffer[Z] && i.deleteRenderbuffer(U.__webglColorRenderbuffer[Z]);
                U.__webglDepthRenderbuffer && i.deleteRenderbuffer(U.__webglDepthRenderbuffer);
            }
            if (E.isWebGLMultipleRenderTargets) for(let Z = 0, te = v.length; Z < te; Z++){
                const me = n.get(v[Z]);
                me.__webglTexture && (i.deleteTexture(me.__webglTexture), o.memory.textures--), n.remove(v[Z]);
            }
            n.remove(v), n.remove(E);
        }
        let H = 0;
        function Q() {
            H = 0;
        }
        function D() {
            const E = H;
            return E >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + r.maxTextures), H += 1, E;
        }
        function F(E) {
            const v = [];
            return v.push(E.wrapS), v.push(E.wrapT), v.push(E.wrapR || 0), v.push(E.magFilter), v.push(E.minFilter), v.push(E.anisotropy), v.push(E.internalFormat), v.push(E.format), v.push(E.type), v.push(E.generateMipmaps), v.push(E.premultiplyAlpha), v.push(E.flipY), v.push(E.unpackAlignment), v.push(E.colorSpace), v.join();
        }
        function V(E, v) {
            const U = n.get(E);
            if (E.isVideoTexture && Ke(E), E.isRenderTargetTexture === !1 && E.version > 0 && U.__version !== E.version) {
                const ee = E.image;
                if (ee === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
                else if (ee.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
                else {
                    le(U, E, v);
                    return;
                }
            }
            t.bindTexture(i.TEXTURE_2D, U.__webglTexture, i.TEXTURE0 + v);
        }
        function Y(E, v) {
            const U = n.get(E);
            if (E.version > 0 && U.__version !== E.version) {
                le(U, E, v);
                return;
            }
            t.bindTexture(i.TEXTURE_2D_ARRAY, U.__webglTexture, i.TEXTURE0 + v);
        }
        function X(E, v) {
            const U = n.get(E);
            if (E.version > 0 && U.__version !== E.version) {
                le(U, E, v);
                return;
            }
            t.bindTexture(i.TEXTURE_3D, U.__webglTexture, i.TEXTURE0 + v);
        }
        function q(E, v) {
            const U = n.get(E);
            if (E.version > 0 && U.__version !== E.version) {
                ve(U, E, v);
                return;
            }
            t.bindTexture(i.TEXTURE_CUBE_MAP, U.__webglTexture, i.TEXTURE0 + v);
        }
        const j = {
            [Jr]: i.REPEAT,
            [zt]: i.CLAMP_TO_EDGE,
            [Qr]: i.MIRRORED_REPEAT
        }, re = {
            [yt]: i.NEAREST,
            [Rs]: i.NEAREST_MIPMAP_NEAREST,
            [fr]: i.NEAREST_MIPMAP_LINEAR,
            [Lt]: i.LINEAR,
            [Sc]: i.LINEAR_MIPMAP_NEAREST,
            [pi]: i.LINEAR_MIPMAP_LINEAR
        }, se = {
            [Uc]: i.NEVER,
            [kc]: i.ALWAYS,
            [Nc]: i.LESS,
            [go]: i.LEQUAL,
            [Fc]: i.EQUAL,
            [zc]: i.GEQUAL,
            [Oc]: i.GREATER,
            [Bc]: i.NOTEQUAL
        };
        function W(E, v, U) {
            if (U ? (i.texParameteri(E, i.TEXTURE_WRAP_S, j[v.wrapS]), i.texParameteri(E, i.TEXTURE_WRAP_T, j[v.wrapT]), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, j[v.wrapR]), i.texParameteri(E, i.TEXTURE_MAG_FILTER, re[v.magFilter]), i.texParameteri(E, i.TEXTURE_MIN_FILTER, re[v.minFilter])) : (i.texParameteri(E, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(E, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, i.CLAMP_TO_EDGE), (v.wrapS !== zt || v.wrapT !== zt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), i.texParameteri(E, i.TEXTURE_MAG_FILTER, R(v.magFilter)), i.texParameteri(E, i.TEXTURE_MIN_FILTER, R(v.minFilter)), v.minFilter !== yt && v.minFilter !== Lt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), v.compareFunction && (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, se[v.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
                const ee = e.get("EXT_texture_filter_anisotropic");
                if (v.magFilter === yt || v.minFilter !== fr && v.minFilter !== pi || v.type === ln && e.has("OES_texture_float_linear") === !1 || a === !1 && v.type === mi && e.has("OES_texture_half_float_linear") === !1) return;
                (v.anisotropy > 1 || n.get(v).__currentAnisotropy) && (i.texParameterf(E, ee.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, r.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy);
            }
        }
        function K(E, v) {
            let U = !1;
            E.__webglInit === void 0 && (E.__webglInit = !0, v.addEventListener("dispose", A));
            const ee = v.source;
            let Z = p.get(ee);
            Z === void 0 && (Z = {}, p.set(ee, Z));
            const te = F(v);
            if (te !== E.__cacheKey) {
                Z[te] === void 0 && (Z[te] = {
                    texture: i.createTexture(),
                    usedTimes: 0
                }, o.memory.textures++, U = !0), Z[te].usedTimes++;
                const me = Z[E.__cacheKey];
                me !== void 0 && (Z[E.__cacheKey].usedTimes--, me.usedTimes === 0 && T(v)), E.__cacheKey = te, E.__webglTexture = Z[te].texture;
            }
            return U;
        }
        function le(E, v, U) {
            let ee = i.TEXTURE_2D;
            (v.isDataArrayTexture || v.isCompressedArrayTexture) && (ee = i.TEXTURE_2D_ARRAY), v.isData3DTexture && (ee = i.TEXTURE_3D);
            const Z = K(E, v), te = v.source;
            t.bindTexture(ee, E.__webglTexture, i.TEXTURE0 + U);
            const me = n.get(te);
            if (te.version !== me.__version || Z === !0) {
                t.activeTexture(i.TEXTURE0 + U);
                const ce = je.getPrimaries(je.workingColorSpace), fe = v.colorSpace === Dt ? null : je.getPrimaries(v.colorSpace), Ee = v.colorSpace === Dt || ce === fe ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
                i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, v.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, v.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ee);
                const Ne = u(v) && f(v.image) === !1;
                let $ = _(v.image, Ne, !1, r.maxTextureSize);
                $ = Ue(v, $);
                const Ye = f($) || a, ze = s.convert(v.format, v.colorSpace);
                let Ce = s.convert(v.type), ye = b(v.internalFormat, ze, Ce, v.colorSpace, v.isVideoTexture);
                W(ee, v, Ye);
                let he;
                const w = v.mipmaps, ne = a && v.isVideoTexture !== !0 && ye !== fo, _e = me.__version === void 0 || Z === !0, de = L(v, $, Ye);
                if (v.isDepthTexture) ye = i.DEPTH_COMPONENT, a ? v.type === ln ? ye = i.DEPTH_COMPONENT32F : v.type === cn ? ye = i.DEPTH_COMPONENT24 : v.type === Tn ? ye = i.DEPTH24_STENCIL8 : ye = i.DEPTH_COMPONENT16 : v.type === ln && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), v.format === bn && ye === i.DEPTH_COMPONENT && v.type !== os && v.type !== cn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), v.type = cn, Ce = s.convert(v.type)), v.format === ni && ye === i.DEPTH_COMPONENT && (ye = i.DEPTH_STENCIL, v.type !== Tn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), v.type = Tn, Ce = s.convert(v.type))), _e && (ne ? t.texStorage2D(i.TEXTURE_2D, 1, ye, $.width, $.height) : t.texImage2D(i.TEXTURE_2D, 0, ye, $.width, $.height, 0, ze, Ce, null));
                else if (v.isDataTexture) if (w.length > 0 && Ye) {
                    ne && _e && t.texStorage2D(i.TEXTURE_2D, de, ye, w[0].width, w[0].height);
                    for(let J = 0, C = w.length; J < C; J++)he = w[J], ne ? t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, he.width, he.height, ze, Ce, he.data) : t.texImage2D(i.TEXTURE_2D, J, ye, he.width, he.height, 0, ze, Ce, he.data);
                    v.generateMipmaps = !1;
                } else ne ? (_e && t.texStorage2D(i.TEXTURE_2D, de, ye, $.width, $.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, $.width, $.height, ze, Ce, $.data)) : t.texImage2D(i.TEXTURE_2D, 0, ye, $.width, $.height, 0, ze, Ce, $.data);
                else if (v.isCompressedTexture) if (v.isCompressedArrayTexture) {
                    ne && _e && t.texStorage3D(i.TEXTURE_2D_ARRAY, de, ye, w[0].width, w[0].height, $.depth);
                    for(let J = 0, C = w.length; J < C; J++)he = w[J], v.format !== kt ? ze !== null ? ne ? t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, 0, he.width, he.height, $.depth, ze, he.data, 0, 0) : t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, J, ye, he.width, he.height, $.depth, 0, he.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : ne ? t.texSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, 0, he.width, he.height, $.depth, ze, Ce, he.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, J, ye, he.width, he.height, $.depth, 0, ze, Ce, he.data);
                } else {
                    ne && _e && t.texStorage2D(i.TEXTURE_2D, de, ye, w[0].width, w[0].height);
                    for(let J = 0, C = w.length; J < C; J++)he = w[J], v.format !== kt ? ze !== null ? ne ? t.compressedTexSubImage2D(i.TEXTURE_2D, J, 0, 0, he.width, he.height, ze, he.data) : t.compressedTexImage2D(i.TEXTURE_2D, J, ye, he.width, he.height, 0, he.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : ne ? t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, he.width, he.height, ze, Ce, he.data) : t.texImage2D(i.TEXTURE_2D, J, ye, he.width, he.height, 0, ze, Ce, he.data);
                }
                else if (v.isDataArrayTexture) ne ? (_e && t.texStorage3D(i.TEXTURE_2D_ARRAY, de, ye, $.width, $.height, $.depth), t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, $.width, $.height, $.depth, ze, Ce, $.data)) : t.texImage3D(i.TEXTURE_2D_ARRAY, 0, ye, $.width, $.height, $.depth, 0, ze, Ce, $.data);
                else if (v.isData3DTexture) ne ? (_e && t.texStorage3D(i.TEXTURE_3D, de, ye, $.width, $.height, $.depth), t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, $.width, $.height, $.depth, ze, Ce, $.data)) : t.texImage3D(i.TEXTURE_3D, 0, ye, $.width, $.height, $.depth, 0, ze, Ce, $.data);
                else if (v.isFramebufferTexture) {
                    if (_e) if (ne) t.texStorage2D(i.TEXTURE_2D, de, ye, $.width, $.height);
                    else {
                        let J = $.width, C = $.height;
                        for(let ie = 0; ie < de; ie++)t.texImage2D(i.TEXTURE_2D, ie, ye, J, C, 0, ze, Ce, null), J >>= 1, C >>= 1;
                    }
                } else if (w.length > 0 && Ye) {
                    ne && _e && t.texStorage2D(i.TEXTURE_2D, de, ye, w[0].width, w[0].height);
                    for(let J = 0, C = w.length; J < C; J++)he = w[J], ne ? t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, ze, Ce, he) : t.texImage2D(i.TEXTURE_2D, J, ye, ze, Ce, he);
                    v.generateMipmaps = !1;
                } else ne ? (_e && t.texStorage2D(i.TEXTURE_2D, de, ye, $.width, $.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ze, Ce, $)) : t.texImage2D(i.TEXTURE_2D, 0, ye, ze, Ce, $);
                S(v, Ye) && y(ee), me.__version = te.version, v.onUpdate && v.onUpdate(v);
            }
            E.__version = v.version;
        }
        function ve(E, v, U) {
            if (v.image.length !== 6) return;
            const ee = K(E, v), Z = v.source;
            t.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + U);
            const te = n.get(Z);
            if (Z.version !== te.__version || ee === !0) {
                t.activeTexture(i.TEXTURE0 + U);
                const me = je.getPrimaries(je.workingColorSpace), ce = v.colorSpace === Dt ? null : je.getPrimaries(v.colorSpace), fe = v.colorSpace === Dt || me === ce ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
                i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, v.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, v.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, fe);
                const Ee = v.isCompressedTexture || v.image[0].isCompressedTexture, Ne = v.image[0] && v.image[0].isDataTexture, $ = [];
                for(let J = 0; J < 6; J++)!Ee && !Ne ? $[J] = _(v.image[J], !1, !0, r.maxCubemapSize) : $[J] = Ne ? v.image[J].image : v.image[J], $[J] = Ue(v, $[J]);
                const Ye = $[0], ze = f(Ye) || a, Ce = s.convert(v.format, v.colorSpace), ye = s.convert(v.type), he = b(v.internalFormat, Ce, ye, v.colorSpace), w = a && v.isVideoTexture !== !0, ne = te.__version === void 0 || ee === !0;
                let _e = L(v, Ye, ze);
                W(i.TEXTURE_CUBE_MAP, v, ze);
                let de;
                if (Ee) {
                    w && ne && t.texStorage2D(i.TEXTURE_CUBE_MAP, _e, he, Ye.width, Ye.height);
                    for(let J = 0; J < 6; J++){
                        de = $[J].mipmaps;
                        for(let C = 0; C < de.length; C++){
                            const ie = de[C];
                            v.format !== kt ? Ce !== null ? w ? t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, C, 0, 0, ie.width, ie.height, Ce, ie.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, C, he, ie.width, ie.height, 0, ie.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : w ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, C, 0, 0, ie.width, ie.height, Ce, ye, ie.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, C, he, ie.width, ie.height, 0, Ce, ye, ie.data);
                        }
                    }
                } else {
                    de = v.mipmaps, w && ne && (de.length > 0 && _e++, t.texStorage2D(i.TEXTURE_CUBE_MAP, _e, he, $[0].width, $[0].height));
                    for(let J = 0; J < 6; J++)if (Ne) {
                        w ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, 0, 0, $[J].width, $[J].height, Ce, ye, $[J].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, he, $[J].width, $[J].height, 0, Ce, ye, $[J].data);
                        for(let C = 0; C < de.length; C++){
                            const oe = de[C].image[J].image;
                            w ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, C + 1, 0, 0, oe.width, oe.height, Ce, ye, oe.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, C + 1, he, oe.width, oe.height, 0, Ce, ye, oe.data);
                        }
                    } else {
                        w ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, 0, 0, Ce, ye, $[J]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, he, Ce, ye, $[J]);
                        for(let C = 0; C < de.length; C++){
                            const ie = de[C];
                            w ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, C + 1, 0, 0, Ce, ye, ie.image[J]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, C + 1, he, Ce, ye, ie.image[J]);
                        }
                    }
                }
                S(v, ze) && y(i.TEXTURE_CUBE_MAP), te.__version = Z.version, v.onUpdate && v.onUpdate(v);
            }
            E.__version = v.version;
        }
        function ge(E, v, U, ee, Z, te) {
            const me = s.convert(U.format, U.colorSpace), ce = s.convert(U.type), fe = b(U.internalFormat, me, ce, U.colorSpace);
            if (!n.get(v).__hasExternalTextures) {
                const Ne = Math.max(1, v.width >> te), $ = Math.max(1, v.height >> te);
                Z === i.TEXTURE_3D || Z === i.TEXTURE_2D_ARRAY ? t.texImage3D(Z, te, fe, Ne, $, v.depth, 0, me, ce, null) : t.texImage2D(Z, te, fe, Ne, $, 0, me, ce, null);
            }
            t.bindFramebuffer(i.FRAMEBUFFER, E), pe(v) ? c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, ee, Z, n.get(U).__webglTexture, 0, Re(v)) : (Z === i.TEXTURE_2D || Z >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, ee, Z, n.get(U).__webglTexture, te), t.bindFramebuffer(i.FRAMEBUFFER, null);
        }
        function Le(E, v, U) {
            if (i.bindRenderbuffer(i.RENDERBUFFER, E), v.depthBuffer && !v.stencilBuffer) {
                let ee = a === !0 ? i.DEPTH_COMPONENT24 : i.DEPTH_COMPONENT16;
                if (U || pe(v)) {
                    const Z = v.depthTexture;
                    Z && Z.isDepthTexture && (Z.type === ln ? ee = i.DEPTH_COMPONENT32F : Z.type === cn && (ee = i.DEPTH_COMPONENT24));
                    const te = Re(v);
                    pe(v) ? c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, te, ee, v.width, v.height) : i.renderbufferStorageMultisample(i.RENDERBUFFER, te, ee, v.width, v.height);
                } else i.renderbufferStorage(i.RENDERBUFFER, ee, v.width, v.height);
                i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, E);
            } else if (v.depthBuffer && v.stencilBuffer) {
                const ee = Re(v);
                U && pe(v) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ee, i.DEPTH24_STENCIL8, v.width, v.height) : pe(v) ? c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ee, i.DEPTH24_STENCIL8, v.width, v.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, v.width, v.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, E);
            } else {
                const ee = v.isWebGLMultipleRenderTargets === !0 ? v.texture : [
                    v.texture
                ];
                for(let Z = 0; Z < ee.length; Z++){
                    const te = ee[Z], me = s.convert(te.format, te.colorSpace), ce = s.convert(te.type), fe = b(te.internalFormat, me, ce, te.colorSpace), Ee = Re(v);
                    U && pe(v) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Ee, fe, v.width, v.height) : pe(v) ? c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Ee, fe, v.width, v.height) : i.renderbufferStorage(i.RENDERBUFFER, fe, v.width, v.height);
                }
            }
            i.bindRenderbuffer(i.RENDERBUFFER, null);
        }
        function De(E, v) {
            if (v && v.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
            if (t.bindFramebuffer(i.FRAMEBUFFER, E), !(v.depthTexture && v.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
            (!n.get(v.depthTexture).__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = !0), V(v.depthTexture, 0);
            const ee = n.get(v.depthTexture).__webglTexture, Z = Re(v);
            if (v.depthTexture.format === bn) pe(v) ? c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, ee, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, ee, 0);
            else if (v.depthTexture.format === ni) pe(v) ? c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, ee, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, ee, 0);
            else throw new Error("Unknown depthTexture format");
        }
        function Te(E) {
            const v = n.get(E), U = E.isWebGLCubeRenderTarget === !0;
            if (E.depthTexture && !v.__autoAllocateDepthBuffer) {
                if (U) throw new Error("target.depthTexture not supported in Cube render targets");
                De(v.__webglFramebuffer, E);
            } else if (U) {
                v.__webglDepthbuffer = [];
                for(let ee = 0; ee < 6; ee++)t.bindFramebuffer(i.FRAMEBUFFER, v.__webglFramebuffer[ee]), v.__webglDepthbuffer[ee] = i.createRenderbuffer(), Le(v.__webglDepthbuffer[ee], E, !1);
            } else t.bindFramebuffer(i.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer = i.createRenderbuffer(), Le(v.__webglDepthbuffer, E, !1);
            t.bindFramebuffer(i.FRAMEBUFFER, null);
        }
        function Ve(E, v, U) {
            const ee = n.get(E);
            v !== void 0 && ge(ee.__webglFramebuffer, E, E.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), U !== void 0 && Te(E);
        }
        function N(E) {
            const v = E.texture, U = n.get(E), ee = n.get(v);
            E.addEventListener("dispose", G), E.isWebGLMultipleRenderTargets !== !0 && (ee.__webglTexture === void 0 && (ee.__webglTexture = i.createTexture()), ee.__version = v.version, o.memory.textures++);
            const Z = E.isWebGLCubeRenderTarget === !0, te = E.isWebGLMultipleRenderTargets === !0, me = f(E) || a;
            if (Z) {
                U.__webglFramebuffer = [];
                for(let ce = 0; ce < 6; ce++)if (a && v.mipmaps && v.mipmaps.length > 0) {
                    U.__webglFramebuffer[ce] = [];
                    for(let fe = 0; fe < v.mipmaps.length; fe++)U.__webglFramebuffer[ce][fe] = i.createFramebuffer();
                } else U.__webglFramebuffer[ce] = i.createFramebuffer();
            } else {
                if (a && v.mipmaps && v.mipmaps.length > 0) {
                    U.__webglFramebuffer = [];
                    for(let ce = 0; ce < v.mipmaps.length; ce++)U.__webglFramebuffer[ce] = i.createFramebuffer();
                } else U.__webglFramebuffer = i.createFramebuffer();
                if (te) if (r.drawBuffers) {
                    const ce = E.texture;
                    for(let fe = 0, Ee = ce.length; fe < Ee; fe++){
                        const Ne = n.get(ce[fe]);
                        Ne.__webglTexture === void 0 && (Ne.__webglTexture = i.createTexture(), o.memory.textures++);
                    }
                } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
                if (a && E.samples > 0 && pe(E) === !1) {
                    const ce = te ? v : [
                        v
                    ];
                    U.__webglMultisampledFramebuffer = i.createFramebuffer(), U.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, U.__webglMultisampledFramebuffer);
                    for(let fe = 0; fe < ce.length; fe++){
                        const Ee = ce[fe];
                        U.__webglColorRenderbuffer[fe] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, U.__webglColorRenderbuffer[fe]);
                        const Ne = s.convert(Ee.format, Ee.colorSpace), $ = s.convert(Ee.type), Ye = b(Ee.internalFormat, Ne, $, Ee.colorSpace, E.isXRRenderTarget === !0), ze = Re(E);
                        i.renderbufferStorageMultisample(i.RENDERBUFFER, ze, Ye, E.width, E.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + fe, i.RENDERBUFFER, U.__webglColorRenderbuffer[fe]);
                    }
                    i.bindRenderbuffer(i.RENDERBUFFER, null), E.depthBuffer && (U.__webglDepthRenderbuffer = i.createRenderbuffer(), Le(U.__webglDepthRenderbuffer, E, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
                }
            }
            if (Z) {
                t.bindTexture(i.TEXTURE_CUBE_MAP, ee.__webglTexture), W(i.TEXTURE_CUBE_MAP, v, me);
                for(let ce = 0; ce < 6; ce++)if (a && v.mipmaps && v.mipmaps.length > 0) for(let fe = 0; fe < v.mipmaps.length; fe++)ge(U.__webglFramebuffer[ce][fe], E, v, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ce, fe);
                else ge(U.__webglFramebuffer[ce], E, v, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ce, 0);
                S(v, me) && y(i.TEXTURE_CUBE_MAP), t.unbindTexture();
            } else if (te) {
                const ce = E.texture;
                for(let fe = 0, Ee = ce.length; fe < Ee; fe++){
                    const Ne = ce[fe], $ = n.get(Ne);
                    t.bindTexture(i.TEXTURE_2D, $.__webglTexture), W(i.TEXTURE_2D, Ne, me), ge(U.__webglFramebuffer, E, Ne, i.COLOR_ATTACHMENT0 + fe, i.TEXTURE_2D, 0), S(Ne, me) && y(i.TEXTURE_2D);
                }
                t.unbindTexture();
            } else {
                let ce = i.TEXTURE_2D;
                if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (a ? ce = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(ce, ee.__webglTexture), W(ce, v, me), a && v.mipmaps && v.mipmaps.length > 0) for(let fe = 0; fe < v.mipmaps.length; fe++)ge(U.__webglFramebuffer[fe], E, v, i.COLOR_ATTACHMENT0, ce, fe);
                else ge(U.__webglFramebuffer, E, v, i.COLOR_ATTACHMENT0, ce, 0);
                S(v, me) && y(ce), t.unbindTexture();
            }
            E.depthBuffer && Te(E);
        }
        function dt(E) {
            const v = f(E) || a, U = E.isWebGLMultipleRenderTargets === !0 ? E.texture : [
                E.texture
            ];
            for(let ee = 0, Z = U.length; ee < Z; ee++){
                const te = U[ee];
                if (S(te, v)) {
                    const me = E.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, ce = n.get(te).__webglTexture;
                    t.bindTexture(me, ce), y(me), t.unbindTexture();
                }
            }
        }
        function Me(E) {
            if (a && E.samples > 0 && pe(E) === !1) {
                const v = E.isWebGLMultipleRenderTargets ? E.texture : [
                    E.texture
                ], U = E.width, ee = E.height;
                let Z = i.COLOR_BUFFER_BIT;
                const te = [], me = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ce = n.get(E), fe = E.isWebGLMultipleRenderTargets === !0;
                if (fe) for(let Ee = 0; Ee < v.length; Ee++)t.bindFramebuffer(i.FRAMEBUFFER, ce.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ee, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, ce.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ee, i.TEXTURE_2D, null, 0);
                t.bindFramebuffer(i.READ_FRAMEBUFFER, ce.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ce.__webglFramebuffer);
                for(let Ee = 0; Ee < v.length; Ee++){
                    te.push(i.COLOR_ATTACHMENT0 + Ee), E.depthBuffer && te.push(me);
                    const Ne = ce.__ignoreDepthValues !== void 0 ? ce.__ignoreDepthValues : !1;
                    if (Ne === !1 && (E.depthBuffer && (Z |= i.DEPTH_BUFFER_BIT), E.stencilBuffer && (Z |= i.STENCIL_BUFFER_BIT)), fe && i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, ce.__webglColorRenderbuffer[Ee]), Ne === !0 && (i.invalidateFramebuffer(i.READ_FRAMEBUFFER, [
                        me
                    ]), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [
                        me
                    ])), fe) {
                        const $ = n.get(v[Ee]).__webglTexture;
                        i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, $, 0);
                    }
                    i.blitFramebuffer(0, 0, U, ee, 0, 0, U, ee, Z, i.NEAREST), l && i.invalidateFramebuffer(i.READ_FRAMEBUFFER, te);
                }
                if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), fe) for(let Ee = 0; Ee < v.length; Ee++){
                    t.bindFramebuffer(i.FRAMEBUFFER, ce.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ee, i.RENDERBUFFER, ce.__webglColorRenderbuffer[Ee]);
                    const Ne = n.get(v[Ee]).__webglTexture;
                    t.bindFramebuffer(i.FRAMEBUFFER, ce.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ee, i.TEXTURE_2D, Ne, 0);
                }
                t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ce.__webglMultisampledFramebuffer);
            }
        }
        function Re(E) {
            return Math.min(r.maxSamples, E.samples);
        }
        function pe(E) {
            const v = n.get(E);
            return a && E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && v.__useRenderToTexture !== !1;
        }
        function Ke(E) {
            const v = o.render.frame;
            h.get(E) !== v && (h.set(E, v), E.update());
        }
        function Ue(E, v) {
            const U = E.colorSpace, ee = E.format, Z = E.type;
            return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || E.format === es || U !== en && U !== Dt && (je.getTransfer(U) === $e ? a === !1 ? e.has("EXT_sRGB") === !0 && ee === kt ? (E.format = es, E.minFilter = Lt, E.generateMipmaps = !1) : v = vo.sRGBToLinear(v) : (ee !== kt || Z !== fn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", U)), v;
        }
        this.allocateTextureUnit = D, this.resetTextureUnits = Q, this.setTexture2D = V, this.setTexture2DArray = Y, this.setTexture3D = X, this.setTextureCube = q, this.rebindTextures = Ve, this.setupRenderTarget = N, this.updateRenderTargetMipmap = dt, this.updateMultisampleRenderTarget = Me, this.setupDepthRenderbuffer = Te, this.setupFrameBufferTexture = ge, this.useMultisampledRTT = pe;
    }
    function Vf(i, e, t) {
        const n = t.isWebGL2;
        function r(s, o = Dt) {
            let a;
            const c = je.getTransfer(o);
            if (s === fn) return i.UNSIGNED_BYTE;
            if (s === oo) return i.UNSIGNED_SHORT_4_4_4_4;
            if (s === co) return i.UNSIGNED_SHORT_5_5_5_1;
            if (s === Ec) return i.BYTE;
            if (s === Tc) return i.SHORT;
            if (s === os) return i.UNSIGNED_SHORT;
            if (s === ao) return i.INT;
            if (s === cn) return i.UNSIGNED_INT;
            if (s === ln) return i.FLOAT;
            if (s === mi) return n ? i.HALF_FLOAT : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
            if (s === bc) return i.ALPHA;
            if (s === kt) return i.RGBA;
            if (s === wc) return i.LUMINANCE;
            if (s === Ac) return i.LUMINANCE_ALPHA;
            if (s === bn) return i.DEPTH_COMPONENT;
            if (s === ni) return i.DEPTH_STENCIL;
            if (s === es) return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
            if (s === Rc) return i.RED;
            if (s === lo) return i.RED_INTEGER;
            if (s === Cc) return i.RG;
            if (s === ho) return i.RG_INTEGER;
            if (s === uo) return i.RGBA_INTEGER;
            if (s === pr || s === mr || s === gr || s === _r) if (c === $e) if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
                if (s === pr) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                if (s === mr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                if (s === gr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                if (s === _r) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
            } else return null;
            else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
                if (s === pr) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (s === mr) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (s === gr) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (s === _r) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
            } else return null;
            if (s === Cs || s === Ps || s === Ls || s === Ds) if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
                if (s === Cs) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (s === Ps) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (s === Ls) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (s === Ds) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
            } else return null;
            if (s === fo) return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
            if (s === Is || s === Us) if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
                if (s === Is) return c === $e ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
                if (s === Us) return c === $e ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
            } else return null;
            if (s === Ns || s === Fs || s === Os || s === Bs || s === zs || s === ks || s === Gs || s === Hs || s === Vs || s === Ws || s === Xs || s === qs || s === Ys || s === js) if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
                if (s === Ns) return c === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
                if (s === Fs) return c === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
                if (s === Os) return c === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
                if (s === Bs) return c === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
                if (s === zs) return c === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
                if (s === ks) return c === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
                if (s === Gs) return c === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
                if (s === Hs) return c === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
                if (s === Vs) return c === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
                if (s === Ws) return c === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
                if (s === Xs) return c === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
                if (s === qs) return c === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
                if (s === Ys) return c === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
                if (s === js) return c === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
            } else return null;
            if (s === vr || s === Ks || s === $s) if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
                if (s === vr) return c === $e ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
                if (s === Ks) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
                if (s === $s) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
            } else return null;
            if (s === Pc || s === Zs || s === Js || s === Qs) if (a = e.get("EXT_texture_compression_rgtc"), a !== null) {
                if (s === vr) return a.COMPRESSED_RED_RGTC1_EXT;
                if (s === Zs) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
                if (s === Js) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
                if (s === Qs) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
            } else return null;
            return s === Tn ? n ? i.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : i[s] !== void 0 ? i[s] : null;
        }
        return {
            convert: r
        };
    }
    class Wf extends Rt {
        constructor(e = []){
            super(), this.isArrayCamera = !0, this.cameras = e;
        }
    }
    class Zn extends pt {
        constructor(){
            super(), this.isGroup = !0, this.type = "Group";
        }
    }
    const Xf = {
        type: "move"
    };
    class Hr {
        constructor(){
            this._targetRay = null, this._grip = null, this._hand = null;
        }
        getHandSpace() {
            return this._hand === null && (this._hand = new Zn, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
                pinching: !1
            }), this._hand;
        }
        getTargetRaySpace() {
            return this._targetRay === null && (this._targetRay = new Zn, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new P, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new P), this._targetRay;
        }
        getGripSpace() {
            return this._grip === null && (this._grip = new Zn, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new P, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new P), this._grip;
        }
        dispatchEvent(e) {
            return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
        }
        connect(e) {
            if (e && e.hand) {
                const t = this._hand;
                if (t) for (const n of e.hand.values())this._getHandJoint(t, n);
            }
            return this.dispatchEvent({
                type: "connected",
                data: e
            }), this;
        }
        disconnect(e) {
            return this.dispatchEvent({
                type: "disconnected",
                data: e
            }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
        }
        update(e, t, n) {
            let r = null, s = null, o = null;
            const a = this._targetRay, c = this._grip, l = this._hand;
            if (e && t.session.visibilityState !== "visible-blurred") {
                if (l && e.hand) {
                    o = !0;
                    for (const _ of e.hand.values()){
                        const f = t.getJointPose(_, n), u = this._getHandJoint(l, _);
                        f !== null && (u.matrix.fromArray(f.transform.matrix), u.matrix.decompose(u.position, u.rotation, u.scale), u.matrixWorldNeedsUpdate = !0, u.jointRadius = f.radius), u.visible = f !== null;
                    }
                    const h = l.joints["index-finger-tip"], d = l.joints["thumb-tip"], p = h.position.distanceTo(d.position), m = .02, g = .005;
                    l.inputState.pinching && p > m + g ? (l.inputState.pinching = !1, this.dispatchEvent({
                        type: "pinchend",
                        handedness: e.handedness,
                        target: this
                    })) : !l.inputState.pinching && p <= m - g && (l.inputState.pinching = !0, this.dispatchEvent({
                        type: "pinchstart",
                        handedness: e.handedness,
                        target: this
                    }));
                } else c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
                a !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(r.linearVelocity)) : a.hasLinearVelocity = !1, r.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(r.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Xf)));
            }
            return a !== null && (a.visible = r !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = o !== null), this;
        }
        _getHandJoint(e, t) {
            if (e.joints[t.jointName] === void 0) {
                const n = new Zn;
                n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
            }
            return e.joints[t.jointName];
        }
    }
    class qf extends Pn {
        constructor(e, t){
            super();
            const n = this;
            let r = null, s = 1, o = null, a = "local-floor", c = 1, l = null, h = null, d = null, p = null, m = null, g = null;
            const _ = t.getContextAttributes();
            let f = null, u = null;
            const S = [], y = [], b = new be;
            let L = null;
            const R = new Rt;
            R.layers.enable(1), R.viewport = new Ze;
            const A = new Rt;
            A.layers.enable(2), A.viewport = new Ze;
            const G = [
                R,
                A
            ], x = new Wf;
            x.layers.enable(1), x.layers.enable(2);
            let T = null, z = null;
            this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(W) {
                let K = S[W];
                return K === void 0 && (K = new Hr, S[W] = K), K.getTargetRaySpace();
            }, this.getControllerGrip = function(W) {
                let K = S[W];
                return K === void 0 && (K = new Hr, S[W] = K), K.getGripSpace();
            }, this.getHand = function(W) {
                let K = S[W];
                return K === void 0 && (K = new Hr, S[W] = K), K.getHandSpace();
            };
            function H(W) {
                const K = y.indexOf(W.inputSource);
                if (K === -1) return;
                const le = S[K];
                le !== void 0 && (le.update(W.inputSource, W.frame, l || o), le.dispatchEvent({
                    type: W.type,
                    data: W.inputSource
                }));
            }
            function Q() {
                r.removeEventListener("select", H), r.removeEventListener("selectstart", H), r.removeEventListener("selectend", H), r.removeEventListener("squeeze", H), r.removeEventListener("squeezestart", H), r.removeEventListener("squeezeend", H), r.removeEventListener("end", Q), r.removeEventListener("inputsourceschange", D);
                for(let W = 0; W < S.length; W++){
                    const K = y[W];
                    K !== null && (y[W] = null, S[W].disconnect(K));
                }
                T = null, z = null, e.setRenderTarget(f), m = null, p = null, d = null, r = null, u = null, se.stop(), n.isPresenting = !1, e.setPixelRatio(L), e.setSize(b.width, b.height, !1), n.dispatchEvent({
                    type: "sessionend"
                });
            }
            this.setFramebufferScaleFactor = function(W) {
                s = W, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
            }, this.setReferenceSpaceType = function(W) {
                a = W, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
            }, this.getReferenceSpace = function() {
                return l || o;
            }, this.setReferenceSpace = function(W) {
                l = W;
            }, this.getBaseLayer = function() {
                return p !== null ? p : m;
            }, this.getBinding = function() {
                return d;
            }, this.getFrame = function() {
                return g;
            }, this.getSession = function() {
                return r;
            }, this.setSession = async function(W) {
                if (r = W, r !== null) {
                    if (f = e.getRenderTarget(), r.addEventListener("select", H), r.addEventListener("selectstart", H), r.addEventListener("selectend", H), r.addEventListener("squeeze", H), r.addEventListener("squeezestart", H), r.addEventListener("squeezeend", H), r.addEventListener("end", Q), r.addEventListener("inputsourceschange", D), _.xrCompatible !== !0 && await t.makeXRCompatible(), L = e.getPixelRatio(), e.getSize(b), r.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
                        const K = {
                            antialias: r.renderState.layers === void 0 ? _.antialias : !0,
                            alpha: !0,
                            depth: _.depth,
                            stencil: _.stencil,
                            framebufferScaleFactor: s
                        };
                        m = new XRWebGLLayer(r, t, K), r.updateRenderState({
                            baseLayer: m
                        }), e.setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, !1), u = new An(m.framebufferWidth, m.framebufferHeight, {
                            format: kt,
                            type: fn,
                            colorSpace: e.outputColorSpace,
                            stencilBuffer: _.stencil
                        });
                    } else {
                        let K = null, le = null, ve = null;
                        _.depth && (ve = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, K = _.stencil ? ni : bn, le = _.stencil ? Tn : cn);
                        const ge = {
                            colorFormat: t.RGBA8,
                            depthFormat: ve,
                            scaleFactor: s
                        };
                        d = new XRWebGLBinding(r, t), p = d.createProjectionLayer(ge), r.updateRenderState({
                            layers: [
                                p
                            ]
                        }), e.setPixelRatio(1), e.setSize(p.textureWidth, p.textureHeight, !1), u = new An(p.textureWidth, p.textureHeight, {
                            format: kt,
                            type: fn,
                            depthTexture: new Co(p.textureWidth, p.textureHeight, le, void 0, void 0, void 0, void 0, void 0, void 0, K),
                            stencilBuffer: _.stencil,
                            colorSpace: e.outputColorSpace,
                            samples: _.antialias ? 4 : 0
                        });
                        const Le = e.properties.get(u);
                        Le.__ignoreDepthValues = p.ignoreDepthValues;
                    }
                    u.isXRRenderTarget = !0, this.setFoveation(c), l = null, o = await r.requestReferenceSpace(a), se.setContext(r), se.start(), n.isPresenting = !0, n.dispatchEvent({
                        type: "sessionstart"
                    });
                }
            }, this.getEnvironmentBlendMode = function() {
                if (r !== null) return r.environmentBlendMode;
            };
            function D(W) {
                for(let K = 0; K < W.removed.length; K++){
                    const le = W.removed[K], ve = y.indexOf(le);
                    ve >= 0 && (y[ve] = null, S[ve].disconnect(le));
                }
                for(let K = 0; K < W.added.length; K++){
                    const le = W.added[K];
                    let ve = y.indexOf(le);
                    if (ve === -1) {
                        for(let Le = 0; Le < S.length; Le++)if (Le >= y.length) {
                            y.push(le), ve = Le;
                            break;
                        } else if (y[Le] === null) {
                            y[Le] = le, ve = Le;
                            break;
                        }
                        if (ve === -1) break;
                    }
                    const ge = S[ve];
                    ge && ge.connect(le);
                }
            }
            const F = new P, V = new P;
            function Y(W, K, le) {
                F.setFromMatrixPosition(K.matrixWorld), V.setFromMatrixPosition(le.matrixWorld);
                const ve = F.distanceTo(V), ge = K.projectionMatrix.elements, Le = le.projectionMatrix.elements, De = ge[14] / (ge[10] - 1), Te = ge[14] / (ge[10] + 1), Ve = (ge[9] + 1) / ge[5], N = (ge[9] - 1) / ge[5], dt = (ge[8] - 1) / ge[0], Me = (Le[8] + 1) / Le[0], Re = De * dt, pe = De * Me, Ke = ve / (-dt + Me), Ue = Ke * -dt;
                K.matrixWorld.decompose(W.position, W.quaternion, W.scale), W.translateX(Ue), W.translateZ(Ke), W.matrixWorld.compose(W.position, W.quaternion, W.scale), W.matrixWorldInverse.copy(W.matrixWorld).invert();
                const E = De + Ke, v = Te + Ke, U = Re - Ue, ee = pe + (ve - Ue), Z = Ve * Te / v * E, te = N * Te / v * E;
                W.projectionMatrix.makePerspective(U, ee, Z, te, E, v), W.projectionMatrixInverse.copy(W.projectionMatrix).invert();
            }
            function X(W, K) {
                K === null ? W.matrixWorld.copy(W.matrix) : W.matrixWorld.multiplyMatrices(K.matrixWorld, W.matrix), W.matrixWorldInverse.copy(W.matrixWorld).invert();
            }
            this.updateCamera = function(W) {
                if (r === null) return;
                x.near = A.near = R.near = W.near, x.far = A.far = R.far = W.far, (T !== x.near || z !== x.far) && (r.updateRenderState({
                    depthNear: x.near,
                    depthFar: x.far
                }), T = x.near, z = x.far);
                const K = W.parent, le = x.cameras;
                X(x, K);
                for(let ve = 0; ve < le.length; ve++)X(le[ve], K);
                le.length === 2 ? Y(x, R, A) : x.projectionMatrix.copy(R.projectionMatrix), q(W, x, K);
            };
            function q(W, K, le) {
                le === null ? W.matrix.copy(K.matrixWorld) : (W.matrix.copy(le.matrixWorld), W.matrix.invert(), W.matrix.multiply(K.matrixWorld)), W.matrix.decompose(W.position, W.quaternion, W.scale), W.updateMatrixWorld(!0), W.projectionMatrix.copy(K.projectionMatrix), W.projectionMatrixInverse.copy(K.projectionMatrixInverse), W.isPerspectiveCamera && (W.fov = ts * 2 * Math.atan(1 / W.projectionMatrix.elements[5]), W.zoom = 1);
            }
            this.getCamera = function() {
                return x;
            }, this.getFoveation = function() {
                if (!(p === null && m === null)) return c;
            }, this.setFoveation = function(W) {
                c = W, p !== null && (p.fixedFoveation = W), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = W);
            };
            let j = null;
            function re(W, K) {
                if (h = K.getViewerPose(l || o), g = K, h !== null) {
                    const le = h.views;
                    m !== null && (e.setRenderTargetFramebuffer(u, m.framebuffer), e.setRenderTarget(u));
                    let ve = !1;
                    le.length !== x.cameras.length && (x.cameras.length = 0, ve = !0);
                    for(let ge = 0; ge < le.length; ge++){
                        const Le = le[ge];
                        let De = null;
                        if (m !== null) De = m.getViewport(Le);
                        else {
                            const Ve = d.getViewSubImage(p, Le);
                            De = Ve.viewport, ge === 0 && (e.setRenderTargetTextures(u, Ve.colorTexture, p.ignoreDepthValues ? void 0 : Ve.depthStencilTexture), e.setRenderTarget(u));
                        }
                        let Te = G[ge];
                        Te === void 0 && (Te = new Rt, Te.layers.enable(ge), Te.viewport = new Ze, G[ge] = Te), Te.matrix.fromArray(Le.transform.matrix), Te.matrix.decompose(Te.position, Te.quaternion, Te.scale), Te.projectionMatrix.fromArray(Le.projectionMatrix), Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(), Te.viewport.set(De.x, De.y, De.width, De.height), ge === 0 && (x.matrix.copy(Te.matrix), x.matrix.decompose(x.position, x.quaternion, x.scale)), ve === !0 && x.cameras.push(Te);
                    }
                }
                for(let le = 0; le < S.length; le++){
                    const ve = y[le], ge = S[le];
                    ve !== null && ge !== void 0 && ge.update(ve, K, l || o);
                }
                j && j(W, K), K.detectedPlanes && n.dispatchEvent({
                    type: "planesdetected",
                    data: K
                }), g = null;
            }
            const se = new Ao;
            se.setAnimationLoop(re), this.setAnimationLoop = function(W) {
                j = W;
            }, this.dispose = function() {};
        }
    }
    function Yf(i, e) {
        function t(f, u) {
            f.matrixAutoUpdate === !0 && f.updateMatrix(), u.value.copy(f.matrix);
        }
        function n(f, u) {
            u.color.getRGB(f.fogColor.value, To(i)), u.isFog ? (f.fogNear.value = u.near, f.fogFar.value = u.far) : u.isFogExp2 && (f.fogDensity.value = u.density);
        }
        function r(f, u, S, y, b) {
            u.isMeshBasicMaterial || u.isMeshLambertMaterial ? s(f, u) : u.isMeshToonMaterial ? (s(f, u), d(f, u)) : u.isMeshPhongMaterial ? (s(f, u), h(f, u)) : u.isMeshStandardMaterial ? (s(f, u), p(f, u), u.isMeshPhysicalMaterial && m(f, u, b)) : u.isMeshMatcapMaterial ? (s(f, u), g(f, u)) : u.isMeshDepthMaterial ? s(f, u) : u.isMeshDistanceMaterial ? (s(f, u), _(f, u)) : u.isMeshNormalMaterial ? s(f, u) : u.isLineBasicMaterial ? (o(f, u), u.isLineDashedMaterial && a(f, u)) : u.isPointsMaterial ? c(f, u, S, y) : u.isSpriteMaterial ? l(f, u) : u.isShadowMaterial ? (f.color.value.copy(u.color), f.opacity.value = u.opacity) : u.isShaderMaterial && (u.uniformsNeedUpdate = !1);
        }
        function s(f, u) {
            f.opacity.value = u.opacity, u.color && f.diffuse.value.copy(u.color), u.emissive && f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity), u.map && (f.map.value = u.map, t(u.map, f.mapTransform)), u.alphaMap && (f.alphaMap.value = u.alphaMap, t(u.alphaMap, f.alphaMapTransform)), u.bumpMap && (f.bumpMap.value = u.bumpMap, t(u.bumpMap, f.bumpMapTransform), f.bumpScale.value = u.bumpScale, u.side === St && (f.bumpScale.value *= -1)), u.normalMap && (f.normalMap.value = u.normalMap, t(u.normalMap, f.normalMapTransform), f.normalScale.value.copy(u.normalScale), u.side === St && f.normalScale.value.negate()), u.displacementMap && (f.displacementMap.value = u.displacementMap, t(u.displacementMap, f.displacementMapTransform), f.displacementScale.value = u.displacementScale, f.displacementBias.value = u.displacementBias), u.emissiveMap && (f.emissiveMap.value = u.emissiveMap, t(u.emissiveMap, f.emissiveMapTransform)), u.specularMap && (f.specularMap.value = u.specularMap, t(u.specularMap, f.specularMapTransform)), u.alphaTest > 0 && (f.alphaTest.value = u.alphaTest);
            const S = e.get(u).envMap;
            if (S && (f.envMap.value = S, f.flipEnvMap.value = S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1, f.reflectivity.value = u.reflectivity, f.ior.value = u.ior, f.refractionRatio.value = u.refractionRatio), u.lightMap) {
                f.lightMap.value = u.lightMap;
                const y = i._useLegacyLights === !0 ? Math.PI : 1;
                f.lightMapIntensity.value = u.lightMapIntensity * y, t(u.lightMap, f.lightMapTransform);
            }
            u.aoMap && (f.aoMap.value = u.aoMap, f.aoMapIntensity.value = u.aoMapIntensity, t(u.aoMap, f.aoMapTransform));
        }
        function o(f, u) {
            f.diffuse.value.copy(u.color), f.opacity.value = u.opacity, u.map && (f.map.value = u.map, t(u.map, f.mapTransform));
        }
        function a(f, u) {
            f.dashSize.value = u.dashSize, f.totalSize.value = u.dashSize + u.gapSize, f.scale.value = u.scale;
        }
        function c(f, u, S, y) {
            f.diffuse.value.copy(u.color), f.opacity.value = u.opacity, f.size.value = u.size * S, f.scale.value = y * .5, u.map && (f.map.value = u.map, t(u.map, f.uvTransform)), u.alphaMap && (f.alphaMap.value = u.alphaMap, t(u.alphaMap, f.alphaMapTransform)), u.alphaTest > 0 && (f.alphaTest.value = u.alphaTest);
        }
        function l(f, u) {
            f.diffuse.value.copy(u.color), f.opacity.value = u.opacity, f.rotation.value = u.rotation, u.map && (f.map.value = u.map, t(u.map, f.mapTransform)), u.alphaMap && (f.alphaMap.value = u.alphaMap, t(u.alphaMap, f.alphaMapTransform)), u.alphaTest > 0 && (f.alphaTest.value = u.alphaTest);
        }
        function h(f, u) {
            f.specular.value.copy(u.specular), f.shininess.value = Math.max(u.shininess, 1e-4);
        }
        function d(f, u) {
            u.gradientMap && (f.gradientMap.value = u.gradientMap);
        }
        function p(f, u) {
            f.metalness.value = u.metalness, u.metalnessMap && (f.metalnessMap.value = u.metalnessMap, t(u.metalnessMap, f.metalnessMapTransform)), f.roughness.value = u.roughness, u.roughnessMap && (f.roughnessMap.value = u.roughnessMap, t(u.roughnessMap, f.roughnessMapTransform)), e.get(u).envMap && (f.envMapIntensity.value = u.envMapIntensity);
        }
        function m(f, u, S) {
            f.ior.value = u.ior, u.sheen > 0 && (f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen), f.sheenRoughness.value = u.sheenRoughness, u.sheenColorMap && (f.sheenColorMap.value = u.sheenColorMap, t(u.sheenColorMap, f.sheenColorMapTransform)), u.sheenRoughnessMap && (f.sheenRoughnessMap.value = u.sheenRoughnessMap, t(u.sheenRoughnessMap, f.sheenRoughnessMapTransform))), u.clearcoat > 0 && (f.clearcoat.value = u.clearcoat, f.clearcoatRoughness.value = u.clearcoatRoughness, u.clearcoatMap && (f.clearcoatMap.value = u.clearcoatMap, t(u.clearcoatMap, f.clearcoatMapTransform)), u.clearcoatRoughnessMap && (f.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap, t(u.clearcoatRoughnessMap, f.clearcoatRoughnessMapTransform)), u.clearcoatNormalMap && (f.clearcoatNormalMap.value = u.clearcoatNormalMap, t(u.clearcoatNormalMap, f.clearcoatNormalMapTransform), f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale), u.side === St && f.clearcoatNormalScale.value.negate())), u.iridescence > 0 && (f.iridescence.value = u.iridescence, f.iridescenceIOR.value = u.iridescenceIOR, f.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0], f.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1], u.iridescenceMap && (f.iridescenceMap.value = u.iridescenceMap, t(u.iridescenceMap, f.iridescenceMapTransform)), u.iridescenceThicknessMap && (f.iridescenceThicknessMap.value = u.iridescenceThicknessMap, t(u.iridescenceThicknessMap, f.iridescenceThicknessMapTransform))), u.transmission > 0 && (f.transmission.value = u.transmission, f.transmissionSamplerMap.value = S.texture, f.transmissionSamplerSize.value.set(S.width, S.height), u.transmissionMap && (f.transmissionMap.value = u.transmissionMap, t(u.transmissionMap, f.transmissionMapTransform)), f.thickness.value = u.thickness, u.thicknessMap && (f.thicknessMap.value = u.thicknessMap, t(u.thicknessMap, f.thicknessMapTransform)), f.attenuationDistance.value = u.attenuationDistance, f.attenuationColor.value.copy(u.attenuationColor)), u.anisotropy > 0 && (f.anisotropyVector.value.set(u.anisotropy * Math.cos(u.anisotropyRotation), u.anisotropy * Math.sin(u.anisotropyRotation)), u.anisotropyMap && (f.anisotropyMap.value = u.anisotropyMap, t(u.anisotropyMap, f.anisotropyMapTransform))), f.specularIntensity.value = u.specularIntensity, f.specularColor.value.copy(u.specularColor), u.specularColorMap && (f.specularColorMap.value = u.specularColorMap, t(u.specularColorMap, f.specularColorMapTransform)), u.specularIntensityMap && (f.specularIntensityMap.value = u.specularIntensityMap, t(u.specularIntensityMap, f.specularIntensityMapTransform));
        }
        function g(f, u) {
            u.matcap && (f.matcap.value = u.matcap);
        }
        function _(f, u) {
            const S = e.get(u).light;
            f.referencePosition.value.setFromMatrixPosition(S.matrixWorld), f.nearDistance.value = S.shadow.camera.near, f.farDistance.value = S.shadow.camera.far;
        }
        return {
            refreshFogUniforms: n,
            refreshMaterialUniforms: r
        };
    }
    function jf(i, e, t, n) {
        let r = {}, s = {}, o = [];
        const a = t.isWebGL2 ? i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
        function c(S, y) {
            const b = y.program;
            n.uniformBlockBinding(S, b);
        }
        function l(S, y) {
            let b = r[S.id];
            b === void 0 && (g(S), b = h(S), r[S.id] = b, S.addEventListener("dispose", f));
            const L = y.program;
            n.updateUBOMapping(S, L);
            const R = e.render.frame;
            s[S.id] !== R && (p(S), s[S.id] = R);
        }
        function h(S) {
            const y = d();
            S.__bindingPointIndex = y;
            const b = i.createBuffer(), L = S.__size, R = S.usage;
            return i.bindBuffer(i.UNIFORM_BUFFER, b), i.bufferData(i.UNIFORM_BUFFER, L, R), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, y, b), b;
        }
        function d() {
            for(let S = 0; S < a; S++)if (o.indexOf(S) === -1) return o.push(S), S;
            return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
        }
        function p(S) {
            const y = r[S.id], b = S.uniforms, L = S.__cache;
            i.bindBuffer(i.UNIFORM_BUFFER, y);
            for(let R = 0, A = b.length; R < A; R++){
                const G = Array.isArray(b[R]) ? b[R] : [
                    b[R]
                ];
                for(let x = 0, T = G.length; x < T; x++){
                    const z = G[x];
                    if (m(z, R, x, L) === !0) {
                        const H = z.__offset, Q = Array.isArray(z.value) ? z.value : [
                            z.value
                        ];
                        let D = 0;
                        for(let F = 0; F < Q.length; F++){
                            const V = Q[F], Y = _(V);
                            typeof V == "number" || typeof V == "boolean" ? (z.__data[0] = V, i.bufferSubData(i.UNIFORM_BUFFER, H + D, z.__data)) : V.isMatrix3 ? (z.__data[0] = V.elements[0], z.__data[1] = V.elements[1], z.__data[2] = V.elements[2], z.__data[3] = 0, z.__data[4] = V.elements[3], z.__data[5] = V.elements[4], z.__data[6] = V.elements[5], z.__data[7] = 0, z.__data[8] = V.elements[6], z.__data[9] = V.elements[7], z.__data[10] = V.elements[8], z.__data[11] = 0) : (V.toArray(z.__data, D), D += Y.storage / Float32Array.BYTES_PER_ELEMENT);
                        }
                        i.bufferSubData(i.UNIFORM_BUFFER, H, z.__data);
                    }
                }
            }
            i.bindBuffer(i.UNIFORM_BUFFER, null);
        }
        function m(S, y, b, L) {
            const R = S.value, A = y + "_" + b;
            if (L[A] === void 0) return typeof R == "number" || typeof R == "boolean" ? L[A] = R : L[A] = R.clone(), !0;
            {
                const G = L[A];
                if (typeof R == "number" || typeof R == "boolean") {
                    if (G !== R) return L[A] = R, !0;
                } else if (G.equals(R) === !1) return G.copy(R), !0;
            }
            return !1;
        }
        function g(S) {
            const y = S.uniforms;
            let b = 0;
            const L = 16;
            for(let A = 0, G = y.length; A < G; A++){
                const x = Array.isArray(y[A]) ? y[A] : [
                    y[A]
                ];
                for(let T = 0, z = x.length; T < z; T++){
                    const H = x[T], Q = Array.isArray(H.value) ? H.value : [
                        H.value
                    ];
                    for(let D = 0, F = Q.length; D < F; D++){
                        const V = Q[D], Y = _(V), X = b % L;
                        X !== 0 && L - X < Y.boundary && (b += L - X), H.__data = new Float32Array(Y.storage / Float32Array.BYTES_PER_ELEMENT), H.__offset = b, b += Y.storage;
                    }
                }
            }
            const R = b % L;
            return R > 0 && (b += L - R), S.__size = b, S.__cache = {}, this;
        }
        function _(S) {
            const y = {
                boundary: 0,
                storage: 0
            };
            return typeof S == "number" || typeof S == "boolean" ? (y.boundary = 4, y.storage = 4) : S.isVector2 ? (y.boundary = 8, y.storage = 8) : S.isVector3 || S.isColor ? (y.boundary = 16, y.storage = 12) : S.isVector4 ? (y.boundary = 16, y.storage = 16) : S.isMatrix3 ? (y.boundary = 48, y.storage = 48) : S.isMatrix4 ? (y.boundary = 64, y.storage = 64) : S.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", S), y;
        }
        function f(S) {
            const y = S.target;
            y.removeEventListener("dispose", f);
            const b = o.indexOf(y.__bindingPointIndex);
            o.splice(b, 1), i.deleteBuffer(r[y.id]), delete r[y.id], delete s[y.id];
        }
        function u() {
            for(const S in r)i.deleteBuffer(r[S]);
            o = [], r = {}, s = {};
        }
        return {
            bind: c,
            update: l,
            dispose: u
        };
    }
    class No {
        constructor(e = {}){
            const { canvas: t = Vc(), context: n = null, depth: r = !0, stencil: s = !0, alpha: o = !1, antialias: a = !1, premultipliedAlpha: c = !0, preserveDrawingBuffer: l = !1, powerPreference: h = "default", failIfMajorPerformanceCaveat: d = !1 } = e;
            this.isWebGLRenderer = !0;
            let p;
            n !== null ? p = n.getContextAttributes().alpha : p = o;
            const m = new Uint32Array(4), g = new Int32Array(4);
            let _ = null, f = null;
            const u = [], S = [];
            this.domElement = t, this.debug = {
                checkShaderErrors: !0,
                onShaderError: null
            }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = ft, this._useLegacyLights = !1, this.toneMapping = dn, this.toneMappingExposure = 1;
            const y = this;
            let b = !1, L = 0, R = 0, A = null, G = -1, x = null;
            const T = new Ze, z = new Ze;
            let H = null;
            const Q = new Be(0);
            let D = 0, F = t.width, V = t.height, Y = 1, X = null, q = null;
            const j = new Ze(0, 0, F, V), re = new Ze(0, 0, F, V);
            let se = !1;
            const W = new hs;
            let K = !1, le = !1, ve = null;
            const ge = new it, Le = new be, De = new P, Te = {
                background: null,
                fog: null,
                environment: null,
                overrideMaterial: null,
                isScene: !0
            };
            function Ve() {
                return A === null ? Y : 1;
            }
            let N = n;
            function dt(M, I) {
                for(let B = 0; B < M.length; B++){
                    const k = M[B], O = t.getContext(k, I);
                    if (O !== null) return O;
                }
                return null;
            }
            try {
                const M = {
                    alpha: !0,
                    depth: r,
                    stencil: s,
                    antialias: a,
                    premultipliedAlpha: c,
                    preserveDrawingBuffer: l,
                    powerPreference: h,
                    failIfMajorPerformanceCaveat: d
                };
                if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${as}`), t.addEventListener("webglcontextlost", J, !1), t.addEventListener("webglcontextrestored", C, !1), t.addEventListener("webglcontextcreationerror", ie, !1), N === null) {
                    const I = [
                        "webgl2",
                        "webgl",
                        "experimental-webgl"
                    ];
                    if (y.isWebGL1Renderer === !0 && I.shift(), N = dt(I, M), N === null) throw dt(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
                }
                typeof WebGLRenderingContext < "u" && N instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), N.getShaderPrecisionFormat === void 0 && (N.getShaderPrecisionFormat = function() {
                    return {
                        rangeMin: 1,
                        rangeMax: 1,
                        precision: 1
                    };
                });
            } catch (M) {
                throw console.error("THREE.WebGLRenderer: " + M.message), M;
            }
            let Me, Re, pe, Ke, Ue, E, v, U, ee, Z, te, me, ce, fe, Ee, Ne, $, Ye, ze, Ce, ye, he, w, ne;
            function _e() {
                Me = new id(N), Re = new Zu(N, Me, e), Me.init(Re), he = new Vf(N, Me, Re), pe = new Gf(N, Me, Re), Ke = new ad(N), Ue = new Af, E = new Hf(N, Me, pe, Ue, Re, he, Ke), v = new Qu(y), U = new nd(y), ee = new pl(N, Re), w = new Ku(N, Me, ee, Re), Z = new rd(N, ee, Ke, w), te = new hd(N, Z, ee, Ke), ze = new ld(N, Re, E), Ne = new Ju(Ue), me = new wf(y, v, U, Me, Re, w, Ne), ce = new Yf(y, Ue), fe = new Cf, Ee = new Nf(Me, Re), Ye = new ju(y, v, U, pe, te, p, c), $ = new kf(y, te, Re), ne = new jf(N, Ke, Re, pe), Ce = new $u(N, Me, Ke, Re), ye = new sd(N, Me, Ke, Re), Ke.programs = me.programs, y.capabilities = Re, y.extensions = Me, y.properties = Ue, y.renderLists = fe, y.shadowMap = $, y.state = pe, y.info = Ke;
            }
            _e();
            const de = new qf(y, N);
            this.xr = de, this.getContext = function() {
                return N;
            }, this.getContextAttributes = function() {
                return N.getContextAttributes();
            }, this.forceContextLoss = function() {
                const M = Me.get("WEBGL_lose_context");
                M && M.loseContext();
            }, this.forceContextRestore = function() {
                const M = Me.get("WEBGL_lose_context");
                M && M.restoreContext();
            }, this.getPixelRatio = function() {
                return Y;
            }, this.setPixelRatio = function(M) {
                M !== void 0 && (Y = M, this.setSize(F, V, !1));
            }, this.getSize = function(M) {
                return M.set(F, V);
            }, this.setSize = function(M, I, B = !0) {
                if (de.isPresenting) {
                    console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
                    return;
                }
                F = M, V = I, t.width = Math.floor(M * Y), t.height = Math.floor(I * Y), B === !0 && (t.style.width = M + "px", t.style.height = I + "px"), this.setViewport(0, 0, M, I);
            }, this.getDrawingBufferSize = function(M) {
                return M.set(F * Y, V * Y).floor();
            }, this.setDrawingBufferSize = function(M, I, B) {
                F = M, V = I, Y = B, t.width = Math.floor(M * B), t.height = Math.floor(I * B), this.setViewport(0, 0, M, I);
            }, this.getCurrentViewport = function(M) {
                return M.copy(T);
            }, this.getViewport = function(M) {
                return M.copy(j);
            }, this.setViewport = function(M, I, B, k) {
                M.isVector4 ? j.set(M.x, M.y, M.z, M.w) : j.set(M, I, B, k), pe.viewport(T.copy(j).multiplyScalar(Y).floor());
            }, this.getScissor = function(M) {
                return M.copy(re);
            }, this.setScissor = function(M, I, B, k) {
                M.isVector4 ? re.set(M.x, M.y, M.z, M.w) : re.set(M, I, B, k), pe.scissor(z.copy(re).multiplyScalar(Y).floor());
            }, this.getScissorTest = function() {
                return se;
            }, this.setScissorTest = function(M) {
                pe.setScissorTest(se = M);
            }, this.setOpaqueSort = function(M) {
                X = M;
            }, this.setTransparentSort = function(M) {
                q = M;
            }, this.getClearColor = function(M) {
                return M.copy(Ye.getClearColor());
            }, this.setClearColor = function() {
                Ye.setClearColor.apply(Ye, arguments);
            }, this.getClearAlpha = function() {
                return Ye.getClearAlpha();
            }, this.setClearAlpha = function() {
                Ye.setClearAlpha.apply(Ye, arguments);
            }, this.clear = function(M = !0, I = !0, B = !0) {
                let k = 0;
                if (M) {
                    let O = !1;
                    if (A !== null) {
                        const ue = A.texture.format;
                        O = ue === uo || ue === ho || ue === lo;
                    }
                    if (O) {
                        const ue = A.texture.type, xe = ue === fn || ue === cn || ue === os || ue === Tn || ue === oo || ue === co, Ae = Ye.getClearColor(), Pe = Ye.getClearAlpha(), ke = Ae.r, Ie = Ae.g, Fe = Ae.b;
                        xe ? (m[0] = ke, m[1] = Ie, m[2] = Fe, m[3] = Pe, N.clearBufferuiv(N.COLOR, 0, m)) : (g[0] = ke, g[1] = Ie, g[2] = Fe, g[3] = Pe, N.clearBufferiv(N.COLOR, 0, g));
                    } else k |= N.COLOR_BUFFER_BIT;
                }
                I && (k |= N.DEPTH_BUFFER_BIT), B && (k |= N.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), N.clear(k);
            }, this.clearColor = function() {
                this.clear(!0, !1, !1);
            }, this.clearDepth = function() {
                this.clear(!1, !0, !1);
            }, this.clearStencil = function() {
                this.clear(!1, !1, !0);
            }, this.dispose = function() {
                t.removeEventListener("webglcontextlost", J, !1), t.removeEventListener("webglcontextrestored", C, !1), t.removeEventListener("webglcontextcreationerror", ie, !1), fe.dispose(), Ee.dispose(), Ue.dispose(), v.dispose(), U.dispose(), te.dispose(), w.dispose(), ne.dispose(), me.dispose(), de.dispose(), de.removeEventListener("sessionstart", tt), de.removeEventListener("sessionend", qe), ve && (ve.dispose(), ve = null), rt.stop();
            };
            function J(M) {
                M.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), b = !0;
            }
            function C() {
                console.log("THREE.WebGLRenderer: Context Restored."), b = !1;
                const M = Ke.autoReset, I = $.enabled, B = $.autoUpdate, k = $.needsUpdate, O = $.type;
                _e(), Ke.autoReset = M, $.enabled = I, $.autoUpdate = B, $.needsUpdate = k, $.type = O;
            }
            function ie(M) {
                console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", M.statusMessage);
            }
            function oe(M) {
                const I = M.target;
                I.removeEventListener("dispose", oe), we(I);
            }
            function we(M) {
                Se(M), Ue.remove(M);
            }
            function Se(M) {
                const I = Ue.get(M).programs;
                I !== void 0 && (I.forEach(function(B) {
                    me.releaseProgram(B);
                }), M.isShaderMaterial && me.releaseShaderCache(M));
            }
            this.renderBufferDirect = function(M, I, B, k, O, ue) {
                I === null && (I = Te);
                const xe = O.isMesh && O.matrixWorld.determinant() < 0, Ae = ko(M, I, B, k, O);
                pe.setMaterial(k, xe);
                let Pe = B.index, ke = 1;
                if (k.wireframe === !0) {
                    if (Pe = Z.getWireframeAttribute(B), Pe === void 0) return;
                    ke = 2;
                }
                const Ie = B.drawRange, Fe = B.attributes.position;
                let nt = Ie.start * ke, bt = (Ie.start + Ie.count) * ke;
                ue !== null && (nt = Math.max(nt, ue.start * ke), bt = Math.min(bt, (ue.start + ue.count) * ke)), Pe !== null ? (nt = Math.max(nt, 0), bt = Math.min(bt, Pe.count)) : Fe != null && (nt = Math.max(nt, 0), bt = Math.min(bt, Fe.count));
                const ht = bt - nt;
                if (ht < 0 || ht === 1 / 0) return;
                w.setup(O, k, Ae, B, Pe);
                let Xt, Je = Ce;
                if (Pe !== null && (Xt = ee.get(Pe), Je = ye, Je.setIndex(Xt)), O.isMesh) k.wireframe === !0 ? (pe.setLineWidth(k.wireframeLinewidth * Ve()), Je.setMode(N.LINES)) : Je.setMode(N.TRIANGLES);
                else if (O.isLine) {
                    let Ge = k.linewidth;
                    Ge === void 0 && (Ge = 1), pe.setLineWidth(Ge * Ve()), O.isLineSegments ? Je.setMode(N.LINES) : O.isLineLoop ? Je.setMode(N.LINE_LOOP) : Je.setMode(N.LINE_STRIP);
                } else O.isPoints ? Je.setMode(N.POINTS) : O.isSprite && Je.setMode(N.TRIANGLES);
                if (O.isBatchedMesh) Je.renderMultiDraw(O._multiDrawStarts, O._multiDrawCounts, O._multiDrawCount);
                else if (O.isInstancedMesh) Je.renderInstances(nt, ht, O.count);
                else if (B.isInstancedBufferGeometry) {
                    const Ge = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0, lr = Math.min(B.instanceCount, Ge);
                    Je.renderInstances(nt, ht, lr);
                } else Je.render(nt, ht);
            };
            function We(M, I, B) {
                M.transparent === !0 && M.side === Bt && M.forceSinglePass === !1 ? (M.side = St, M.needsUpdate = !0, Mi(M, I, B), M.side = pn, M.needsUpdate = !0, Mi(M, I, B), M.side = Bt) : Mi(M, I, B);
            }
            this.compile = function(M, I, B = null) {
                B === null && (B = M), f = Ee.get(B), f.init(), S.push(f), B.traverseVisible(function(O) {
                    O.isLight && O.layers.test(I.layers) && (f.pushLight(O), O.castShadow && f.pushShadow(O));
                }), M !== B && M.traverseVisible(function(O) {
                    O.isLight && O.layers.test(I.layers) && (f.pushLight(O), O.castShadow && f.pushShadow(O));
                }), f.setupLights(y._useLegacyLights);
                const k = new Set;
                return M.traverse(function(O) {
                    const ue = O.material;
                    if (ue) if (Array.isArray(ue)) for(let xe = 0; xe < ue.length; xe++){
                        const Ae = ue[xe];
                        We(Ae, B, O), k.add(Ae);
                    }
                    else We(ue, B, O), k.add(ue);
                }), S.pop(), f = null, k;
            }, this.compileAsync = function(M, I, B = null) {
                const k = this.compile(M, I, B);
                return new Promise((O)=>{
                    function ue() {
                        if (k.forEach(function(xe) {
                            Ue.get(xe).currentProgram.isReady() && k.delete(xe);
                        }), k.size === 0) {
                            O(M);
                            return;
                        }
                        setTimeout(ue, 10);
                    }
                    Me.get("KHR_parallel_shader_compile") !== null ? ue() : setTimeout(ue, 10);
                });
            };
            let Xe = null;
            function Qe(M) {
                Xe && Xe(M);
            }
            function tt() {
                rt.stop();
            }
            function qe() {
                rt.start();
            }
            const rt = new Ao;
            rt.setAnimationLoop(Qe), typeof self < "u" && rt.setContext(self), this.setAnimationLoop = function(M) {
                Xe = M, de.setAnimationLoop(M), M === null ? rt.stop() : rt.start();
            }, de.addEventListener("sessionstart", tt), de.addEventListener("sessionend", qe), this.render = function(M, I) {
                if (I !== void 0 && I.isCamera !== !0) {
                    console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                    return;
                }
                if (b === !0) return;
                M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(), de.enabled === !0 && de.isPresenting === !0 && (de.cameraAutoUpdate === !0 && de.updateCamera(I), I = de.getCamera()), M.isScene === !0 && M.onBeforeRender(y, M, I, A), f = Ee.get(M, S.length), f.init(), S.push(f), ge.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), W.setFromProjectionMatrix(ge), le = this.localClippingEnabled, K = Ne.init(this.clippingPlanes, le), _ = fe.get(M, u.length), _.init(), u.push(_), Gt(M, I, 0, y.sortObjects), _.finish(), y.sortObjects === !0 && _.sort(X, q), this.info.render.frame++, K === !0 && Ne.beginShadows();
                const B = f.state.shadowsArray;
                if ($.render(B, M, I), K === !0 && Ne.endShadows(), this.info.autoReset === !0 && this.info.reset(), Ye.render(_, M), f.setupLights(y._useLegacyLights), I.isArrayCamera) {
                    const k = I.cameras;
                    for(let O = 0, ue = k.length; O < ue; O++){
                        const xe = k[O];
                        _s(_, M, xe, xe.viewport);
                    }
                } else _s(_, M, I);
                A !== null && (E.updateMultisampleRenderTarget(A), E.updateRenderTargetMipmap(A)), M.isScene === !0 && M.onAfterRender(y, M, I), w.resetDefaultState(), G = -1, x = null, S.pop(), S.length > 0 ? f = S[S.length - 1] : f = null, u.pop(), u.length > 0 ? _ = u[u.length - 1] : _ = null;
            };
            function Gt(M, I, B, k) {
                if (M.visible === !1) return;
                if (M.layers.test(I.layers)) {
                    if (M.isGroup) B = M.renderOrder;
                    else if (M.isLOD) M.autoUpdate === !0 && M.update(I);
                    else if (M.isLight) f.pushLight(M), M.castShadow && f.pushShadow(M);
                    else if (M.isSprite) {
                        if (!M.frustumCulled || W.intersectsSprite(M)) {
                            k && De.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ge);
                            const xe = te.update(M), Ae = M.material;
                            Ae.visible && _.push(M, xe, Ae, B, De.z, null);
                        }
                    } else if ((M.isMesh || M.isLine || M.isPoints) && (!M.frustumCulled || W.intersectsObject(M))) {
                        const xe = te.update(M), Ae = M.material;
                        if (k && (M.boundingSphere !== void 0 ? (M.boundingSphere === null && M.computeBoundingSphere(), De.copy(M.boundingSphere.center)) : (xe.boundingSphere === null && xe.computeBoundingSphere(), De.copy(xe.boundingSphere.center)), De.applyMatrix4(M.matrixWorld).applyMatrix4(ge)), Array.isArray(Ae)) {
                            const Pe = xe.groups;
                            for(let ke = 0, Ie = Pe.length; ke < Ie; ke++){
                                const Fe = Pe[ke], nt = Ae[Fe.materialIndex];
                                nt && nt.visible && _.push(M, xe, nt, B, De.z, Fe);
                            }
                        } else Ae.visible && _.push(M, xe, Ae, B, De.z, null);
                    }
                }
                const ue = M.children;
                for(let xe = 0, Ae = ue.length; xe < Ae; xe++)Gt(ue[xe], I, B, k);
            }
            function _s(M, I, B, k) {
                const O = M.opaque, ue = M.transmissive, xe = M.transparent;
                f.setupLightsView(B), K === !0 && Ne.setGlobalState(y.clippingPlanes, B), ue.length > 0 && zo(O, ue, I, B), k && pe.viewport(T.copy(k)), O.length > 0 && yi(O, I, B), ue.length > 0 && yi(ue, I, B), xe.length > 0 && yi(xe, I, B), pe.buffers.depth.setTest(!0), pe.buffers.depth.setMask(!0), pe.buffers.color.setMask(!0), pe.setPolygonOffset(!1);
            }
            function zo(M, I, B, k) {
                if ((B.isScene === !0 ? B.overrideMaterial : null) !== null) return;
                const ue = Re.isWebGL2;
                ve === null && (ve = new An(1, 1, {
                    generateMipmaps: !0,
                    type: Me.has("EXT_color_buffer_half_float") ? mi : fn,
                    minFilter: pi,
                    samples: ue ? 4 : 0
                })), y.getDrawingBufferSize(Le), ue ? ve.setSize(Le.x, Le.y) : ve.setSize(ns(Le.x), ns(Le.y));
                const xe = y.getRenderTarget();
                y.setRenderTarget(ve), y.getClearColor(Q), D = y.getClearAlpha(), D < 1 && y.setClearColor(16777215, .5), y.clear();
                const Ae = y.toneMapping;
                y.toneMapping = dn, yi(M, B, k), E.updateMultisampleRenderTarget(ve), E.updateRenderTargetMipmap(ve);
                let Pe = !1;
                for(let ke = 0, Ie = I.length; ke < Ie; ke++){
                    const Fe = I[ke], nt = Fe.object, bt = Fe.geometry, ht = Fe.material, Xt = Fe.group;
                    if (ht.side === Bt && nt.layers.test(k.layers)) {
                        const Je = ht.side;
                        ht.side = St, ht.needsUpdate = !0, vs(nt, B, k, bt, ht, Xt), ht.side = Je, ht.needsUpdate = !0, Pe = !0;
                    }
                }
                Pe === !0 && (E.updateMultisampleRenderTarget(ve), E.updateRenderTargetMipmap(ve)), y.setRenderTarget(xe), y.setClearColor(Q, D), y.toneMapping = Ae;
            }
            function yi(M, I, B) {
                const k = I.isScene === !0 ? I.overrideMaterial : null;
                for(let O = 0, ue = M.length; O < ue; O++){
                    const xe = M[O], Ae = xe.object, Pe = xe.geometry, ke = k === null ? xe.material : k, Ie = xe.group;
                    Ae.layers.test(B.layers) && vs(Ae, I, B, Pe, ke, Ie);
                }
            }
            function vs(M, I, B, k, O, ue) {
                M.onBeforeRender(y, I, B, k, O, ue), M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, M.matrixWorld), M.normalMatrix.getNormalMatrix(M.modelViewMatrix), O.onBeforeRender(y, I, B, k, M, ue), O.transparent === !0 && O.side === Bt && O.forceSinglePass === !1 ? (O.side = St, O.needsUpdate = !0, y.renderBufferDirect(B, I, k, O, M, ue), O.side = pn, O.needsUpdate = !0, y.renderBufferDirect(B, I, k, O, M, ue), O.side = Bt) : y.renderBufferDirect(B, I, k, O, M, ue), M.onAfterRender(y, I, B, k, O, ue);
            }
            function Mi(M, I, B) {
                I.isScene !== !0 && (I = Te);
                const k = Ue.get(M), O = f.state.lights, ue = f.state.shadowsArray, xe = O.state.version, Ae = me.getParameters(M, O.state, ue, I, B), Pe = me.getProgramCacheKey(Ae);
                let ke = k.programs;
                k.environment = M.isMeshStandardMaterial ? I.environment : null, k.fog = I.fog, k.envMap = (M.isMeshStandardMaterial ? U : v).get(M.envMap || k.environment), ke === void 0 && (M.addEventListener("dispose", oe), ke = new Map, k.programs = ke);
                let Ie = ke.get(Pe);
                if (Ie !== void 0) {
                    if (k.currentProgram === Ie && k.lightsStateVersion === xe) return ys(M, Ae), Ie;
                } else Ae.uniforms = me.getUniforms(M), M.onBuild(B, Ae, y), M.onBeforeCompile(Ae, y), Ie = me.acquireProgram(Ae, Pe), ke.set(Pe, Ie), k.uniforms = Ae.uniforms;
                const Fe = k.uniforms;
                return (!M.isShaderMaterial && !M.isRawShaderMaterial || M.clipping === !0) && (Fe.clippingPlanes = Ne.uniform), ys(M, Ae), k.needsLights = Ho(M), k.lightsStateVersion = xe, k.needsLights && (Fe.ambientLightColor.value = O.state.ambient, Fe.lightProbe.value = O.state.probe, Fe.directionalLights.value = O.state.directional, Fe.directionalLightShadows.value = O.state.directionalShadow, Fe.spotLights.value = O.state.spot, Fe.spotLightShadows.value = O.state.spotShadow, Fe.rectAreaLights.value = O.state.rectArea, Fe.ltc_1.value = O.state.rectAreaLTC1, Fe.ltc_2.value = O.state.rectAreaLTC2, Fe.pointLights.value = O.state.point, Fe.pointLightShadows.value = O.state.pointShadow, Fe.hemisphereLights.value = O.state.hemi, Fe.directionalShadowMap.value = O.state.directionalShadowMap, Fe.directionalShadowMatrix.value = O.state.directionalShadowMatrix, Fe.spotShadowMap.value = O.state.spotShadowMap, Fe.spotLightMatrix.value = O.state.spotLightMatrix, Fe.spotLightMap.value = O.state.spotLightMap, Fe.pointShadowMap.value = O.state.pointShadowMap, Fe.pointShadowMatrix.value = O.state.pointShadowMatrix), k.currentProgram = Ie, k.uniformsList = null, Ie;
            }
            function xs(M) {
                if (M.uniformsList === null) {
                    const I = M.currentProgram.getUniforms();
                    M.uniformsList = ji.seqWithValue(I.seq, M.uniforms);
                }
                return M.uniformsList;
            }
            function ys(M, I) {
                const B = Ue.get(M);
                B.outputColorSpace = I.outputColorSpace, B.batching = I.batching, B.instancing = I.instancing, B.instancingColor = I.instancingColor, B.skinning = I.skinning, B.morphTargets = I.morphTargets, B.morphNormals = I.morphNormals, B.morphColors = I.morphColors, B.morphTargetsCount = I.morphTargetsCount, B.numClippingPlanes = I.numClippingPlanes, B.numIntersection = I.numClipIntersection, B.vertexAlphas = I.vertexAlphas, B.vertexTangents = I.vertexTangents, B.toneMapping = I.toneMapping;
            }
            function ko(M, I, B, k, O) {
                I.isScene !== !0 && (I = Te), E.resetTextureUnits();
                const ue = I.fog, xe = k.isMeshStandardMaterial ? I.environment : null, Ae = A === null ? y.outputColorSpace : A.isXRRenderTarget === !0 ? A.texture.colorSpace : en, Pe = (k.isMeshStandardMaterial ? U : v).get(k.envMap || xe), ke = k.vertexColors === !0 && !!B.attributes.color && B.attributes.color.itemSize === 4, Ie = !!B.attributes.tangent && (!!k.normalMap || k.anisotropy > 0), Fe = !!B.morphAttributes.position, nt = !!B.morphAttributes.normal, bt = !!B.morphAttributes.color;
                let ht = dn;
                k.toneMapped && (A === null || A.isXRRenderTarget === !0) && (ht = y.toneMapping);
                const Xt = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, Je = Xt !== void 0 ? Xt.length : 0, Ge = Ue.get(k), lr = f.state.lights;
                if (K === !0 && (le === !0 || M !== x)) {
                    const Ct = M === x && k.id === G;
                    Ne.setState(k, M, Ct);
                }
                let et = !1;
                k.version === Ge.__version ? (Ge.needsLights && Ge.lightsStateVersion !== lr.state.version || Ge.outputColorSpace !== Ae || O.isBatchedMesh && Ge.batching === !1 || !O.isBatchedMesh && Ge.batching === !0 || O.isInstancedMesh && Ge.instancing === !1 || !O.isInstancedMesh && Ge.instancing === !0 || O.isSkinnedMesh && Ge.skinning === !1 || !O.isSkinnedMesh && Ge.skinning === !0 || O.isInstancedMesh && Ge.instancingColor === !0 && O.instanceColor === null || O.isInstancedMesh && Ge.instancingColor === !1 && O.instanceColor !== null || Ge.envMap !== Pe || k.fog === !0 && Ge.fog !== ue || Ge.numClippingPlanes !== void 0 && (Ge.numClippingPlanes !== Ne.numPlanes || Ge.numIntersection !== Ne.numIntersection) || Ge.vertexAlphas !== ke || Ge.vertexTangents !== Ie || Ge.morphTargets !== Fe || Ge.morphNormals !== nt || Ge.morphColors !== bt || Ge.toneMapping !== ht || Re.isWebGL2 === !0 && Ge.morphTargetsCount !== Je) && (et = !0) : (et = !0, Ge.__version = k.version);
                let mn = Ge.currentProgram;
                et === !0 && (mn = Mi(k, I, O));
                let Ms = !1, ai = !1, hr = !1;
                const mt = mn.getUniforms(), gn = Ge.uniforms;
                if (pe.useProgram(mn.program) && (Ms = !0, ai = !0, hr = !0), k.id !== G && (G = k.id, ai = !0), Ms || x !== M) {
                    mt.setValue(N, "projectionMatrix", M.projectionMatrix), mt.setValue(N, "viewMatrix", M.matrixWorldInverse);
                    const Ct = mt.map.cameraPosition;
                    Ct !== void 0 && Ct.setValue(N, De.setFromMatrixPosition(M.matrixWorld)), Re.logarithmicDepthBuffer && mt.setValue(N, "logDepthBufFC", 2 / (Math.log(M.far + 1) / Math.LN2)), (k.isMeshPhongMaterial || k.isMeshToonMaterial || k.isMeshLambertMaterial || k.isMeshBasicMaterial || k.isMeshStandardMaterial || k.isShaderMaterial) && mt.setValue(N, "isOrthographic", M.isOrthographicCamera === !0), x !== M && (x = M, ai = !0, hr = !0);
                }
                if (O.isSkinnedMesh) {
                    mt.setOptional(N, O, "bindMatrix"), mt.setOptional(N, O, "bindMatrixInverse");
                    const Ct = O.skeleton;
                    Ct && (Re.floatVertexTextures ? (Ct.boneTexture === null && Ct.computeBoneTexture(), mt.setValue(N, "boneTexture", Ct.boneTexture, E)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
                }
                O.isBatchedMesh && (mt.setOptional(N, O, "batchingTexture"), mt.setValue(N, "batchingTexture", O._matricesTexture, E));
                const ur = B.morphAttributes;
                if ((ur.position !== void 0 || ur.normal !== void 0 || ur.color !== void 0 && Re.isWebGL2 === !0) && ze.update(O, B, mn), (ai || Ge.receiveShadow !== O.receiveShadow) && (Ge.receiveShadow = O.receiveShadow, mt.setValue(N, "receiveShadow", O.receiveShadow)), k.isMeshGouraudMaterial && k.envMap !== null && (gn.envMap.value = Pe, gn.flipEnvMap.value = Pe.isCubeTexture && Pe.isRenderTargetTexture === !1 ? -1 : 1), ai && (mt.setValue(N, "toneMappingExposure", y.toneMappingExposure), Ge.needsLights && Go(gn, hr), ue && k.fog === !0 && ce.refreshFogUniforms(gn, ue), ce.refreshMaterialUniforms(gn, k, Y, V, ve), ji.upload(N, xs(Ge), gn, E)), k.isShaderMaterial && k.uniformsNeedUpdate === !0 && (ji.upload(N, xs(Ge), gn, E), k.uniformsNeedUpdate = !1), k.isSpriteMaterial && mt.setValue(N, "center", O.center), mt.setValue(N, "modelViewMatrix", O.modelViewMatrix), mt.setValue(N, "normalMatrix", O.normalMatrix), mt.setValue(N, "modelMatrix", O.matrixWorld), k.isShaderMaterial || k.isRawShaderMaterial) {
                    const Ct = k.uniformsGroups;
                    for(let dr = 0, Vo = Ct.length; dr < Vo; dr++)if (Re.isWebGL2) {
                        const Ss = Ct[dr];
                        ne.update(Ss, mn), ne.bind(Ss, mn);
                    } else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
                }
                return mn;
            }
            function Go(M, I) {
                M.ambientLightColor.needsUpdate = I, M.lightProbe.needsUpdate = I, M.directionalLights.needsUpdate = I, M.directionalLightShadows.needsUpdate = I, M.pointLights.needsUpdate = I, M.pointLightShadows.needsUpdate = I, M.spotLights.needsUpdate = I, M.spotLightShadows.needsUpdate = I, M.rectAreaLights.needsUpdate = I, M.hemisphereLights.needsUpdate = I;
            }
            function Ho(M) {
                return M.isMeshLambertMaterial || M.isMeshToonMaterial || M.isMeshPhongMaterial || M.isMeshStandardMaterial || M.isShadowMaterial || M.isShaderMaterial && M.lights === !0;
            }
            this.getActiveCubeFace = function() {
                return L;
            }, this.getActiveMipmapLevel = function() {
                return R;
            }, this.getRenderTarget = function() {
                return A;
            }, this.setRenderTargetTextures = function(M, I, B) {
                Ue.get(M.texture).__webglTexture = I, Ue.get(M.depthTexture).__webglTexture = B;
                const k = Ue.get(M);
                k.__hasExternalTextures = !0, k.__hasExternalTextures && (k.__autoAllocateDepthBuffer = B === void 0, k.__autoAllocateDepthBuffer || Me.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), k.__useRenderToTexture = !1));
            }, this.setRenderTargetFramebuffer = function(M, I) {
                const B = Ue.get(M);
                B.__webglFramebuffer = I, B.__useDefaultFramebuffer = I === void 0;
            }, this.setRenderTarget = function(M, I = 0, B = 0) {
                A = M, L = I, R = B;
                let k = !0, O = null, ue = !1, xe = !1;
                if (M) {
                    const Pe = Ue.get(M);
                    Pe.__useDefaultFramebuffer !== void 0 ? (pe.bindFramebuffer(N.FRAMEBUFFER, null), k = !1) : Pe.__webglFramebuffer === void 0 ? E.setupRenderTarget(M) : Pe.__hasExternalTextures && E.rebindTextures(M, Ue.get(M.texture).__webglTexture, Ue.get(M.depthTexture).__webglTexture);
                    const ke = M.texture;
                    (ke.isData3DTexture || ke.isDataArrayTexture || ke.isCompressedArrayTexture) && (xe = !0);
                    const Ie = Ue.get(M).__webglFramebuffer;
                    M.isWebGLCubeRenderTarget ? (Array.isArray(Ie[I]) ? O = Ie[I][B] : O = Ie[I], ue = !0) : Re.isWebGL2 && M.samples > 0 && E.useMultisampledRTT(M) === !1 ? O = Ue.get(M).__webglMultisampledFramebuffer : Array.isArray(Ie) ? O = Ie[B] : O = Ie, T.copy(M.viewport), z.copy(M.scissor), H = M.scissorTest;
                } else T.copy(j).multiplyScalar(Y).floor(), z.copy(re).multiplyScalar(Y).floor(), H = se;
                if (pe.bindFramebuffer(N.FRAMEBUFFER, O) && Re.drawBuffers && k && pe.drawBuffers(M, O), pe.viewport(T), pe.scissor(z), pe.setScissorTest(H), ue) {
                    const Pe = Ue.get(M.texture);
                    N.framebufferTexture2D(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, N.TEXTURE_CUBE_MAP_POSITIVE_X + I, Pe.__webglTexture, B);
                } else if (xe) {
                    const Pe = Ue.get(M.texture), ke = I || 0;
                    N.framebufferTextureLayer(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, Pe.__webglTexture, B || 0, ke);
                }
                G = -1;
            }, this.readRenderTargetPixels = function(M, I, B, k, O, ue, xe) {
                if (!(M && M.isWebGLRenderTarget)) {
                    console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                    return;
                }
                let Ae = Ue.get(M).__webglFramebuffer;
                if (M.isWebGLCubeRenderTarget && xe !== void 0 && (Ae = Ae[xe]), Ae) {
                    pe.bindFramebuffer(N.FRAMEBUFFER, Ae);
                    try {
                        const Pe = M.texture, ke = Pe.format, Ie = Pe.type;
                        if (ke !== kt && he.convert(ke) !== N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)) {
                            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                            return;
                        }
                        const Fe = Ie === mi && (Me.has("EXT_color_buffer_half_float") || Re.isWebGL2 && Me.has("EXT_color_buffer_float"));
                        if (Ie !== fn && he.convert(Ie) !== N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE) && !(Ie === ln && (Re.isWebGL2 || Me.has("OES_texture_float") || Me.has("WEBGL_color_buffer_float"))) && !Fe) {
                            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                            return;
                        }
                        I >= 0 && I <= M.width - k && B >= 0 && B <= M.height - O && N.readPixels(I, B, k, O, he.convert(ke), he.convert(Ie), ue);
                    } finally{
                        const Pe = A !== null ? Ue.get(A).__webglFramebuffer : null;
                        pe.bindFramebuffer(N.FRAMEBUFFER, Pe);
                    }
                }
            }, this.copyFramebufferToTexture = function(M, I, B = 0) {
                const k = Math.pow(2, -B), O = Math.floor(I.image.width * k), ue = Math.floor(I.image.height * k);
                E.setTexture2D(I, 0), N.copyTexSubImage2D(N.TEXTURE_2D, B, 0, 0, M.x, M.y, O, ue), pe.unbindTexture();
            }, this.copyTextureToTexture = function(M, I, B, k = 0) {
                const O = I.image.width, ue = I.image.height, xe = he.convert(B.format), Ae = he.convert(B.type);
                E.setTexture2D(B, 0), N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, B.flipY), N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, B.premultiplyAlpha), N.pixelStorei(N.UNPACK_ALIGNMENT, B.unpackAlignment), I.isDataTexture ? N.texSubImage2D(N.TEXTURE_2D, k, M.x, M.y, O, ue, xe, Ae, I.image.data) : I.isCompressedTexture ? N.compressedTexSubImage2D(N.TEXTURE_2D, k, M.x, M.y, I.mipmaps[0].width, I.mipmaps[0].height, xe, I.mipmaps[0].data) : N.texSubImage2D(N.TEXTURE_2D, k, M.x, M.y, xe, Ae, I.image), k === 0 && B.generateMipmaps && N.generateMipmap(N.TEXTURE_2D), pe.unbindTexture();
            }, this.copyTextureToTexture3D = function(M, I, B, k, O = 0) {
                if (y.isWebGL1Renderer) {
                    console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
                    return;
                }
                const ue = M.max.x - M.min.x + 1, xe = M.max.y - M.min.y + 1, Ae = M.max.z - M.min.z + 1, Pe = he.convert(k.format), ke = he.convert(k.type);
                let Ie;
                if (k.isData3DTexture) E.setTexture3D(k, 0), Ie = N.TEXTURE_3D;
                else if (k.isDataArrayTexture || k.isCompressedArrayTexture) E.setTexture2DArray(k, 0), Ie = N.TEXTURE_2D_ARRAY;
                else {
                    console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                    return;
                }
                N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, k.flipY), N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, k.premultiplyAlpha), N.pixelStorei(N.UNPACK_ALIGNMENT, k.unpackAlignment);
                const Fe = N.getParameter(N.UNPACK_ROW_LENGTH), nt = N.getParameter(N.UNPACK_IMAGE_HEIGHT), bt = N.getParameter(N.UNPACK_SKIP_PIXELS), ht = N.getParameter(N.UNPACK_SKIP_ROWS), Xt = N.getParameter(N.UNPACK_SKIP_IMAGES), Je = B.isCompressedTexture ? B.mipmaps[O] : B.image;
                N.pixelStorei(N.UNPACK_ROW_LENGTH, Je.width), N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, Je.height), N.pixelStorei(N.UNPACK_SKIP_PIXELS, M.min.x), N.pixelStorei(N.UNPACK_SKIP_ROWS, M.min.y), N.pixelStorei(N.UNPACK_SKIP_IMAGES, M.min.z), B.isDataTexture || B.isData3DTexture ? N.texSubImage3D(Ie, O, I.x, I.y, I.z, ue, xe, Ae, Pe, ke, Je.data) : B.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), N.compressedTexSubImage3D(Ie, O, I.x, I.y, I.z, ue, xe, Ae, Pe, Je.data)) : N.texSubImage3D(Ie, O, I.x, I.y, I.z, ue, xe, Ae, Pe, ke, Je), N.pixelStorei(N.UNPACK_ROW_LENGTH, Fe), N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, nt), N.pixelStorei(N.UNPACK_SKIP_PIXELS, bt), N.pixelStorei(N.UNPACK_SKIP_ROWS, ht), N.pixelStorei(N.UNPACK_SKIP_IMAGES, Xt), O === 0 && k.generateMipmaps && N.generateMipmap(Ie), pe.unbindTexture();
            }, this.initTexture = function(M) {
                M.isCubeTexture ? E.setTextureCube(M, 0) : M.isData3DTexture ? E.setTexture3D(M, 0) : M.isDataArrayTexture || M.isCompressedArrayTexture ? E.setTexture2DArray(M, 0) : E.setTexture2D(M, 0), pe.unbindTexture();
            }, this.resetState = function() {
                L = 0, R = 0, A = null, pe.reset(), w.reset();
            }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                detail: this
            }));
        }
        get coordinateSystem() {
            return Jt;
        }
        get outputColorSpace() {
            return this._outputColorSpace;
        }
        set outputColorSpace(e) {
            this._outputColorSpace = e;
            const t = this.getContext();
            t.drawingBufferColorSpace = e === cs ? "display-p3" : "srgb", t.unpackColorSpace = je.workingColorSpace === rr ? "display-p3" : "srgb";
        }
        get outputEncoding() {
            return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === ft ? wn : po;
        }
        set outputEncoding(e) {
            console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === wn ? ft : en;
        }
        get useLegacyLights() {
            return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
        }
        set useLegacyLights(e) {
            console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
        }
    }
    class Kf extends No {
    }
    Kf.prototype.isWebGL1Renderer = !0;
    class ds {
        constructor(e, t = 1, n = 1e3){
            this.isFog = !0, this.name = "", this.color = new Be(e), this.near = t, this.far = n;
        }
        clone() {
            return new ds(this.color, this.near, this.far);
        }
        toJSON() {
            return {
                type: "Fog",
                name: this.name,
                color: this.color.getHex(),
                near: this.near,
                far: this.far
            };
        }
    }
    class $f extends pt {
        constructor(){
            super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                detail: this
            }));
        }
        copy(e, t) {
            return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
        }
        toJSON(e) {
            const t = super.toJSON(e);
            return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
        }
    }
    class fs extends ri {
        constructor(e){
            super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Be(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
        }
        copy(e) {
            return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
        }
    }
    const Ha = new it, rs = new ar, Wi = new sr, Xi = new P;
    class Fo extends pt {
        constructor(e = new Tt, t = new fs){
            super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
        }
        copy(e, t) {
            return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
        }
        raycast(e, t) {
            const n = this.geometry, r = this.matrixWorld, s = e.params.Points.threshold, o = n.drawRange;
            if (n.boundingSphere === null && n.computeBoundingSphere(), Wi.copy(n.boundingSphere), Wi.applyMatrix4(r), Wi.radius += s, e.ray.intersectsSphere(Wi) === !1) return;
            Ha.copy(r).invert(), rs.copy(e.ray).applyMatrix4(Ha);
            const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = n.index, d = n.attributes.position;
            if (l !== null) {
                const p = Math.max(0, o.start), m = Math.min(l.count, o.start + o.count);
                for(let g = p, _ = m; g < _; g++){
                    const f = l.getX(g);
                    Xi.fromBufferAttribute(d, f), Va(Xi, f, c, r, e, t, this);
                }
            } else {
                const p = Math.max(0, o.start), m = Math.min(d.count, o.start + o.count);
                for(let g = p, _ = m; g < _; g++)Xi.fromBufferAttribute(d, g), Va(Xi, g, c, r, e, t, this);
            }
        }
        updateMorphTargets() {
            const t = this.geometry.morphAttributes, n = Object.keys(t);
            if (n.length > 0) {
                const r = t[n[0]];
                if (r !== void 0) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for(let s = 0, o = r.length; s < o; s++){
                        const a = r[s].name || String(s);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
                    }
                }
            }
        }
    }
    function Va(i, e, t, n, r, s, o) {
        const a = rs.distanceSqToPoint(i);
        if (a < t) {
            const c = new P;
            rs.closestPointToPoint(i, c), c.applyMatrix4(n);
            const l = r.ray.origin.distanceTo(c);
            if (l < r.near || l > r.far) return;
            s.push({
                distance: l,
                distanceToRay: Math.sqrt(a),
                point: c,
                index: e,
                face: null,
                object: o
            });
        }
    }
    class Zf extends Et {
        constructor(e, t, n, r, s, o, a, c, l){
            super(e, t, n, r, s, o, a, c, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
        }
    }
    class Wt extends Tt {
        constructor(e = 1, t = 1, n = 1, r = 32, s = 1, o = !1, a = 0, c = Math.PI * 2){
            super(), this.type = "CylinderGeometry", this.parameters = {
                radiusTop: e,
                radiusBottom: t,
                height: n,
                radialSegments: r,
                heightSegments: s,
                openEnded: o,
                thetaStart: a,
                thetaLength: c
            };
            const l = this;
            r = Math.floor(r), s = Math.floor(s);
            const h = [], d = [], p = [], m = [];
            let g = 0;
            const _ = [], f = n / 2;
            let u = 0;
            S(), o === !1 && (e > 0 && y(!0), t > 0 && y(!1)), this.setIndex(h), this.setAttribute("position", new ot(d, 3)), this.setAttribute("normal", new ot(p, 3)), this.setAttribute("uv", new ot(m, 2));
            function S() {
                const b = new P, L = new P;
                let R = 0;
                const A = (t - e) / n;
                for(let G = 0; G <= s; G++){
                    const x = [], T = G / s, z = T * (t - e) + e;
                    for(let H = 0; H <= r; H++){
                        const Q = H / r, D = Q * c + a, F = Math.sin(D), V = Math.cos(D);
                        L.x = z * F, L.y = -T * n + f, L.z = z * V, d.push(L.x, L.y, L.z), b.set(F, A, V).normalize(), p.push(b.x, b.y, b.z), m.push(Q, 1 - T), x.push(g++);
                    }
                    _.push(x);
                }
                for(let G = 0; G < r; G++)for(let x = 0; x < s; x++){
                    const T = _[x][G], z = _[x + 1][G], H = _[x + 1][G + 1], Q = _[x][G + 1];
                    h.push(T, z, Q), h.push(z, H, Q), R += 6;
                }
                l.addGroup(u, R, 0), u += R;
            }
            function y(b) {
                const L = g, R = new be, A = new P;
                let G = 0;
                const x = b === !0 ? e : t, T = b === !0 ? 1 : -1;
                for(let H = 1; H <= r; H++)d.push(0, f * T, 0), p.push(0, T, 0), m.push(.5, .5), g++;
                const z = g;
                for(let H = 0; H <= r; H++){
                    const D = H / r * c + a, F = Math.cos(D), V = Math.sin(D);
                    A.x = x * V, A.y = f * T, A.z = x * F, d.push(A.x, A.y, A.z), p.push(0, T, 0), R.x = F * .5 + .5, R.y = V * .5 * T + .5, m.push(R.x, R.y), g++;
                }
                for(let H = 0; H < r; H++){
                    const Q = L + H, D = z + H;
                    b === !0 ? h.push(D, D + 1, Q) : h.push(D + 1, D, Q), G += 3;
                }
                l.addGroup(u, G, b === !0 ? 1 : 2), u += G;
            }
        }
        copy(e) {
            return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
        }
        static fromJSON(e) {
            return new Wt(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
        }
    }
    class tr extends Wt {
        constructor(e = 1, t = 1, n = 32, r = 1, s = !1, o = 0, a = Math.PI * 2){
            super(0, e, t, n, r, s, o, a), this.type = "ConeGeometry", this.parameters = {
                radius: e,
                height: t,
                radialSegments: n,
                heightSegments: r,
                openEnded: s,
                thetaStart: o,
                thetaLength: a
            };
        }
        static fromJSON(e) {
            return new tr(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
        }
    }
    class ps extends Tt {
        constructor(e = [], t = [], n = 1, r = 0){
            super(), this.type = "PolyhedronGeometry", this.parameters = {
                vertices: e,
                indices: t,
                radius: n,
                detail: r
            };
            const s = [], o = [];
            a(r), l(n), h(), this.setAttribute("position", new ot(s, 3)), this.setAttribute("normal", new ot(s.slice(), 3)), this.setAttribute("uv", new ot(o, 2)), r === 0 ? this.computeVertexNormals() : this.normalizeNormals();
            function a(S) {
                const y = new P, b = new P, L = new P;
                for(let R = 0; R < t.length; R += 3)m(t[R + 0], y), m(t[R + 1], b), m(t[R + 2], L), c(y, b, L, S);
            }
            function c(S, y, b, L) {
                const R = L + 1, A = [];
                for(let G = 0; G <= R; G++){
                    A[G] = [];
                    const x = S.clone().lerp(b, G / R), T = y.clone().lerp(b, G / R), z = R - G;
                    for(let H = 0; H <= z; H++)H === 0 && G === R ? A[G][H] = x : A[G][H] = x.clone().lerp(T, H / z);
                }
                for(let G = 0; G < R; G++)for(let x = 0; x < 2 * (R - G) - 1; x++){
                    const T = Math.floor(x / 2);
                    x % 2 === 0 ? (p(A[G][T + 1]), p(A[G + 1][T]), p(A[G][T])) : (p(A[G][T + 1]), p(A[G + 1][T + 1]), p(A[G + 1][T]));
                }
            }
            function l(S) {
                const y = new P;
                for(let b = 0; b < s.length; b += 3)y.x = s[b + 0], y.y = s[b + 1], y.z = s[b + 2], y.normalize().multiplyScalar(S), s[b + 0] = y.x, s[b + 1] = y.y, s[b + 2] = y.z;
            }
            function h() {
                const S = new P;
                for(let y = 0; y < s.length; y += 3){
                    S.x = s[y + 0], S.y = s[y + 1], S.z = s[y + 2];
                    const b = f(S) / 2 / Math.PI + .5, L = u(S) / Math.PI + .5;
                    o.push(b, 1 - L);
                }
                g(), d();
            }
            function d() {
                for(let S = 0; S < o.length; S += 6){
                    const y = o[S + 0], b = o[S + 2], L = o[S + 4], R = Math.max(y, b, L), A = Math.min(y, b, L);
                    R > .9 && A < .1 && (y < .2 && (o[S + 0] += 1), b < .2 && (o[S + 2] += 1), L < .2 && (o[S + 4] += 1));
                }
            }
            function p(S) {
                s.push(S.x, S.y, S.z);
            }
            function m(S, y) {
                const b = S * 3;
                y.x = e[b + 0], y.y = e[b + 1], y.z = e[b + 2];
            }
            function g() {
                const S = new P, y = new P, b = new P, L = new P, R = new be, A = new be, G = new be;
                for(let x = 0, T = 0; x < s.length; x += 9, T += 6){
                    S.set(s[x + 0], s[x + 1], s[x + 2]), y.set(s[x + 3], s[x + 4], s[x + 5]), b.set(s[x + 6], s[x + 7], s[x + 8]), R.set(o[T + 0], o[T + 1]), A.set(o[T + 2], o[T + 3]), G.set(o[T + 4], o[T + 5]), L.copy(S).add(y).add(b).divideScalar(3);
                    const z = f(L);
                    _(R, T + 0, S, z), _(A, T + 2, y, z), _(G, T + 4, b, z);
                }
            }
            function _(S, y, b, L) {
                L < 0 && S.x === 1 && (o[y] = S.x - 1), b.x === 0 && b.z === 0 && (o[y] = L / 2 / Math.PI + .5);
            }
            function f(S) {
                return Math.atan2(S.z, -S.x);
            }
            function u(S) {
                return Math.atan2(-S.y, Math.sqrt(S.x * S.x + S.z * S.z));
            }
        }
        copy(e) {
            return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
        }
        static fromJSON(e) {
            return new ps(e.vertices, e.indices, e.radius, e.details);
        }
    }
    class Ht extends Tt {
        constructor(e = 1, t = 32, n = 16, r = 0, s = Math.PI * 2, o = 0, a = Math.PI){
            super(), this.type = "SphereGeometry", this.parameters = {
                radius: e,
                widthSegments: t,
                heightSegments: n,
                phiStart: r,
                phiLength: s,
                thetaStart: o,
                thetaLength: a
            }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
            const c = Math.min(o + a, Math.PI);
            let l = 0;
            const h = [], d = new P, p = new P, m = [], g = [], _ = [], f = [];
            for(let u = 0; u <= n; u++){
                const S = [], y = u / n;
                let b = 0;
                u === 0 && o === 0 ? b = .5 / t : u === n && c === Math.PI && (b = -.5 / t);
                for(let L = 0; L <= t; L++){
                    const R = L / t;
                    d.x = -e * Math.cos(r + R * s) * Math.sin(o + y * a), d.y = e * Math.cos(o + y * a), d.z = e * Math.sin(r + R * s) * Math.sin(o + y * a), g.push(d.x, d.y, d.z), p.copy(d).normalize(), _.push(p.x, p.y, p.z), f.push(R + b, 1 - y), S.push(l++);
                }
                h.push(S);
            }
            for(let u = 0; u < n; u++)for(let S = 0; S < t; S++){
                const y = h[u][S + 1], b = h[u][S], L = h[u + 1][S], R = h[u + 1][S + 1];
                (u !== 0 || o > 0) && m.push(y, b, R), (u !== n - 1 || c < Math.PI) && m.push(b, L, R);
            }
            this.setIndex(m), this.setAttribute("position", new ot(g, 3)), this.setAttribute("normal", new ot(_, 3)), this.setAttribute("uv", new ot(f, 2));
        }
        copy(e) {
            return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
        }
        static fromJSON(e) {
            return new Ht(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
        }
    }
    class nr extends ps {
        constructor(e = 1, t = 0){
            const n = [
                1,
                1,
                1,
                -1,
                -1,
                1,
                -1,
                1,
                -1,
                1,
                -1,
                -1
            ], r = [
                2,
                1,
                0,
                0,
                3,
                2,
                1,
                3,
                0,
                2,
                3,
                1
            ];
            super(n, r, e, t), this.type = "TetrahedronGeometry", this.parameters = {
                radius: e,
                detail: t
            };
        }
        static fromJSON(e) {
            return new nr(e.radius, e.detail);
        }
    }
    class ms extends Tt {
        constructor(e = 1, t = .4, n = 12, r = 48, s = Math.PI * 2){
            super(), this.type = "TorusGeometry", this.parameters = {
                radius: e,
                tube: t,
                radialSegments: n,
                tubularSegments: r,
                arc: s
            }, n = Math.floor(n), r = Math.floor(r);
            const o = [], a = [], c = [], l = [], h = new P, d = new P, p = new P;
            for(let m = 0; m <= n; m++)for(let g = 0; g <= r; g++){
                const _ = g / r * s, f = m / n * Math.PI * 2;
                d.x = (e + t * Math.cos(f)) * Math.cos(_), d.y = (e + t * Math.cos(f)) * Math.sin(_), d.z = t * Math.sin(f), a.push(d.x, d.y, d.z), h.x = e * Math.cos(_), h.y = e * Math.sin(_), p.subVectors(d, h).normalize(), c.push(p.x, p.y, p.z), l.push(g / r), l.push(m / n);
            }
            for(let m = 1; m <= n; m++)for(let g = 1; g <= r; g++){
                const _ = (r + 1) * m + g - 1, f = (r + 1) * (m - 1) + g - 1, u = (r + 1) * (m - 1) + g, S = (r + 1) * m + g;
                o.push(_, f, S), o.push(f, u, S);
            }
            this.setIndex(o), this.setAttribute("position", new ot(a, 3)), this.setAttribute("normal", new ot(c, 3)), this.setAttribute("uv", new ot(l, 2));
        }
        copy(e) {
            return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
        }
        static fromJSON(e) {
            return new ms(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
        }
    }
    class hn extends ri {
        constructor(e){
            super(), this.isMeshStandardMaterial = !0, this.defines = {
                STANDARD: ""
            }, this.type = "MeshStandardMaterial", this.color = new Be(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Be(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = mo, this.normalScale = new be(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
        }
        copy(e) {
            return super.copy(e), this.defines = {
                STANDARD: ""
            }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
        }
    }
    class Jf extends hn {
        constructor(e){
            super(), this.isMeshPhysicalMaterial = !0, this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new be(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
                get: function() {
                    return vt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
                },
                set: function(t) {
                    this.ior = (1 + .4 * t) / (1 - .4 * t);
                }
            }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [
                100,
                400
            ], this.iridescenceThicknessMap = null, this.sheenColor = new Be(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Be(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Be(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
        }
        get anisotropy() {
            return this._anisotropy;
        }
        set anisotropy(e) {
            this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
        }
        get clearcoat() {
            return this._clearcoat;
        }
        set clearcoat(e) {
            this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
        }
        get iridescence() {
            return this._iridescence;
        }
        set iridescence(e) {
            this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
        }
        get sheen() {
            return this._sheen;
        }
        set sheen(e) {
            this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
        }
        get transmission() {
            return this._transmission;
        }
        set transmission(e) {
            this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
        }
        copy(e) {
            return super.copy(e), this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [
                ...e.iridescenceThicknessRange
            ], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
        }
    }
    class gs extends pt {
        constructor(e, t = 1){
            super(), this.isLight = !0, this.type = "Light", this.color = new Be(e), this.intensity = t;
        }
        dispose() {}
        copy(e, t) {
            return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
        }
        toJSON(e) {
            const t = super.toJSON(e);
            return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
        }
    }
    const Vr = new it, Wa = new P, Xa = new P;
    class Oo {
        constructor(e){
            this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new be(512, 512), this.map = null, this.mapPass = null, this.matrix = new it, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new hs, this._frameExtents = new be(1, 1), this._viewportCount = 1, this._viewports = [
                new Ze(0, 0, 1, 1)
            ];
        }
        getViewportCount() {
            return this._viewportCount;
        }
        getFrustum() {
            return this._frustum;
        }
        updateMatrices(e) {
            const t = this.camera, n = this.matrix;
            Wa.setFromMatrixPosition(e.matrixWorld), t.position.copy(Wa), Xa.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Xa), t.updateMatrixWorld(), Vr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Vr), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(Vr);
        }
        getViewport(e) {
            return this._viewports[e];
        }
        getFrameExtents() {
            return this._frameExtents;
        }
        dispose() {
            this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
        }
        copy(e) {
            return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
        }
        clone() {
            return new this.constructor().copy(this);
        }
        toJSON() {
            const e = {};
            return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
        }
    }
    const qa = new it, di = new P, Wr = new P;
    class Qf extends Oo {
        constructor(){
            super(new Rt(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new be(4, 2), this._viewportCount = 6, this._viewports = [
                new Ze(2, 1, 1, 1),
                new Ze(0, 1, 1, 1),
                new Ze(3, 1, 1, 1),
                new Ze(1, 1, 1, 1),
                new Ze(3, 0, 1, 1),
                new Ze(1, 0, 1, 1)
            ], this._cubeDirections = [
                new P(1, 0, 0),
                new P(-1, 0, 0),
                new P(0, 0, 1),
                new P(0, 0, -1),
                new P(0, 1, 0),
                new P(0, -1, 0)
            ], this._cubeUps = [
                new P(0, 1, 0),
                new P(0, 1, 0),
                new P(0, 1, 0),
                new P(0, 1, 0),
                new P(0, 0, 1),
                new P(0, 0, -1)
            ];
        }
        updateMatrices(e, t = 0) {
            const n = this.camera, r = this.matrix, s = e.distance || n.far;
            s !== n.far && (n.far = s, n.updateProjectionMatrix()), di.setFromMatrixPosition(e.matrixWorld), n.position.copy(di), Wr.copy(n.position), Wr.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Wr), n.updateMatrixWorld(), r.makeTranslation(-di.x, -di.y, -di.z), qa.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(qa);
        }
    }
    class Ya extends gs {
        constructor(e, t, n = 0, r = 2){
            super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = r, this.shadow = new Qf;
        }
        get power() {
            return this.intensity * 4 * Math.PI;
        }
        set power(e) {
            this.intensity = e / (4 * Math.PI);
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(e, t) {
            return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
        }
    }
    class ep extends Oo {
        constructor(){
            super(new Ro(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0;
        }
    }
    class Xr extends gs {
        constructor(e, t){
            super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(pt.DEFAULT_UP), this.updateMatrix(), this.target = new pt, this.shadow = new ep;
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(e) {
            return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
        }
    }
    class tp extends gs {
        constructor(e, t){
            super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
        }
    }
    class Bo {
        constructor(e = !0){
            this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
        }
        start() {
            this.startTime = ja(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
        }
        stop() {
            this.getElapsedTime(), this.running = !1, this.autoStart = !1;
        }
        getElapsedTime() {
            return this.getDelta(), this.elapsedTime;
        }
        getDelta() {
            let e = 0;
            if (this.autoStart && !this.running) return this.start(), 0;
            if (this.running) {
                const t = ja();
                e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
            }
            return e;
        }
    }
    function ja() {
        return (typeof performance > "u" ? Date : performance).now();
    }
    class np {
        constructor(e, t, n = 0, r = 1 / 0){
            this.ray = new ar(e, t), this.near = n, this.far = r, this.camera = null, this.layers = new ls, this.params = {
                Mesh: {},
                Line: {
                    threshold: 1
                },
                LOD: {},
                Points: {
                    threshold: 1
                },
                Sprite: {}
            };
        }
        set(e, t) {
            this.ray.set(e, t);
        }
        setFromCamera(e, t) {
            t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
        }
        intersectObject(e, t = !0, n = []) {
            return ss(e, this, n, t), n.sort(Ka), n;
        }
        intersectObjects(e, t = !0, n = []) {
            for(let r = 0, s = e.length; r < s; r++)ss(e[r], this, n, t);
            return n.sort(Ka), n;
        }
    }
    function Ka(i, e) {
        return i.distance - e.distance;
    }
    function ss(i, e, t, n) {
        if (i.layers.test(e.layers) && i.raycast(e, t), n === !0) {
            const r = i.children;
            for(let s = 0, o = r.length; s < o; s++)ss(r[s], e, t, !0);
        }
    }
    class $a {
        constructor(e = 1, t = 0, n = 0){
            return this.radius = e, this.phi = t, this.theta = n, this;
        }
        set(e, t, n) {
            return this.radius = e, this.phi = t, this.theta = n, this;
        }
        copy(e) {
            return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
        }
        makeSafe() {
            return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
        }
        setFromVector3(e) {
            return this.setFromCartesianCoords(e.x, e.y, e.z);
        }
        setFromCartesianCoords(e, t, n) {
            return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(vt(t / this.radius, -1, 1))), this;
        }
        clone() {
            return new this.constructor().copy(this);
        }
    }
    typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
            revision: as
        }
    }));
    typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = as);
    const Za = {
        type: "change"
    }, qr = {
        type: "start"
    }, Ja = {
        type: "end"
    }, qi = new ar, Qa = new on, ip = Math.cos(70 * Hc.DEG2RAD);
    class rp extends Pn {
        constructor(e, t){
            super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new P, this.cursor = new P, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
                LEFT: "ArrowLeft",
                UP: "ArrowUp",
                RIGHT: "ArrowRight",
                BOTTOM: "ArrowDown"
            }, this.mouseButtons = {
                LEFT: Ln.ROTATE,
                MIDDLE: Ln.DOLLY,
                RIGHT: Ln.PAN
            }, this.touches = {
                ONE: Dn.ROTATE,
                TWO: Dn.DOLLY_PAN
            }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
                return a.phi;
            }, this.getAzimuthalAngle = function() {
                return a.theta;
            }, this.getDistance = function() {
                return this.object.position.distanceTo(this.target);
            }, this.listenToKeyEvents = function(w) {
                w.addEventListener("keydown", Ee), this._domElementKeyEvents = w;
            }, this.stopListenToKeyEvents = function() {
                this._domElementKeyEvents.removeEventListener("keydown", Ee), this._domElementKeyEvents = null;
            }, this.saveState = function() {
                n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
            }, this.reset = function() {
                n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(Za), n.update(), s = r.NONE;
            }, this.update = function() {
                const w = new P, ne = new Rn().setFromUnitVectors(e.up, new P(0, 1, 0)), _e = ne.clone().invert(), de = new P, J = new Rn, C = new P, ie = 2 * Math.PI;
                return function(we = null) {
                    const Se = n.object.position;
                    w.copy(Se).sub(n.target), w.applyQuaternion(ne), a.setFromVector3(w), n.autoRotate && s === r.NONE && H(T(we)), n.enableDamping ? (a.theta += c.theta * n.dampingFactor, a.phi += c.phi * n.dampingFactor) : (a.theta += c.theta, a.phi += c.phi);
                    let We = n.minAzimuthAngle, Xe = n.maxAzimuthAngle;
                    isFinite(We) && isFinite(Xe) && (We < -Math.PI ? We += ie : We > Math.PI && (We -= ie), Xe < -Math.PI ? Xe += ie : Xe > Math.PI && (Xe -= ie), We <= Xe ? a.theta = Math.max(We, Math.min(Xe, a.theta)) : a.theta = a.theta > (We + Xe) / 2 ? Math.max(We, a.theta) : Math.min(Xe, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe(), n.enableDamping === !0 ? n.target.addScaledVector(h, n.dampingFactor) : n.target.add(h), n.target.sub(n.cursor), n.target.clampLength(n.minTargetRadius, n.maxTargetRadius), n.target.add(n.cursor), n.zoomToCursor && R || n.object.isOrthographicCamera ? a.radius = j(a.radius) : a.radius = j(a.radius * l), w.setFromSpherical(a), w.applyQuaternion(_e), Se.copy(n.target).add(w), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, h.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), h.set(0, 0, 0));
                    let Qe = !1;
                    if (n.zoomToCursor && R) {
                        let tt = null;
                        if (n.object.isPerspectiveCamera) {
                            const qe = w.length();
                            tt = j(qe * l);
                            const rt = qe - tt;
                            n.object.position.addScaledVector(b, rt), n.object.updateMatrixWorld();
                        } else if (n.object.isOrthographicCamera) {
                            const qe = new P(L.x, L.y, 0);
                            qe.unproject(n.object), n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), n.object.updateProjectionMatrix(), Qe = !0;
                            const rt = new P(L.x, L.y, 0);
                            rt.unproject(n.object), n.object.position.sub(rt).add(qe), n.object.updateMatrixWorld(), tt = w.length();
                        } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), n.zoomToCursor = !1;
                        tt !== null && (this.screenSpacePanning ? n.target.set(0, 0, -1).transformDirection(n.object.matrix).multiplyScalar(tt).add(n.object.position) : (qi.origin.copy(n.object.position), qi.direction.set(0, 0, -1).transformDirection(n.object.matrix), Math.abs(n.object.up.dot(qi.direction)) < ip ? e.lookAt(n.target) : (Qa.setFromNormalAndCoplanarPoint(n.object.up, n.target), qi.intersectPlane(Qa, n.target))));
                    } else n.object.isOrthographicCamera && (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), n.object.updateProjectionMatrix(), Qe = !0);
                    return l = 1, R = !1, Qe || de.distanceToSquared(n.object.position) > o || 8 * (1 - J.dot(n.object.quaternion)) > o || C.distanceToSquared(n.target) > 0 ? (n.dispatchEvent(Za), de.copy(n.object.position), J.copy(n.object.quaternion), C.copy(n.target), !0) : !1;
                };
            }(), this.dispose = function() {
                n.domElement.removeEventListener("contextmenu", Ye), n.domElement.removeEventListener("pointerdown", E), n.domElement.removeEventListener("pointercancel", U), n.domElement.removeEventListener("wheel", te), n.domElement.removeEventListener("pointermove", v), n.domElement.removeEventListener("pointerup", U), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", Ee), n._domElementKeyEvents = null);
            };
            const n = this, r = {
                NONE: -1,
                ROTATE: 0,
                DOLLY: 1,
                PAN: 2,
                TOUCH_ROTATE: 3,
                TOUCH_PAN: 4,
                TOUCH_DOLLY_PAN: 5,
                TOUCH_DOLLY_ROTATE: 6
            };
            let s = r.NONE;
            const o = 1e-6, a = new $a, c = new $a;
            let l = 1;
            const h = new P, d = new be, p = new be, m = new be, g = new be, _ = new be, f = new be, u = new be, S = new be, y = new be, b = new P, L = new be;
            let R = !1;
            const A = [], G = {};
            let x = !1;
            function T(w) {
                return w !== null ? 2 * Math.PI / 60 * n.autoRotateSpeed * w : 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
            }
            function z(w) {
                const ne = Math.abs(w * .01);
                return Math.pow(.95, n.zoomSpeed * ne);
            }
            function H(w) {
                c.theta -= w;
            }
            function Q(w) {
                c.phi -= w;
            }
            const D = function() {
                const w = new P;
                return function(_e, de) {
                    w.setFromMatrixColumn(de, 0), w.multiplyScalar(-_e), h.add(w);
                };
            }(), F = function() {
                const w = new P;
                return function(_e, de) {
                    n.screenSpacePanning === !0 ? w.setFromMatrixColumn(de, 1) : (w.setFromMatrixColumn(de, 0), w.crossVectors(n.object.up, w)), w.multiplyScalar(_e), h.add(w);
                };
            }(), V = function() {
                const w = new P;
                return function(_e, de) {
                    const J = n.domElement;
                    if (n.object.isPerspectiveCamera) {
                        const C = n.object.position;
                        w.copy(C).sub(n.target);
                        let ie = w.length();
                        ie *= Math.tan(n.object.fov / 2 * Math.PI / 180), D(2 * _e * ie / J.clientHeight, n.object.matrix), F(2 * de * ie / J.clientHeight, n.object.matrix);
                    } else n.object.isOrthographicCamera ? (D(_e * (n.object.right - n.object.left) / n.object.zoom / J.clientWidth, n.object.matrix), F(de * (n.object.top - n.object.bottom) / n.object.zoom / J.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
                };
            }();
            function Y(w) {
                n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l /= w : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
            }
            function X(w) {
                n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l *= w : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
            }
            function q(w, ne) {
                if (!n.zoomToCursor) return;
                R = !0;
                const _e = n.domElement.getBoundingClientRect(), de = w - _e.left, J = ne - _e.top, C = _e.width, ie = _e.height;
                L.x = de / C * 2 - 1, L.y = -(J / ie) * 2 + 1, b.set(L.x, L.y, 1).unproject(n.object).sub(n.object.position).normalize();
            }
            function j(w) {
                return Math.max(n.minDistance, Math.min(n.maxDistance, w));
            }
            function re(w) {
                d.set(w.clientX, w.clientY);
            }
            function se(w) {
                q(w.clientX, w.clientX), u.set(w.clientX, w.clientY);
            }
            function W(w) {
                g.set(w.clientX, w.clientY);
            }
            function K(w) {
                p.set(w.clientX, w.clientY), m.subVectors(p, d).multiplyScalar(n.rotateSpeed);
                const ne = n.domElement;
                H(2 * Math.PI * m.x / ne.clientHeight), Q(2 * Math.PI * m.y / ne.clientHeight), d.copy(p), n.update();
            }
            function le(w) {
                S.set(w.clientX, w.clientY), y.subVectors(S, u), y.y > 0 ? Y(z(y.y)) : y.y < 0 && X(z(y.y)), u.copy(S), n.update();
            }
            function ve(w) {
                _.set(w.clientX, w.clientY), f.subVectors(_, g).multiplyScalar(n.panSpeed), V(f.x, f.y), g.copy(_), n.update();
            }
            function ge(w) {
                q(w.clientX, w.clientY), w.deltaY < 0 ? X(z(w.deltaY)) : w.deltaY > 0 && Y(z(w.deltaY)), n.update();
            }
            function Le(w) {
                let ne = !1;
                switch(w.code){
                    case n.keys.UP:
                        w.ctrlKey || w.metaKey || w.shiftKey ? Q(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : V(0, n.keyPanSpeed), ne = !0;
                        break;
                    case n.keys.BOTTOM:
                        w.ctrlKey || w.metaKey || w.shiftKey ? Q(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : V(0, -n.keyPanSpeed), ne = !0;
                        break;
                    case n.keys.LEFT:
                        w.ctrlKey || w.metaKey || w.shiftKey ? H(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : V(n.keyPanSpeed, 0), ne = !0;
                        break;
                    case n.keys.RIGHT:
                        w.ctrlKey || w.metaKey || w.shiftKey ? H(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : V(-n.keyPanSpeed, 0), ne = !0;
                        break;
                }
                ne && (w.preventDefault(), n.update());
            }
            function De(w) {
                if (A.length === 1) d.set(w.pageX, w.pageY);
                else {
                    const ne = he(w), _e = .5 * (w.pageX + ne.x), de = .5 * (w.pageY + ne.y);
                    d.set(_e, de);
                }
            }
            function Te(w) {
                if (A.length === 1) g.set(w.pageX, w.pageY);
                else {
                    const ne = he(w), _e = .5 * (w.pageX + ne.x), de = .5 * (w.pageY + ne.y);
                    g.set(_e, de);
                }
            }
            function Ve(w) {
                const ne = he(w), _e = w.pageX - ne.x, de = w.pageY - ne.y, J = Math.sqrt(_e * _e + de * de);
                u.set(0, J);
            }
            function N(w) {
                n.enableZoom && Ve(w), n.enablePan && Te(w);
            }
            function dt(w) {
                n.enableZoom && Ve(w), n.enableRotate && De(w);
            }
            function Me(w) {
                if (A.length == 1) p.set(w.pageX, w.pageY);
                else {
                    const _e = he(w), de = .5 * (w.pageX + _e.x), J = .5 * (w.pageY + _e.y);
                    p.set(de, J);
                }
                m.subVectors(p, d).multiplyScalar(n.rotateSpeed);
                const ne = n.domElement;
                H(2 * Math.PI * m.x / ne.clientHeight), Q(2 * Math.PI * m.y / ne.clientHeight), d.copy(p);
            }
            function Re(w) {
                if (A.length === 1) _.set(w.pageX, w.pageY);
                else {
                    const ne = he(w), _e = .5 * (w.pageX + ne.x), de = .5 * (w.pageY + ne.y);
                    _.set(_e, de);
                }
                f.subVectors(_, g).multiplyScalar(n.panSpeed), V(f.x, f.y), g.copy(_);
            }
            function pe(w) {
                const ne = he(w), _e = w.pageX - ne.x, de = w.pageY - ne.y, J = Math.sqrt(_e * _e + de * de);
                S.set(0, J), y.set(0, Math.pow(S.y / u.y, n.zoomSpeed)), Y(y.y), u.copy(S);
                const C = (w.pageX + ne.x) * .5, ie = (w.pageY + ne.y) * .5;
                q(C, ie);
            }
            function Ke(w) {
                n.enableZoom && pe(w), n.enablePan && Re(w);
            }
            function Ue(w) {
                n.enableZoom && pe(w), n.enableRotate && Me(w);
            }
            function E(w) {
                n.enabled !== !1 && (A.length === 0 && (n.domElement.setPointerCapture(w.pointerId), n.domElement.addEventListener("pointermove", v), n.domElement.addEventListener("pointerup", U)), ze(w), w.pointerType === "touch" ? Ne(w) : ee(w));
            }
            function v(w) {
                n.enabled !== !1 && (w.pointerType === "touch" ? $(w) : Z(w));
            }
            function U(w) {
                Ce(w), A.length === 0 && (n.domElement.releasePointerCapture(w.pointerId), n.domElement.removeEventListener("pointermove", v), n.domElement.removeEventListener("pointerup", U)), n.dispatchEvent(Ja), s = r.NONE;
            }
            function ee(w) {
                let ne;
                switch(w.button){
                    case 0:
                        ne = n.mouseButtons.LEFT;
                        break;
                    case 1:
                        ne = n.mouseButtons.MIDDLE;
                        break;
                    case 2:
                        ne = n.mouseButtons.RIGHT;
                        break;
                    default:
                        ne = -1;
                }
                switch(ne){
                    case Ln.DOLLY:
                        if (n.enableZoom === !1) return;
                        se(w), s = r.DOLLY;
                        break;
                    case Ln.ROTATE:
                        if (w.ctrlKey || w.metaKey || w.shiftKey) {
                            if (n.enablePan === !1) return;
                            W(w), s = r.PAN;
                        } else {
                            if (n.enableRotate === !1) return;
                            re(w), s = r.ROTATE;
                        }
                        break;
                    case Ln.PAN:
                        if (w.ctrlKey || w.metaKey || w.shiftKey) {
                            if (n.enableRotate === !1) return;
                            re(w), s = r.ROTATE;
                        } else {
                            if (n.enablePan === !1) return;
                            W(w), s = r.PAN;
                        }
                        break;
                    default:
                        s = r.NONE;
                }
                s !== r.NONE && n.dispatchEvent(qr);
            }
            function Z(w) {
                switch(s){
                    case r.ROTATE:
                        if (n.enableRotate === !1) return;
                        K(w);
                        break;
                    case r.DOLLY:
                        if (n.enableZoom === !1) return;
                        le(w);
                        break;
                    case r.PAN:
                        if (n.enablePan === !1) return;
                        ve(w);
                        break;
                }
            }
            function te(w) {
                n.enabled === !1 || n.enableZoom === !1 || s !== r.NONE || (w.preventDefault(), n.dispatchEvent(qr), ge(me(w)), n.dispatchEvent(Ja));
            }
            function me(w) {
                const ne = w.deltaMode, _e = {
                    clientX: w.clientX,
                    clientY: w.clientY,
                    deltaY: w.deltaY
                };
                switch(ne){
                    case 1:
                        _e.deltaY *= 16;
                        break;
                    case 2:
                        _e.deltaY *= 100;
                        break;
                }
                return w.ctrlKey && !x && (_e.deltaY *= 10), _e;
            }
            function ce(w) {
                w.key === "Control" && (x = !0, document.addEventListener("keyup", fe, {
                    passive: !0,
                    capture: !0
                }));
            }
            function fe(w) {
                w.key === "Control" && (x = !1, document.removeEventListener("keyup", fe, {
                    passive: !0,
                    capture: !0
                }));
            }
            function Ee(w) {
                n.enabled === !1 || n.enablePan === !1 || Le(w);
            }
            function Ne(w) {
                switch(ye(w), A.length){
                    case 1:
                        switch(n.touches.ONE){
                            case Dn.ROTATE:
                                if (n.enableRotate === !1) return;
                                De(w), s = r.TOUCH_ROTATE;
                                break;
                            case Dn.PAN:
                                if (n.enablePan === !1) return;
                                Te(w), s = r.TOUCH_PAN;
                                break;
                            default:
                                s = r.NONE;
                        }
                        break;
                    case 2:
                        switch(n.touches.TWO){
                            case Dn.DOLLY_PAN:
                                if (n.enableZoom === !1 && n.enablePan === !1) return;
                                N(w), s = r.TOUCH_DOLLY_PAN;
                                break;
                            case Dn.DOLLY_ROTATE:
                                if (n.enableZoom === !1 && n.enableRotate === !1) return;
                                dt(w), s = r.TOUCH_DOLLY_ROTATE;
                                break;
                            default:
                                s = r.NONE;
                        }
                        break;
                    default:
                        s = r.NONE;
                }
                s !== r.NONE && n.dispatchEvent(qr);
            }
            function $(w) {
                switch(ye(w), s){
                    case r.TOUCH_ROTATE:
                        if (n.enableRotate === !1) return;
                        Me(w), n.update();
                        break;
                    case r.TOUCH_PAN:
                        if (n.enablePan === !1) return;
                        Re(w), n.update();
                        break;
                    case r.TOUCH_DOLLY_PAN:
                        if (n.enableZoom === !1 && n.enablePan === !1) return;
                        Ke(w), n.update();
                        break;
                    case r.TOUCH_DOLLY_ROTATE:
                        if (n.enableZoom === !1 && n.enableRotate === !1) return;
                        Ue(w), n.update();
                        break;
                    default:
                        s = r.NONE;
                }
            }
            function Ye(w) {
                n.enabled !== !1 && w.preventDefault();
            }
            function ze(w) {
                A.push(w.pointerId);
            }
            function Ce(w) {
                delete G[w.pointerId];
                for(let ne = 0; ne < A.length; ne++)if (A[ne] == w.pointerId) {
                    A.splice(ne, 1);
                    return;
                }
            }
            function ye(w) {
                let ne = G[w.pointerId];
                ne === void 0 && (ne = new be, G[w.pointerId] = ne), ne.set(w.pageX, w.pageY);
            }
            function he(w) {
                const ne = w.pointerId === A[0] ? A[1] : A[0];
                return G[ne];
            }
            n.domElement.addEventListener("contextmenu", Ye), n.domElement.addEventListener("pointerdown", E), n.domElement.addEventListener("pointercancel", U), n.domElement.addEventListener("wheel", te, {
                passive: !1
            }), document.addEventListener("keydown", ce, {
                passive: !0,
                capture: !0
            }), this.update();
        }
    }
    class sp {
        state;
        controls;
        clock;
        animationId = null;
        constructor(e){
            this.clock = new Bo;
            const t = new $f;
            t.background = new Be(1703987), t.fog = new ds(1703987, 10, 50);
            const n = new Rt(75, window.innerWidth / window.innerHeight, .1, 1e3);
            n.position.set(0, 8, 12), n.lookAt(0, 0, 0);
            const r = new No({
                antialias: !0,
                alpha: !1,
                powerPreference: "high-performance"
            });
            r.setSize(window.innerWidth, window.innerHeight), r.setPixelRatio(Math.min(window.devicePixelRatio, 2)), r.shadowMap.enabled = !0, r.shadowMap.type = no, r.toneMapping = ro, r.toneMappingExposure = 1.2, e.appendChild(r.domElement), this.controls = new rp(n, r.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = .05, this.controls.minDistance = 5, this.controls.maxDistance = 25, this.controls.maxPolarAngle = Math.PI / 2 + .2, this.controls.target.set(0, 0, 0), this.state = {
                camera: n,
                scene: t,
                renderer: r,
                physicsWorld: null,
                isPaused: !1,
                isDropping: !1,
                selectedIngredient: null
            }, this.setupLighting(), this.setupEnvironment(), this.createPizzaBase(), window.addEventListener("resize", this.handleResize.bind(this));
        }
        setupLighting() {
            const { scene: e } = this.state, t = new tp(16777215, .4);
            e.add(t);
            const n = new Xr(16777215, 1);
            n.position.set(5, 10, 5), n.castShadow = !0, n.shadow.camera.left = -10, n.shadow.camera.right = 10, n.shadow.camera.top = 10, n.shadow.camera.bottom = -10, n.shadow.mapSize.width = 2048, n.shadow.mapSize.height = 2048, n.shadow.bias = -.001, e.add(n);
            const r = new Xr(4491519, .5);
            r.position.set(-5, 5, -5), e.add(r);
            const s = new Xr(16777215, .3);
            s.position.set(0, 5, -10), e.add(s);
            const o = new Ya(16711935, .5, 10);
            o.position.set(-5, 2, 5), e.add(o);
            const a = new Ya(65535, .5, 10);
            a.position.set(5, 2, -5), e.add(a);
        }
        setupEnvironment() {
            const { scene: e } = this.state, t = new Wt(15, 15, .5, 32), n = new hn({
                color: 2754629,
                metalness: .3,
                roughness: .7
            }), r = new at(t, n);
            r.position.y = -2, r.receiveShadow = !0, e.add(r);
            const s = new Tt, o = 500, a = new Float32Array(o * 3);
            for(let h = 0; h < o * 3; h += 3)a[h] = (Math.random() - .5) * 50, a[h + 1] = Math.random() * 30 - 5, a[h + 2] = (Math.random() - .5) * 50;
            s.setAttribute("position", new It(a, 3));
            const c = new fs({
                color: 16777215,
                size: .1,
                sizeAttenuation: !0,
                transparent: !0,
                opacity: .6
            }), l = new Fo(s, c);
            e.add(l);
        }
        createPizzaBase() {
            const { scene: e } = this.state, t = new Wt(2.5, 2.6, .3, 32), n = new hn({
                color: 13935988,
                roughness: .8,
                metalness: .1
            }), r = new at(t, n);
            r.position.y = 0, r.castShadow = !0, r.receiveShadow = !0, r.name = "pizzaBase", e.add(r);
            const s = new ms(2.55, .15, 8, 32), o = new hn({
                color: 12883552,
                roughness: .9,
                metalness: .05
            }), a = new at(s, o);
            a.position.y = .1, a.rotation.x = Math.PI / 2, a.castShadow = !0, e.add(a);
            const c = new Wt(2.3, 2.3, .05, 32), l = new hn({
                color: 13378082,
                roughness: .3,
                metalness: .1
            }), h = new at(c, l);
            h.position.y = .2, e.add(h);
        }
        start() {
            this.animate();
        }
        animate() {
            if (this.state.isPaused) return;
            this.animationId = requestAnimationFrame(this.animate.bind(this));
            const e = this.clock.getDelta();
            this.controls.update();
            const t = this.state.scene.getObjectByName("particles");
            t && (t.rotation.y += e * .05), this.state.renderer.render(this.state.scene, this.state.camera);
        }
        handleResize() {
            const { camera: e, renderer: t } = this.state;
            e.aspect = window.innerWidth / window.innerHeight, e.updateProjectionMatrix(), t.setSize(window.innerWidth, window.innerHeight), t.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }
        getState() {
            return this.state;
        }
        addObject(e) {
            this.state.scene.add(e);
        }
        removeObject(e) {
            this.state.scene.remove(e);
        }
        pause() {
            this.state.isPaused = !0, this.animationId && (cancelAnimationFrame(this.animationId), this.animationId = null);
        }
        resume() {
            this.state.isPaused = !1, this.animate();
        }
        dispose() {
            this.pause(), this.controls.dispose(), this.state.renderer.dispose(), window.removeEventListener("resize", this.handleResize.bind(this));
        }
    }
    const ap = "modulepreload", op = function(i) {
        return "/cosmic-pizza-counter/" + i;
    }, eo = {}, cp = function(e, t, n) {
        let r = Promise.resolve();
        if (t && t.length > 0) {
            document.getElementsByTagName("link");
            const o = document.querySelector("meta[property=csp-nonce]"), a = o?.nonce || o?.getAttribute("nonce");
            r = Promise.allSettled(t.map((c)=>{
                if (c = op(c), c in eo) return;
                eo[c] = !0;
                const l = c.endsWith(".css"), h = l ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${c}"]${h}`)) return;
                const d = document.createElement("link");
                if (d.rel = l ? "stylesheet" : ap, l || (d.as = "script"), d.crossOrigin = "", d.href = c, a && d.setAttribute("nonce", a), document.head.appendChild(d), l) return new Promise((p, m)=>{
                    d.addEventListener("load", p), d.addEventListener("error", ()=>m(new Error(`Unable to preload CSS for ${c}`)));
                });
            }));
        }
        function s(o) {
            const a = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (a.payload = o, window.dispatchEvent(a), !a.defaultPrevented) throw o;
        }
        return r.then((o)=>{
            for (const a of o || [])a.status === "rejected" && s(a.reason);
            return e().catch(s);
        });
    }, lp = {
        heavy: {
            mass: 2,
            restitution: .01,
            friction: 1.2,
            linearDamping: .8,
            angularDamping: .8
        },
        light: {
            mass: .15,
            restitution: .02,
            friction: .8,
            linearDamping: .6,
            angularDamping: .6,
            airResistance: .8
        },
        bouncy: {
            mass: .4,
            restitution: .08,
            friction: .6,
            linearDamping: .5,
            angularDamping: .5
        },
        liquid: {
            mass: .8,
            restitution: 0,
            friction: .3,
            linearDamping: 1.2,
            angularDamping: 1.2,
            stickiness: .9
        },
        sticky: {
            mass: .25,
            restitution: .01,
            friction: 1.5,
            linearDamping: .9,
            angularDamping: .9,
            stickiness: .8
        },
        rigid: {
            mass: 1,
            restitution: .03,
            friction: 1,
            linearDamping: .7,
            angularDamping: .7
        },
        ethereal: {
            mass: .08,
            restitution: .05,
            friction: .4,
            linearDamping: .3,
            angularDamping: .3,
            airResistance: .9,
            chaosMultiplier: 2
        }
    };
    class hp {
        RAPIER;
        world = null;
        eventQueue = null;
        meshToBody = new Map;
        bodyToMesh = new Map;
        pizzaBaseBody = null;
        collisionCallbacks = [];
        totalCollisions = 0;
        async init() {
            try {
                const e = await cp(()=>import("./rapier-Dk23zl7V.js"), []);
                typeof e.init == "function" && await e.init(), this.RAPIER = e, await new Promise((n)=>setTimeout(n, 200));
                try {
                    new e.IntegrationParameters;
                } catch  {
                    console.warn("WASM not ready, waiting longer..."), await new Promise((r)=>setTimeout(r, 1e3));
                }
                const t = {
                    x: 0,
                    y: -9.81,
                    z: 0
                };
                this.world = new e.World(t), this.eventQueue = new e.EventQueue(!0);
            } catch (e) {
                console.error("Failed to initialize Rapier:", e), console.log("Falling back to no-physics mode"), this.world = null, this.eventQueue = null;
            }
            this.world && (this.world.timestep = 1 / 60, this.createPizzaBase());
        }
        createPizzaBase() {
            if (!this.world || !this.RAPIER) return;
            const e = this.RAPIER.RigidBodyDesc.fixed().setTranslation(0, .25, 0);
            this.pizzaBaseBody = this.world.createRigidBody(e);
            const t = this.RAPIER.ColliderDesc.cylinder(.1, 2.5).setTranslation(0, 0, 0).setRestitution(.01).setFriction(2);
            this.world.createCollider(t, this.pizzaBaseBody);
            const n = 24, r = 2.55;
            for(let o = 0; o < n; o++){
                const a = o / n * Math.PI * 2, c = Math.cos(a) * r, l = Math.sin(a) * r, h = this.RAPIER.ColliderDesc.cuboid(.15, .5, .15).setTranslation(c, .05, l).setRestitution(.01).setFriction(1);
                this.world.createCollider(h, this.pizzaBaseBody);
            }
            const s = 2.8;
            for(let o = 0; o < n; o++){
                const a = o / n * Math.PI * 2, c = Math.cos(a) * s, l = Math.sin(a) * s, h = this.RAPIER.ColliderDesc.cuboid(.1, .8, .1).setTranslation(c, .15, l).setRestitution(0).setFriction(2);
                this.world.createCollider(h, this.pizzaBaseBody);
            }
        }
        createRigidBody(e, t, n) {
            if (!this.world || !this.RAPIER) {
                const l = {
                    translation: ()=>t,
                    rotation: ()=>({
                            x: 0,
                            y: 0,
                            z: 0,
                            w: 1
                        }),
                    linvel: ()=>({
                            x: 0,
                            y: 0,
                            z: 0
                        }),
                    angvel: ()=>({
                            x: 0,
                            y: 0,
                            z: 0
                        }),
                    applyImpulse: ()=>{},
                    applyTorqueImpulse: ()=>{},
                    setTranslation: (h)=>{
                        t.set(h.x, h.y, h.z);
                    }
                };
                return this.meshToBody.set(e, l), this.bodyToMesh.set(l, e), l;
            }
            const r = lp[n], s = this.RAPIER.RigidBodyDesc.dynamic().setTranslation(t.x, t.y, t.z).setLinearDamping(r.linearDamping).setAngularDamping(r.angularDamping), o = this.world.createRigidBody(s);
            let a;
            const c = e.scale || {
                x: 1,
                y: 1,
                z: 1
            };
            return n === "liquid" ? a = this.RAPIER.ColliderDesc.ball(.3 * c.x) : n === "ethereal" || n === "light" ? a = this.RAPIER.ColliderDesc.ball(.2 * c.x) : n === "heavy" ? a = this.RAPIER.ColliderDesc.cuboid(.3 * c.x, .3 * c.y, .3 * c.z) : a = this.RAPIER.ColliderDesc.cylinder(.1 * c.y, .25 * c.x), a.setRestitution(r.restitution).setFriction(r.friction).setMass(r.mass), this.world.createCollider(a, o), this.meshToBody.set(e, o), this.bodyToMesh.set(o, e), o;
        }
        step(e) {
            if (!this.world || !this.eventQueue) {
                this.simulateSimplePhysics(e);
                return;
            }
            this.world.timestep = Math.min(e, 1 / 30), this.world.step(this.eventQueue), this.eventQueue.drainCollisionEvents((t, n, r)=>{
                r && (this.totalCollisions++, this.collisionCallbacks.forEach((s)=>s(t, n)));
            }), this.bodyToMesh.forEach((t, n)=>{
                const r = n.translation(), s = n.rotation();
                t.position.set(r.x, r.y, r.z), t.quaternion.set(s.x, s.y, s.z, s.w);
            });
        }
        applyImpulse(e, t) {
            e.applyImpulse({
                x: t.x,
                y: t.y,
                z: t.z
            }, !0);
        }
        applyRandomSpin(e, t = 2) {
            const n = {
                x: (Math.random() - .5) * t,
                y: (Math.random() - .5) * t,
                z: (Math.random() - .5) * t
            };
            e.applyTorqueImpulse(n, !0);
        }
        shakePizza(e) {
            this.bodyToMesh.forEach((t, n)=>{
                if (n !== this.pizzaBaseBody) {
                    const r = {
                        x: (Math.random() - .5) * e,
                        y: Math.random() * e * 2,
                        z: (Math.random() - .5) * e
                    };
                    n.applyImpulse(r, !0);
                }
            });
        }
        isSettled(e, t = .1) {
            const n = e.linvel(), r = e.angvel(), s = Math.sqrt(n.x ** 2 + n.y ** 2 + n.z ** 2), o = Math.sqrt(r.x ** 2 + r.y ** 2 + r.z ** 2);
            return s < t && o < t;
        }
        getSettledIngredients(e) {
            return e.filter((t)=>this.isSettled(t.rigidBody));
        }
        onCollision(e) {
            this.collisionCallbacks.push(e);
        }
        getTotalCollisions() {
            return this.totalCollisions;
        }
        resetCollisionCount() {
            this.totalCollisions = 0;
        }
        removeBody(e) {
            const t = this.meshToBody.get(e);
            t && this.world && (this.world.removeRigidBody(t), this.meshToBody.delete(e), this.bodyToMesh.delete(t));
        }
        simulateSimplePhysics(e) {
            this.bodyToMesh.forEach((t)=>{
                t.position.y > .3 && (t.position.y -= 9.81 * e * e, t.position.y < .3 && (t.position.y = .3));
            });
        }
        dispose() {
            this.meshToBody.clear(), this.bodyToMesh.clear(), this.collisionCallbacks = [], this.world = null, this.eventQueue = null;
        }
    }
    class up {
        constructor(){}
        createMesh(e) {
            switch(e.modelType){
                case "procedural":
                    return this.createProceduralMesh(e);
                case "particle":
                    return this.createParticleMesh(e);
                case "text3d":
                    return this.createText3DMesh(e);
                case "symbolic":
                    return this.createSymbolicMesh(e);
                case "composite":
                    return this.createCompositeMesh(e);
                default:
                    return this.createProceduralMesh(e);
            }
        }
        createProceduralMesh(e) {
            let t;
            switch(e.category){
                case "liquid":
                    t = new Ht(.3, 16, 12);
                    break;
                case "normal":
                    if (e.id.includes("pepper")) t = new Wt(.3, .3, .05, 16);
                    else if (e.id.includes("mushroom")) {
                        const s = new tr(.2, .15, 8), o = new Wt(.05, .05, .15, 8);
                        return this.createGroupMesh([
                            s,
                            o
                        ], e);
                    } else t = new Qt(.3, .2, .3);
                    break;
                case "bizarre":
                    if (e.id === "baseball") t = new Ht(.3, 16, 16);
                    else if (e.id === "rubber_duck") {
                        const s = new Ht(.25, 12, 12), o = new Ht(.15, 8, 8);
                        return this.createGroupMesh([
                            s,
                            o
                        ], e);
                    } else e.id === "marble" ? t = new Ht(.15, 16, 16) : t = new Qt(.3, .3, .3);
                    break;
                case "special":
                    e.id === "brain" ? (t = new Ht(.35, 12, 8), this.addNoise(t, .05)) : e.id === "eyeball" ? t = new Ht(.2, 16, 16) : t = new Qt(.3, .3, .3);
                    break;
                default:
                    t = new Qt(.3, .3, .3);
            }
            const n = this.createMaterial(e), r = new at(t, n);
            return r.scale.setScalar(e.scale), r.castShadow = !0, r.receiveShadow = !0, r.userData = {
                ingredient: e
            }, r;
        }
        createParticleMesh(e) {
            const t = new Tt, n = e.id === "glitter" ? 50 : 20, r = new Float32Array(n * 3);
            for(let a = 0; a < n * 3; a += 3)r[a] = (Math.random() - .5) * .3, r[a + 1] = (Math.random() - .5) * .3, r[a + 2] = (Math.random() - .5) * .3;
            t.setAttribute("position", new It(r, 3));
            const s = new fs({
                color: e.color,
                size: .05,
                transparent: !0,
                opacity: .8,
                blending: Yr
            }), o = new Fo(t, s);
            return o.scale.setScalar(e.scale), o.userData = {
                ingredient: e
            }, o;
        }
        createText3DMesh(e) {
            const t = document.createElement("canvas");
            t.width = 256, t.height = 64;
            const n = t.getContext("2d");
            n.fillStyle = e.color, n.fillRect(0, 0, 256, 64), n.fillStyle = "#FFFFFF", n.font = "24px Arial", n.textAlign = "center", n.textBaseline = "middle";
            const r = e.id === "forgotten_password" ? "********" : e.name;
            n.fillText(r, 128, 32);
            const s = new Zf(t), o = new or(1, .25), a = new xi({
                map: s,
                transparent: !0,
                side: Bt
            }), c = new at(o, a);
            return c.scale.setScalar(e.scale), c.userData = {
                ingredient: e
            }, c;
        }
        createSymbolicMesh(e) {
            let t;
            e.id === "monday_morning" ? t = new Wt(.3, .3, .05, 16) : e.id === "crushed_dreams" ? t = new tr(.2, .4, 5) : t = new nr(.3);
            const n = this.createMaterial(e), r = new at(t, n);
            return r.scale.setScalar(e.scale), r.castShadow = !0, r.userData = {
                ingredient: e
            }, r;
        }
        createCompositeMesh(e) {
            const t = new Zn;
            if (e.id === "zodiac_signs") for(let r = 0; r < 12; r++){
                const s = r / 12 * Math.PI * 2, o = Math.cos(s) * .2, a = Math.sin(s) * .2, c = new nr(.05), l = new hn({
                    color: new Be().setHSL(r / 12, 1, .5),
                    emissive: new Be().setHSL(r / 12, 1, .3),
                    emissiveIntensity: .5
                }), h = new at(c, l);
                h.position.set(o, 0, a), h.castShadow = !0, t.add(h);
            }
            return t.scale.setScalar(e.scale), t.userData = {
                ingredient: e
            }, t;
        }
        createGroupMesh(e, t) {
            const n = new Zn, r = this.createMaterial(t);
            return e.forEach((s, o)=>{
                const a = new at(s, r);
                o === 1 && (a.position.y = .2), a.castShadow = !0, n.add(a);
            }), n.scale.setScalar(t.scale), n.userData = {
                ingredient: t
            }, n;
        }
        createMaterial(e) {
            const t = new Be(e.color);
            return e.category === "liquid" || e.id === "jello" ? new Jf({
                color: t,
                metalness: 0,
                roughness: .1,
                transmission: .8,
                thickness: .5,
                transparent: !0,
                opacity: .8
            }) : e.category === "abstract" || e.category === "special" ? new hn({
                color: t,
                emissive: t,
                emissiveIntensity: .3,
                metalness: .3,
                roughness: .5
            }) : new hn({
                color: t,
                metalness: .1,
                roughness: .7
            });
        }
        addNoise(e, t) {
            const n = e.attributes.position;
            for(let r = 0; r < n.count; r++){
                const s = new P(n.getX(r), n.getY(r), n.getZ(r));
                s.normalize(), s.multiplyScalar(1 + (Math.random() - .5) * t), n.setXYZ(r, s.x, s.y, s.z);
            }
            n.needsUpdate = !0, e.computeVertexNormals();
        }
    }
    class dp {
        meshFactory;
        physicsWorld;
        sceneManager;
        droppedIngredients = [];
        isDropping = !1;
        dropHeight = 2;
        nextId = 0;
        constructor(e, t){
            this.sceneManager = e, this.physicsWorld = t, this.meshFactory = new up;
        }
        async dropIngredient(e, t) {
            if (this.isDropping) throw new Error("Already dropping an ingredient");
            this.isDropping = !0;
            const n = this.meshFactory.createMesh(e), r = t || this.calculateDropPosition();
            r.y = this.dropHeight, n.position.copy(r), n.rotation.x = 0, n.rotation.y = 0, n.rotation.z = 0, this.sceneManager.addObject(n);
            const s = this.physicsWorld.createRigidBody(n, r, e.physicsProfile);
            if (!s) throw this.sceneManager.removeObject(n), this.isDropping = !1, new Error("Failed to create physics body");
            const o = {
                id: `ingredient_${this.nextId++}`,
                ingredient: e,
                mesh: n,
                rigidBody: s,
                position: r.clone(),
                rotation: new vi(n.rotation.x, n.rotation.y, n.rotation.z),
                landedAt: Date.now(),
                velocity: new P,
                settled: !1
            };
            return this.droppedIngredients.push(o), setTimeout(()=>{
                this.checkSettlement(o), this.isDropping = !1;
            }, 500), o;
        }
        calculateDropPosition() {
            const e = Math.random() * Math.PI * 2, t = Math.random() * 2;
            return new P(Math.cos(e) * t, this.dropHeight, Math.sin(e) * t);
        }
        async checkSettlement(e) {
            const t = setInterval(()=>{
                this.physicsWorld.isSettled(e.rigidBody) && (e.settled = !0, clearInterval(t), this.createLandingEffect(e.mesh.position));
            }, 100);
            setTimeout(()=>{
                clearInterval(t), e.settled = !0;
            }, 5e3);
        }
        createLandingEffect(e) {
            const n = [];
            for(let o = 0; o < 10; o++){
                const a = new Ht(.05, 4, 4), c = new xi({
                    color: 16766720,
                    transparent: !0,
                    opacity: .8
                }), l = new at(a, c);
                l.position.copy(e);
                const h = new P((Math.random() - .5) * 5, Math.random() * 5, (Math.random() - .5) * 5);
                l.userData.velocity = h, n.push(l), this.sceneManager.addObject(l);
            }
            let r = .8;
            const s = ()=>{
                r -= .02, n.forEach((o)=>{
                    const a = o.userData.velocity;
                    o.position.add(a.clone().multiplyScalar(.02)), a.y -= .2, o.material.opacity = r;
                }), r > 0 ? requestAnimationFrame(s) : n.forEach((o)=>{
                    this.sceneManager.removeObject(o), o.geometry.dispose(), o.material.dispose();
                });
            };
            s();
        }
        async batchDrop(e, t = 500) {
            for (const n of e)await this.dropIngredient(n), await new Promise((r)=>setTimeout(r, t));
        }
        getDroppedIngredients() {
            return this.droppedIngredients;
        }
        getSettledIngredients() {
            return this.physicsWorld.getSettledIngredients(this.droppedIngredients);
        }
        clearAllIngredients() {
            this.droppedIngredients.forEach((e)=>{
                this.sceneManager.removeObject(e.mesh), this.physicsWorld.removeBody(e.mesh);
            }), this.droppedIngredients = [], this.physicsWorld.resetCollisionCount();
        }
        canDrop() {
            return !this.isDropping;
        }
    }
    class fp {
        apiKey;
        apiEndpoint;
        fortuneEndings = [
            "The pizza has spoken. Listen carefully.",
            "Your destiny is baked, but not yet served.",
            "The cosmic oven dings for thee.",
            "Trust the crust, for it knows the way.",
            "In cheese we trust, in sauce we believe.",
            "The toppings have aligned. Act accordingly.",
            "Your future is as certain as melted mozzarella.",
            "The universe tastes your intentions.",
            "Wisdom comes in slices, not wholes.",
            "The circle is complete, but your journey continues."
        ];
        constructor(){
            this.apiKey = "", this.apiEndpoint = "https://api.anthropic.com/v1/messages";
        }
        async generateFortune(e, t) {
            const n = this.buildPrompt(e, t);
            try {
                if (this.apiKey) {
                    const r = await this.callClaudeAPI(n);
                    return this.parseFortune(r, e.id);
                } else return console.log("No API key found, using fallback fortune"), this.generateFallbackFortune(e, t);
            } catch (r) {
                return console.error("Failed to generate fortune:", r), this.generateFallbackFortune(e, t);
            }
        }
        buildPrompt(e, t) {
            const n = e.droppedIngredients.map((a)=>{
                const c = a.position.y > 1 ? "stacked high" : Math.abs(a.position.x) > 1.5 || Math.abs(a.position.z) > 1.5 ? "edge dweller" : "centered";
                return `${a.ingredient.name} (${a.ingredient.category}, ${c})`;
            }), r = e.droppedIngredients.filter((a)=>a.ingredient.category === "normal").length, s = e.droppedIngredients.filter((a)=>a.ingredient.category === "bizarre").length, o = e.droppedIngredients.filter((a)=>a.ingredient.category === "special").length;
            return `You are a mystical pizza fortune teller who makes profound psychological insights through pizza toppings. Each ingredient choice reveals deep truths about the person's inner state, fears, desires, and future.

PSYCHOLOGICAL INGREDIENT MEANINGS:
- dust bunnies = neglecting self-care, possible depression or overwhelm
- forgotten passwords = losing touch with one's past self, identity crisis
- Monday mornings = dread of routine, seeking escape from obligations
- crushed dreams = processing failure, transformation through disappointment
- expired coupons = missed opportunities, regret, fear of wasting potential
- brain = overthinking, analysis paralysis, intellectual ego
- eyeballs = paranoia, feeling watched, or desperate need to be seen
- old socks = comfort in familiar dysfunction, resistance to change
- glass shards = fragmented self, sharp edges protecting soft interior
- toy dinosaurs = nostalgia for simpler times, inner child needs attention
- Normal foods = attempting to appear conventional while hiding deeper truths

PIZZA ANALYSIS:
Ingredients (${e.droppedIngredients.length} total):
${n.join(`
`)}

Categories: ${r} normal (conformity), ${s} bizarre (rebellion), ${o} special (uniqueness)

PHYSICS REVELATIONS:
- Chaos Level: ${t.chaosScore}% = ${t.chaosScore > 70 ? "life in turmoil, seeking radical change" : t.chaosScore > 40 ? "controlled chaos, managing multiple stressors" : "rigid control, fear of spontaneity"}
- Balance: ${t.symmetryScore}% (${t.distributionPattern}) = ${t.distributionPattern === "centered" ? "self-focused, possible isolation" : t.distributionPattern === "edge-heavy" ? "avoiding core issues, living on margins" : "scattered attention, lack of focus"}
- Stack Height: ${t.maxStackHeight} = ${t.maxStackHeight > 3 ? "ambitious but precarious goals" : "playing it safe, fear of reaching high"}
- Collisions: ${t.totalCollisions} = relationship dynamics, social friction

CLUSTERS & ISOLATION:
${t.ingredientClusters.length > 0 ? `Bonded items (${t.ingredientClusters.map((a)=>a.members.join("+")).join(", ")}) = codependent patterns` : "No clusters = emotional isolation"}
${t.loneIngredients.length > 0 ? `Isolated items (${t.loneIngredients.join(", ")}) = rejected aspects of self` : ""}

Write a fortune that:
1. Makes bold psychological assessments based on specific ingredients (e.g., "The dust bunnies reveal you're drowning in neglected responsibilities")
2. Interprets bizarre choices as coping mechanisms or hidden desires
3. Reads the physics as current life state (chaos = internal turmoil, etc.)
4. Makes ONE eerily specific prediction that sounds almost too accurate
5. Includes ONE rhyming couplet for dramatic effect
6. Does NOT end with the same cliché - vary your closing line

Be direct, slightly unsettling, and psychologically penetrating. 100-150 words.

End with: "Lucky numbers: [5 numbers between 1-49 based on patterns]"`;
        }
        async callClaudeAPI(e) {
            if (!this.apiKey) throw new Error("API key not configured");
            const t = await fetch(this.apiEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": this.apiKey,
                    "anthropic-version": "2023-06-01"
                },
                body: JSON.stringify({
                    model: "claude-3-haiku-20240307",
                    max_tokens: 400,
                    temperature: 1.2,
                    messages: [
                        {
                            role: "user",
                            content: e
                        }
                    ]
                })
            });
            if (!t.ok) {
                const r = await t.text();
                throw console.error("API Error:", r), new Error(`API call failed: ${t.status}`);
            }
            return (await t.json()).content[0].text;
        }
        parseFortune(e, t) {
            const n = e.match(/Lucky numbers:.*?(\d+.*?\d+.*?\d+.*?\d+.*?\d+)/), r = n ? n[1].match(/\d+/g)?.slice(0, 5).map((a)=>parseInt(a)) || this.generateLuckyNumbers() : this.generateLuckyNumbers(), s = e.replace(/Lucky numbers:.*$/i, "").trim(), o = s.split(/[.!?]/).filter((a)=>a.trim());
            return {
                id: `fortune_${Date.now()}`,
                pizzaId: t,
                generalReading: s,
                chaosInterpretation: o.find((a)=>a.toLowerCase().includes("chaos")) || "Chaos guides your path",
                symmetryMeaning: o.find((a)=>a.toLowerCase().includes("balance") || a.toLowerCase().includes("symmetr")) || "Balance awaits",
                heightPrediction: o.find((a)=>a.toLowerCase().includes("stack") || a.toLowerCase().includes("tower")) || "Heights call to you",
                ingredientMeanings: [],
                luckyNumbers: r
            };
        }
        generateFallbackFortune(e, t) {
            const n = e.droppedIngredients, r = n.find((h)=>h.ingredient.category === "bizarre" || h.ingredient.category === "special"), s = n.filter((h)=>h.ingredient.category === "normal").length, o = n.filter((h)=>h.ingredient.category === "bizarre").length;
            let a = "Your pizza reveals uncomfortable truths about your psyche. ";
            if (t.chaosScore > 70 ? a += `The ${t.chaosScore}% chaos energy screams of inner turmoil you're desperately trying to control. ` : t.chaosScore < 30 ? a += `Your rigid ${t.chaosScore}% chaos level exposes a deep fear of losing control - you're suffocating your own spontaneity. ` : a += `At ${t.chaosScore}% chaos, you're maintaining a facade of balance while storms rage beneath. `, r) {
                const d = {
                    "dust bunnies": "The dust bunnies expose your neglected corners - depression has been your quiet roommate",
                    "forgotten passwords": "Forgotten passwords reveal you've locked away parts of yourself you're afraid to access",
                    "Monday mornings": "Monday mornings show you're trapped in cycles you created but now despise",
                    "crushed dreams": "Those crushed dreams aren't dead, they're composting into something unrecognizable",
                    "expired coupons": "Expired coupons - you hoard opportunities but never act, paralyzed by perfect timing",
                    brain: "The brain reveals your thoughts have become a prison of your own making",
                    eyeballs: "Those eyeballs confirm your suspicion: yes, they ARE watching and judging",
                    "old socks": "Old socks indicate you find comfort in your own staleness",
                    "glass shards": "Glass shards - you've shattered but convinced yourself the pieces are art",
                    "toy dinosaurs": "Toy dinosaurs prove you're extinct in your own life, living in prehistoric patterns"
                }[r.ingredient.name] || `The ${r.ingredient.name} exposes what you refuse to acknowledge about yourself`;
                a += d + ". ";
            }
            o > s ? a += "Your rejection of normalcy is a scream for help disguised as rebellion. " : s > o && (a += "Hiding behind conventional choices won't mask the chaos within. "), t.ingredientClusters.length > 0 && (a += `The clustering of ${t.ingredientClusters[0].members.join(" and ")} mirrors your codependent patterns. `);
            const c = [
                "Next Thursday at 3:47 PM, you'll realize why you chose these toppings. The moment will sting, but the clarity will bring relief.",
                "Within 13 days, someone will say exactly what you've been thinking. Their words will shake, your foundation will quake.",
                "You'll dream of this pizza three times before the month ends. Each dream will reveal a different fear you've been feeding.",
                "A stranger will remind you of crushed dreams next week. Don't run - they hold a key you thought you'd lost."
            ];
            a += c[Math.floor(Math.random() * c.length)] + " ";
            const l = this.fortuneEndings[Math.floor(Math.random() * this.fortuneEndings.length)];
            return a += l, {
                id: `fortune_${Date.now()}`,
                pizzaId: e.id,
                generalReading: a,
                chaosInterpretation: this.getChaosInterpretation(t.chaosScore),
                symmetryMeaning: this.getBalanceInterpretation(t.distributionPattern),
                heightPrediction: `${t.maxStackHeight} layers reveal ${t.maxStackHeight > 3 ? "dangerous ambitions built on shaky foundations" : "fear of reaching beyond your comfort zone"}`,
                ingredientMeanings: n.slice(0, 3).map((h)=>`${h.ingredient.name}: ${this.getDeepMeaning(h.ingredient.name)}`),
                luckyNumbers: this.generateLuckyNumbers(t.totalCollisions)
            };
        }
        getDeepMeaning(e) {
            return {
                cheese: "comfort seeking, fear of rawness",
                pepperoni: "aggressive tendencies, spicy anger",
                mushrooms: "thriving in darkness, decomposer energy",
                pineapple: "controversial choices, need to provoke",
                olives: "acquired taste, forcing sophistication",
                anchovies: "self-sabotage disguised as boldness",
                "dust bunnies": "accumulated neglect, depression debris",
                "forgotten passwords": "locked memories, identity crisis",
                "Monday mornings": "existential dread, routine prison",
                "crushed dreams": "fertilizer for bitterness or wisdom",
                brain: "overthinking, mental masturbation",
                eyeballs: "paranoid vigilance, performative existence"
            }[e] || "unexamined impulses";
        }
        getChaosInterpretation(e) {
            return e > 80 ? "CHAOS OVERLOAD: Your internal screaming has become external" : e > 60 ? "HIGH CHAOS: Juggling flaming batons while your house burns" : e > 40 ? "MANAGED CHAOS: Organized disaster, scheduled breakdowns" : e > 20 ? "CONTROLLED: Gripping the wheel so tight your knuckles are translucent" : "RIGID ORDER: The prison you built has golden bars";
        }
        getBalanceInterpretation(e) {
            switch(e){
                case "centered":
                    return "Narcissistic focus - the world revolves around your pizza";
                case "edge-heavy":
                    return "Avoiding the center - afraid of your own core";
                case "chaotic":
                    return "Scattered like your attention, commitment issues manifest";
                case "balanced":
                    return "Performative balance hiding internal chaos";
                default:
                    return "Undefined patterns, just like your life goals";
            }
        }
        generateLuckyNumbers(e = 0) {
            const t = [], n = e || Math.floor(Math.random() * 10) + 1;
            for(let r = 0; r < 5; r++)t.push((n * (r + 1) + Math.floor(Math.random() * 20)) % 49 + 1);
            return [
                ...new Set(t)
            ].slice(0, 5);
        }
        analyzePhysics(e) {
            const t = e.droppedIngredients;
            if (t.length === 0) return this.getEmptyAnalysis(e.id);
            let n = 0, r = 0;
            t.forEach((g)=>{
                n += g.position.x, r += g.position.z;
            }), n /= t.length, r /= t.length;
            const s = Math.sqrt(n * n + r * r);
            let o;
            s < .5 ? o = "centered" : s > 1.5 ? o = "edge-heavy" : e.chaosScore > 70 ? o = "chaotic" : o = "balanced";
            const a = [], c = new Set;
            t.forEach((g)=>{
                if (c.has(g.id)) return;
                const _ = {
                    members: [
                        g.ingredient.name
                    ],
                    position: g.position.clone(),
                    strength: 1
                };
                t.forEach((f)=>{
                    g.id !== f.id && !c.has(f.id) && g.position.distanceTo(f.position) < .5 && (_.members.push(f.ingredient.name), c.add(f.id), _.strength++);
                }), _.members.length > 1 && (a.push(_), c.add(g.id));
            });
            const l = t.filter((g)=>!a.some((_)=>_.members.includes(g.ingredient.name))).map((g)=>g.ingredient.name), h = Math.max(...t.map((g)=>g.position.y)), d = Math.ceil(h / .2), m = 1.5 + t.reduce((g, _)=>{
                const f = _.ingredient.physicsProfile;
                return g + (typeof f == "object" ? f.mass : 1);
            }, 0) / t.length * .5 + t.length * .1;
            return {
                totalCollisions: e.totalCollisions,
                maxVelocityReached: 10,
                chaosScore: e.chaosScore,
                centerOfMass: new P(n, 0, r),
                symmetryScore: e.symmetryScore,
                distributionPattern: o,
                maxStackHeight: d,
                towerFormations: [],
                stabilityScore: 100 - e.chaosScore,
                ingredientClusters: a,
                loneIngredients: l,
                bondStrength: a.reduce((g, _)=>g + _.strength, 0) * 10,
                settleTime: Math.round(m * 10) / 10,
                lastIngredientLanded: t[t.length - 1]?.ingredient.name || "none"
            };
        }
        getEmptyAnalysis(e) {
            return {
                totalCollisions: 0,
                maxVelocityReached: 0,
                chaosScore: 0,
                centerOfMass: new P(0, 0, 0),
                symmetryScore: 100,
                distributionPattern: "balanced",
                maxStackHeight: 0,
                towerFormations: [],
                stabilityScore: 100,
                ingredientClusters: [],
                loneIngredients: [],
                bondStrength: 0,
                settleTime: 0,
                lastIngredientLanded: "none"
            };
        }
    }
    const pp = [
        {
            id: "cheese",
            name: "Cheese",
            emoji: "🧀",
            category: "normal",
            modelType: "procedural",
            physicsProfile: "sticky",
            color: "#FFD700",
            scale: 1,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "comfort",
                        "warmth"
                    ],
                    weight: .8
                }
            ]
        },
        {
            id: "pepperoni",
            name: "Pepperoni",
            emoji: "🍕",
            category: "normal",
            modelType: "procedural",
            physicsProfile: "rigid",
            color: "#8B0000",
            scale: .8,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "bold",
                        "spicy"
                    ],
                    weight: .9
                }
            ]
        },
        {
            id: "mushroom",
            name: "Mushroom",
            emoji: "🍄",
            category: "normal",
            modelType: "procedural",
            physicsProfile: "bouncy",
            color: "#8B4513",
            scale: .6,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "grounded",
                        "earthy"
                    ],
                    weight: .7
                }
            ]
        },
        {
            id: "onion",
            name: "Onion",
            emoji: "🧅",
            category: "normal",
            modelType: "procedural",
            physicsProfile: "rigid",
            color: "#FFFFFF",
            scale: .7,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "layers",
                        "complexity"
                    ],
                    weight: .8
                }
            ]
        },
        {
            id: "olive",
            name: "Olive",
            emoji: "🫒",
            category: "normal",
            modelType: "procedural",
            physicsProfile: "rigid",
            color: "#000000",
            scale: .5,
            fortuneTraits: [
                {
                    category: "luck",
                    keywords: [
                        "wisdom",
                        "peace"
                    ],
                    weight: .7
                }
            ]
        },
        {
            id: "pineapple",
            name: "Pineapple",
            emoji: "🍍",
            category: "normal",
            modelType: "procedural",
            physicsProfile: "rigid",
            color: "#FFD700",
            scale: .7,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "controversial",
                        "unique"
                    ],
                    weight: .9
                }
            ]
        },
        {
            id: "bacon",
            name: "Bacon",
            emoji: "🥓",
            category: "normal",
            modelType: "procedural",
            physicsProfile: "rigid",
            color: "#8B4513",
            scale: .9,
            fortuneTraits: [
                {
                    category: "luck",
                    keywords: [
                        "indulgence",
                        "satisfaction"
                    ],
                    weight: .8
                }
            ]
        },
        {
            id: "sausage",
            name: "Sausage",
            emoji: "🌭",
            category: "normal",
            modelType: "procedural",
            physicsProfile: "rigid",
            color: "#8B0000",
            scale: .8,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "hearty",
                        "robust"
                    ],
                    weight: .8
                }
            ]
        },
        {
            id: "anchovy",
            name: "Anchovy",
            emoji: "🐟",
            category: "normal",
            modelType: "procedural",
            physicsProfile: "light",
            color: "#708090",
            scale: .4,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "acquired taste",
                        "sophisticated"
                    ],
                    weight: .7
                }
            ]
        },
        {
            id: "jalapeno",
            name: "Jalapeño",
            emoji: "🌶️",
            category: "normal",
            modelType: "procedural",
            physicsProfile: "bouncy",
            color: "#228B22",
            scale: .5,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "fiery",
                        "passionate"
                    ],
                    weight: .9
                }
            ]
        },
        {
            id: "garlic",
            name: "Garlic",
            emoji: "🧄",
            category: "normal",
            modelType: "procedural",
            physicsProfile: "light",
            color: "#F5F5DC",
            scale: .4,
            fortuneTraits: [
                {
                    category: "luck",
                    keywords: [
                        "protection",
                        "strength"
                    ],
                    weight: .8
                }
            ]
        },
        {
            id: "basil",
            name: "Basil",
            emoji: "🌿",
            category: "normal",
            modelType: "particle",
            physicsProfile: "ethereal",
            color: "#228B22",
            scale: .3,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "fresh",
                        "aromatic"
                    ],
                    weight: .7
                }
            ]
        },
        {
            id: "tomato",
            name: "Tomato",
            emoji: "🍅",
            category: "normal",
            modelType: "procedural",
            physicsProfile: "bouncy",
            color: "#FF0000",
            scale: .6,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "classic",
                        "essential"
                    ],
                    weight: .8
                }
            ]
        },
        {
            id: "bell_pepper",
            name: "Bell Pepper",
            emoji: "🫑",
            category: "normal",
            modelType: "procedural",
            physicsProfile: "rigid",
            color: "#FFD700",
            scale: .7,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "colorful",
                        "vibrant"
                    ],
                    weight: .7
                }
            ]
        },
        {
            id: "spinach",
            name: "Spinach",
            emoji: "🥬",
            category: "normal",
            modelType: "particle",
            physicsProfile: "ethereal",
            color: "#228B22",
            scale: .4,
            fortuneTraits: [
                {
                    category: "luck",
                    keywords: [
                        "health",
                        "vitality"
                    ],
                    weight: .8
                }
            ]
        },
        {
            id: "dust_bunny",
            name: "Dust Bunny",
            emoji: "☁️",
            category: "bizarre",
            modelType: "particle",
            physicsProfile: "ethereal",
            color: "#808080",
            scale: .6,
            fortuneTraits: [
                {
                    category: "chaos",
                    keywords: [
                        "neglect",
                        "hidden corners"
                    ],
                    weight: .9
                }
            ]
        },
        {
            id: "forgotten_password",
            name: "Forgotten Password",
            emoji: "🔐",
            category: "abstract",
            modelType: "text3d",
            physicsProfile: "ethereal",
            color: "#FF00FF",
            scale: .5,
            fortuneTraits: [
                {
                    category: "future",
                    keywords: [
                        "memory",
                        "security"
                    ],
                    weight: 1
                }
            ]
        },
        {
            id: "monday_morning",
            name: "Monday Morning",
            emoji: "😴",
            category: "abstract",
            modelType: "symbolic",
            physicsProfile: "heavy",
            color: "#4169E1",
            scale: .8,
            fortuneTraits: [
                {
                    category: "chaos",
                    keywords: [
                        "dread",
                        "new beginnings"
                    ],
                    weight: .9
                }
            ]
        },
        {
            id: "crushed_dreams",
            name: "Crushed Dreams",
            emoji: "💔",
            category: "abstract",
            modelType: "particle",
            physicsProfile: "heavy",
            color: "#800080",
            scale: .7,
            fortuneTraits: [
                {
                    category: "future",
                    keywords: [
                        "resilience",
                        "rebirth"
                    ],
                    weight: 1
                }
            ]
        },
        {
            id: "tangled_lights",
            name: "Tangled Christmas Lights",
            emoji: "🎄",
            category: "bizarre",
            modelType: "procedural",
            physicsProfile: "sticky",
            color: "#FFD700",
            scale: .9,
            fortuneTraits: [
                {
                    category: "chaos",
                    keywords: [
                        "frustration",
                        "holiday spirit"
                    ],
                    weight: .8
                }
            ]
        },
        {
            id: "expired_coupon",
            name: "Expired Coupon",
            emoji: "🎫",
            category: "bizarre",
            modelType: "procedural",
            physicsProfile: "light",
            color: "#F0E68C",
            scale: .4,
            fortuneTraits: [
                {
                    category: "luck",
                    keywords: [
                        "missed opportunity",
                        "timing"
                    ],
                    weight: .9
                }
            ]
        },
        {
            id: "boiled_shoe",
            name: "Boiled Shoe",
            emoji: "👟",
            category: "bizarre",
            modelType: "procedural",
            physicsProfile: "heavy",
            color: "#8B4513",
            scale: 1.2,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "desperation",
                        "resourcefulness"
                    ],
                    weight: .8
                }
            ]
        },
        {
            id: "mystery_sauce",
            name: "Mystery Sauce",
            emoji: "🫙",
            category: "liquid",
            modelType: "procedural",
            physicsProfile: "liquid",
            color: "#6B8E23",
            scale: .8,
            fortuneTraits: [
                {
                    category: "chaos",
                    keywords: [
                        "unknown",
                        "risk"
                    ],
                    weight: 1
                }
            ]
        },
        {
            id: "old_candy",
            name: "Halloween Candy 2019",
            emoji: "🍬",
            category: "bizarre",
            modelType: "procedural",
            physicsProfile: "sticky",
            color: "#FF69B4",
            scale: .5,
            fortuneTraits: [
                {
                    category: "luck",
                    keywords: [
                        "nostalgia",
                        "stale"
                    ],
                    weight: .7
                }
            ]
        },
        {
            id: "expired_yogurt",
            name: "Expired Yogurt",
            emoji: "🥛",
            category: "liquid",
            modelType: "procedural",
            physicsProfile: "liquid",
            color: "#F5F5DC",
            scale: .6,
            fortuneTraits: [
                {
                    category: "chaos",
                    keywords: [
                        "risk",
                        "fermentation"
                    ],
                    weight: .9
                }
            ]
        },
        {
            id: "soggy_cereal",
            name: "Soggy Cereal",
            emoji: "🥣",
            category: "bizarre",
            modelType: "procedural",
            physicsProfile: "sticky",
            color: "#D2691E",
            scale: .7,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "disappointment",
                        "morning"
                    ],
                    weight: .8
                }
            ]
        },
        {
            id: "zodiac_signs",
            name: "Every Zodiac Sign",
            emoji: "♈",
            category: "abstract",
            modelType: "composite",
            physicsProfile: "ethereal",
            color: "#FFD700",
            scale: 1,
            fortuneTraits: [
                {
                    category: "future",
                    keywords: [
                        "destiny",
                        "universal"
                    ],
                    weight: 1
                }
            ]
        },
        {
            id: "magic_8_ball",
            name: "Magic 8-Ball Fluid",
            emoji: "🎱",
            category: "liquid",
            modelType: "procedural",
            physicsProfile: "liquid",
            color: "#000080",
            scale: .7,
            fortuneTraits: [
                {
                    category: "future",
                    keywords: [
                        "prediction",
                        "uncertainty"
                    ],
                    weight: 1
                }
            ]
        },
        {
            id: "tears",
            name: "Tears",
            emoji: "😢",
            category: "liquid",
            modelType: "particle",
            physicsProfile: "liquid",
            color: "#87CEEB",
            scale: .4,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "emotion",
                        "release"
                    ],
                    weight: .9
                }
            ]
        },
        {
            id: "lint",
            name: "Pocket Lint",
            emoji: "🧶",
            category: "bizarre",
            modelType: "particle",
            physicsProfile: "ethereal",
            color: "#D3D3D3",
            scale: .3,
            fortuneTraits: [
                {
                    category: "luck",
                    keywords: [
                        "accumulation",
                        "forgotten"
                    ],
                    weight: .6
                }
            ]
        },
        {
            id: "brain",
            name: "Brain",
            emoji: "🧠",
            category: "special",
            modelType: "procedural",
            physicsProfile: "sticky",
            color: "#FFB6C1",
            scale: .8,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "intelligence",
                        "thought"
                    ],
                    weight: 1
                }
            ]
        },
        {
            id: "eyeball",
            name: "Eyeball",
            emoji: "👁️",
            category: "special",
            modelType: "procedural",
            physicsProfile: "bouncy",
            color: "#FFFFFF",
            scale: .5,
            fortuneTraits: [
                {
                    category: "future",
                    keywords: [
                        "perception",
                        "vision"
                    ],
                    weight: 1
                }
            ]
        },
        {
            id: "finger",
            name: "Finger",
            emoji: "👆",
            category: "special",
            modelType: "procedural",
            physicsProfile: "rigid",
            color: "#FDBCB4",
            scale: .6,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "dexterity",
                        "pointing"
                    ],
                    weight: .8
                }
            ]
        },
        {
            id: "baseball",
            name: "Baseball",
            emoji: "⚾",
            category: "bizarre",
            modelType: "procedural",
            physicsProfile: "heavy",
            color: "#FFFFFF",
            scale: .8,
            fortuneTraits: [
                {
                    category: "luck",
                    keywords: [
                        "sport",
                        "america"
                    ],
                    weight: .7
                }
            ]
        },
        {
            id: "glass_shard",
            name: "Glass Shards",
            emoji: "🪟",
            category: "bizarre",
            modelType: "particle",
            physicsProfile: "rigid",
            color: "#87CEEB",
            scale: .5,
            fortuneTraits: [
                {
                    category: "chaos",
                    keywords: [
                        "danger",
                        "fragility"
                    ],
                    weight: .9
                }
            ]
        },
        {
            id: "bubble_wrap",
            name: "Bubble Wrap",
            emoji: "🫧",
            category: "bizarre",
            modelType: "procedural",
            physicsProfile: "bouncy",
            color: "#F0F8FF",
            scale: .7,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "satisfaction",
                        "protection"
                    ],
                    weight: .8
                }
            ]
        },
        {
            id: "rubber_duck",
            name: "Rubber Ducky",
            emoji: "🦆",
            category: "bizarre",
            modelType: "procedural",
            physicsProfile: "bouncy",
            color: "#FFD700",
            scale: .6,
            fortuneTraits: [
                {
                    category: "luck",
                    keywords: [
                        "debugging",
                        "bath time"
                    ],
                    weight: .8
                }
            ]
        },
        {
            id: "old_sock",
            name: "Old Sock",
            emoji: "🧦",
            category: "bizarre",
            modelType: "procedural",
            physicsProfile: "light",
            color: "#696969",
            scale: .5,
            fortuneTraits: [
                {
                    category: "chaos",
                    keywords: [
                        "lost pair",
                        "laundry"
                    ],
                    weight: .7
                }
            ]
        },
        {
            id: "glitter",
            name: "Glitter",
            emoji: "✨",
            category: "bizarre",
            modelType: "particle",
            physicsProfile: "ethereal",
            color: "#FFD700",
            scale: .3,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "sparkle",
                        "impossible to remove"
                    ],
                    weight: .9
                }
            ]
        },
        {
            id: "toothpaste",
            name: "Toothpaste",
            emoji: "🪥",
            category: "liquid",
            modelType: "procedural",
            physicsProfile: "sticky",
            color: "#00CED1",
            scale: .5,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "fresh",
                        "minty"
                    ],
                    weight: .7
                }
            ]
        },
        {
            id: "marble",
            name: "Marbles",
            emoji: "🔮",
            category: "bizarre",
            modelType: "procedural",
            physicsProfile: "heavy",
            color: "#4169E1",
            scale: .4,
            fortuneTraits: [
                {
                    category: "luck",
                    keywords: [
                        "lost",
                        "childhood"
                    ],
                    weight: .8
                }
            ]
        },
        {
            id: "crayon",
            name: "Crayons",
            emoji: "🖍️",
            category: "bizarre",
            modelType: "procedural",
            physicsProfile: "rigid",
            color: "#FF0000",
            scale: .4,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "creativity",
                        "childhood"
                    ],
                    weight: .8
                }
            ]
        },
        {
            id: "paper_clip",
            name: "Paper Clips",
            emoji: "📎",
            category: "bizarre",
            modelType: "procedural",
            physicsProfile: "light",
            color: "#C0C0C0",
            scale: .3,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "organization",
                        "connection"
                    ],
                    weight: .7
                }
            ]
        },
        {
            id: "gummy_bear",
            name: "Gummy Bears",
            emoji: "🐻",
            category: "special",
            modelType: "procedural",
            physicsProfile: "sticky",
            color: "#FF0000",
            scale: .4,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "sweet",
                        "childlike"
                    ],
                    weight: .8
                }
            ]
        },
        {
            id: "cotton_candy",
            name: "Cotton Candy",
            emoji: "🍭",
            category: "special",
            modelType: "particle",
            physicsProfile: "ethereal",
            color: "#FFB6C1",
            scale: .8,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "fleeting",
                        "sweet"
                    ],
                    weight: .8
                }
            ]
        },
        {
            id: "toy_dinosaur",
            name: "Toy Dinosaur",
            emoji: "🦕",
            category: "bizarre",
            modelType: "procedural",
            physicsProfile: "rigid",
            color: "#228B22",
            scale: .6,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "prehistoric",
                        "playful"
                    ],
                    weight: .7
                }
            ]
        },
        {
            id: "whoopee_cushion",
            name: "Whoopee Cushion",
            emoji: "💨",
            category: "bizarre",
            modelType: "procedural",
            physicsProfile: "bouncy",
            color: "#FF69B4",
            scale: .7,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "humor",
                        "pranks"
                    ],
                    weight: .8
                }
            ]
        },
        {
            id: "sticky_note",
            name: "Sticky Notes",
            emoji: "📝",
            category: "bizarre",
            modelType: "procedural",
            physicsProfile: "light",
            color: "#FFFF00",
            scale: .4,
            fortuneTraits: [
                {
                    category: "personality",
                    keywords: [
                        "reminder",
                        "organization"
                    ],
                    weight: .7
                }
            ]
        },
        {
            id: "fortune_cookie",
            name: "Fortune Cookie Fortune",
            emoji: "🥠",
            category: "abstract",
            modelType: "text3d",
            physicsProfile: "light",
            color: "#F5DEB3",
            scale: .5,
            fortuneTraits: [
                {
                    category: "future",
                    keywords: [
                        "meta",
                        "prophecy"
                    ],
                    weight: 1
                }
            ]
        }
    ];
    class mp {
        sceneManager;
        physicsWorld;
        ingredientSpawner;
        fortuneGenerator;
        selectedIngredient = null;
        clock;
        isInitialized = !1;
        raycaster;
        mouse;
        previewMesh = null;
        constructor(){
            this.clock = new Bo, this.raycaster = new np, this.mouse = new be, this.init();
        }
        async init() {
            try {
                const e = document.getElementById("scene-container"), t = document.getElementById("loading-screen");
                if (!e) throw new Error("Scene container not found");
                this.sceneManager = new sp(e), this.physicsWorld = new hp, await this.physicsWorld.init(), this.ingredientSpawner = new dp(this.sceneManager, this.physicsWorld), this.fortuneGenerator = new fp, this.setupIngredientCarousel(), this.setupControls(), this.setupClickHandlers(), t && t.classList.add("hidden"), this.setupSplashScreen(), this.isInitialized = !0, this.sceneManager.start(), this.animate();
            } catch (e) {
                console.error("Failed to initialize app:", e), this.showError("Failed to initialize the mystical pizza kitchen");
            }
        }
        setupSplashScreen() {
            const e = document.getElementById("splash-screen"), t = document.getElementById("start-btn");
            e && t && t.addEventListener("click", ()=>{
                e.classList.add("hidden"), setTimeout(()=>{
                    e.style.display = "none";
                }, 500);
            });
        }
        setupIngredientCarousel() {
            this.setupIngredientPanel();
        }
        setupIngredientPanel() {
            if (!document.getElementById("ingredient-grid")) return;
            const t = document.querySelectorAll(".category-tab");
            t.forEach((r)=>{
                r.addEventListener("click", (s)=>{
                    const o = s.target, a = o.dataset.category || "all";
                    this.filterIngredients(a), t.forEach((c)=>c.classList.remove("active")), o.classList.add("active");
                });
            });
            const n = document.querySelector(".ingredient-search");
            n && n.addEventListener("input", (r)=>{
                const s = r.target.value.toLowerCase();
                this.searchIngredients(s);
            }), this.populateIngredientGrid(pp);
        }
        populateIngredientGrid(e) {
            const t = document.getElementById("ingredient-grid");
            t && (t.innerHTML = "", e.forEach((n)=>{
                const r = document.createElement("div");
                r.className = "ingredient-card", r.dataset.ingredientId = n.id, r.dataset.category = n.category, r.dataset.name = n.name.toLowerCase();
                const s = document.createElement("div");
                s.className = "emoji", s.textContent = n.emoji || "🍕";
                const o = document.createElement("div");
                o.className = "name", o.textContent = n.name, r.appendChild(s), r.appendChild(o), r.addEventListener("click", ()=>this.selectIngredient(n, r)), t.appendChild(r);
            }));
        }
        filterIngredients(e) {
            document.querySelectorAll(".ingredient-card").forEach((n)=>{
                e === "all" || n.dataset.category === e ? n.style.display = "flex" : n.style.display = "none";
            });
        }
        searchIngredients(e) {
            document.querySelectorAll(".ingredient-card").forEach((n)=>{
                (n.dataset.name || "").includes(e) ? n.style.display = "flex" : n.style.display = "none";
            });
        }
        selectIngredient(e, t) {
            this.selectedIngredient?.id === e.id ? (t.classList.remove("selected"), this.selectedIngredient = null, document.body.classList.remove("has-ingredient"), this.updateSelectedDisplay(null)) : (document.querySelectorAll(".ingredient-card").forEach((n)=>{
                n.classList.remove("selected");
            }), t.classList.add("selected"), this.selectedIngredient = e, document.body.classList.add("has-ingredient"), this.updateSelectedDisplay(e), this.previewMesh && (this.sceneManager.removeObject(this.previewMesh), this.previewMesh = null), this.createPreviewMesh());
        }
        updateSelectedDisplay(e) {
            const t = document.querySelector(".selected-display");
            t && (e ? (t.classList.remove("empty"), t.innerHTML = `
        <div class="selected-name">${e.emoji} ${e.name}</div>
        <div class="instruction">Click on the pizza to drop!</div>
      `) : (t.classList.add("empty"), t.textContent = "Select an ingredient to begin"));
        }
        setupControls() {
            const e = document.getElementById("shake-btn"), t = document.getElementById("bake-btn"), n = document.getElementById("reset-btn"), r = document.getElementById("screenshot-btn");
            e?.addEventListener("click", ()=>{
                this.physicsWorld.shakePizza(5);
            }), t?.addEventListener("click", ()=>{
                this.bakePizza();
            }), n?.addEventListener("click", ()=>{
                this.reset();
            }), r?.addEventListener("click", ()=>{
                this.takeScreenshot();
            });
        }
        setupClickHandlers() {
            const e = this.sceneManager.getState().renderer.domElement;
            e.addEventListener("mousemove", (t)=>{
                if (!this.selectedIngredient) {
                    this.previewMesh && (this.sceneManager.removeObject(this.previewMesh), this.previewMesh = null);
                    return;
                }
                const n = e.getBoundingClientRect();
                this.mouse.x = (t.clientX - n.left) / n.width * 2 - 1, this.mouse.y = -((t.clientY - n.top) / n.height) * 2 + 1, this.updatePreviewPosition();
            }), e.addEventListener("click", (t)=>{
                if (!this.selectedIngredient || !this.ingredientSpawner.canDrop()) return;
                const n = this.getIntersectionPoint();
                n && (n.y = 2, this.dropSelectedIngredient(n));
            });
        }
        updatePreviewPosition() {
            if (!this.selectedIngredient) return;
            const e = this.getIntersectionPoint();
            if (!e) {
                this.previewMesh && (this.previewMesh.visible = !1);
                return;
            }
            this.previewMesh || this.createPreviewMesh(), this.previewMesh && (this.previewMesh.position.copy(e), this.previewMesh.position.y += .2, this.previewMesh.visible = !0);
        }
        createPreviewMesh() {
            if (!this.selectedIngredient) return;
            const e = new Wt(.25, .25, .1, 16), t = new xi({
                color: parseInt(this.selectedIngredient.color.replace("#", "0x")),
                transparent: !0,
                opacity: .5,
                side: Bt
            });
            this.previewMesh = new at(e, t), this.previewMesh.name = "preview", this.sceneManager.addObject(this.previewMesh);
        }
        getIntersectionPoint() {
            const e = this.sceneManager.getState().camera, t = this.sceneManager.getState().scene;
            this.raycaster.setFromCamera(this.mouse, e);
            const n = t.getObjectByName("pizzaBase");
            if (!n) return null;
            const r = this.raycaster.intersectObject(n, !1);
            return r.length > 0 ? r[0].point : null;
        }
        async dropSelectedIngredient(e) {
            if (!(!this.selectedIngredient || !this.ingredientSpawner.canDrop())) try {
                await this.ingredientSpawner.dropIngredient(this.selectedIngredient, e);
            } catch (t) {
                console.error("Failed to drop ingredient:", t);
            }
        }
        animate() {
            if (!this.isInitialized) return;
            requestAnimationFrame(this.animate.bind(this));
            const e = this.clock.getDelta();
            this.physicsWorld.step(e);
        }
        async bakePizza() {
            const e = document.getElementById("fortune-display"), t = document.getElementById("bake-btn");
            if (!e || !t) return;
            t.disabled = !0;
            const n = this.ingredientSpawner.getDroppedIngredients();
            if (n.length === 0) {
                alert("Add some ingredients to your pizza first!"), t.disabled = !1;
                return;
            }
            const r = {
                id: `pizza_${Date.now()}`,
                droppedIngredients: n,
                chaosScore: Math.random() * 100,
                symmetryScore: Math.random() * 100,
                stackHeight: Math.max(...n.map((l)=>l.position.y)),
                totalCollisions: this.physicsWorld.getTotalCollisions(),
                createdAt: new Date
            }, s = this.fortuneGenerator.analyzePhysics(r), o = await this.fortuneGenerator.generateFortune(r, s), a = document.getElementById("fortune-text"), c = document.getElementById("lucky-numbers");
            a && c && (a.textContent = o.generalReading, c.innerHTML = "", o.luckyNumbers.forEach((l, h)=>{
                const d = document.createElement("div");
                d.className = "lucky-number", d.style.setProperty("--i", h.toString()), d.textContent = l.toString(), c.appendChild(d);
            })), e.classList.remove("hidden"), setTimeout(()=>{
                t.disabled = !1;
            }, 2e3);
        }
        reset() {
            this.ingredientSpawner.clearAllIngredients();
            const e = document.getElementById("fortune-display");
            e && e.classList.add("hidden"), document.querySelectorAll(".ingredient-card").forEach((t)=>{
                t.classList.remove("selected");
            }), this.selectedIngredient = null, document.body.classList.remove("has-ingredient"), this.updateSelectedDisplay(null), this.previewMesh && (this.sceneManager.removeObject(this.previewMesh), this.previewMesh = null);
        }
        takeScreenshot() {
            const e = this.sceneManager.getState().renderer, t = this.sceneManager.getState().camera, n = this.sceneManager.getState().scene;
            e.render(n, t);
            const r = document.createElement("canvas"), s = r.getContext("2d");
            r.width = e.domElement.width, r.height = e.domElement.height + 200, s.drawImage(e.domElement, 0, 0);
            const o = document.getElementById("fortune-text");
            if (o && !document.getElementById("fortune-display")?.classList.contains("hidden")) {
                s.fillStyle = "rgba(0, 0, 0, 0.8)", s.fillRect(0, e.domElement.height, r.width, 200), s.fillStyle = "#ffffff", s.font = "18px Arial", s.textAlign = "center";
                const c = (o.textContent || "").split(" ");
                let l = "", h = e.domElement.height + 40;
                const d = 25, p = r.width - 40;
                for(let m = 0; m < c.length; m++){
                    const g = l + c[m] + " ";
                    s.measureText(g).width > p && m > 0 ? (s.fillText(l, r.width / 2, h), l = c[m] + " ", h += d) : l = g;
                }
                s.fillText(l, r.width / 2, h), s.fillStyle = "#ffd700", s.font = "bold 16px Arial", s.fillText("🍕 Pizza Fortune Teller 🔮", r.width / 2, h + 40);
            }
            r.toBlob((a)=>{
                if (a) {
                    const c = URL.createObjectURL(a), l = document.createElement("a");
                    l.href = c, l.download = `pizza-fortune-${Date.now()}.png`, l.click(), URL.revokeObjectURL(c);
                }
            });
        }
        showError(e) {
            const t = document.getElementById("loading-screen");
            t && (t.innerHTML = `
        <div style="color: #ff6b6b; text-align: center;">
          <h2>Oops!</h2>
          <p>${e}</p>
          <p>Please refresh the page to try again.</p>
        </div>
      `);
        }
    }
    new mp;
})();
