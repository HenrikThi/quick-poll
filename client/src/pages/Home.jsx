import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { TextInput } from '../components/TextInput'

export const Home = () => {
    const [text, setText] = useState("start")
    return (
        <div>
            <h1 className="text-red-600">Home</h1>
            <Button onClick={() => console.log(text)} color="primary">Tests</Button>
            <Button color="secondary">Tests</Button>
            <TextInput id="testId" label="Register here" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    )
}
