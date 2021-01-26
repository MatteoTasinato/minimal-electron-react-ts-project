import * as React from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'

export interface DraggableTreeProps<ObjectType extends GenericItem> {
    dataset: ObjectType[]
    editedChapter?: string
    title?: string
    iterator: (item: ObjectType) => any
}

interface GenericItem {
    id: string | number
}

const SortableItem = SortableElement(({ children }) => {
    const [isSelected, setIsSelected] = React.useState(false)
    const selectedClasses = 'bg-opacity-20 bg-gray-400'
    const classes = `${isSelected ? selectedClasses : 'bg-opacity-40 bg-purple-100'}`

    return (
        <div
            onClick={() => {
                console.log('setIsSelected')
                setIsSelected((p) => !p)
            }}
            className={`select-none p-2 ${classes} border-b border-opacity-50 border-fuchsia-300`}
        >
            {children}
        </div>
    )
})

export const DraggableTree = SortableContainer(function <
    ObjectType extends GenericItem
>({ dataset, iterator, title }: DraggableTreeProps<ObjectType>) {
    return (
        <div className="flex-grow">
            {dataset.map((element, index) => {
                return (
                    <SortableItem key={`item-${element.id}`} index={index}>
                        {iterator(element)}
                    </SortableItem>
                )
            })}
        </div>
    )
})
