import * as React from 'react'

interface ColorfulContainerProps {
    from: string
    to: string
    children: any
    direction?: string
}
export const ColorfulContainer = ({
    from,
    to,
    children,
    direction = 'horizontal',
}: ColorfulContainerProps) => {
    const directionClasses =
        direction === 'horizontal'
            ? 'justify-between items-center p-2'
            : 'w-1/6 h-full shadow'

    return (
        <div
            className={`
            bg-gradient-to-r from-${from} to-${to}
            flex ${directionClasses}
            `}
        >
            {children}
        </div>
    )
}
