QUnit.test("roundHalfTowardsInfinity", function(assert) {
	assert.equal(Digits.roundHalfTowardsInfinity(13.95), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.84), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.73), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.62), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.51), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.49), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(13.38), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(13.27), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(13.16), 13);

	assert.equal(Digits.roundHalfTowardsInfinity(12.95), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.84), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.73), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.62), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.51), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.49), 12);
	assert.equal(Digits.roundHalfTowardsInfinity(12.38), 12);
	assert.equal(Digits.roundHalfTowardsInfinity(12.27), 12);
	assert.equal(Digits.roundHalfTowardsInfinity(12.16), 12);

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

	assert.equal(Digits.roundHalfTowardsInfinity(-12.95), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.84), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.73), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.62), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.51), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.49), -12);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.38), -12);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.27), -12);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.16), -12);

	assert.equal(Digits.roundHalfTowardsInfinity(-13.95), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.84), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.73), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.62), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.51), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.49), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.38), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.27), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.16), -13);
});

QUnit.test("roundHalfTowardsZero", function(assert) {
	assert.equal(Digits.roundHalfTowardsInfinity(13.95), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.84), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.73), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.62), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.51), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.49), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(13.38), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(13.27), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(13.16), 13);

	assert.equal(Digits.roundHalfTowardsInfinity(12.95), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.84), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.73), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.62), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.51), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.49), 12);
	assert.equal(Digits.roundHalfTowardsInfinity(12.38), 12);
	assert.equal(Digits.roundHalfTowardsInfinity(12.27), 12);
	assert.equal(Digits.roundHalfTowardsInfinity(12.16), 12);

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

	assert.equal(Digits.roundHalfTowardsInfinity(-12.95), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.84), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.73), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.62), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.51), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.49), -12);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.38), -12);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.27), -12);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.16), -12);

	assert.equal(Digits.roundHalfTowardsInfinity(-13.95), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.84), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.73), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.62), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.51), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.49), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.38), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.27), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.16), -13);
});

QUnit.test("roundHalfUp", function(assert) {
	assert.equal(Digits.roundHalfTowardsInfinity(13.95), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.84), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.73), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.62), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.51), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.49), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(13.38), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(13.27), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(13.16), 13);

	assert.equal(Digits.roundHalfTowardsInfinity(12.95), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.84), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.73), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.62), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.51), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.49), 12);
	assert.equal(Digits.roundHalfTowardsInfinity(12.38), 12);
	assert.equal(Digits.roundHalfTowardsInfinity(12.27), 12);
	assert.equal(Digits.roundHalfTowardsInfinity(12.16), 12);

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

	assert.equal(Digits.roundHalfTowardsInfinity(-12.95), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.84), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.73), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.62), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.51), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.49), -12);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.38), -12);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.27), -12);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.16), -12);

	assert.equal(Digits.roundHalfTowardsInfinity(-13.95), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.84), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.73), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.62), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.51), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.49), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.38), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.27), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.16), -13);
});

QUnit.test("roundHalfDown", function(assert) {
	assert.equal(Digits.roundHalfTowardsInfinity(13.95), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.84), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.73), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.62), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.51), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.49), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(13.38), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(13.27), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(13.16), 13);

	assert.equal(Digits.roundHalfTowardsInfinity(12.95), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.84), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.73), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.62), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.51), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.49), 12);
	assert.equal(Digits.roundHalfTowardsInfinity(12.38), 12);
	assert.equal(Digits.roundHalfTowardsInfinity(12.27), 12);
	assert.equal(Digits.roundHalfTowardsInfinity(12.16), 12);

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

	assert.equal(Digits.roundHalfTowardsInfinity(-12.95), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.84), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.73), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.62), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.51), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.49), -12);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.38), -12);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.27), -12);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.16), -12);

	assert.equal(Digits.roundHalfTowardsInfinity(-13.95), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.84), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.73), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.62), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.51), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.49), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.38), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.27), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.16), -13);
});

QUnit.test("roundHalfToEven", function(assert) {
	assert.equal(Digits.roundHalfTowardsInfinity(13.95), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.84), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.73), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.62), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.51), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.49), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(13.38), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(13.27), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(13.16), 13);

	assert.equal(Digits.roundHalfTowardsInfinity(12.95), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.84), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.73), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.62), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.51), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.49), 12);
	assert.equal(Digits.roundHalfTowardsInfinity(12.38), 12);
	assert.equal(Digits.roundHalfTowardsInfinity(12.27), 12);
	assert.equal(Digits.roundHalfTowardsInfinity(12.16), 12);

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

	assert.equal(Digits.roundHalfTowardsInfinity(-12.95), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.84), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.73), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.62), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.51), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.49), -12);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.38), -12);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.27), -12);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.16), -12);

	assert.equal(Digits.roundHalfTowardsInfinity(-13.95), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.84), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.73), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.62), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.51), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.49), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.38), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.27), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.16), -13);
});

QUnit.test("roundHalfToOdd", function(assert) {
	assert.equal(Digits.roundHalfTowardsInfinity(13.95), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.84), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.73), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.62), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.51), 14);
	assert.equal(Digits.roundHalfTowardsInfinity(13.49), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(13.38), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(13.27), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(13.16), 13);

	assert.equal(Digits.roundHalfTowardsInfinity(12.95), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.84), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.73), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.62), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.51), 13);
	assert.equal(Digits.roundHalfTowardsInfinity(12.49), 12);
	assert.equal(Digits.roundHalfTowardsInfinity(12.38), 12);
	assert.equal(Digits.roundHalfTowardsInfinity(12.27), 12);
	assert.equal(Digits.roundHalfTowardsInfinity(12.16), 12);

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

	assert.equal(Digits.roundHalfTowardsInfinity(-12.95), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.84), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.73), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.62), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.51), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.49), -12);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.38), -12);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.27), -12);
	assert.equal(Digits.roundHalfTowardsInfinity(-12.16), -12);

	assert.equal(Digits.roundHalfTowardsInfinity(-13.95), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.84), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.73), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.62), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.51), -14);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.49), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.38), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.27), -13);
	assert.equal(Digits.roundHalfTowardsInfinity(-13.16), -13);
});

