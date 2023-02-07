import './RightClick.scss'

const Menu = ({ x, y ,showmenu }) => {
    const style = () => {
        return {
            borderRadius: 10,
            backgroundColor: '#000',
            color: '#fff',
            display: 'flex',
            flexDrection: 'column',
            padding: 10,
            top: y,
            left: x,
            position: 'absolute',
            display: showmenu ? 'flex' : 'none',
            zIndex: 1000000000000 
        }
    }

    const refresh = (e) => {
        window.location.reload()
    }

    return (
        <div style={style()}>
            <button onClick={refresh} style={style.div} className="btn1 btn-info">Refresh</button>
            <button style={style.div} className="btn1">Refresh</button>
            <button style={style.div} className="btn1">Refresh</button>
        </div>
    )
}

const style = {
    div: {
        flex: 0,
        alignItmes: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        color: '#fff',
        fontWeight: 'bold',
        cursor: 'pointer',
        zIndex: 99999999999,
    },
    margin: {
        margin: '10px, 0'
    }
}

export default Menu