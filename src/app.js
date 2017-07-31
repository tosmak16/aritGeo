'use strict';


function aritGeo(a) {
    if (a == null) {
        return "no parameters passed";
    } else if (!Array.isArray(a)) {
        return 'invalid input';
    } else {

        if (a.length === 0) {
            return 0;
        }
        var commonDiff = a[1] - a[0];
        var commonRatio = a[1] / a[0];

        var ap = true;
        var gp = true;

        for (var i = 0; i < a.length - 1; i++) {
            if (a[i + 1] - a[i] !== commonDiff)
                ap = false;
            if (a[i + 1] / commonRatio !== a[i])
                gp = false;
        }

        if (ap === true)
            return "Arithmetic";
        else if (gp === true)
            return "Geometric";
        else
            return -1;
    }

}
module.exports.aritGeo = aritGeo;