const divTag = document.getElementById("divTag");

function Render({ data, classN, handleClick, handleFill }) {

    return (
        <div>
            <h1>List Member Of {classN} Class</h1>
            <p>
                {data.length > 0 ? data.map((user, index) => {
                    return (
                        <div>
                            <span > name: {user.name}, age: {user.Age}</span>
                            <button onClick={() => handleClick(index)}>Transfer</button>
                            <button onClick={() => handleFill(user, index)}>Edit User</button>
                        </div>
                    )
                }
                ) : <p>Empty Member</p>}
            </p>
        </div>

    )
}

/* function RenderButtonEdit({ props, handleEdit }) {
    return (
        <span>
            <button onClick={() => handleEdit(props)}>edit</button>
        </span>
    )
}
 */
function Component(props) {
    const [users, setUser] = React.useState([
        { name: "Nguyễn Văn A", Age: 20 },
        { name: "Nguyễn Văn B", Age: 21 },
        { name: "Nguyễn Văn C", Age: 20 }
    ])

    const [user2, setUser2] = React.useState([
        { name: "Trần Văn A", Age: 26 },
        { name: "Trần Văn B", Age: 27 },
        { name: "Trần Văn C", Age: 28 }
    ])

    const [data, setData] = React.useState([
        {
            name: "",
            Age: ""
        }
    ])
    const handleChangeInput = (e) => {
        const value = e.target.value
        setData({
            ...data,
            [e.target.name]: value
        })
        console.log(data)
    }



    const Fill = (props, index) => {
        console.log(index)
        setData(
            props
        )
    }
    React.useEffect(() => {
        if (users.length === 0) {
            alert("empty class")
        }
        else if (user2.length === 0) {
            alert("empty class")
        }
    })

    const transReact = (index) => {
        const tt = user2.splice(index, 1)
        setUser([
            ...users,
            ...tt
        ])
    }
    const transJava = (index) => {
        const tt = users.splice(index, 1)
        setUser2([
            ...user2,
            ...tt
        ])
    }


    const editReact = (user) => {
        setUser([
            ...user
        ])
        alert(users.name)
    }


    return (
        <div>
            <Render data={users} classN="React" handleClick={transJava} handleFill={Fill} />
            <Render data={user2} classN="Java" handleClick={transReact} handleFill={Fill} />


            <h1>Edit Member</h1>
            <form>
                <lable>Name: </lable>
                <input type='text' name='name' value={data.name} onChange={(e) => handleChangeInput(e)} ></input>
                <lable>Age: </lable>
                <input type='text' name='Age' value={data.Age} onChange={(e) => handleChangeInput(e)} ></input>
                <button onSubmit={() => editReact(data)}>Edit</button>
            </form>

        </div>

    )
}



ReactDOM.render(
    <Component />, divTag);
