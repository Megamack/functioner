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

/**
 * 
 * @param {string} tempo 
 */
function verifyTempo(tempo){
    //returns true/false
}
test('Verifytempo 1', t => {t.is(verifyTempo("3.45"), true)})
test('Verifytempo 2', t => {t.is(verifyTempo("00.45"), false)})
test('Verifytempo 3', t => {t.is(verifyTempo("9.5"), false)})

/**
 * 
 * @param {int} seconds 
 */
function secondsToTime(seconds){
    //returns seconds converted to h,m,s
}
test('Secondstotime 1', t => {t.is(secondsToTime("3600"), "1h 0m 0s")})
test('Secondstotime 2', t => {t.is(secondsToTime("60"), "0h 1m 0s")})
test('Secondstotime 3', t => {t.is(secondsToTime("35"), "0h 0m 35s")})
test('Secondstotime 4', t => {t.is(secondsToTime("3685"), "1h 1m 25s")})




