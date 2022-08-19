const { useState, useEffect } = React

function App () {
  const [ todoInput, setTodoInput ] = useState("")
  const [ todoList, setTodoList ] = useState([
    { id: 1660188520932, todo: "把冰箱發霉的檸檬拿去丟", checked: true },
    { id: 1660188520933, todo: "打電話叫媽媽匯款給我", checked: false },
    { id: 1660188520934, todo: "整理電腦資料夾", checked: false },
    { id: 1660188520935, todo: "繳電費水費瓦斯費", checked: false },
    { id: 1660188520936, todo: "約vicky禮拜三泡溫泉", checked: false },
    { id: 1660188520937, todo: "約ada禮拜四吃晚餐", checked: false }
  ])
  
  return (
    <div id="todoListPage" className="bg-half">
      <nav>
        <h1><a href="#">ONLINE TODO LIST</a></h1>
      </nav>
      <div className="conatiner todoListPage vhContainer">
        <div className="todoList_Content">
          <div className="inputBox">
            <input type="text" placeholder="請輸入待辦事項" value={todoInput} onChange={(e) => {
              setTodoInput(e.target.value)
            }} />
              <a href="#" onClick={() => {
                setTodoList((todoList) => {
                  return [
                    {
                      id: new Date().getTime(),
                      todo: todoInput,
                      checked: false
                    },
                    ...todoList
                  ]
                })
              }}
              >
                <i className="fa fa-plus"></i>
              </a>
          </div>
          <div className="todoList_list">
            <ul className="todoList_tab">
              <li><a href="#" className="active">全部</a></li>
              <li><a href="#">待完成</a></li>
              <li><a href="#">已完成</a></li>
            </ul>
            <div className="todoList_items">
              <ul className="todoList_item">
                {
                  todoList.map(({todo, checked, id}) => {
                    return (
                      <li key={id}>
                        <label className="todoList_label">
                          <input className="todoList_input" type="checkbox" value="true" />
                          <span>{ todo }</span>
                        </label>
                        <a href="#">
                          <i className="fa fa-times"></i>
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
              <div className="todoList_statistics">
                <p> 5 個已完成項目</p>
                <a href="#">清除已完成項目</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />)