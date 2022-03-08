const divTag = document.getElementById("divTag");

function Render({ data, classN, handleClick }) {
    return (
        <div>
            <h1>List Member Of {classN} Class</h1>
            <p >
                {data.map((user, index) => {
                    return (
                        <div>
                            <span key={user.name}> name: {user.name}, age: {user.Age}</span>
                            <button onClick={() => handleClick(index)}>Transfer</button>
                        </div>
                    )
                }
                )}
            </p>
        </div>
    )
}

function transReact({ data, index }) {
    const tt = data.slice(index, 1)
    console.log(tt)
}

function transJava({ data, index }) {
    const tt = data.slice(index, 1)
    console.log(tt)
}

function Component(props) {
    const [users, setUser] = React.useState([
        { name: "Nguyễn Văn A", Age: 20 },
        { name: "Nguyễn Văn B", Age: 21 },
        { name: "Nguyễn Văn C", Age: 20 }
    ])

    const [user2, setUse2] = React.useState([
        { name: "Trần Văn A", Age: 26 },
        { name: "Trần Văn B", Age: 27 },
        { name: "Trần Văn C", Age: 28 }
    ])

    return (
        <div>
            <Render data={users} classN="React" handleClick={transReact} />
            <Render data={user2} classN="Java" handleClick={transJava} />
        </div>

    )
}



ReactDOM.render(
    <Component />, divTag);
