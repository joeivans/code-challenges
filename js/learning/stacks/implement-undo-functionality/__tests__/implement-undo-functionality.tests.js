const {TextEditor} = require('../index');

describe('Implement Undo Functionality', function () {
  const INSERT = 'INSERT';
  const DELETE = 'DELETE';
  const UNDO = 'UNDO';

  it(`INSERT 'a','b' => 'ab'`, function () {
    const result = new TextEditor().performEditorActions([
      [INSERT, 'a'],
      [INSERT, 'b'],
    ]);
    expect(result).toEqual('ab');
  });

  it(`INSERT 'a','b' UNDO => 'a'`, function () {
    const result = new TextEditor().performEditorActions([
      [INSERT, 'a'],
      [INSERT, 'b'],
      [UNDO]
    ]);
    expect(result).toEqual('a');
  });

  it(`INSERT 'a' UNDO => ''`, function () {
    const result = new TextEditor().performEditorActions([
      [INSERT, 'a'],
      [UNDO]
    ]);
    expect(result).toEqual('');
  });

  it(`UNDO => ''`, function () {
    const result = new TextEditor().performEditorActions([
      [UNDO],
    ]);
    expect(result).toEqual('');
  });

  it(`[[]] => ''`, function () {
    const result = new TextEditor().performEditorActions([
      [],
    ]);
    expect(result).toEqual('');
  });
});
