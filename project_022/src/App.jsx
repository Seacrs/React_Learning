import { useTheme } from './Hook/useTheme'
import { useBrand } from './Hook/useBrand'

export default function App(){
  const { theme, toggleTheme } = useTheme();
  const brand =useBrand()

  return (
      <div
        style={{
          backgroundColor: theme ? '#fff' : '#222',
          color: theme ? "#000" : "#fff",
          height: "100vh",
        }}
        >
        <nav className='flex justify-between bg-slate-500 p-1'>
          <h1 className='text-3xl'>My App</h1>
          <button onClick={toggleTheme}>Change Theme</button>
        </nav>
        <main>
          <p className='text-xl m-3'>
            {theme ? "Light Mode" : "Dark Mode"}
          </p>
          <div>
            {brand && <p>{brand.name}</p>}
          </div>
        </main>
      </div>
  )
}