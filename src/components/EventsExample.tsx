import { ChangeEvent, DragEvent, FC, MouseEvent, useRef, useState } from 'react'


export const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: DragEvent<HTMLDivElement>) => {

    }

    const dropHandler = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDrag(false);
      console.log("DROP!")
    } 

    const leaveHandler = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDrag(false)
    }

    const dragWithPreventHandler = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDrag(true)
    }
  return (
    <div>
        <input type="text" value={value} onChange={changeHandler} placeholder='Manageable' />
        <input type="text" ref={inputRef} placeholder='Unmanageable' />
        <button onClick={clickHandler}>Click</button>
        <div 
          onDrag={dragHandler}
          draggable 
          style={{  
            width: 200,
            height: 200,
            background: 'red'
          }}></div>
        <div 
          onDrop={dropHandler}
          onDragLeave={leaveHandler}
          onDragOver={dragWithPreventHandler}
          style={{  
            width: 200,
            height: 200,
            background: isDrag ? 'blue' : 'red', 
            marginTop: 15
          }}></div>
    </div>
  )
}