QUnit.test("format NaN & Infinity sv_SE (Sweden)", function(assert) {
	var digits = new Digits("sv_SE");
	assert.equal(digits.format(Infinity), "\u221e");
	assert.equal(digits.format(-Infinity), "-\u221e");
	assert.equal(digits.format(NaN), "\ufffd");
});

QUnit.test("format positive number sv_SE (Sweden)", function(assert) {
	var digits = new Digits("sv_SE");
	assert.equal(digits.format(0), "0");
	assert.equal(digits.format(0, 1, 1), "0,0");
	assert.equal(digits.format(0, 0, 0), "0");
	assert.equal(digits.format(0, 3, 3), "0,000");

	assert.equal(digits.format(0.123456), "0,123");
	assert.equal(digits.format(0.123456, 1, 1), "0,1");
	assert.equal(digits.format(0.123456, 2, 2), "0,12");
	assert.equal(digits.format(0.123456, 3, 3), "0,123");
	assert.equal(digits.format(0.123456, 4, 4), "0,1235");
	assert.equal(digits.format(0.123456, 5, 5), "0,12346");
	assert.equal(digits.format(0.123456, 6, 6), "0,123456");

	assert.equal(digits.format(0.654321), "0,654");
	assert.equal(digits.format(0.654321, 1, 1), "0,7");
	assert.equal(digits.format(0.654321, 2, 2), "0,65");
	assert.equal(digits.format(0.654321, 3, 3), "0,654");
	assert.equal(digits.format(0.654321, 4, 4), "0,6543");
	assert.equal(digits.format(0.654321, 5, 5), "0,65432");
	assert.equal(digits.format(0.654321, 6, 6), "0,654321");

	assert.equal(digits.format(0.999999), "1");
	assert.equal(digits.format(0.999999, 1, 1), "1,0");
	assert.equal(digits.format(0.999999, 2, 2), "1,00");
	assert.equal(digits.format(0.999999, 3, 3), "1,000");
	assert.equal(digits.format(0.999999, 4, 4), "1,0000");
	assert.equal(digits.format(0.999999, 5, 5), "1,00000");
	assert.equal(digits.format(0.999999, 6, 6), "0,999999");
	assert.equal(digits.format(0.999999, 7, 7), "0,9999990");

	assert.equal(digits.format(5, 9, 9), "5,000000000");
	assert.equal(digits.format(5.05, 9, 9), "5,050000000");
	assert.equal(digits.format(5.005, 9, 9), "5,005000000");
	assert.equal(digits.format(5.0005, 9, 9), "5,000500000");
	assert.equal(digits.format(5.055, 9, 9), "5,055000000");
	assert.equal(digits.format(5.0055, 9, 9), "5,005500000");
	assert.equal(digits.format(5.00055, 9, 9), "5,000550000");
	assert.equal(digits.format(5.5, 9, 9), "5,500000000");
	assert.equal(digits.format(5.55, 9, 9), "5,550000000");
	assert.equal(digits.format(5.555, 9, 9), "5,555000000");

	assert.equal(digits.format(9.98, 0, 0), "10");
	assert.equal(digits.format(9.98, 1, 1), "10,0");
	assert.equal(digits.format(9.98, 2, 2), "9,98");
	assert.equal(digits.format(9.98, 3, 3), "9,980");

	assert.equal(digits.format(99.98, 0, 0), "100");
	assert.equal(digits.format(99.98, 1, 1), "100,0");
	assert.equal(digits.format(99.98, 2, 2), "99,98");
	assert.equal(digits.format(99.98, 3, 3), "99,980");

	assert.equal(digits.format(500.126, 2, 2), "500,13");

	assert.equal(digits.format(9999.98, 0, 0), "10\u00a0000");
	assert.equal(digits.format(99999.98, 1, 1), "100\u00a0000,0");
	assert.equal(digits.format(999999.98, 2, 2), "999\u00a0999,98");
	assert.equal(digits.format(9999999.98, 3, 3), "9\u00a0999\u00a0999,980");

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

	assert.equal(digits.format(9.54), "9,54");
	assert.equal(digits.format(9.54, 1, 1), "9,5");
	assert.equal(digits.format(9.54, 0, 0), "10");
	assert.equal(digits.format(9.54, 3, 3), "9,540");

	assert.equal(digits.format(10.43), "10,43");
	assert.equal(digits.format(10.43, 1, 1), "10,4");
	assert.equal(digits.format(10.43, 0, 0), "10");
	assert.equal(digits.format(10.43, 3, 3), "10,430");

	assert.equal(digits.format(100.43), "100,43");
	assert.equal(digits.format(1000.43), "1\u00a0000,43");
	assert.equal(digits.format(100000.43), "100\u00a0000,43");
	assert.equal(digits.format(100000.43, 3, 3), "100\u00a0000,430");
	assert.equal(digits.format(100000000.43), "100\u00a0000\u00a0000,43");

	assert.equal(digits.format(42), "42");
	assert.equal(digits.format(42.23), "42,23");
	assert.equal(digits.format(42000), "42\u00a0000");
	assert.equal(digits.format(9999.99, 0, 0), "10\u00a0000");
	assert.equal(digits.format(9999.99, 1, 1), "10\u00a0000,0");
	assert.equal(digits.format(10000.1, 0, 0), "10\u00a0000");
	assert.equal(digits.format(10000.15, 1, 1), "10\u00a0000,2");
	assert.equal(digits.format(10000.14, 1, 1), "10\u00a0000,1");
	assert.equal(digits.format(10000.25, 1, 1), "10\u00a0000,2");
	assert.equal(digits.format(10000.255, 1, 1), "10\u00a0000,3");
});

QUnit.test("format negative number sv_SE (Sweden)", function(assert) {
	var digits = new Digits("sv_SE");

	assert.equal(digits.format(-0.123456), "-0,123");
	assert.equal(digits.format(-0.123456, 1, 1), "-0,1");
	assert.equal(digits.format(-0.123456, 2, 2), "-0,12");
	assert.equal(digits.format(-0.123456, 3, 3), "-0,123");
	assert.equal(digits.format(-0.123456, 4, 4), "-0,1235");
	assert.equal(digits.format(-0.123456, 5, 5), "-0,12346");
	assert.equal(digits.format(-0.123456, 6, 6), "-0,123456");

	assert.equal(digits.format(-0.654321), "-0,654");
	assert.equal(digits.format(-0.654321, 1, 1), "-0,7");
	assert.equal(digits.format(-0.654321, 2, 2), "-0,65");
	assert.equal(digits.format(-0.654321, 3, 3), "-0,654");
	assert.equal(digits.format(-0.654321, 4, 4), "-0,6543");
	assert.equal(digits.format(-0.654321, 5, 5), "-0,65432");
	assert.equal(digits.format(-0.654321, 6, 6), "-0,654321");

	assert.equal(digits.format(-0.999999), "-1");
	assert.equal(digits.format(-0.999999, 1, 1), "-1,0");
	assert.equal(digits.format(-0.999999, 2, 2), "-1,00");
	assert.equal(digits.format(-0.999999, 3, 3), "-1,000");
	assert.equal(digits.format(-0.999999, 4, 4), "-1,0000");
	assert.equal(digits.format(-0.999999, 5, 5), "-1,00000");
	assert.equal(digits.format(-0.999999, 6, 6), "-0,999999");
	assert.equal(digits.format(-0.999999, 7, 7), "-0,9999990");

	assert.equal(digits.format(-5, 9, 9), "-5,000000000");
	assert.equal(digits.format(-5.05, 9, 9), "-5,050000000");
	assert.equal(digits.format(-5.005, 9, 9), "-5,005000000");
	assert.equal(digits.format(-5.0005, 9, 9), "-5,000500000");
	assert.equal(digits.format(-5.055, 9, 9), "-5,055000000");
	assert.equal(digits.format(-5.0055, 9, 9), "-5,005500000");
	assert.equal(digits.format(-5.00055, 9, 9), "-5,000550000");
	assert.equal(digits.format(-5.5, 9, 9), "-5,500000000");
	assert.equal(digits.format(-5.55, 9, 9), "-5,550000000");
	assert.equal(digits.format(-5.555, 9, 9), "-5,555000000");

	assert.equal(digits.format(-9.98, 0, 0), "-10");
	assert.equal(digits.format(-9.98, 1, 1), "-10,0");
	assert.equal(digits.format(-9.98, 2, 2), "-9,98");
	assert.equal(digits.format(-9.98, 3, 3), "-9,980");

	assert.equal(digits.format(-99.98, 0, 0), "-100");
	assert.equal(digits.format(-99.98, 1, 1), "-100,0");
	assert.equal(digits.format(-99.98, 2, 2), "-99,98");
	assert.equal(digits.format(-99.98, 3, 3), "-99,980");

	assert.equal(digits.format(-500.126, 2, 2), "-500,13");

	assert.equal(digits.format(-9999.98, 0, 0), "-10\u00a0000");
	assert.equal(digits.format(-99999.98, 1, 1), "-100\u00a0000,0");
	assert.equal(digits.format(-999999.98, 2, 2), "-999\u00a0999,98");
	assert.equal(digits.format(-9999999.98, 3, 3), "-9\u00a0999\u00a0999,980");

	assert.equal(digits.format(-0.65), "-0,65");
	assert.equal(digits.format(-0.65, 1, 1), "-0,6");
	assert.equal(digits.format(-0.65, 0, 0), "-1");
	assert.equal(digits.format(-0.65, 3, 3), "-0,650");

	assert.equal(digits.format(-0.75), "-0,75");
	assert.equal(digits.format(-0.75, 1, 1), "-0,8");
	assert.equal(digits.format(-0.75, 0, 0), "-1");
	assert.equal(digits.format(-0.75, 3, 3), "-0,750");

	assert.equal(digits.format(-1.6421), "-1,642");
	assert.equal(digits.format(-1.6421, 1, 1), "-1,6");
	assert.equal(digits.format(-1.6421, 0, 0), "-2");
	assert.equal(digits.format(-1.6421, 3, 3), "-1,642");
	assert.equal(digits.format(-1.6421, 0, 4), "-1,6421");
	assert.equal(digits.format(-1.6421, 0, 5), "-1,6421");
	assert.equal(digits.format(-1.6421, 5, 5), "-1,64210");

	assert.equal(digits.format(-7.54), "-7,54");
	assert.equal(digits.format(-7.54, 1, 1), "-7,5");
	assert.equal(digits.format(-7.54, 0, 0), "-8");
	assert.equal(digits.format(-7.54, 3, 3), "-7,540");

	assert.equal(digits.format(-9.54), "-9,54");
	assert.equal(digits.format(-9.54, 1, 1), "-9,5");
	assert.equal(digits.format(-9.54, 0, 0), "-10");
	assert.equal(digits.format(-9.54, 3, 3), "-9,540");

	assert.equal(digits.format(-10.43), "-10,43");
	assert.equal(digits.format(-10.43, 1, 1), "-10,4");
	assert.equal(digits.format(-10.43, 0, 0), "-10");
	assert.equal(digits.format(-10.43, 3, 3), "-10,430");

	assert.equal(digits.format(-100.43), "-100,43");
	assert.equal(digits.format(-1000.43), "-1\u00a0000,43");
	assert.equal(digits.format(-100000.43), "-100\u00a0000,43");
	assert.equal(digits.format(-100000.43, 3, 3), "-100\u00a0000,430");
	assert.equal(digits.format(-100000000.43), "-100\u00a0000\u00a0000,43");

	assert.equal(digits.format(-42), "-42");
	assert.equal(digits.format(-42.23), "-42,23");
	assert.equal(digits.format(-42000), "-42\u00a0000");
	assert.equal(digits.format(-9999.99, 0, 0), "-10\u00a0000");
	assert.equal(digits.format(-9999.99, 1, 1), "-10\u00a0000,0");
	assert.equal(digits.format(-10000.1, 0, 0), "-10\u00a0000");
	assert.equal(digits.format(-10000.15, 1, 1), "-10\u00a0000,2");
	assert.equal(digits.format(-10000.14, 1, 1), "-10\u00a0000,1");
	assert.equal(digits.format(-10000.25, 1, 1), "-10\u00a0000,2");
	assert.equal(digits.format(-10000.255, 1, 1), "-10\u00a0000,3");
});

