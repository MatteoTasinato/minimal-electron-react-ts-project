import * as React from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { DraggableTree } from '../components/DraggableTree'

export interface ChapterTreeProps<ObjectType extends GenericItem> {
    dataset: ObjectType[]
    editedChapter?: string
    title?: string
    iterator: (item: ObjectType, index: number) => any
}

interface GenericItem {
    id: string
}

const chapters = [
    { title: 'Chapter 1', id: 1 },
    { title: 'Chapter 2', id: 2 },
    { title: 'Chapter 3', id: 3 },
    { title: 'Chapter 4', id: 4 },
    { title: 'Chapter 5', id: 5 },
]

export const ChapterTree = SortableContainer(() => {
    return (
        <DraggableTree
            distance={10}
            dataset={chapters}
            iterator={(element) => <span>{(element as any).title}</span>}
        />
    )
})
