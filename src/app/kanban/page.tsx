"use client";

import { StrictModeDroppable } from "@/components/StricModeDroppable";
import { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  DropResult,
  OnDragEndResponder,
} from "react-beautiful-dnd";

const grid = 8;

const getItemStyle = (draggableStyle: any) => ({
  // styles we need to apply on draggables
  ...draggableStyle,
});

interface IKanbanCard {
  id: string;
  title: string;
  description: string;
}

interface IKanbanColumn {
  id: string;
  title: string;
  list: IKanbanCard[];
}

const Kanban = () => {
  // https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/about/examples.md
  const [items, setItems] = useState<IKanbanColumn[]>([
    {
      id: "todo",
      title: "To Do",
      list: [
        {
          description: "Start studies in NestJS",
          id: "nestStudy",
          title: "Back-end: NestJS",
        },
        {
          description:
            "Use the back-end project that I'll create as a CMS (maybe I could build a inerface with strapi too)",
          id: "nestStudyInteration",
          title: "Back-end: NestJS integration with portfolio site",
        },
        {
          description: "Read documentation and apply, you could choose",
          id: "zustand",
          title: "Front-end: Learn Zustand",
        },
        {
          description: "Read documentation and apply, you could choose",
          id: "mongodb",
          title: "Database: Learn MongoDB",
        },
      ],
    },
    {
      id: "doing",
      title: "Doing",
      list: [
        {
          description:
            "Continue building this site (this shoudn't be inside a kanban, because for me it's a process but putting this here could help me organize things)",
          id: "portfolio",
          title: "Front-end: Portfolio site",
        },
        {
          description:
            "Link: https://ibm-learning.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado",
          id: "luisotaviocourse",
          title: "Front-end: Watch couse of Luis Otavio Miranda at Udemy",
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      list: [],
    },
  ]);

  const handleDragEnd: OnDragEndResponder = (res: DropResult) => {
    if (!res.destination) return;

    // Retrieve item from source
    const colSource = items.find((col) => col.id === res.source.droppableId);
    const colDest = items.find(
      (col) => col.id === res.destination?.droppableId
    );
    if (!colSource || !colDest) return;

    const item = colSource.list.splice(res.source.index, 1);

    // Put into destination
    colDest.list = [
      ...colDest.list.slice(0, res.destination.index),
      ...item,
      ...colDest.list.slice(res.destination.index),
    ];
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex">
        {items.map((column) => (
          <StrictModeDroppable key={column.id} droppableId={column.id}>
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={
                  snapshot.isDraggingOver
                    ? "bg-slate-300 dark:bg-slate-600 rounded-md w-60 py-2 px-2 mx-2"
                    : "bg-slate-300 dark:bg-slate-600 rounded-md w-60 py-2 px-2 mx-2"
                }
              >
                <h1 className="text-xl font-semibold">{column.title}</h1>
                {column.list.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        className={`
                        rounded-sm
                        p-2
                        mt-3
                        ${
                          snapshot.isDragging
                            ? "bg-slate-500 dark:bg-slate-800"
                            : "bg-slate-400 dark:bg-slate-700"
                        }
                        `}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(provided.draggableProps.style)}
                      >
                        <h1 className="text-lg">{item.title}</h1>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </div>
            )}
          </StrictModeDroppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Kanban;
