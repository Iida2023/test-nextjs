import Common from "../common/common";
import styles from "/styles/home.module.css";
import imageStyles from "/styles/common.module.css";

export async function getServerSideProps() {
    const data = {
        name: "Koki Iida",
        birthdate: "2001年08月24日",
        location: "愛知県",
        skills: ["JavaScript", "React", "Next.js", "Node.js"],
        hobbies: ["読書", "旅行", "睡眠"],
        bio: "従業員番号はD0660"
    };

    return { props: { data } };
}

export default function Profile({ data }) {
    return (
        <Common>
            <div className={styles.resume}>
                <div className={styles.header}>
                    <h1>My Profile</h1>
                    <img src="/image/iida.png" alt="Iida-Profile" className={imageStyles.roundImage} />
                </div>
                <div className={styles.profile}>
                    <div className={styles.profileHeader}>
                        <h2>基本情報</h2>
                    </div>
                    <div className={styles.profileBody}>
                        <div className={styles.profileItem}>
                            <span className={styles.itemLabel}>氏名:</span>
                            <span className={styles.itemValue}>{data.name}</span>
                        </div>
                        <div className={styles.profileItem}>
                            <span className={styles.itemLabel}>生年月日:</span>
                            <span className={styles.itemValue}>{data.birthdate}</span>
                        </div>
                        <div className={styles.profileItem}>
                            <span className={styles.itemLabel}>出身:</span>
                            <span className={styles.itemValue}>{data.location}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.profile}>
                    <div className={styles.profileHeader}>
                        <h2>自己紹介</h2>
                    </div>
                    <div className={styles.profileBody}>
                        <div className={styles.profileItem}>
                            <span className={styles.itemValue}>{data.bio}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.profile}>
                    <div className={styles.profileHeader}>
                        <h2>趣味</h2>
                    </div>
                    <div className={styles.profileBody}>
                        {data.hobbies.map((hobby, index) => (
                            <div key={index} className={styles.profileItem}>
                                <span className={styles.itemValue}>{hobby}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.profile}>
                    <div className={styles.profileHeader}>
                        <h2>学習済みプログラミング言語</h2>
                    </div>
                    <div className={styles.profileBody}>
                        {data.skills.map((skill, index) => (
                            <div key={index} className={styles.profileItem}>
                                <span className={styles.itemValue}>{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Common>
    );
}
