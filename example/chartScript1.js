let before = get('before')
let after = get('after')
let ys = get('ys')
let data = []

before.map((e, i) => data.push({
	x: e, y: ys[i], type: 'before'
}))

after.map((e, i) => data.push({
	x: e, y: ys[i], type: 'after'
}))

set('data', data)
end()