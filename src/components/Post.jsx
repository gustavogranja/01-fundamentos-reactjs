import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar  src="https://github.com/gustavogranja.png"  />
                    <div className={styles.authorInfo}>
                        <strong>Gustavo Granja</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de Maio às 08:13" dateTime="2023-05-11 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera, tudo bem?</p>
                <p>Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no Ignite, da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉<a href="#">jane.design/doctorcare</a></p>
                <p><a href="#">#novoprojeto #ignite #rocketseat</a></p>
            </div>

            <form className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário" />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}