QUnit.test("format NaN & Infinity en_US (United States)", function(assert) {
	var digits = new Digits("en_US");
	assert.equal(digits.format(Infinity), "\u221e");
	assert.equal(digits.format(-Infinity), "-\u221e");
	assert.equal(digits.format(NaN), "\ufffd");
});

QUnit.test("format positive number en_US (United States)", function(assert) {
	var digits = new Digits("en_US");
	assert.equal(digits.format(0), "0");
	assert.equal(digits.format(0, 1, 1), "0.0");
	assert.equal(digits.format(0, 0, 0), "0");
	assert.equal(digits.format(0, 3, 3), "0.000");

	assert.equal(digits.format(0.123456), "0.123");
	assert.equal(digits.format(0.123456, 1, 1), "0.1");
	assert.equal(digits.format(0.123456, 2, 2), "0.12");
	assert.equal(digits.format(0.123456, 3, 3), "0.123");
	assert.equal(digits.format(0.123456, 4, 4), "0.1235");
	assert.equal(digits.format(0.123456, 5, 5), "0.12346");
	assert.equal(digits.format(0.123456, 6, 6), "0.123456");

	assert.equal(digits.format(0.654321), "0.654");
	assert.equal(digits.format(0.654321, 1, 1), "0.7");
	assert.equal(digits.format(0.654321, 2, 2), "0.65");
	assert.equal(digits.format(0.654321, 3, 3), "0.654");
	assert.equal(digits.format(0.654321, 4, 4), "0.6543");
	assert.equal(digits.format(0.654321, 5, 5), "0.65432");
	assert.equal(digits.format(0.654321, 6, 6), "0.654321");

	assert.equal(digits.format(0.999999), "1");
	assert.equal(digits.format(0.999999, 1, 1), "1.0");
	assert.equal(digits.format(0.999999, 2, 2), "1.00");
	assert.equal(digits.format(0.999999, 3, 3), "1.000");
	assert.equal(digits.format(0.999999, 4, 4), "1.0000");
	assert.equal(digits.format(0.999999, 5, 5), "1.00000");
	assert.equal(digits.format(0.999999, 6, 6), "0.999999");
	assert.equal(digits.format(0.999999, 7, 7), "0.9999990");

	assert.equal(digits.format(5, 9, 9), "5.000000000");
	assert.equal(digits.format(5.05, 9, 9), "5.050000000");
	assert.equal(digits.format(5.005, 9, 9), "5.005000000");
	assert.equal(digits.format(5.0005, 9, 9), "5.000500000");
	assert.equal(digits.format(5.055, 9, 9), "5.055000000");
	assert.equal(digits.format(5.0055, 9, 9), "5.005500000");
	assert.equal(digits.format(5.00055, 9, 9), "5.000550000");
	assert.equal(digits.format(5.5, 9, 9), "5.500000000");
	assert.equal(digits.format(5.55, 9, 9), "5.550000000");
	assert.equal(digits.format(5.555, 9, 9), "5.555000000");

	assert.equal(digits.format(9.98, 0, 0), "10");
	assert.equal(digits.format(9.98, 1, 1), "10.0");
	assert.equal(digits.format(9.98, 2, 2), "9.98");
	assert.equal(digits.format(9.98, 3, 3), "9.980");

	assert.equal(digits.format(99.98, 0, 0), "100");
	assert.equal(digits.format(99.98, 1, 1), "100.0");
	assert.equal(digits.format(99.98, 2, 2), "99.98");
	assert.equal(digits.format(99.98, 3, 3), "99.980");

	assert.equal(digits.format(500.126, 2, 2), "500.13");

	assert.equal(digits.format(9999.98, 0, 0), "10,000");
	assert.equal(digits.format(99999.98, 1, 1), "100,000.0");
	assert.equal(digits.format(999999.98, 2, 2), "999,999.98");
	assert.equal(digits.format(9999999.98, 3, 3), "9,999,999.980");

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

	assert.equal(digits.format(9.54), "9.54");
	assert.equal(digits.format(9.54, 1, 1), "9.5");
	assert.equal(digits.format(9.54, 0, 0), "10");
	assert.equal(digits.format(9.54, 3, 3), "9.540");

	assert.equal(digits.format(10.43), "10.43");
	assert.equal(digits.format(10.43, 1, 1), "10.4");
	assert.equal(digits.format(10.43, 0, 0), "10");
	assert.equal(digits.format(10.43, 3, 3), "10.430");

	assert.equal(digits.format(100.43), "100.43");
	assert.equal(digits.format(1000.43), "1,000.43");
	assert.equal(digits.format(100000.43), "100,000.43");
	assert.equal(digits.format(100000.43, 3, 3), "100,000.430");
	assert.equal(digits.format(100000000.43), "100,000,000.43");

	assert.equal(digits.format(42), "42");
	assert.equal(digits.format(42.23), "42.23");
	assert.equal(digits.format(42000), "42,000");
	assert.equal(digits.format(9999.99, 0, 0), "10,000");
	assert.equal(digits.format(9999.99, 1, 1), "10,000.0");
	assert.equal(digits.format(10000.1, 0, 0), "10,000");
	assert.equal(digits.format(10000.15, 1, 1), "10,000.2");
	assert.equal(digits.format(10000.14, 1, 1), "10,000.1");
	assert.equal(digits.format(10000.25, 1, 1), "10,000.2");
	assert.equal(digits.format(10000.255, 1, 1), "10,000.3");
});

