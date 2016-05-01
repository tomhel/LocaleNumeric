QUnit.test("Get locale by ISO3 code", function(assert) {
	Digits.indexingMethod = Digits.indexByISO3;
	var digits = new Digits("swe_SWE");
	assert.equal(digits.getCountry(), "SE");
	assert.equal(digits.getLanguage(), "sv");
});

