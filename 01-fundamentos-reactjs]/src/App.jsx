// JSX - JavaScript + XML
import { Post } from "./Post.jsx"
import { Header } from "./modules/Header.jsx"

import './global.css'

import styles from "./App.module.css";
import { Sidebar } from "./modules/Sidebar.jsx";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Erik Kaue"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo adipisci ratione in error enim sunt reprehenderit incidunt veritatis omnis iure, ullam exercitationem reiciendis sed! Quidem quibusdam saepe vero magni distinctio?"
          />
          <Post 
            author="Kaue erik"
            content="outro post"
          />
        </main>
      </div>
    </div>
  )
}