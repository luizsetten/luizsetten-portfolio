import { StrictModeDroppable } from "@/components/StricModeDroppable";
import { Draggable, DroppableProps } from "react-beautiful-dnd";

const grid = 8;

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250,
});

const DroppableCard = ({
  title,
  children,
  ...props
}: DroppableProps & { title: string }) => {
  return (
    <StrictModeDroppable droppableId="droppable">
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
          className="bg-slate-400 rounded-md w-60 py-2 px-2"
        >
          title
          <Draggable key={"1"} draggableId="a" index={1}>
            {(provided, snapshot) => (
              <div
                className="bg-gray-200 rounded-md"
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={getItemStyle(
                  snapshot.isDragging,
                  provided.draggableProps.style
                )}
              >
                Eita
              </div>
            )}
          </Draggable>
          {provided.placeholder}
        </div>
      )}
    </StrictModeDroppable>
  );
};

export default DroppableCard;
