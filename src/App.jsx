import React from 'react';
import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gustavogranja.png',
      name: 'Gustavo Granja',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera, tudo bem?' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no Ignite, da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-11 08:13:30'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/gustavogranja.png',
      name: 'Gustavo Granja',
      role: 'TechLead',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera, tudo bem?' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no Ignite, da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-05-16 08:13:30'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/gustavogranja.png',
      name: 'Gustavo Granja',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera, tudo bem?' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no Ignite, da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-05-18 08:13:30'),
  },
  
];


export function App() {

  return (
      <>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {
              posts.map(post => {
                return (
                  <Post 
                    key={post.id}
                    author={post.author} 
                    content={post.content} 
                    publishedAt={post.publishedAt}
                  />
                )
              })
            } 
          </main>
        </div>
      </>
  );
}

