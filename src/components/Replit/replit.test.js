function isValid(stale, latest, otjson) {
  let position = 0;
  let newStale = stale;
  try {
    JSON.parse(otjson).forEach(ot => {

      switch (ot.op) {
        case 'skip':
          if ((position + ot.count) > newStale.length) {
            throw new Error('wrong skip count');
          }
          position += ot.count;
          break;
        case 'delete':
          // console.log('delete from', position, 'to', position + ot.count, `'${newStale.slice(position, position + ot.count)}'`);
          if ((position + ot.count) > newStale.length) {
            throw new Error('wrong delete');
          }
          // console.log(position + ot.count, newStale.length - 1);
          newStale = newStale.slice(0, position) + newStale.slice(position + ot.count, newStale.length);
          break;
        case 'insert':
          // console.log('insert between', [0, position], 'and', [position, newStale.length]);
          // console.log(`'${newStale.slice(0, position)}' + '${ot.chars}' +  '${newStale.slice(position, newStale.length)}'`);
          newStale = newStale.slice(0, position) + ot.chars + newStale.slice(position, newStale.length);
          position += ot.chars.length;
          break;
        default:
          throw new Error('wrong OT', ot.op);
      }
    });
  } catch (error) {
    // console.log('error', String(error));
    return false;
  }

  return newStale === latest;
}

describe('isValid', () => {

  test('1', () => {
    expect(isValid(
      'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
      'Repl.it uses operational transformations.',
      '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]'
    )).toEqual(true);
  })

  test('2', () => {
    expect(isValid(
      'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
      'Repl.it uses operational transformations.',
      '[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}]'
    )).toEqual(false);
  })

  test('3', () => {
    expect(isValid(
      'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
      'Repl.it uses operational transformations.',
      '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "skip", "count": 2}]'
    )).toEqual(false);
  })

  test('4', () => {
    expect(isValid(
      'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
      'Repl.it uses operational transformations.',
      '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "skip", "count": 2}]'
    )).toEqual(false);
  })

  test('5', () => {
    expect(isValid(
      'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
      'We use operational transformations to keep everyone in a multiplayer repl in sync.',
      '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
    )).toEqual(true);
  })

  test('6', () => {
    expect(isValid(
      'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
      'We can use operational transformations to keep everyone in a multiplayer repl in sync.',
      '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
    )).toEqual(false);
  })

  test('7', () => {
    expect(isValid(
      'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
      'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
      '[]'
    )).toEqual(true);
  })
});