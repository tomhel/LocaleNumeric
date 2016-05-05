/*
 * MIT License
 *
 * Copyright (c) 2016 Tommy Hellstrom
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 ******************************************************************************
 *
 * digits.js - format numbers according to locale
 *
 * Author: Tommy Hellstrom
 * Version: development
 *
 */

/**
 * Constructor.
 * Accepts a locale code.
 * Will fallback if code is invalid or does not exist.
 */
Digits = function (localeCode) {
	var locales = Digits.locales();

	if(localeCode === undefined || localeCode === null) {
		//fallback
		if(Digits.fallbackLocaleCode !== undefined && Digits.fallbackLocaleCode !== null) {
			this.locale = locales.get(Digits.fallbackLocaleCode);
		}
	} else {
		var localeObject = locales.get(localeCode);

		if(localeObject === undefined || localeObject === null) {
			//fallback
			if(Digits.fallbackLocaleCode !== undefined && Digits.fallbackLocaleCode !== null) {
				this.locale = locales.get(Digits.fallbackLocaleCode);
			}
		} else {
			//success!
			this.locale = localeObject;
		}
	}
};

/**
 * Round half towards infinity (away from zero).
 */
Digits.roundHalfTowardsInfinity = function(number) {
	if(number == 0) {
		return 0;
	}

	var reminder = number % 1;

	if(reminder == 0) {
		return number;
	} else if(number > 0) {
		if(reminder >= 0.5) {
			return Math.ceil(number);
		} else {
			return Math.floor(number);
		}
	} else {
		if(reminder <= -0.5) {
			return Math.floor(number);
		} else {
			return Math.ceil(number);
		}
	}
};

/**
 * Round half towards zero.
 */
Digits.roundHalfTowardsZero = function(number) {
	if(number == 0) {
		return 0;
	}

	var reminder = number % 1;

	if(reminder == 0) {
		return number;
	} else if(number > 0) {
		if(reminder <= 0.5) {
			return Math.floor(number);
		} else {
			return Math.ceil(number);
		}
	} else {
		if(reminder >= -0.5) {
			return Math.ceil(number);
		} else {
			return Math.floor(number);
		}
	}
};

/**
 * Round half up (towards positive infinity).
 */
Digits.roundHalfUp = function(number) {
	if(number == 0) {
		return 0;
	}

	var reminder = number % 1;

	if(reminder == 0) {
		return number;
	} else if(number > 0) {
		if(reminder >= 0.5) {
			return Math.ceil(number);
		} else {
			return Math.floor(number);
		}
	} else {
		if(reminder >= -0.5) {
			return Math.ceil(number);
		} else {
			return Math.floor(number);
		}
	}
};

/**
 * Round half down (towards negative infinity).
 */
Digits.roundHalfDown = function(number) {
	if(number == 0) {
		return 0;
	}

	var reminder = number % 1;

	if(reminder == 0) {
		return number;
	} else if(number > 0) {
		if(reminder <= 0.5) {
			return Math.floor(number);
		} else {
			return Math.ceil(number);
		}
	} else {
		if(reminder <= -0.5) {
			return Math.floor(number);
		} else {
			return Math.ceil(number);
		}
	}
};

/**
 * Round half to even.
 */
Digits.roundHalfToEven = function(number) {
	if(number == 0) {
		return 0;
	}

	var reminder = number % 2;

	if(reminder == 0 || reminder == 1 || reminder == -1) {
		return number;
	} else if(number > 0) {
		if(reminder < 1) {
			if(reminder <= 0.5) {
				return Math.floor(number);
			} else {
				return Math.ceil(number);
			}
		} else {
			if(reminder >= 1.5) {
				return Math.ceil(number);
			} else {
				return Math.floor(number);
			}
		}
	} else {
		if(reminder > -1) {
			if(reminder >= -0.5) {
				return Math.ceil(number);
			} else {
				return Math.floor(number);
			}
		} else {
			if(reminder <= -1.5) {
				return Math.floor(number);
			} else {
				return Math.ceil(number);
			}
		}
	}
};

/**
 * Round half to odd.
 */
Digits.roundHalfToOdd = function(number) {
	if(number == 0) {
		return 0;
	}

	var reminder = number % 2;

	if(reminder == 0 || reminder == 1 || reminder == -1) {
		return number;
	} else if(number > 0) {
		if(reminder < 1) {
			if(reminder >= 0.5) {
				return Math.ceil(number);
			} else {
				return Math.floor(number);
			}
		} else {
			if(reminder <= 1.5) {
				return Math.floor(number);
			} else {
				return Math.ceil(number);
			}
		}
	} else {
		if(reminder > -1) {
			if(reminder <= -0.5) {
				return Math.floor(number);
			} else {
				return Math.ceil(number);
			}
		} else {
			if(reminder >= -1.5) {
				return Math.ceil(number);
			} else {
				return Math.floor(number);
			}
		}
	}
};

