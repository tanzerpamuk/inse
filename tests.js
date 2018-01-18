'use-strict';

// Testing the testing stuff - Should always pass
QUnit.test('isEven()', function(assert) {
    assert.ok(isEven(0), 'Zero is an even number');
    assert.ok(isEven(4), 'Four is an even number');
    assert.ok(!isEven(7), 'Seven is odd');
    assert.ok(!isEven(-3), ' -3 is odd');
    assert.ok(isEven(-10), ' -10 is even');
});