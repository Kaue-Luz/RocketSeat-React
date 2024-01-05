/* eslint-disable react/jsx-key */
// JSX - JavaScript + XML
import { Sidebar } from "./components/Sidebar.jsx";
import { Header } from "./components/Header.jsx"
import { Post } from "./components/Post.jsx"


import './global.css'

import styles from "./App.module.css";

// author: {avatarUrl: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/kaue-luz.png',
        name: 'Erik Kaue',
        role: 'WEB Developer'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋', },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2021-01-03 20:00:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/FeBassetto.png',
        name: 'Felipe Basseto',
        role: 'WEB Developer'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋', },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2021-01-01 20:00:00'),
    }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author= {post.author}
                content= {post.content}
                publishedAt= {post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}