QUnit.test("format negative number en_US (United States)", function(assert) {
	var digits = new Digits("en_US");

	assert.equal(digits.format(-0.123456), "-0.123");
	assert.equal(digits.format(-0.123456, 1, 1), "-0.1");
	assert.equal(digits.format(-0.123456, 2, 2), "-0.12");
	assert.equal(digits.format(-0.123456, 3, 3), "-0.123");
	assert.equal(digits.format(-0.123456, 4, 4), "-0.1235");
	assert.equal(digits.format(-0.123456, 5, 5), "-0.12346");
	assert.equal(digits.format(-0.123456, 6, 6), "-0.123456");

	assert.equal(digits.format(-0.654321), "-0.654");
	assert.equal(digits.format(-0.654321, 1, 1), "-0.7");
	assert.equal(digits.format(-0.654321, 2, 2), "-0.65");
	assert.equal(digits.format(-0.654321, 3, 3), "-0.654");
	assert.equal(digits.format(-0.654321, 4, 4), "-0.6543");
	assert.equal(digits.format(-0.654321, 5, 5), "-0.65432");
	assert.equal(digits.format(-0.654321, 6, 6), "-0.654321");

	assert.equal(digits.format(-0.999999), "-1");
	assert.equal(digits.format(-0.999999, 1, 1), "-1.0");
	assert.equal(digits.format(-0.999999, 2, 2), "-1.00");
	assert.equal(digits.format(-0.999999, 3, 3), "-1.000");
	assert.equal(digits.format(-0.999999, 4, 4), "-1.0000");
	assert.equal(digits.format(-0.999999, 5, 5), "-1.00000");
	assert.equal(digits.format(-0.999999, 6, 6), "-0.999999");
	assert.equal(digits.format(-0.999999, 7, 7), "-0.9999990");

	assert.equal(digits.format(-5, 9, 9), "-5.000000000");
	assert.equal(digits.format(-5.05, 9, 9), "-5.050000000");
	assert.equal(digits.format(-5.005, 9, 9), "-5.005000000");
	assert.equal(digits.format(-5.0005, 9, 9), "-5.000500000");
	assert.equal(digits.format(-5.055, 9, 9), "-5.055000000");
	assert.equal(digits.format(-5.0055, 9, 9), "-5.005500000");
	assert.equal(digits.format(-5.00055, 9, 9), "-5.000550000");
	assert.equal(digits.format(-5.5, 9, 9), "-5.500000000");
	assert.equal(digits.format(-5.55, 9, 9), "-5.550000000");
	assert.equal(digits.format(-5.555, 9, 9), "-5.555000000");

	assert.equal(digits.format(-9.98, 0, 0), "-10");
	assert.equal(digits.format(-9.98, 1, 1), "-10.0");
	assert.equal(digits.format(-9.98, 2, 2), "-9.98");
	assert.equal(digits.format(-9.98, 3, 3), "-9.980");

	assert.equal(digits.format(-99.98, 0, 0), "-100");
	assert.equal(digits.format(-99.98, 1, 1), "-100.0");
	assert.equal(digits.format(-99.98, 2, 2), "-99.98");
	assert.equal(digits.format(-99.98, 3, 3), "-99.980");

	assert.equal(digits.format(-500.126, 2, 2), "-500.13");

	assert.equal(digits.format(-9999.98, 0, 0), "-10,000");
	assert.equal(digits.format(-99999.98, 1, 1), "-100,000.0");
	assert.equal(digits.format(-999999.98, 2, 2), "-999,999.98");
	assert.equal(digits.format(-9999999.98, 3, 3), "-9,999,999.980");

	assert.equal(digits.format(-0.65), "-0.65");
	assert.equal(digits.format(-0.65, 1, 1), "-0.6");
	assert.equal(digits.format(-0.65, 0, 0), "-1");
	assert.equal(digits.format(-0.65, 3, 3), "-0.650");

	assert.equal(digits.format(-0.75), "-0.75");
	assert.equal(digits.format(-0.75, 1, 1), "-0.8");
	assert.equal(digits.format(-0.75, 0, 0), "-1");
	assert.equal(digits.format(-0.75, 3, 3), "-0.750");

	assert.equal(digits.format(-1.6421), "-1.642");
	assert.equal(digits.format(-1.6421, 1, 1), "-1.6");
	assert.equal(digits.format(-1.6421, 0, 0), "-2");
	assert.equal(digits.format(-1.6421, 3, 3), "-1.642");
	assert.equal(digits.format(-1.6421, 0, 4), "-1.6421");
	assert.equal(digits.format(-1.6421, 0, 5), "-1.6421");
	assert.equal(digits.format(-1.6421, 5, 5), "-1.64210");

	assert.equal(digits.format(-7.54), "-7.54");
	assert.equal(digits.format(-7.54, 1, 1), "-7.5");
	assert.equal(digits.format(-7.54, 0, 0), "-8");
	assert.equal(digits.format(-7.54, 3, 3), "-7.540");

	assert.equal(digits.format(-9.54), "-9.54");
	assert.equal(digits.format(-9.54, 1, 1), "-9.5");
	assert.equal(digits.format(-9.54, 0, 0), "-10");
	assert.equal(digits.format(-9.54, 3, 3), "-9.540");

	assert.equal(digits.format(-10.43), "-10.43");
	assert.equal(digits.format(-10.43, 1, 1), "-10.4");
	assert.equal(digits.format(-10.43, 0, 0), "-10");
	assert.equal(digits.format(-10.43, 3, 3), "-10.430");

	assert.equal(digits.format(-100.43), "-100.43");
	assert.equal(digits.format(-1000.43), "-1,000.43");
	assert.equal(digits.format(-100000.43), "-100,000.43");
	assert.equal(digits.format(-100000.43, 3, 3), "-100,000.430");
	assert.equal(digits.format(-100000000.43), "-100,000,000.43");

	assert.equal(digits.format(-42), "-42");
	assert.equal(digits.format(-42.23), "-42.23");
	assert.equal(digits.format(-42000), "-42,000");
	assert.equal(digits.format(-9999.99, 0, 0), "-10,000");
	assert.equal(digits.format(-9999.99, 1, 1), "-10,000.0");
	assert.equal(digits.format(-10000.1, 0, 0), "-10,000");
	assert.equal(digits.format(-10000.15, 1, 1), "-10,000.2");
	assert.equal(digits.format(-10000.14, 1, 1), "-10,000.1");
	assert.equal(digits.format(-10000.25, 1, 1), "-10,000.2");
	assert.equal(digits.format(-10000.255, 1, 1), "-10,000.3");
});