/**
 * Indexing by ISO2 codes.
 */
Digits.indexByISO2 = function(localeObject) {
	return localeObject.language +
			((localeObject.country === "") ? "" : "_" + localeObject.country) +
			((localeObject.variant === "") ? "" : "_" + localeObject.variant);
};

/**
 * Indexing by ISO3 codes.
 */
Digits.indexByISO3 = function(localeObject) {
	return localeObject.languageISO3 +
			((localeObject.countryISO3 === "") ? "" : "_" + localeObject.countryISO3);
};

/**
 * Factory to create locale objects.
 */
Digits.localeFactory = function(language, country, variant, languageISO3,
							countryISO3, displayLanguage, displayCountry, displayVariant,
							decimalSymbol, groupSymbol, minFractionDigits,
							maxFractionDigits, groupingArray, isLeadingDecimalZero,
							isAlwaysShowDecimalSymbol, negativeNumberFormat,
							positiveNumberFormat, zeroNumberFormat, nAn,
							infinity, roundingMode, digitArray) {

	return {
		language:language, country:country, variant:variant, languageISO3:languageISO3, countryISO3:countryISO3,
		displayCountry:displayCountry, displayLanguage:displayLanguage, displayVariant:displayVariant,
		numbers: {
				decimalSymbol:decimalSymbol, groupSymbol:groupSymbol, minFractionDigits:minFractionDigits,
				maxFractionDigits:maxFractionDigits, grouping:groupingArray, leadingDecimalZero:isLeadingDecimalZero,
				alwaysShowDecimalSymbol:isAlwaysShowDecimalSymbol, negativeNumberFormat:negativeNumberFormat,
				positiveNumberFormat:positiveNumberFormat, zeroNumberFormat:zeroNumberFormat, nAn:nAn,
				infinity:infinity, round:roundingMode, digits:digitArray
		}
	};
};

/* Indexing method for locales. Default indexing by ISO2 codes. */
Digits.indexingMethod = Digits.indexByISO2;
/* Automatically define locales. false to disable. Default is true. */
Digits.isAutoDefineEnabled = true;
/* Fallback locale string. Defaults to "en_US" for ISO2, "eng_USA" for ISO3. */
Digits.fallbackLocaleCode = undefined;


/**
 * Do not load any locales.
 * Every locale must be created and loaded manually.
 */
Digits.disableAutoDefine = function() {
	Digits.isAutoDefineEnabled = false;
};

/**
 * Load all locales automatically. This is default behaviour.
 */
Digits.enableAutoDefine = function() {
	Digits.isAutoDefineEnabled = true;
};

/**
 * Set the fallback locale.
 * This locale will be used if requested locale does not exist.
 */
Digits.setFallbackLocale = function(localeObject) {
	Digits.fallbackLocaleCode = Digits.indexingMethod(localeObject);
};

/**
 * Use ISO2 codes when creating new Digits objects (default).
 */
Digits.useISO2 = function() {
	Digits.indexingMethod = Digits.indexByISO2;
};

/**
 * Use ISO3 codes when creating new Digits objects.
 */
Digits.useISO3 = function() {
	Digits.indexingMethod = Digits.indexByISO3;
};

/**
 * Wrapper function used externally to define new locales;
 */
Digits.define = function(localeObject, optional_isSkipValidation) {
	return Digits.locales().define(localeObject, optional_isSkipValidation);
};

/**

 * Wrapper function used externally to get the list of locale codes;
 */
Digits.getCodeList = function() {
	return Digits.locales().getCodeList();
};

/**
 * Internal formatting method. Should not be called externally!
 */
Digits.formatInternal = function(number, formatPattern) {
	var numFormatted = "";
	var i;

	//formatting of number according to pattern
	for(i = 0; i < formatPattern.length; i++) {
		if(formatPattern.charAt(i) === "#") {
			numFormatted = numFormatted + number;
		} else {
			numFormatted = numFormatted + formatPattern.charAt(i);
		}
	}

	return numFormatted;
};

