export default {
	categories: [
		'All', 'Disease', 'Age', 'Travel', 'Schedule'
	],
	sortingData: [
		{
			name: 'target',
			label: 'my self',
			title: 'Select who you are',
			items: [{
				id: 0,
				label: 'myself', 
			}, {
				id: 1,
				label: 'my family'
			}, {
				id: 2,
				label: 'my friend'
			}]
		},
		{
			name: 'age',
			label: '0-35 months',
			title: 'Select your Age',
			items: [{
				idAge: 101,
				label: '0-35 months', 
			}, {
				idAge: 102,
				label: '3-9 years'
			}, {
				idAge: 103,
				label: '10-17 years'
			}, {
				idAge: 104,
				label: '18-64 years'
			}, {
				idAge: 105,
				label: 'Over 65 years'
			}]
		},
		{
			name: 'disease',
			label: 'Booster Vaccines',
			title: 'Select Disease',
			items: [{
				idCat: 201,
				label: 'Booster Vaccines', 
			},{
				idCat: 202,
				label: 'Flu', 
			},{
				idCat: 203,
				label: 'Meningococcal Disease', 
			},{
				idCat: 204,
				label: 'National Immunisation Program', 
			},{
				idCat: 205,
				label: 'Routine Vaccine', 
			},{
				idCat: 206,
				label: 'Travel Vaccination', 
			}]
		}
	],
	cardData: [
		{
			idCard: 1,
			TileImage: {
				Src: 'http://vaccinehub2018.adrenalinmedia.com/sites/default/files/2018-02/Card_D_Chickenpox.png',
				Alt: 'Alt here'
			},
			Title: 'Chicken Pox',
			TitleCategory: 'disease',
			refAge: 101,
			refCat: 201
		},
		{
			idCard: 2,
			TileImage: {
				Src: 'http://vaccinehub2018.adrenalinmedia.com/sites/default/files/2018-02/Card_D_Tetanus.png',
				Alt: 'Alt here'
			},
			Title: 'Tetanus',
			TitleCategory: 'disease',
			refAge: 102,
			refCat: 202
		},
		{
			idCard: 8,
			TileImage: {
				Src: 'http://vaccinehub2018.adrenalinmedia.com/sites/default/files/2018-03/Card_T_India.jpg',
				Alt: 'Alt here'
			},
			Title: 'India',
			TitleCategory: 'travel',
			refAge: 104,
			refCat: 206
		},
		{
			idCard: 5,
			TileImage: {
				Src: 'http://vaccinehub2018.adrenalinmedia.com/sites/default/files/2018-03/Country_Square_Thailand.jpg',
				Alt: 'Alt here'
			},
			Title: 'Thailand',
			TitleCategory: 'travel',
			refAge: 102,
			refCat: 202
		},
		{
			idCard: 6,
			TileImage: {
				Src: 'http://vaccinehub2018.adrenalinmedia.com/sites/default/files/2018-03/Country_Square_Fiji.jpg',
				Alt: 'Alt here'
			},
			Title: 'Fiji',
			TitleCategory: 'travel',
			refAge: 104,
			refCat: 206
		},
		{
			idCard: 3,
			TileImage: {
				Src: 'http://vaccinehub2018.adrenalinmedia.com/sites/default/files/2018-02/Card_D_WhoopingCough_0.png',
				Alt: 'Alt here'
			},
			Title: 'Whooping Cough',
			TitleCategory: 'disease',
			refAge: 102,
			refCat: 202
		},
		{
			idCard: 4,
			TileImage: {
				Src: 'http://vaccinehub2018.adrenalinmedia.com/sites/default/files/2018-02/Card_D_Influenza.png',
				Alt: 'Alt here'
			},
			Title: 'Influenza',
			TitleCategory: 'disease',
			refAge: 103,
			refCat: 204
		},
		
		
		{
			idCard: 7,
			TileImage: {
				Src: 'http://vaccinehub2018.adrenalinmedia.com/sites/default/files/2018-02/Card_A_Child.png',
				Alt: 'Alt here'
			},
			Title: 'Child',
			TitleCategory: 'age',
			refAge: 102,
			refCat: 202
		}
		
		

	]
}
