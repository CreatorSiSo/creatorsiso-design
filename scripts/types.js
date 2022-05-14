import { rename } from 'node:fs'

rename('./dist/src', './dist/types', function (err) {
	if (err) {
		console.log(err)
	} else {
		console.log('Directory rename successful')
	}
})
