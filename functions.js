import test from "ava"
/**
 * 
 * @param {int seconds} s 
 */
function zerofill(s){
    //returns seconds padded if needed
}

test('Zerofill 1', t => {t.is(zerofill(5), "05")})
test('Zerofill 1', t => {t.is(zerofill(0), "00")})
test('Zerofill 1', t => {t.is(zerofill(50), "50")})
