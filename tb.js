var fun = function () {
    a = "592d21333b33313b19686f6a773a3634";
    t = "f9e31";
    e = '';
    r = '0x' + a.substr(0, 2) | 0;
    for (n = 2; a.length - n > 0; n += 2) {
        e += '%' + ('0' + ('0x' + a.substr(n, n + 2) ^ r).toString(16)).slice(-2);
    }
    console.log(decodeURIComponent(e))
}

fun();