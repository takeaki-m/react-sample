// 無名関数でコンポーネントを定義、Textという変数に代入する
// Textコンポーネントは親から`content`というデータを受け取る

const Text = (props: {content: string}) => {
    const { content } = props
    return <p className="text">{content}</p>
}

const Message = (props: {}) => {
    const content1 = "This is parent component"
    const content2 = "Message uses Text component"

    return (
        <div>
            {/* content というキーでコンポーネントにデータを渡す */}
            <Text content = {content1}/>
            {/* 違うデータを渡すと、違う内容が表示される */}
            <Text content = {content2}/>
        </div>
    )
}

export default Message
