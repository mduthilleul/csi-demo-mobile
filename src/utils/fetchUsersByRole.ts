import { User, fetchUsers } from "./fetchUsers";

export const fetchUsersByRole = (role: User["role"]): User[] => {
    return fetchUsers().filter(user => user.role === role);
}