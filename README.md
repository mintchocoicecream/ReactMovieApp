# ReactJS Movie Web Service

with Nomad Coders "ReactJS로 영화 웹 서비스 만들기"<br/>
(기본 ReactJS 학습용 프로젝트)

- ### Skill
  - React, NodeJS, CSS

- ### 영화 정보
  - API를 사용해서 영화 정보 가져오기.<br/>
    API : https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year
  ```javascript
  function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        )
      ).json();
      
      setMovies(json.data.movies);
      setLoading(false);
    };
  useEffect(() => {
    getMovies()
  }, [])
  
  return <div>{loading ? <h1>Loading...</h1> : null}</div>;
  }


- ### React Router
  - ``` npm install react-router-dom```
  - ```javascript
    import {BrowserRouter as Router, Switch, Route} from “react-router-dom”;

## Result
1. ### Roading
  - API 불러오는 동안 로딩 화면 띄우기
      <img width="80%" src="https://user-images.githubusercontent.com/64584574/170031880-ebdc0f78-cdfd-418f-ac47-9aeb557b4200.JPG" />
      
2. ### Main
  - 영화 리스트<br/>
    <img width="80%" src="https://user-images.githubusercontent.com/64584574/170031933-4a048159-86bb-4dab-af9f-644e621f484e.JPG" />
      
3. ### Detail
  - 영화 상세정보<br/>
    <img width="80%" src="https://user-images.githubusercontent.com/64584574/170032050-5746e3e8-33f2-4755-adbb-11d769c4d9b8.JPG" />



[URL: [https://mintchocoicecream.github.io/ReactMovieApp/)]
