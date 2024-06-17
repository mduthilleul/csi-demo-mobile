jest.mock("./fetchUsers", () => ({
    fetchUsers: jest.fn(() => {
        return [
            { id: 1, name: "Alice", role: "admin" },
            { id: 2, name: "Bob", role: "user" },
            { id: 3, name: "Charlie", role: "admin" },
        ];
    
    }),
}));

import { fetchUsersByRole } from "./fetchUsersByRole";

describe("fetchUsersByRole", () => {
    test("Returns only admins", () => {

        const result = fetchUsersByRole("admin");
        expect(result).toEqual([
            { id: 1, name: "Alice", role: "admin" },
            { id: 3, name: "Charlie", role: "admin" },
        ]);
    })
})