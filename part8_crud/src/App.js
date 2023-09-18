// import "./App.css";
import { useState } from "react";
import UserHeader from "./component/UserHeader";
import UserNav from "./component/UserNav";
import UserArticle from "./component/UserArticle";
import {UserCreate, UserUpdate} from "./component/UserCRUE";

function App() {
//
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." }
  ]);

  // content 생성 영역
  let content = null;
  let ctControl = null;

  if (mode === "WELCOME") {
    content = (
      <UserArticle title="Welcome" body="Hello, React & Web"></UserArticle>
    );
  } else if (mode === "READ") {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id)
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <UserArticle title={title} body={body}></UserArticle>;
    ctControl = <li><a href={"/update"+id} onClick={(e)=>{
      e.preventDefault();
      setMode("UPDATE");
    }}>Update</a></li>

  } else if (mode === "CREATE") {
    content = <UserCreate onCreate={(_title, _body) =>{
      const newTopic = {id:nextId, title:_title, body:_body};
      const newTopics = [...topics]; // 기존의 topics를 복사한다.
      newTopics.push(newTopic); // 새로 생성한 newTopic을 newTopics에 추가한다.
      setTopics(newTopics); // newTopics를 topics에 반영한다.
      setMode("READ");
      setId(nextId);
      setNextId(nextId+1);
    }}></UserCreate>

  } else if (mode === "UPDATE") {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
        break;
      }
    }
    // console.log('title', title);
    content=<UserUpdate title={title} body={body} onUpdate={(title, body)=>{
      const newTopics = [...topics];
      for(let i = 0; i < newTopics.length; i++){
        if(newTopics[i].id === id){
          newTopics[i] = {id:id, title:title, body:body};  // 새로운 객체를 생성해서 대입한다.
          break;
        }
      }
      setTopics(newTopics);
      setMode("READ");
    }}></UserUpdate>
  }

  return (
    <div className="App">
      <h1>React App</h1>
      <UserHeader
        title="WEB"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      ></UserHeader>
      <UserNav
        topics={topics}
        onChangeMode={(_id) => {
          setMode("READ");
          setId(_id);
        }}
      ></UserNav>
      {content}
      <li><a href="/create" onClick={(evn) =>{
        evn.preventDefault();  // a태그의 href 링크로 이동하는 기본 기능을 막는다.
        setMode("CREATE");
      } 
      }>Create</a></li>
      {ctControl}
    </div>
  );
}

export default App;
