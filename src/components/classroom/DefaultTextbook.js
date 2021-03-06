export const DefaultTextbook = {
	"textbook_title": "데이터 자료형",
	"textbook_subtitle": {
		"stage": "Pioneer",
		"language": "Python",
		"level": "1"
	},
	"textbook_summary": {
		"summary_image_src": "",
		"summary_text": ""
	},
	"textbook_contents": [
		{
			"step_title": "데이터 자료형",
			"step_no": 0,
			"step_items": [
				{
					"title": "자료형태란",
					"tags": [],
					"collapse": false,
					"components": [
						{
							"type": "desc",
							"description": "컴퓨터에 사진, 영상, 글등의 다양한 기록하는 방법이 있듯이, 코딩세계에서도 여러가지의 <mark>**형태**</mark>로 데이터를 저장할 수 있습니다."
						},
						{
							"type": "desc",
							"description": "대표적으로 데이터는 숫자형, 문자형, 불(bool), 리스트, 딕셔너리등 많지만 오늘시간에는 <mark>**숫자형, 문자형**</mark>에 대해서만 간단하게 배웁니다."
						}, 
						{
							"type": "desc",
							"description": "👊다음은 여러 형태의 데이터의 예를 테이블에 보여줍니다.👊"
						},
						{
							"type": "table",
							"description": "|데이터 형태| 예제 데이터 | \n |:--:|:--:| \n | 정수 | 43, -234, 0 | \n | 문자 | \"Tony\" \"Hello World\" | \n | 실수 | 2.30, 3.14, -9.003 | \n | 불 | True False | \n | 리스트 | [3, 2, 77.3, 1] | \n | 딕셔너리 | {\"name\":\"Jeffrey\"} |"
						}
					]
				}
			]
		},
		{
			"step_title": "자료형변수",
			"step_no": 1,
			"step_items": [
				{
					"title": "변수란",
					"tags": [],
					"collapse": false,
					"components": [
						{
							"type": "desc",
							"description": "변수란 사진, 영상을 컴퓨터에 저장하듯이, 코딩에서도 데이터를 **변수라는 가상의 공간** 에 저장합니다."
						},
						{
							"type": "image",
							"name": "",
							"src": "variables_2.png"
						}
					]
				},
				{
					"title": "문자 변수 만들기!",
					"tags": [],
					"collapse": false,
					"components": [
						{
							"type": "desc",
							"description": "이름 예로'**Tony**' 를 담은 변수를 만들어봐요"
						},
						{
							"type": "code",
							"code": "~~~python \npioneer = \"Tony\" \nprint(pioneer)\n ~~~ "
						},
						{
							"type": "desc",
							"description": "여기서 **pioneer** 는 변수의 이름입니다. \"Tony\"는 변수에 저장할 데이터입니다. <br/> 'print'는 출력을 해주는 명령어에요. <br/> 코드를 실행해 보면 \"Tony\"가 출력되는걸 볼 수 있어요. <br/> 출력 예제:"
						},
						{
							"type": "code",
							"code": "~~~python \n Tony\n ~~~ "
						},
						{
							"type": "desc",
							"description": "여기서 데이터 값 \"Tony\" 는 문자형의 데이터이기 때문에 꼭 \"\"를 붙여야 합니다."
						}
					]
				},
				{
					"title": "숫자 변수 만들기",
					"tags": [],
					"collapse": false,
					"components": [
						{
							"type": "desc",
							"description": "앞페이지에서 문자형의 데이터 \"Tony\"를 변수에 저장했습니다. <br/>이번에는 숫자를 저장해 볼게요. 숫자는 크게 2가지 정수형, 실수형으로 나뉩니다.<br/>모험가의 나이랑 발길이를 저장하는 변수 2개를 만들어 볼게요."
						},
						{
							"type": "code",
							"code": "~~~python \nage = 40\nfeet = 273.3 \nprint(age)\nprint(feet)\n ~~~ "
						},
						{
							"type": "desc",
							"description": "출력 예"
						},
						{
							"type": "code",
							"code": "~~~python \n40\n273.0\n ~~~ "
						},
						{
							"type": "desc",
							"description": "위와 똑같이 나오면 성공!"
						}
					]
				},
				{
					"title": "변수 만들때 팁",
					"tags": [],
					"collapse": false,
					"components": [
						{
							"type": "desc",
							"description": "변수를 만들때 팁을 알려드릴게요. \n- 변수의 이름은 의미있는 영어단어로 만들어요. <br/>예를 들어 모험가의 나이를 저장하는 변수는 age, 모험날짜는 date. 이렇게 의미가 있는 단어로 변수를 만들때 안헷갈리고 좋아요.\n- 영어로 변수이름을 만들어요. 코딩중에러를 많이 줄일수 있어요."
						}
					]
				}
			]
		},
		{
			"step_title": "변수 생성 및 변경",
			"step_no": 2,
			"step_items": [
				{
					"title": "변수 생성 및 변경",
					"tags": [],
					"collapse": false,
					"components": [
						{
							"type": "desc",
							"description": "변수는 코드중 아무때나 생성을 할 수 있습니다. 생성하는 방법은 앞서 말했듯이 **변수이름 = 데이터** 입니다. <br/>**주의:** '='은 수학에서의 '는'과 발음이 같지만 의미는 전혀 다릅니다. 코딩에서는 '='을 오른쪽 값을 왼쪽 변수에 저장한다 라는 의미입니다. 따라서 항상 '='의 왼쪽에는 변수를 오른쪽에는 값을써주세요."
						},
						{
							"type": "code",
							"code": "~~~python \npioneer = \"Tony\"\nprint(pioneer)\n실행결과\n===============\nTony\n ~~~ "
						},
						{
							"type": "desc",
							"description": "변수에 저장되어 있는 데이터는 변경도 가능합니다"
						},
						{
							"type": "code",
							"code": "~~~python \npioneer = \"Tony\"\nprint(pioneer)\npioneer = \"Jeffrey\"\nprint(pioneer)\n\n실행 결과\n====================\nTony\nJeffrey\n ~~~ "
						},
						{
							"type": "desc",
							"description": "pioneer변수에 처음에 Tony를 저장하고 print한다음 \"Jeffrey\"를 저장하고 프린트하니 값이 변경되었습니다"
						}
					]
				},
				{
					"title": "출력",
					"tags": [],
					"collapse": false,
					"components": [
						{
							"type": "desc",
							"description": "출력시 여러개의 데이터를 동시의 출력하고 싶을때가 있을거에요. 예를 들어서 모험가님께서 출력한 이름이 이름인걸 알리고 싶을때 아래와 같이 출력할 수 있어요.\n"
						},
						{
							"type": "code",
							"code": "~~~python \npioneer = \"Tony\"\nprint(\"Name: \", pioneer)\n ~~~ "
						},
						{
							"type": "desc",
							"description": "위와 같이 \"Name: \" 이랑 pioneer 변수사이에 ','를 삽입시 동시에 출력이 가능합니다"
						}
					]
				}
			]
		},
		{
			"step_title": "Practice",
			"step_no": 3,
			"step_items": [
				{
					"title": "1번 문제",
					"tags": [],
					"collapse": false,
					"components": [
						{
							"type": "desc",
							"description": "아래 그림과 같이 모험님의 이름, 나이변수를 만들어 이름 나이를 저장하고 출력해 주세요\n**연습문제에 나오는 변수명은 변수 명명법에 따라 알맞게 만들어준다.**\n"
						},
						{
							"type": "code",
							"code": "~~~python \n출력예제: \n Name: Tony \n Age: 17 \n ~~~"
						}
					]
				},
				{
					"title": "2번 문제 ",
					"tags": [],
					"collapse": false,
					"components": [
						{
							"type": "desc",
							"description": "모험가님이 현재 배우고있는 코딩언어변수를 만들어 코딩언어를 저장하고 출력해 주세요\n**연습문제에 나오는 변수명은 변수 명명법에 따라 알맞게 만들어준다.**"
						},
						{
							"type": "code",
							"code": "~~~python \n출력예제: \n Language: Python\n ~~~ "
						}
					]
				},
				{
					"title": "3번 문제 ",
					"tags": [],
					"collapse": false,
					"components": [
						{
							"type": "desc",
							"description": "모험가님이 현재 다니고 있는 학교와 장래 희망 변수를 만들어 저자해 주세요! \n**연습문제에 나오는 변수명은 변수 명명법에 따라 알맞게 만들어준다.**"
						},
						{
							"type": "code",
							"code": "~~~python \n출력예제:\nSchool: Tony's University\nDream: Astronaut\n ~~~ "
						}
					]
				},
				{
					"title": "4번문제",
					"tags": [],
					"collapse": false,
					"components": [
						{
							"type": "desc",
							"description": "모험가님의 취미변수를 만들어 취미를 저장하고 출력해 출주세요!\n**연습문제에 나오는 변수명은 변수 명명법에 따라 알맞게 만들어준다.**"
						},
						{
							"type": "code",
							"code": "~~~python \n출력예제: \nHobby: Reading Books\n ~~~ "
						}
					]
				},
				{
					"title": "5번 문제 ",
					"tags": [],
					"collapse": false,
					"components": [
						{
							"type": "desc",
							"description": "모험가님이 제일 좋아하는 영화, 책변수를 만들어 영화, 책을 저장하고 출력해 주세요!\n**연습문제에 나오는 변수명은 변수 명명법에 따라 알맞게 만들어준다.**"
						},
						{
							"type": "code",
							"code": "~~~python \n출력예제:\nMovie: Inception\nBook: Harry Potter\n ~~~ "
						}
					]
				},
				{
					"title": "6번 문제",
					"tags": [],
					"collapse": false,
					"components": [
						{
							"type": "desc",
							"description": "수학에서 PI 값을 저장할 변수를 만들고 PI 값을 저장하고 출력해 주세요!\n"
						},
						{
							"type": "code",
							"code": "~~~python \n출력예제:\nPI: 3.14159265\n ~~~ "
						}
					]
				},
				{
					"title": "7번 문제",
					"tags": [],
					"collapse": false,
					"components": [
						{
							"type": "desc",
							"description": "알파벳과 숫자를 저장할 변수를 만들고 본인이 좋아하는 알파벳과 숫자를 저장하고 출력해 주세요!\n"
						},
						{
							"type": "code",
							"code": "~~~python \n출력예제:\nAlphabet: e\nNumber: 7\n ~~~ "
						}
					]
				},
				{
					"title": "8번 문제",
					"tags": [],
					"collapse": false,
					"components": [
						{
							"type": "desc",
							"description": "모험가님의 키변수를 만들어 키를 저장하고 출력해 주세요!\n"
						},
						{
							"type": "code",
							"code": "~~~python \n출력예제\nHeight: 183\n ~~~ "
						}
					]
				}
			]
		}
	]
}