# digits.js
Format numbers to 152 different locales in JavaScript. Besides formatting, it will also handle rounding of numbers according to locale or to any number of fraction digits.

It is very simple to use, watch:

```javascript

digits = new Digits("en_US");             // United States
formatted = digits.format(42);            // formatted = 42
formatted = digits.format(42.23);         // formatted = 42.23
formatted = digits.format(9999.99, 0, 0); // formatted = 10,000
formatted = digits.format(500.126, 2, 2); // formatted = 500.13

digits = new Digits("sv_SE");             // Sweden
formatted = digits.format(42);            // formatted = 42
formatted = digits.format(42.23);         // formatted = 42,23
formatted = digits.format(9999.99, 0, 0); // formatted = 10 000
formatted = digits.format(500.126, 2, 2); // formatted = 500,13
```

## Locales

View full list of available locales in [locales.md](locales.md)

Locale codes are based on ISO 639 (language) and ISO 3166 (country) standards. 2 letter codes (ISO2) are used by default, but digits.js can be configured to accept 3 letter codes (ISO3) as well.

## Tests

This framework is tested using QUnit. Over 10,000 number formatting tests! The tests can be found in the _tests_ directory.

## Examples

Examples on how to use digits.js are in the _examples_ directory.

## License

MIT

## API

### Create a Digits instance

```
new Digits(code)
```

Create an instance by passing an ISO2 language/country code to the constructor. If the locale does not exist a fallback locale will be used. Default fallback is en_US (English, United States).
See [locales.md](locales.md) for a full list of available locales.

* _code_ - the ISO2 language/country code

```javascript
var instance = new Digits("sv_SE");
```

### Format number

```
<instance>.format(number, minFractionDigits, maxFractionDigits)
```

Format a number.

- _number_ - the number to format
- _maxFractionDigits_ - optional. minimum number of fractions. If not given locale default are used
- _maxFractionDigits_ - optional. maximum number of fractions. If not given locale default are used

__returns__ the formatted number

```javascript
var instance = new Digits("sv_SE");
instance.format(9999.99);       // 9999,99
instance.format(9999.99, 0, 0); // 10 000
```

### Get country display name

```
<instance>.getDisplayCountry()
```

Get country name.

__returns__ the name

```javascript
var instance = new Digits("sv_SE");
var name = instance.getDisplayCountry(); // name = Sweden
```

### Get language display name

```
<instance>.getDisplayLanguage()
```

Get language name.

__returns__ the name

```javascript
var instance = new Digits("sv_SE");
var name = instance.getDisplayLanguage(); // name = Swedish
```

### Get variant display name

```
<instance>.getDisplayVariant()
```

Get variant name.

__returns__ the name

### Get country code

```
<instance>.getCountry()
```

Get country ISO2 code.

__returns__ the code

```javascript
var instance = new Digits("sv_SE");
var code = instance.getCountry(); // code = SE
```

### Get language code

```
<instance>.getLanguage()
```

Get language ISO2 code.

__returns__ the code

```javascript
var instance = new Digits("sv_SE");
var code = instance.getLanguage(); // code = sv
```

### Get variant code

```
<instance>.getVariant()
```

Get variant ISO2 code.

__returns__ the code

### Get country ISO3 code

```
<instance>.getCountryISO3()
```

Get country ISO3 code.

__returns__ the code

```javascript
var instance = new Digits("sv_SE");
var code = instance.getCountryISO3(); // code = SWE
```

### Get language ISO3 code

```
<instance>.getLanguageISO3()
```

Get language ISO3 code.

__returns__ the code

```javascript
var instance = new Digits("sv_SE");
var code = instance.getLanguageISO3(); // code = swe
```

## Advanced API

### Get code list

```
Digits.getCodeList()
```

Get codes for all available locales.

__returns__ a list containing all available locale codes

