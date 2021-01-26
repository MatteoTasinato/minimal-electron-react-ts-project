import * as React from 'react'
import { ChapterTree } from '../chapterTree/ChapterTree'
import { TextArea } from '../textArea/TextArea'
import { ColorfulContainer } from './ColofulContainer'
import '../styles.css'

export default () => {
    const [fontSize, setFontSize] = React.useState<string>('text-base')

    return (
        <div className="flex flex-col h-screen bg-gradient-to-r from-blue-100 to-gray-200">
            <ColorfulContainer from={'green-300'} to={'purple-400'}>
                <p className="text-xl font-extralight">
                    Writ<b className="text-xl font-bold">10</b>
                </p>
                <SearchInput placeholder="Search..." />
            </ColorfulContainer>
            <div className="flex h-full">
                <ColorfulContainer
                    from="green-50"
                    to="purple-50"
                    direction="vertical"
                >
                    <ChapterTree />
                </ColorfulContainer>
                <TextArea fontSize={fontSize} setFontSize={setFontSize} />
            </div>
        </div>
    )
}

const SearchInput = ({ placeholder }) => {
    return (
        <input
            placeholder={placeholder}
            className="px-2 rounded bg-purple-200 text-purple-500"
        />
    )
}
