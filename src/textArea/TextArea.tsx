import * as React from 'react'

const FONT_TYPES = ['text-base', 'text-lg', 'text-xl']

export const TextArea = ({ fontSize, setFontSize }) => {
    const [text, setText] = React.useState(undefined)

    return (
        <div className="flex flex-grow m-8 mt-0 flex-col">
            <div className="flex justify-items-center my-2">
                <ChapterTitle />
                <FontSelector setFontSize={setFontSize} />
            </div>
            <textarea
                className={`rounded flex-grow outline-none p-8 resize-none ${fontSize} font-light`}
                onChange={(event) => setText(event.target.value)}
            />
        </div>
    )
}

const FontSelector = ({ setFontSize }) => {
    return (
        <div>
            {FONT_TYPES.map((fontType) => (
                <button
                    onClick={() => {
                        setFontSize(fontType)
                    }}
                    className={`${fontType} w-8 h-8`}
                >
                    A
                </button>
            ))}
        </div>
    )
}

const ChapterTitle = () => {
    return (
        <div className="flex flex-grow justify-items-center">
            <input
                className="flex-grow bg-transparent outline-none text-xl font-light text-gray-500 placeholder-gray-400"
                placeholder="Chapter Title"
            />
        </div>
    )
}
