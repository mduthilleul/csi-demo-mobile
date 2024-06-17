export type User = {
    name: string
    role: string
}

export const fetchUsers = (): User[] => {
    return [] // axios.get("https://api.example.com/users")
}