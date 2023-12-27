// JSX - JavaScript + XML
import { Post } from "./Post.jsx"
import { Header } from "./modules/Header.jsx"

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Erik Kaue"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo adipisci ratione in error enim sunt reprehenderit incidunt veritatis omnis iure, ullam exercitationem reiciendis sed! Quidem quibusdam saepe vero magni distinctio?"
      />
      <Post 
        author="Kaue erik"
        content="outro post"
      />
    </div>
  )
}