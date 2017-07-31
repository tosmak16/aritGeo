'use strict';


function aritGeo(a) {

    var ap = 1;
    var gp = 1;
    //this line is to check if the value input as array is null or void so as to avoid crashing the app
    if (a == null) {
        return "no parameters passed";
    }
    //this line is to check if the input value is an array 
    else if (!Array.isArray(a)) {
        return 'invalid input';
    } else {
        //this line of code checks if the array is empty
        if (a.length === 0) {
            return 0;
        }
        var commonDiff = a[1] - a[0];
        var commonRatio = a[1] / a[0];

        for (var i = 0; i < a.length - 1; i++) {
            if (a[i + 1] - a[i] !== commonDiff)
                ap = 0;
            if (a[i + 1] / commonRatio !== a[i])
                gp = 0;
        }
        //this line of code check if Arithmetic progression is true
        if (ap === 1)
            return "Arithmetic";
        // this line of code checks if Geometric progression is true
        else if (gp === 1)
        //this line of code checks if neither AP or GP is true
            return "Geometric";
        else
            return -1;
    }

}
module.exports.aritGeo = aritGeo;