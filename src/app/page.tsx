"use client"

import { useState } from "react"

const Home = () => {

    const [username, setUsername] = useState("")

    const getGitHubProfile = async () => {

        const data = await fetch(`https://api.github.com/users/${username}/repos`)
        const profileData = await data.json()
        console.log(profileData)
    }

    return (
        <>
            <input type="text" className="bg-gray-950 text-white" onChange={(event) => setUsername(event.target.value)} value={username} />
            <button type="button" onClick={getGitHubProfile}>Search</button>
        </>
    )
}

export default Home