QUnit.test("format NaN & Infinity ar_EG (Egypt)", function(assert) {
	var digits = new Digits("ar_EG");
	assert.equal(digits.format(Infinity), "\u221e");
	assert.equal(digits.format(-Infinity), "\u221e-");
	assert.equal(digits.format(NaN), "\ufffd");
});

QUnit.test("format positive number ar_EG (Egypt)", function(assert) {
	var digits = new Digits("ar_EG");

	assert.equal(digits.format(0), "0");
	assert.equal(digits.format(0, 1, 1), "0.0");
	assert.equal(digits.format(0, 0, 0), "0");
	assert.equal(digits.format(0, 3, 3), "0.000");

	assert.equal(digits.format(0.123456), "0.123");
	assert.equal(digits.format(0.123456, 1, 1), "0.1");
	assert.equal(digits.format(0.123456, 2, 2), "0.12");
	assert.equal(digits.format(0.123456, 3, 3), "0.123");
	assert.equal(digits.format(0.123456, 4, 4), "0.1235");
	assert.equal(digits.format(0.123456, 5, 5), "0.12346");
	assert.equal(digits.format(0.123456, 6, 6), "0.123456");

	assert.equal(digits.format(0.654321), "0.654");
	assert.equal(digits.format(0.654321, 1, 1), "0.7");
	assert.equal(digits.format(0.654321, 2, 2), "0.65");
	assert.equal(digits.format(0.654321, 3, 3), "0.654");
	assert.equal(digits.format(0.654321, 4, 4), "0.6543");
	assert.equal(digits.format(0.654321, 5, 5), "0.65432");
	assert.equal(digits.format(0.654321, 6, 6), "0.654321");

	assert.equal(digits.format(0.999999), "1");
	assert.equal(digits.format(0.999999, 1, 1), "1.0");
	assert.equal(digits.format(0.999999, 2, 2), "1.00");
	assert.equal(digits.format(0.999999, 3, 3), "1.000");
	assert.equal(digits.format(0.999999, 4, 4), "1.0000");
	assert.equal(digits.format(0.999999, 5, 5), "1.00000");
	assert.equal(digits.format(0.999999, 6, 6), "0.999999");
	assert.equal(digits.format(0.999999, 7, 7), "0.9999990");

	assert.equal(digits.format(5, 9, 9), "5.000000000");
	assert.equal(digits.format(5.05, 9, 9), "5.050000000");
	assert.equal(digits.format(5.005, 9, 9), "5.005000000");
	assert.equal(digits.format(5.0005, 9, 9), "5.000500000");
	assert.equal(digits.format(5.055, 9, 9), "5.055000000");
	assert.equal(digits.format(5.0055, 9, 9), "5.005500000");
	assert.equal(digits.format(5.00055, 9, 9), "5.000550000");
	assert.equal(digits.format(5.5, 9, 9), "5.500000000");
	assert.equal(digits.format(5.55, 9, 9), "5.550000000");
	assert.equal(digits.format(5.555, 9, 9), "5.555000000");

	assert.equal(digits.format(9.98, 0, 0), "10");
	assert.equal(digits.format(9.98, 1, 1), "10.0");
	assert.equal(digits.format(9.98, 2, 2), "9.98");
	assert.equal(digits.format(9.98, 3, 3), "9.980");

	assert.equal(digits.format(99.98, 0, 0), "100");
	assert.equal(digits.format(99.98, 1, 1), "100.0");
	assert.equal(digits.format(99.98, 2, 2), "99.98");
	assert.equal(digits.format(99.98, 3, 3), "99.980");

	assert.equal(digits.format(500.126, 2, 2), "500.13");

	assert.equal(digits.format(9999.98, 0, 0), "10,000");
	assert.equal(digits.format(99999.98, 1, 1), "100,000.0");
	assert.equal(digits.format(999999.98, 2, 2), "999,999.98");
	assert.equal(digits.format(9999999.98, 3, 3), "9,999,999.980");

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

	assert.equal(digits.format(9.54), "9.54");
	assert.equal(digits.format(9.54, 1, 1), "9.5");
	assert.equal(digits.format(9.54, 0, 0), "10");
	assert.equal(digits.format(9.54, 3, 3), "9.540");

	assert.equal(digits.format(10.43), "10.43");
	assert.equal(digits.format(10.43, 1, 1), "10.4");
	assert.equal(digits.format(10.43, 0, 0), "10");
	assert.equal(digits.format(10.43, 3, 3), "10.430");

	assert.equal(digits.format(100.43), "100.43");
	assert.equal(digits.format(1000.43), "1,000.43");
	assert.equal(digits.format(100000.43), "100,000.43");
	assert.equal(digits.format(100000.43, 3, 3), "100,000.430");
	assert.equal(digits.format(100000000.43), "100,000,000.43");

	assert.equal(digits.format(42), "42");
	assert.equal(digits.format(42.23), "42.23");
	assert.equal(digits.format(42000), "42,000");
	assert.equal(digits.format(9999.99, 0, 0), "10,000");
	assert.equal(digits.format(9999.99, 1, 1), "10,000.0");
	assert.equal(digits.format(10000.1, 0, 0), "10,000");
	assert.equal(digits.format(10000.15, 1, 1), "10,000.2");
	assert.equal(digits.format(10000.14, 1, 1), "10,000.1");
	assert.equal(digits.format(10000.25, 1, 1), "10,000.2");
	assert.equal(digits.format(10000.255, 1, 1), "10,000.3");
});

