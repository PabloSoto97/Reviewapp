import Header from "../components/Header";
import styles from "./MushoMultimediaCritique.module.css";
import Encabezado from "../components/Encabezado/Encabezado";
import TopReview from "../components/TopReview/TopReview";
import Opiniones from "../components/Opiniones/Opiniones";
import Fotter from "../components/Fotter/Fotter";
const MushoMultimediaCritique = () => {
  return (
    <div className={styles.mushoMultimediaCritique}>
      <Header />
      <Encabezado></Encabezado>
      <TopReview></TopReview>
      <Opiniones></Opiniones>
      <Fotter></Fotter>
    </div>
  );
};

export default MushoMultimediaCritique;