```javascript
var codes = Digits.getCodeList();
var iso2code = codes[0].codeISO2;
var iso3code = codes[0].codeISO3;
var language = codes[0].language;
var country = codes[0].country;
```

### Set fallback locale

```
Digits.setFallbackLocale(locale)
```

The fallback locale will be used if language and country code is unknown when calling the _new Digits(code)_ constructor
Default fallback locale is en_US.

- _locale_ - the locale to use as fallback

```javascript
var fallback = new Digits("sv_SE");
Digits.setFallbackLocale(fallback.locale);
```

### Use ISO3 codes

```
Digits.useISO3()
```

Digits objects are instantiated using ISO2 codes by default. This can be changed to ISO3 codes.
This method must be called before creating any Digits objects.

```javascript
Digits.useISO3();
var digits = new Digits("swe_SWE"); //ISO3 code
```

### Locale factory method

```
Digits.localeFactory(language, country, variant, languageISO3, 
		countryISO3, displayLanguage, displayCountry, displayVariant,
		decimalSymbol, groupSymbol, minFractionDigits, 
		maxFractionDigits, groupingArray, isLeadingDecimalZero, 
		isAlwaysShowDecimalSymbol, negativeNumberFormat, 
		positiveNumberFormat, zeroNumberFormat, nAn, 
		infinity, roundingMode, digitArray)
```

Factory method is used to create custom locales.

- _language_ - ISO2 language code
- _country_ - ISO2 country code
- _variant_ - ISO2 variant code. Usually and empty string, ""
- _languageISO3_ - ISO3 language code
- _countryISO3_ - ISO3 country code
- _displayLanguage_ - language name
- _displayCountry_ - country name
- _displayVariant_ - variant name
- _decimalSymbol_ - the decimal symbol
- _groupSymbol_ - the group symbol (for example, thousand separator)
- _minFractionDigits_ - minimum number of fraction digits. Used as default by Digits objects
- _maxFractionDigits_ - maximum number of fraction digits. Used as default by Digits objects
- _groupingArray_ - defines how to group/seperate digits
- _isLeadingDecimalZero_ - have leading decimal zero. Example, 0.75 or .75
- _isAlwaysShowDecimalSymbol_ - always have decimal symbol
- _negativeNumberFormat_ - negative number format. Example, prefix with minus sign -#
- _positiveNumberFormat_ - positive number format. Example, no prefix or suffix, #
- _zeroNumberFormat_ - zero number format. Usually, #
- _nAn_ - value for not-a-number
- _infinity_ - value for infinity
- _roundingMode_ - rounding function to use. See Rounding modes
- _digitArray_ - how to represent the digits 0-9 as text

__returns__ the new locale

```javascript
var locale = Digits.localeFactory("sv", "SE", "", "swe", "SWE", "Swedish", "Sweden", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]);
```

### Define locale

```
Digits.define(locale, skipValidation)
```

Add a new locale.

- _locale_ - the locale to add
- _skipValidation_ - optional. Skip locale validation. _true_ or _false_. Default is _false_

__returns__ _true_ on success, _false_ on failure

```javascript
var locale = Digits.localeFactory(...);
Digits.define(locale);
```

### Disable auto define

```
Digits.disableAutoDefine()
```

Disable auto define of locales. Auto define is enabled by default. If auto define is disabled all locales to be used must be created and added manually. Fallback locale must also be set manually.
This method must be called before creating any Digits objects.

```javascript
Digits.disableAutoDefine();
Digits.define(Digits.localeFactory(...));
Digits.setFallbackLocale(Digits.localeFactory(...));
var digits = new Digits("xx_YY");
```

### Rounding modes

```
Digits.roundHalfTowardsInfinity(number)
Digits.roundHalfTowardsZero(number)
Digits.roundHalfUp(number)
Digits.roundHalfDown(number)
Digits.roundHalfToEven(number)
Digits.roundHalfToOdd(number)
```

These rounding functions should be used when defining custom locales.

- _number_ - the number to round

__returns__ the rounded number