QUnit.test("format negative number ar_EG (Egypt)", function(assert) {
	var digits = new Digits("ar_EG");

	assert.equal(digits.format(-0.123456), "0.123-");
	assert.equal(digits.format(-0.123456, 1, 1), "0.1-");
	assert.equal(digits.format(-0.123456, 2, 2), "0.12-");
	assert.equal(digits.format(-0.123456, 3, 3), "0.123-");
	assert.equal(digits.format(-0.123456, 4, 4), "0.1235-");
	assert.equal(digits.format(-0.123456, 5, 5), "0.12346-");
	assert.equal(digits.format(-0.123456, 6, 6), "0.123456-");

	assert.equal(digits.format(-0.654321), "0.654-");
	assert.equal(digits.format(-0.654321, 1, 1), "0.7-");
	assert.equal(digits.format(-0.654321, 2, 2), "0.65-");
	assert.equal(digits.format(-0.654321, 3, 3), "0.654-");
	assert.equal(digits.format(-0.654321, 4, 4), "0.6543-");
	assert.equal(digits.format(-0.654321, 5, 5), "0.65432-");
	assert.equal(digits.format(-0.654321, 6, 6), "0.654321-");

	assert.equal(digits.format(-0.999999), "1-");
	assert.equal(digits.format(-0.999999, 1, 1), "1.0-");
	assert.equal(digits.format(-0.999999, 2, 2), "1.00-");
	assert.equal(digits.format(-0.999999, 3, 3), "1.000-");
	assert.equal(digits.format(-0.999999, 4, 4), "1.0000-");
	assert.equal(digits.format(-0.999999, 5, 5), "1.00000-");
	assert.equal(digits.format(-0.999999, 6, 6), "0.999999-");
	assert.equal(digits.format(-0.999999, 7, 7), "0.9999990-");

	assert.equal(digits.format(-5, 9, 9), "5.000000000-");
	assert.equal(digits.format(-5.05, 9, 9), "5.050000000-");
	assert.equal(digits.format(-5.005, 9, 9), "5.005000000-");
	assert.equal(digits.format(-5.0005, 9, 9), "5.000500000-");
	assert.equal(digits.format(-5.055, 9, 9), "5.055000000-");
	assert.equal(digits.format(-5.0055, 9, 9), "5.005500000-");
	assert.equal(digits.format(-5.00055, 9, 9), "5.000550000-");
	assert.equal(digits.format(-5.5, 9, 9), "5.500000000-");
	assert.equal(digits.format(-5.55, 9, 9), "5.550000000-");
	assert.equal(digits.format(-5.555, 9, 9), "5.555000000-");

	assert.equal(digits.format(-9.98, 0, 0), "10-");
	assert.equal(digits.format(-9.98, 1, 1), "10.0-");
	assert.equal(digits.format(-9.98, 2, 2), "9.98-");
	assert.equal(digits.format(-9.98, 3, 3), "9.980-");

	assert.equal(digits.format(-99.98, 0, 0), "100-");
	assert.equal(digits.format(-99.98, 1, 1), "100.0-");
	assert.equal(digits.format(-99.98, 2, 2), "99.98-");
	assert.equal(digits.format(-99.98, 3, 3), "99.980-");

	assert.equal(digits.format(-500.126, 2, 2), "500.13-");

	assert.equal(digits.format(-9999.98, 0, 0), "10,000-");
	assert.equal(digits.format(-99999.98, 1, 1), "100,000.0-");
	assert.equal(digits.format(-999999.98, 2, 2), "999,999.98-");
	assert.equal(digits.format(-9999999.98, 3, 3), "9,999,999.980-");

	assert.equal(digits.format(-0.65), "0.65-");
	assert.equal(digits.format(-0.65, 1, 1), "0.6-");
	assert.equal(digits.format(-0.65, 0, 0), "1-");
	assert.equal(digits.format(-0.65, 3, 3), "0.650-");

	assert.equal(digits.format(-0.75), "0.75-");
	assert.equal(digits.format(-0.75, 1, 1), "0.8-");
	assert.equal(digits.format(-0.75, 0, 0), "1-");
	assert.equal(digits.format(-0.75, 3, 3), "0.750-");

	assert.equal(digits.format(-1.6421), "1.642-");
	assert.equal(digits.format(-1.6421, 1, 1), "1.6-");
	assert.equal(digits.format(-1.6421, 0, 0), "2-");
	assert.equal(digits.format(-1.6421, 3, 3), "1.642-");
	assert.equal(digits.format(-1.6421, 0, 4), "1.6421-");
	assert.equal(digits.format(-1.6421, 0, 5), "1.6421-");
	assert.equal(digits.format(-1.6421, 5, 5), "1.64210-");

	assert.equal(digits.format(-7.54), "7.54-");
	assert.equal(digits.format(-7.54, 1, 1), "7.5-");
	assert.equal(digits.format(-7.54, 0, 0), "8-");
	assert.equal(digits.format(-7.54, 3, 3), "7.540-");

	assert.equal(digits.format(-9.54), "9.54-");
	assert.equal(digits.format(-9.54, 1, 1), "9.5-");
	assert.equal(digits.format(-9.54, 0, 0), "10-");
	assert.equal(digits.format(-9.54, 3, 3), "9.540-");

	assert.equal(digits.format(-10.43), "10.43-");
	assert.equal(digits.format(-10.43, 1, 1), "10.4-");
	assert.equal(digits.format(-10.43, 0, 0), "10-");
	assert.equal(digits.format(-10.43, 3, 3), "10.430-");

	assert.equal(digits.format(-100.43), "100.43-");
	assert.equal(digits.format(-1000.43), "1,000.43-");
	assert.equal(digits.format(-100000.43), "100,000.43-");
	assert.equal(digits.format(-100000.43, 3, 3), "100,000.430-");
	assert.equal(digits.format(-100000000.43), "100,000,000.43-");

	assert.equal(digits.format(-42), "42-");
	assert.equal(digits.format(-42.23), "42.23-");
	assert.equal(digits.format(-42000), "42,000-");
	assert.equal(digits.format(-9999.99, 0, 0), "10,000-");
	assert.equal(digits.format(-9999.99, 1, 1), "10,000.0-");
	assert.equal(digits.format(-10000.1, 0, 0), "10,000-");
	assert.equal(digits.format(-10000.15, 1, 1), "10,000.2-");
	assert.equal(digits.format(-10000.14, 1, 1), "10,000.1-");
	assert.equal(digits.format(-10000.25, 1, 1), "10,000.2-");
	assert.equal(digits.format(-10000.255, 1, 1), "10,000.3-");
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

	digits = new Digits("sv");
	assert.equal(Digits.indexByISO2(digits.locale), "sv");

	digits = new Digits("th_TH_TH");
	assert.equal(Digits.indexByISO2(digits.locale), "th_TH_TH");
});

