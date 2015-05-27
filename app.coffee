fs = require 'fs'
StringDecoder = require('string_decoder').StringDecoder
_ = require 'underscore'

dataType = ['void','int','float','string','char']
operator = ['<=', '>=', '!=', '<>', '+', '-', '*','/', '<', '=', '>']
delimiter = ['(',')','{','}',';','.',',',':']
functionList = ['printf','scanf']

results = { op : [], id : [], del: [], lit : [] }

fs.readFile 'src/code.ar', (err, file) ->

	decoder = new StringDecoder('utf8')

	text = decoder.write file

	console.dir "[INPUT STRING] => `#{text}`"

	spaceSplit = text

	_.each operator, (val, index) ->
		spaceSplit = spaceSplit.replace val, " #{val} "

	spaceSplit = spaceSplit.split ' '


	temp = []

	_.each spaceSplit, (val, index) ->
		if val isnt ''
			if not isNaN val
				results.lit.push val 
			else if val in operator
				results.op.push val
			else if val in delimiter
				results.del.push val 
			else
				text = text.replace val, "id" + (results.op.length + 1)
				results.id.push "id" + (results.op.length + 1)

	console.dir results
	console.dir "[OUTPUT] => `" + text + "`"



	
