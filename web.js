var body = document.getElementById('results');
var dataType, delimiter, functionList, operator, results, spaceSplit, temp, text,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

dataType = ['void', 'int', 'float', 'string', 'char'];

operator = ['<=', '>=', '!=', '<>', '+', '-', '*', '/', '<', '=', '>'];

delimiter = ['(', ')', '{', '}', ';', '.', ',', ':'];

functionList = ['printf', 'scanf'];

results = {
  op: [],
  id: [],
  del: [],
  lit: []
};

text = 'position = initial + rate * 60';

body.innerHTML += ("[INPUT STRING] => `" + text + "` <br/>");

spaceSplit = text;

_.each(operator, function(val, index) {
  return spaceSplit = spaceSplit.replace(val, " " + val + " ");
});

spaceSplit = spaceSplit.split(' ');

temp = [];

_.each(spaceSplit, function(val, index) {
  if (val !== '') {
    if (!isNaN(val)) {
      return results.lit.push(val);
    } else if (indexOf.call(operator, val) >= 0) {
      return results.op.push(val);
    } else if (indexOf.call(delimiter, val) >= 0) {
      return results.del.push(val);
    } else {
      text = text.replace(val, "id" + (results.op.length + 1));
      return results.id.push("id" + (results.op.length + 1));
    }
  }
});

body.innerHTML += ('<br/>');
_.each(results, function(val, ind){
    body.innerHTML += (ind +' => [' + val + ']<br/>');
});
body.innerHTML += ('<br/>');


body.innerHTML += ("[OUTPUT] => `" + text + "`");
