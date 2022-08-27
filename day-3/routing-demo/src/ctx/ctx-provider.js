import { AppContext } from "./app-context"
export const CtxStr = ({children}) => {

    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}