import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import boot from "../components/bootstrap.css";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState([]);
    const {id} = useParams()
    const getMovie = async() => {
        const json = await(
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
                )
        ).json();
    
        setInfo(json.data.movie);
        setLoading(false);
        };
    useEffect(() => {
        getMovie()
    }, [])

    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span></span>
                </div>
            ) : (
                <div className={styles.info}>
                    <div className={styles.movie}>
                        <img src={info.large_cover_image} alt={info.title} className={styles.movie__img}/>
                        <div>
                            <h2 className={styles.movie__title}>{info.title}</h2>
                            <h3 className={styles.movie__year}>{info.year} | {info.runtime} minutes</h3>
                            <ul className={styles.movie__genres}>
                                {(info.genres).map((r) => (
                                    <li key={r}>{r} /</li>
                                ))}
                            </ul>
                            <p className={boot.text_muted}>{info.description_full}</p>

                        </div>
                    </div>
                </div>
            )};
        </div>
        );
}

export default Detail;