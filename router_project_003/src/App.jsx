import { 
  RouterProvider,
  createBrowserRouter, 
  createRoutesFromElements,
  Route 
} from "react-router-dom";

function HomePage() {

  return (
    <main>
      <h2>Home Page</h2>
    </main>
  );
}

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<HomePage />} />
))


export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}
