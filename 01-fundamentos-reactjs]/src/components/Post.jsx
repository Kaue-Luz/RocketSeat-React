import styles from './Post.module.css'

export function Post () {
    return(
        <article className=''>
            <header>
                <div className=''>
                    <img className='' src="https:github.com/kaue-luz.png"/>
                    <div className=''>
                        <strong>Erik Kaue</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="19 de Maio às 09:00h" dateTime="2023-05-19 09:00:24">Publicado há 1h</time>
            </header>

            <div className="">
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="">👉 jane.design/doctorcare</a></p>

                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}