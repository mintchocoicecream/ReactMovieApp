# ReactJS Movie Web Service

with Nomad Coders "ReactJS로 영화 웹 서비스 만들기"
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

- ### Result


  - URL: [https://mintchocoicecream.github.io/ReactMovieApp/)
