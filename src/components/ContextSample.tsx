import { title } from "process";
import React from "react";

const TitleContext = React.createContext('')

const Title = () => {
    return (
        <TitleContext.Consumer>
            {/* consumer直下に関数を置いて、Contectの値を参照する */}
            {(title) => {
                return<h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

const Header = () => {
    return (
        <div>
            {/* HeaderからTitleには何もデータを渡さない */}
            <Title />
        </div>
    )
}

const Page = () => {
    const title = 'React Book'

    return (
        <TitleContext.Provider value={title}>
            <Header />
        </TitleContext.Provider>
    )
}

export default Page