QUnit.test("indexByISO3", function(assert) {
	var digits = new Digits("sv_SE");
	assert.equal(Digits.indexByISO3(digits.locale), "swe_SWE");

	digits = new Digits("sv");
	assert.equal(Digits.indexByISO3(digits.locale), "swe");

	digits = new Digits("th_TH_TH");
	assert.equal(Digits.indexByISO3(digits.locale), "tha_THA");
});

QUnit.test("getCodeList", function(assert) {
	var codeList = Digits.getCodeList();
	assert.equal(codeList.length, 152);
	assert.ok(codeList[0].codeISO2 !== undefined);
	assert.ok(codeList[0].codeISO3 !== undefined);
	assert.ok(codeList[0].language !== undefined);
	assert.ok(codeList[0].country !== undefined);
});

QUnit.test("Default fallback locale en_US (United States)", function(assert) {
	var digits = new Digits();
	assert.equal(digits.getCountry(), "US");
	assert.equal(digits.getLanguage(), "en");

	digits = new Digits("aa_BB");
	assert.equal(digits.getCountry(), "US");
	assert.equal(digits.getLanguage(), "en");
});

QUnit.test("Set fallback locale to sv_SE (Sweden)", function(assert) {
	var fallback = new Digits("sv_SE");
	Digits.setFallbackLocale(fallback.locale);

	var digits = new Digits();
	assert.equal(digits.getCountry(), "SE");
	assert.equal(digits.getLanguage(), "sv");

	digits = new Digits("aa_BB");
	assert.equal(digits.getCountry(), "SE");
	assert.equal(digits.getLanguage(), "sv");
});

QUnit.test("Define custom locale (xx_YY)", function(assert) {
	assert.equal(Digits.define(Digits.localeFactory("xx", "YY", "", "xxx", "YYY", "Whatever", "Whereever", "", "_", "=", 0, 3, [3], true, false, "-#", "#", "#", "\ufffd", "\u221e", Digits.roundHalfToEven, [0,1,2,3,4,5,6,7,8,9]), false), true);
	var digits = new Digits("xx_YY");
	assert.equal(digits.getCountry(), "YY");
	assert.equal(digits.getLanguage(), "xx");
	assert.equal(digits.getDisplayCountry(), "Whereever");
	assert.equal(digits.getDisplayLanguage(), "Whatever");
	assert.equal(digits.format(10.43, 1, 1), "10_4");
});
