import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { profileData } from "../API"

const Profile = ({ token }) => {
    const [user, setUser] = useState('')
  const navigate = useNavigate();

    const [messages, setMessages] = useState([])

    useEffect(() => {
        // 👇️ only runs once
        console.log('useEffect ran');
        async function getUser() {
          const user = await profileData(token);
          setUser(user);
          console.log(user)
        }
        getUser()
      }, [token]);
      if (!token) {
        navigate('/login');
      }
    return (
        <div>
            <h1>Profile</h1>
            <h2>{user.username}</h2>
        </div>
    )
}

export default Profile;