import React from 'react';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment() {
  return (
    <div className={styles.comment}>
        <img src="https://github.com/gustavogranja.png"  />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Gustavo Granja</strong>
                        <time title="11 de Maio às 08:13" dateTime="2023-05-11 08:13:30">Cerca de 1h atrás</time>
                    </div>

                    <button title='Deletar Comentário'>
                        <Trash size={24} />
                    </button>
                </header>

                <p>Muito bom Gustavo, parabéns!!!</p>
            </div>

            <footer>
                <button>
                    <ThumbsUp  />
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>  
    </div>
  );
}