/* Data structure holding defined locales. Locales are defined on first access (lazy). */
Digits.locales = function() {
	/* Contains all locales. */
	var locales = {};
	/* Returned on define failure. */
	var failure = false;
	/* Returned on define success. */
	var success = true;

	/**
	 * Gets a locale object.  Will return undefined if locale does not exist.
	 */
	var get = function(localeCode) {
		return locales[localeCode];
	};

	/**
	 * Get list of all supported locales.
	 */
	var getCodeList = function() {
		var codeList = [];
		var key;
		var i = 0;
		var locale;
		for (key in locales) {
			locale = locales[key];
			codeList[i++] = {
				codeISO2: Digits.indexByISO2(locale),
				codeISO3: Digits.indexByISO3(locale),
				language: locale.displayLanguage,
				country: locale.displayCountry
			};
		}
		return codeList;
	};

	/**
	 * Undefine (remove) a locale from the structure.
	 */
	var undefine = function(localeCode) {
		var locale = locales[localeCode];

		if(locale !== undefined) {
			delete locales[localeCode];
		}
	};

	/**
	 * Define a locale. The locale is validated by default, but can be disabled.
	 * Return 0 on success, 1 on failure.
	 */
	var define = function(localeObject, optional_isSkipValidation) {
		if(optional_isSkipValidation === undefined) {
			//default is to do validation.
			optional_isSkipValidation = false;
		}

		//skip or do validation.
		if(!optional_isSkipValidation) {
			if(typeof localeObject !== "object") { return failure; }
			if(typeof localeObject.country !== "string") { return failure; }
			if(typeof localeObject.language !== "string") { return failure; }
			if(typeof localeObject.variant !== "string") { return failure; }
			if(typeof localeObject.countryISO3 !== "string") { return failure; }
			if(typeof localeObject.languageISO3 !== "string") { return failure; }
			if(typeof localeObject.displayCountry !== "string") { return failure; }
			if(typeof localeObject.displayLanguage !== "string") { return failure; }
			if(typeof localeObject.displayVariant !== "string") { return failure; }
			if(typeof localeObject.numbers !== "object") { return failure; }
			if(typeof localeObject.numbers.decimalSymbol !== "string") { return failure; }
			if(typeof localeObject.numbers.groupSymbol !== "string") { return failure; }
			if(typeof localeObject.numbers.maxFractionDigits !== "number") { return failure; }
			if(typeof localeObject.numbers.minFractionDigits !== "number") { return failure; }
			if(!(localeObject.numbers.grouping instanceof Array)) { return failure; }
			if(localeObject.numbers.grouping.length == 0) { return failure; }
			if(typeof localeObject.numbers.leadingDecimalZero !== "boolean") { return failure; }
			if(typeof localeObject.numbers.alwaysShowDecimalSymbol !== "boolean") { return failure; }
			if(typeof localeObject.numbers.negativeNumberFormat !== "string") { return failure; }
			if(typeof localeObject.numbers.positiveNumberFormat !== "string") { return failure; }
			if(typeof localeObject.numbers.zeroNumberFormat !== "string") { return failure; }
			if(typeof localeObject.numbers.nAn !== "string") { return failure; }
			if(typeof localeObject.numbers.infinity !== "string") { return failure; }
			if(typeof localeObject.numbers.round !== "function") { return failure; }
			if(!(localeObject.numbers.digits instanceof Array)) { return failure; }
			if(localeObject.numbers.digits.length != 10) { return failure; }

			var i;

			for(i = 0; i < localeObject.numbers.grouping.length; i++) {
				if(typeof localeObject.numbers.grouping[i] !== "number") {
					return failure;
				}
			}

			for(i = 0; i < localeObject.numbers.digits.length; i++) {
				if(typeof localeObject.numbers.digits[i] === "number") {
					/* do nothing */
				} else if(typeof localeObject.numbers.digits[i] === "string") {
					/* do nothing */
				} else {
					return failure;
				}
			}
		}

		//create index.
		var localeCode = Digits.indexingMethod(localeObject);
		//insert locale.
		locales[localeCode] = localeObject;
		return success;
	};

	//locales are automatically defined if not disabled.
	if(Digits.isAutoDefineEnabled) {
		define(Digits.localeFactory("ja", "JP", "", "jpn", "JPN", "Japanese", "Japan", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("es", "PE", "", "spa", "PER", "Spanish", "Peru", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("en", "", "", "eng", "", "English", "", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ja", "JP", "JP", "jpn", "JPN", "Japanese", "Japan", "JP", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("es", "PA", "", "spa", "PAN", "Spanish", "Panama", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("sr", "BA", "", "srp", "BIH", "Serbian", "Bosnia and Herzegovina", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "NaN", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("mk", "", "", "mkd", "", "Macedonian", "", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("es", "GT", "", "spa", "GTM", "Spanish", "Guatemala", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ar", "AE", "", "ara", "ARE", "Arabic", "United Arab Emirates", "", ".", ",", 0, 3, [3], true, false, "#-", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("no", "NO", "", "nor", "NOR", "Norwegian", "Norway", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("sq", "AL", "", "sqi", "ALB", "Albanian", "Albania", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("bg", "", "", "bul", "", "Bulgarian", "", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ar", "IQ", "", "ara", "IRQ", "Arabic", "Iraq", "", ".", ",", 0, 3, [3], true, false, "#-", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ar", "YE", "", "ara", "YEM", "Arabic", "Yemen", "", ".", ",", 0, 3, [3], true, false, "#-", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("hu", "", "", "hun", "", "Hungarian", "", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("pt", "PT", "", "por", "PRT", "Portuguese", "Portugal", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("el", "CY", "", "ell", "CYP", "Greek", "Cyprus", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "NaN", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ar", "QA", "", "ara", "QAT", "Arabic", "Qatar", "", ".", ",", 0, 3, [3], true, false, "#-", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("mk", "MK", "", "mkd", "MKD", "Macedonian", "Macedonia", "", ",", ".", 0, 3, [3], true, false, "(#)", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("sv", "", "", "swe", "", "Swedish", "", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("de", "CH", "", "deu", "CHE", "German", "Switzerland", "", ".", "'", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("fi", "FI", "", "fin", "FIN", "Finnish", "Finland", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("is", "", "", "isl", "", "Icelandic", "", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("cs", "", "", "ces", "", "Czech", "", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("en", "MT", "", "eng", "MLT", "English", "Malta", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "NaN", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("sl", "SI", "", "slv", "SVN", "Slovenian", "Slovenia", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("sk", "SK", "", "slk", "SVK", "Slovak", "Slovakia", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("it", "", "", "ita", "", "Italian", "", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("tr", "TR", "", "tur", "TUR", "Turkish", "Turkey", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("zh", "", "", "zho", "", "Chinese", "", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("th", "", "", "tha", "", "Thai", "", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ar", "SA", "", "ara", "SAU", "Arabic", "Saudi Arabia", "", ".", ",", 0, 3, [3], true, false, "#-", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("no", "", "", "nor", "", "Norwegian", "", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("en", "GB", "", "eng", "GBR", "English", "United Kingdom", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("sr", "CS", "", "srp", "SCG", "Serbian", "Serbia and Montenegro", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "NaN", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("lt", "", "", "lit", "", "Lithuanian", "", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ro", "", "", "ron", "", "Romanian", "", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("en", "NZ", "", "eng", "NZL", "English", "New Zealand", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("no", "NO", "NY", "nor", "NOR", "Norwegian", "Norway", "Nynorsk", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("lt", "LT", "", "lit", "LTU", "Lithuanian", "Lithuania", "", ",", "\u00a0", 0, 2, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("es", "NI", "", "spa", "NIC", "Spanish", "Nicaragua", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("nl", "", "", "nld", "", "Dutch", "", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ga", "IE", "", "gle", "IRL", "Irish", "Ireland", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "NaN", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("fr", "BE", "", "fra", "BEL", "French", "Belgium", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("es", "ES", "", "spa", "ESP", "Spanish", "Spain", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ar", "LB", "", "ara", "LBN", "Arabic", "Lebanon", "", ".", ",", 0, 3, [3], true, false, "#-", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ko", "", "", "kor", "", "Korean", "", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("fr", "CA", "", "fra", "CAN", "French", "Canada", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("et", "EE", "", "est", "EST", "Estonian", "Estonia", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ar", "KW", "", "ara", "KWT", "Arabic", "Kuwait", "", ".", ",", 0, 3, [3], true, false, "#-", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("sr", "RS", "", "srp", "SRB", "Serbian", "Serbia", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "NaN", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("es", "US", "", "spa", "USA", "Spanish", "United States", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "NaN", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("es", "MX", "", "spa", "MEX", "Spanish", "Mexico", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ar", "SD", "", "ara", "SDN", "Arabic", "Sudan", "", ".", ",", 0, 3, [3], true, false, "#-", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("in", "ID", "", "ind", "IDN", "Indonesian", "Indonesia", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "NaN", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ru", "", "", "rus", "", "Russian", "", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("lv", "", "", "lav", "", "Latvian", "", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("es", "UY", "", "spa", "URY", "Spanish", "Uruguay", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("lv", "LV", "", "lav", "LVA", "Latvian", "Latvia", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("iw", "", "", "heb", "", "Hebrew", "", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("pt", "BR", "", "por", "BRA", "Portuguese", "Brazil", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ar", "SY", "", "ara", "SYR", "Arabic", "Syria", "", ".", ",", 0, 3, [3], true, false, "#-", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("hr", "", "", "hrv", "", "Croatian", "", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("et", "", "", "est", "", "Estonian", "", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("es", "DO", "", "spa", "DOM", "Spanish", "Dominican Republic", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("fr", "CH", "", "fra", "CHE", "French", "Switzerland", "", ".", "'", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("es", "VE", "", "spa", "VEN", "Spanish", "Venezuela", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ar", "BH", "", "ara", "BHR", "Arabic", "Bahrain", "", ".", ",", 0, 3, [3], true, false, "#-", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("en", "PH", "", "eng", "PHL", "English", "Philippines", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "NaN", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ar", "TN", "", "ara", "TUN", "Arabic", "Tunisia", "", ".", ",", 0, 3, [3], true, false, "#-", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("fi", "", "", "fin", "", "Finnish", "", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("de", "AT", "", "deu", "AUT", "German", "Austria", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("es", "", "", "spa", "", "Spanish", "", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("nl", "NL", "", "nld", "NLD", "Dutch", "Netherlands", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("es", "EC", "", "spa", "ECU", "Spanish", "Ecuador", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("zh", "TW", "", "zho", "TWN", "Chinese", "Taiwan", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ar", "JO", "", "ara", "JOR", "Arabic", "Jordan", "", ".", ",", 0, 3, [3], true, false, "#-", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("be", "", "", "bel", "", "Belarusian", "", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("is", "IS", "", "isl", "ISL", "Icelandic", "Iceland", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("es", "CO", "", "spa", "COL", "Spanish", "Colombia", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("es", "CR", "", "spa", "CRI", "Spanish", "Costa Rica", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("es", "CL", "", "spa", "CHL", "Spanish", "Chile", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ar", "EG", "", "ara", "EGY", "Arabic", "Egypt", "", ".", ",", 0, 3, [3], true, false, "#-", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("en", "ZA", "", "eng", "ZAF", "English", "South Africa", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("th", "TH", "", "tha", "THA", "Thai", "Thailand", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("el", "GR", "", "ell", "GRC", "Greek", "Greece", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("it", "IT", "", "ita", "ITA", "Italian", "Italy", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ca", "", "", "cat", "", "Catalan", "", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("hu", "HU", "", "hun", "HUN", "Hungarian", "Hungary", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("fr", "", "", "fra", "", "French", "", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("en", "IE", "", "eng", "IRL", "English", "Ireland", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("uk", "UA", "", "ukr", "UKR", "Ukrainian", "Ukraine", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("pl", "PL", "", "pol", "POL", "Polish", "Poland", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("fr", "LU", "", "fra", "LUX", "French", "Luxembourg", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("nl", "BE", "", "nld", "BEL", "Dutch", "Belgium", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("en", "IN", "", "eng", "IND", "English", "India", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ca", "ES", "", "cat", "ESP", "Catalan", "Spain", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ar", "MA", "", "ara", "MAR", "Arabic", "Morocco", "", ".", ",", 0, 3, [3], true, false, "#-", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("es", "BO", "", "spa", "BOL", "Spanish", "Bolivia", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("en", "AU", "", "eng", "AUS", "English", "Australia", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("sr", "", "", "srp", "", "Serbian", "", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "NaN", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("zh", "SG", "", "zho", "SGP", "Chinese", "Singapore", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "NaN", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("pt", "", "", "por", "", "Portuguese", "", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("uk", "", "", "ukr", "", "Ukrainian", "", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("es", "SV", "", "spa", "SLV", "Spanish", "El Salvador", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ru", "RU", "", "rus", "RUS", "Russian", "Russia", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ko", "KR", "", "kor", "KOR", "Korean", "South Korea", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("vi", "", "", "vie", "", "Vietnamese", "", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ar", "DZ", "", "ara", "DZA", "Arabic", "Algeria", "", ".", ",", 0, 3, [3], true, false, "#-", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("vi", "VN", "", "vie", "VNM", "Vietnamese", "Vietnam", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("sr", "ME", "", "srp", "MNE", "Serbian", "Montenegro", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "NaN", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("sq", "", "", "sqi", "", "Albanian", "", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ar", "LY", "", "ara", "LBY", "Arabic", "Libya", "", ".", ",", 0, 3, [3], true, false, "#-", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ar", "", "", "ara", "", "Arabic", "", "", ".", ",", 0, 3, [3], true, false, "#-", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("zh", "CN", "", "zho", "CHN", "Chinese", "China", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("be", "BY", "", "bel", "BLR", "Belarusian", "Belarus", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("zh", "HK", "", "zho", "HKG", "Chinese", "Hong Kong", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ja", "", "", "jpn", "", "Japanese", "", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("iw", "IL", "", "heb", "ISR", "Hebrew", "Israel", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("bg", "BG", "", "bul", "BGR", "Bulgarian", "Bulgaria", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("in", "", "", "ind", "", "Indonesian", "", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "NaN", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("mt", "MT", "", "mlt", "MLT", "Maltese", "Malta", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "NaN", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("es", "PY", "", "spa", "PRY", "Spanish", "Paraguay", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("sl", "", "", "slv", "", "Slovenian", "", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("fr", "FR", "", "fra", "FRA", "French", "France", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("cs", "CZ", "", "ces", "CZE", "Czech", "Czech Republic", "", ",", "\u00a0", 0, 2, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("it", "CH", "", "ita", "CHE", "Italian", "Switzerland", "", ".", "'", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ro", "RO", "", "ron", "ROU", "Romanian", "Romania", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("es", "PR", "", "spa", "PRI", "Spanish", "Puerto Rico", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("en", "CA", "", "eng", "CAN", "English", "Canada", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("de", "DE", "", "deu", "DEU", "German", "Germany", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ga", "", "", "gle", "", "Irish", "", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "NaN", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("de", "LU", "", "deu", "LUX", "German", "Luxembourg", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("de", "", "", "deu", "", "German", "", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("es", "AR", "", "spa", "ARG", "Spanish", "Argentina", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("sk", "", "", "slk", "", "Slovak", "", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ms", "MY", "", "msa", "MYS", "Malay", "Malaysia", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "NaN", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("hr", "HR", "", "hrv", "HRV", "Croatian", "Croatia", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("en", "SG", "", "eng", "SGP", "English", "Singapore", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "NaN", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("da", "", "", "dan", "", "Danish", "", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("mt", "", "", "mlt", "", "Maltese", "", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "NaN", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("pl", "", "", "pol", "", "Polish", "", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ar", "OM", "", "ara", "OMN", "Arabic", "Oman", "", ".", ",", 0, 3, [3], true, false, "#-", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("tr", "", "", "tur", "", "Turkish", "", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("el", "", "", "ell", "", "Greek", "", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("ms", "", "", "msa", "", "Malay", "", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "NaN", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("sv", "SE", "", "swe", "SWE", "Swedish", "Sweden", "", ",", "\u00a0", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("da", "DK", "", "dan", "DNK", "Danish", "Denmark", "", ",", ".", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("es", "HN", "", "spa", "HND", "Spanish", "Honduras", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), true);
		define(Digits.localeFactory("hi", "IN", "", "hin", "IND", "Hindi", "India", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, ["\u0966","\u0967","\u0968","\u0969","\u096a","\u096b","\u096c","\u096d","\u096e","\u096f"]), true);
		define(Digits.localeFactory("th", "TH", "TH", "tha", "THA", "Thai", "Thailand", "TH", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, ["\u0e50","\u0e51","\u0e52","\u0e53","\u0e54","\u0e55","\u0e56","\u0e57","\u0e58","\u0e59"]), true);
		var locale_en_US = Digits.localeFactory("en", "US", "", "eng", "USA", "English", "United States", "", ".", ",", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]);
		define(locale_en_US, true);
		if (Digits.fallbackLocaleCode === undefined || Digits.fallbackLocaleCode === null) {
			//set fallback locale to English, USA.
			Digits.setFallbackLocale(locale_en_US);
		}
	}

	Digits.locales = function() {
		return {
			define: define,
			undefine: undefine,
			get: get,
			getCodeList: getCodeList
		};
	};

	return {
		define: define,
		undefine: undefine,
		get: get,
		getCodeList: getCodeList
	};
};

/**
 * Returns country for displaying.
 */
Digits.prototype.getDisplayCountry = function() {
	return this.locale.displayCountry;
};

/**
 * Returns language for displaying.
 */
Digits.prototype.getDisplayLanguage = function() {
	return this.locale.displayLanguage;
};

/**
 * Returns variant for displaying.
 */
Digits.prototype.getDisplayVariant = function() {
	return this.locale.displayVariant;
};

/**
 * Returns ISO2 country code.
 */
Digits.prototype.getCountry = function() {
	return this.locale.country;
};

/**
 * Returns ISO2 language code.
 */
Digits.prototype.getLanguage = function() {
	return this.locale.language;
};

/**
 * Returns variant code.
 */
Digits.prototype.getVariant = function() {
	return this.locale.variant;
};

/**
 * Returns ISO3 language code.
 */
Digits.prototype.getLanguageISO3 = function() {
	return this.locale.languageISO3;
};

/**
 * Returns ISO3 country code.
 */
Digits.prototype.getCountryISO3 = function() {
	return this.locale.countryISO3;
};

/**
 * Format a number with the locale specified for this instance.
 * Precision can be overridden if needed.
 */
Digits.prototype.format = function(number, optional_minFractionDigits, optional_maxFractionDigits) {
	var numLocale = this.locale;
	var i;
	var j;
	var count;

	//check if locale is undefined.
	if(numLocale === undefined) {
		//can happen if the fallback locale is invalid.
		return;
	}

	//if number is NaN end here.
	if(number === undefined || number === null || isNaN(number)) {
		return numLocale.numbers.nAn;
	}

	var minFractionDigits = optional_minFractionDigits;
	var maxFractionDigits = optional_maxFractionDigits;

	//validate or set precision parameters.
	if (minFractionDigits === undefined || minFractionDigits === null) {
		//use defaults for locale.
		minFractionDigits = numLocale.numbers.minFractionDigits;
	} else if(isNaN(minFractionDigits)) {
		//invalid precision parameter.
		return;
	}

	//validate or set precision parameters.
	if (maxFractionDigits === undefined || maxFractionDigits === null) {
		//use defaults for locale.
		maxFractionDigits = numLocale.numbers.maxFractionDigits;
	} else if(isNaN(maxFractionDigits)) {
		//invalid precision parameter.
		return;
	}

	var preparedNumber = number;
	//check if number is negative. this information is needed later.
	var isNegativeNumber = (preparedNumber < 0);

	//if number if infinite end here
	if(!isFinite(preparedNumber)) {
		if (isNegativeNumber) {
			return Digits.formatInternal(numLocale.numbers.infinity, numLocale.numbers.negativeNumberFormat);
		} else {
			return Digits.formatInternal(numLocale.numbers.infinity, numLocale.numbers.positiveNumberFormat);
		}
	}

	if(isNegativeNumber) {
		//work is done on positive numbers, but sign is restored at the end.
		preparedNumber = -preparedNumber;
	}

	var numString = String(preparedNumber);
	var decimalSymbolIndex = numString.indexOf(".");
	var precision;
	var fractionPart;

	//precision decisions
	if(decimalSymbolIndex == -1) {
		//number is an integer. assume precision should be zero.
		fractionPart = "";
		precision = 0;
	} else {
		//extract fraction part.
		fractionPart = numString.substring(decimalSymbolIndex + 1, numString.length);
		//number has a fraction part. assume all fractions should be kept.
		precision = fractionPart.length;
	}

	//correct the precision depending on locale/parameters.
	if(precision < minFractionDigits) {
		precision = minFractionDigits;
	} else if(precision > maxFractionDigits) {
		precision = maxFractionDigits;
	}

	//if precision should be zero, but input number has fractions
	//it must be rounded before formatting.
	if(precision == 0 && fractionPart.length > 0) {
		//rounding is dependent on number sign.
		if(isNegativeNumber) {
			preparedNumber = -numLocale.numbers.round(-preparedNumber);
		} else {
			preparedNumber = numLocale.numbers.round(preparedNumber);
		}

		//number might have changed after rounding.
		numString = String(preparedNumber);
		decimalSymbolIndex = numString.indexOf(".");
	}

	if(fractionPart.length > precision && precision != 0) {
		//fraction part is to long. round it.
		var leadingZeros = 0;
		//first, look for leading zeros.
		for(i = 0; i < fractionPart.length; i++) {
			if(fractionPart.charAt(i) === "0") {
				leadingZeros++;
			} else {
				break;
			}
		}

		var fractionInt = parseInt(fractionPart.slice(leadingZeros));
		fractionInt = fractionInt / Math.pow(10, fractionPart.length - precision);
		var fractionIntString;

		//rounding depends on number sign. negative or positive.
		if(isNegativeNumber) {
			fractionIntString = String(-numLocale.numbers.round(-fractionInt));
		} else {
			fractionIntString = String(numLocale.numbers.round(fractionInt));
		}
		
		//if rounding resulted in left shifted fractions we must remove leading zeros.
		leadingZeros -= (fractionIntString.length - String(Math.floor(fractionInt)).length);

		fractionPart = "";

		//check if rounding has overflowed to one whole (1).
		if(fractionIntString.length > precision) {
			//add overflow.
			preparedNumber++;
			numString = String(preparedNumber);
			decimalSymbolIndex = numString.indexOf(".");

			//pad precision
			for(i = 0; i < precision; i++) {
				fractionPart += "0";
			}
		} else {
			//no owerflow.
			//add leading zeros if needed.
			if(fractionIntString.length < precision) {
				for(i = 0; i < leadingZeros && i < precision - 1; i++) {
					fractionPart += "0";
				}
			}

			//add rounded fraction part.
			fractionPart += fractionIntString.substr(0, (precision > fractionIntString.length) ? fractionIntString.length : precision);
		}
	}

	//extract integer part
	var integerPart = numString.substring(0, ((decimalSymbolIndex == -1) ? numString.length: decimalSymbolIndex));
	var numFormattedIntegerPart = "";
	var grouping = numLocale.numbers.grouping;
	var index = integerPart.length - 1;

	//format groups using localized digits for integer part. from right to left.
	//leftmost group is not formatted here.
	for(j = grouping.length - 1; j > 0; j--) {
		for(i = index, count = grouping[j]; i >= 0 && count > 0; i--, count--) {
			if(count > 1 || i == 0) {
				//if not last digit in current group or is last digit in last group. do not add group symbol.
				numFormattedIntegerPart = numLocale.numbers.digits[integerPart.charAt(i)] + numFormattedIntegerPart;
			} else {
				//if last digit in current group and more groups should be formatted. add group symbol.
				numFormattedIntegerPart = numLocale.numbers.groupSymbol + numLocale.numbers.digits[integerPart.charAt(i)] + numFormattedIntegerPart;
			}
		}

		index-=(grouping[j]);
	}

	//format leftmost group using localized digits for integer part. right to left.
	for(i = index, count = grouping[0]; i >= 0; i--, count--) {
		if(grouping[0] == 0 || count > 1 || i == 0) {
			//if group length is infinite (0), or last digit of the integer part,
			//or not last digit of current group. do not att group symbol.
			numFormattedIntegerPart = numLocale.numbers.digits[integerPart.charAt(i)] + numFormattedIntegerPart;
		} else {
			//if last digit in current group and more digits should be formatted. add group symbol.
			numFormattedIntegerPart = numLocale.numbers.groupSymbol + numLocale.numbers.digits[integerPart.charAt(i)] + numFormattedIntegerPart;
			count = grouping[0] + 1;
		}
	}

	var numFormattedFractionPart = "";

	if(precision > 0) {
		precision = 0;

		//format fraction part using localized digits.
		for(i = fractionPart.length - 1; i >= 0; i--) {
			//remove trailing zero from fraction part if allowed
			if(precision == 0 && i >= minFractionDigits && fractionPart.charAt(i) === "0") {
				continue;
			}
			precision++;
			numFormattedFractionPart = numLocale.numbers.digits[fractionPart.charAt(i)] + numFormattedFractionPart;
		}

		var trailingZeros = minFractionDigits - numFormattedFractionPart.length;

		//add trailing zeros to fraction part if needed
		for(i = 0; i < trailingZeros; i++) {
			precision++;
			numFormattedFractionPart+=numLocale.numbers.digits[0];
		}
	}

	var formatPattern;

	//decide format pattern: positive, negative or zero.
	if(isNegativeNumber) {
		formatPattern = numLocale.numbers.negativeNumberFormat;
	} else if (preparedNumber == 0) {
		formatPattern = numLocale.numbers.zeroNumberFormat;
	} else {
		formatPattern = numLocale.numbers.positiveNumberFormat;
	}

	var numFormattedCombined;

	//formatting decisions.
	if(precision == 0 && numLocale.numbers.alwaysShowDecimalSymbol) {
		//number is integer, but show decimal symbol anyway.
		numFormattedCombined = numFormattedIntegerPart + numLocale.numbers.decimalSymbol;
	} else if(precision == 0) {
		//number is integer without fractions.
		numFormattedCombined = numFormattedIntegerPart;
	} else if(preparedNumber >= 1 || numLocale.numbers.leadingDecimalZero) {
		//number is more or equal to 1 and has a fraction part,
		//or number is less than one, but should have a leading zero before decimal symbol.
		numFormattedCombined = numFormattedIntegerPart + numLocale.numbers.decimalSymbol + numFormattedFractionPart;
	} else {
		//number is only fraction part and should not have a leading zero.
		numFormattedCombined = numLocale.numbers.decimalSymbol + numFormattedFractionPart;
	}

	//last formatting of number according to pattern: positive, negative or zero.
	var numFormatted = Digits.formatInternal(numFormattedCombined, formatPattern);
	return numFormatted;
};
