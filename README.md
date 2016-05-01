# digits.js
Format numbers to 151 different locales in JavaScript. Besides number formatting it will also handle number rounding according to locale.

It is very simple to use, watch:

```javascript
var digits;

digits = new Digits("en_US");          // US
debug.log(digits.format(42));          //prints 42
debug.log(digits.format(42.23));       //prints 42.23;
debug.log(digits.format(42000));       //prints 42,000;

digits = new Digits("sv_SE");          // Sweden
debug.log(digits.format(42));          //prints 42
debug.log(digits.format(42.23));       //prints 42,23;
debug.log(digits.format(42000));       //prints 42 000;

```

##API

###Constructor

Create an instance by passing an ISO2 language and country code.

```
Digits(code)
```

```javascript
var instance = new Digits("sv_SE");
```

###Format

Format a number. 
min_fraction_digits and max_fraction_digits are optional.

```
<instance>.format(number, min_fraction_digits, max_fraction_digits)
```

```javascript
var instance = new Digits("sv_SE");
instance.format(9999.99);
instance.format(9999.99, 0, 0);
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

Get country code.

```
<instance>.getCountryISO3()
```

### Get Language code

Get language ISO3 code.

```
<instance>.getLanguageISO3()
```

##Advanced API


