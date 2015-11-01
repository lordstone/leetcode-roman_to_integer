/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var arr = ['I','V','X','L','C','D','M'];
    var arr2 = [1,5,10,50,100,500,1000];
    var ptr = 0;
    var amt = 0;
    var bar = 6;
    while(ptr < s.length){
        for(i = bar; i >= 0 ; i --){
            if(arr[i] === s[ptr]){
                bar = i;
                if(((i % 2) === 0) && i < 6 ){
                    if (s[ptr+1] === arr[i+1]){
                        amt += arr2[i+1] - arr2[i];
                        ptr += 2;
                        bar ++;
                        break;
                    }else if(s[ptr+1] === arr[i+2]){
                        amt += arr2[i+2] - arr2[i];
                        ptr += 2;
                        bar += 2;
                        break;
                    }
                }//end if
                amt += arr2[i];
                ptr ++ ;
                break;
            }//end if
        }//end for
    }//end while
    return amt;
};
