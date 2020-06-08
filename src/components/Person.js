import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>
                Hi I am {person.name}, I am {person.age} old. I know about {person.skill}
            </h2>
        </div>
    )
}

export default Person
