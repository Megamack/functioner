import test from "ava"
/**
 * 
 * @param {int seconds} s 
 */
function zerofill(s){
    //returns seconds padded if needed
    return (s.toString().length == 1)?"0"+s.toString():s.toString();
}
test('Zerofill 1', t => {t.is(zerofill(5), "05")})
test('Zerofill 2', t => {t.is(zerofill(0), "00")})
test('Zerofill 3', t => {t.is(zerofill(50), "50")})

/**
 * 
 * @param {string} tempo 
 */
function verifyTempo(tempo){
    //returns true/false
    return /^\d{1}.\d{2}$/.test(tempo);
}
test('Verifytempo 1', t => {t.is(verifyTempo("3.45"), true)})
test('Verifytempo 2', t => {t.is(verifyTempo("00.4566"), false)})
test('Verifytempo 3', t => {t.is(verifyTempo("9.5"), false)})

/**
 * 
 * @param {int} seconds 
 */
function secondsToTime(seconds){
    //returns seconds converted to h,m,s
    var h  = Math.floor(seconds/3600);
    seconds=seconds-h*3600;
    var m  = Math.floor(seconds/60);
    seconds = seconds-m*60;
    //var s  = s - h*3600 - m*60;
    return `${h}h ${m}m ${seconds}s`;
}
test('Secondstotime 1', t => {t.is(secondsToTime("3600"), "1h 0m 0s")})
test('Secondstotime 2', t => {t.is(secondsToTime("60"), "0h 1m 0s")})
test('Secondstotime 3', t => {t.is(secondsToTime("35"), "0h 0m 35s")})
test('Secondstotime 4', t => {t.is(secondsToTime("3685"), "1h 1m 25s")})

/**
 * 
 * @param {int} born year 4 digits
 */
function yearsOld(born){
    var yeartoday=2019;
    return yeartoday-born
//returns age 0 - n
    //todays year ??
}
test('Yearsold 1', t => {t.is(yearsOld(2000), 19)})
test('Yearsold 2', t => {t.is(yearsOld(1975), 44)})
test('Yearsold 3', t => {t.is(yearsOld(1800), 219)})
/**
 * 
 * @param {array} words 
 */
function concatenate(words){
    //returns sentence with space between words
    return words.join(" ");
    
}
//console.log(concatenate(["En","groda","hoppar"]));
test('Concatenate 1', t => {t.is(concatenate(["En","groda","hoppar"]), "En groda hoppar")})
test('Concatenate 2', t => {t.is(concatenate(["Kungen","har","kommit","till","stan"]), "Kungen har kommit till stan")})
/**
 * 
 * @param {string} word 
 */
function mirror(word){
    //returns parameter
    return word;
}

test('Mirror 1', t => {t.is(mirror("Gädda"), "Gädda")})
test('Mirror 2', t => {t.is(mirror("Kulpåse"), "Kulpåse")})

function backwards(word){
    //returns word backwards
    return word.split("").reverse().join("").toLowerCase()

}
test('Backwards 1', t => {t.is(backwards("Markus"), "sukram")})
test('Backwards 2', t => {t.is(backwards("kroKodil"), "lidokork")})
test('Backwards 3', t => {t.is(backwards("anna"), "anna")})

function myRamoneName(name){
    return name + " Ramone"
}
test('Myramonename 1', t => {t.is(myRamoneName("Markus"), "Markus Ramone")})
test('Myramonename 2', t => {t.is(myRamoneName("Joel"), "Joel Ramone")})
test('Myramonename 3', t => {t.is(myRamoneName("Harry"), "Harry Ramone")})


function removeAllNumbers(soppa){
    //returns string clear of numbers
    return soppa.replace(/\d+/g,'')
}
test('Removeallnumbers 1', t => {t.is(removeAllNumbers("M4rkus"), "Mrkus")})
test('Removeallnumbers 2', t => {t.is(removeAllNumbers("H1rv1k1kk3l1"), "Hrvkkkl")})
test('Removeallnumbers 3', t => {t.is(removeAllNumbers("M4kk4r4"), "Mkkr")})




/**
 * 
 * @param {*} date 
 */
function dayNumber(date){
//returns day number of date
}
//Create your own testcases








