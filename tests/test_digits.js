QUnit.test("roundHalfTowardsInfinity", function(assert) {
	assert.equal(Digits.roundHalfTowardsInfinity(10), 10);
	assert.equal(Digits.roundHalfTowardsInfinity(10.5), 11);
	assert.equal(Digits.roundHalfTowardsInfinity(10.6), 11);
	assert.equal(Digits.roundHalfTowardsInfinity(10.4), 10);

	assert.equal(Digits.roundHalfTowardsInfinity(9), 9);
	assert.equal(Digits.roundHalfTowardsInfinity(9.5), 10);
	assert.equal(Digits.roundHalfTowardsInfinity(9.6), 10);
	assert.equal(Digits.roundHalfTowardsInfinity(9.4), 9);

	assert.equal(Digits.roundHalfTowardsInfinity(0.6), 1);
	assert.equal(Digits.roundHalfTowardsInfinity(0.5), 1);
	assert.equal(Digits.roundHalfTowardsInfinity(0.4), 0);
	assert.equal(Digits.roundHalfTowardsInfinity(0),  0);
	assert.equal(Digits.roundHalfTowardsInfinity(-0.4), 0);
	assert.equal(Digits.roundHalfTowardsInfinity(-0.5), -1);
	assert.equal(Digits.roundHalfTowardsInfinity(-0.6), -1);

	assert.equal(Digits.roundHalfTowardsInfinity(-10), -10);
	assert.equal(Digits.roundHalfTowardsInfinity(-10.5), -11);
	assert.equal(Digits.roundHalfTowardsInfinity(-10.6), -11);
	assert.equal(Digits.roundHalfTowardsInfinity(-10.4), -10);

	assert.equal(Digits.roundHalfTowardsInfinity(-9), -9);
	assert.equal(Digits.roundHalfTowardsInfinity(-9.5), -10);
	assert.equal(Digits.roundHalfTowardsInfinity(-9.6), -10);
	assert.equal(Digits.roundHalfTowardsInfinity(-9.4), -9);
});

QUnit.test("roundHalfTowardsZero", function(assert) {
	assert.equal(Digits.roundHalfTowardsZero(10), 10);
	assert.equal(Digits.roundHalfTowardsZero(10.5), 10);
	assert.equal(Digits.roundHalfTowardsZero(10.6), 11);
	assert.equal(Digits.roundHalfTowardsZero(10.4), 10);

	assert.equal(Digits.roundHalfTowardsZero(9), 9);
	assert.equal(Digits.roundHalfTowardsZero(9.5), 9);
	assert.equal(Digits.roundHalfTowardsZero(9.6), 10);
	assert.equal(Digits.roundHalfTowardsZero(9.4), 9);

	assert.equal(Digits.roundHalfTowardsZero(0.6), 1);
	assert.equal(Digits.roundHalfTowardsZero(0.5), 0);
	assert.equal(Digits.roundHalfTowardsZero(0.4), 0);
	assert.equal(Digits.roundHalfTowardsZero(0),  0);
	assert.equal(Digits.roundHalfTowardsZero(-0.4), 0);
	assert.equal(Digits.roundHalfTowardsZero(-0.5), 0);
	assert.equal(Digits.roundHalfTowardsZero(-0.6), -1);

	assert.equal(Digits.roundHalfTowardsZero(-9), -9);
	assert.equal(Digits.roundHalfTowardsZero(-9.5), -9);
	assert.equal(Digits.roundHalfTowardsZero(-9.6), -10);
	assert.equal(Digits.roundHalfTowardsZero(-9.4), -9);

	assert.equal(Digits.roundHalfTowardsZero(-10), -10);
	assert.equal(Digits.roundHalfTowardsZero(-10.5), -10);
	assert.equal(Digits.roundHalfTowardsZero(-10.6), -11);
	assert.equal(Digits.roundHalfTowardsZero(-10.4), -10);
});

