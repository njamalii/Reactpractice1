import './App.css'
export default function Sidebar({setVisibility}) {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <span className="closesidebar" onClick={()=>{setVisibility(false)}}>&nbsp;&times;&nbsp;</span>
            </div>
            <div className="sidebar-content">
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur illo nam deserunt, tempora adipisci iste iure accusantium nisi nemo tempore quod expedita. Reiciendis iure tempora unde? Saepe, aperiam? Natus, voluptatem.</p>
            </div>
        </div>
    )
}