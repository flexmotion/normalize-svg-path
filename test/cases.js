
exports['line-to'] = [
	{
		from: 'L100 100',
		to: 'C0,0 100,100 100,100'
	},
	{
		from: 'L50 50 100 0',
		to: 'C0,0 50,50 50,50 C50,50 100,0 100,0'
	},
	{
		from: 'H50 100',
		to: 'C0,0 50,0 50,0 C50,0 100,0 100,0'
	},
	{
		from: 'V50 100',
		to: 'C0,0 0,50 0,50 C0,50 0,100 0,100'
	}
]

exports['curve-to'] = [
	{
		from: 'M10 150 C10 10 150 10 150 150',
		to: 'M10,150C10,10,150,10,150,150'
	},
	{
		from: 'M0 120 Q60 0 120 120',
		to: 'M0,120C40,40,80,40,120,120'
	},
	{
		from: 'M10 80 C10 10 75 10 75 80 S150 150 150 80',
		to: 'M10,80C10,10,75,10,75,80C75,150,150,150,150,80'
	},
	{
		from: 'M0 60 Q30 0 60 60 T120 60',
		to: 'M0,60C20,20,40,20,60,60C80,100,100,100,120,60'
	},
	{
		from: 'M30 30 Q50 50 84 50 S124 73 107 92 T127 122',
		to: 'M30,30C43.33333333333333,43.33333333333333,61.33333333333333,50,84,50C84,50,124,73,107,92C107,92,113.66666666666666,102,127,122'
	}
]

exports['close-path'] = [{
	from: 'L100 0 100 100Z',
	to: 'C0,0,100,0,100,0C100,0,100,100,100,100C100,100,0,0,0,0'
}]

exports['arc-to'] = [
	{
		from: 'M10 80 A150 150 0 0 0 150 80',
		to: 'M10,80C53.80473801028668,103.11334459999999,106.19526198971332,103.1133446,150,80'
	},
	{ // half circle clockwise
		from: 'M10 80 A50 50 0 0 1 150 80',
		to: 'M10,80C10.000000000000007,26.113974875634938,68.33333333333334,-7.564790827093233,115,19.37822173508929C136.65807537309522,31.882517381875015,150,54.991408706428544,150,80'
	},
	{ // half circle anticlockwise
		from: 'M10 80 A50 50 0 1 0 150 80',
		to: 'M10,80C10.000000000000007,133.88602512436506,68.33333333333334,167.56479082709325,115,140.62177826491072C136.65807537309522,128.117482618125,150,105.00859129357146,150,80'
	},
	{ // circle
		from: 'M10 80 A50 50 0 0 1 150 80 A50 50 0 0 1 10 80',
		to: 'M10,80C10.000000000000007,26.113974875634938,68.33333333333334,-7.564790827093233,115,19.37822173508929C136.65807537309522,31.882517381875015,150,54.991408706428544,150,80C150,133.88602512436506,91.66666666666669,167.56479082709325,45.000000000000014,140.62177826491072C23.3419246269048,128.117482618125,10.000000000000004,105.00859129357146,10,80'
	},
	{
		from: 'M10 80 A150 75 30 0 0 150 80',
		to: 'M10,80C72.0414967494685,108.21761034540566,129.85079031336056,108.21761040826622,150,80'
	},
	{ // the null curve
		from: 'M10 80 A50 50 0 0 1 10 80',
		to: 'M10,80C10,80,10,80,10,80'
	}
]