QUnit.test("roundHalfUp", function(assert) {
	assert.equal(Digits.roundHalfUp(10), 10);
	assert.equal(Digits.roundHalfUp(10.5), 11);
	assert.equal(Digits.roundHalfUp(10.6), 11);
	assert.equal(Digits.roundHalfUp(10.4), 10);

	assert.equal(Digits.roundHalfUp(9), 9);
	assert.equal(Digits.roundHalfUp(9.5), 10);
	assert.equal(Digits.roundHalfUp(9.6), 10);
	assert.equal(Digits.roundHalfUp(9.4), 9);

	assert.equal(Digits.roundHalfUp(0.6), 1);
	assert.equal(Digits.roundHalfUp(0.5), 1);
	assert.equal(Digits.roundHalfUp(0.4), 0);
	assert.equal(Digits.roundHalfUp(0),  0);
	assert.equal(Digits.roundHalfUp(-0.4), 0);
	assert.equal(Digits.roundHalfUp(-0.5), 0);
	assert.equal(Digits.roundHalfUp(-0.6), -1);

	assert.equal(Digits.roundHalfUp(-9), -9);
	assert.equal(Digits.roundHalfUp(-9.5), -9);
	assert.equal(Digits.roundHalfUp(-9.6), -10);
	assert.equal(Digits.roundHalfUp(-9.4), -9);

	assert.equal(Digits.roundHalfUp(-10), -10);
	assert.equal(Digits.roundHalfUp(-10.5), -10);
	assert.equal(Digits.roundHalfUp(-10.6), -11);
	assert.equal(Digits.roundHalfUp(-10.4), -10);
});

QUnit.test("roundHalfDown", function(assert) {
	assert.equal(Digits.roundHalfDown(10), 10);
	assert.equal(Digits.roundHalfDown(10.5), 10);
	assert.equal(Digits.roundHalfDown(10.6), 11);
	assert.equal(Digits.roundHalfDown(10.4), 10);

	assert.equal(Digits.roundHalfDown(9), 9);
	assert.equal(Digits.roundHalfDown(9.5), 9);
	assert.equal(Digits.roundHalfDown(9.6), 10);
	assert.equal(Digits.roundHalfDown(9.4), 9);

	assert.equal(Digits.roundHalfDown(0.6), 1);
	assert.equal(Digits.roundHalfDown(0.5), 0);
	assert.equal(Digits.roundHalfDown(0.4), 0);
	assert.equal(Digits.roundHalfDown(0),  0);
	assert.equal(Digits.roundHalfDown(-0.4), 0);
	assert.equal(Digits.roundHalfDown(-0.5), -1);
	assert.equal(Digits.roundHalfDown(-0.6), -1);

	assert.equal(Digits.roundHalfDown(-9), -9);
	assert.equal(Digits.roundHalfDown(-9.5), -10);
	assert.equal(Digits.roundHalfDown(-9.6), -10);
	assert.equal(Digits.roundHalfDown(-9.4), -9);

	assert.equal(Digits.roundHalfDown(-10), -10);
	assert.equal(Digits.roundHalfDown(-10.5), -11);
	assert.equal(Digits.roundHalfDown(-10.6), -11);
	assert.equal(Digits.roundHalfDown(-10.4), -10);
});

QUnit.test("roundHalfToEven", function(assert) {
	assert.equal(Digits.roundHalfToEven(10), 10);
	assert.equal(Digits.roundHalfToEven(10.5), 10);
	assert.equal(Digits.roundHalfToEven(10.6), 11);
	assert.equal(Digits.roundHalfToEven(10.4), 10);

	assert.equal(Digits.roundHalfToEven(9), 9);
	assert.equal(Digits.roundHalfToEven(9.5), 10);
	assert.equal(Digits.roundHalfToEven(9.6), 10);
	assert.equal(Digits.roundHalfToEven(9.4), 9);

	assert.equal(Digits.roundHalfToEven(0.6), 1);
	assert.equal(Digits.roundHalfToEven(0.5), 0);
	assert.equal(Digits.roundHalfToEven(0.4), 0);
	assert.equal(Digits.roundHalfToEven(0),  0);
	assert.equal(Digits.roundHalfToEven(-0.4), 0);
	assert.equal(Digits.roundHalfToEven(-0.5), -0);
	assert.equal(Digits.roundHalfToEven(-0.6), -1);

	assert.equal(Digits.roundHalfToEven(-9), -9);
	assert.equal(Digits.roundHalfToEven(-9.5), -10);
	assert.equal(Digits.roundHalfToEven(-9.6), -10);
	assert.equal(Digits.roundHalfToEven(-9.4), -9);

	assert.equal(Digits.roundHalfToEven(-10), -10);
	assert.equal(Digits.roundHalfToEven(-10.5), -10);
	assert.equal(Digits.roundHalfToEven(-10.6), -11);
	assert.equal(Digits.roundHalfToEven(-10.4), -10);
});

