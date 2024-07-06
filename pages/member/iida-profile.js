import Common from "../common/common";
import styles from "/styles/home.module.css";
import imageStyles from "/styles/common.module.css";

export async function getServerSideProps() {
    // サーバーサイドでデータを取得するための処理を記述
    const data = {
        name: '飯田　光貴',
        age: 22,
        occupation: 'エンジニア'
    };

    // データをpropsとしてページコンポーネントに渡す
    return {
        props: {
            initialData: data
        }
    };
}

export default function IidaProfile({ initialData }) {
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
                            <span className={styles.itemValue}>飯田　光貴</span>
                        </div>
                        <div className={styles.profileItem}>
                            <span className={styles.itemLabel}>生年月日:</span>
                            <span className={styles.itemValue}>2001年08月24日</span>
                        </div>
                        <div className={styles.profileItem}>
                            <span className={styles.itemLabel}>出身:</span>
                            <span className={styles.itemValue}>愛知県</span>
                        </div>
                    </div>
                </div>
                <div className={styles.education}>
                    <div className={styles.educationHeader}>
                        <h2>学歴</h2>
                    </div>
                    <div className={styles.educationBody}>
                        <div className={styles.educationItem}>
                            <span className={styles.itemLabel}>学校名:</span>
                            <span className={styles.itemValue}>三重大学</span>
                        </div>
                        <div className={styles.educationItem}>
                            <span className={styles.itemLabel}>学部・学科:</span>
                            <span className={styles.itemValue}>工学部 情報工学コース</span>
                        </div>
                        <div className={styles.educationItem}>
                            <span className={styles.itemLabel}>卒業年月:</span>
                            <span className={styles.itemValue}>2024年3月</span>
                        </div>
                    </div>
                </div>
                <div className={styles.workExperience}>
                    <div className={styles.workExperienceHeader}>
                        <h2>職歴</h2>
                    </div>
                    <div className={styles.workExperienceBody}>
                        <div className={styles.workExperienceItem}>
                            <span className={styles.itemLabel}>会社名:</span>
                            <span className={styles.itemValue}>株式会社豊田自動織機ITソリューションズ</span>
                        </div>
                        <div className={styles.workExperienceItem}>
                            <span className={styles.itemLabel}>期間:</span>
                            <span className={styles.itemValue}>2024年4月 - 現在</span>
                        </div>
                    </div>
                </div>
            </div>
        </Common>
    );
}