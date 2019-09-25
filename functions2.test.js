import test from "ava"
import functions from "./functions2"

test('Secondstotime 1', t => {t.is(functions.convertTemperature(1,1), "Boom!")})