QUnit.test("roundHalfToOdd", function(assert) {
	assert.equal(Digits.roundHalfToOdd(10), 10);
	assert.equal(Digits.roundHalfToOdd(10.5), 11);
	assert.equal(Digits.roundHalfToOdd(10.6), 11);
	assert.equal(Digits.roundHalfToOdd(10.4), 10);

	assert.equal(Digits.roundHalfToOdd(9), 9);
	assert.equal(Digits.roundHalfToOdd(9.5), 9);
	assert.equal(Digits.roundHalfToOdd(9.6), 10);
	assert.equal(Digits.roundHalfToOdd(9.4), 9);

	assert.equal(Digits.roundHalfToOdd(0.6), 1);
	assert.equal(Digits.roundHalfToOdd(0.5), 1);
	assert.equal(Digits.roundHalfToOdd(0.4), 0);
	assert.equal(Digits.roundHalfToOdd(0),  0);
	assert.equal(Digits.roundHalfToOdd(-0.4), 0);
	assert.equal(Digits.roundHalfToOdd(-0.5), -1);
	assert.equal(Digits.roundHalfToOdd(-0.6), -1);

	assert.equal(Digits.roundHalfToOdd(-9), -9);
	assert.equal(Digits.roundHalfToOdd(-9.5), -9);
	assert.equal(Digits.roundHalfToOdd(-9.6), -10);
	assert.equal(Digits.roundHalfToOdd(-9.4), -9);

	assert.equal(Digits.roundHalfToOdd(-10), -10);
	assert.equal(Digits.roundHalfToOdd(-10.5), -11);
	assert.equal(Digits.roundHalfToOdd(-10.6), -11);
	assert.equal(Digits.roundHalfToOdd(-10.4), -10);
});

QUnit.test("format sv_SE (Sweden)", function(assert) {
	var digits = new Digits("sv_SE");

	assert.equal(digits.format(Infinity), "\u221e");
	assert.equal(digits.format(NaN), "\ufffd");

	assert.equal(digits.format(0), "0");
	assert.equal(digits.format(0, 1, 1), "0,0");
	assert.equal(digits.format(0, 0, 0), "0");
	assert.equal(digits.format(0, 3, 3), "0,000");

	assert.equal(digits.format(0.65), "0,65");
	assert.equal(digits.format(0.65, 1, 1), "0,6");
	assert.equal(digits.format(0.65, 0, 0), "1");
	assert.equal(digits.format(0.65, 3, 3), "0,650");

	assert.equal(digits.format(0.75), "0,75");
	assert.equal(digits.format(0.75, 1, 1), "0,8");
	assert.equal(digits.format(0.75, 0, 0), "1");
	assert.equal(digits.format(0.75, 3, 3), "0,750");

	assert.equal(digits.format(1.6421), "1,642");
	assert.equal(digits.format(1.6421, 1, 1), "1,6");
	assert.equal(digits.format(1.6421, 0, 0), "2");
	assert.equal(digits.format(1.6421, 3, 3), "1,642");
	assert.equal(digits.format(1.6421, 0, 4), "1,6421");
	assert.equal(digits.format(1.6421, 0, 5), "1,6421");
	assert.equal(digits.format(1.6421, 5, 5), "1,64210");

	assert.equal(digits.format(7.54), "7,54");
	assert.equal(digits.format(7.54, 1, 1), "7,5");
	assert.equal(digits.format(7.54, 0, 0), "8");
	assert.equal(digits.format(7.54, 3, 3), "7,540");

	assert.equal(digits.format(10.43), "10,43");
	assert.equal(digits.format(10.43, 1, 1), "10,4");
	assert.equal(digits.format(10.43, 0, 0), "10");
	assert.equal(digits.format(10.43, 3, 3), "10,430");

	assert.equal(digits.format(-10.43), "-10,43");
	assert.equal(digits.format(-10.43, 1, 1), "-10,4");
	assert.equal(digits.format(-10.43, 0, 0), "-10");
	assert.equal(digits.format(-10.43, 3, 3), "-10,430");

	assert.equal(digits.format(100.43), "100,43");
	assert.equal(digits.format(1000.43), "1\u00a0000,43");
	assert.equal(digits.format(100000.43), "100\u00a0000,43");
	assert.equal(digits.format(100000000.43), "100\u00a0000\u00a0000,43");

	assert.equal(digits.format(-100.43), "-100,43");
	assert.equal(digits.format(-1000.43), "-1\u00a0000,43");
	assert.equal(digits.format(-100000.43), "-100\u00a0000,43");
	assert.equal(digits.format(-100000.43, 3, 3), "-100\u00a0000,430");
	assert.equal(digits.format(-100000000.43), "-100\u00a0000\u00a0000,43");
});

