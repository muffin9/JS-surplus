// type이 sk인, name으로 구성된 배열만 출력해본다.
// result Array["Yong", "hary", "solvin", "hani", "chulsu"]

const data = [{
	"id": 1,
	"name": "Yong",
	"phone": "010-0000-0000",
	"type": "sk",
	"childnode": [{
		"id": 11,
		"name": "echo",
		"phone": "010-0000-1111",
		"type": "kt",
		"childnode": [{
				"id": 115,
				"name": "hary",
				"phone": "211-1111-0000",
				"type": "sk",
				"childnode": [{
					"id": 1159,
					"name": "pobi",
					"phone": "010-444-000",
					"type": "kt",
					"childnode": [{
							"id": 11592,
							"name": "cherry",
							"phone": "111-222-0000",
							"type": "lg",
							"childnode": []
						},
						{
							"id": 11595,
							"name": "solvin",
							"phone": "010-000-3333",
							"type": "sk",
							"childnode": []
						}
					]
				}]
			},
			{
				"id": 116,
				"name": "kim",
				"phone": "444-111-0200",
				"type": "kt",
				"childnode": [{
					"id": 1168,
					"name": "hani",
					"phone": "010-222-0000",
					"type": "sk",
					"childnode": [{
						"id": 11689,
						"name": "ho",
						"phone": "010-000-0000",
						"type": "kt",
						"childnode": [{
								"id": 116890,
								"name": "wonsuk",
								"phone": "010-000-0000",
								"type": "kt",
								"childnode": []
							},
							{
								"id": 1168901,
								"name": "chulsu",
								"phone": "010-0000-0000",
								"type": "sk",
								"childnode": []
							}
						]
					}]
				}]
			},
			{
				"id": 117,
				"name": "hong",
				"phone": "010-0000-0000",
				"type": "lg",
				"childnode": []
			}
		]
	}]
}]

const newData = [];

data.forEach(loopData);

function loopData(obj) {
	if(checkChildNodeLength(obj)) {
		// check sk
		if(typeCheck(obj.type, 'sk')) newData.push(obj.name);
	} else {
		// check sk
		if(typeCheck(obj.type, 'sk')) newData.push(obj.name);
		// childNode 탐색
		obj.childnode.forEach(loopData);
	}
}

function checkChildNodeLength(obj) {
    if(Array.isArray(obj.childnode) && obj.childnode.length === 0) return true;
    return false;
}


function typeCheck(agency, type) {
    if(agency === type) return true;
    return false;
}

console.log(newData);