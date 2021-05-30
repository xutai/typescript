interface User {
    name: string;
    id: number;
}
declare function getAdminUser(): User;
declare function deleteUser(user: User): void;
