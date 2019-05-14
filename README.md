# React + Redux를 활용한 날씨 웹-앱 제작

### 실행

```
cd weather-app
npm install
npm start
```

> or

```
cd weather-app
yarn install
yarn start
```

### Package Dependencies

> `axios`
>
> `moment`
>
> `node-sass`
>
> `react`
>
> `react-dom`
>
> `react-redux`
>
> `redux`
>
> `redux-promise`

### design guide

- 배경색 : ##699dec
- 폰트 (basic) : #fff
- 폰트 (Dust-type section) : #32568E

### 폴더 구조

```js
.
├── Type.ts // 타입에 관한 정보를 분리하였습니다.
├── actions // redux에 action에 관한 폴더입니다.
├── assets // 참조하는 파일들에 대한 폴더입니다.
│ ├── icon // icon
│ ├── logo.png // logo
│ └── scss // scss
├── component // react의 component들의 폴더입니다.
├── containers // react와 redux를 connect한 container들의 폴더입니다.
├── index.tsx
├── reducers // redux의 reducer에 관한 폴더입니다.
└── store // store를 생성합니다.
```

### openweathermap 서울

**1. 도시 현재 날씨 API**

```javascript
{
    "coord": {
        "lon": 127,
        "lat": 37.58
    },
    "weather": [
        {
            "id": 721,
            "main": "Haze",
            "description": "연무",
            "icon": "50d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 296.96,
        "pressure": 1014,
        "humidity": 35,
        "temp_min": 296.15,
        "temp_max": 298.15
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.1,
        "deg": 250,
        "gust": 5.7
    },
    "clouds": {
        "all": 20
    },
    "dt": 1557805800,
    "sys": {
        "type": 1,
        "id": 5501,
        "message": 0.0051,
        "country": "KR",
        "sunrise": 1557779054,
        "sunset": 1557829955
    },
    "id": 1835847,
    "name": "Seoul-teukbyeolsi",
    "cod": 200
}
```

**2. 공기오염도 API**

```javascript
{
    "ListAvgOfSeoulAirQualityService": {
        "list_total_count": 1,
        "RESULT": {
            "CODE": "INFO-000",
            "MESSAGE": "정상 처리되었습니다"
        },
        "row": [
            {
                "GRADE": "보통",
                "IDEX_MVL": "69",
                "POLLUTANT": "O3",
                "NITROGEN": 0.025,
                "OZONE": 0.052,
                "CARBON": 0.4,
                "SULFUROUS": 0.004,
                "PM10": 38,
                "PM25": 26
            }
        ]
    }
}
```