QUnit.test("format en_US (United States)", function(assert) {
	var digits = new Digits("en_US");

	assert.equal(digits.format(Infinity), "\u221e");
	assert.equal(digits.format(NaN), "\ufffd");

	assert.equal(digits.format(0), "0");
	assert.equal(digits.format(0, 1, 1), "0.0");
	assert.equal(digits.format(0, 0, 0), "0");
	assert.equal(digits.format(0, 3, 3), "0.000");

	assert.equal(digits.format(0.65), "0.65");
	assert.equal(digits.format(0.65, 1, 1), "0.6");
	assert.equal(digits.format(0.65, 0, 0), "1");
	assert.equal(digits.format(0.65, 3, 3), "0.650");

	assert.equal(digits.format(0.75), "0.75");
	assert.equal(digits.format(0.75, 1, 1), "0.8");
	assert.equal(digits.format(0.75, 0, 0), "1");
	assert.equal(digits.format(0.75, 3, 3), "0.750");

	assert.equal(digits.format(1.6421), "1.642");
	assert.equal(digits.format(1.6421, 1, 1), "1.6");
	assert.equal(digits.format(1.6421, 0, 0), "2");
	assert.equal(digits.format(1.6421, 3, 3), "1.642");
	assert.equal(digits.format(1.6421, 0, 4), "1.6421");
	assert.equal(digits.format(1.6421, 0, 5), "1.6421");
	assert.equal(digits.format(1.6421, 5, 5), "1.64210");

	assert.equal(digits.format(7.54), "7.54");
	assert.equal(digits.format(7.54, 1, 1), "7.5");
	assert.equal(digits.format(7.54, 0, 0), "8");
	assert.equal(digits.format(7.54, 3, 3), "7.540");

	assert.equal(digits.format(10.43), "10.43");
	assert.equal(digits.format(10.43, 1, 1), "10.4");
	assert.equal(digits.format(10.43, 0, 0), "10");
	assert.equal(digits.format(10.43, 3, 3), "10.430");

	assert.equal(digits.format(-10.43), "-10.43");
	assert.equal(digits.format(-10.43, 1, 1), "-10.4");
	assert.equal(digits.format(-10.43, 0, 0), "-10");
	assert.equal(digits.format(-10.43, 3, 3), "-10.430");

	assert.equal(digits.format(100.43), "100.43");
	assert.equal(digits.format(1000.43), "1,000.43");
	assert.equal(digits.format(100000.43), "100,000.43");
	assert.equal(digits.format(100000000.43), "100,000,000.43");

	assert.equal(digits.format(-100.43), "-100.43");
	assert.equal(digits.format(-1000.43), "-1,000.43");
	assert.equal(digits.format(-100000.43), "-100,000.43");
	assert.equal(digits.format(-100000.43, 3, 3), "-100,000.430");
	assert.equal(digits.format(-100000000.43, 3, 3), "-100,000,000.430");
});

QUnit.test("format ar_EG (Egypt)", function(assert) {
	var digits = new Digits("ar_EG");

	assert.equal(digits.format(Infinity), "\u221e");
	assert.equal(digits.format(NaN), "\ufffd");

	assert.equal(digits.format(0), "0");
	assert.equal(digits.format(0, 1, 1), "0.0");
	assert.equal(digits.format(0, 0, 0), "0");
	assert.equal(digits.format(0, 3, 3), "0.000");

	assert.equal(digits.format(0.65), "0.65");
	assert.equal(digits.format(0.65, 1, 1), "0.6");
	assert.equal(digits.format(0.65, 0, 0), "1");
	assert.equal(digits.format(0.65, 3, 3), "0.650");

	assert.equal(digits.format(0.75), "0.75");
	assert.equal(digits.format(0.75, 1, 1), "0.8");
	assert.equal(digits.format(0.75, 0, 0), "1");
	assert.equal(digits.format(0.75, 3, 3), "0.750");

	assert.equal(digits.format(1.6421), "1.642");
	assert.equal(digits.format(1.6421, 1, 1), "1.6");
	assert.equal(digits.format(1.6421, 0, 0), "2");
	assert.equal(digits.format(1.6421, 3, 3), "1.642");
	assert.equal(digits.format(1.6421, 0, 4), "1.6421");
	assert.equal(digits.format(1.6421, 0, 5), "1.6421");
	assert.equal(digits.format(1.6421, 5, 5), "1.64210");

	assert.equal(digits.format(7.54), "7.54");
	assert.equal(digits.format(7.54, 1, 1), "7.5");
	assert.equal(digits.format(7.54, 0, 0), "8");
	assert.equal(digits.format(7.54, 3, 3), "7.540");

	assert.equal(digits.format(10.43), "10.43");
	assert.equal(digits.format(10.43, 1, 1), "10.4");
	assert.equal(digits.format(10.43, 0, 0), "10");
	assert.equal(digits.format(10.43, 3, 3), "10.430");

	assert.equal(digits.format(-10.43), "10.43-");
	assert.equal(digits.format(-10.43, 1, 1), "10.4-");
	assert.equal(digits.format(-10.43, 0, 0), "10-");
	assert.equal(digits.format(-10.43, 3, 3), "10.430-");

	assert.equal(digits.format(100.43), "100.43");
	assert.equal(digits.format(1000.43), "1,000.43");
	assert.equal(digits.format(100000.43), "100,000.43");
	assert.equal(digits.format(100000000.43), "100,000,000.43");

	assert.equal(digits.format(-100.43), "100.43-");
	assert.equal(digits.format(-1000.43), "1,000.43-");
	assert.equal(digits.format(-100000.43), "100,000.43-");
	assert.equal(digits.format(-100000.43, 3, 3), "100,000.430-");
	assert.equal(digits.format(-100000000.43, 3, 3), "100,000,000.430-");
});

