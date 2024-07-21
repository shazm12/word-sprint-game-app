import { User } from "./User";
export interface UserContextValue {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}