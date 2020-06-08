import React from 'react'
import Person from './Person'

function NameList() {
    const names= ['Bruce','Diana','Clark']
    const persons=[
        {
            id:1,
            name:'Bruce',
            age:25,
            skill:'react'
        },
        {
            id:2,
            name:'Clark',
            age:22,
            skill:'Angular'
        },
        {
            id:3,
            name:'Diana',
            age:20,
            skill:'Node'
        }
    ]
    const nameList=names.map((name,index)=><h2 key={index}>{index}{name}</h2>)
    //const personList=persons.map(person=>  <Person key={person.id}   person={person} />)
    return (
        <div>
            {
                nameList
            }
        </div>
    )
}

export default NameList
