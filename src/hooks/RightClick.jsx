import { useEffect, useState } from 'react'

function RightClick() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [showMenu, setShowMenu] = useState(false)

    const handleContextMenu = (e) => {
        e.preventDefault()
        setX(e.pageX)
        setY(e.pageY)
        setShowMenu(true)
    }

    const handleClick = () => {
        showMenu && setShowMenu(false)
    }

    useEffect(()=> {
        document.addEventListener('click', handleClick)
        document.addEventListener('contextmenu', handleContextMenu)
        return () => {
            document.addEventListener('click', handleClick)
            document.addEventListener('contextmenu', handleContextMenu)
        }
    })

    return { x, y, showMenu }
}

export default RightClick