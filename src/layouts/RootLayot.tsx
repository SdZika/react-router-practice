import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayot() {
  return (
    <div className='root-layout'>
      <header>
        <h1>Title</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
