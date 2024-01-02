// JSX - JavaScript + XML
import { Sidebar } from "./components/Sidebar.jsx";
import { Header } from "./components/Header.jsx"
import { Post } from "./components/Post.jsx"


import './global.css'

import styles from "./App.module.css";


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}