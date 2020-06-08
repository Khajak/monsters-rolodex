import React, {Component, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {Searchbox} from "./components/search-box/search-box.component";

function App() {
    const [monsters,setMonsters] = useState([])

    const [hasError,setHasError]=useState(false)
    const [searchString,setSearchString]=useState("")

    const filteredMonsters = (monsters.filter(monster=>monster.name.toLowerCase().includes(searchString.toLowerCase())))

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response=>response.json())
            .then(users=>setMonsters(users))
            .catch(error=>setHasError(true))
    },[]);

    return(

        <div className='App'>
            <h1>Monsters Rolodex</h1>

            <Searchbox placeholder='search monsters' handleOnChange={e=>setSearchString(e.target.value)}/>
            {
                hasError?
                     <h1>Unable To Load Monsters List</h1>:
                     (monsters === undefined?<h1>Loading...</h1>:<CardList monsters={filteredMonsters}/>)
            }

        </div>
    );

}

// class App extends Component{
//     constructor() {
//         super();
//         this.state={
//             monsters:[],
//             searchText:'',
//             error:false
//         }
//
//         //this.handleOnChange = this.handleOnChange.bind(this)
//     }
//
//     componentDidMount() {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then(response=> response.json())
//             .then(users => {this.setState({monsters:users})})
//             .catch(error=>{ this.setState({error:true})})
//     }
//
//     handleOnChange=(e)=>{
//         this.setState({searchText:e.target.value})
//     }
//
//
//     render() {
//         const {monsters,searchText} = this.state
//
//
//
//         const filteredMonster = monsters.filter(monster=>monster.name.toLowerCase().includes(searchText.toLowerCase()))
//         return(
//                <div className='App'>
//                    <Searchbox placeholder='Search monsters' handleOnChange={this.handleOnChange}/>
//                    <CardList monsters={filteredMonster}/>
//                </div>
//                );
//     }
//
//
// }

// class App extends Component{
//
//     constructor() {
//         super();
//         this.state= {
//             monsters:[
//                 {
//                     name:"name",
//                     id:"dgsds"
//                 }
//             ],
//             error:false
//         }
//     }
//
//     componentDidMount() {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then(response=>response.json())
//             .then(users=>this.setState({monsters:users}))
//             .catch(error=>this.setState({error:true}))
//     }
//
//     render() {
//     return (
//
//         <div className="App">
//
//             {
//                 this.state.error?
//                     <h1>Unable To Load Monsters List</h1>:
//                     (this.state.monsters === undefined?<h1>Loading...</h1>:this.state.monsters.map(monster=><h1 key={monster.id}>{monster.name}</h1>))
//
//             }
//
//         </div>
//     );
//
//   }
//
//
// }

export default App;
