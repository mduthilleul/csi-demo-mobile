import axios from "axios"
import { useEffect, useState } from "react"

export const useApi = () => {
    const [index, setIndex] = useState(1)
  const [title, setTitle] = useState("Loading...")

  const fetchTitle = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${index}`)
    setTitle(response.data.title)
    setIndex(index => index + 1)
  }

  useEffect(() => {
    fetchTitle()
  }, [])

  const onPress = () => {
    fetchTitle()
  }

  return {
    title,
    onPress
  }
}