# digits.js
Format numbers to 151 different locales in JavaScript. Besides number formatting it will also handle number rounding according to locale.

It is very simple to use, watch:

```javascript
var digits;

digits = new Digits("en_US");            // US
debug.log(digits.format(42));            //prints 42
debug.log(digits.format(42.23));         //prints 42.23;
debug.log(digits.format(42000));         //prints 42,000;
debug.log(digits.format(9999.99, 0, 0)); //prints 10,000;

digits = new Digits("sv_SE");            // Sweden
debug.log(digits.format(42));            //prints 42
debug.log(digits.format(42.23));         //prints 42,23;
debug.log(digits.format(42000));         //prints 42 000;
debug.log(digits.format(9999.99, 0, 0)); //prints 10 000;
```

##API

###Constructor

Create an instance by passing an ISO2 language and country code.

_code_ the language and country code.
```
Digits(code)
```

```javascript
var instance = new Digits("sv_SE");
```

###Format

Format a number. 

- _max_fraction_digits_ optional. minimum number of fractions
- _max_fraction_digits_ optional. maximum number of fractions

returns the formatted number.

```
<instance>.format(number, min_fraction_digits, max_fraction_digits)
```

```javascript
var instance = new Digits("sv_SE");
instance.format(9999.99);       // 9999,99
instance.format(9999.99, 0, 0); // 10 000
```

### Get Country ISO2 code

Get country code.

```
<instance>.getCountry()
```

### Get Language code

Get language ISO2 code.

```
<instance>.getLanguage()
```

### Get variant code

Get variant code.

```
<instance>.getVariant()
```

### Get Country display name

Get country name.

```
<instance>.getDisplayCountry()
```

### Get Language display name

Get language name.

```
<instance>.getDisplayLanguage()
```

### Get variant display name

Get variant name.

```
<instance>.getDisplayVariant()
```

### Get Country ISO3 code

Get country ISO3 code.

```
<instance>.getCountryISO3()
```

### Get Language ISO3 code

Get language ISO3 code.

```
<instance>.getLanguageISO3()
```

##Advanced API

###Locale factory

Factory method to create a new locale

```
Digits.localeFactory(language, country, variant, languageISO3, 
              countryISO3, displayLanguage, displayCountry, displayVariant,
							decimalSymbol, groupSymbol, minFractionDigits, 
							maxFractionDigits, groupingArray, isLeadingDecimalZero, 
							isAlwaysShowDecimalSymbol, negativeNumberFormat, 
							positiveNumberFormat, zeroNumberFormat, nAn, 
							infinity, roundingMode, digitArray);
```

```javascript
var locale = Digits.localeFactory("sv", "SE", "", "swe", "SWE", "Swedish", "Sweden", "", ",", "\u00a0", 0, 3, [3], true,              false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]);
```

###Locale define

Add a new locale.

- _locale_ The locale to add.
- _validate_ Optional. Validate the new locale. Default is false.

returns 0 on success, 1 on failure.

```
Digits.define(locale, validate);
```

```javascript
var locale = Digits.localeFactory(...);
Digits.define(locale, true);
```

###Set fallback locale

The fallback locale will be used if language and country code is unknown when calling the _Digits(code)_ constructor
Default fallback locale is en_US

_locale_ the locale to use as fallback

```
Digits.setFallbackLocale(locale);
```

```javascript
var fallback = Digits("sv_SE");
Digits.setFallbackLocale(fallback.locale);
```

###Use to ISO3 codes

Digits object are instanciated using ISO2 codes by default. This can be changed to ISO3 codes.
This method must be called before creating any Digits objects.

```
Digits.useISO3()
```

```javascript
Digits.useISO3();
var digits = Digits("swe_SWE"); //ISO3 code
```
