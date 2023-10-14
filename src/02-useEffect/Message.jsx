import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
        const onMouseMove = (e) => {
            const coords = { x: e.x, y: e.y };
            console.log(coords)
        }
        
        window.addEventListener('mousemove', onMouseMove);
    
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [])
    

  return (
    <>
        <h3>Usuario ya existe</h3>
    </>
  )
}
