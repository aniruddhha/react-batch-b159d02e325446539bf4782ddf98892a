import { Counter } from "./features/counter";
import { Users } from "./features/users";

export function App() {
    return (
        <>
            <Counter/>
            <div>
                <h1> users</h1>
            </div>
            <Users/>
        </>
    )
}