QUnit.test("getDisplayCountry sv_SE (Sweden)", function(assert) {
	var digits = new Digits("sv_SE");
	assert.equal(digits.getDisplayCountry(), "Sweden");
});

QUnit.test("getDisplayLanguage sv_SE (Sweden)", function(assert) {
	var digits = new Digits("sv_SE");
	assert.equal(digits.getDisplayLanguage(), "Swedish");
});

QUnit.test("getDisplayVariant sv_SE (Sweden)", function(assert) {
	var digits = new Digits("sv_SE");
	assert.equal(digits.getDisplayVariant(), "");
});

QUnit.test("getCountry sv_SE (Sweden)", function(assert) {
	var digits = new Digits("sv_SE");
	assert.equal(digits.getCountry(), "SE");
});

QUnit.test("getLanguage sv_SE (Sweden)", function(assert) {
	var digits = new Digits("sv_SE");
	assert.equal(digits.getLanguage(), "sv");
});

QUnit.test("getVariant sv_SE (Sweden)", function(assert) {
	var digits = new Digits("sv_SE");
	assert.equal(digits.getVariant(), "");
});

QUnit.test("getCountryISO3 sv_SE (Sweden)", function(assert) {
	var digits = new Digits("sv_SE");
	assert.equal(digits.getCountryISO3(), "SWE");
});

QUnit.test("getLanguageISO3 sv_SE (Sweden)", function(assert) {
	var digits = new Digits("sv_SE");
	assert.equal(digits.getLanguageISO3(), "swe");
});

QUnit.test("indexByISO2", function(assert) {
	var digits = new Digits("sv_SE");
	assert.equal(Digits.indexByISO2(digits.locale), "sv_SE");
});

QUnit.test("indexByISO3", function(assert) {
	var digits = new Digits("sv_SE");
	assert.equal(Digits.indexByISO3(digits.locale), "swe_SWE");
});

QUnit.test("Default fallback locale en_US (United States)", function(assert) {
	var digits = new Digits();
	assert.equal(digits.getCountry(), "US");
	assert.equal(digits.getLanguage(), "en");
});

QUnit.test("Undefine locale en_GB (United Kingdom)", function(assert) {
	var digits = new Digits("en_GB");
	assert.equal(digits.getCountry(), "GB");
	assert.equal(digits.getLanguage(), "en");
	Digits.undefine("en_GB");
	digits = new Digits("en_GB");
	assert.equal(digits.getCountry(), "US");
	assert.equal(digits.getLanguage(), "en");
});

QUnit.test("Set fallback locale to sv_SE (Sweden)", function(assert) {
	var fallback = new Digits("sv_SE");
	Digits.setFallbackLocale(fallback.locale);
	var digits = new Digits();
	assert.equal(digits.getCountry(), "SE");
	assert.equal(digits.getLanguage(), "sv");

	Digits.fallbackLocaleCode = "ar_EG";
	digits = new Digits();
	assert.equal(digits.getCountry(), "EG");
	assert.equal(digits.getLanguage(), "ar");
});

QUnit.test("Define custom locale (xx_YY)", function(assert) {
	assert.equal(Digits.define(Digits.localeFactory("xx", "YY", "", "xxx", "YYY", "Whatever", "Whereever", "", "_", "=", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true), 0);
	var digits = new Digits("xx_YY");
	assert.equal(digits.getCountry(), "YY");
	assert.equal(digits.getLanguage(), "xx");
	assert.equal(digits.getDisplayCountry(), "Whereever");
	assert.equal(digits.getDisplayLanguage(), "Whatever");
	assert.equal(digits.format(10.43, 1, 1), "10_4");
});
