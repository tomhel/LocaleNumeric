QUnit.test("Create instance in ISO3 mode", function(assert) {
	Digits.useISO3();
	var digits = new Digits("swe_SWE");
	assert.equal(digits.getCountry(), "SE");
	assert.equal(digits.getLanguage(), "sv");
	assert.equal(digits.getCountryISO3(), "SWE");
	assert.equal(digits.getLanguageISO3(), "swe");
});

QUnit.test("Get fallback locale in ISO3 mode", function(assert) {
	Digits.useISO3();
	var digits = new Digits("xx_YY");
	assert.equal(digits.getCountry(), "US");
	assert.equal(digits.getLanguage(), "en");
	assert.equal(digits.getCountryISO3(), "USA");
	assert.equal(digits.getLanguageISO3(), "eng");
});

