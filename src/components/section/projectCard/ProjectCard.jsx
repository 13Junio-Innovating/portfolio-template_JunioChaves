import styles from './style.module.css'

const ProjectCard = ({ name, img,  description }) => {
    return (
      <li className={styles.container}>
        <div className={styles.div}>
          <h3>{name}</h3>
          <p>Descrição do projeto</p>
          <button className={styles.button}>Saiba mais</button>
        </div>
        <div className={styles.image}>
          <img src={img} alt={description} />
        </div>
      </li>
    );
  };

  export default ProjectCard